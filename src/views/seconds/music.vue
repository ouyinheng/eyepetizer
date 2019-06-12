<template>
  <div class="musicplay">
    <div class="blur" :style="{
    backgroundImage: `url(${info.songs[0].al.picUrl})`
  }"></div>
    <header class="header font-lg">
      <mu-button icon small color="white" @click="back">
        <span class="iconfont icon-back font-lg"></span>
      </mu-button>
      <span style="color:white;z-index:1;">{{name}}</span>
    </header>
    <section class="section" v-if="getNowPlay==-1">
      <div class="albumImage">
        <!-- <img src="logo.png" alt> -->
      </div>
      <div style="color:#b4b4b4;text-align:center;margin-top: 20px;">您暂时没有播放音乐</div>
      <div style="color:#ff4545;text-align:center;margin-top: 20px;">
        <span>寻找音乐</span>
        <span class="iconfont icon-more"></span>
      </div>
    </section>
    <section
      class="section"
      v-if="getNowPlay!==-1"
      style="display:flex;flex-direction:column;justify-content:space-around;"
    >
      <transition name="jackInTheBox" mode="out-in">
        <div class="albumImage" key="1" @click="lyricshow=!lyricshow" v-if="lyricshow">
          <img :src="info.songs[0].al.picUrl" :class="{play: getPlay}" alt>
        </div>
        <div class="albumLyric" key="2" v-else @click="lyricshow=!lyricshow">
          <div>
            <p
              v-for="(item, index) of lyric.lrc.lyric"
              :key="index"
              style="text-align:center;padding: 5px 0;"
            >{{item}}</p>
          </div>
        </div>
      </transition>
      <div class="flex-column around">
        <div>
          <mu-slider class="demo-slider" v-model="slide" color="#ff4545"></mu-slider>
          <div
            class="flex around -center font-lg"
            style="width: 90%;margin: 20px auto;color:white;"
          >
            <span class="iconfont icon-zhuanfa" @click="openBotttomSheet"></span>
            <span class="iconfont icon-xihuan"></span>
            <span class="iconfont icon-pinglun"></span>
            <span class="iconfont icon-xiazai1"></span>
          </div>
        </div>
        <div class="flex around -center mt-1">
          <span class="iconfont icon-prev color-red" style="font-size: 3rem;" @click="prev"></span>
          <span
            :class="{
            'iconfont':true, 
            'icon-bofang1':!getPlay,
            'icon-zanting1': getPlay,
            'color-red': true,
            'font-xl': true
          }"
            style="font-size: 4.8rem;"
            @click="changePlayStatus"
          ></span>
          <span
            class="iconfont icon-xiayishou color-red font-lg"
            style="font-size: 2.3rem;"
            @click="next"
          ></span>
        </div>
      </div>
    </section>
    <mu-bottom-sheet :open.sync="open">
      <mu-list>
        <mu-sub-header>Select One</mu-sub-header>
        <div style="max-height: 300px;overflow:auto;">
          <mu-list-item
            button
            v-for="(item, index) in getPlayList"
            :key="index"
            @click="changePlay(item)"
          >
            <mu-list-item-title
              :style="{
              color: index==getNowPlay?'#ff4545': 'black',
              fontSize: '1rem'
            }"
            >{{item.name}}</mu-list-item-title>
          </mu-list-item>
        </div>
      </mu-list>
    </mu-bottom-sheet>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "music",
  components: {},
  computed: {
    ...mapGetters(["getPlayList", "getNowPlay", "getPlay"])
  },
  data() {
    return {
      info: {
        songs: [{ al: {} }]
      },
      url: "",
      name: "",
      slide: 10,
      open: false,
      lyric: {},
      lyricshow: true
    };
  },
  watch: {
    getNowPlay() {
      this.getMusicInfo();
      this.getGc();
    }
  },
  methods: {
    ...mapActions(["getMusicDetails", "getMusicLyric"]),
    ...mapMutations(["setPlay", "setNowPlay"]),
    back() {
      this.$router.back();
    },
    getMusicInfo() {
      this.getMusicDetails(this.getPlayList[this.getNowPlay].id).then(res => {
        this.info = res;
        this.name = res.songs[0].name;
        this.url = `https://music.163.com/song/media/outer/url?id=${
          this.getPlayList[this.getNowPlay].id
        }.mp3 `;
      });
    },
    changePlayStatus() {
      if (this.getPlay) {
        this.setPlay(false);
      } else {
        this.setPlay(true);
      }
    },
    prev() {
      const length = this.getPlayList.length;
      let nowplay = this.getNowPlay;
      if (nowplay == 0) {
        nowplay = length;
      }
      this.setNowPlay(nowplay - 1);
    },
    next() {
      const length = this.getPlayList.length;
      let nowplay = this.getNowPlay + 1;
      if (nowplay >= length) {
        nowplay = 0;
      }
      this.setNowPlay(nowplay);
    },
    closeBottomSheet() {
      this.open = false;
    },
    openBotttomSheet() {
      this.open = true;
    },
    changePlay(id) {
      const index = this.getPlayList.indexOf(id);
      this.setNowPlay(index);
    },
    parseLyric(lrc) {
      var lyrics = lrc.split("\n");
      var lrcObj = {};
      for (var i = 0; i < lyrics.length; i++) {
        var lyric = decodeURIComponent(lyrics[i]);
        var timeReg = /\[\d*:\d*((\.|\:)\d*)*\]/g;
        var timeRegExpArr = lyric.match(timeReg);
        if (!timeRegExpArr) continue;
        var clause = lyric.replace(timeReg, "");
        for (var k = 0, h = timeRegExpArr.length; k < h; k++) {
          var t = timeRegExpArr[k];
          var min = Number(String(t.match(/\[\d*/i)).slice(1)),
            sec = Number(String(t.match(/\:\d*/i)).slice(1));
          var time = min * 60 + sec;
          lrcObj[time] = clause;
        }
      }
      return lrcObj;
    },
    getGc() {
      this.getMusicLyric(this.getPlayList[this.getNowPlay].id).then(res => {
        console.log(res);
        this.lyric = res;
        res.lrc.lyric = this.parseLyric(res.lrc.lyric);
      });
    }
  },
  created() {
    if (this.getNowPlay == -1) return;
    this.getMusicInfo();
    this.getGc();
  }
};
</script>

<style lang="scss" scoped>
.musicplay {
  width: 100%;
  background-color: white;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 30px 0 0;
  position: relative;
  .blur {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    filter: blur(100px);
    background-position: center;
    background-size: cover;
    overflow: hidden;
    background-repeat: no-repeat;
    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      background: linear-gradient(
        direction,
        rgba(0, 0, 0, 0.5),
        rgba(255, 255, 255, 0.5),
        rgba(0, 0, 0, 0.5)
      );
      background-attachment: fixed;
      z-index: -1;
    }
  }
  .color-red {
    color: white;
  }
  .font-xl {
    font-size: 3rem;
  }
  .header {
    width: 100%;
    // box-sizing: content-box;
    height: 40px;
    line-height: 40px;
    padding: 0px 10px 0;
    display: flex;
    align-items: center;
  }
  .section {
    position: absolute;
    width: 100%;
    top: 70px;
    bottom: 0;
    left: 0;
    box-sizing: border-box;
    padding: 0px 10px 20px;
    .albumImage,
    .albumLyric {
      width: 17rem;
      height: 17rem;
      overflow: hidden;
      margin: 0 auto;
      background-color: grey;
    }
    .albumLyric {
      background-color: transparent;
      color: gainsboro;
      line-height: 1.3rem;
      overflow: auto;
      font-size: 1.2rem;
    }
    img {
      width: 100%;
      height: 100%;
      z-index: 10;
      -o-object-fit: cover;
      object-fit: cover;
      -o-object-position: 50% 50%;
      object-position: 50% 50%;
      border-radius: 0.5rem;
      background-color: transparent;
    }
  }
  .play {
    // animation: showplay 10s linear infinite;
  }
}

.mu-bottom-sheet {
  border-radius: 20px 20px 0 0 !important;
}
@keyframes showplay {
  0% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(90deg);
  }

  50% {
    transform: rotate(180deg);
  }

  75% {
    transform: rotate(270deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>

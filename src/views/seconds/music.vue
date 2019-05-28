<template>
  <div class="musicplay">
    <header class="header font-md">
      <mu-button icon small color="black" @click="back">
        <span class="iconfont icon-back font-lg"></span>
      </mu-button>
      <span>{{name}}</span>
      <span class>...</span>
    </header>
    <section class="section" v-if="getNowPlay==-1">
      <img src="logo.png" alt>
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
      <img :src="info.songs[0].al.picUrl" :class="{play: getPlay}" alt>
      <div>
        <mu-slider class="demo-slider" v-model="slide" color="#ff4545"></mu-slider>
        <div class="flex around -center font-lg" style="width: 70%;margin: 20px auto 0;">
          <span class="iconfont icon-zhuanfa"></span>
          <span class="iconfont icon-xihuan"></span>
          <span class="iconfont icon-pinglun"></span>
          <span class="iconfont icon-xiazai1"></span>
        </div>
      </div>
      <div class="flex around -center font-lg">
        <span class="iconfont icon-prev color-red font-xl" style="font-size: 3.8rem;" @click="prev"></span>
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
        <span class="iconfont icon-xiayishou color-red font-xl" @click="next"></span>
      </div>
    </section>
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
      slide: 10
    };
  },
  watch: {
    getNowPlay() {
      this.getMusicInfo();
    }
  },
  methods: {
    ...mapActions(["getMusicDetails"]),
    ...mapMutations(["setPlay", "setNowPlay"]),
    back() {
      this.$router.back();
    },
    getMusicInfo() {
      this.getMusicDetails(this.getPlayList[this.getNowPlay]).then(res => {
        this.info = res;
        this.name = res.songs[0].name;
        this.url = `https://music.163.com/song/media/outer/url?id=${
          this.getPlayList[this.getNowPlay]
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
    }
  },
  created() {
    if (this.getNowPlay == -1) return;
    this.getMusicInfo();
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
  .color-red {
    color: #ff4545;
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
    justify-content: space-between;
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
    img {
      width: 50%;
      display: block;
      background-color: transparent;
      margin: 50px auto 0;
      border-radius: 50%;
      box-shadow: 0 1px 70px 1px #ff4545;
    }
  }
  .play {
    animation: showplay 10s linear infinite;
  }
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

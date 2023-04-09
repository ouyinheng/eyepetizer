<template>
  <div
    class="papersonalfm"
    :style="`background-image: url(${nowMusic.album.picUrl.replace(
      /^http:/,
      'https:'
    )}?param=300y300)`"
  >
    <div class="gray" />
    <img
      class="pic"
      :src="nowMusic.album.picUrl.replace(/^http:/, 'https:') + '?param=300y300'"
      alt="pic"
    />
    <div class="data">
      <div class="info">
        <span class="name text-hidden" @click="go">{{ nowMusic.name }}</span>
        <AllArtists class="text-hidden" :artistsData="nowMusic.artists" />
      </div>
      <div class="controls">
        <mu-icon class="state" size="46" :value="isPause" @click="fmPlayOrPause" />
        <mu-icon class="next" size="30" value="skip_next" @click="fmNext" />
        <div class="radio">
          <div class="icon">
            <mu-icon size="20" value="radio" />
            <span>私人FM</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AllArtists from "@/components/DataList/AllArtists.vue";
import picImg from "@/assets/pic.jpg";
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      picImg: picImg,
      showIndex: 0
    };
  },
  components: {
    AllArtists
  },
  computed: {
    ...mapGetters(["getPlay", "getFmList", "getPlayList", "getNowPlay"]),
    isPause() {
      return this.getPlay ? "pause_circle_filled" : "play_circle_filled";
    },
    nowMusic() {
      return this.getFmList?.length ? this.getFmList[this.showIndex] : null;
    }
  },
  methods: {
    ...mapActions(["getPersonalFm"]),
    ...mapMutations(["setPlay", "setNowPlay", "setPlayList"]),
    // 私人 fm 播放与暂停
    fmPlayOrPause() {
      if (!this.getPlayList?.length) {
        this.setPlayList(this.getFmList);
      }
      this.setPlay(!this.getPlay);
      if (this.getNowPlay === -1) {
        this.setNowPlay(0);
      }
    },
    async fmNext() {
      const length = this.getPlayList.length;
      let nowplay = this.getNowPlay + 1;
      if (nowplay >= length) {
        await this.getMusic();
        this.setPlayList(this.getFmList);
        nowplay = 0;
      }
      setTimeout(() => {
        this.setNowPlay(nowplay);
        this.showIndex = nowplay;
      });
    },
    go() {},
    async getMusic() {
      await this.getPersonalFm();
    }
  },
  mounted() {
    if (this.getFmList?.length) return;
    this.getMusic();
  }
};
</script>

<style lang="scss" scoped>
.papersonalfm {
  position: relative;
  display: flex;
  align-items: center;
  padding: 20px;
  height: 200px;
  border-radius: 8px;
  box-sizing: border-box;
  overflow: hidden;
  color: #ffffff;
  background-repeat: no-repeat;
  background-size: 150% 150%;
  background-position: center;
  z-index: 0;
  transition: all 0.3s;
  .gray {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2509803922);
    backdrop-filter: blur(80px);
    z-index: -1;
  }
  .pic {
    height: 100%;
    border-radius: 8px;
    margin-right: 16px;
  }
  .data {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .info {
      width: 100%;
      box-sizing: border-box;
      .name {
        font-size: 24px;
        font-weight: bold;
        -webkit-line-clamp: 2;
        cursor: pointer;
      }
      .artists {
        flex-wrap: nowrap;
        :deep(.artist) {
          display: inline-block;
          white-space: nowrap;
          .name {
            color: #ffffffcc;
            &:hover {
              color: #fff;
            }
          }
        }
      }
    }
    .controls {
      display: flex;
      flex-direction: row;
      align-items: center;
      .state {
        cursor: pointer;
        transform: scale(1);
        transition: all 0.3s;
        &:hover {
          transform: scale(1.1);
        }
        &:active {
          transform: scale(1);
        }
      }
      .next,
      .dislike {
        cursor: pointer;
        margin: 0 4px;
        padding: 4px;
        border-radius: 8px;
        transform: scale(1);
        transition: all 0.3s;
        &:hover {
          background-color: #ffffff30;
        }
        &:active {
          transform: scale(0.9);
        }
      }
      .dislike {
        padding: 9px;
      }
      .radio {
        opacity: 0.6;
        margin-left: auto;
        margin-top: auto;
        margin-right: 4px;
        transform: translateY(4px);
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        font-size: 16px;
        font-weight: bold;
        pointer-events: none;
        z-index: -1;
        @media (max-width: 490px) {
          position: absolute;
          right: 20px;
          bottom: 20px;
        }
        .icon {
          display: flex;
          align-items: center;
          .n-icon {
            margin-right: 6px;
            transform: translateY(-1px);
          }
        }
        .tip {
          font-size: 12px;
          font-weight: normal;
          display: block;
        }
      }
    }
  }
  @media (max-width: 500px) {
    .pic {
      height: 96px;
      position: absolute;
      top: 20px;
      left: 20px;
    }
    .data {
      .info {
        padding-left: 116px;
        .name {
          font-size: 22px;
        }
      }
    }
  }
}
</style>

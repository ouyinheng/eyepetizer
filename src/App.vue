<template>
  <div id="app">
    <keep-alive>
      <transition name="scale" mode="out-in">
        <router-view class="changeRouter" />
      </transition>
    </keep-alive>

    <audio :src="url" ref="audio"></audio>
  </div>
</template>
<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "app",
  data() {
    return {
      transitionName: "",
      url: ""
    };
  },
  computed: {
    ...mapGetters(["getNowPlay", "getPlayList", "getPlay"])
  },
  watch: {
    $route(to, from) {
      if (to.meta.name === "slide-left") {
        this.transitionName = "slide-left";
      } else {
        this.transitionName = "slide-right";
      }
    },
    getNowPlay() {
      this.url = `https://music.163.com/song/media/outer/url?id=${
        this.getPlayList[this.getNowPlay].id
      }.mp3 `;
      this.$nextTick(() => {
        this.$refs.audio.play();
        this.setPlay(true);
      });
    },
    getPlay(val) {
      val ? this.$refs.audio.play() : this.$refs.audio.pause();
    }
  },
  methods: {
    ...mapMutations(["setPlay", "setNowPlay"]),
    ...mapActions([])
  },
  mounted() {
    this.$refs.audio.addEventListener(
      "ended",
      () => {
        const length = this.getPlayList.length - 1;
        let nowplay = this.getNowPlay + 1;
        if (nowplay >= length) {
          nowplay = 0;
        }
        this.setNowPlay(nowplay);
      },
      false
    );
  },
  created() {
    if (this.getNowPlay !== -1)
      this.url = `https://music.163.com/song/media/outer/url?id=${
        this.getPlayList[this.getNowPlay].id
      }.mp3 `;
  }
};
</script>

<style lang="scss" scoped>
#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",
    "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #26272a;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  .changeRouter {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
  }
  // 路由跳转动画
  .scale-enter-active,
  .scale-leave-active {
    transition: all 0.2s ease;
  }

  .scale-enter-from,
  .scale-leave-to {
    opacity: 0;
    transform: scale(0.98);
  }
  .slide-left-enter,
  .slide-right-leave-active {
    transform: translate(100vw, 0);
  }

  .slide-left-leave-active,
  .slide-right-enter {
    transform: translate(0px, 0);
  }
}
</style>

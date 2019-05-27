<template>
  <div class="video">
    <video ref="video" :src="src" :poster="poster" @click="changeControl"></video>
    <mu-fade-transition>
      <div class="controls" v-if="showControls" @click="changeControl">
        <div class="content">content</div>
        <span :class="['player', 'iconfont', player]" @click.stop="changePlayingStatus"></span>
        <footer class="footer">
            <div>{{parseInt(size)}}</div>
            <mu-slider v-model="size" :min="0" :step="1" :max="100" color="#30c27c" @change="setSize"/>
            <div>00:00</div>
            <div
              style="margin-left: 5px;display:inline-block;font-size:1rem;"
              class="iconfont icon-quanping"
              @click.stop="fullScreen"></div>
        </footer>
      </div>
    </mu-fade-transition>
  </div>
</template>

<script>
import {debounce} from '@/config/util.js';
import { setInterval, clearInterval, setTimeout, clearTimeout } from 'timers';
export default {
  name: "ovideo",
  data() {
    return {
      refs:null,
      poster:
        "http://img.kaiyanapp.com/ad34d6dcdc1a5330d15161f36c009499.jpeg?imageMogr2/quality/60/format/jpg",
      src:
        "http://baobab.kaiyanapp.com/api/v1/playUrl?vid=14416&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss&f=iphone&u=&vc=0",
      player: 'icon-bofang',
      size: 0,
      showControls: true,
      intelvalId: null,
      setTimeoutId: null,
      sout: null
    };
  },
  computed: {
    currentTime() {
      return this.refs.currentTime
    }
  },
  methods: {
    // 更改播放状态
    changePlayingStatus() {
      if(this.player === 'icon-bofang') {
        this.player = 'icon-zanting';
        this.play();
      } else {
        this.player = 'icon-bofang';
        this.pause();
      }
    },
    // 播放
    play() {
      this.refs.play();
      this.showControls = true;
      debounce(this.hidenControls,3000,false);
      this.getCurrentTime();
    },
    // 暂停
    pause() {
      this.refs.pause();
      debounce(this.hidenControls,3000,false);
      clearInterval(this.intelvalId)
    },
    // 3秒后自动隐藏控制条
    hidenControls() {
      this.showControls = false;
    },
    // 显示或隐藏控制条
    changeControl() {
      this.showControls = !this.showControls;
    },
    // 获取当前播放进度
    getCurrentTime() {
      this.size = this.refs.currentTime;
      this.intelvalId = setInterval(() => {
        this.size = this.refs.currentTime;
      }, 1000)
    },
    setSize(size) {
      this.refs.currentTime = size;
      this.size = size;
      this.play();
    },
    fullScreen() {
      const element = this.refs;
      if(element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen();//进入全屏
      } else if(element.mozRequestFullScreen) {
        element.mozRequestFullScreen()
      } else if(element.requestFullscreen) {
        element.requestFullscreen();
      }
      // // Webkit
      // element.webkitRequestFullScreen();//进入全屏
      // document.webkitCancelFullScreen();//退出全屏

      // // Firefox
      // element.mozRequestFullScreen();
      // document.mozCancelFullScreen();
      
      // // W3C 
      // element.requestFullscreen();
      // document.exitFullscreen();
    }
  },
  mounted() {
    this.refs = this.$refs.video;
    this.refs.onwaiting = function() {
      // console.log('loading')
    }
  }
};
</script>


<style lang="scss" scoped>
.video {
  width: 100%;
  position: relative;
  video {
    width: 100%; 
    height: 100%; 
    object-fit: fill;
    margin: 0;
    padding: 0;
  }
  .controls {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,.3);
    z-index: 10;
    .content {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      padding: 10px;
      color: white;
      font-size: 1.2rem;
      z-index: 11;
    }
    .player {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 3rem;
      color: white;
      z-index: 11;
    }
    .footer {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 11;
      color: white;
      font-size: 1.0rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 5px;
      .mu-slider {
        margin: 0 10px;
      }
    }
  }
}
</style>

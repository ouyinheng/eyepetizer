<template>
  <div
    class="o-header flex between -center"
    :style="{
      top:top+'px',
      backgroundColor: color
    }"
  >
    <div class="blurimg" :style="{
      backgroundImage: tp?`url(${img})`:''
    }"></div>
    <mu-button icon small color="white" @click="back">
      <span class="iconfont icon-back font-lg" :style="`color: ${textColor}`"></span>
    </mu-button>
    <p class="font-lg" style="color: white;position:relative;z-index:111;">{{title}}</p>
    <p style="padding: 0 10px;"></p>
  </div>
</template>

<script>
export default {
  name: "o-header",
  props: {
    top: {
      default: 0
    },
    color: {
      default: "transparent"
    },
    title: {
      default: ""
    },
    textColor: {
      default: "white"
    },
    img: {
      type: String,
      default: ""
    },
    tp: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  methods: {
    back() {
      this.$router.back();
    }
  }
};
</script>

<style lang="scss" scoped>
.o-header {
  width: 100%;
  height: 80px;
  line-height: 100px;
  background-color: transparent;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  overflow: hidden;
  .blurimg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    bottom: 0;
    background-size: auto;
    filter: blur(30px);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    // background-color: rgba(0, 0, 0, .5);
    z-index: 0;
  }

  padding: {
    top: 30px;
    left: 10px;
    right: 10px;
  }
  box-sizing: border-box;
  transition: all 0.3s;
}
</style>

<template>
  <div class="o-header flex between -center" :style="`top:${top}px;backgroundColor:${color}`">
    <mu-button icon small color="white" @click="back">
      <span class="iconfont icon-back font-lg" :style="`color: black`"></span>
    </mu-button>
    <p class="font-md">{{title}}</p>
    <p></p>
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
      default: 'transparent'
    },
    title: {
      default: ''
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
  padding: {
    top: 30px;
    left: 10px;
    right: 10px;
  };
  box-sizing: border-box;
  transition: all .3s;
}
</style>

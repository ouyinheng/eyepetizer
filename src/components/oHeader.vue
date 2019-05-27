<template>
  <div class="o-header" :style="`top:${top}px`">
    <mu-button icon small color="white" @click="back">
      <span class="iconfont icon-back font-lg" :style="`color: ${color}`"></span>
    </mu-button>
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
      default: 'white'
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
  height: 50px;
  background-color: transparent;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}
</style>

<template>
  <transition name="fade">
    <div class="loading" v-if="loading">
      <div class="loading-group" v-if="kind==1">
        <span class="span"></span>
        <span class="span"></span>
        <span class="span"></span>
        <span class="span"></span>
        <span class="span"></span>
        <span class="span"></span>
      </div>
      <div v-if="kind==2">
        <div class='cu-load load-modal'>
          <!-- <img src='/images/logo.png' class='png'/> -->
          <div class='gray-text'>加载中...</div>
        </div>
      </div>
    </div>
  </transition>
</template>


<script>
export default {
  name: "Loading",
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    kind: {
      type: Number,
      default: 1
    }
  }
};
</script>

<style lang="scss" scoped>
/* components/oloading.wxss */
.loading {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .loading-group {
    width: 80px;
    height: 40px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .span {
      display: inline-block;
      width: 8px;
      height: 100%;
      border-radius: 4px;
      background: #ff4545;
      animation: loading 1s ease infinite;
      &:nth-child(2) {
        animation-delay: 0.2s;
        height: 90%;
      }
      &:nth-child(3) {
        animation-delay: 0.4s;
        height: 80%;
      }
      &:nth-child(4) {
        animation-delay: 0.6s;
        height: 70%;
      }
      &:nth-child(5) {
        animation-delay: 0.8s;
        height: 80%;
      }
    }
    @keyframes loading {
      0%,
      100% {
        height: 40px;
        background: #ff4545;
      }
      50% {
        height: 70px;
        margin: -15px 0;
        background: #ff6686;
      }
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter {
  opacity: 1;
}
.fade-leave-to {
  opacity: 0;
}
</style>


<template>
  <transition name="fade">
    <div class="loading" v-if="loading">
      <div class="loading-group">
        <span class="span"></span>
        <span class="span"></span>
        <span class="span"></span>
        <span class="span"></span>
        <span class="span"></span>
        <span class="span"></span>
      </div>
    </div>
  </transition>
</template>


<script>
export default {
  name: "loading",
  props: {
    loading: {
      type: Boolean,
      default: false
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
}
.loading-group {
  width: 80px;
  height: 40px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.loading-group .span {
  display: inline-block;
  width: 8px;
  height: 100%;
  border-radius: 4px;
  background: #ff4545;
  animation: loading 1s ease infinite;
}
.loading-group .span:nth-child(2) {
  animation-delay: 0.2s;
  height: 90%;
}
.loading-group .span:nth-child(3) {
  animation-delay: 0.4s;
  height: 80%;
}
.loading-group .span:nth-child(4) {
  animation-delay: 0.6s;
  height: 70%;
}
.loading-group .span:nth-child(5) {
  animation-delay: 0.8s;
  height: 80%;
}
.hide {
  animation: loading 0.5s;
  animation-fill-mode: forwards;
  display: none;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter  {
  opacity: 1;
}
.fade-leave-to {
  opacity: 0;
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
</style>


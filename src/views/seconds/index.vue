<template>
  <div class="seconds">
    <section>
      <transition :name="transitionName">
        <keep-alive>
          <router-view class="Router"></router-view>
        </keep-alive>
      </transition>
    </section>
  </div>
</template>

<script>
export default {
  name: "seconds",
  data() {
    return {
      transitionName: ""
    };
  },
  watch: {
    $route(to, from) {
      if (to.meta.weight < from.meta.weight) {
        this.transitionName = "slide-right";
      } else {
        this.transitionName = "slide-left";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.seconds {
}
.Router {
  position: absolute;
  width: 100%;
  transition: all 0.3s ease;
  top: 0px;
}
.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100% 0);
}
</style>

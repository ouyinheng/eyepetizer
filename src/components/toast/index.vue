<template>
  <transition name="fade">
    <div class="toast" :class="type" v-if="visible">
      <i class="icon-type iconfont" :class="'icon-'+type"></i>
      <div class="content">
        {{content}}
        <i v-if="hasClose" class="btn-close iconfont icon-close" @click="visible=false"></i>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "toast",
  data() {
    return {
      content: "",
      time: 3000,
      visible: false,
      type: "info", //'success','warning','error'
      hasClose: false
    };
  },
  mounted() {
    this.close();
  },
  methods: {
    close() {
      window.setTimeout(() => {
        this.visible = false;
      }, this.time);
    }
  }
};
</script>
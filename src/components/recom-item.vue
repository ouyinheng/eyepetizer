<template>
  <div class="songlist-item" @click="rowClick">
    <img class="mb-2" v-lazy="value.picUrl||value.coverImgUrl" :alt="value.name">
    <span class="font-sm color-p3 intro">{{value.name}}</span>
    <div class="songlist-intro pl-2 pt-1" style="color:#ffffff" v-if="count">
      <span class="iconfont icon-icon-"></span>
      <span>{{parseInt((value.playcount||value.playCount)/10000)}}万</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "songlist-item",
  props: {
    value: {},
    count: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    rowClick() {
      this.$emit('row-click')
    }
  }
};
</script>

<style lang="scss" scoped>
.songlist-item {
  width: 100%;
  margin-bottom: 10px;
  overflow: hidden;
  position: relative;
  img {
    display: block;
    width: 100%;
    border-radius: 5px;
  }
  .songlist-intro {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: 30px;
    background-color: rgba(0, 0, 0, 0.1);
  }
  .intro {
    display: block;
    line-height: 1.3rem;
    overflow: hidden;
  }
}
</style>

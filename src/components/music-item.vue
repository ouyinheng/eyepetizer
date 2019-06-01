<template>
  <div class="music-item" @click="clickRow">
    <img class="music-cover" v-lazy="imgUrl">
    <div class="info">
      <div class="font-lg over-spot" style="width: 90%;padding: 5px 0;color: #26272a">{{title}}</div>
      <div
        style="color: #7e7e7e;box-sizing:border-box;width:90%;line-height:20px"
        class="over-spot font-md"
      >{{content}}</div>
    </div>
  </div>
</template>


<script>
export default {
  name: "music-item",
  props: ["imgUrl", "title", "content"],
  data() {
    return {};
  },
  methods: {
    clickRow() {
      this.$emit("click-row");
    }
  }
};
</script>

<style lang="scss" scoped>
.music-item {
  width: 100%;
  display: flex;
  // align-items: center;
  margin-bottom: 10px;
  .music-cover {
    width: 50px;
    min-width: 50px;
    height: 50px;
    min-height: 50px;
    border-radius: 5px;
  }
  .info {
    width: 100%;
    margin-left: 4px;
    box-sizing: border-box;
    padding: 0 4px;
  }
}
</style>

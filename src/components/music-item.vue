<template>
  <div class="music-item" @click="clickRow">
    <img class="music-cover" :src="imgUrl">
    <div class="info">
      <div class="font-md over-spot" style="width: 90%;padding: 5px 0;color: #26272a">{{title}}</div>
      <div
        style="color: #7e7e7e;box-sizing:border-box;width:90%;"
        class="over-spot font-sm"
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
    width: 40px;
    height: 40px;
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

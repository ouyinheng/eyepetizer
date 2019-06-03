<template>
  <div class="music-item" @click="clickRow">
    <img class="music-cover" v-lazy="imgUrl">
    <div class="info">
      <div class="font-lg over-spot" style="width: 90%;padding: 5px 0;color: #26272a">{{title.replace(getUserInfo.nickname+'喜欢的音乐', '我喜欢的音乐')}}</div>
      <div
        style="color: #7e7e7e;box-sizing:border-box;width:90%;line-height:20px"
        class="over-spot font-md"
      >{{content}}</div>
    </div>
  </div>
</template>


<script>
import {mapGetters} from 'vuex';
export default {
  name: "music-item",
  props: ["imgUrl", "title", "content"],
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['getUserInfo'])
  },
  methods: {
    clickRow() {
      this.$emit("click-row");
    }
  },
  created() {
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

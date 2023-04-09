<template>
  <div class="artists">
    <span class="artist mt-2" v-for="(item, index) in artistsData" :key="item">
      <span class="name" depth="3" v-html="item.name"></span>
      <span
        class="line"
        v-if="index != artistsData.length - 1 && artistsData[artistsData.length - 1]"
        >/</span
      >
    </span>
  </div>
</template>

<script>
export default {
  props: {
    // 歌手数据
    artistsData: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    jumpArtist() {}
  }
};
</script>

<style lang="scss" scoped>
.artists {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  .name {
    cursor: pointer;
    transition: all 0.3s;
  }
  .line {
    margin: 0 4px;
    opacity: 0.8;
  }
}
</style>

<template>
  <div class="paartists">
    <h3 class="title" prefix="bar">
      歌手推荐
      <mu-tabs class="tab" :default-value="-1" size="small" @update:value="tabChange">
        <mu-tab :name="-1"> 全部 </mu-tab>
        <mu-tab :name="7"> 华语 </mu-tab>
        <mu-tab :name="96"> 欧美 </mu-tab>
        <mu-tab :name="8"> 日本 </mu-tab>
        <mu-tab :name="16"> 韩国 </mu-tab>
      </mu-tabs>
      <span class="more" @click="router.push('/discover/artists?page=1')"> 更多 </span>
    </h3>
    <ArtistLists :listData="artistsData" :gridCollapsed="true" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ArtistLists from "@/components/DataList/ArtistLists.vue";
export default {
  data() {
    return {
      artistsData: []
    };
  },
  components: { ArtistLists },
  methods: {
    ...mapActions(["getArtistList"]),
    // 获取歌手数据
    getArtistListData(type = 1, area = 7, limit = 6) {
      this.getArtistList({ type, area, limit }).then((res) => {
        this.artistsData = [];
        if (res.code === 200) {
          res.artists.forEach((v) => {
            artistsData.push({
              id: v.id,
              name: v.name,
              cover: v.img1v1Url,
              size: v.musicSize
            });
          });
        }
      });
    },
    // Tab 切换
    tabChange(value) {
      this.artistsData = [];
      this.getArtistListData(-1, value);
    }
  },
  mounted() {
    this.getArtistListData();
  }
};
</script>

<style lang="scss" scoped>
.paartists {
  margin-top: 40px;
  padding: 0 4px;
  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 16px;
    .tab {
      width: auto;
      margin-right: auto;
      margin-left: 20px;
      @media (max-width: 440px) {
        display: none;
      }
      :deep(.mu-tabs-tab-pad) {
        width: 12px;
      }
    }
    .more {
      font-size: 14px;
      transition: all 0.3s;
      cursor: pointer;
      &::after {
        content: ">";
        margin-left: 6px;
      }
      &:hover {
        color: #ff4545;
      }
    }
  }
}
</style>

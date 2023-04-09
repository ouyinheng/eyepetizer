<template>
  <div class="home">
    <div class="header-top">
      <h3 class="font-lg">发现音乐</h3>
      <div class="font-lg">
        <span @click="toSearch()">
          <md-icon class="md-primary">search</md-icon>
        </span>
        <span class="iconfont icon-diantai1 ml-4 mr-4"></span>
        <span class="iconfont icon-tongzhi"></span>
      </div>
    </div>
    <section class="section">
      <PaDailySongs title="每日推荐" tip="" />
      <div class="flex" style="margin: 10px 0">
        <div
          class="flex -center"
          v-for="(item, index) in iconlist"
          :key="index"
          @click="jump(item.url)"
        >
          <mu-avatar :color="item.color">
            <span :class="['iconfont', item.icon]"></span>
          </mu-avatar>
          <div style="margin-top: 5px">{{ item.title }}</div>
        </div>
      </div>
      <div class="mt-6" v-if="false">
        <h3 class="h3 font-lg between">
          每日推荐
          <span class="iconfont icon-more"></span>
        </h3>
        <div class="mvlist mt-2">
          <div v-for="(item, index) in mvList" :key="index" style="width: 49%">
            <recom-item :value="item" :count="false" @row-click="toMcInfo(item.id)"></recom-item>
          </div>
        </div>
      </div>
      <div class="mt-6" v-if="getHighqualityList.length">
        <h3 class="h3 font-lg between" @click="jump('/playlists')">
          精选歌单
          <span class="iconfont icon-more"></span>
        </h3>
        <div class="songlist mt-2">
          <div v-for="(item, index) in getHighqualityList" :key="index" style="width: 32%">
            <recom-item :value="item" @row-click="toSingListInfo(item.id)"></recom-item>
          </div>
        </div>
      </div>
      <div class="mt-6 mb-4" v-if="getHighqualityList.length">
        <h3 class="h3 font-lg between" @click="jump('/playlists')">
          歌手推荐
          <span class="iconfont icon-more"></span>
        </h3>
        <div class="songlist mt-2">
          <ArtistLists :listData="artistListsData" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import recomitem from "@/components/recom-item.vue";
import PaDailySongs from "@/components/PaDailySongs.vue";
import ArtistLists from "@/components/DataList/ArtistLists.vue";

export default {
  name: "home",
  computed: {
    ...mapGetters(["getRecommList", "getHighqualityList"]),
    recommList() {
      return this.getRecommList?.length ? this.getRecommList?.slice(0, 6) : [];
    }
  },
  components: {
    "recom-item": recomitem,
    PaDailySongs,
    ArtistLists
  },
  data() {
    return {
      songlist: [],
      dayRecomm: [],
      mvList: [],
      artistListsData: [],
      iconlist: [
        {
          title: "推荐",
          icon: "icon-meirituijian",
          color: "#FF6686",
          url: "/dayrecomm"
        },
        {
          title: "排行",
          icon: "icon-paihangbang",
          color: "#51B7FF",
          url: "/ranking"
        },
        {
          title: "歌单",
          icon: "icon-gedan",
          color: "#BC78FF",
          url: "/playlists"
        },
        {
          title: "电台",
          icon: "icon-diantai",
          color: "#FFD863",
          url: "/station"
        }
      ]
    };
  },
  methods: {
    ...mapActions(["getBanner", "getRecommend", "getRecomMv", "getHighquality", "getArtistList"]),
    goDayRecomm() {
      this.$router.push("/dayrecomm");
    },
    jump(url) {
      this.$router.push(url);
    },
    toSingListInfo(id) {
      this.$router.push({
        path: "/singlistinfo",
        query: {
          id
        }
      });
    },
    getMv() {
      this.getRecomMv().then((res) => {
        this.mvList = res.result;
      });
    },
    toMcInfo(id) {
      this.$router.push("/mvinfo");
    },
    toSearch() {
      this.$router.push("/search");
    },
    getArtistListData(type = 1, area = 7, limit = 3) {
      this.getArtistList({ type, area, limit }).then((res) => {
        this.artistListsData = [];
        if (res.code === 200) {
          res.artists.forEach((v) => {
            this.artistListsData.push({
              id: v.id,
              name: v.name,
              cover: v.img1v1Url,
              size: v.musicSize
            });
          });
        }
      });
    }
  },
  created() {
    // this.$toast.top('top');
    this.getBanner().then((res) => {
      this.songlist = res.banners;
    });
    this.getRecommend().then((res) => {
      this.dayRecomm = res.slice(0, 6);
      // this.dayRecomm = this.getRecommList.slice(0, 9);
    });
    this.getArtistListData();
    this.getMv();
    this.getHighquality();
  }
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  background-color: white;
  box-sizing: border-box;
  padding: 20px 20px 10px;
  .header-top {
    padding: 15px 0;
    font-weight: 550;
    display: flex;
    align-items: center;
    justify-content: space-between;
    div {
      span {
      }
    }
  }
  .banner {
    width: 100%;
    height: 150px;
    border-radius: 10px;
    img {
      width: 100%;
    }
  }
  .flex {
    display: flex;
    justify-content: space-around;
  }
  .-center {
    align-items: center;
    flex-direction: column;
  }
  .h3 {
    box-sizing: content-box;
    height: 20px;
    line-height: 20px;
    padding: 0 0 5px;
    font-weight: bold;
  }
  .section {
    width: 100%;
  }
  .songlist,
  .mvlist {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
</style>

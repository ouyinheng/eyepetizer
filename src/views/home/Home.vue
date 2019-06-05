<template>
  <div class="home">
    <div class="header-top">
      <h3 class="font-lg">发现音乐</h3>
      <div class="font-lg">
        <span class="iconfont icon-sousuo"></span>
        <span class="iconfont icon-diantai1 ml-4 mr-4"></span>
        <span class="iconfont icon-tongzhi"></span>
      </div>
    </div>
    <mu-carousel :hide-indicators="true" :hide-controls="true" class="banner">
      <mu-carousel-item v-for="(item, index) in songlist" :key="index">
        <img :src="item.pic">
      </mu-carousel-item>
    </mu-carousel>
    <section class="section">
      <div class="flex" style="margin: 10px 0;">
        <div class="flex -center" v-for="(item, index) in iconlist" :key="index" @click="jump(item.url)">
          <mu-avatar :color="item.color">
            <span :class="['iconfont', item.icon]"></span>
          </mu-avatar>
          <div style="margin-top: 5px;">{{item.title}}</div>
        </div>
      </div>
      <div class="mt-4">
        <h3 class="h3 font-md" @click="jump('/playlists')">
          精选歌单
          <span class="iconfont icon-more"></span>
        </h3>
        <div class="songlist mt-2">
          <div v-for="(item, index) in getRecommList.slice(0, 9)" :key="index" style="width:30%;">
            <recom-item :value="item" @row-click="toSingListInfo(item.id)"></recom-item>
          </div>
        </div>
      </div>
      <!-- <div class="mt-6">
        <h3 class="h3 font-ld" @click="goDayRecomm">
          每日推荐
          <span class="iconfont icon-more"></span>
        </h3>
        <mu-list textline="three-line">
          <musicitem
            v-for="(item, index) in dayRecomm"
            :key="index"
            :imgUrl="item.picUrl"
            :title="item.name"
            :content="item.copywriter"
          ></musicitem>
        </mu-list>
      </div>-->
    </section>
  </div>
</template>

<script>
// import { getRankList, getRecomm } from "@/config/recommend.request";
// import { recommed } from "@/api/qq.request";
import { mapActions, mapGetters } from "vuex";
import musicitem from "@/components/music-item.vue";
import recomitem from "@/components/recom-item.vue";

export default {
  name: "home",
  computed: {
    ...mapGetters(["getRecommList"])
  },
  components: {
    musicitem: musicitem,
    "recom-item": recomitem
  },
  data() {
    return {
      songlist: [],
      dayRecomm: [],
      iconlist: [
        {
          title: '推荐',
          icon: 'icon-meirituijian',
          color: "#FF6686",
          url: '/dayrecomm'
        },
        // {
        //   title: "歌手",
        //   icon: "icon-team",
        //   color: "#FF6686"
        // },
        {
          title: "排行",
          icon: "icon-paihangbang",
          color: "#51B7FF",
          url: '/ranking'
        },
        {
          title: "歌单",
          icon: "icon-gedan",
          color: "#BC78FF",
          url: '/playlists'
        },
        {
          title: "电台",
          icon: "icon-diantai",
          color: "#FFD863",
          url: '/station'
        }
      ]
    };
  },
  methods: {
    ...mapActions(["getBanner", "getRecommend"]),
    goDayRecomm() {
      this.$router.push("/dayrecomm");
    },
    jump(url) {
      this.$router.push(url)
    },
    toSingListInfo(id) {
      this.$router.push({
        path: '/singlistinfo',
        query: {
          id
        }
      })
    }
  },
  created() {
    this.$toast.top('top');
    this.getBanner().then(res => {
      this.songlist = res.banners;
    });
    this.getRecommend().then(res => {
      // this.dayRecomm = res.slice(0, 9);
      // this.dayRecomm = this.getRecommList.slice(0, 9);
    });
  }
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  background-color: white;
  box-sizing: border-box;
  padding: 20px 10px 10px;
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
    height: 120px;
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
    display: block;
    box-sizing: content-box;
    height: 20px;
    line-height: 20px;
    padding: 0 0 5px;
    font-weight: bold;
  }
  .section {
    width: 100%;
  }
  .songlist {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
</style>


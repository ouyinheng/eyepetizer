<template>
  <div class="singlistinfo" v-loading="loading">
    <o-header :top="0" :color="color"></o-header>
    <header class="header bg-grey">
      <div class="blurimg" :style="{
      backgroundImage: `url(${img})`
    }"></div>
      <div class="blur-mask">
        <div class="p-2 flex" style="width:100%;">
          <img :src="img" alt>
          <div class="p-2" style="color:white;">
            <h3 class="font-lg pb-2">{{info.name}}</h3>
            <p class="font-sm" style="color: gainsboro; line-height: 14px;height: 42px;overflow:hidden">{{info.description}}</p>
          </div>
        </div>
      </div>
    </header>
    <section class="p-2 section">
      <mu-list textline="three-line">
        <musicitem
          v-for="(item, index) in musicList"
          :key="index"
          :imgUrl="item.al.picUrl"
          :title="item.name"
          :content="item.al.name+'---'+(item.alia[0]||'')"
          @click-row="toMusic(item.id)"
        ></musicitem>
      </mu-list>
    </section>
    <!-- <o-loading :loading="loading"></o-loading> -->
    <!-- <mu-list>
      <mu-list-item button :ripple="true" v-for="(item, index) in musicList" :key="index">
        <mu-list-item-title>{{item.name}}</mu-list-item-title>
      </mu-list-item>
    </mu-list>-->
  </div>
</template>

<script>
// import { getRecomm } from "@/config/recommend.request";
import { mapGetters, mapActions, mapMutations } from "vuex";
import Header from "@/components/oHeader.vue";
import musicitem from "@/components/music-item.vue";
import Loading from "@/components/Loading";

export default {
  name: "singlistinfo",
  components: {
    "o-header": Header,
    musicitem,
    "o-loading": Loading
  },
  data() {
    return {
      musicList: [],
      img: "",
      color: "transparent",
      loading: false,
      info: {}
    };
  },
  computed: {
    ...mapGetters(["getPlayList", "getNowPlay"])
  },
  watch: {
    "$route.query"(val) {
      this.getList(val.id);
    }
  },
  methods: {
    ...mapActions(["getRecommendInfo"]),
    ...mapMutations(["setPlayList", "setNowPlay"]),
    toMusic(row) {
      const index = this.getPlayList.indexOf(row);
      if (index !== -1) {
        this.setNowPlay(index);
      } else {
        this.setPlayList(row);
        this.setNowPlay(this.getPlayList.length - 1);
      }
      this.$router.push("/music");
    },
    getList(id) {
      if (!id) return;
      this.loading = true;
      this.getRecommendInfo(id).then(res => {
        this.musicList = res.tracks;
        this.img = res.coverImgUrl;
        this.info = res;
        this.loading = false;
      });
    }
  },
  created() {
    let id = this.$route.query.id;
    this.getList(id);
  },
  mounted() {
    document
      .getElementsByClassName("singlistinfo")[0]
      .addEventListener("scroll", e => {
        let top = document.getElementsByClassName("singlistinfo")[0].scrollTop;
        console.log(top);
        if (top >= 150) {
          this.color = "white";
        } else {
          this.color = "transparent";
        }
      });
  }
};
</script>

<style lang="scss" scoped>
.singlistinfo {
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  background-color: white;
  .header {
    width: 100%;
    height: 300px;
    overflow: hidden;
    position: relative;
    .blurimg {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 0;
      background-size: cover;
      filter: blur(40px);
      background-position: center left;
      background-size: 100%;
      background-repeat: no-repeat;
      z-index: 0;
      background-color: rgba(0, 0, 0, 0.5);
      &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.3);
        background: linear-gradient(
          direction,
          rgba(0, 0, 0, 0.5),
          rgba(255, 255, 255, 1),
          rgba(0, 0, 0, 0.5)
        );
        background-attachment: fixed;
        z-index: -1;
      }
    }
    .blur-mask {
      z-index: 1;
      width: 100%;
      height: 100%;
      background-color: transparent;
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: space-around;
      img {
        width: 130px;
        min-width: 130px;
        height: 130px;
        border-radius: 5px;
      }
    }
  }
  .section {
    overflow: auto;
  }
}
</style>


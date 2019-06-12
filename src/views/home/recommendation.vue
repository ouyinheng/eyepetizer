<template>
  <div class="recommendation" ref="recom">
    <o-header :top="0" :color="color" :img="img" :tp="tp" :opacity="opacity" :title="title"></o-header>
    <header class="header bg-grey" :style="{
      backgroundImage: `url(${img})`
    }">
      <div id="blur-img" style="opacity: 1;">
        <div class="blur-mask" style="display: block;"></div>
      </div>
    </header>
    <div class="allPlay">全部播放</div>
    <section class="p-2 section">
      <mu-list textline="three-line">
        <musicitem
          v-for="(item, index) in musicList"
          :key="index"
          :imgUrl="item.album.picUrl"
          :title="item.name"
          :content="item.artists.map(item=>item.name).join('/')+'-'+item.album.name"
          @click-row="toMusic(item.id, index)"
        ></musicitem>
      </mu-list>
    </section>
  </div>
</template>

<script>
// import { getRecomm } from "@/config/recommend.request";
import { mapGetters, mapActions, mapMutations } from "vuex";
import Header from "@/components/oHeader.vue";
import musicitem from "@/components/music-item.vue";

export default {
  name: "recommendation",
  components: {
    "o-header": Header,
    musicitem
  },
  data() {
    return {
      musicList: [],
      img: "",
      loading: false,
      title: '歌单',
      info: {},
      color: "transparent",
      tp: false,
      opacity: 0
    };
  },
  computed: {
    ...mapGetters(["getPlayList", "getNowPlay"])
  },
  methods: {
    ...mapActions(["getDayRecom"]),
    ...mapMutations(["setPlayList", "setNowPlay"]),
    toMusic(row) {
      const index = this.getPlayList.indexOf(row);
      if (index !== -1) {
        this.setNowPlay(index);
      } else {
        this.setNowPlay(0);
        this.setPlayList(this.musicList);
      }
      this.$router.push("/music");
    }
  },
  created() {
    this.loading = true;
    this.getDayRecom().then(res => {
      this.loading = false;
      this.musicList = res;
      this.img = res[0].album.blurPicUrl;
      this.info = res[0]
    });
  },
  mounted() {
    const recom = this.$refs.recom;
    recom.addEventListener("scroll", e => {
      let domHeader = document.getElementsByClassName("header")[0];
      let height = domHeader.clientHeight;
      let top = recom.scrollTop;
      if (height - top <= 80) {
        this.tp = true;
        this.color = "gray";
        this.opacity = 1;
        this.title = '今日推荐';
      } else {
        this.tp = true;
        this.opacity = Number((top / height).toString().substr(0, 4));
        this.color = "transparent";
        this.title = "歌单";
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.recommendation {
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  background-color: white;
  .header {
    width: 100%;
    height: 230px;
    overflow: hidden;
    background-size: 100%;
    // background-position: center;
  }
  .section {
    overflow: auto;
  }
  .blur-mask {
    position: absolute;
    width: 100%;
    height: 230px;
    background-color: #000;
    filter: alpha(opacity=30);
    -moz-opacity: 0.3;
    opacity: 0.3;
    top: 0;
    left: 0;
    overflow: hidden;
  }
  .allPlay {
    position: sticky;
    top: 80px;
    width: 100%;
    background-color: white;
    z-index: 100;
    padding: 10px;
  }
}
</style>


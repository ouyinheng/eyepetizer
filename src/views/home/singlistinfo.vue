<template>
  <div class="singlistinfo">
    <o-header :top="0" :color="color"></o-header>
    <header class="header bg-grey" :style="{
      backgroundImage: `url(${img})`
    }">
      <div id="blur-img" style="opacity: 1;">
        <div class="blur-mask" style="display: block;"></div>
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

export default {
  name: "singlistinfo",
  components: {
    "o-header": Header,
    musicitem
  },
  data() {
    return {
      musicList: [],
      img: "",
      color: 'transparent'
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
      this.getRecommendInfo(id).then(res => {
        console.log(res);
        this.musicList = res.tracks;
        this.img = res.coverImgUrl;
      });
    }
  },
  created() {
    let id = this.$route.query.id;
    this.getList(id);
    
  },
  mounted() {
    document.getElementsByClassName('singlistinfo')[0].addEventListener("scroll", (e) => {
      let top = document.getElementsByClassName('singlistinfo')[0].scrollTop;
      console.log(top)
      if(top >= 150) {
        this.color = 'white'
      } else {
        this.color = 'transparent'
      }
    })
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
}
</style>


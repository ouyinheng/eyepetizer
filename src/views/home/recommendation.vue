<template>
  <div class="recommendation">
    <o-header :top="30"></o-header>
    <header class="header bg-grey" :style="{
      backgroundImage: `url(${img})`
    }"></header>
    <section class="p-2 section">
      <mu-list textline="three-line">
        <musicitem
          v-for="(item, index) in musicList"
          :key="index"
          :imgUrl="item.album.picUrl"
          :title="item.name"
          :content="item.artists.map(item=>item.name).join('/')+'-'+item.album.name"
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
  name: "recommendation",
  components: {
    "o-header": Header,
    musicitem
  },
  data() {
    return {
      musicList: [],
      img: ""
    };
  },
  computed: {
    ...mapGetters(["getPlayList", "getNowPlay"])
  },
  methods: {
    ...mapActions(["getDayRecom"]),
    ...mapMutations(['setPlayList', "setNowPlay"]),
    toMusic(row) {
      const index = this.getPlayList.indexOf(row)
      if(index!==-1) {
        this.setNowPlay(index)
      } else {
        this.setPlayList(row);
        this.setNowPlay(this.getPlayList.length-1)
      }
      this.$router.push('/music')
    }
  },
  created() {
    this.getDayRecom().then(res => {
      this.musicList = res;
      this.img = res[0].album.blurPicUrl;
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
    height: 200px;
    overflow: hidden;
    background-size: 100%;
    // background-position: center;
  }
  .section {
    overflow: auto;
  }
}
</style>


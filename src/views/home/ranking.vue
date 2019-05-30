<template>
  <div class="ranking">
    <o-header :top="0" color="white" title="排行榜"></o-header>
    <o-loading :loading="loading"></o-loading>
    <section class="section">
      <div class="mt-2 article">
        <h3 class="font-lg mb-2">官方榜</h3>
        <div class="article-item mb-2" v-for="(item, index) in officialList" :key="index">
          <div class="flex -center" @click="toSingListInfo(item.id)">
            <img v-lazy="item.coverImgUrl" alt>
            <div class="ml-1" style="box-sizing:border-box;width: 70%;">
              <p
                class="font-md p-1 over-spot"
                v-for="(items, indexs) in item.tracks"
                :key="indexs"
                style="line-height:16px"
              >0{{indexs+1}}.{{items.first}} -- {{items.second}}</p>
            </div>
          </div>
        </div>
        <h3 class="font-lg mb-2">推荐榜</h3>
        <div class="article-item flex between">
          <recom-item v-for="(item, index) in rankList" :key="index" :value="item" @row-click="toSingListInfo(item.id)"></recom-item>
          <!-- <div v-for="(item, index) in rankList" :key="index" style="width: 30%;">
            <div>
              <img :src="item.coverImgUrl" alt>
              <p style="width: 100%;">{{item.name}}</p>
            </div>
          </div> -->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Header from "@/components/oHeader.vue";
import Loading from "@/components/loading.vue";
import recomitem from "@/components/recom-item.vue";
import { mapActions } from "vuex";
export default {
  name: "ranking",
  components: {
    "o-header": Header,
    'o-loading': Loading,
    'recom-item': recomitem
  },
  data() {
    return {
      officialList: [],
      rankList: [],
      loading: false
    };
  },
  methods: {
    ...mapActions(["getTopListDetail"]),
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
    this.loading = true;
    this.getTopListDetail().then(res => {
      this.officialList = res.list.filter(item => {
        return item.tracks.length > 0;
      });
      this.rankList = res.list.filter(item => {
        return item.tracks.length == 0;
      });
      this.loading = false;
    });
  }
};
</script>

<style lang="scss" scoped>
.ranking {
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  overflow-x: hidden;
  overflow: auto;
  background-color: white;
  .section {
  overflow-x: hidden;
    margin-top: 80px;
    h3 {
      font-weight: 550;
    }
    .article {
      width: 100%;
      &-item {
        flex-wrap: wrap;
        img {
          width: 100px;
          border-radius: 5px;
        }
      }
    }
  }
}
</style>

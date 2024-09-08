<template>
  <div class="circles">
    <mu-paper :z-depth="1" class="demo-loadmore-wrap bg-grey">
      <div class="header-loadmore">
        <div class="header-top">
          <h3 class="font-lg">优圈</h3>
          <div class="font-lg">
            <span class="iconfont icon-sousuo"></span>
            <span class="iconfont icon-diantai1 ml-4 mr-4"></span>
            <span class="iconfont icon-tongzhi"></span>
          </div>
        </div>
      </div>
      <Skeleton v-if="loadings"></Skeleton>
      <mu-container ref="container" class="demo-loadmore-content" v-else>
        <mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loading" @load="load">
          <div class="flex between mt-2">
            <div class="md-button font-md">添加好友</div>
            <div class="md-button font-md">发布动态</div>
          </div>
          <mu-list class>
            <div style="width: 100%;" class="pb-2" v-for="(item, index) in getDynamic" :key="index">
              <div class="flex">
                <div class="header pb-1">
                  <mu-avatar color="indigo" size="40">
                    <img class="icon" v-lazy="item.user.avatarUrl" :alt="item.user.nickname">
                  </mu-avatar>
                </div>
                <div class="right pt-2 pb-4">
                  <div class="text ml-1 pl-2">
                    <p class="font-sm pb-1">{{item.user.nickname}}</p>
                    <p class="font-sm" style="color:#C0C4CC">{{getLocalTime(item.showTime)}}</p>
                  </div>
                  <p
                    class="pl-2 pt-2 pb-2"
                    style="line-height: 1.5rem"
                  >{{JSON.parse(item.json).msg}}</p>
                  <section class="content" v-if="JSON.parse(item.json).video">
                    <video
                      :ref="'video'+index"
                      :poster="JSON.parse(item.json).video.coverUrl"
                      @click="setPlay('video'+index,index,JSON.parse(item.json).video.videoId)"
                    ></video>
                  </section>
                  <section class="content" v-else>
                    <div class="flex">
                      <img
                        class="pics"
                        v-for="(img,indexs) in item.pics"
                        v-preview="img.squareUrl"
                        :src="img.squareUrl"
                        :key="indexs"
                        preview-title-enable="true"
                        preview-nav-enable="true"
                      >
                      <!-- <img class="pics" v-for="(items, indexs) in item.pics" :key="indexs" :src="items.squareUrl"> -->
                      <div class="pics" v-if="item.pics.length%3<=1&&item.pics.length%3>0"></div>
                      <div class="pics" v-if="item.pics.length%3<=2&&item.pics.length%3>0"></div>
                    </div>
                    <!-- <div>
                      <img :src="item.album.picUrl" alt="">
                      <div>
                        <span>{{item.song.name}}</span>
                        <span></span>
                      </div>
                    </div>-->
                  </section>
                </div>
              </div>
              <mu-divider></mu-divider>
            </div>
          </mu-list>
        </mu-load-more>
      </mu-container>
    </mu-paper>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Skeleton from "./Skeleton.vue";
export default {
  name: "circles",
  computed: {
    ...mapGetters(["getDynamic"])
  },
  components: {
    Skeleton
  },
  data() {
    return {
      num: 30,
      refreshing: false,
      loading: false,
      text: "List",
      nowPlay: -1,
      loadings: false
    };
  },
  methods: {
    ...mapActions(["getUserDynamic", "getVideoUrl"]),
    refresh() {
      this.refreshing = true;
      this.$refs.container.scrollTop = 0;
      this.getUserDynamic({ pagesize: 30, refresh: true }).then(res => {
        this.refreshing = false;
      });
    },
    load() {
      this.loading = true;
      this.getUserDynamic({ pagesize: 30, refresh: false }).then(res => {
        this.loading = false;
      });
    },
    getLocalTime(timer) {
      function add0(m) {
        return m < 10 ? "0" + m : m;
      }
      var time = new Date(timer);
      var y = time.getFullYear();
      var m = time.getMonth() + 1;
      var d = time.getDate();
      var h = time.getHours();
      var mm = time.getMinutes();
      var s = time.getSeconds();
      return (
        // y + "-" + add0(m) + "-" + add0(d) + " " + add0(h) + ":" + add0(mm) + ":" + add0(s)
        y + "/" + add0(m) + "/" + add0(d) + " " + add0(h) + ":" + add0(mm)
      );
    },
    setPlay(e, index, id) {
      const video = this.$refs[e][0];
      if (this.nowPlay != -1) this.nowPlay.pause();
      this.getVideoUrl(id).then(res => {
        console.log(res);
        video.setAttribute("src", res.urls[0].url);
        video.setAttribute("controls", true);
        video.play();
        this.nowPlay = video;
      });
    }
  },
  created() {
    this.loadings = true;
    this.getUserDynamic({ pagesize: 30, refresh: false }).then(res => {
      this.loadings = false;
    });
  }
};
</script>

<style lang="scss" scoped>
.mu-elevation-4 {
  box-shadow: none;
}
.circles {
  width: 100%;
  background-color: #b4b4b4;
  box-sizing: border-box;
  .header-loadmore {
    background-color: white;
    padding: 20px 0 0;
    .header-top {
      background-color: white;
      padding: 15px 10px;
      font-weight: 550;
      display: flex;
      align-items: center;
      justify-content: space-between;
      div {
        span {
        }
      }
    }
  }
  .demo-loadmore-content {
    width: 100%;
    box-sizing: border-box;
    padding: 0 10px !important;
    background-color: white;
    .md-button {
      width: 40%;
      max-width: 200px;
      padding: 15px 10px;
      border-radius: 5px;
      text-align: center;
      background-color: white;
    }
  }
  .demo-loadmore-wrap {
    height: 100%;
  }
  .header {
    width: 100%;
    max-width: 40px;
  }
  .right {
    .text {
      p:nth-of-type(1) {
        color: #51b7ff;
      }
    }
  }
  .content {
    box-sizing: border-box;
    padding: 0 10px;
    video {
      width: 100%;
      border-radius: 5px;
    }
    .flex {
      width: 100%;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      .pics {
        width: 30%;
        height: 100px;
        margin-bottom: 5px;
        border-radius: 5px;
      }
    }
  }
  .mu-card-header .mu-avatar {
    margin: 0;
  }
}
</style>

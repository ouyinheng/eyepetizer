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
      <mu-container ref="container" class="demo-loadmore-content">
        <mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loading" @load="load">
          <mu-list class>
            <mu-card
              style="width: 100%; max-width: 375px; margin: 10px auto 20px;border-radius: 10px;"
              class="pr-1 pl-1 pb-2"
              v-for="(item, index) in getDynamic"
              :key="index"
            >
              <mu-card-header class="header pb-1">
                <mu-avatar color="indigo" size="40">
                  <img class="icon" :src="item.user.avatarUrl" :alt="item.user.nickname">
                </mu-avatar>
                <div class="text ml-1">
                  <p class="font-sm pb-1">{{item.user.nickname}}</p>
                  <p class="font-sm">{{getLocalTime(item.showTime)}}</p>
                </div>
              </mu-card-header>
              <p class="pl-2 pt-2 pb-2">{{JSON.parse(item.json).msg}}</p>
              <section class="content" v-if="JSON.parse(item.json).video">
                <video
                  :ref="'video'+index"
                  :poster="JSON.parse(item.json).video.coverUrl"
                  @click="setPlay('video'+index,index,JSON.parse(item.json).video.videoId)"
                ></video>
              </section>
              <section class="content" v-else>
                <div class="flex">
                  <div
                    class="pics"
                    v-for="(items, indexs) in item.pics"
                    :key="indexs"
                    :style="`backgroundImage:url(${items.squareUrl})`"
                  ></div>
                  <div class="pics" v-if="item.pics.length%3<=1&&item.pics.length%3>0"></div>
                  <div class="pics" v-if="item.pics.length%3<=2&&item.pics.length%3>0"></div>
                </div>
              </section>
            </mu-card>
            <!-- <div v-for="(item, index) in getDynamic" :key="index" class="mb-2 pt-1 pb-1">
              <div class="header pb-1">
                <mu-avatar color="indigo" size="40">
                  <img class="icon" :src="item.user.avatarUrl" :alt="item.user.nickname">
                </mu-avatar>
                <div class="text ml-1">
                  <p class="font-md pb-1">{{item.user.nickname}}</p>
                  <p>{{getLocalTime(item.showTime)}}</p>
                </div>
              </div>
              <section class="content" v-if="JSON.parse(item.json).video">
                <p class="pt-1 pb-1">{{JSON.parse(item.json).msg}}</p>
                <video
                  :ref="'video'+index"
                  :poster="JSON.parse(item.json).video.coverUrl"
                  @click="setPlay('video'+index,index,JSON.parse(item.json).video.videoId)"
                ></video>
              </section>
              <section class="content" v-else>
                <p class="pt-1 pb-1">{{JSON.parse(item.json).msg}}</p>
                <div class="flex">
                  <div
                    class="pics"
                    v-for="(items, indexs) in item.pics"
                    :key="indexs"
                    :style="`backgroundImage:url(${items.squareUrl})`"
                  ></div>
                  <div class="pics" v-if="item.pics.length%3<=1&&item.pics.length%3>0"></div>
                  <div class="pics" v-if="item.pics.length%3<=2&&item.pics.length%3>0"></div>
                </div>
              </section>
            </div>-->
          </mu-list>
        </mu-load-more>
      </mu-container>
    </mu-paper>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "circles",
  computed: {
    ...mapGetters(["getDynamic"])
  },
  data() {
    return {
      num: 30,
      refreshing: false,
      loading: false,
      text: "List",
      nowPlay: -1
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
    this.getUserDynamic({ pagesize: 30, refresh: false });
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
    padding: 0 20px;
    padding: 0 10px !important;
  }
  .header {
    width: 100%;
    display: flex;
    align-items: center;
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
        background-size: 100%;
        // background-position: center;
        margin-bottom: 5px;
      }
    }
  }
  .mu-card-header .mu-avatar {
    margin: 0;
  }
}
</style>

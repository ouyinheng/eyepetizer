<template>
  <div class="mine">
    <header class="header pt-7">
      <div class="mine-info" @click="toUserInfo">
        <img :src="getUserInfo.avatarUrl" alt>
        <div
          style="display:flex;justify-content: space-between;width: 100%;padding: 5px;color: white;align-items:center"
        >
          <div>
            <p style="font-size: 1.4rem;padding: 5px 0;">{{getUserInfo.nickname}}</p>
            <p>{{getUserInfo.signature}}</p>
          </div>
          <span class="iconfont icon-more"></span>
        </div>
      </div>
      <mu-card class="header-card">
        <md-button style="height: 100%;">
          <div class="card-item">
            <span>{{getUserInfo.eventCount||0}}</span>
            <span class="pt-2 font-sm">动态</span>
          </div>
        </md-button>
        <md-button style="height: 100%;">
          <div class="card-item">
            <span>{{getUserInfo.followeds||0}}</span>
            <span class="pt-2 font-sm">粉丝</span>
          </div>
        </md-button>
        <md-button style="height: 100%;">
          <div class="card-item">
            <span>{{getUserInfo.follows||0}}</span>
          <span class="pt-2 font-sm">关注</span>
          </div>
        </md-button>
      </mu-card>
    </header>
    <section class="section">
      <md-list>
        <md-list-item @click>
          <span class="iconfont icon-tongzhi mr-1" style="font-size: 1.2rem"></span>
          <span class="md-list-item-text" style="font-size: 1.2rem">我的消息</span>
          <span class="iconfont icon-more"></span>
        </md-list-item>
        <md-list-item @click>
          <span class="iconfont icon-huiyuanzhongxin1 mr-1" style="font-size: 1.2rem"></span>
          <span class="md-list-item-text" style="font-size: 1.2rem">会员中心</span>
          <span class="iconfont icon-more"></span>
        </md-list-item>
        <md-list-item @click>
          <span class="iconfont icon-huanfu mr-1" style="font-size: 1.2rem"></span>
          <span class="md-list-item-text" style="font-size: 1.2rem">个性换肤</span>
          <span class="iconfont icon-more"></span>
        </md-list-item>
        <md-list-item @click>
          <span class="iconfont icon-richscan_icon mr-1" style="font-size: 1.2rem"></span>
          <span class="md-list-item-text" style="font-size: 1.2rem">扫一扫</span>
          <span class="iconfont icon-more"></span>
        </md-list-item>
        <md-list-item @click>
          <span class="iconfont icon-bofang mr-1" style="font-size: 1.2rem"></span>
          <span class="md-list-item-text" style="font-size: 1.2rem">仅WIFI联网</span>
          <mu-switch v-model="calls"/>
        </md-list-item>
        <md-list-item @click>
          <span class="iconfont icon-time mr-1" style="font-size: 1.2rem"></span>
          <span class="md-list-item-text" style="font-size: 1.2rem">定时关闭</span>
          <span class="iconfont icon-more"></span>
        </md-list-item>
        <md-list-item @click>
          <span class="iconfont icon-shanchu mr-1" style="font-size: 1.2rem"></span>
          <span class="md-list-item-text" style="font-size: 1.2rem">清除缓存</span>
          <span class="iconfont icon-more"></span>
        </md-list-item>
        <md-list-item @click>
          <span class="iconfont icon-shezhi1 mr-1" style="font-size: 1.2rem"></span>
          <span class="md-list-item-text" style="font-size: 1.2rem">设置</span>
          <span class="iconfont icon-more"></span>
        </md-list-item>
        <!-- <md-list-item>
          <md-icon>bluetooth</md-icon>
          <span class="md-list-item-text">Bluetooth</span>
          <md-switch v-model="settings.bluetooth"/>
        </md-list-item>-->
      </md-list>
      <mu-list>
        <!-- <mu-list-item>
          <mu-list-item-title>
            <span class="iconfont icon-tongzhi mr-1" style="font-size: 1.2rem"></span>
            <span style="font-size: 1.2rem">我的消息</span>
          </mu-list-item-title>
          <mu-list-item-action>
            <span class="iconfont icon-more"></span>
          </mu-list-item-action>
        </mu-list-item>-->
        <!-- <mu-list-item>
          <mu-list-item-title>
            <span class="iconfont icon-huiyuanzhongxin1 mr-1" style="font-size: 1.2rem"></span>
            <span style="font-size: 1.2rem">会员中心</span>
          </mu-list-item-title>
          <mu-list-item-action>
            <span class="iconfont icon-more"></span>
          </mu-list-item-action>
        </mu-list-item>-->
        <!-- <mu-list-item>
          <mu-list-item-title>
            <span class="iconfont icon-huanfu mr-1" style="font-size: 1.2rem"></span>
            <span style="font-size: 1.2rem">个性换肤</span>
          </mu-list-item-title>
          <mu-list-item-action>
            <span class="iconfont icon-more"></span>
          </mu-list-item-action>
        </mu-list-item>-->
        <!-- <mu-list-item>
          <mu-list-item-title>
            <span class="iconfont icon-richscan_icon mr-1" style="font-size: 1.2rem"></span>
            <span style="font-size: 1.2rem">扫一扫</span>
          </mu-list-item-title>
          <mu-list-item-action>
            <span class="iconfont icon-more"></span>
          </mu-list-item-action>
        </mu-list-item>
        <mu-list-item @click="calls = !calls">
          <mu-list-item-title>
            <span class="iconfont icon-bofang mr-1" style="font-size: 1.2rem"></span>
            <span style="font-size: 1.2rem">仅WIFI联网</span>
          </mu-list-item-title>
          <mu-list-item-action>
            <mu-switch v-model="calls" readonly></mu-switch>
          </mu-list-item-action>
        </mu-list-item>-->
        <!-- <mu-list-item>
          <mu-list-item-title>
            <span class="iconfont icon-time mr-1" style="font-size: 1.2rem"></span>
            <span style="font-size: 1.2rem">定时关闭</span>
          </mu-list-item-title>
          <mu-list-item-action>
            <span class="iconfont icon-more"></span>
          </mu-list-item-action>
        </mu-list-item>
        <mu-list-item>
          <mu-list-item-title>
            <span class="iconfont icon-shanchu mr-1" style="font-size: 1.2rem"></span>
            <span style="font-size: 1.2rem">清除缓存</span>
          </mu-list-item-title>
          <mu-list-item-action>
            <span class="iconfont icon-more"></span>
          </mu-list-item-action>
        </mu-list-item>
        <mu-list-item>
          <mu-list-item-title>
            <span class="iconfont icon-shezhi1 mr-1" style="font-size: 1.2rem"></span>
            <span style="font-size: 1.2rem">设置</span>
          </mu-list-item-title>
          <mu-list-item-action>
            <span class="iconfont icon-more"></span>
          </mu-list-item-action>
        </mu-list-item>-->
      </mu-list>
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Store from "@/vuex";
export default {
  name: "mine",
  computed: {
    ...mapGetters(["getUserInfo"])
  },
  data() {
    return {
      calls: false
    };
  },
  methods: {
    ...mapActions(["getLoginStatus", "getUserSingList"]),
    toUserInfo() {
      this.$router.push({ name: "userinfo" });
    }
  },
  created() {}
};
</script>

<style lang="scss" scoped>
.mine {
  width: 100%;
  .header {
    background-color: #ff4545;
    width: 100%;
    height: 150px;
    position: relative;
    .mine-info {
      width: 90%;
      height: 60px;
      display: flex;
      align-items: center;
      margin: 0 auto;
      img {
        display: block;
        min-width: 60px;
        width: 60px;
        min-height: 60px;
        height: 60px;
        // border: 1px solid white;
        border-radius: 50%;
      }
    }
    &-card {
      width: 90%;
      height: 60px;
      background-color: white;
      position: absolute;
      bottom: -25%;
      left: 50%;
      transform: translate(-50%, 0);
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      padding: 5px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      .card-item {
        width: 100%;
        display: flex;
        flex-direction: column;
        text-align: center;
        font-size: 1rem;
        span:nth-of-type(1) {
          font-size: 1.2rem;
          font-weight: bold;
          color: #26272a;
        }
      }
    }
  }
  .section {
    width: 100%;
    background-color: white;
    padding-top: 60px;
  }
  .mu-item {
    height: 45px !important;
  }
}
</style>


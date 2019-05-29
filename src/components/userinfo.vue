<template>
  <div class="mine" @touchmove="touchmove" @touchend="touchend">
    <header>
      <div
        class="bg-img"
        :style="{
        height: height+'px',
        'background-size': bgSize+'% auto',
        transition: transition?'all .3s':'',
        'background-image': `url(${getUserInfo.backgroundUrl})`
      }"
      >
        <div class="modal" :style="{'opacity': opacity}"></div>
        <div class="header">
          <img :src="getUserInfo.avatarUrl" alt>
          <div class="nickname mt-2 font-lg">{{getUserInfo.nickname}}</div>
          <div class="mt-2">
            <span class="mr-2">粉丝：{{getUserInfo.followeds}}</span>
            <span>关注：{{getUserInfo.follows}}</span>
          </div>
          <div class="mt-2 edit">
            <span>编辑</span>
          </div>
        </div>
      </div>
    </header>
    <!-- <section class="p-2">
      <div class="flex between">
        <mu-avatar style="width: 80px;height: 80px" class="muavatar">
          <img :src="getUserInfo.avatarUrl" @click="showImage">
        </mu-avatar>
        <div></div>
        <div class="flex -center">
          <mu-button color="RGB(59,59,61)">编辑资料</mu-button>
          <mu-button color="RGB(59,59,61)" class="mx-2">
            <span class="iconfont icon-bell"></span>
          </mu-button>
          <mu-button color="RGB(59,59,61)">
            <span class="iconfont icon-team"></span>
          </mu-button>
        </div>
      </div>
      <article class="mt-7">
        <h3 class="pl-2 font-lg" style="font-weight:bold">{{getUserInfo.nickname}}</h3>
        <p class="p-2">{{getUserInfo.signature}}</p>
        <div class="pl-2 font-md flex">
          <p>
            <span style="font-weight:bold">{{getUserInfo.followeds}}</span>
            <span style="color: gainsboro;">粉丝</span>
          </p>
          <span class="ml-2">
            <span style="font-weight:bold">{{getUserInfo.follows}}</span>
            <span style="color: gainsboro;">关注</span>
          </span>
        </div>
      </article>
    </section> -->
    <mu-container style="color:white;">
      <mu-tabs :value.sync="active2" color="RGB(45, 45, 48)" indicator-color="#ff4545" full-width>
        <mu-tab>动态</mu-tab>
        <mu-tab>音乐</mu-tab>
        <mu-tab>简介</mu-tab>
      </mu-tabs>
      <div class="demo-text" v-if="active2 === 0">
        <p>“……是的，我承认从很早以前我都害怕死亡，在医院里被人研究的时候，以前做出布局的时候，其实我很怕死的，因为除了死以外，我没有值得珍惜的东西，很奇怪是吧？恰好是这样我真的很怕死，因为我想要有值得珍惜的东西之后，死亡之后才会不寂寞，我才能够安然的面对死亡……”</p>
      </div>
      <div class="demo-text" v-if="active2 === 1">
        <p>“我的心从来没有这么坚定过，所以我会为了补偿而死，也可以为了补偿而死……一辈子，急辈子都无所谓，我绝不后退！”</p>
        <p>“如果我后退呢？如果我想要死呢？我不想你再次背对着我逃跑了……”</p>
        <p>“那么就去地狱找到你，我绝对不逃！”</p>
        <p>“白痴，你也哭了？因为那些软弱拖累你的脚步？”</p>
      </div>
      <div class="demo-text" v-if="active2 === 2">
        <p>“不，这泪水……是因为勇气，因为力量，因为信任，……你不会懂的！”</p>
        <p>“我不会帮你，想要什么样的未来……自己去追寻吧！”</p>
        <p>“我不需要你的帮忙！未来我会一手开启，什么样的敌人我也不会惧怕……还有，其实我们可以成为朋友的……”</p>
        <p>“也许吧，未来……给你了。”</p>
      </div>
    </mu-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "userinfo",
  props: ["getUserInfo"],
  data() {
    return {
      y: 0,
      height: 250,
      transition: false,
      bgSize: 100,
      opacity: 0.3,
      active2: 0
    };
  },
  methods: {
    touchmove(e) {
      this.transition = false;
      if (this.y != 0) {
        if (this.height >= 350) {
          return;
        }
        let distance = e.changedTouches[0].pageY - this.y;
        if (distance > 0) {
          this.y = e.changedTouches[0].pageY;
          this.height += distance;
          this.bgSize += 1;
          this.opacity = this.opacity > 0.5 ? 0.7 : this.opacity + 0.05;
        }
      } else {
        this.y = e.changedTouches[0].pageY;
      }
    },
    touchend() {
      this.transition = true;
      this.height = 250;
      this.y = 0;
      this.opacity = 0.2;
      this.bgSize = 100;
    },
    showImage() {},
    getUserDetails() {
      axios.get('http://118.25.95.147:3000/user/subcount').then(res=>{
        console.log(res)
      })
    }
  },
  created() {
    this.getUserDetails();
  }
};
</script>

<style lang="scss" scoped>
.mine {
  width: 100%;
  height: 100%;
  background-color: RGB(45, 45, 48);
  overflow: auto;
  .mu-raised-button {
    min-width: 20px;
  }
  .mu-button {
    box-shadow: none;
    font-size: 0.8rem;
  }
  header {
    .bg-img {
      width: 100%;
      min-height: 220px;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      background-position: center;
      position: relative;
      display: flex;
      justify-content: space-around;
      .modal {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: black;
        opacity: 0.3;
        z-index: 10;
      }
      .header {
        position: absolute;
        z-index: 11;
        width: 100%;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 70px;
        img {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          border: 2px solid white;
        }
        .edit {
          padding: 4px 12px;
          border: 1px solid white;
          border-radius: 10px;
          font-size: 1rem;
        }
        .nickname {
          font-weight: 520;
        }
      }
    }
  }
  section {
    width: 100%;
    box-sizing: border-box;
    position: relative;
    box-sizing: border-box;
    padding: 10px;
    color: white;
    .muavatar {
      position: absolute;
      top: -20px;
      left: 20px;
      z-index: 11;
    }
    .muava-left {
      position: absolute;
      top: 10px;
      right: 10px;
    }
  }
  .demo-text {
    padding: 16px;
    p {
      margin: 8px 0;
    }
  }
}
</style>
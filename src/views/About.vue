<template>
  <div class="about">
    <section class="content">
      <transition >
        <keep-alive>
          <router-view class="Router"></router-view>
        </keep-alive>
      </transition>
    </section>
    <!-- <footer class="footer">
      <mu-bottom-nav style="height:60px;">
        <mu-bottom-nav-item title="Recents" icon="restore"></mu-bottom-nav-item>
        <mu-bottom-nav-item title="Favorites" icon="favorite"></mu-bottom-nav-item>
        <mu-bottom-nav-item title="Nearby" icon="location_on"></mu-bottom-nav-item>
      </mu-bottom-nav>
    </footer> -->
     <!-- <mu-button flat>Normal</mu-button> -->
    <footer class="footer">
      <div
        v-for="(item, index) in urllist"
        :key="index"
        :class="{
        'bootom-nav': true,
        'active-nav': active == index&&index!=2,
        'active2': index==2
      }"
        @click="changeUrl(item.url,index)"
      >
        <div
          :class="['iconfont', active == index?item.fill:item.icon]"
          style="font-size:1.5rem;padding-bottom: 5px;"
          v-if="index!==2"
        ></div>
        <span v-if="index!==2">{{item.title}}</span>
        <img v-if="index==2" :src="item.img" alt>
      </div>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from "vuex";

export default {
  name: "About",
  components: {},
  computed: {
    ...mapGetters(["getUserInfo"])
  },
  data() {
    return {
      urllist: [
        {
          url: "/home",
          title: "发现",
          icon: "icon-faxian2",
          fill: "icon-faxian1"
        },
        {
          url: "/discover",
          title: "音乐",
          icon: "icon-yinyue",
          fill: "icon-yinle2"
        },
        {
          url: "/music",
          title: "音乐",
          img: "logo.png"
        },
        {
          url: "/circle",
          title: "优圈",
          icon: "icon-iconquanzinor",
          fill: "icon-iconquanzisel"
        },
        {
          url: "/mine",
          title: "我的",
          icon: "icon-wode1",
          fill: "icon-wode"
        }
      ],
      active: 0,
      transitionName: ""
    };
  },
  watch: {
    $route(to, from) {
      if (to.meta.weight < from.meta.weight) {
        this.transitionName = "slide-right";
      } else {
        this.transitionName = "slide-left";
      }
    }
  },
  methods: {
    ...mapActions(["getLoginStatus", "getUserSingList"]),
    changeUrl(url, index) {
      if (this.$route.path === url) return;
      this.$router.push(url);
      this.active = index;
    }
  },
  created() {
    this.urllist.forEach((item, index) => {
      if (this.$route.path === item.url) {
        this.active = index;
      }
    });
    this.getLoginStatus().then(res => {
      this.getUserSingList(this.getUserInfo.userId).then(res => {
        // console.log(res)
      });
    });
  }
};
</script>

<style lang="scss" scoped>
.about {
  .content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 48px;
    overflow: hidden;
    overflow-y: auto;
    z-index: 10;
  }
  .footer {
    width: 100%;
    height: 60px;
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    background-color: white;
    // padding: 8px 0;
    z-index: 10;
    img {
      display: block;
      box-sizing: content-box;
      background-color: transparent;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      position: absolute;
      top: -15px;
      border: 5px solid white;
    }
    .bootom-nav {
      width: 100%;
      text-align: center;
      z-index: 10;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #bcaaa4;
    }
    &::after {
      position: absolute;
      content: "";
      width: 100%;
      height: 1px;
      background-color: gainsboro;
      top: 0;
      left: 0;
      transform: scaleY(0.5);
    }
    .active-nav {
      color: #ff4545;
      animation: activeNav 0.3s;
    }
    .active2 {
      // animation: whirl 1s infinite;
    }
  }
}
.Router {
  position: absolute;
  width: 100%;
  transition: all 0.3s ease;
  top: 0px;
}
.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100% 0);
}
@keyframes activeNav {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes whirl {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>


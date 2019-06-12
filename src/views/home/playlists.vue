<template>
  <div class="playlists">
    <o-header :top="0" title="歌单广场" textColor="black"></o-header>
    <mu-container style="margin-top: 80px;width: 100%;">
      <mu-tabs
        :value.sync="active"
        inverse
        color="secondary"
        text-color="rgba(0, 0, 0, .54)"
        center
        style="width: 100%;"
        @change="getInfo"
      >
        <mu-tab v-for="(item, index) in tabs" :key="index">{{item.name}}</mu-tab>
      </mu-tabs>
      <div>
        <transition :name="transitionName[0]" mode="in-out">
          <div class="demo-text" v-if="active==0" :key="0">
            <div class="list-items" v-for="(item, index) in tabs[0].info" :key="index">
              <recom-item :value="item" @row-click="toSingListInfo(item.id)"></recom-item>
            </div>
            <div class="list-items" v-if="tabs[active].info%3<=1"></div>
            <div class="list-items" v-if="tabs[active].info%3<=2"></div>
            <div class="list-items"></div>
          </div>
        </transition>
        <transition :name="transitionName[1]" mode="in-out">
          <div class="demo-text" v-if="active==1" :key="1">
            <div class="list-items" v-for="(item, index) in tabs[1].info" :key="index">
              <recom-item :value="item" @row-click="toSingListInfo(item.id)"></recom-item>
            </div>
            <div class="list-items" v-if="tabs[active].info%3<=1"></div>
            <div class="list-items" v-if="tabs[active].info%3<=2"></div>
            <div class="list-items"></div>
          </div>
        </transition>
        <transition :name="transitionName[2]" mode="in-out">
          <div class="demo-text" v-if="active==2" :key="2">
            <div class="list-items" v-for="(item, index) in tabs[0].info" :key="index">
              <recom-item :value="item" @row-click="toSingListInfo(item.id)"></recom-item>
            </div>
            <div class="list-items" v-if="tabs[active].info%3<=1"></div>
            <div class="list-items" v-if="tabs[active].info%3<=2"></div>
            <div class="list-items"></div>
          </div>
        </transition>
        <transition :name="transitionName[3]" mode="in-out">
          <div class="demo-text" v-if="active==3" :key="3">
            <div class="list-items" v-for="(item, index) in tabs[0].info" :key="index">
              <recom-item :value="item" @row-click="toSingListInfo(item.id)"></recom-item>
            </div>
            <div class="list-items" v-if="tabs[active].info%3<=1"></div>
            <div class="list-items" v-if="tabs[active].info%3<=2"></div>
            <div class="list-items"></div>
          </div>
        </transition>
        <transition :name="transitionName[4]" mode="in-out">
          <div class="demo-text" v-if="active==4" :key="4">
            <div class="list-items" v-for="(item, index) in tabs[4].info" :key="index">
              <recom-item :value="item" @row-click="toSingListInfo(item.id)"></recom-item>
            </div>
            <div class="list-items" v-if="tabs[active].info%3<=1"></div>
            <div class="list-items" v-if="tabs[active].info%3<=2"></div>
            <div class="list-items"></div>
          </div>
        </transition>
      </div>
    </mu-container>
  </div>
</template>

<script>
import oHeader from "@/components/oHeader.vue";
import recomitem from "@/components/recom-item.vue";

import { mapActions } from "vuex";
export default {
  name: "playlists",
  components: {
    "o-header": oHeader,
    "recom-item": recomitem
  },
  data() {
    return {
      active: 0,
      prevactive: 0,
      tabs: [
        {
          name: "推荐",
          info: {}
        }
      ],
      transitionName: [
        "slideInRight",
        "slideInRight",
        "slideInRight",
        "slideInRight",
        "slideInRight"
      ]
    };
  },
  methods: {
    ...mapActions(["getSongListClassify", "getSongListInfo"]),
    getClassify() {
      return this.getSongListClassify().then(res => {
        this.tabs.push(...res.tags.slice(0, 4));
      });
    },
    getInfo(i) {
      console.log(i, this.prevactive);
      if (i < this.prevactive) {
        this.transitionName[i] = "slideOutRight";
        this.transitionName[this.prevactive] = "slideInLeft";
      } else {
        this.transitionName[i] = "slideOutLeft";
        this.transitionName[this.prevactive] = "slideInRight";
      }
      this.prevactive = this.active;
      this.getSongListInfo({
        before: "",
        limit: 20,
        cat: this.active == 0 ? "" : this.tabs[this.active].name
      }).then(res => {
        this.tabs[this.active].info = res.playlists;
        this.tabs.splice(0, 0);
      });
    },
    toSingListInfo(id) {
      this.$router.push({
        path: "/singlistinfo",
        query: {
          id
        }
      });
    }
  },
  created() {
    this.getClassify().then(() => {
      this.getInfo();
    });
  }
};
</script>

<style lang="scss" scoped>
.playlists {
  width: 100%;
  position: relative;
  .demo-text {
    width: 100%;
    position: absolute;
    top: 140px;
    left: 0;
    bottom: 0;
    padding: 16px;
    background: #fff;
    overflow: auto;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    .list-items {
      width: 30%;
    }
    p {
      margin: 8px 0;
    }
  }
}
</style>

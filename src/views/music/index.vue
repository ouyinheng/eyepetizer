<template>
  <div class="discover">
    <div class="header-top">
      <h3 class="font-lg">我的音乐</h3>
      <div class="font-lg">
        <span class="iconfont icon-sousuo"></span>
        <span class="iconfont icon-diantai1 ml-4 mr-4"></span>
        <span class="iconfont icon-tongzhi"></span>
      </div>
    </div>
    <mu-list toggle-nested>
      <div button :ripple="true" nested style="padding: 10px 0;display:flex;align-items:center;">
        <mu-list-item-title class="font-lg">
          <span class="iconfont icon-gengduo_tinggemianliuliang_ icon mr-2"></span>最近播放
        </mu-list-item-title>
        <mu-list-item-action>
          <span class="iconfont icon-more icon font-lg"></span>
        </mu-list-item-action>
      </div>
      <div button :ripple="true" nested style="padding: 10px 0;display:flex;align-items:center;">
        <mu-list-item-title class="font-lg">
          <span class="iconfont icon-xia icon mr-2"></span>我的下载
        </mu-list-item-title>
        <mu-list-item-action>
          <span class="iconfont icon-more icon font-lg"></span>
        </mu-list-item-action>
      </div>
      <div button :ripple="true" nested style="padding: 10px 0;display:flex;align-items:center;">
        <mu-list-item-title class="font-lg">
          <span class="iconfont icon-diantai2 icon mr-2"></span>我的电台
        </mu-list-item-title>
        <mu-list-item-action>
          <span class="iconfont icon-more icon font-lg"></span>
        </mu-list-item-action>
      </div>
      <div button :ripple="true" nested style="padding: 10px 0;display:flex;align-items:center;">
        <mu-list-item-title class="font-lg">
          <span class="iconfont icon-xihuan1 icon mr-2"></span>我的收藏
        </mu-list-item-title>
        <mu-list-item-action>
          <span class="iconfont icon-more icon font-lg"></span>
        </mu-list-item-action>
      </div>
    </mu-list>
    <!-- 创建的歌单 -->
    <mu-list toggle-nested>
      <div style="display:flex;align-items:center;padding: 5px 0;">
        <mu-list-item-action>
          <mu-icon
            class="toggle-icon"
            size="24"
            :value="open = 'send' ? 'keyboard_arrow_down' : 'keyboard_arrow_up'"
          ></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title class="font-sm" style="margin-left: -30px;">创建的歌单</mu-list-item-title>
        <mu-list-item-action>
          <div style="display:flex;">
            <span class="iconfont icon-plus"></span>
            <span class="iconfont icon-view-list-o"></span>
          </div>
        </mu-list-item-action>
      </div>
      <musicitem
        v-for="(item, index) in getSetUpuserSingList"
        :key="index"
        :imgUrl="item.coverImgUrl"
        :title="item.name"
        :content="item.trackCount+'首'"
        @click-row="toMusicInfo(item.id)"
      ></musicitem>
    </mu-list>
    <!-- 收藏的歌单 -->
    <mu-list toggle-nested>
      <div style="display:flex;align-items:center;padding: 5px 0;">
        <mu-list-item-action>
          <mu-icon
            class="toggle-icon"
            size="24"
            :value="open = 'send' ? 'keyboard_arrow_down' : 'keyboard_arrow_up'"
          ></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title class="font-sm" style="margin-left: -30px;">收藏的歌单</mu-list-item-title>
        <mu-list-item-action>
          <div style="display:flex;">
            <span class="iconfont icon-plus"></span>
            <span class="iconfont icon-view-list-o"></span>
          </div>
        </mu-list-item-action>
      </div>

      <musicitem
        v-for="(item, index) in getCollectUserSingList"
        :key="index"
        :imgUrl="item.coverImgUrl"
        :title="item.name"
        :content="item.trackCount+'首'"
        @click-row="toMusicInfo(item.id)"
      ></musicitem>
    </mu-list>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import musicitem from "@/components/music-item.vue";

export default {
  name: "discover",
  computed: {
    ...mapGetters([
      "getUserInfo",
      "getSetUpuserSingList",
      "getCollectUserSingList"
    ])
  },
  components: {
    musicitem
  },
  data() {
    return {
      open: "send",
      open1: "send",
      setUpuserSingList: [],
      id: ''
    };
  },
  methods: {
    ...mapActions(["getUserSingList"]),
    toMusicInfo(id) {
      this.$router.push(`/singlistinfo?id=${id}`)
    }
  },
  created() {
    this.id = this.$route.query.id;
    // console.log(this.getSetUpuserSingList, this.getCollectUserSingList)
    // this.getUserSingList(this.getUserInfo.userId)
  }
};
</script>

<style lang="scss" scoped>
.discover {
  width: 100%;
  background-color: white;
  box-sizing: border-box;
  padding: 20px 10px 10px;
  .icon {
    font-weight: 550;
    color: #ff4545;
  }
  .header-top {
    padding: 15px 0;
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
</style>

<template>
  <div class="userinfo">
    <o-header :top="0"></o-header>
    <!-- 
    <div class="header" :style="`backgroundImage:url(${getUserInfo.backgroundUrl})`">
      <img :src="getUserInfo.avatarUrl" alt>
      <div class="nickname mt-2 font-lg">{{getUserInfo.nickname}}</div>
      <div class="mt-2">
        <span class="mr-2">粉丝：{{getUserInfo.followeds}}</span>
        <span>关注：{{getUserInfo.follows}}</span>
      </div>
      <div class="mt-2 edit">
          <span>编辑</span>
      </div>
    </div> -->
    <user-info :getUserInfo="getUserInfo"></user-info>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import oheader from "@/components/oHeader.vue";
import UserInfo from '@/components/userinfo.vue';
export default {
  name: "userinfo",
  components: {
    "o-header": oheader,
    'user-info': UserInfo
  },
  computed: {
    ...mapGetters(["getUserInfo"])
  },
  data() {
    return {};
  },
  created() {
    // console.log(this.getUserInfo);
  }
};
</script>

<style lang="scss" scoped   >
.userinfo {
  width: 100%;
  .header {
    width: 100%;
    height: 22rem;
    background-position: center;
    background-size: cover;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 70px;
    // justify-content: space-around;
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
</style>

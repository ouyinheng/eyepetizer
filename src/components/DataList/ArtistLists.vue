<template>
  <div class="artist-lists">
    <div class="w-100 between">
      <div class="item flex-column" v-for="(item, index) in listData" :key="index">
        <mu-avatar :size="100">
          <img class="cover" :src="item.cover" />
        </mu-avatar>
        <span class="name text-hidden">{{ item.name }}</span>
        <span class="size" :depth="3" v-if="item.size"> {{ item.size }}首 </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    listData: {
      type: Array,
      default: []
    }
  },
  data() {
    return {};
  },
  methods: {},
  created() {}
};
</script>

<style lang="scss" scoped>
.artist-lists {
  width: 100%;
}
.item {
  text-align: center;
  cursor: pointer;
  .cover {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 16px 0 #00000020;
    border-radius: 50%;
    transition: all 0.3s;
    .mu-avatar {
      filter: brightness(1);
      transform: scale(1);
      width: 100%;
      height: 100%;
      transition: all 0.3s;
    }
    .mu-icon {
      opacity: 0;
      transform: scale(0.8);
      position: absolute;
      color: #fff;
      font-size: 5vh;
      transition: all 0.3s;
    }
    &:hover {
      box-shadow: 0 4px 16px 0 #00000040;
      .mu-icon {
        opacity: 1;
        transform: scale(1);
      }
      .mu-avatar {
        filter: brightness(0.8);
        transform: scale(1.05);
      }
    }
    &:active {
      .n-avatar {
        transform: scale(1);
      }
    }
  }
  .name {
    margin-top: 14px;
    font-size: 16px;
    transition: all 0.3s;
    cursor: pointer;
    &:hover {
      color: #ff4545;
    }
  }
  .size {
    color: rgb(118, 124, 130);
    margin-top: 2px;
  }
}
</style>

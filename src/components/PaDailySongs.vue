<template>
  <div class="padailysongs" @click="goDetails">
    <img class="pic" :src="picImg" alt="pic" />
    <div class="text">
      <span class="title">{{ title }}</span>
      <span class="tip">{{ tip }}</span>
    </div>
  </div>
</template>

<script>
import picImg from "@/assets/pic.jpg";
export default {
  props: {
    title: String,
    tip: String,
    picImg: {
      type: String,
      default: picImg
    }
  },
  data() {
    return {
      dailySongs: []
    };
  },
  methods: {
    goDetails() {}
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.padailysongs {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 20px;
  height: 200px;
  border-radius: 8px;
  box-sizing: border-box;
  overflow: hidden;
  z-index: 0;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    .pic {
      transform: translateY(calc(-50% + 13vh)) scale(1.2);
      filter: brightness(50%);
    }
  }
  &:active {
    transform: scale(0.98);
  }
  .pic {
    transition: all 0.3s;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    transform: translateY(calc(-50% + 13vh));
    filter: brightness(70%);
    z-index: -1;
    @media (min-width: 750px) and (max-width: 1056px) {
      transform: none;
      height: 100%;
    }
    @media (max-width: 500px) {
      transform: none;
    }
  }
  .text {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    text-shadow: 0px 0px 8px #00000082;
    .title {
      font-size: 34px;
      font-weight: bold;
      margin-bottom: 8px;
      letter-spacing: 2px;
    }
    @media (min-width: 750px) and (max-width: 1056px) {
      .tip {
        display: none;
      }
    }
  }
  @media (max-width: 500px) {
    height: 160px;
    .text {
      .title {
        font-size: 30px;
        margin-bottom: 4px;
      }
    }
  }
}
</style>

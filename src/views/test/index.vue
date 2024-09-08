<!-- 第一题 -->
<template>
  <div class="card">
    <div class="card-title">
      <div class="pri-title">{{ title }}</div>
      <div class="sub-title">{{ subTitle }}</div>
    </div>
    <div>
      <div class="card-btn" @click="buyHandler">{{ btnText }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { h } from "vue";

/**
 * 测试数据
 */
const cardDataList = [
  {
    title: "杭州市通用5元券",
    subTitle: "杭味面馆非常好吃，太好吃了，相当不错，味道鲜美，特别划算，快快抢购，聚划算"
  },
  {
    title: "杭州市10元券",
    subTitle: "兰州拉面非常好吃"
  }
];

const Card = {
  props: ["title", "subTitle"],
  data() {
    return {
      btnNum: 10
    };
  },
  __test__: () => {},
  components: {},
  computed: {
    btnText() {
      return this.btnNum === 0 ? "抢购" : this.btnNum === -1 ? "已抢购" : this.btnNum + "s";
    }
  },
  methods: {
    getUserInfo(callback) {
      return new Promise((resolve) =>
        setTimeout(async () => {
          resolve(await callback());
        }, 1000)
      );
    },
    buyHandler() {
      if (this.btnNum > 0) return;
      this.getUserInfo(() => {
        this.btnNum = -1;
      });
    }
  },
  created() {
    const interval = setInterval(() => {
      if (this.btnNum === 0) {
        clearInterval(interval);
        return;
      }
      this.btnNum -= 1;
    }, 1000);
  }
};

export default Card;

/**
 * 以下为测试用例，无需修改
 */
Card.__test__ = () =>
  cardDataList && cardDataList.map((data) => h(Card, { ...data, key: data.title }));
</script>

<style>
.card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 2.26rem;
  width: 7.16rem;
  margin: 0 auto;
  margin-bottom: 0.1rem;
  background-color: #fcedee;
  font-size: 0.4rem;
  border-radius: 0.2rem;
  padding: 0 0.4rem 0 0.5rem;
  background-color: #fff0f1;
}
.card-title .pri-title {
  font-size: 0.4rem;
  font-weight: bold;
}
.card-title .sub-title {
  font-size: 0.367rem;
  font-weight: normal;
  color: #727071;
  margin-top: 2px;
  overflow: hidden;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
.card-btn {
  width: 1.8rem;
  height: 0.75rem;
  line-height: 0.75rem;
  border-radius: 0.14rem;
  font-size: 0.34rem;
  font-weight: bold;
  color: white;
  text-align: center;
  background-color: #f00;
}
html {
  font-size: 60px !important;
}
</style>

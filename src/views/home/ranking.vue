<template>
  <div class="ranking">
    <o-header :top="10" color="#000000"></o-header>
    <section class="section">
      <h3 class="font-lg">排行榜</h3>
    </section>
  </div>
</template>

<script>
import Header from "@/components/oHeader.vue";

export default {
  name: "ranking",
  components: {
    "o-header": Header
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.ranking {
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  .section {
      margin-top: 50px;
      h3 {
          font-weight: 550;
      }
  }
}
</style>

<template>
  <div class="search">
    <mu-text-field v-model="searchValue"></mu-text-field><br/>
  </div>
</template>

<script>
export default {
  name: "search",
  data() {
    return {
      searchValue: ''
    };
  }
};
</script>

<style lang="scss" scoped>
.search {
  width: 100%;
  height: 100vh;
  background-color: white;
}
</style>

<template>
  <div class="mv">
    <o-header :top="0" title="歌单广场" textColor="black"></o-header>
  </div>
</template>

<script>
import oHeader from "@/components/oHeader.vue";

export default {
  name: 'mv',
  components: {
    'o-header': oHeader
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.mv {

}
</style>


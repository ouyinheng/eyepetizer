<template>
  <div class="playlists">
    <o-header :top="0"></o-header>
  </div>
</template>

<script>
import oHeader from '@/components/oHeader.vue';
export default {
  name: 'playlists',
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
.playlists {
  width: 100%
}
</style>

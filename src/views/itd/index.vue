<template>
  <div class="itd">
     <o-video></o-video>
     <music-item></music-item>
  </div>
</template>

<script>
import ovideo from '@/components/oVideo.vue';
import musicitem from '@/components/music-item.vue';
export default {
  name: 'itd',
  components: {
    'o-video': ovideo,
    'music-item': musicitem
  }
}
</script>


<style lang="scss" scoped>
.itd {

}
</style>

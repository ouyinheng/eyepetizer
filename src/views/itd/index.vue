<template>
  <div class="itd">
     <!-- <o-video></o-video> -->
     <!-- <music-item></music-item> -->
     <testmusic></testmusic>
     <!-- <flexibilitu></flexibilitu> -->
  </div>
</template>

<script>
import ovideo from '@/components/oVideo.vue';
import musicitem from '@/components/music-item.vue';
import testmusic from './testmusic.vue';
import mine from "@/components/userinfo.vue";
import flexibilitu from '@/components/flexibility'
export default {
  name: 'itd',
  components: {
    'o-video': ovideo,
    'music-item': musicitem,
    testmusic,
    mine,
    flexibilitu
  }
}
</script>


<style lang="scss" scoped>
.itd {
  overflow: auto;
}
</style>

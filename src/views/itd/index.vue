<template>
  <div class="itd">
     <!-- <o-video></o-video> -->
     <!-- <music-item></music-item> -->
     <testmusic></testmusic>
     <!-- <flexibilitu></flexibilitu> -->
     <!-- <Loading :loading="true" :kind="2"></Loading> -->
     <!-- <animates></animates> -->
  </div>
</template>

<script>
import ovideo from '@/components/oVideo.vue';
import musicitem from '@/components/music-item.vue';
import testmusic from './testmusic.vue';
import mine from "@/components/userinfo.vue";
import flexibilitu from '@/components/flexibility'
import Loading from '@/components/Loading'
import animates from './animates.vue'
export default {
  name: 'itd',
  components: {
    'o-video': ovideo,
    'music-item': musicitem,
    testmusic,
    mine,
    flexibilitu,
    Loading,
    animates
  },
  data() {
    return {
      
    }
  }
}
</script>


<style lang="scss" scoped>
.itd {
  overflow: auto;
}
</style>

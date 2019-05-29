<template>
  <div class="itd">
     <!-- <o-video></o-video> -->
     <!-- <music-item></music-item> -->
     <!-- <testmusic></testmusic> -->
     <mine></mine>
  </div>
</template>

<script>
import ovideo from '@/components/oVideo.vue';
import musicitem from '@/components/music-item.vue';
import testmusic from './testmusic.vue';
import mine from "@/components/userinfo.vue";
export default {
  name: 'itd',
  components: {
    'o-video': ovideo,
    'music-item': musicitem,
    testmusic,
    mine
  }
}
</script>


<style lang="scss" scoped>
.itd {

}
</style>

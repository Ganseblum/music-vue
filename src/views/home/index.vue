<template>
  <div class="content">
    <NavBar></NavBar>
    <SwiperList></SwiperList>
    <RecommendList></RecommendList>
    <PlayList></PlayList>

  </div>


</template>

<script lang="ts" setup>
// import { getCode } from '@/api/api';
// import { onMounted } from 'vue';
import NavBar from './components/navBar.vue';
import SwiperList from './components/swiperList.vue';
import RecommendList from './components/recommendList.vue';
import PlayList from './components/playList.vue';

// onMounted(() => {

// })

</script>

<style lang="scss" scoped>
.content {
  overflow: hidden;
}
</style>
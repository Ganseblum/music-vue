<template>
  <div class="content">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in bannerList" :key="index"><img :src="item.pic" alt=""></van-swipe-item>
    </van-swipe>
  </div>

</template>

<script lang="ts" setup>
import { getBanner } from '@/api/api';
import { onMounted, reactive } from 'vue';

let bannerList = reactive<banners>([])
type banners = {
  pic: string
}[]

onMounted(() => {
  getBanner().then((res) => {
    bannerList.push(...res.banners)
  })
})

</script>

<style lang="scss" scoped>
.content {
  margin-top: 20px;
  overflow: hidden;

  :deep(.my-swipe) {
    height: 400px;
    width: 720px;
    overflow: hidden;
    border-radius: 5px;

    img {
      width: 720px;
      height: 400px;
      border-radius: 5px;
    }

    .van-swipe__track {
      display: flex !important;
    }
  }
}
</style>


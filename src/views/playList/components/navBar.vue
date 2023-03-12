<template>
  <div class="content">
    <div class="left">
      <svg class="icon" aria-hidden="true" @click="goBack">
        <use xlink:href="#icon-xitongfanhui2-copy"></use>
      </svg>
      <span>歌单</span>
    </div>
    <div class="right">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-sousuo2-copy"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-fenbuduiqi2-copy"></use>
      </svg>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
const router = useRouter()
const goBack = () => {
  router.back()
}
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;

  .left {
    display: flex;
    width: 200px;
    justify-content: space-around;
    align-items: center;

    span {
      font-size: 35px;
      color: white;
      font-weight: 800;
    }
  }

  .right {
    display: flex;
    width: 200px;
    justify-content: space-around;
  }

  .icon {
    width: 40px;
    height: 40px;
  }
}
</style>
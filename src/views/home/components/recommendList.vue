<template>
  <div class="content">
    <div class="item">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-rili"></use>
      </svg>
      每日推荐
    </div>
    <div class="item">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-zhexiantu"></use>
      </svg>
      私人FM
    </div>
    <div class="item">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-yiwen"></use>
      </svg>
      歌单
    </div>
    <div class="item">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-tixing"></use>
      </svg>
      排行榜
    </div>
  </div>

</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.content {
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .icon {
    width: 100px;
    height: 100px;
  }
}
</style>
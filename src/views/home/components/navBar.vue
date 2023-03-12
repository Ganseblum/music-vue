<template>
  <div class="content">
    <div class="left">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-fenbuduiqi"></use>
      </svg>
    </div>
    <div class="center">
      <div>我的</div>
      <div>发现</div>
      <div>云村</div>
      <div>视频</div>
    </div>
    <div class="right">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-sousuo"></use>
      </svg>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.content {
  width: 720px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .icon {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
  }

  .center {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

}
</style>
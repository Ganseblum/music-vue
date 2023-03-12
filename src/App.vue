<template>
  <div class="content">
    <div class="head"></div>
    <div class="contentBox">
      <div class="slid"></div>
      <div class="container"></div>
    </div>
    <!-- <router-view /> -->
    <!-- <audio-box></audio-box> -->
    <!-- <div class="aa">
      <div class="b"></div>
      <div class="c"></div>
      <div class="d"></div>
      <div class="f" style="width: 6.25rem;height:6.25rem;background:red"></div>
      <el-button type="primary" style="width: 6.25rem;height:6.25rem;">Primary</el-button>
    </div>

    <div class="box">
      <div class="bottomBox"></div>
      <div class="topBox">
        aaa
      </div>

    </div> -->

  </div>
</template>

<sdript lang="ts" setup>


</sdript>

<style lang="scss" scoped>
.content {
  background-color: red;
  min-height: 100vh;
  /* height: auto; */
  padding: 0;
  margin: 0;
  box-sizing: border-box;

  .contentBox {
    display: flex;
    background-color: black;
    height: 980px;
  }

  .slid {
    width: 100px;
    height: auto;
    background-color: green;
  }

  .container {
    width: 100%;
    height: 100%;
    background-color: yellow;
  }

  .head {
    height: 100px;
    width: 100%;
    /* margin-left: 200px; */
    background-color: blue;
  }

  .box {

    margin-top: 200px;
    box-sizing: border-box;
    margin-left: 200px;

    .topBox,
    .bottomBox {
      width: 200px;
      height: 100px;
      position: absolute;
      background-color: red;
      transition: 500ms all;
    }

    .topBox {
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 40px;
      transform: translate(-7px, -10px);
      background-color: blue;

    }

    .topBox:hover {
      transform: translate(0, 0);

    }
  }

  .aa {
    display: flex;

  }

  .b,
  .c,
  .d {
    width: 100px;
    height: 100px;
  }

  .b {
    background-color: red;
  }

  .c {
    background-color: blue;
  }

  .d {
    background-color: yellow;
  }

}

@media only screen and (max-width: 768px) {
  .aa {
    display: block !important;
  }
}
</style>



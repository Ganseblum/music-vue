<template>
  <div class="topContent">
    <h3>发现好歌单</h3>
    <span>查看更多</span>
  </div>
  <div class="bottomContent">
    <van-swipe :loop="false" :width="125" style="width:100%">
      <van-swipe-item class="box" v-for="item in playList" :key="item.id" @click="goPlayDet(item.id)">
        <img class="item" :src="item.picUrl" />
        <div class="count">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-kaishi"></use>
          </svg>
          212
        </div>
        <div class="itemDet">
          {{item.name}}
        </div>
      </van-swipe-item>

    </van-swipe>



  </div>

</template>

<script lang="ts" setup>
import { getPlayList } from '@/api/api';
import { onMounted, reactive } from 'vue';
import { useRouter } from 'vue-router';
type List = {
  name: string,
  id: number,
  picUrl: string,
  playCount: number
}[]
const playList = reactive<List>([])

onMounted(() => {
  getPlayList().then((res) => {
    console.log(res.result);
    playList.push(...res.result)
  })
})
const router = useRouter()
const goPlayDet = (id: number) => {
  router.push({
    path: '/playList',
    query: { id }
  })
}
</script>

<style lang="scss" scoped>
.topContent {
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    border: 1px solid lightgray;
    padding: 15px;
    border-radius: 50px;
  }
}

.bottomContent {
  display: flex;
  width: 100%;

  :deep(.van-swipe__track) {
    display: flex !important;
  }


  .box {
    position: relative;

    .itemDet {
      width: 220px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .count {
      position: absolute;
      top: 5px;
      right: 30px;
      display: flex;
      align-items: center;
      color: white;

      .icon {
        width: 40px;
        height: 40px;
      }
    }

    .item {
      width: 220px;
      height: 230px;
      border-radius: 15px;
      background-color: red;
    }
  }


}
</style>
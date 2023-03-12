<template>

  <div class="bgimg">
    <img :src="musicDet.coverImgUrl" alt="" class="bgimg">
    <div class="topContent" v-if="flag">
      <NavBar></NavBar>
      <div class="musicDet">
        <img :src="musicDet.coverImgUrl" alt="" class="coverImg">
        <div class="musicInfo">
          <div class="title">{{musicDet.name}}</div>
          <div class="author">
            <img class="authorImg" :src="musicDet.creator?.avatarUrl" alt="">
            {{musicDet.creator?.nickname}}
          </div>
          <div class="det">{{musicDet.description}}</div>
        </div>
      </div>

      <div class="musicComd">
        <div class="item">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shangdian"></use>
          </svg>
          <span>更多</span>
        </div>

        <div class="item">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shouyinji"></use>
          </svg>
          <span>更多</span>
        </div>
        <div class="item">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-liwu"></use>
          </svg>
          <span>更多</span>
        </div>
        <div class="item">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-haoping"></use>
          </svg>
          <span>更多</span>
        </div>
      </div>
    </div>

    <div class="playListBox">
      <div class="item" v-for="(item,index) in musicList" :key="item.id" @click="getMusicDets(index)">
        <span>{{index +1}}</span>
        <div class="left">
          <div class="top">{{item.name}}</div>
          <div class="bottom">作者{{index+1}}</div>
        </div>
        <div class="right">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-bofang"></use>
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-fenbuduiqi"></use>
          </svg>
        </div>
      </div>
    </div>


  </div>



</template>

<script lang="ts" setup>

import { onMounted, ref } from 'vue'
import { getPlayListDet, getMusicList, } from '@/api/api';
import { useRoute } from 'vue-router';
import NavBar from './components/navBar.vue';
import { useStore } from 'vuex';
type musicDetType = {
  coverImgUrl?: string,
  description?: string,
  name?: string,
  creator?: {
    nickname?: string,
    avatarUrl?: string,
  }
}

type musicListType = {
  name: string,
  id: number
}[]
const musicList = ref<musicListType>([])
const musicDet = ref<musicDetType>({})
const flag = ref<boolean>(false)
const route = useRoute()
onMounted(() => {
  getPlayListDet({ id: route.query.id as unknown as number }).then(res => {
    musicDet.value = res.playlist
    flag.value = true
  })
  getMusicLists()


})
const store = useStore()
const getMusicDets = (index: number) => {
  // store.dispatch('getMusicDet', id)

  // store.commit('setMusice', { musicList, index })


  store.dispatch('getMusicDet', { musicList, index })

}

const offset = ref(1)
const getMusicLists = () => {
  getMusicList({
    id: route.query.id as unknown as number, limit: 10, offset: offset.value
  }).then(res => {

    if (offset.value === 1) {
      musicList.value = res.songs
    } else {
      musicList.value.push(...res.songs)

      // musicList.value = musicList.value.concat(...res.songs)
    }

  })
}
window.onscroll = function () {
  // let a = document.querySelector('.musicDet')
  // let body = document.querySelector('body')
  // console.log(window.scrollTop);
  // console.log(body?.scrollTop);

  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  // var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
  // var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
  if (scrollTop % 100 == 0) {
    offset.value += 1
    // console.log(offset.value)
    getMusicLists()
    console.log('触底了');

  }
  // console.log("距顶部" + scrollTop + "可视区高度" + windowHeight + "滚动条总高度" + scrollHeight)
}


</script>

<style lang="scss" scoped>
.bgimg {
  padding-bottom: 100px;
  position: absolute;
  width: 680px;
  z-index: -1;

  .bgimg {
    height: 550px;
    filter: blur(50px);
  }
}

.topContent {
  .musicDet {
    width: 680px;
    margin: auto;
    margin-top: 50px;
    display: flex;

    .coverImg {
      width: 300px;
      height: 300px;
      border-radius: 10px;
    }

    .musicInfo {
      display: flex;
      margin-left: 10px;
      flex-direction: column;
      justify-content: space-around;

      .title {
        color: white;
        font-size: 35px;
        overflow: hidden;
        width: 400px;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .author {
        display: flex;
        align-items: center;
        color: lightgray;

        .authorImg {
          width: 80px;
          border-radius: 50%;
          height: 80px;
        }
      }

      .det {
        width: 400px;
        color: lightgray;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
    }

  }

  .musicComd {
    display: flex;
    margin-top: 30px;
    align-items: center;
    justify-content: space-around;

    .icon {
      width: 80px;
      height: 80px;
    }

    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }
  }

}


.playListBox {
  height: auto;
  width: 720px;
  margin-top: 50px;
  height: auto;
  background-color: lightblue;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  padding-top: 50px;

  .item {
    display: flex;
    width: 700px;
    margin: auto;
    flex: 7;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;

    span {
      flex: 1;
    }

    .left {
      flex: 5;
      display: flex;
      flex-direction: column;

      .top {
        flex: 1;
        font-weight: 600;
      }
    }

    .right {
      .icon {
        width: 40px;
        margin-right: 20px;
        height: 40px;
      }
    }
  }
}
</style>
<template>
  <div class="content" @click="changImg" v-if="!showLrc">
    <img src="@/assets/11.jpg" alt="" class="bgimg">
    <div class="box">
      <div class="top">
        <svg class="icon" aria-hidden="true" @click.self="goBack">
          <use xlink:href="#icon-xitongfanhui"></use>
        </svg>
      </div>
      <div class="center">
        <img src="@/assets/1.png" alt="" :class="['zhizhen',start ? 'zhizhengActive':''] " />
        <img src="@/assets/11.jpg" alt="" :class="['yuanquan',start ? 'rotateActive':'rotateStop']">
      </div>
    </div>
  </div>


  <div class="content" @click="changImg" v-if="showLrc">
    <img src="@/assets/11.jpg" alt="" class="bgimg">
    <div class="box">
      <div class="top">
        <svg class="icon" aria-hidden="true" @click.self="goBack">
          <use xlink:href="#icon-xitongfanhui"></use>
        </svg>
      </div>

      <div class="hiddenBox" ref="lrcRef">
        <div class="lrcBox">
          <!--  -->
          <div :class="['item', (item.times < nowTime  && item.pre > nowTime)  ? 'activeLrc':'']"
            v-for="(item,index) in lrcArr" :key="index">
            {{item.lyric}}

          </div>
        </div>
      </div>

    </div>


  </div>


</template>

<script lang="ts" setup>
import { getLyrics } from '@/api/api';
import { computed } from '@vue/reactivity';
import { watch, ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
const store = useStore()
const start = ref<boolean>(store.state.playMusic)
const lrcArr = ref()
const showLrc = ref<boolean>(false)

const changImg = () => {
  showLrc.value = !showLrc.value
}

onMounted(() => {

  getLyrics(store.state.id).then(res => {
    let lrc = res.lrc.lyric
    let arr
    if (lrc) {
      arr = lrc.split(/[(\r\n)\r\n]+/).map((item: string) => {
        // console.log(item);
        // console.log(item);
        let min = item.slice(1, 3)
        let ss = item.slice(4, 6)
        let ms = item.slice(7, 9)
        let lyric
        if (item.indexOf(']') === 9) {
          lyric = item.slice(10, lrc.length)

        } else if (item.indexOf(']') === 10) {
          lyric = item.slice(11, lrc.length)
        }
        let times = parseInt(min) * 60 * 1000 + parseInt(ss) * 1000 + parseInt(ms)
        // console.log(min, ss, ms, lyric);

        return { min, ss, ms, lyric, times }
      })
    }
    lrcArr.value = arr
    lrcArr.value.forEach((item: any, index: number) => {
      if (index < lrcArr.value.length) {
        item.pre = lrcArr.value[index + 1].times
        // console.log(lrcArr.value[index + 1].times);
      }
    })
  })
})

const nowTime = computed(() => {
  return parseFloat(store.state.times) * 1000
})


const lrcRef = ref<HTMLElement>()
watch(nowTime, () => {
  let lrcDiv: HTMLDivElement = document.querySelector('div.activeLrc') as HTMLDivElement
  if (lrcDiv && lrcDiv.offsetTop > 300 && lrcRef.value) {
    lrcRef.value.scrollTop = lrcDiv.offsetTop - 300
  }

})

const router = useRouter()

const goBack = () => {
  router.back()
}


</script>

<style lang="scss" scoped>
.activeLrc {
  color: white;
  font-size: 40px;
}

.content {
  .bgimg {
    filter: blur(50px);
    position: absolute;
    z-index: -1;
  }

  height: 93vh;
  overflow: hidden;
  position: relative;

  .box {
    height: 97vh;
    display: flex;
    flex-direction: column;

    .icon {
      width: 50px;
      height: 50px;
    }

    .top {
      display: flex;
      align-items: center;
      width: 100%;
      height: 60px;
    }

    .center {
      margin-top: 60px;
      position: relative;
      height: 400px;

      .zhizhen {
        width: 120px;
        height: 230px;
        left: 50%;
        position: absolute;
        transform-origin: left top;
        transform: rotate(-15deg);
        transition: all 1s;
        z-index: 99;
      }

      .zhizhengActive {
        transform: rotate(1deg);
      }

      .yuanquan {
        width: 270px;
        border-radius: 50%;
        height: 270px;
        position: absolute;
        left: 35%;
        transform: translateX(-50%);
        top: 40%;
        animation: rotate 10s infinite linear;
      }

      .rotateActive {
        animation-play-state: running;
      }

      .rotateStop {
        animation-play-state: paused;
      }

      @keyframes rotate {
        0% {
          transform: rotateZ(0deg);
        }

        100% {
          transform: rotateZ(-360deg);
        }
      }
    }

    .bottom {
      overflow: hidden;
      position: fixed;
      height: 100px;
      width: 720px;
      background-color: lightgray;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
  }

  .hiddenBox {
    height: 1050px;
    overflow: auto;
    scroll-behavior: smooth;
  }

  .lrcBox {
    margin-top: 50px;
    overflow: hidden;

    .item {
      text-align: center;
    }
  }


}
</style>
<template>
  <div class="content" @click="changeShow">

    <audio ref="audio" :src="url"></audio>

    <svg class="icon" aria-hidden="true" @click.stop="changeAudio" v-if="!flag">
      <use xlink:href="#icon-bofang"></use>
    </svg>

    <svg class="icon" aria-hidden="true" @click.stop="changeAudio" v-if="flag">
      <use xlink:href="#icon-weibiaoti--"></use>
    </svg>

    <svg class="icon" aria-hidden="true" @click.stop="nextMusic">
      <use xlink:href="#icon-qiehuanqiyou"></use>
    </svg>

  </div>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex';
import { computed, ref, watch } from 'vue'
import { useRouter } from 'vue-router';
const audio = ref<HTMLAudioElement>()


const aa = function () {
  window.setInterval(() => {
    store.commit('setTimes', audio.value?.currentTime)
  }, 500)
}
aa()

const router = useRouter()
const changeShow = () => {
  router.push({
    path: "/musicDet"
  })
}

const store = useStore()
const flag = ref<boolean>(store.state.playMusic)
const changeAudio = () => {
  if (!flag.value) {
    flag.value = !flag.value
    audio.value?.play()
    store.commit('setPlayMusic', true)

  } else {
    flag.value = !flag.value
    audio.value?.pause()
    store.commit('setPlayMusic', false)
  }
}





const id = computed(() => {
  return store.state.id
})

const url = computed(() => {
  return store.state.url
})
watch(id, () => {
  audio.value?.play()
  flag.value = true
}, { flush: 'post' }
);

watch(url, () => {
  audio.value?.play()
  flag.value = true
}, { flush: 'post' }
);

// const router = useRouter()
// const goDet = () => {
//   // router.push({
//   //   path: '/musicDet'
//   // })
// }


const nextMusic = () => {
  const a = store.state.music
  let b = store.state.activeMusic + 1
  if (b > a.length) {
    b = 0
  }

  // store.commit('setActiveMusic', 5)
  store.dispatch('getMusicDet', { musicList: a, index: b })
}
</script>

<style lang="scss" scoped>
:deep(.van-popup) {
  width: 720px !important;
  height: 100vh !important;
}

.box {
  width: 720px !important;
  height: 100vh !important;
  position: absolute;
}




.content {
  width: 720px;
  height: 100px;
  position: fixed;
  bottom: 0;
  z-index: -1;
  background-color: lightgray;

  .icon {
    width: 60px;
    height: 60px;
  }
}
</style>
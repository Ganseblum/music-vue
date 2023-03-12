import { createStore } from "vuex";
import createPersistedstate from "vuex-persistedstate";

import { getMusicDet } from "../api/api";
export default createStore({
  state: {
    id: 1430583016,
    url: "http://m701.music.126.net/20221004171734/dafcaa9d90081c4950c72b21fca4ec43/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/14096436041/b811/9137/4055/7f761d9d6e630bcab156a1496f648ffd.mp3",
    playMusic: false,
    times: 0,
    music: [],
    activeMusic: 0,
    list: [
      {
        id: 2
      }
    ]
  },
  getters: {},
  mutations: {
    setMusicDet: (state, value) => {
      state.id = value.id;
      state.url = value.url;
    },
    setPlayMusic: (state, value) => {
      state.playMusic = value;
    },
    setTimes: (state, value) => {
      state.times = value;
    },
    setActiveMusic: (state, value) => {
      state.activeMusic = value;
    },

    setMusice: (state, value) => {
      state.activeMusic = value.index;
      state.music = value.musicList;
      state.id = state.music[state.activeMusic]["id"];
    }
  },
  actions: {
    getMusicDet: (ctx, value) => {
      ctx.commit("setMusice", value);

      getMusicDet(ctx.state.id).then((res) => {
        const data = res.data[0];
        ctx.commit("setMusicDet", { id: data.id, url: data.url });
      });
    }
  },
  modules: {},
  plugins: [
    //默认是存储在localStorage中
    createPersistedstate({
      // // key: 存储数据的键名
      // key: "longStore",
      // //paths:存储state中的那些数据
      // paths: ["name"]
      storage: window.localStorage,

      reducer(val) {
        return {
          // 只储存state中的值
          id: val.id,
          url: val.url,
          playMusic: val.playMusic,
          activeMusic: val.activeMusic
        };
      }
    })
  ]
});

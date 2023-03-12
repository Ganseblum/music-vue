import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const index = () => import("@/views/home/index.vue");
const playList = () => import("@/views/playList/index.vue");
const musicDet = () => import("@/views/playList/components/musicDet.vue");
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/index"
  },
  {
    path: "/index",
    name: "home",
    component: index
  },
  {
    path: "/playList",
    name: "playList",
    component: playList
  },
  {
    path: "/musicDet",
    name: "musicDet",
    component: musicDet
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;

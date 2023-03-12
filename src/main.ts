import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import getVant from "./utils/plugins";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import "./app.css";
import '../rem.js'
const app = createApp(App);
app.use(ElementPlus);

getVant(app);

app.use(store);
app.use(router);
app.mount("#app");

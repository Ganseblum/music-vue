import { Swipe, SwipeItem, Popup } from "vant";
import { App } from "vue";

const vantList = [Swipe, SwipeItem, Popup];
export default function getVant(app: App<Element>): void {
  vantList.forEach((item) => {
    return app.use(item);
  });
}

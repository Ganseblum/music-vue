// 类型别名
import instance from "../utils/api2";
type PromiseRes<T> = Promise<result<T>>;
interface result<T> {
  code: number;
  data: T;
}
interface loginRes {
  token: string;
}
interface numbers {
  id: number;
}
export const getBannerss = (data: numbers): PromiseRes<loginRes> =>
  instance.get("/banner/banner", { params: data, });

getBannerss({ id: 1 }).then((res) => {
  console.log(res);
});

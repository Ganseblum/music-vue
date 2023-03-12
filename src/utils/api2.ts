import axios from "axios"; //引入

const baseURL = "/api";

const instance = axios.create({
  baseURL: baseURL,
  timeout: 30000 //设置最大请求时间
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  (result) => {
    return result.data;
  },
  (err) => {
    return Promise.reject(err);
  }
);
export default instance;

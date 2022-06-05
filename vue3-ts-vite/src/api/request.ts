import axios from 'axios';
import {Message} from 'element-ui';

// 创建 axios 实例
let instance = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API,
  timeout: 1000 * 10,
});

// 创建 axios 实例
export let instanceV2 = axios.create({
  // baseURL: process.env.VUE_APP_BASE_V2_API,
  timeout: 1000 * 30,
});
let instances = [instance, instanceV2];

// 请求拦截
instances.forEach((n) => {
  n.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  n.interceptors.response.use(
    // 请求成功
    (res) => {
      return Promise.resolve(res.data.data);
    },
    // 请求失败
    (error) => {
      Message({
        showClose: true,
        message: error.data && error.data.message,
        type: 'error',
        duration: 5 * 1000,
      });
      return Promise.reject(error);
    }
  );
});

export default instance;

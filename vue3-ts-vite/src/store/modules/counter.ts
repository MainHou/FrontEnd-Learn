import {defineStore} from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      count: 0,
    };
  },
  actions: {
    increment() {
      this.count++;
    },
    decrease() {
      this.count--;
    },
    /**
     * 登录
     * @param account 账号
     * @param pwd 密码
     * @returns
     */
    async login(account: string, pwd: string) {
      const {data} = await api.login(account, pwd);
      const appStore = useAppStore();
      appStore.setData(data); // 调用 app store 里的 action 方法
      return data;
    },
  },
});

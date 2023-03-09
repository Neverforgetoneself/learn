import { defineStore } from "pinia";
type user = {
  name: string;
  age: number;
};
const login = (): Promise<user> => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res({
        name: "cuiwang",
        age: 18,
      });
    }, 2000);
  });
};
export const useTestStore = defineStore("test", {
  state: () => {
    return {
      name: "崔旺",
      age: 18,
      user: <user>{},
    };
  },
  getters: {},
  actions: {
    changeName(param: string) {
      this.name = param;
    },
    async getUser() {
      const user = await login();
      this.user = user;
    },
  },
});

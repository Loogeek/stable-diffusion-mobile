// // +—————————————————————————————————————————————————————————————————————
// // | Created by 元岳科技
// // +—————————————————————————————————————————————————————————————————————
// // | Copyright (c) 2013~2023 http://www.yuanyuekj.com/ All rights reserved.
// // +—————————————————————————————————————————————————————————————————————
// // | GITEE: https://gitee.com/yuanyuekeji/stable-diffusion-mobileui
// // +—————————————————————————————————————————————————————————————————————
// // | GITHUB: https://github.com/yuanyuekeji/stable-diffusion-mobileui
// // +—————————————————————————————————————————————————————————————————————

// import Vue from "vue";
// import Vuex from "vuex";

// Vue.use(Vuex);
// const debug = process.env.NODE_ENV !== "production";

// export default new Vuex.Store({
//   modules,
//   getters,
//   strict: debug
// });
import { createApp } from 'vue'
import { createStore } from 'vuex'
import modules from "./modules";
import getters from "./getters";
const debug = process.env.NODE_ENV !== "production";

// 创建一个新的 store 实例
const store = createStore({
  modules,
    getters,
  strict: debug
  // state () {
  //   return {
  //     count: 0
  //   }
  // },
  // mutations: {
  //   increment (state) {
  //     state.count++
  //   }
  // }
})

// const app = createApp({ /* 根组件 */ })

// 将 store 实例作为插件安装
// app.use(store)

export default store
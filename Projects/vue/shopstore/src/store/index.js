import Vue from 'vue'
import Vuex from 'vuex'

import {
  mutations
} from "./mutations"
import {
  actions
} from "./actions"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: "商城首页", // 标题
    showNav: true,  // 是否显示导航
    showTab: true, // 是否显示标签栏
    loginUser: null, // 登录用户
    shoppingCart: [] // 购物车
  },
  mutations,
  actions
})

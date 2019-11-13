import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home'
import Search from '@/views/Search'
import ShoppingCart from '@/views/Shopping-Cart'
import Mine from '@/views/Mine'
import Infos from '@/views/Infos'
import LoginRegister from '@/views/LoginRegister'
import Setting from '@/views/Setting'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'home', component: Home, meta:{title:"商城首页"} },
  { path: '/search', name: 'search', component: Search, meta:{title:"搜索"} },
  { path: '/shopping-cart', name: 'ShoppingCart', component: ShoppingCart, meta:{title:"购物车"} },
  { path: '/mine', name: 'mine', component: Mine,  meta:{title:"我的"} },
  { path: '/infos', name: 'infos', component: Infos,  meta:{title:"详情"} },
  { path: '/login-register', name: 'loginRegister', component: LoginRegister,  meta:{title:"登录"} },
  { path: '/setting', name: 'setting', component: Setting,  meta:{title:"设置"} },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

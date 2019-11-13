import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './http'
import "@fortawesome/fontawesome-free/css/all.css"

Vue.config.productionTip = false

// vant
import { Swipe, SwipeItem, Lazyload, Search, Stepper, Toast, Dialog } from 'vant';
Vue.use(Swipe).use(SwipeItem).use(Lazyload).use(Search).use(Stepper).use(Toast).use(Dialog);

// axios
Vue.prototype.$axios = axios;

function set(to) {
  let names = ["infos", "loginRegister", "setting"];
  store.commit("SET_TITLE", to.meta.title);
  store.commit("SET_NAV_STATE", to.name == "search" || to.name=="loginRegister" ? false : true);
  store.commit("SET_TAB_STATE", names.includes(to.name) ? false : true);
}

// 导航前置守卫
router.beforeEach((to, from, next) => {
  if (to.name == "ShoppingCart" || to.name == "mine") {
    let loginUser = store.state.loginUser;
    if (!loginUser) {
      Dialog.confirm({
        title: "温馨提示",
        message: "您未登录，点击确认前往登录！"
      }).then(() => {
        set(to);
        // 跳转至登录页
        next("/login-register");
      }).catch(() => { });
    } else {
      set(to);
      next();
    }
  } else {
    set(to);
    next();
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

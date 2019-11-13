<template>
  <div class="page setting">
    <!-- 功能列表 -->
    <ul class="func-list">
      <li v-for="(item, index) in funcs" :key="index" @click="handleFuncClick">
        <section>
          <i :class="item.icon"></i>
          <span class="text">{{item.text}}</span>
        </section>
        <i class="fas fa-angle-right"></i>
      </li>
    </ul>
    <p class="quit" @click="quit">退出登录</p>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  name: "setting",
  data() {
    return {
      funcs: [
        { text: "清理缓存", icon: "fas fa-trash" },
        { text: "修改密码", icon: "fas fa-trash" },
        { text: "意见反馈", icon: "fas fa-envelope" }
      ]
    };
  },
  methods: {
    ...mapMutations(["SET_LOGIN_USER"]),
    handleFuncClick() {
      this.$toast.fail({
        message: "敬请期待！",
        duration: 500
      });
    },
    // => 退出登录
    quit() {
      this.SET_LOGIN_USER(null);
      this.$dialog.confirm({
        title: "温馨提示",
        message: "您确定要退出登录吗？"
      }).then(() => {
        this.SET_LOGIN_USER(null);
        this.$router.replace("/");
      }).catch(() => { });
    }
  }
};
</script>


<style lang="less" scoped>
#app .page {
  height: calc(100% - 64px);
}
.func-list {
  background: #ffffff;
  margin-bottom: 10px;
  box-sizing: border-box;
  padding: 0 8px;
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0 8px;
    line-height: 45px;
    &:not(:last-child) {
      border-bottom: 1px solid #eeeeee;
    }
    .text {
      margin-left: 8px;
    }
  }
}
.quit {
  line-height: 45px;
  background: #ffffff;
  text-align: center;
  letter-spacing: 2px;
  font-size: .5rem;
  color: darkred;
}
</style>
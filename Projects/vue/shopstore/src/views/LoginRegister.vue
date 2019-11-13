<template>
  <div class="page login-register">
    <section class="close fas fa-undo" @click="handleCloseClick"></section>
    <!-- <img class="logo" :src="$axios.defaults.baseURL + '/images/logo.jpeg'" alt /> -->
    <h1 class="logo">JUST DO IT</h1>
    <!--表单元素 -->
    <form action="javascript:;">
      <section class="item">
        <i class="fas fa-user"></i>
        <input type="text" placeholder="用户名" v-model="username" />
      </section>
      <section class="item">
        <i class="fas fa-lock"></i>
        <input type="password" placeholder="请填写密码" v-model="password" />
      </section>
      <section v-show="!login" class="item">
        <i class="fas fa-lock"></i>
        <input type="password" placeholder="请确认密码" v-model="confirmPsw" />
      </section>
      <section v-show="!login" class="item">
        <i class="fas fa-phone-square-alt"></i>
        <input type="tel" placeholder="请填写手机号" v-model="tel" />
      </section>
      <section class="handle">
        <section v-show="login" class="remember">
          记住账号或密码？
          <input type="checkbox" v-model="isRemember" />
        </section>
        <section v-show="!login" class="btn go-login" @click="login = !login">返回登录</section>
        <section v-show="login" class="btn go-register" @click="login = !login">没有账号？点击注册</section>
      </section>
      <section
        :class="['login-register-btn', {'err': !isComplete}]"
        v-text="login ? '登录' : '注册'"
        @click="handleBtnClick"
      ></section>
    </form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "login-register",
  data() {
    return {
      login: true,
      isRemember: false,
      username: "", // 用户名
      password: "", // 密码
      confirmPsw: "", // 确认密码
      tel: "" // 手机号码
    };
  },
  mounted() {
    if (localStorage.SHOP_STORE_SAVE_USER) {
      this.isRemember = true;
      let user = JSON.parse(localStorage.SHOP_STORE_SAVE_USER);
      this.username = user.username;
      this.password = user.password;
    }
  },
  watch: {
    isRemember(val) {
      if (!val && localStorage.SHOP_STORE_SAVE_USER) {
        localStorage.removeItem("SHOP_STORE_SAVE_USER");
      }
    },
    login(val) {
      this.username = this.password = this.confirmPsw = this.tel = "";
      if (val && localStorage.SHOP_STORE_SAVE_USER) {
        this.isRemember = true;
        let user = JSON.parse(localStorage.SHOP_STORE_SAVE_USER);
        this.username = user.username;
        this.password = user.password;
      }
    }
  },
  computed: {
    isComplete() {
      if (this.login) {
        return this.username && this.password;
      } else {
        return (
          this.username &&
          this.password &&
          this.confirmPsw &&
          this.tel &&
          this.password == this.confirmPsw
        );
      }
    }
  },
  methods: {
    ...mapMutations(["SET_LOGIN_USER"]),
    handleBtnClick() {
      if (!this.isComplete) return;
      if (this.login) {
        // 登录
        this.handleLogin();
      } else {
        // 注册
        this.handleRegister();
      }
    },
    handleLogin() {
      this.$axios
        .post("/login", {
          username: this.username,
          password: this.password
        })
        .then(res => {
          let { data } = res;
          if (data.code == 200) {
            this.$toast.success({
              message: "登录成功！",
              duration: 500
            });
            this.SET_LOGIN_USER(data.data);
            // 拉取购物车数据 => 触发action
            this.$store.dispatch("GET_SHOPPING_CART");
            if (this.isRemember) {
              localStorage.SHOP_STORE_SAVE_USER = JSON.stringify({
                username: this.username,
                password: this.password
              });
            }
            setTimeout(() => {
              this.$router.go(-1);
            }, 500);
          } else {
            this.$toast.fail({
              message: data.err,
              duration: 500
            });
          }
        });
    },
    handleRegister() {
      let user = {
        username: this.username,
        password: this.password,
        tel: this.tel
      };
      this.$axios.post("/register", user).then(res => {
        let data = res.data;
        if (data.code == 200) {
          this.$toast.success({
            message: "注册成功！",
            duration: 500
          });
          this.SET_LOGIN_USER(user);
          this.$router.go(-1);
        } else {
          this.$toast.fail({
            message: data.err,
            duration: 500
          });
        }
      });
    },
    handleCloseClick() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="less" scoped>
#app .page {
  height: 100%;
}
.close {
  position: fixed;
  top: 10px;
  right: 10px;
  color: gray;
  &:active {
    color: lightgrey;
  }
}
.logo {
  text-align: center;
  line-height: 150px;
  font-family: "Impact";
  letter-spacing: 5px;
  // text-shadow: 1px 1px 5px gray;
}
form {
  box-sizing: border-box;
  padding: 8px;
  .item {
    height: 35px;
    margin: 12px 0 16px;
    border-bottom: 1px solid lightgray;
  }
  input {
    display: inline-block;
    height: 100%;
    box-sizing: border-box;
    padding: 0 8px;
    background: #f5f5f5;
    outline: none;
    border: none;
    font-size: 0.75rem;
  }
  .login-register-btn {
    width: 100%;
    height: 40px;
    border-radius: 6px;
    background: green;
    opacity: 0.85;

    margin-top: 40px;
    color: #ffffff;
    letter-spacing: 3px;
    text-align: center;
    line-height: 40px;
    transition: all 0.25s linear;

    &.err {
      opacity: 0.6;
    }
  }
  .handle {
    display: flex;
    justify-content: space-between;
    font-size: 0.5rem;
    .remember {
      display: flex;
      align-items: center;
    }
    .btn {
      text-decoration: underline;
    }
  }
}
</style>
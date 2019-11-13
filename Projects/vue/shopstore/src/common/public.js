export default function isLogin(vm) {
    return new Promise((resolve, reject) => {
        let loginUser = vm.$store.state.loginUser;
        if (!loginUser) {
            vm.$dialog.confirm({
                title: "温馨提示",
                message: "您未登录，点击确认前往登录！"
            }).then(() => {
                // 跳转至登录页
                vm.$router.push("/login-register");
            }).catch(() => { });
        }else {
            resolve();
        }
    })
}
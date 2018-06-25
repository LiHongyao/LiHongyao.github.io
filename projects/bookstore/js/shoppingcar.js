
var model = {
    isEditing: false,
    shoppingcar: (function(){
        if(localStorage.shoppingcar) {
            return JSON.parse(localStorage.shoppingcar);
        }else {
            return [];
        }
    })()
}
new Vue({
    el: "#app",
    data: model,
    methods: {
        // 编辑
        edit() {
            this.isEditing = true;
        },
        // 取消
        cancle() {
            this.isEditing = false;
        },
        // 删除
        remove() {

        }
    }
})
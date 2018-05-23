

// 全局注册
Vue.component("button-counter", {
    // data 必须是一个函数
    data: function() {
        return {
            count: 0
        }
    },
    template:'<button @click="count++">You Click Me {{ count }} times.</button>'
});


// 局部注册
let changeColorBtn = {
    data: function() {
        return {
            color: "black",
            flag: false
        }
    },
    methods: {
        clickBtn: function() {
            this.flag = !this.flag;
            this.color = this.flag ? "red" : "blue";
            console.log(this.color)
        }
    },
    template: '<button type="button" :style="{color: color}"  @click="clickBtn">点击我改变颜色</button>'
}

let props = {
    props: ["name", "origin"],
    template: `
        <div class="item">
            <p>姓名：{{name}}   籍贯：{{origin}}</p>
            <slot></slot>
        </div>
    `
}





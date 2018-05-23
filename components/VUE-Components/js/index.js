
let data = {
    posts: [
        {name: "李鸿耀", origin: "四川省成都市"},
        {name: "周杰伦", origin: "台湾省高雄市"},
        {name: "郭艳萍", origin: "四川省眉山市"}
    ]
}

let vm = new Vue({
    el: "#components-demo",
    data: data,
    components: {
        "change-color": changeColorBtn,
        "props": props
    }
});


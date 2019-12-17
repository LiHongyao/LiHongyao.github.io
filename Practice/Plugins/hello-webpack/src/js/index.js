// 导入模块
// const { text } = require("./util");
import { text } from "./util";
// 导入样式
import "../less/index.less";


console.log(text);

let sayHi = () => {
    console.log("Hi");
}
sayHi();

let { username, password } = {
    username: "admin",
    password: "123"
};
console.log(username, password);


$(".title").text("Hello, jquery！");
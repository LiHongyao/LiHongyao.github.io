
// - commonJS导出模块
// 写法1
/*
module.exports = {
    name: 'Henry',
    age: 28
};*/

// 写法2
/*
module.exports.name = 'Henry';
module.exports.age  = 28;*/

// 写法3
/*
exports.name = 'Henry';
exports.age  = 28;*/


// - ES6 导出模块

/*
function sayHello(name) {
    console.log('Hello, ' + name + '!');
};
export {
    sayHello
}*/

export default (a, b) => {
    console.log(a + b);
}











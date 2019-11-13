// 1. 获取元素，并通过ES6的扩展运算符将其转换为数组
let menu_items = [...document.querySelectorAll(".menus .item")];
let ct_items   = [...document.querySelectorAll(".contents .item")];
// 2. 定义变量记录上一次选中的下标，默认值为0
let last_sel_index = 0; 
// 3. 遍历菜单项
menu_items.forEach(function (menu_item) {
    // 4. 添加点击事件
    menu_item.onclick = function () {
        // 5. 获取单击的当前菜单项的下标
        let index = menu_items.indexOf(this);
        // 6. 通过移除class实现移除上一次菜单项选中和内容显示的效果
        menu_items[last_sel_index].classList.remove("sel");
        ct_items[last_sel_index].classList.remove("show");
        // 7. 通过添加class实现本次菜单选中和内容显示的效果
        this.classList.add("sel");
        ct_items[index].classList.add("show");
        // 8. 更新下标，便于下一次点击时移除本次设置的效果
        last_sel_index = index;
    }
});




# vscode 
https://code.visualstudio.com/
https://github.com/LiHongyao/Blogs/blob/master/13.%20VSCode%20%E5%AE%89%E8%A3%85%E4%B8%8E%E4%BD%BF%E7%94%A8.md

## 快捷方式
tab -> 向右缩减
shift + tab -> 向左缩进
ctr + b -> 展开/收缩工具栏
ctr + shift + x -> 下载插件
alt + l, alt + o -> 通过live server 运行网页

## 插件
live server：即时更新（运行网页的插件）
Relative Path：相对路径 ctr +shift + h

# 2. 前端在线资源
https://github.com/lihongyao

# 3. 字体图标
http://www.fontawesome.com.cn/
〉使用步骤：
a. 下载解压
b. 将font-awesome.min.css & font 文件 拖拽到项目目录中
c. 引入font-awesome.min.css
d. 直接使用　<i class="fa fa-camera-retro"></i> 

https://www.iconfont.cn/

# 4. 相对路径
- 概念：相对于当前文件所在的位置
- 语法
/   进入下一级目录
./  当前目录
../ 返回上一级目录

# 5. HTML 基础

## 元素分类
a. 块级元素（block） -> 独立成行，可以设置尺寸
b. 行内元素（inline） -> 不独立成行，不可以设置尺寸，尺寸是由内容撑起来的
c. 行内块元素（inline-block）-> 不独立成行，可以设置大小


## 常用标签
header：头部
main：主要内容
footer：尾部
div：通用的布局容器标签
ul：无序列表
li：无序列表项
p：段落标签
span：文本标签
a：超链接
img：图片
input：输入框
section：章节标签
article：文章/新闻/博客

# 6. CSS 基础

## 选择器
a. # id选择器，根据id值选取元素
b. . class 选择器，根据class值选取元素
c. , 群组选择器，同时设置多个元素的样式
d. 空格，后代选择器，选取指定元素的后代元素
e. >，子类选择器，指定元素的儿子元素
f. :hover ，鼠标悬浮
g. :first-child，第一个子元素
h. :last-child，最后一个子元素
i. :nth-child(n)，第n个子元素、
j. :not()，排除指定元素


## 定位 position
- 相对定位（relative）：相对于元素自身的位置定位，一般用于位置微调。
- 绝对定位（absolute）：相对于区间范围定位
- 固定定位（fixed）：相对于浏览器窗口定位，一般用于固定悬浮菜单、广告页面、回到顶部按钮.

# 7. JavaScript 基础

## 基础

定义变量：var a = 10;

## 作用域
全局变量：函数外定义的变量
局部变量：函数内定义的变量

全局作用域：整个文件中都可以访问
局部/函数作用域：只能在某个函数内部访问

## 函数
函数就是一个功能，一个模块，函数特征是可复用。
面向对象三大特征：继承、封装、多台
函数就是一种封装
语法形式：
```
    // c 函数
    void sum(int a, int b) {
        return a + b;
    }
    // js 函数
    function sum(a, b) {
        return a + b;
    }
```

## 数据类型

a. 数值-number：10, 3.14
b. 字符串-string：双引号或单引号括起来的字符 "3.14"
c. 布尔值-boolean：true / false
d. 数组-array：[1, true, "Hi", 3]
e. 对象-object：{name:"耀哥", age: 27, job: "Web前端工程师"}
             0    1    2
let nums = ['a', 'b', 'c'];
nums[1]
nums[2] = "f"
# 8. swiper 插件（轮播图）
https://www.swiper.com.cn/

# 9. jquery 

概述：jquery 是js的一个库，简化js操作，并且做了语法兼容。
下载：https://jquery.com/ -> 点击download
      -> 选择 Download the compressed, production jQuery 3.4.1



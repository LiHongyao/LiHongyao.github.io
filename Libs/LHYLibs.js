
/////////////////////////////
/// DOM APIs
/////////////////////////////
/**
 * 查询节点元素
 * @param sel 「string」选择器
 * @param all 「boolean」是否匹配多个元素 
 */
function getEl(sel, isAll) {
    if (isAll) {
        return document.querySelectorAll(sel);
    }
    return document.querySelector(sel);
}
/**
 * 添加事件监听（兼容IE）
 * @param el「element-node」 事件对象
 * @param type 「string」事件类型
 * @param callBack 「function」事件处理函数
 */
function addEvent(el, type, callBack) {
    if (el.attachEvent) {
        el.attachEvent('on' + type, callBack);
    } else {
        el.addEventListener(type, callBack, false);
    }
}

/**
 * 移除事件监听（兼容IE浏览器）
 * @param el 「object」 事件对象
 * @param type「string」事件类型
 * @param callBack「function」事件处理函数
 */
function removeEvent(el, type, callBack) {
    if (el.detachEvent) {
        el.detachEvent('on' + type, callBack);
    } else {
        el.removeEventListener(type, callBack, false);
    }
}

/**
 * 获取非行内样式
 * @param el「element-node」目标元素节点    
 * @param attr 「string」样式属性
 * @returns「any」属性值
 */
function getStyle(el, attr) {
    // 兼容IE
    if (el.currentStyle) {
        return el.currentStyle[attr];
    } else {
        return getComputedStyle(el, null)[attr];
    }
}



/////////////////////////////
/// Effect APIs
/////////////////////////////

/**
 * 瀑布流效果
 * @param {parentSelector} 容器选择器
 * @param {itemSelector} 元素选择器
 * @param {columns} 显示列数，默认值为2
 * @param {gap} 列间距，默认为10
 */
function waterfall({ parentSelector, itemSelector, columns = 2, gap = 10 }) {
    // 1. 获取元素
    let items = document.querySelectorAll(itemSelector);
    // 2. 计算并更新元素的宽度
    const containerWidth = document.querySelector(parentSelector).offsetWidth;
    // 元素宽度 = (容器 - （列数 - 1） * 间距) / 列数
    const itemWidth = (containerWidth - (columns - 1) * gap) / columns;
    items.forEach(element => {
        element.style.width = `${itemWidth}px`;
    });
    // 3.排版
    let arr = []; // 用于判断最小高度的数组
    for (let i = 0, len = items.length; i < len; i++) {
        if (i < columns) {
            // 对第一行图片进行布局
            items[i].style.top = 0;
            items[i].style.left = (itemWidth + gap) * i + 'px';
            arr.push(items[i].offsetHeight);
        } else {
            // 对接下来的图片进行定位
            // 首先要找到数组中最小高度和它的索引
            let index = arr.indexOf(Math.min(...arr));
            // 设置下一行的第一个盒子位置
            // top值就是最小列的高度 + gap
            items[i].style.top = arr[index] + gap + 'px';
            // left值就是最小列距离左边的距离
            items[i].style.left = items[index].offsetLeft + 'px';
            // 修改最小列的高度 
            // 最小列的高度 = 当前自己的高度 + 拼接过来的高度 + 间隙的高度
            arr[index] = arr[index] + items[i].offsetHeight + gap;
        }
    }
}


/**
 * 打字机效果
 * @param {object} el 显示文字的元素
 * @param {string} str 显示文字
 * @param {number} interval 时间间隔，单位毫秒ms
 */
function effectOfTyping(el, str, interval = 100) {
    // 异常处理
    if (!el || !str) {
        throw new Error("Lack the necessary parameters of function \'effectOfTyping\'.");
    }
    // 清空元素文本内容
    el.textContent = '';
    // 定义下标，用于记录当前打印字符的位置
    let curIdx = 0;
    // 设置定时器，逐帧打印字符
    let t = setInterval(() => {
        // 判断：如果当前打印字符位置等于字符串长度，则表示打印完毕，清除定时器
        if (curIdx === str.length) {
            clearInterval(t);
        } else {
            // 逐帧打印
            el.textContent += str.charAt(curIdx++);
        }
    }, interval);
}



/**
 * 回到顶部
 * @param {Object} options 配置参数
 * - el 触发元素
 * - duration 持续时间
 * - pageScroll 页面滚动回调
 * - complete 回到顶部完成回调
 */
function scrollToTop(options) {
    // 1. 默认参数
    let defaultOptions = {
        el: "",
        duration: 1000,
        pageScroll: function () { },
        complete: function () { }
    };
    Object.assign(defaultOptions, options);
    // 2. 解构配置参数
    let { el, duration, pageScroll, complete } = defaultOptions;
    // 3. 定义变量
    let isAnimating = false; // 记录当前是否正在执行回到顶部的动画
    let offset = 0,  // 记录偏移
        interval = 15,  // 每一帧持续的时间
        speed = null, // 每一帧位移的距离
        timer = null; // 定时器
    // 4. 监听窗口滚动
    window.addEventListener("scroll", function () {
        // 更新页面滚动的距离
        offset = document.body.scrollTop || document.documentElement.scrollTop;
        // 触发回调函数
        pageScroll && pageScroll(offset);
    });
    // 5.监听按钮点击
    el.onclick = function () {
        // 异常处理
        // 如果当前正在执行动画，则不响应事件
        if (isAnimating) {
            return;
        }
        // 计算每一帧位移的距离
        speed = Math.ceil(offset / (duration / interval));
        // 定时器执行滚动动画
        isAnimating = true;
        timer = setInterval(function () {
            if (offset > 0) {
                document.body.scrollTop = document.documentElement.scrollTop = offset - speed;
            } else {
                // 清除定时器
                clearInterval(timer);
                timer = null;
                isAnimating = false;
                // 矫正误差
                document.body.scrollTop = document.documentElement.scrollTop = 0;
                // 触发回调
                complete && complete();
            }
        }, interval);
    }
}

/**
 * 淡入淡出效果-封装
 * @param element   执行元素
 * @param target    目标值
 * @param duration  持续时间
 * @param completed 回调函数
 */
function fade(element, target, duration, completed) {
    // Exception handling
    if (!element || target == undefined) {
        throw 'Error：Parameter is not complete in function \'changeOpacity\'.';
    }
    // Set the default value
    duration = duration ? duration : 1000;
    // Gets the current opacity
    let curOpa = getCurrentOpacity();
    // Calculating offset
    let offset = target - curOpa;
    // Set the interval
    let interval = 30;
    // Calculating speed
    let speed = offset > 0 ? Math.ceil(offset / (duration / interval)) : Math.floor(offset / (duration / interval));
    // Execute transition animations
    let t = setInterval(function () {
        // Update the current opacity
        curOpa = getCurrentOpacity();
        // Determine whether to reach the target
        if ((offset > 0 && curOpa < target) || (offset < 0 && curOpa > target)) {
            // Frame by frame change
            element.style.opacity = (curOpa + speed) / 100
        } else { // Has completed the transition animation
            element.style.opacity = target / 100;
            clearInterval(t);
            // Invoke the callback function
            if (completed) {
                completed();
            }
        }
    }, interval);

    function getCurrentOpacity() {
        let curOpa = 0;
        // Compatible with IE browser
        if (element.currentStyle) {
            curOpa = element.currentStyle['opacity'] * 100;
        } else {
            curOpa = getComputedStyle(element, null)['opacity'] * 100;
        }
        return curOpa;
    }
}


/////////////////////////////
/// BOM APIs
/////////////////////////////

/**
 * 将location.search转换为对象类型
 * @param {string} searchStr location.search 值
 * @returns {object} 参数对象
 */
function convertSearch(searchStr) {
    // 异常处理
    if (!searchStr) {
        return null;
    } else {
        let str = searchStr.slice(1);
        let strArr = str.split('&');
        let obj = {};
        strArr.forEach(item => {
            let arr = item.split('=');
            let key = decodeURI(arr[0]);
            let val = decodeURI(arr[1]);
            obj[key] = val;
        });
        return obj;
    }
}


/////////////////////////////
/// ERROR APIs
/////////////////////////////

/**
 * 异常处理（断言）
 * @param  {boolean} expression [判断条件]
 * @param  {string} message     [提示信息]
 * @return {object}             [描述错误的对象]
 */
function assert(expression, message) {
    if (!expression) {
        throw new Error(message);
    }
}


/////////////////////////////
/// RANDOM APIs
/////////////////////////////
/**
 * 获取任意数之间的随机数
 * @param  {number} min [最小值]
 * @param  {number} max [最大值]
 * @return {number}     [随机数]
 */
function randomDecimals(min, max) {
    if (min == undefined || max == undefined || isNaN(min) || isNaN(max)) {
        return -1;
    } else {
        return Math.random() * (max - min) + min;
    }
}

/**
 * 获取任意数之间的整数随机数
 * @param  {number} min [最小值]
 * @param  {number} max [最大值]
 * @return {number}     [随机数]
 */
function randomInteger(min, max) {
    if (min == undefined || max == undefined || isNaN(min) || isNaN(max)) {
        return -1;
    } else {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

/**
* 获取随机字符
* @param  {number} length [字符长度]
* @return {string}        [随机结果]
*/
function randomCharacters(length) {
    let bStr = '';
    bStr += 'QWERTYUIOPASDFGHJKLZXCVBNM';
    bStr += 'qwertyuiopasdfghjklzxcvbnm';
    bStr += '0123456789';
    let rStr = '';
    for (let i = 0; i < length; ++i) {
        let idx = Math.floor(Math.random() * bStr.length);
        rStr += bStr.substring(idx, idx + 1);
    }
    return rStr;
}




/////////////////////////////
/// AJAX APIs
/////////////////////////////
/**
 * ajax
 * options{
    url: String,  请求参数
    methods: String, 请求方法（默认get）
    timeout: Number, 请求超时时间（默认1000）
    data: Object, 请求参数
    headers: Object, 头部参数
    success:Function, 成功回调
    fail:Function 失败回调
 }
 */
function ajax(options) {
    // 异常处理
    assert(options.url, "LHY_ERROR: no request url.");
    // 默认参数处理
    let config = {
        methods: "GET",
        timeout: 1000,
        data: {}
    }
    // 合并配置
    Object.assign(config, options);
    // 创建请求对象
    let xhr = new XMLHttpRequest();
    // 配置请求
    xhr.responseType = "json";
    xhr.timeout = config.timeout;
    xhr.open(config.methods, config.url, true);
    // 头部参数
    if (config.headers) {
        for (let key in config.headers) {
            xhr.setRequestHeader(key, config.headers[key]);
        }
    }
    // 发送请求
    xhr.send(config.data);
    // 监听请求
    xhr.onload = function () {
        if (xhr.status == 200) {
            config.success && config.success(xhr.response);
        } else {
            config.fail && config.fail();
        }
    }

}


/////////////////////////////
/// Type APIs
/////////////////////////////


/**
 * 获取对象数据类型
 * @param  {anyObject} val [任意值]
 * @return {anyObject}     [返回数据对应数据类型]
 */
function typefor(val) {
    // 获取参数返回类型（肯定是对象）和构造函数类型
    let call = Object.prototype.toString.call(val);
    // 下标开始位置
    let startIdx = call.indexOf(" ") + 1;
    // 下标结束为止
    let endIdx = call.lastIndexOf("\]");
    // 将截取出来的字符串转成小写字母并返回
    return call.slice(startIdx, endIdx).toLowerCase();
}

/**
 * 类型判断
 */
{
    (function () {
        let types = ["Null", "Undefined", "Number", "String", "Object", "Function", "RegExp", "Math", "Date", "Array", "boolean"];
        types.map(function (type) {
            Object.prototype["is" + type] = function (val) {
                val = val == undefined ? this : val;
                return getType(val) == type.toLowerCase();
            }
        });
    }());
}



/////////////////////////////
/// STORAGE APIs
/////////////////////////////
/**
 *  存储数据
 * @param {Object} options 
 * options {
 *      key:String 存储在本地的key
 *      data:Object 要添加的数据
 *      complete:Function 完成回调，返回所有数据
 * }
 */
function localSave(options) {
    // 创建根数组
    let root = [];
    // 判断本地是否存在对应key的数据
    // 如果存在，则先取到本地数据
    if (localStorage[options.key]) {
        root = JSON.parse(localStorage[options.key]);
    }
    // 将要添加的数据存入根数组
    root.push(options.data);
    // 更新本地
    localStorage[options.key] = JSON.stringify(root);
    // 存储成功
    options.complete && options.complete(root);
}

/**
 * 
 * @param {Object} options 
 * options: {
 *    key:String, 存储在本地的key
 *    condition: Object  -> {"username":"admin"}
 *    complete: Function 完成回调，返回剩余的所有数据
 * }
 */
function localRemove(options) {
    // 条件删除
    if (options.condition) {
        if (localStorage[options.key]) {
            // 获取所有数据
            let datas = JSON.parse(localStorage[options.key]);
            // 获取条件键
            let _key = Object.keys(options.condition)[0];
            // 获取条件值
            let _val = options.condition[_key];
            // 遍历查找
            for (let i = 0, len = datas.length; i < len; i++) {
                // 如果找到了匹配数据
                if (datas[i][_key] == _val) {
                    // 删除数据
                    datas.splice(i, 1);
                    // 更新本地数据
                    localStorage[options.key] = JSON.stringify(datas);
                    options.complete && options.complete(datas);
                    return;
                }
            }
        }
    } else {
        localStorage.removeItem(options.key);
    }

}

/**
 * 修改数据
 * @param {*} options 
 * options:{
 *      key: String, 存在在本地的key
 *      condition: Object, 修改对象
 *      data: Object, 替换的数据
 *      complete: Function 完成回调，返回所有数据
 * }
 */
function localModify(options) {
    // 判断数据是否存在
    if (localStorage[options.key]) {
        // 获取本地数据
        let datas = JSON.parse(localStorage[options.key]);
        // 获取条件键
        let _key = Object.keys(options.condition)[0];
        // 获取条件值
        let _val = options.condition[_key];
        // 查找要修改的数据
        for (let i = 0, len = datas.length; i < len; i++) {
            if (datas[i][_key] == _val) {
                // 修改数据
                Object.assign(datas[i], options.data);
                // 更新本地
                localStorage[options.key] = JSON.stringify(datas);
                options.complete && options.complete(datas);
                return;
            }
        }

    }
}
/**
 * 查询数据
 * @param {Object} options 
 * options: {
 *  key:String, 存在本地的key
 *  condition: Object, 查询条件
 *  complete: Function 回调函数
 * }
 */
function localQuery(options) {
    // 判断本地是否存在对应的key
    if (localStorage[options.key]) {
        // 获取本地存储的所有数据
        let datas = JSON.parse(localStorage[options.key]);
        // 判断是否是条件查询
        if (options.condition) {
            // 获取条件键
            let _key = Object.keys(options.condition)[0];
            // 获取条件值
            let _val = options.condition[_key];
            let index = -1;
            // 遍历查找
            for (let i = 0, len = datas.length; i < len; i++) {
                if (datas[i][_key] == _val) {
                    index = i;
                    break;
                }
            }
            // 根据下标判断是否找到对应的数据
            if (index == -1) { // 没有找到
                options.complete && options.complete(null);
            } else { //找到了
                options.complete && options.complete(datas[index]);
            }
        } else {
            options.complete && options.complete(datas);
        }
    } else {
        options.complete && options.complete(null);
    }
}


/**
 * 注册
 * @param {Object} options 
 * - usr：{
 *    username: ""
 *    password: ""
 * }
 * - key：存在本地的键名（可选），默认值USERS
 * - success：注册成功的回调函数
 * - fail：注册失败的回调函数
 */
function register(options) {
    // 1. 解构参数
    let { usr, key, success, fail } = options;
    key = key || "USERS";
    // 2. 异常处理
    if (!usr.username || !usr.password) {
        throw "用户对象必须使用‘username’和‘password’字段作为用户的账号和密码";
    }
    // 3. 创建空对象
    let usrs = {};
    // 3. 判断本地是否存在【用户数据集合】
    if (localStorage[key]) {
        usrs = JSON.parse(localStorage[key]);
    }
    // 4. 判断【用户】是否存在
    if (usr.username in usrs) {
        fail && fail("用户已存在!");
    } else {
        // 注册用户
        usrs[usr.username] = usr;
        // 更新本地数据
        localStorage[key] = JSON.stringify(usrs);
        success && success();
    }
}



/**
 * @description 登陆
 * @param {Object} options 
 * - username {String} 用户名
 * - password {String} 密码
 * - key      {String} 存在本地的键名（可选），默认值USERS
 * - success  {Function} 登陆成功的回调函数
 * - fail     {Function} 登陆失败的回调函数
 */
function login(options) {
    // 1. 解构参数
    let { username, password, key, success, fail } = options;
    key = key || "USERS";
    // 2. 判断本地用户数据集合是否存在
    if (!localStorage[key]) {
        fail && fail("用户不存在!");
    } else {
        // 读取用户集合
        let usrs = JSON.parse(localStorage[key]);
        let usr = usrs[username];
        // 判断用户是否存在
        if (!usr) {
            fail && fail("用户不存在!");
        } else {
            // 判断是否登陆成功 
            if (username === usr.username && password === usr.password) {
                success && success(usr);
            } else {
                fail && fail("账号或密码错误!");
            }
        }
    }
}



/////////////////////////////
/// String APIs
/////////////////////////////
/**
 * 将字符串转为Unicode编码
 * 
 */
{
    Object.prototype.toUnicodeString = function (val) {
        let s = val || this.valueOf();
        let numCode = "";
        let resStr = "";
        for (let i = 0; i < s.length; i++) {
            numCode = s.charCodeAt(i);
            numCode = numCode.toString(16);
            numCode = '\\u' + numCode;
            resStr += numCode;
        }
        return resStr;

    }
}

/**
 * 隐藏手机中间四位数字
 * @param {*} tel 手机号
 */
function hideTel(tel) {
    return tel.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
}

/////////////////////////////
/// Object APIs
/////////////////////////////
/**
 * 判断两个对象是否相等
 */
function isObjectValueEqual(a, b) {
    //取对象a和b的属性名
    let aProps = Object.getOwnPropertyNames(a);
    let bProps = Object.getOwnPropertyNames(b);
    //判断属性名的length是否一致
    if (aProps.length != bProps.length) {
        return false;
    }
    //循环取出属性名，再判断属性值是否一致
    for (let i = 0; i < aProps.length; i++) {
        let propName = aProps[i];
        if (a[propName] !== b[propName]) {
            return false;
        }
    }
    return true;
}


/////////////////////////////
/// Array APIs
/////////////////////////////

/**
 * 将数组根据某个参照依据拆分成多个类
 * 比如将一组学生数据根据专业进行分类，拆分成二维数组形式
 * @param {*} arr 源数组
 * @param {*} key 分类依据的字段名称
 */
function splitArray(arr, key) {
    // 1. 获取分类
    let kinds = [];
    for (let i = 0, len = arr.length; i < len; i++) {
        kinds.push(arr[i][key]);
    }
    kinds = [...new Set(kinds)]; // 去重
    // 2. 根据分类重新组合数据
    let resArr = [];
    for (let i = 0, len1 = kinds.length; i < len1; i++) {
        let obj = {
            [key]: kinds[i],
            list: []
        }
        for (let j = 0, len2 = arr.length; j < len2; j++) {
            if (arr[j][key] == kinds[i]) {
                obj.list.push(arr[j]);
            }
        }
        resArr.push(obj);
    }
    return resArr;
}


function group(arr, count) {
    let len = Math.ceil(arr.length / count);
    let newArr = [];
    for (let i = 0; i < count; i++) {
        if (i == count - 1) {
            newArr.push(arr.slice(len * i));
            continue;
        }
        newArr.push(arr.slice(len * i, len * i + len));
    }
    return newArr;
}
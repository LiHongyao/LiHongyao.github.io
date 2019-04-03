/*DOM相关 */
/**
 * 
 * @param Sel   CSS选择器
 * @param isAll 是否匹配多个元素
 */
function getEl(Sel, isAll) {
    if(isAll) {
        return document.querySelectorAll(Sel);
    }
    return document.querySelector(Sel);
}
/**
 * 事件添加（兼容IE浏览器）
 * @param el        事件对象
 * @param type      事件类型
 * @param callBack  事件回调（监听函数）
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
 * @param el        事件对象
 * @param type      事件类型
 * @param callBack  事件回调（监听函数）
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
 * @param el     目标元素节点
 * @param attr   对应属性键（key）
 * @returns {*}  对应属性值（value）
 */
function getStyle(el, attr) {
    // 兼容IE
    if (el.currentStyle) {
        return el.currentStyle[attr];
    } else {
        return getComputedStyle(el, null)[attr];
    }
}

/**
 * 回到顶部
 * @param options 配置参数
 * options -> {
 *   el： 触发元素节点
 *   duration: 持续时间
 *   pageScroll：页面滚动回调
 *   complete：回到顶部结束回调
 * }
 */
function scrollToTop(options) {
    // 设置默认参数
    let configs = {
        el: "",
        duration: 1000,
        pageScroll: "",
        complete: ""
    };
    // 合并用户设置和默认设置
    Object.assign(configs, options);
    // 定义变量
    let offset = null,  // 记录偏移
        interval = 15,  // 每一帧持续的时间
        duration = configs.duration, // 持续总时间
        speed = null, // 每一帧位移的距离
        timer = null; // 定时器
    // 监听窗口滚动
    window.onscroll = function() {
        // 更新页面滚动的距离
        offset = document.body.scrollTop || document.documentElement.scrollTop;
        // 触发回调函数
        configs.pageScroll && configs.pageScroll(offset);
    }
    // 监听按钮点击
    configs.el.onclick = function() {
        // 计算每一帧位移的距离
        speed = Math.ceil(offset / (duration / interval));
        // 定时器执行滚动动画
        timer = setInterval(function() {
            if (offset > 0) {
                document.body.scrollTop = document.documentElement.scrollTop = offset - speed;
            } else {
                // 清除定时器
                clearInterval(timer);
                timer = null;
                // 矫正误差
                document.body.scrollTop = document.documentElement.scrollTop = 0;
                // 触发回调
                configs.complete && configs.complete();
            }
        }, interval);
    }
}

/**
 * 将location.search转换为对象类型
 * @param searchStr location.search 值
 * @returns {*}     对象
 */
function convertSearch(searchStr) {
    // 异常处理
    if (!searchStr) {
        return null;
    }else {
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

/**
 * 异常处理（断言）
 * @param  {boolean} expression [判断条件]
 * @param  {string} message     [提示信息]
 * @return {object}             [描述错误的对象]
 */
function assert(expression, message) {
	if (!expression){
		throw {name: 'Assertion Exception', message: message};
	}
}

/**
 * 获取任意数之间的随机数
 * @param  {number} min [最小值]
 * @param  {number} max [最大值]
 * @return {number}     [随机数]
 */
function randomDecimals(min, max) {
    if (min == undefined || max == undefined || isNaN(min) || isNaN(max)) {
        return -1;
    }else {
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
    }else {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
 }

 /**
 * 获取随机字符
 * @param  {number} length [字符长度]
 * @return {string}        [随机结果]
 */
function randomCharacters(length) {
    var bStr = '';
    bStr += 'QWERTYUIOPASDFGHJKLZXCVBNM';
    bStr += 'qwertyuiopasdfghjklzxcvbnm';
    bStr += '0123456789';
    var rStr = '';
    for (var i = 0; i < length; ++i) {
      var idx = Math.floor(Math.random() * bStr.length);
      rStr += bStr.substring(idx, idx + 1);
    }
    return rStr;
  }

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
    var config = {
        methods: "GET",
        timeout: 1000,
        data: {}
    }
    // 合并配置
	Object.assign(config, options);
	// 创建请求对象
	var xhr = new XMLHttpRequest();
	// 配置请求
    xhr.responseType = "json";
    xhr.timeout = config.timeout;
	xhr.open(config.methods, config.url, true);
    // 头部参数
    if(config.headers) {
        for(var key in config.headers) {
            xhr.setRequestHeader(key, config.headers[key]);
        }
    }
	// 发送请求
	xhr.send(config.data);
	// 监听请求
	xhr.onload = function() {
        if(xhr.status == 200) {
            config.success && config.success(xhr.response);
        }else {
            config.fail && config.fail();
        }
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
    if(!element || target == undefined) {
        throw 'Error：Parameter is not complete in function \'changeOpacity\'.';
    }
    // Set the default value
    duration  = duration  ? duration  : 1000;
    // Gets the current opacity
    var curOpa = getCurrentOpacity();
    // Calculating offset
    var offset   = target - curOpa;
    // Set the interval
    var interval = 30;
    // Calculating speed
    var speed    = offset > 0 ? Math.ceil(offset / (duration / interval)) : Math.floor(offset / (duration / interval));
    // Execute transition animations
    var t = setInterval(function () {
        // Update the current opacity
        curOpa = getCurrentOpacity();
        // Determine whether to reach the target
        if((offset > 0 && curOpa < target) || (offset < 0 && curOpa > target)) {
            // Frame by frame change
            element.style.opacity = (curOpa + speed) / 100
        }else { // Has completed the transition animation
            element.style.opacity = target / 100;
            clearInterval(t);
            // Invoke the callback function
            if(completed) {
                completed();
            }
        }
    }, interval);

    function getCurrentOpacity() {
        var curOpa = 0;
        // Compatible with IE browser
        if(element.currentStyle) {
            curOpa = element.currentStyle['opacity'] * 100;
        }else {
            curOpa = getComputedStyle(element, null)['opacity'] * 100;
        }
        return curOpa;
    }
}

/**
 * 获取对象数据类型
 * @param  {anyObject} val [任意值]
 * @return {anyObject}     [返回数据对应数据类型]
 */
function typefor(val) {
	// 获取参数返回类型（肯定是对象）和构造函数类型
	var call = Object.prototype.toString.call(val);
	// 下标开始位置
	var startIdx = call.indexOf(" ") + 1;
	// 下标结束为止
	var endIdx = call.lastIndexOf("\]");
	// 将截取出来的字符串转成小写字母并返回
	return call.slice(startIdx, endIdx).toLowerCase();
}

/**
 * 类型判断
 */
{
	(function(){
		var types = ["Null", "Undefined", "Number", "String", "Object", "Function", "RegExp", "Math", "Date", "Array", "boolean"];
		types.map(function(type) {
			Object.prototype["is" + type] = function(val) {
				val = val == undefined ? this : val;
				return getType(val) == type.toLowerCase();
			}
		});
	}());
}


/**
 * 将字符串转为Unicode编码
 * 
 */
{
	Object.prototype.toUnicodeString = function(val) {
		var s = val || this.valueOf() ;
		var numCode = "";
		var resStr = "";
		for (var i = 0; i < s.length; i++) {
			numCode = s.charCodeAt(i);
			numCode = numCode.toString(16);
			numCode = '\\u' + numCode;
			resStr += numCode;
		}
		return resStr;
		
	}
}


/**************** 本地存储相关操作 *****************/
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
    var root = [];
    // 判断本地是否存在对应key的数据
    // 如果存在，则先取到本地数据
    if(localStorage[options.key]) {
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
    if(options.condition) {
        if(localStorage[options.key]) {
            // 获取所有数据
            var datas = JSON.parse(localStorage[options.key]);
            // 获取条件键
            var _key = Object.keys(options.condition)[0];
            // 获取条件值
            var _val = options.condition[_key];
            // 遍历查找
            for(var i = 0, len = datas.length; i < len; i++) {
                // 如果找到了匹配数据
                if(datas[i][_key] == _val) {
                    // 删除数据
                    datas.splice(i, 1);
                    // 更新本地数据
                    localStorage[options.key] = JSON.stringify(datas);
                    options.complete && options.complete(datas);
                    return;
                }
            }
        }
    }else {
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
    if(localStorage[options.key]) {
        // 获取本地数据
        var datas = JSON.parse(localStorage[options.key]);
        // 获取条件键
        var _key = Object.keys(options.condition)[0];
        // 获取条件值
        var _val = options.condition[_key];
        // 查找要修改的数据
        for(var i = 0, len = datas.length; i< len; i++) {
            if(datas[i][_key] == _val) {
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
    if(localStorage[options.key]) {
        // 获取本地存储的所有数据
        var datas = JSON.parse(localStorage[options.key]);
        // 判断是否是条件查询
        if(options.condition) {  
            // 获取条件键
            var _key = Object.keys(options.condition)[0];
            // 获取条件值
            var _val = options.condition[_key];
            var index = -1;
            // 遍历查找
            for(var i = 0, len = datas.length; i < len; i++) {
                if(datas[i][_key] == _val) {
                    index = i;
                    break;
                }
            }
            // 根据下标判断是否找到对应的数据
            if(index == -1) { // 没有找到
                options.complete && options.complete(null);
            }else { //找到了
                options.complete && options.complete(datas[index]);
            }
        }else {
            options.complete && options.complete(datas);
        }
    }else {
        options.complete && options.complete(null);
    }
}


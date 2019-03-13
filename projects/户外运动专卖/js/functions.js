/**
 * 轮播图
 * @param $flashItems 轮播对象
 */
function flash($flashItems) {
    let curIdx  = 0,
        lastIdx = null;
    setInterval(function () {
        curIdx = (curIdx == $flashItems.length - 1) ? 0 : ++curIdx;
        // 淡出
        if(lastIdx) {
            $($flashItems[lastIdx]).fadeOut(2000);
        }
        // 淡入
        $($flashItems[curIdx]).fadeIn(2000);
        lastIdx = curIdx;
    }, 5000);
}


/**
 * 回到顶部接口
 * @param el         触发回到顶部效果的按钮元素
 * @param dur        回到顶部持续时间
 * @param pageScroll 当页面滚动时的回调函数，返回当前偏移值
 * @param compete    当回调顶部效果完成之后回调
 */
function scrollToTop(el, dur, pageScroll, compete) {

    let offset   = null;
    let interval = 15;
    let duration = dur == undefined ? 1000 : dur;
    let speed    = null;
    let timer    = null;
    console.log(duration)
    window.onscroll = function () {
        offset = document.body.scrollTop || document.documentElement.scrollTop;
        if(pageScroll) {
            pageScroll(offset);
        }
    }
    el.onclick = function () {
        speed = Math.ceil(offset / (duration / interval));
        timer = setInterval(function () {
            if(offset > 0) {
                document.body.scrollTop = document.documentElement.scrollTop = offset - speed;
            }else {
                clearInterval(timer);
                document.body.scrollTop = document.documentElement.scrollTop = 0;
                if(compete) {
                    compete();
                }
            }
        }, interval);
    }
}


/**
 * 本地存储：判断用户是否存在
 * @param  key      存储用户信息在本地的key
 * @param  gist     判断用户是否存在的依据
 * @param  value    用户输入的值
 * @return isExists 返回查询结果
 */
function determineUserIsExists(key, gist, value) {
    // 记录用户是否存在
    let isExists = null;
    if(!localStorage[key]) {
        isExists = false;
    }else {
        // 获取本地用户数据集合
        let users = JSON.parse(localStorage[key]);
        // 遍历本地用户数据集合，判断用户是否存在
        let i;
        for(i = 0; i < users.length; i++) {
            if(users[i][gist] == value) {
                isExists = true;
                break;
            }else {
                isExists = false;
            }
        }
    }
    return isExists;
}


/**
 * 本地存储：注册用户
 * @param key      存储用户集合的key
 * @param user     用户信息
 * @param callBack 存储成功回调函数
 */
function registerUser(key, user, callBack) {
    // 定义存储用户信息的集合
    let users = null;
    // 判断本地是否已经存在该用户数据集合
    if(localStorage[key]) {
        // 存在，根据本地用户数据集合来初始化users
        users = JSON.parse(localStorage[key]);
    }else {
        // 不存在，创建一个空数组
        users = [];
    }
    // 添加用户
    users.push(user);
    // 更新本地数据
    localStorage[key] = JSON.stringify(users);
    // 数据存储成功之后调用回调函数
    if(callBack) {
        callBack();
    }
}


/**
 * 判断是否登录成功
 * @param key      存储用户信息在本地的key
 * @param gists    判断依据({账号, 密码})
 * @param response 响应结果(返回状态码和登陆的用户)
 * 0   用户不存在
 * 1   账号或密码密码为空
 * 2   账号或密码错误
 * 200 登录成功
 */

function login(key, gists, response) {
    // 1.默认处理
    response = response || function () {}

    // 2.获取账号密码key
    let acctKey = Object.keys(gists)[0];
    let pswKey  = Object.keys(gists)[1];

    // 3.判断账号密码是否为空
    if(!gists[acctKey] || !gists[pswKey]) { response(1); return; }


    // 4.判断本地数据用户集合是否存在(如果不存在，则直接提示用户不存在)
    if(!localStorage[key]) {
        response(0); return;
    }else {
        // 如果存在，则先判断用户数据集合中是否存在用户，再判断是否登陆成功
        let users = JSON.parse(localStorage[key]);
        let user = null;
        // 判断用户是否存在，如果用户存在则记录该用户
        for(let i = 0; i < users.length; i++) {
            if(users[i][acctKey] == gists[acctKey]) {
                user = users[i];
                // 跳出循环
                break;
            }
        }
        if(user == null) {
            // 用户不存在
            response(0);
        }else if((user[acctKey] == gists[acctKey]) &&  (user[pswKey] == gists[pswKey])){
            response(200, user);
        }else {
            response(2);
        }
    }
}


/**
 * 记录用户信息
 */
function saveUserInfo(user) {
    localStorage.loginUser = JSON.stringify(user);
}

/**
 * 清除用户信息
 */
function removeUserInfo() {
    localStorage.loginUser = "";
}
















































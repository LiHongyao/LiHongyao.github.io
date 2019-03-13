class Tools {
    // 1. 判断用户是否存在
    // 参数 
    // username：用户名
    // callback：回调函数
    isExist(username, callback) {
        // 首先判断本地是否不存在用户数据集合
        // 如果不存在，返回false，表示用户不存在
        if(!localStorage.getItem('users')) {
            return false;
        }else {
            // 如果本地存在用户集合
            // 先获取本地用户数据
            let users = JSON.parse(localStorage.getItem('users'));
            // 判断用户数据长度
            // 如果长度为0，说明还没有注册过用户，
            // 返回false，表示用户肯定不存在
            if(users.length === 0) {
                return false;
            }else {
                // 如果长度不为0，说明本地数据中有注册过的用户
                // 遍历本地数据，判断用户名是否和已存在的用户匹配
                for(let i = 0, len = users.length; i < len; i++) {
                    // 如果用户输入的用户名和本地的用户名一直
                    if(users[i].username === username) {
                        // return 终止函数
                        callback && callback(users[i]);
                        // 则返回true，表示该用户存在
                        return true;
                    }
                }
            }
        }
    }
    // 2. 注册
    register(user, callback) {
        let users = null;
        // 首先判断本地是否已经存在用户数据集合
        if(localStorage.getItem('users')) {
            // 如果存在，则根据本地数据集合初始化一个数组
            users = JSON.parse(localStorage.getItem('users'));
        }else {
            // 如果不存在，则创建一个新的空数组
            users = [];
        }
        // 判断用户是否存在
        if(this.isExist(user.username)) {
            // 如果注册的用户已经存在，则弹框提示用户
            alert('用户已存在！');
            return 0;
        }
        // 用户不存在
        // 直接将用户注册的信息加入用户数据集合
        users.push(user);
        // 将新的用户数据集合存入本地（更新本地的用户数据）
        localStorage.setItem('users', JSON.stringify(users));
        // 执行回调函数
        callback && callback();
    }

    // 3. 登陆
    login(user, callback) {
        if(!this.isExist(user.username, (iUser) => {
            // 存在
            if(iUser.username === user.username && iUser.password === user.password) {
                callback && callback();
            }else {
                alert('登陆失败！');
            }
        })){
            // 不存在
            alert('用户不存在！');
        }
    }
}


export default Tools;
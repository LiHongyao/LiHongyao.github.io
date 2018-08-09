class Tools {
    // 1. 判断用户是否存在
    isExist(username, callback) {
        if(!localStorage.getItem('users')) {
            return false;
        }else {
            let users = JSON.parse(localStorage.getItem('users'));
            if(users.length === 0) {
                return false;
            }else {
                for(let i = 0, len = users.length; i < len; i++) {
                    if(users[i].username === username) {
                        // return 终止函数
                        callback && callback(users[i]);
                        return true;
                    }
                }
            }
        }
    }
    // 2. 注册
    register(user, callback) {
        let users = null;
        if(localStorage.getItem('users')) {
            users = JSON.parse(localStorage.getItem('users'));
        }else {
            users = [];
        }
        if(this.isExist(user.username)) {
            alert('用户已存在！');
            return 0;
        }
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
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
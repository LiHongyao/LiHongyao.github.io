class Validate {
    constructor() {}
    static test(type, str) {
        let res = null;
        switch (type) {
            case "username":
                {
                    // 1. 用户名正则，4到16位（字母，数字，下划线，减号）
                    res = /^[A-Za-z0-9_-]{4,16}$/.test(str);
                }break;
            case "password":
                {
                    // 2. 用户名正则，4到16位（字母，数字，下划线，减号）
                    res = /^[A-Za-z0-9_-]{4,16}$/.test(str);
                }break;
            case "email":
                {
                    // 3. 邮箱
                    res = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(str);
                }break;
            case "phone":
                {
                    // 4. 手机 
                    res = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/.test(str);
                }break;
        }
        return res;
    }
}
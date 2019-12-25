import { URL } from "../../utils/util.js";

Page({

    data: {
        URL
    },
    // => Events
    handlegGoLoginBtnTap() {
        wx.redirectTo({
            url: "../login/login"
        })
    }

})
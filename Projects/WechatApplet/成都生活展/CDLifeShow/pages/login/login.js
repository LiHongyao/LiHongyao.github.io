import {URL} from "../../utils/util.js";

Page({

    data: {
        URL
    },
    // => Events
    handlegGoRegisterBtnTap() {
        wx.redirectTo({
            url: "../register/register"
        })
    }
    
})
export const initialState = {
    // 标题
    title: '乐行于蜀',
    // 是否显示导航栏返回按钮
    isBackBtnVisible: false,
    // 是否显示标签栏
    isAppFooterVisible: true,
    isAppHeaderVisible: true
}

export const reducer = (state, action) => {
    switch(action.type) {
        case 'UPDATE_TITLE': 
            return {
                ...state,
                title: action.title
            }
        case 'UPDATE_BACKBTN_VISIBLE': {
            return {
                ...state,
                isBackBtnVisible: action.flag
            }
        }
        case 'UPDATE_APPFOOTER_VISIBLE': {
            return {
                ...state,
                isAppFooterVisible: action.flag
            }
        }
        case 'UPDATE_APPHEADER_VISIBLE': {
            return {
                ...state,
                isAppHeaderVisible: action.flag
            }
        }
        default:
            throw new Error();
    }
}


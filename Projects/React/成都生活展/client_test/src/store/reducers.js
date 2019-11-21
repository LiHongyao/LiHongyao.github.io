let initState = {
    title: "乐行于蜀",
    isShowTabBar: true,
    infos: {}
}
export const reducers = (state = initState, action) => {
    switch(action.type) {
        case "UPDATE_TITLE": 
            return {...state, title: action.title}
        case "IS_SHOW_TABBAR": 
            return {...state, isShowTabBar: action.isShowTabBar}
        case "INFOS":
            return {...state, infos: action.infos}
        default: 
            return state;
    }
}
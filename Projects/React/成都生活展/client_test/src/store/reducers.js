let initState = {
    title: "乐行于蜀"
}
export const reducers = (state = initState, action) => {
    switch(action.type) {
        case "UPDATE_TITLE": 
            return {...state, title: action.title}
        default: 
            return state;
    }
}
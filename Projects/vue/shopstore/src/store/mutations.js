import {
    SET_TITLE,
    SET_NAV_STATE,
    SET_TAB_STATE,
    SET_LOGIN_USER,
    SET_SHOPPING_CART
} from "./mutation-types";

export const mutations = {
    [SET_TITLE](state, title) {
        state.title = title;
    },
    [SET_NAV_STATE](state, isShow) {
        state.showNav = isShow;
    },
    [SET_TAB_STATE](state, isShow) {
        state.showTab = isShow;
    },
    [SET_LOGIN_USER](state, loginUser) {
        state.loginUser = loginUser;
    },
    [SET_SHOPPING_CART](state, shoppingCart) {
        console.log(shoppingCart);
        state.shoppingCart = shoppingCart;
    }
}
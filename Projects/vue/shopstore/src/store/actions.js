// dispatch action => 异步操作 => commit mutation => state
import axios from  '../http'

export const actions = {
    GET_SHOPPING_CART({ commit, state }) {
        let {username} = state.loginUser;
        axios.get(`/shopping_cart?username=${username}`).then(res => {
            commit("SET_SHOPPING_CART", res.data.data);
        });
    }
}


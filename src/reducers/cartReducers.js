import {OPEN_CART} from "../constants";

const initialState = {
    cart: [],
    showCart: false
};

const cartReducer = (state = initialState, action) => {

    switch (action.type) {
        case OPEN_CART:
            return {
                ...state,
                showCart: !state.showCart
            }
        default:
            return state;
    }
}

export default cartReducer;

import {OPEN_CART} from "../constants";

export const openCart = (value) => {
    return {
        type: OPEN_CART,
        payload: value
    }
}

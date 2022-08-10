import {ADD_TO_CART, REMOVE_TO_CART, UPDATE_CART_QUANTITY} from "../constants";

export const addToCart = (product) => {
    return {
        type: ADD_TO_CART,
        payload: {
            product,
            quantity: 0
        }
    }
}

export const removeFromCart = (productId) => {
    return {
        type: REMOVE_TO_CART,
        payload: {
            productId: productId
        }
    }
}

export const updateCartQuantity = (productId, quantity) => {
    return {
        type: UPDATE_CART_QUANTITY,
        payload: {
            productId,
            quantity: quantity
        }
    }
}

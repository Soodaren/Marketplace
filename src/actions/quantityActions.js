import {INCREMENT_QUANTITY, DECREMENT_QUANTITY} from '../constants';

export const increment = (value, productId) => ({
    type: INCREMENT_QUANTITY,
    payload: {value, productId}
})

export const decrement = (value, productId) => ({
    type: DECREMENT_QUANTITY,
    payload: {value, productId}
})

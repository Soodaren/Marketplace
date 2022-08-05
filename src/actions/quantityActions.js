import {INCREMENT_QUANTITY, DECREMENT_QUANTITY} from '../constants';

export const increment = () => ({
    type: INCREMENT_QUANTITY
})

export const decrement = () => ({
    type: DECREMENT_QUANTITY
})

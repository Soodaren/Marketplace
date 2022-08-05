import {INCREMENT_QUANTITY, DECREMENT_QUANTITY} from '../constants';

const quantityReducer = (state = {quantity: 0}, action) => {
    switch (action.type) {
        case INCREMENT_QUANTITY:
            return {quantity: state.quantity + 1}
        case DECREMENT_QUANTITY:
            return {quantity: state.quantity + 1}
        default:
            return state
    }
}
export default quantityReducer;

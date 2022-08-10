import {INCREMENT_QUANTITY, DECREMENT_QUANTITY} from '../constants';

const initialState = {
    quantity: 1,
    productId: ""
}

const quantityReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_QUANTITY:
            return {quantity: state.quantity + 1, productId: action.payload.id}

        case DECREMENT_QUANTITY:
            return {quantity: state.quantity - 1, productId: action.payload.id}

        default:
            return state
    }
}
export default quantityReducer;

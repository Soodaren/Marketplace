import {combineReducers} from "redux";
import cartReducer from "./cartReducers";
import quantityReducer from "./quantityReducers";

const rootReducer = combineReducers({
    cart: cartReducer,
    quantity: quantityReducer
});

export default rootReducer;

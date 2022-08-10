import React, {useState} from 'react';
import {connect} from "react-redux";
import {updateCartQuantity, removeFromCart} from "../../actions/cartActions";

function Item(props){
    const [quantity, setQuantity] = useState(props.item.quantity);
    const [btnVisible, setBtnVisible] = useState(false);


}

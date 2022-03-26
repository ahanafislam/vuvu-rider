import React from 'react';
import "./Cart.css";

const Cart = (props) => {
    // Destructuring  props
    const {cart} = props;

    return (
        <div className="cart shadow-sm">
            <p className="cart-title">Selected Motorcycle</p>
            {
                cart.map(product => <p key={product.id}>{product.name}</p>)
            }
            <button className="btn btn-sm btn-outline-danger mb-2">Choose 1 for me</button>
            <button className="btn btn-sm btn-outline-primary">Choose Again</button>
        </div>
    );
};

export default Cart;
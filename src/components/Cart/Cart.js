import React from 'react';
import "./Cart.css";

const Cart = () => {
    return (
        <div className="cart shadow-sm">
            <p className="cart-title">Selected Motorcycle</p>
            <button className="btn btn-sm btn-outline-danger mb-2">Choose 1 for me</button>
            <button className="btn btn-sm btn-outline-primary">Choose Again</button>
        </div>
    );
};

export default Cart;
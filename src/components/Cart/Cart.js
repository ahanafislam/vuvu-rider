import React from 'react';
import CartItem from '../CartItem/CartItem';
import "./Cart.css";

const Cart = (props) => {
    // Destructuring  props
    const {cart, chooseOneProduct, clearCart} = props;

    return (
        <div className="cart shadow-sm">
            <p className="cart-title">Selected Motorcycle</p>
            {
                cart.map(product => <CartItem
                    key={product.id}
                    cart={product}
                    cartLength={cart.length}
                    ></CartItem>)
            }
            <button onClick={chooseOneProduct} className="btn btn-sm btn-outline-danger mb-2">Choose 1 for me</button>
            <button onClick={clearCart} className="btn btn-sm btn-outline-primary">Choose Again</button>
        </div>
    );
};

export default Cart;
import React from 'react';
import CartItem from '../CartItem/CartItem';
import "./Cart.css";

const Cart = (props) => {
    // Destructuring  props
    const {cart, chooseOneProduct} = props;

    return (
        <div className="cart shadow-sm">
            <p className="cart-title">Selected Motorcycle</p>
            {
                cart.map(product => <CartItem
                    key={product.id}
                    name={product.name}
                    img={product.img}
                    ></CartItem>)
            }
            <button onClick={chooseOneProduct} className="btn btn-sm btn-outline-danger mb-2">Choose 1 for me</button>
            <button className="btn btn-sm btn-outline-primary">Choose Again</button>
        </div>
    );
};

export default Cart;
import React from 'react';

const CartItem = (props) => {
    const {name, img} = props.cart;
    return (
        <div className="mb-3 text-start">
            <div className="row g-0">
                <div className="col-2">
                    <img src={img} className="img-fluid rounded-start" alt="Motorcycle pic"/>
                </div>
                <div className="col-10">
                    <small className="ms-3">{name}</small>
                </div>
            </div>
            {
                props.cart.message ? <small className="text-success">{props.cart.message}</small> : ""
            }
        </div>
    );
};

export default CartItem;
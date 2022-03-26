import React from 'react';
import './Product.css';

const Product = (props) => {
    // Destructuring props
    const {product, manageAddToCart} = props;
    // Destructuring product object
    const {name, img, price} = product;

    return (
        <div className="col">
            <div className="card shadow mx-auto">
                <img src={img} className="card-img-top" alt="Motorcycle Pic" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Price: ${price}</p>
                    <button onClick={() => manageAddToCart(product)} className="btn btn-danger btn-sm">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;
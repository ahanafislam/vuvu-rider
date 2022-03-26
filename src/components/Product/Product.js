import React from 'react';
import './Product.css';
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

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
                    <button onClick={() => manageAddToCart(product)} className="btn btn-danger btn-sm">
                        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                        <span className="ms-2">Add to Cart</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;
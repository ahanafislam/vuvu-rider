import React from 'react';
import './Product.css';

const Product = () => {
    return (
        <div className="col">
            <div className="card shadow mx-auto">
                <img src="https://www.webbikeworld.com/wp-content/uploads/2020/09/2022-Suzuki-GSX-R1000R-1446x964.jpg" className="card-img-top" alt="Motorcycle Pic" />
                <div className="card-body">
                    <h5 className="card-title">Suzuki GSX</h5>
                    <p className="card-text">Price: $500</p>
                    <button className="btn btn-dark btn-sm">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;
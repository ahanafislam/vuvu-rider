import React from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {
    return (
        <div className="container">
            <h4 className="mt-3 mb-4 text-center">Choose 4 Motorcycle</h4>
            <div className="d-md-flex justify-content-between">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-4">
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                </div>
                <div className="mt-4 mt-md-0">
                    <Cart></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;
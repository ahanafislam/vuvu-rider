import React, { useEffect, useState } from 'react';
import './Shop.css'
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    // Fetching products and add on products state
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    // Function For Add To Cart
    const manageAddToCart = selectedProduct => {
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if(exists) {
            newCart = [...cart];
        }
        else {
            newCart = [...cart, selectedProduct];
        }

        setCart(newCart);
    }

    // Function for random Choosing one product randomly
    const chooseOneProduct = () => {
        const randomNum = Math.floor((Math.random() * cart.length) + 1);
        const index = randomNum - 1;
        let newCart = cart[index];
        setCart([newCart]);
    }

    return (
        <div className="container">
            <h4 className="mt-3 mb-4 text-center">Choose 4 Motorcycle</h4>
            <div className="d-md-flex justify-content-between">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 product-container">
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}
                            manageAddToCart={manageAddToCart}
                            ></Product>
                        )
                    }
                </div>
                <div className="mt-4 mt-md-0 cart-container">
                    <Cart
                        cart={cart}
                        chooseOneProduct={chooseOneProduct}
                    ></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;
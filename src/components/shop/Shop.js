import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import { addToLocal, getLocalStorage } from '../localStorage/localStorage';
import Products from '../products/Products';
// import './shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    console.log('%c' + 'New Line Execute', 'color:red');
    console.log('shopCart', cart);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    const handleAddToCart = selectedProduct => {
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct]
        } else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = selectedProduct.quantity + 1;
            newCart = [...rest, exists];

        }
        setCart(newCart)
        addToLocal(selectedProduct.id)
    }
    //get product from local storage
    useEffect(() => {
        let newCart = [];
        const saveCart = getLocalStorage();
        for (const id in saveCart) {
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                const quantity = saveCart[id];
                addedProduct.quantity = quantity;
                newCart.push(addedProduct)
            }
        }
        setCart(newCart)

    }, [products])
    return (
        <div>
            <h2>Total Product Available {products.length}</h2>
            <div className='md:grid grid-cols-5 gap-4'>
                <div className='grid col-span-4 md:grid-cols-2 lg:grid-cols-3 gap-4 shadow-lg'>
                    {
                        products.map(product => <Products
                            key={product.id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></Products>)
                    }
                </div>
                <div className='col-span-1'>
                    <Cart
                        cart={cart}
                    ></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;
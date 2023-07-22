import React from 'react';
// import './products.css'
const Products = ({ product,handleAddToCart }) => {
    const {img, name, price, quantity, seller} = product;
    return (
        <div className="border rounded p-2">
            <div className='ms-3'>
                <img src={img} alt="" style={{height:"300px"}}/>
                <p className=''>Name: {name}</p>
                <p>Seller: {seller}</p>
                <p>Price: $ {price}</p>
                {/* <p><small>quantity: {quantity}</small></p> */}
            </div>
            <button onClick={()=>handleAddToCart(product)} className='btn btn-primary w-full mx-auto mt-2'>Add To Cart</button>
        </div>
    );
};

export default Products;
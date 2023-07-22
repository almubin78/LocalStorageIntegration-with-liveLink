import React from 'react';
import './cart.css'
const Cart = ({cart}) => {
    console.log(cart);
    let quantity = 0;
    let totalPrice =0;
    let shipping = 0;
    let gTotal = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        totalPrice = totalPrice + product.price * product.quantity;
        shipping = shipping + product.shipping;
        gTotal = totalPrice + shipping;
    }
    
    return (
        <div className='cart-container p-2 bg-orange-200 p-1'>
            <h4>Total Items  <hr />{quantity}</h4>
            <p className='mt-2'>Total Price <hr />
            ${totalPrice}</p>
            <p className='mt-2'>Shipping Charge <hr />
             ${shipping}</p>
            <p className='mt-2 text-purple-500'>Total Charge <hr />
             ${gTotal}</p>
            <button className='btn btn-warning mt-5'>Proceed</button>
        </div>
    );
};

export default Cart;
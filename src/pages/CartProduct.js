// @flow strict

import * as React from 'react';

function CartProduct({cartProduct}) {

    return (
        <div className='cart-title'>
        <h2>Cart</h2>
        <div className='card'>
            <div className='image'>
                <img src={cartProduct.image}/>
            </div>
            <div className='card-description'>
                <h4>{cartProduct.name}</h4>
                <h5>{cartProduct.category}</h5>
                <h5>{cartProduct.price}</h5>
            </div>
        </div>
        </div> 
    );
};

export default CartProduct;
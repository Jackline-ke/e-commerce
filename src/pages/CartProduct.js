// @flow strict

import * as React from 'react';
import { useState } from 'react';


function CartProduct({cartProduct,handleRemove,handleAddCartItem,count,handleReduceCartItem}) {
    /*The following will calculate the price of each cart item*/
    const[price,setPrice]=useState(Number)

    const handlePrice=(price)=>{
       const cartItemCost =parseFloat(cartProduct.price)
       return(
        /*added rounding off function 'Math.ceil' to setPrice'*/
           setPrice(Math.ceil(count*cartItemCost))
       )
    }
    

    return (
        <div className='cart-title'>
        <h2>Cart</h2>
        <div className='card'>
            <div className='image'>
                <img src={cartProduct.image}
                     alt={cartProduct.name}  /> {/* I have added alt attribute*/}
            </div>
            <div className='card-description'>
                <h4>{cartProduct.name}</h4>
                <h5>{cartProduct.category}</h5>
                <h5>{cartProduct.price}</h5>
                {/*I have added the four buttons below */}
                <button onClick={()=>handleRemove(cartProduct)}>Remove from Cart</button>
                <button onClick={handleAddCartItem}>+</button>
                <button onClick={handleReduceCartItem}>-</button>
                <p>Items :<span>{count}</span></p>
                <button onClick={()=>handlePrice(cartProduct.price)}>Calculate Price</button>
                {/*added dollar sign to price below*/}
                <p>Price :<span>${price}</span></p>
            </div>
        </div>
        </div> 
    );
};

export default CartProduct;
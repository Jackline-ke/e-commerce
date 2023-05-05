// @flow strict

import * as React from 'react';
import { useState } from 'react';


function CartProduct({cartProduct,handleRemove,handleAddCartItem,count,handleReduceCartItem}) {
    /*The following will calculate the price of each cart item*/
    const[price,setPrice]=useState(Number)

    const handlePrice=(price)=>{
       const cartItemCost =parseFloat(cartProduct.price)
       return(
           setPrice(count*cartItemCost)
       )
    }
    

    return (
        <div className='cart'>
       
            <div className='image'>
                <img src={cartProduct.image}
                     alt={cartProduct.name}  /> {/* I have added alt attribute*/}
            </div>
            <div className='card-description'>
                <h4>{cartProduct.name}</h4>
                <p>{cartProduct.category}</p>
                <p>{cartProduct.price}</p>
                {/*I have added the four buttons below */}
                <button className="add-to-cart" onClick={()=>handleRemove(cartProduct)}>Remove from Cart</button>
                <button className="add" onClick={handleAddCartItem}>+</button>
                <button className="add" onClick={handleReduceCartItem}>-</button>
                <h3>Items :<span>{count}</span></h3>
                <button className="add-to-cart" onClick={()=>handlePrice(cartProduct.price)}>Calculate Price</button>
                <p>Price :<span>{price}</span></p>
            </div>
      
        </div> 
    );
};

export default CartProduct;
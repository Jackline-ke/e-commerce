// @flow strict

import * as React from 'react';
import CartProduct from './CartProduct';
import { useState } from 'react';


function Cart({cart,setCart, handleClick}) {
    /*The following will track number of items added*/
    const [count, setCount]=useState(0)
    

    const handleAddCartItem=()=>{
        console.log(count)
        return(
        setCount(count+1)
        );
    }

   

    /*function to handle remove from cart button*/
    const handleRemove = (cartProduct) => {
        console.log("Remove button clicked");
        console.log(cartProduct);
        console.log(cart);
        const updatedCart = cart.filter((item) => item.id !== cartProduct.id);
        setCart(updatedCart);
      };

    const cartItem = cart.map((cartProduct) =>{
        return(
            < CartProduct key={cartProduct.id} cartProduct={cartProduct} handleClick={handleClick} isInCart={false} 
            handleRemove={handleRemove}  handleAddCartItem={handleAddCartItem} count={count}
            setCount={setCount}/>/*handleRemove prop added */
        )
    })
    return (
        <div>
            {cartItem}
            
        </div>
    );
};

export default Cart;
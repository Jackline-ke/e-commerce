// @flow strict

import * as React from 'react';
import CartProduct from './CartProduct';

function Cart({cart,setCart, handleClick}) {
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
            handleRemove={handleRemove}/>/*handleRemove prop added */
        )
    })
    return (
        <div>
            {cartItem}
            
        </div>
    );
};

export default Cart;
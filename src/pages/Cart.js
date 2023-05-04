// @flow strict

import * as React from 'react';
import CartProduct from './CartProduct';

function Cart({cart, handleClick}) {
    const cartItem = cart.map((cartProduct) =>{
        return(
            < CartProduct key={cartProduct.id} cartProduct={cartProduct} handleClick={handleClick} isInCart={false}/>
        )
    })
    return (
        <div>
            {cartItem}
            
        </div>
    );
};

export default Cart;
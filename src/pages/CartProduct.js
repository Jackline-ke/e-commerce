// @flow strict

import * as React from 'react';
/*I have passed handleRemove as props from cart*/

function CartProduct({cartProduct,handleRemove}) {

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
                {/*I have added the three buttons below */}
                <button onClick={()=>handleRemove(cartProduct)}>Remove from Cart</button>
                <button>+</button>
                <button>-</button>
                
            </div>
        </div>
        </div> 
    );
};

export default CartProduct;
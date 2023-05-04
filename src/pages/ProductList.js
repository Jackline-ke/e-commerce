// @flow strict
import React from 'react';

function ProductList({product, handleClick, isInCart}) {
    const {id, image, name, category, price} = product;

    return (
        
            <div className='product-list' key={id}>
                <img src={image}/>
                <div className='description'>
                    <h4>{name}</h4>
                    <h5>{category}</h5>
                    <h5>{price}</h5>
                    <button className='add-to-cart' onClick={() => handleClick(product, isInCart)}>Add To Cart</button>
                </div>
            </div>
      
    );
};

export default ProductList;
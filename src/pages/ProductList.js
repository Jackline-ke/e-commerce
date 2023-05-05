// @flow strict
import React from 'react';

function ProductList({product, handleClick, isInCart}) {
    /*const {id, image, name, category, price} = product;  Declared in home*/

    return (
            <div className='product-list' key={product.id}>
                <img src={product.image} alt={product.name}/>
                <div className='description'>
                    <h4>{product.name}</h4>
                    <p>{product.category}</p>
                    <p>{product.price}</p>
                    <button className='add-to-cart' onClick={() => handleClick(product, isInCart)}>Add To Cart</button>
                </div>
            </div>
      
    );
};

export default ProductList;
// @flow strict
import React from 'react';

function ProductList({product, handleClick}) {
    const {id, image, name, category, price} = product;

    return (
        <div className='product'>
            <div className='product-list'>
                <img src={image}/>
                <div className='description'>
                    <h2>{name}</h2>
                    <h3>{category}</h3>
                    <h3>{price}</h3>
                    <button className='add-to-cart' onClick={() => handleClick(product)}>Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductList;
// @flow strict
import * as React from 'react';

function ProductList({product}) {
    return (
        <div>
            <div className='product-list'>
                <img src={product.image}/>
                <h2>{product.name}</h2>
                <h3>{product.category}</h3>
                <h3>{product.price}</h3>
            </div>
        </div>
    );
};

export default ProductList;
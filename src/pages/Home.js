// @flow strict

import React from 'react';
import ProductList from './ProductList';

function Home({products, handleClick}) {
   
    const productItems = products.map(product =>{
        return(
            <ProductList key={product.id} product={product} handleClick={handleClick} isInCart={false}/>
        )
    })
    return (
        <div>
            {productItems}
            
        </div>
    );
};

export default Home;
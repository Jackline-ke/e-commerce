// @flow strict

import React from 'react';
import ProductList from './ProductList';
import Details from '../components/Details';

function Home({products, handleClick}) {
   
    const productItems = products.map(product =>{
        return(
            
        <>
            
            <ProductList key={product.id} product={product} handleClick={handleClick}/>
        </>
        )
    })
    return (
        <div>
            {productItems}
            
        </div>
    );
};

export default Home;
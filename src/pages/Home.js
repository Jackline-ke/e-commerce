// @flow strict

import * as React from 'react';
import ProductList from './ProductList';

function Home({products}) {

    const productItems = products.map(product =>{
        return(
            <ProductList key={product.id} product={product}/>
        )
    })
    return (
        <div>
            {productItems}
            
        </div>
    );
};

export default Home;
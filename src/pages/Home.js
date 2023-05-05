// @flow strict

import React from 'react';
import ProductList from './ProductList';
import SearchBar from './SearchBar';
import { useState } from 'react';
/*I have added productsToDisplay as a prop and imported useState to track state of search term */

function Home({products, handleClick}) {
   /*Search term is used in searchbar*/
  const [searchTerm, setSearchTerm] = useState('')
  
 
 /* const productItems = products.map(product =>{
        return(
        <>
            
            <ProductList key={product.id} product={product} handleClick={handleClick} isInCart={false}/>
        </>    
        )
    })*/

 /*onSearchChange,itemsToDisplay are for handling onChange event in the search bar
  and filtering through the products data respectively*/

  const onSearchChange=(event)=> {
    setSearchTerm(event.target.value)
  }

  /*I have replaced productItems(above) with productItemsToDisplay*/
    
      const filteredProducts = products.filter((product) => {
        console.log('search', { products });
        if (searchTerm) {
          return product.description.toLowerCase().includes(searchTerm.toLocaleLowerCase());
        }
        return true;
      });

      const productItemsToDisplay = filteredProducts.map(product => {
        return (
            <>
        <ProductList key={product.id} product={product} handleClick={handleClick} isInCart={false} />
            </>
        )})
      /* I have rendered SearchBar here and changed productItems to productItemsToDisplay*/
    return (
     <>
        <SearchBar onSearchChange={onSearchChange} productItemsToDisplay={productItemsToDisplay}/>
        <div>
         {productItemsToDisplay}
        </div>
     </>   
    );
};

export default Home;
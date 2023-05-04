// @flow strict
import React, {createContext, useState} from "react";
import ProductList from "../pages/ProductList";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {}
    for (let i =1; i < ProductList.length + 1; i++){
        cart[i] = 0;
    }
    return cart;
}

function ShopContextProvider(props) {
    const [products, setProducts] = useState(getDefaultCart);
    
    const addToCart =(productId) => {
        setProducts((prev) => ({...prev, [productId]: prev[productId] + 1}))        
    };

    const removeToCart =(productId) => {
        setProducts((prev) => ({...prev, [productId]: prev[productId] - 1}))        
    };

    const contextValue = {products, addToCart, removeToCart}
    console.log(products)

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
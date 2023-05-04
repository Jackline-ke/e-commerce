import Carditem from "./Carditem";
import { useEffect } from "react";
import { useState } from "react";
import Cartcontainer from "./Cartcontainer";


 function Cardlist(){

    const dataUrl="http://localhost:4000/products"
    const [products,setProducts]=useState([])
    const [cartProducts,setcartProducts]=useState([])
    
    useEffect(()=>{
      fetch(dataUrl)
      .then((response)=>response.json())
      .then((products)=>{
        setProducts(products)
        console.log(products)

      })},[])


      const handleAddToCart = (product) => {
        console.log("Add to cart clicked", product);
        setcartProducts([...cartProducts, product]);
        console.log(cartProducts)
      };

      const handleRemove=()=>{
        console.log("remove button clicked")
      }
      
        return(

          <>
            <h1>Cardlist</h1>
            <div>
              <Carditem products={products}
                        handleAddToCart={handleAddToCart}

              />
           <Cartcontainer cartProducts={cartProducts} setcartProducts={setcartProducts}/>
              </div>
            
           </>
        )
  }
export default Cardlist;
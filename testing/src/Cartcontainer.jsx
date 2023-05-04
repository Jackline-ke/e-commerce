/*import { useState } from "react";/*to handle update cartlist*/

function Cartcontainer({ cartProducts,setcartProducts}) {
    /*const [updateCart,setupdateCart]=useState([])*/

    const handleRemove =(id)=>{
        console.log(cartProducts)
        setcartProducts(cartProducts.filter((cartProduct) => cartProduct.id !== id))
        console.log(cartProducts)
      }
    

    return (
      <>
        <h2>Cartcontainer</h2>
        
        <ul>
      {cartProducts.map(cartProduct => (
        <li key={cartProduct.id}>
          <img src={cartProduct.image} alt={cartProduct.name} />
          <p>{cartProduct.name}</p>
          <p>{cartProduct.description}</p>
          <p>{cartProduct.price}</p>
          <p>{cartProduct.category}</p>
          <button onClick={()=> handleAddToCart(product)}>Add to cart</button>
          <button onClick={() =>handleRemove(cartProduct.id)}>Remove from Cart</button>
          <button >+</button>
          <button>-</button>
        </li>
      ))}
    </ul> 
        
      </>
    );
  }
  export default Cartcontainer;

function Carditem({products, handleAddToCart}){

return(
<ul>
      {products.map(product => (
        <li key={product.id}>
          <img src={product.image} alt={product.name} />
          <p>{product.name}</p>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <p>{product.category}</p>
          <button onClick={()=> handleAddToCart(product)}>Add to cart</button>
        </li>
      ))}
    </ul>
    );
      }
    export default Carditem;


import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Footer from './components/Footer';
import SearchBar from './pages/SearchBar';

function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])

  // fetch data
  useEffect(() => {
    fetch(' http://localhost:8000/products')
    .then(res => res.json())
    .then(data => setProducts(data));
  }, []);


  const handleClick = (product, isInCart) => {
    if (cart.includes(product) && isInCart === true) {
      setCart(cart.filter(({id}) => id !== product.id))
    } else if (cart.includes(product) === false) {
      setCart(cart => [...cart, product])
    }
  }

  return (
    <div className="App">
        {/* use Router to aid in navigation inside the application */}
        <Router>
        {/* call Navbar */}
        <Navbar />
        
        <SearchBar/>
        

        
          <Routes>
            <Route path='/' element={< Home products={products} handleClick={handleClick}/> } />
            <Route path='/Cart' element={< Cart setCart={setCart} cart={cart} handleClick={handleClick} handle />}/>
          </Routes>
          <Footer/>
        </Router>
    </div>
  );
}

export default App;

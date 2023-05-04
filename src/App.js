import './App.css';
import Navbar from './components/Navbar';
import Details from './components/Details';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {
  const [products, setProducts] = useState([])
  const [show, setShow] = useState([])
  const [cart, setCart] = useState([])

  // fetch data
  useEffect(() => {
    fetch('http://localhost:3000/products')
    .then(res => res.json())
    .then(data => setProducts(data));
  }, []);

  const handleClick = (product) => {
      cart.push(product)
      console.log(cart)
  }

 
  return (
    <div className="App">
        {/* use Router to aid in navigation inside the application */}
        <Router>
        {/* call Navbar */}
        <Navbar />
        <Details />
          <Routes>
            <Route path='/' element={< Home products={products} handleClick={handleClick}/> } />
            <Route path='/Cart' element={< Cart setCart={setCart} cart={cart} />}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;

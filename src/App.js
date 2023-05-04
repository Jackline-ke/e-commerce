import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Footer from './components/Footer';
import Account from './pages/Account';
import Contact from './pages/Contact';
import LandingPage from './components/LandingPage';

function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])

  // fetch data
  useEffect(() => {
    fetch('http://localhost:3000/products')
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
        <LandingPage />       
          <Routes>
            <Route path='/' element={< Home products={products} handleClick={handleClick}/> } />
            <Route path= '/Account' element={<Account />} />
            <Route path= '/Contact' element={<Contact />} />
            <Route path='/Cart' element={< Cart setCart={setCart} cart={cart} handleClick={handleClick} />}/>
          </Routes>
          <Footer/>
        </Router>
    </div>
  );
}

export default App;

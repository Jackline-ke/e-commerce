import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {
  const [products, setProducts] = useState([]);
  
  // fetch data
  useEffect(() => {
    fetch('http://localhost:3000/products')
    .then(res => res.json())
    .then(data => setProducts(data));
  }, []);

  return (
    <div className="App">
      {/* use Router to aid in navigation inside the application */}
      <Router>
        {/* call Navbar */}
        <Navbar />
        <Routes>
          <Route path='/' element={< Home products={products}/>}/>
          <Route path='/Cart' element={< Cart />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

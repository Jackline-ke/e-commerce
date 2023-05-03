import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* use Router to aid in navigation inside the application*/}
      <Router>
        {/* call Navbar */}
        <Navbar />
        <Routes>
          <Route path='/'/>
          <Route path='/Cart'/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

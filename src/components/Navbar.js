// @flow strict
import * as React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';

function Navbar() {
    return (
        <div className='container'>
            <div className='navbar'>
                <div className='logo'>
                    <h2>Eletronics</h2>
                </div>

                <div className='nav-links'>
                    <Link to="/">Home</Link>
                    <Link to="/Contact">About Us</Link>
                    <Link to="/Cart">
                        <ShoppingCart />
                    </Link>
                </div>
            </div>
        </div>
        
    );
};

export default Navbar;
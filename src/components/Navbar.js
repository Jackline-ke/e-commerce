// @flow strict
import * as React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';

function Navbar() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/Cart">
                <ShoppingCart />
            </Link>
        </div>
    );
};

export default Navbar;
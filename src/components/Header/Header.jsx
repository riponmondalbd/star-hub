import React from 'react';
import './Header.css'
import logo from '../../images/Star_Hub.png'

const Header = () => {
    return (
        <div className='header-container'>
            <img src={logo} alt="" />
            <div className="header-nav">
                <a href="/order">Order</a>
                <a href="/review">Review</a>
                <a href="/inventory">Manage Inventory</a>
                <a href="/login">Login</a>
            </div>
        </div>
    );
};

export default Header;
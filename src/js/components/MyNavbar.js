import React from 'react';
import { ShoppingCartOutlined, MenuOutlined } from '@ant-design/icons';
import '../../index.css';

const MyNavbar = () => {
    return (
        <div className="navbar">
            <div className="nav-logo">
                <a href="/">Bio Market</a>
            </div>
            <ul className="nav-links">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">Products</a>
                </li>
                <li>
                    <a href="/">About</a>
                </li>
                <li>
                    <a href="/"><ShoppingCartOutlined className="shopping-cart"/></a>
                </li>
            </ul>
            <a href="/"><ShoppingCartOutlined className="shopping-cart-mobile"/></a>
            <MenuOutlined className="mobile-navbar" />
        </div>
    );
}
 
export default MyNavbar;
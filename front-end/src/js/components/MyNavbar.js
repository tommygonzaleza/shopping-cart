import React, { useState } from 'react';
import { ShoppingCartOutlined, MenuOutlined } from '@ant-design/icons';
import '../../index.css';


const MyNavbar = () => {
    
    return (
        <Navbar>
            <NavItem href="/" title="Home" />
            <NavItem href="/products" title="Products" />
            <NavItem href="/" title="About" />
            <NavItem href="/" title={<ShoppingCartOutlined className="shopping-cart"/>} />
        </Navbar>
    );
}

const Navbar = (props) => {
    
    const [open, setOpen] = useState(true);

    const Mobile = () => {
        setOpen(false);
    }

    let MobileScreen = window.matchMedia("(max-width: 768px)");
    MobileScreen.addListener(Mobile);

    return(
        <div className="navbar">
            <div className="nav-logo">
                <a href="/">Bio Market</a>
            </div>
            <ul className="nav-links">{ open && props.children }</ul>
            <a onClick={() => setOpen(!open)}><MenuOutlined className="mobile-navbar" /></a>
        </div>
    )
}

const NavItem = (props) => {
    return(
        <li>
            <a href={props.href}>
                {props.title}
            </a>
        </li>
    )
}

export default MyNavbar;
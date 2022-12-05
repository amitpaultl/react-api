import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header-bg">

            <div className='header-area'>
                <div className="logo-area">
                    <a href=""><img src="logo192.png" alt="" /></a>
                </div>
                <div className="menu-area">
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Shoping</a></li>
                        <li><a href="">Card</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
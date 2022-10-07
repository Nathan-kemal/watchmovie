import React from 'react';
import './header.css';

const Header = () => {
    return (
        <div className='container'>
            <div className='logo'>
                <h1>WatchMovie</h1>
            </div>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Movie</li>
                    <li>TV Series</li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;

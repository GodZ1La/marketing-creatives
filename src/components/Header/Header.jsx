import React from 'react';
import './Header.css';

const Header = (props) => {
    return (
        <header className="header">
            <div>
                <img className="header-logo" src="https://assetspwa.liverpool.com.mx/sr_mkp/puerto-logo.png.png" alt="logo header" />
            </div>
            <div>
                <p className='header-titulo'>Marketing Creatives</p>
            </div>
        </header>
    );
}

export default Header;
import React from 'react';
import logoPath from '../images/logo.svg'

const Header = () => {
    return (
    <header className="header">
        <img src={logoPath} alt="логотип Место Россия" className="header__logo" />
    </header>
    )
}

export default Header;
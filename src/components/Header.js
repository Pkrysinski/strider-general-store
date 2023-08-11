import React from 'react';
import '../styles/Header.css';
import StyledNavbar from "./StyledNavbar";


function Header() {
    return (
        <header>
            <h1>Strider General Store</h1>
            <StyledNavbar />
        </header>
      );
};

export default Header;
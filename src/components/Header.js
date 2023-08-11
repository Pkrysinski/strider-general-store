import React from 'react';
import '../styles/Header.css';
import StyledNavbar from "./StyledNavbar";

function Header() {
    return (
        <header style={{paddingBottom:'20px', paddingTop:'20px'}}>
            <h1>Strider General Store</h1>
            <img src="/strider/StriderLogo.JPG" alt="Logo" />
            <StyledNavbar />
        </header>
      );
};

export default Header;
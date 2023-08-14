import React from 'react';
import { NavLink } from "react-router-dom";
import '../styles/Header.css';

function StyledNavbar() {
    return(
        <nav className='navbar'>
            <NavLink to='/' style={({isActive, isPending})=>{
                return{
                    fontWeight: isActive ? "bold" : "",
                    color: isActive ? "teal" : "white",
                    textDecoration: 'none',
                    paddingTop: 5,
                    paddingBottom: 5,
                    paddingLeft: 10,
                    paddingRight: 10
                }
            }}>Home</NavLink>
            <NavLink to='/Customer' style={({isActive, isPending})=>{
                return{
                    fontWeight: isActive ? "bold" : "",
                    color: isActive ? "teal" : "white",
                    textDecoration: 'none',
                    paddingTop: 5,
                    paddingBottom: 5,
                    paddingLeft: 10,
                    paddingRight: 10
                }
            }}>Customers</NavLink>            
        </nav>
    )
};

export default StyledNavbar;
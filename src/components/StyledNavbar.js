import React from 'react';
import { NavLink } from "react-router-dom";
import '../styles/Header.css';

// Basic nav bar which directs users to the home page as well as an About Strider page.
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
            <NavLink to='/AboutStrider' style={({isActive, isPending})=>{
                return{
                    fontWeight: isActive ? "bold" : "",
                    color: isActive ? "teal" : "white",
                    textDecoration: 'none',
                    paddingTop: 5,
                    paddingBottom: 5,
                    paddingLeft: 10,
                    paddingRight: 10
                }
            }}>About Strider</NavLink>            
        </nav>
    )
};

export default StyledNavbar;
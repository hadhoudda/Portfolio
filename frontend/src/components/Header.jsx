import "../styles/header.css";
import React from "react";
import Navbar from "./Navbar";
import logo from "../assets/logo.png"

function Header() {
    return (
        
            <div className="header">
                <a href="#accueil"><img className ="logo-profil" src={logo} alt='image__houda' /></a>
                <Navbar/>
            </div>
            
       
        
    )
}

export default Header;
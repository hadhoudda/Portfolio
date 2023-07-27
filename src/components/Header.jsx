import "../styles/header.css";
import React from "react";
import Navbar from "./Navbar";
import logo from "../assets/houda.png"

function Header() {
    return (
        <header>
            <div className="header ">
                <a href="#home"><img className ="logo-profil" src={logo} alt='image__houda' /></a>
                <Navbar/>
            </div>
        </header>
        
    )
}

export default Header;
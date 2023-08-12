import React from "react";
import { Link } from 'react-router-dom';
import Navbar from "./Navbar";
import logo from "../assets/houda.png";
import "../styles/header.css";

function Header() {
    return (
        <header>
            <div className="header ">
                <Link to='/Portfolio'><img className ="logo-profil" src={logo} alt='image__houda' /></Link>
                <Navbar/>
            </div>
        </header>
    )
}

export default Header;
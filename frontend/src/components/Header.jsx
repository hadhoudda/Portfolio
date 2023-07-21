import "../styles/header.css";
import React from "react";
//import { NavLink, Link } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav_logo">Smith</a>
            </nav>
        </header>
    )
}

export default Header;
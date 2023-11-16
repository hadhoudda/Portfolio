import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css'

function Navbar() {
    const [toggleMenu, setToggleMenu ] = useState (true);

    const toggleNavSmallScreen =() => {
        setToggleMenu (!toggleMenu);

    }

    
  return (
    <nav className='nav-responsive'>
        <ul className={toggleMenu ? "liste": "liste-responsive" }>
        <Link to = '/Portfolio'><li className="items">Accueil </li></Link>
            <Link to = '/Portfolio/profil'><li className="items">À propos </li></Link>
            <Link to = '/Portfolio/competance'><li className="items">Compétences </li></Link>
            <Link to = '/Portfolio/portfolio'><li className="items">Portfolio </li></Link>
            <Link to = '/Portfolio/contact'><li className="items">Contact </li></Link>
        </ul>
        <div onClick={toggleNavSmallScreen} ><i className={toggleMenu  ? "fa-solid fa-bars btn" :"fa-solid fa-xmark btn "  }></i> </div>
    
    </nav>
  )
}

export default Navbar;
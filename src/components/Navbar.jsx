import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css'

function Navbar() {
    const [toggleMenu, setToggleMenu ] = useState (false);
    const [largeur, setLargeur] = useState(window.innerWidth)

    const toggleNavSmallScreen =() => {
        setToggleMenu (!toggleMenu);
    }

    useEffect (() => {
        const changeWidth = () => {
            setLargeur(window.innerWidth);
            if(window.innerWidth>680){
                setToggleMenu(false)
            }
        }
        window.addEventListener('resize', changeWidth);
        return () => {
            window.removeEventListener('resize', changeWidth);
        }

    }, [])
  return (
    <nav className='nav-responsive'>
            <ul className="liste">
                <Link to = '/Portfolio'><li className="items">Accueil </li></Link>
                <Link to = '/Portfolio/profil'><li className="items">À propos </li></Link>
                <Link to = '/Portfolio/competance'><li className="items">Compétences </li></Link>
                <Link to = '/Portfolio/portfolio'><li className="items">Portfolio </li></Link>
                <Link to = '/Portfolio/contact'><li className="items">Contact </li></Link>
            </ul>
        {toggleMenu && ( //si toggleMenu true envoi liste si false rien de tout
            <ul className=" liste-responsive">
                <Link to = '/Portfolio' className="link-items"><li onClick={toggleNavSmallScreen} className="items" >Accueil </li></Link>
                <Link to = '/Portfolio/profil' className="link-items"><li onClick={toggleNavSmallScreen} className="items">À propos </li></Link>
                <Link to = '/Portfolio/competance' className="link-items"><li onClick={toggleNavSmallScreen} className="items">Compétences </li></Link>
                <Link to = '/Portfolio/portfolio' className="link-items"><li onClick={toggleNavSmallScreen} className="items">Portfolio </li></Link>
                <Link to = '/Portfolio/contact' className="link-items"><li onClick={toggleNavSmallScreen} className="items">Contact </li></Link>
            </ul>
            
        )}
      
      <div onClick={toggleNavSmallScreen} ><i class="fa-solid fa-bars btn"></i></div>
    </nav>
  )
}

export default Navbar;
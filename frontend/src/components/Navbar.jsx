import React, {useState, useEffect} from 'react';
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
            <li className="items">Accueil</li>
                <li className="items">Profil</li>
                <li className="items">Compétences</li>
                <li className="items">Portfolio</li>
                <li className="items">Contact</li>
            </ul>
        {toggleMenu && ( //si toggleMenu true envoi liste si false rien de tout
            <ul className=" liste-responsive">
                <li className="items">Accueil</li>
                <li className="items">Profil</li>
                <li className="items">Compétences</li>
                <li className="items">Portfolio</li>
                <li className="items">Contact</li>
            </ul>
        )}
      
      <div onClick={toggleNavSmallScreen} className="btn"><i class="fa-solid fa-bars"></i></div>
    </nav>
  )
}

export default Navbar;
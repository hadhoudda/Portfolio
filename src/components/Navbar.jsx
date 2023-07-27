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
                {/* <li className="items"><Link to = '/'>Accueil</Link> </li> */}
                <li className="items" ><a href="#home" >Accueil</a> </li>
                <li className="items"><a href="#profil"> À propos</a></li>
                <li className="items"><a href="competance">Compétences</a></li>
                <li className="items"><a href="portfolio">Portfolio</a></li>
                <li className="items"><a href="contact">Contact</a></li>
            </ul>
        {toggleMenu && ( //si toggleMenu true envoi liste si false rien de tout
            <ul className=" liste-responsive">
                <div onClick={toggleNavSmallScreen}className="items"><a href="#home">Accueil</a></div>
                <div onClick={toggleNavSmallScreen} className="items"><a href="#profil"> À propos</a></div>
                <div onClick={toggleNavSmallScreen} className="items"><a href="#competance">Compétences</a></div>
                <div onClick={toggleNavSmallScreen} className="items"><a href="#portfolio">Portfolio</a></div>
                <div onClick={toggleNavSmallScreen} className="items"><a href="#contact">Contact</a></div>
            </ul>
            
        )}
      
      <div onClick={toggleNavSmallScreen} className="btn"><i class="fa-solid fa-bars"></i></div>
    </nav>
  )
}

export default Navbar;
import React from "react";
import '../styles/profil.css'
import profil from "../assets/profil.jpg"

function Profil() {
    return (
        <div className="profil" id="profil">
            
            {/* <Navbar className="nav-fixed"/> */}
            <h2>A PROPOS DE MOI</h2>
            <div className="contenu-profil">
                <img className ="photo-profil" src={profil} alt='profil__houda' />
                <p >
                    Hello ! Je m’appelle Houda, développeur Web junior
                </p>

            </div>
            
        </div>
    )
}

export default Profil;
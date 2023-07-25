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
                <p>
                    Hello ! Je m’appelle Houda, développeuse Web fullstack junior.<br></br>
                    Je suis à la recherche d'un emploi en CDI/CDD à Lyon et alentours à partir de septembre 2023.
                </p>

            </div>
            
        </div>
    )
}

export default Profil;
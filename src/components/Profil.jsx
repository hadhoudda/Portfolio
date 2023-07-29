import React from "react";
import '../styles/profil.css'
import profil from "../assets/profil.jpg"
import Header from "./Header";
import Footer from "./Footer";

function Profil() {
    return (
        <section className="container-profil">
            <Header/>
            <div className="profil">
                <h2>A PROPOS DE MOI</h2>
                <div className="contenu-profil">
                    <img className ="photo-profil" src={profil} alt='profil__houda' />
                    <p>
                        Hello ! Je m’appelle Houda, développeuse Web fullstack junior.<br></br>
                        Je suis à la recherche d'un emploi en CDI/CDD à Lyon et alentours à partir de septembre 2023.
                        Hello ! Je m’appelle Houda, développeuse Web fullstack junior.<br></br>
                        Je suis à la recherche d'un emploi en CDI/CDD à Lyon et alentours à partir de septembre 2023.
                        Hello ! Je m’appelle Houda, développeuse Web fullstack junior.<br></br>
                        Je suis à la recherche d'un emploi en CDI/CDD à Lyon et alentours à partir de septembre 2023.
                        Hello ! Je m’appelle Houda, développeuse Web fullstack junior.<br></br>
                        Je suis à la recherche d'un emploi en CDI/CDD à Lyon et alentours à partir de septembre 2023.
                        Hello ! Je m’appelle Houda, développeuse Web fullstack junior.<br></br>
                        Je suis à la recherche d'un emploi en CDI/CDD à Lyon et alentours à partir de septembre 2023.
                    </p>

                </div>
                
            </div>
            <Footer />
        </section>
    )
}

export default Profil;
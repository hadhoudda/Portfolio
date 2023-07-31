import React from "react";
import '../styles/profil.css'
import profil from "../assets/profil.webp"
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
                        Hello 😊! Je m’appelle Houda, développeuse Web fullstack junior, passionnée 
                        par le développement front-end et back-end, assoiffée de nouvelles connaissances, d'apprendre de nouvelles techniques
                        curieuse, autonome et ayant l'esprit d’équipe..<br></br>
                        Ayant toujours été passionnée par l'informatique, j'ai décidé de me lancer dans 
                        cette formation afin de me spécialiser dans le développement web, et de pouvoir exercer un métier qui me passionne.<br></br>
                        N'hésitez pas à me contacter pour savoir plus sur mon parcours et mes projets.
                    </p>

                </div>
                
            </div>
            <Footer />
        </section>
    )
}

export default Profil;
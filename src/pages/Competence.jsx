import React from 'react';
import '../styles/competence.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Competence() {
    return (
        <div className='competence'> 
            <Header />
            <section className="container-competence">
                <div className="container-skills-tools">
                    <div className="content">
                        <h3>Compétences techniques</h3>
                        <div className="icone-skills">
                            <i className='bx bxl-html5 style-icone-skill icone-html'></i>
                            <i className='bx bxl-css3 style-icone-skill icone-css'></i>
                            <i className='bx bxl-sass style-icone-skill icone-sass'></i>
                            <i className='bx bxl-javascript style-icone-skill icone-javascript'></i>
                            <i className='bx bxl-react style-icone-skill icone-react' ></i>
                            <i className='bx bxl-nodejs style-icone-skill icone-node'></i>
                            <i class="devicon-mysql-original colored style-icone-skill icone-vscode "></i>
                            <i className='bx bxl-spring-boot style-icone-skill icone-spring-boot'></i>

                        </div>
                    </div>
                    <div className="content">
                    <h3>Outils techniques</h3>
                    <div className="icone-skills">
                       
                        <i className='bx bxl-visual-studio style-icone-skill icone-vscode'></i>
                        <i class="devicon-eclipse-plain-wordmark colored style-icone-skill icone-vscode"></i>
                        <i class="devicon-mongodb-plain colored style-icone-skill icone-spring-boot"></i>
                        <i className='bx bxl-github style-icone-skill icone-github'></i>
                        <i class="devicon-azuresqldatabase-plain colored style-icone-skill icone-github"></i>

                    </div>
                    </div>
                </div>
                
            </section>
            <Footer />
        </div>
    )
}

export default Competence;
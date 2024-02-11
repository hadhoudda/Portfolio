import React from 'react';
import '../styles/competence.css';
import skills from "../data/skills.json";
import tools from '../data/tools.json';
import Skill from '../components/Skill';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Competence() {
    return (
        <div className='competence'> 
            <Header />
            <section className="container-competence">
                <div className="container-skills-tools">
                    <div className="content">
                        <h3>Compétances techniques</h3>
                            {skills &&
                            skills.length > 0 &&
                            skills.map((competence) => {
                                return (<Skill skill={competence.skill} porcent={competence.porcent } key={competence?.id} />);
                            })}
                    </div>
                    <div className="content">
                    <h3>Outils techniques</h3>
                        {tools &&
                        tools.length > 0 &&
                        tools.map((tool) => {
                            return (<Skill skill={tool.tool} porcent={tool.porcent} key={tool?.id} />);
                        })}
                    </div>
                </div>
                <div className="icone-skills">
                    <i className='bx bxl-html5 style-icone-skill icone-html'></i>
                    <i className='bx bxl-css3 style-icone-skill icone-css'></i>
                    <i className='bx bxl-sass style-icone-skill icone-sass'></i>
                    <i className='bx bxl-javascript style-icone-skill icone-javascript'></i>
                    <i className='bx bxl-react style-icone-skill icone-react' ></i>
                    <i className='bx bxl-nodejs style-icone-skill icone-node'></i>
                    <i className='bx bxl-visual-studio style-icone-skill icone-vscode'></i>
                    <i className='bx bxl-github style-icone-skill icone-github'></i>
                    <i className='bx bxs-data style-icone-skill icone-data' ></i>
                    <i className='bx bxl-spring-boot style-icone-skill icone-spring-boot'></i>

                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Competence;
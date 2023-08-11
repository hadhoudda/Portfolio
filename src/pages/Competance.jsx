import React from 'react';
import '../styles/competance.css';
import skills from "../data/skills.json";
import tools from '../data/tools.json';
import Skill from '../components/Skill';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Competance() {
    return (
        <div className='competance'> 
            <Header />
            <section className="container-competance">
                <div className="container-skills-tools">
                    <div className="content">
                        <h3>Compétances techniques</h3>
                            {skills &&
                            skills.length > 0 &&
                            skills.map((competance) => {
                                return (<Skill skill={competance.skill} porcent={competance.porcent } key={competance?.id} />);
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
                    <i className='bx bxl-javascript style-icone-skill icone-javascript'></i>
                    <i className='bx bxl-react style-icone-skill icone-react' ></i>
                    <i className='bx bxl-nodejs style-icone-skill icone-node'></i>
                    <i className='bx bxl-visual-studio style-icone-skill icone-vscode'></i>
                    <i className='bx bxl-github style-icone-skill icone-github'></i>
                    <i className='bx bxl-mongodb style-icone-skill icone-mongodb' ></i>
                    <i className='bx bxl-figma style-icone-skill icone-figma'></i>
                    <i className='bx bxl-trello style-icone-skill icone-trello' ></i>

                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Competance;
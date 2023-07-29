import React from 'react';
import '../styles/competance.css';
import skills from "../data/skills.json";
import Skill from '../components/Skill';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Competance() {
    return (
        <section className='competance'> 
            <Header />
            {skills.map((competance , index) => {
                return (
                    <section className="container-skills">
                        <Skill skill={competance?.skill}  porcent={competance?.porcent} key={index}/>
                    </section>
                    );
                })}
            <Footer />
        </section>
    )
}

export default Competance;
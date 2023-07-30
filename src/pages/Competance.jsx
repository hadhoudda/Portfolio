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
            <section className="container-skill">
            {skills &&
                skills.length > 0 &&
                skills.map((competance) => {
                    return (<Skill content={competance} key={competance?.id} />);
            })}
            </section>
            <Footer />
        </section>
    )
}

export default Competance;
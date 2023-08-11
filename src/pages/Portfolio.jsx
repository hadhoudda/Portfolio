import React from "react";
import '../styles/portfolio.css';
import data from '../data/data.json'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Project from '../components/Project';


function Portfolio() {
  return (
    <div className="container-portfolio">
        <Header />
        <h2 className='title-portfolio'>Mon portfolio</h2>
        <section className='content-portfolio'>
            {data &&
            data.length > 0 &&
            data.map((card) => {
                return (<Project project={card} key={card?.id} />);
            })}
        </section>
        <Footer />
    </div>
  )
}

export default Portfolio ;
import React from "react";
import '../styles/portfolio.css';
import data from '../data/data.json'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Project from '../components/Project';


export default function Portfolio() {
  return (
    <div className="container-portfolio">
        <Header />
        <h3 className='title-portfolio'>Mon portfolio</h3>
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

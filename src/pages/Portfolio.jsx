import React from 'react';
import '../styles/portfolio.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Portfolio() {
  return (
    <div className="container-portfolio">
        <Header />
        <section className='portfolio'>
            Portfolio
        </section>
        <Footer />
    </div>
  )
}

import React from 'react';
import { Link } from "react-router-dom";
import '../styles/notfound.css';
import Header from "../components/Header";
import Footer from '../components/Footer';

function NotFound () {
    return (
        <div className='content-not-found'>
            <Header/>
            <section className="notfound">
                <p className="number">404</p>
                <p className="txt-notfound">Oups! La page que vous demandez n&rsquo;existe pas.</p>
                <Link to="/Portfolio"><p className="txt-retour">Retourner sur la page d&rsquo;accueil</p></Link>

            </section>
            <Footer />
        </div>
    )
}

export default NotFound ;
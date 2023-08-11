import React from 'react';
import '../styles/contact.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FormContact from '../components/FormContact';

export default function Contact() {
  return (
    <div className='container-contact'>
        <Header />
        <FormContact />
        <Footer />
    </div>
  )
}
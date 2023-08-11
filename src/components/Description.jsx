import React from 'react'
import '../styles/description.css'
import SocialMedia from "./SocialMedia";

function Description() {
  return (
    <section className='section-home'>
        <h1 className='title'>Bienvenue sur mon <br /> portfolio</h1>
        <p className="txt-home">
        Je suis Houda,
        développeuse web full-stack junior
        </p>
        <SocialMedia />
        
    </section>
  )
}

export default Description;
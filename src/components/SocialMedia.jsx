import React from 'react';
import '../styles/social-media.css';

function SocialMedia() {
  return (
    <div className='home-social'>
        <div className="link-social">
            <a href="https://github.com/hadhoudda"><i className='bx bxl-github'></i></a>
            <a href="https://www.linkedin.com/in/houda-ben-abdallah-68564425b"><i className='bx bxl-linkedin'></i></a>
            <a href="https://wa.me/+33622464454"><i className='bx bxl-whatsapp'></i></a>
            <a href="mailto:ahhouda@yahoo.fr"><i className='bx bx-mail-send'></i></a>
        </div>
        <a className='btn-cv' href='./cv.pdf' download >Télécharger CV </a>
    </div>
  )
}


export default SocialMedia ;
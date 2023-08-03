import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/social-media.css';

function SocialMedia() {
  return (
    <div className='home-social'>
        <div className="link-social">
            <Link to="https://github.com/hadhoudda"><i className='bx bxl-github'></i></Link>
            <Link to="https://www.linkedin.com/in/houda-ben-abdallah-68564425b"><i className='bx bxl-linkedin'></i></Link>
            <Link to="https://wa.me/+33622464454"><i className='bx bxl-whatsapp'></i></Link>
            <Link to="mailto:ahhouda@yahoo.fr"><i className='bx bx-mail-send'></i></Link>
        </div>
        {/* <Link to="/Portfolio/cv.pdf" download className='btn-cv'>Télécharger CV </Link> */}
        <a href="./cv.pdf" className='btn-cv'  download >Télécharger CV </a>
    </div>
  )
}


export default SocialMedia ;
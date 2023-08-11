import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/social-media.css';

function SocialMedia() {
  return (
    <>
        <div className="container-icone">
            <div className="icone-code">
                <i className="fa-solid fa-code"></i><br />
                <span>front-end</span>
            </div>
            <div className="icone-code">
                <i className="fa-solid fa-database"></i><br />
                <span>back-end</span>
            </div>
        </div>  
        <div className='home-social'>
            <div className="link-social">
                    <Link to="https://github.com/hadhoudda"><i className='bx bxl-github'></i></Link>
                    <Link to="https://www.linkedin.com/in/houda-ben-abdallah-68564425b"><i className='bx bxl-linkedin'></i></Link>
                    <Link to="https://wa.me/+33622464454"><i className='bx bxl-whatsapp'></i></Link>
                    <Link to="mailto:ahhouda@yahoo.fr"><i className='bx bx-mail-send'></i></Link>
            </div>
            {/* <Link to="/cv.pdf"  className='btn-cv' download >Télécharger CV </Link> */}
            <a href="./cv.pdf" className='btn-cv'  download >Télécharger mon CV </a>
        </div> 
    </>
    )
}

export default SocialMedia ;
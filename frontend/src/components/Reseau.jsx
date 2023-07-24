import React from 'react';
import '../styles/reseau.css';

function Reseau() {
  return (
    <div className='home-reseau'>
        <div className="link-reseau">
            <a href="f"><i class='bx bxl-github'></i></a>
            <a href="l"><i class='bx bxl-linkedin'></i></a>
            <a href="t"><i class='bx bxl-whatsapp'></i></a>
            <a href="p"><i class='bx bx-mail-send'></i></a>
        </div>
        <a className='btn-cv' href='./cv.pdf' download >Télécharger CV </a>
    </div>
  )
}

export default Reseau ;
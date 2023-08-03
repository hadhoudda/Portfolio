import React, { useRef} from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
//require('dotenv').config();
import '../styles/formcontact.css'

function FormContact() {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        //emailjs.sendForm(process.env.YOUR_SERVICE_ID, process.env.YOUR_TEMPLATE_ID , form.current, process.env.YOUR_PUBLIC_KEY)
        emailjs.sendForm('service_xbw7xvx', 'template_x1ohdje', form.current, 'X1Cf5ovioyGwNMk3Y')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };

    return (
        <div className="container-form">
            <h2 className='title-contact'>CONTACTEZ-MOI</h2>
            <p className="text-contact">N'hésitez pas à me contacter,
                 je vous répondrai dans les plus brefs délais.
            </p>
            <div className="content-form-contact">
                <form ref={form} onSubmit={sendEmail} className='form-contact'>
                    <input type="text" 
                        placeholder='votre nom*'
                        name='user_name'
                        required />
                    <input type="email" 
                        placeholder='Votre email*'
                        name='user_email'
                        required />
                    <input type="text" 
                        placeholder='Sujet'
                        name='subject'
                        />
                    <textarea name="message" placeholder='Votre message*' ></textarea>
                    <button type='submit' className='btn-message'>Envoyer </button>
                    <p className="text-form">* Champ obligatoire</p>
                </form>
                <div className="info-contact">
                    <p className="text-info-contact">Vous pouvez me contacter directement par téléphone :</p>
                    <Link className="icone-form" to="tel:+33622464454"><i class='bx bxs-phone'></i></Link>
                </div>
            </div>
        </div>
    
    )
  
  }

  export default FormContact;
import React, { useRef, useState} from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import '../styles/formcontact.css';
//require('dotenv').config();

function FormContact() {
    const form = useRef()
    const [isAlert, setAlert] = useState(false);
    
    const handleAlert = () =>{
        setAlert(true);
        setTimeout(() => {
            setAlert(false);}, 4000);
        }  

    const sendEmail = (e) => {
        e.preventDefault();
        //emailjs.sendForm(process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_YOUR_TEMPLATE_ID , form.current, process.env.REACT_APP_YOUR_PUBLIC_KEY)
        emailjs.sendForm('service_xbw7xvx', 'template_x1ohdje', form.current, 'X1Cf5ovioyGwNMk3Y')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
        }
        
    return (
        <div className="container-form">
            <h2 className='title-contact'>Contactez-moi</h2>
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
                    <div >
                        {isAlert && <p className="message-confirm">message bien envoyé</p>}
                        <button onClick={handleAlert} type='submit' className='btn-message'>Envoyer </button>
                    </div>
                    <p className="text-form">* Champ obligatoire</p>
                </form>
                <div className="info-contact">
                    <p className="text-info-contact">Vous pouvez me contacter directement par téléphone :</p>
                    <Link className="icone-form" to="tel:+33622464454"><i className='bx bxs-phone'></i></Link>
                </div>
            </div>
        </div>
    )
  }

  export default FormContact;
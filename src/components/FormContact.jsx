import React, { useRef} from 'react';
import emailjs from '@emailjs/browser';
import '../styles/formcontact.css'


//const FormContact = ()=> {
function FormContact() {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };

    return (
        <div className="container-form">
            <h2>Contact</h2>
            <form ref={form} onSubmit={sendEmail} className='form-contact'>
                <input type="text" 
                    placeholder='votre nom'
                    name='user_name'
                    required />
                <input type="email" 
                    placeholder='Email'
                    name='user_email'
                    required />
                <input type="text" 
                    placeholder='Sujet'
                    name='subject'
                    required />
                <textarea name="message" cols="30" rows="10"></textarea>
                <button type='submit' className='btn-message'>envoyer message</button>
            </form>
        </div>
    
    )
  
  }

  export default FormContact;
import {useRef} from 'react';
import '../styles/formcontact.css'


//const FormContact = ()=> {
function FormContact() {
    const form = useRef()
return (
    <div className="container-form">
        <h2>Contact</h2>
        <form ref={form} onSubmit={} className='form-contact'>
            <input type="text" 
                placeholder='votre nom'
                name='user-name'
                required />
            <input type="email" 
                placeholder='Email'
                name='user-email'
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
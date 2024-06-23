"use client"
import React,{useState} from 'react'
import emailjs from 'emailjs-com';
import styles from './Contacts.module.css'
const ContactForm = () => {
    const [status,setStatus]=useState('Send')
    function sendEmail(e:any){
        e.preventDefault();

        const templateParams = {
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value,
        };
        
        emailjs.send(

          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
          templateParams,
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string
        )
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          setStatus((status)=>"Sent");
          setTimeout(() => {
            setStatus((status)=>"Send");
          }, 3000);
        //   setStatus('Message sent successfully!');
        }, (error) => {
          console.log('FAILED...', error);
          setStatus((status)=>"Error");
          setTimeout(() => {
            setStatus((status)=>"Send");
          }, 3000);
        //   setStatus('Failed to send message.');
        });
    
        e.target.reset();
    }

  return (
   <div className={styles.contactForm}>
    <form onSubmit={sendEmail}>
        <label htmlFor="name">Name</label>
        <br />
        <input type="text" id='name' name='Name' placeholder='John Dope' minLength={3} required/>
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input type="email" id='email' name='Email' placeholder='johndope123@gmail.com' minLength={5} required/>
        <br />
        <label htmlFor="message">Message</label>
        <br />
        <textarea name="message" id="message" rows={5}  style={{resize:"none"}} placeholder='Your Message here' minLength={3}></textarea>
        <button type='submit' name='send'>{status}</button>
    </form>
    </div>
  )

}

export default ContactForm
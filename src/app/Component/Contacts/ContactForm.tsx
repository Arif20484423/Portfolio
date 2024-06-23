import React from 'react'

import styles from './Contacts.module.css'
const ContactForm = () => {
  return (
   <div className={styles.contactForm}>
    <form action="">
        <label htmlFor="name">Name</label>
        <br />
        <input type="text" id='name' name='Name' placeholder='John Dope'/>
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input type="text" id='email' name='Email' placeholder='johndope123@gmail.com'/>
        <br />
        <label htmlFor="message">Message</label>
        <br />
        <textarea name="message" id="message" rows={5}  style={{resize:"none"}} placeholder='Your Message here'></textarea>
        <button type='submit' name='send'>Send</button>
    </form>
    </div>
  )
}

export default ContactForm
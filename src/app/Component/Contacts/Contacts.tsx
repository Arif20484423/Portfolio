import React from 'react'
import styles from './Contacts.module.css'
import ContactForm from './ContactForm'
import ContactLinks from './ContactLinks'
const Contacts = () => {
  return (
    <div className={styles.contacts}>
        <ContactLinks></ContactLinks>
        <ContactForm></ContactForm>
    </div>
  )
}

export default Contacts
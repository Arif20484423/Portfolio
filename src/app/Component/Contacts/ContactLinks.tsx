import React from 'react'
import styles from './Contacts.module.css'
import Links from '../ContactLinks/Links'
import Image from 'next/image'
import location from '../../../../public/location.png'
import phone from '../../../../public/phone.png'
import email from '../../../../public/email.png'
const ContactLinks = () => {
  return (
    <div className={styles.contactLinks}>
        <h2>Contact Me</h2>
        <p><Image src={location} alt='Location' width={18} style={{position:"relative",top:"3px",paddingRight:"10px"}}></Image> Bhadohi, Uttar Pradesh, India</p>
        <p><Image src={phone} alt='Location' width={18} style={{position:"relative",top:"3px",paddingRight:"10px"}}></Image> Phone : 9695494899</p>
        <p><Image src={email} alt='Location' width={18} style={{position:"relative",top:"3px",paddingRight:"10px"}}></Image> Email : arif7862016a@gmail.com</p>
        <br />
        
        <Links></Links>
    </div>
  )
}

export default ContactLinks
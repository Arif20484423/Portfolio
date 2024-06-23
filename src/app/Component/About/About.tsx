import React from 'react'
import Image from 'next/image'
import aboutimg from '../../../../public/aboutimg webp.webp'
import styles from './About.module.css'
const About = () => {
  return (
    <div className={styles.about}>
        <div className={styles.aboutContent}>
        <h2 style={{fontSize:"40px"}}>About me</h2>
        <h3>Full Stack Developer</h3>
        <p>
            I'm Md Arif and I am from Bhadohi,Uttar Pradesh. 
            I am a Computer Science Graduate from University of Delhi.
             I have worked hard in my graduation and scored 8.75 CGPA.
              Along with my Degree I prepared for Nimcet 2023 and also 
              got AIR 487. Along with my degree i learnt C++, Java, Python,
               SQL. Currently am in National Institute of Technology Jamshedpur, 
               pursuing my master's(MCA) and exploring technologies like Web Development,
                Machine Learning, Data Structures and Algorithms, various programming languages.
                Loooking forward to the journey ahead...
        </p>
        </div>
        <div className={styles.aboutImage}>
            <Image src={aboutimg} alt='Code Image' width={350}></Image>
        </div>
    </div>
  )
}

export default About
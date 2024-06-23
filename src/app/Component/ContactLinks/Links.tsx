import React from 'react'
import Image from 'next/image'
import linkedin from '../../../../public/linkedin favicon.png'
import instagram from '../../../../public/instagram copy.png'
import facebook from '../../../../public/facebook.png'
import github from '../../../../public/github.png'
import styles from './Links.module.css'
const Links = () => {
  return (
   <>
        <a href="https://www.linkedin.com/in/md-arif-181a0a205/" target='blank'><Image className={styles.socialIcons} src={linkedin} alt="linkedin" width={25}></Image></a>
        <a href="https://www.instagram.com/md3407arif/" target='blank'><Image className={styles.socialIcons} src={instagram} alt="instagram" width={25} ></Image></a>
        <a href="https://www.facebook.com/profile.php?id=100032643334410" target='blank'><Image className={styles.socialIcons} src={facebook} alt="facebook" width={25} ></Image></a>
        <a href="https://github.com/Arif20484423" target='blank'><Image className={styles.socialIcons} src={github} alt="github" width={25} ></Image></a>
        <br />
        <br />
        <a href='../../../../public/resume.pdf' download="resume.pdf" ><button className={styles.resumeButton}>Download Resume</button></a>
        </>
  )
}

export default Links
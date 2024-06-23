import React from 'react'
import Image from 'next/image'
import styles from './Project.module.css'
import webimg from '../../../../public/website.png'
const ProjectCard = (props:any) => {
    
    
  return (
    <div className={styles.projectCard}>
        <div  className={styles.projectCardImage}>
        <Image  src={props.src} alt='Inoteweb Image' style={{width:"inherit"}} width={500} layout='responsive' sizes='(max-width:400px) 230px ,(max-width:560px) 250px ,(max-width:650px) 300px ,(max-width:800px) 350px,(max-width:1000px) 400px ,(max-width:1300px) 500px  ,(max-width:1500px) 600px , 700px'></Image>
        <div className={styles.projectWrapper}><a href={props.link} target='blank' className={styles.wrapperContent}><Image src={webimg} alt='WebPage' width={50}></Image><p>Visit</p></a></div>
        </div> 
        
        <div className={styles.projectCardContent}>
        <h3>{props.contentHead}</h3>
        <p>{props.contentPara}</p>
        </div>
        
    </div>
  )
}

export default ProjectCard
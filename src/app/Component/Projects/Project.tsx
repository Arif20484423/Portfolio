import React from 'react'
import styles from './Project.module.css'
import ProjectCard from './ProjectCard'
import inotewebImg from '../../../../public/inoteweb_img.png'
import dicegameimg from '../../../../public/dice_game.png'
const Project = () => {
  return (
    <div className={styles.projects}>
        <h2 style={{fontSize:"40px"}}>Projects</h2>
        <div className={styles.projectsConatainer}>
            {/* <iframe src="https://inoteweb-app.onrender.com" frameborder="0"></iframe> */}
            <ProjectCard src={inotewebImg} link="https://inoteweb-app.onrender.com"  contentHead="Inoteweb" contentPara="It is a mini project that stores notes similar to keep note. Its a full stack project where a user can log in to their account to add delete and update notes. This app stores the notes and user details in database "></ProjectCard>
            <br />
            <br /><br />
            <ProjectCard src={dicegameimg} link="https://arif20484423.github.io/Dice-game/"  contentHead="Dice Game" contentPara="It is a mini project that is built on very basic html, css and javascript. On every refresh it apperas with a new dice pair and according diplay who wins. "></ProjectCard>
        </div>
    </div>
  )
}

export default Project
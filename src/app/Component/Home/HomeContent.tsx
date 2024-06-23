"use client"
import React, { useEffect } from 'react'
import { useState } from 'react'
import Image from 'next/image'
import styles from './Home.module.css'
import linkedin from '../../../../public/linkedin favicon.png'
import instagram from '../../../../public/instagram copy.png'
import facebook from '../../../../public/facebook.png'
import github from '../../../../public/github.png'

const HomeContent = () => {
  const [role,setRole]=useState("");
  const [i,setI]=useState(0);
  const [flag,setFlag]=useState(false);
  const [forward,setForward]=useState(true);
      const role1='Full Stack Developer'
      const role2='Java Developer'
      // let flag=false;
      // let i=0;
      
      useEffect(()=>{
        // console.log(i+" "+flag);
      setTimeout(()=>{
        if(flag){
          if(forward){
            setRole((role)=>role+role2.charAt(i));
            setI((i)=>i+1);
            if(i==role2.length){
              setForward((forward)=>false)
            }
          }
          else{
            setRole((role)=>role.substring(0,role.length-1));
            setI((i)=>i-1);
            if(i==0){
            setFlag((flag)=>false);
              setForward((forward)=>true)
            }
          }
          
        }
        else{
          if(forward){
            setRole((role)=>role+role1.charAt(i));
            // console.log(role);
            setI((i)=>i+1);
            if(i==role1.length){
              setForward((forward)=>false)
            }
          }
          else{
            setRole((role)=>role.substring(0,role.length-1));
            setI((i)=>i-1);
            if(i==0){
              setFlag((flag)=>true);
              setForward((forward)=>true)
            }
          }
          
        }
      },70);
      // return ()=>{
      //   setFlag(flag=>false)
      //   setForward(forward=>true)
      //   setI(i=>0);
      // }
      })
  return (
    <section className={styles.homeContent}>
        <h2>MD ARIF</h2>
        <h3 id='role' style={{height:"15px"}}>{role}</h3>
        <p>Hello! I'm , a passionate web developer with a keen interest in crafting exceptional digital experiences. With a solid foundation in web development and a thirst for learning, I'm committed to pushing the boundaries of what's possible on the web.</p>
        <br />
        <section className={styles.iconssec}>
        <a href="https://www.linkedin.com/in/md-arif-181a0a205/" target='blank'><Image className={styles.socialIcons} src={linkedin} alt="linkedin" width={25}></Image></a>
        <a href="https://www.instagram.com/md3407arif/" target='blank'><Image className={styles.socialIcons} src={instagram} alt="instagram" width={25} ></Image></a>
        <a href="https://www.facebook.com/profile.php?id=100032643334410" target='blank'><Image className={styles.socialIcons} src={facebook} alt="facebook" width={25} ></Image></a>
        <a href="https://github.com/Arif20484423" target='blank'><Image className={styles.socialIcons} src={github} alt="github" width={25} ></Image></a>
        <br />
        <br />
        <a href='../../../../public/resume.pdf' download="resume.pdf" ><button className={styles.resumeButton}>Download Resume</button></a>
        </section>
      </section>
  )
}

export default HomeContent
"use client"
import React, { useEffect } from 'react'
import { useState } from 'react'
import Links from '../ContactLinks/Links'
import styles from './Home.module.css'

const HomeContent = () => {
  const [role,setRole]=useState("");
  const [i,setI]=useState(0);
  const [flag,setFlag]=useState(false);
  const [forward,setForward]=useState(true);
      const role1='Full Stack Developer'
      const role2='Java Developer'
      useEffect(()=>{
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
      })
  return (
    <section className={styles.homeContent}>
        <h2>MD ARIF</h2>
        <h3 id='role' style={{height:"15px"}}>{role}</h3>
        <p>Hello! I'm , a passionate web developer with a keen interest in crafting exceptional digital experiences. With a solid foundation in web development and a thirst for learning, I'm committed to pushing the boundaries of what's possible on the web.</p>
        <br />
        <section className={styles.iconssec}>
        <Links></Links>
        </section>
      </section>
  )
}

export default HomeContent
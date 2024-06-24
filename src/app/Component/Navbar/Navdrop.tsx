"use client"
import React from 'react'
import styles from './Navbar.module.css'
import Image from 'next/image'
import menuicon from '../../../../public/menu.png'
const Navdrop = () => {
    let flag=false;
    function handleNavDrop(){
        if(flag==false){
            document.getElementById("navbar")?.setAttribute("style","height:200px")
            flag=true;
        }
        else{
            document.getElementById("navbar")?.setAttribute("style","height:0px")
            flag=false;
        }
    }
  return (
    <div className={styles.navdrop}><p onClick={handleNavDrop}><Image src={menuicon} alt='Menu' width={30}></Image></p></div>
  )
}

export default Navdrop
import React from 'react'
import styles from './Navbar.module.css'
const Navbar = () => {
  return (
    <div id="navbar" className={styles.navbar}>
        <a href="/">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contacts">Contact</a>

    </div>
  )
}

export default Navbar
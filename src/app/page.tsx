import Image from "next/image";
import HomeImage from "./Component/Home/HomeImage";
import HomeContent from "./Component/Home/HomeContent";
import styles from './page.module.css'
import Navbar from "./Component/Navbar/Navbar";
import Navdrop from "./Component/Navbar/Navdrop";
import About from "./Component/About/About";
import Skills from "./Component/Skills/Skills";
import Interests from "./Component/Interests/Interests";
import Project from "./Component/Projects/Project";
export default function Home() {
  return (
    <>
    <section className={styles.navmain}>
          <Navdrop></Navdrop>
          <Navbar></Navbar>
      </section>
      
      <div className={styles.main}>
      
      <section id="home" className={styles.home}>
      <HomeImage></HomeImage>
      <HomeContent></HomeContent>
      
      </section>
      <section id="about" >
        <br />
      <About></About>
      </section>
      <section id="skills" >
        <br />
      <Skills></Skills>
      
      </section>
      <section id="projects" >
        <br />
      <Project></Project>
      </section>
      
      {/* 
      
      <section id="interests" className={styles.home}>
      <HomeImage></HomeImage>
      <HomeContent></HomeContent>
      
      </section>
      <section id="projects" className={styles.home}>
      <HomeImage></HomeImage>
      <HomeContent></HomeContent>
      
      </section>
      <section id="contacts" className={styles.home}>
      <HomeImage></HomeImage>
      <HomeContent></HomeContent>
      
      </section> */}
    </div>    
      
    <br /><br />
    </>
    
  );
}

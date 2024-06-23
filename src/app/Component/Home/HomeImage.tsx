import React from 'react'
import Image from 'next/image'
import arif from '../../../../public/arif_img_webp_compressed.webp'
import styles from './Home.module.css'
// import homebackimg from '../../../../public/homebackimg.png'
const HomeImage = () => {
  // setTimeout(()=>{
  //     document.getElementById('homeimage')?.setAttribute("style",`background:${homebackimg}`);
  // },1000)
  return (
    <div id='homeImage' className={styles.homeImage}><Image src={arif} alt="Arif's image" className={styles.image} width={250}></Image></div>
  )
}

export default HomeImage
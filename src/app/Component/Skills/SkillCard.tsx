import React from 'react'
import Image from 'next/image'
import styles from './Skill.module.css'
const SkillCard = (props:any) => {
  return (
    <div className={styles.skillCard}><Image src={props.src} alt={props.alt} width={80} height={80}></Image>
    </div>
  )
}

export default SkillCard
import React from 'react'
import Image from 'next/image'
import styles from './Skill.module.css'
const SkillCard = (props:any) => {
  return (
    <div className={styles.skillCard}><Image {...props} width={80} height={80}></Image>
    
    
    </div>
  )
}

export default SkillCard
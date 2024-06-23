import React from 'react'
import styles from './Skill.module.css'
import SkillCard from './SkillCard'
import cpp from '../../../../public/c++.png'
import c from '../../../../public/c.png'
import java from '../../../../public/java.png'
import python from '../../../../public/python.png'

import html from '../../../../public/html.png'
import css from '../../../../public/css.png'
import js from '../../../../public/js.png'
import reactimg from '../../../../public/react.png'
import nextimg from '../../../../public/next.png'
import nodeimg from '../../../../public/node.png'
import expressimg from '../../../../public/express.png'
import mongo from '../../../../public/mongo.png'
import sql from '../../../../public/sql.png'

const Skills = () => {
  return (

    <div className={styles.skills}>
        <h2 style={{fontSize:"40px"}}>Skills</h2>
        <div className={styles.skillContainer}>
            
            <SkillCard src={c} alt='C'></SkillCard>
            <SkillCard src={cpp} alt='C++'></SkillCard>
            <SkillCard src={java} alt='Java'></SkillCard>
            <SkillCard src={python} alt='Python'></SkillCard>
            <SkillCard src={html} alt='HTML'></SkillCard>
            <SkillCard src={css} alt='CSS'></SkillCard>
            <SkillCard src={js} alt='Javascript'></SkillCard>
            <SkillCard src={reactimg} alt='React'></SkillCard>
            <SkillCard src={nextimg} alt='Next'></SkillCard>
            <SkillCard src={nodeimg} alt='Node'></SkillCard>
            <SkillCard src={expressimg} alt='Express'></SkillCard>
            <SkillCard src={mongo} alt='Mongodb'></SkillCard>
            <SkillCard src={sql} alt='SQL'></SkillCard>
        </div>
    </div>
  )
}

export default Skills
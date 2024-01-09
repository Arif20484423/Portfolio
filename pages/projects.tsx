import React from 'react'
import classes from '../styles/Home.module.css'
import Head from 'next/head'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faDiamond } from '@fortawesome/pro-solid-svg-icons'
import { Box,AspectRatio,Grid,Image,Center,Text } from '@mantine/core';
import {
  useComputedColorScheme,
  useMantineColorScheme,Button,Flex
} from '@mantine/core';
const projects = () => {
  return (
    <Box bg='white ' className={classes.bio} w='78vw' >
        <Grid bg='white' className={classes.bio} mt={20} mx='auto'  w='78vw' >
      <Grid.Col m={0} p={0} span={12}>
        
        <Center fz={20}  fw='bolder'> <h1 className={classes.elements}>Projects</h1></Center>
        </Grid.Col>
       
       
      </Grid>
      <br />
      <br />
      
      <Grid bg='white' className={classes.samecomp} >
         
          <Grid.Col className={classes.projtitle} span={{sm:12,md:8}} order={{base:2, sm:2,md:1}} >
            <h2>Clock Page</h2>
            <p>
              Its a project  on a Clock , This is a web app that has the clock and the timer. This project is on simple html, css and Javascript just to start with any project of web U can visit the web site <a href="https://arif20484423.github.io/ClockPage/" target='_blank ' >here</a>
            </p>
            
          </Grid.Col>
          <Grid.Col span={{sm:12,md:4}} order={{base:1,sm:1,md:2}}>
            <img className={classes.projs} src="/clock.png" alt="" />
          </Grid.Col>
        </Grid>

        <Grid bg='white' className={classes.samecomp} >
        <Grid.Col span={{sm:12,md:4}}>
            <img className={classes.projs} src="/keeper.png" alt="" />
          </Grid.Col>
          <Grid.Col className={classes.projtitle} span={{sm:12,md:8}}  >
            <h2>Keeper Web App</h2>
            <p>
              Its a project  on a Keep notes , This is a web app that has the add note and delete note functions where data is stored in an array other tahn a database as its trial Project on html, css, Js.U can visit the web site <a href="https://keepers-webapp.netlify.app/" target='_blank ' >here</a>
            </p>
            
          </Grid.Col>
          
        </Grid>
        </Box>

  )
}

export default projects
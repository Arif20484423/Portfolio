import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import classes from '../styles/Home.module.css'
import styles from '@/styles/Home.module.css'
import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faDiamond } from '@fortawesome/pro-solid-svg-icons'
import { Box,AspectRatio,Grid,Image,Center,Text } from '@mantine/core';
import {
  useComputedColorScheme,
  useMantineColorScheme,Button,Flex
} from '@mantine/core';
const languages = () => {
  return (
    <Box bg='white ' className={classes.bio} w='78vw' >
        <Grid bg='white' className={classes.bio} mt={20} mx='auto'  w='78vw' >
      <Grid.Col m={0} p={0} span={12}>
        
        <Center fz={20}  fw='bolder'> <h1 className={classes.elements}>Languages</h1></Center>
        </Grid.Col>
       
       
      </Grid>
      <br />
      <br />
      <Grid bg='white' className={classes.samecomp} >
        <Grid.Col span={{base:12,sm:12,md:6}}>
            
            <div className={classes.cir1}>
              <h2 className={classes.one}>C</h2>
              <h2 className={classes.two}>C++</h2>
              <h2 className={classes.three}>Java</h2>
              <h2 className={classes.four}>Python</h2>
              <h2 className={classes.five}>Javascript</h2>
            </div>
            
          </Grid.Col>
          <Grid.Col  span={{base:12,sm:12,md:6}} >
          <div className={classes.cir2}>
            <h2 className={classes.secone}>R</h2>
            <h2 className={classes.sectwo}>C#</h2>
          </div>
            
          </Grid.Col>
          </Grid>
        </Box>

  )
}

export default languages
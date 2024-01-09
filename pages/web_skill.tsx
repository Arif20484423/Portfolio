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
const web_skill = () => {
  return (
    <Box bg='white ' className={classes.bio} w='78vw' >
        <Grid bg='white' className={classes.bio} mt={20} mx='auto'  w='78vw' >
      <Grid.Col m={0} p={0} span={12}>
        
        <Center fz={20}  fw='bolder'> <h1 className={classes.elements}>Web Skills</h1></Center>
        </Grid.Col>
       
       
      </Grid>
      <br />
      <br />
      <Grid bg='white' className={classes.samecomp} >
        <Grid.Col span={{base:12,sm:12,md:6}}>
            
            <div className={classes.box1} >
              <Box display='inline' pos='relative' top={50} left={50} bg='rgba(22, 82, 64, 1)' className={classes.boxes} p={4} px={6}  c='white'><h4>html</h4></Box>
              <Box display='inline' pos='relative' top={130} left={70} bg='rgba(0, 191, 134, 1)' className={classes.boxes} p={4} px={6}  c='black'><h4>css</h4></Box>
              <Box display='inline' pos='relative' top={80} left={50} bg='rgba(22, 82, 64, 1)' className={classes.boxes} p={4} px={6}   c='white'><h4>javascript</h4></Box>
              <Box display='inline' pos='relative' top={40} left={50} bg='rgba(0, 191, 134, 1)' className={classes.boxes} p={4} px={6}   c='black'><h4>Bootstrap</h4></Box>
              <Box display='inline' pos='relative' top={140} bg='rgba(22, 82, 64, 1)' className={classes.boxes} p={4} px={6}   c='white'><h4>jquery</h4></Box>
              <Box display='inline' pos='relative' top={70} right={50}  bg='rgba(0, 191, 134, 1)' className={classes.boxes} p={4} px={6}   c='black'><h4>Dom</h4></Box>
              <Box display='inline' pos='relative' top={5} right={80} bg='rgba(22, 82, 64, 1)' className={classes.boxes} p={4} px={6}   c='white'><h4>Node</h4></Box>
            </div>
            
          </Grid.Col>
          <Grid.Col  span={{base:12,sm:12,md:6}} >
          <div className={classes.box2}>
          <Box display='inline' pos='relative' top={50} left={50} bg='rgba(22, 82, 64, 1)' className={classes.boxes} p={4} px={6}  c='white'><h4>Reacjs</h4></Box>
              <Box display='inline' pos='relative' top={130} left={70} bg='rgba(0, 191, 134, 1)' className={classes.boxes} p={4} px={6}  c='black'><h4>Nextjs</h4></Box>
              <Box display='inline' pos='relative' top={80} left={20} bg='rgba(22, 82, 64, 1)' className={classes.boxes} p={4} px={6}   c='white'><h4>typescript</h4></Box>
              <Box display='inline' pos='relative' top={40} left={20} bg='rgba(0, 191, 134, 1)' className={classes.boxes} p={4} px={6}   c='black'><h4>mantine</h4></Box>
              <Box display='inline' pos='relative' top={140} right={40} bg='rgba(22, 82, 64, 1)' className={classes.boxes} p={4} px={6}   c='white'><h4>expressjs</h4></Box>
              <Box display='inline' pos='relative' top={80}  right={140} bg='rgba(0, 191, 134, 1)' className={classes.boxes} p={4} px={6}   c='black'><h4>Mongodb</h4></Box>
              <Box display='inline' pos='relative' top={0} right={150} bg='rgba(22, 82, 64, 1)' className={classes.boxes} p={4} px={6}   c='white'><h4>Sql</h4></Box>
          </div>
            
          </Grid.Col>
          </Grid>
        </Box>

  )
}

export default web_skill
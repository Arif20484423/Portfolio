// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import type { AppProps } from 'next/app';
import '@mantine/core/styles.css';
import Link from 'next/link'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { createTheme, MantineProvider,Button,rem ,Flex,Text,Box } from '@mantine/core';
import classes from '../styles/Home.module.css'

const theme = createTheme({
  
  /** Put your mantine theme override here */
  
  fontFamily:"Inter, sans-serif"
});

export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <MantineProvider theme={theme}  >

      <Box className={classes.maine}>
      <Flex justify='center' mx={10} my={10}  c='grey'>
          <Text fw='bold' component={Link} href='/' m={15}>Home</Text>
          <Text fw='bold' component={Link} href='/projects' m={15}>Projects</Text>
          <Text fw='bold' component={Link} href='/languages' m={15}>Languages</Text>
          <Text fw='bold' component={Link} href='web_skill'  m={15}>Web Skills </Text>
        </Flex>
      <Component {...pageProps} />
      </Box>
    </MantineProvider>
  );
}
import { Head, Html, Main, NextScript } from 'next/document';
import { ColorSchemeScript } from '@mantine/core';
import classes from '../styles/Home.module.css'
export default function Document() {
  return (
    <Html lang="en" >
      <Head>
        <ColorSchemeScript defaultColorScheme="auto" />
        
      </Head>
      <body style={{"backgroundColor":"rgba(222, 222, 222, 1)"}}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
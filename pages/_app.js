// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'


import "@fontsource/rajdhani"
import { mynewtheme } from '../src/theme'

function Dasboard({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={mynewtheme}>
     
       


     
        <Component {...pageProps} />
       
       
     
    </ChakraProvider>
  )
}

export default Dasboard
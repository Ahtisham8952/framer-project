import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import SliderComponent from './SliderComponent'

const BrainIndex = () => {
  return (
   <>
   <Box bg="white">
    <Box >
        <Box p="100px">

       
        <Flex gap={"8px"} alignItems="center" >
            <Image src="/gradianrbar.svg" alt='img'></Image>
            <Text
            
            style={{
                background: `linear-gradient(to right, #E97522 0%, #1EA3B1 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: '16px',
                fontWeight: '400',
                lineHeight: '22px'
              }}
          >
       Our Testimonials
          </Text>
        </Flex>
        <Flex mt="24px">
            <Box w="50%">
            <Text
            maxW={"524px"}
            color="#1A1A1A"
            fontSize="48px"
            fontWeight="700"
            lineHeight={"52px"}
          >
      What our Customers Says About Us
          </Text>
            </Box>
            <Box w="50%">
            <Text
              maxW={"470px"}
            color="#7B7A7A"
            fontSize="16px"
            fontWeight="400"
            lineHeight={"30px"}
          >
      Discover the voices of satisfaction echoing through our customer testimonials, illuminating the essence of our service excellence.
          </Text>
            </Box>
        
        </Flex>
        </Box>

  <Box pl="100px">
  <SliderComponent/>
  </Box>

</Box>
   </Box>
   </>
  )
}

export default BrainIndex
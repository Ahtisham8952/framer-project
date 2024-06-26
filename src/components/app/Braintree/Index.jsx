import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import SliderComponent from './SliderComponent'

import ProjectsSection from './ProjectsSection'
import Header from './Header'
import HeroSlider from './HeroSlider'

const BrainIndex = () => {
  return (
   <>
   <Box maxW={"1440px"} w="100%" mx="auto" position={"relative"}>

 <Box maxW={"1440px"} w="100%" mx='auto' >
 <Header/>
 </Box>
 <Box>
  <HeroSlider/>
 </Box>
   
   <Box >
    <Box >
        <Box p={{base:'20px',md:'30px',lg:'50px',xl:'100px'}}>

       
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
        <Flex mt="24px" flexDirection={{base:'column',md:'row'}}>
            <Box w={{base:'100%',md:'50%'}}>
            <Text
            maxW={{base:'100%',md:'100%',lg:'524px'}}
            color="#1A1A1A"
            fontSize={{
              base: '18px',
              md: '22px',
              lg: '32px',
              xl: '48px',
              xxl: '48px',
              xxxl: '48px',
            }}
            fontWeight="700"
            lineHeight={"150%"}
          >
      What our Customers Says About Us
          </Text>
            </Box>
            <Box w={{base:'100%',md:'50%'}} display={"flex"} justifyContent={{base:'start',md:'flex-end'}}>
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

  <Box pl={{base:'0px',md:'100px'}} >
  <SliderComponent/>
  {/* <SwiperSlider/> */}
  </Box>

</Box>

<Box py="100px">


<ProjectsSection/>
</Box>
   </Box>
   </Box>
   </>
  )
}

export default BrainIndex
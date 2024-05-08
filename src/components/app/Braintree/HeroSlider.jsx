import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Slider from "react-slick";

const HeroSlider =()=> {
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    //   autoplay: true,
    //   autoplaySpeed: 100,
      beforeChange: (current, next) => setCurrentSlide(next),
    };
  
    const calculateProgress = () => {
      const progress = ((currentSlide + 1) / 3) * 100; // Assuming 3 slides
      return progress.toFixed(2);
    };
  return (
    <div className="slider-container">
      <Slider {...settings}>
      <Box>
      <Box
      bgImage="url('/bg1slider.png')"
      bgSize="cover"
      bgPosition="center"
      w="100%"
      h="100vh" // Adjust the height as needed
    >
      <Box px="100px" pt="165px">
        <Box mb="48px" borderBottom={"1px solid #253538"}   maxW={{base:'100%',md:'100%',lg:'574px'}} >

        
      <Text
      mb="24px"
          
            color="#FFFFFF"
            fontSize={{
              base: '18px',
              md: '22px',
              lg: '32px',
              xl: '70px',
              xxl: '70px',
              xxxl: '70px',
            }}
            fontWeight="700"
            lineHeight={"150%"}
          >
    Turn your vision into reality
          </Text>
          <Text
              maxW={"470px"}
            color="#9A9FA0"
            fontSize="16px"
            fontWeight="400"
            lineHeight={"30px"}
          >
     We are here to unlock creativity and imagination with digital marketing and E-commerce websites. We allow customers to discover their best.
          </Text>
          <Button
              my="44px"
              bg="#FFFFFF"
              colorScheme={'#FFFFFF'}
              color="#0C1E21"
              fontSize="14px"
              fontWeight="400"
              lineHeight={'150%'}
              p="8px 40px"
              borderRadius={'50px'}
            
            >
            Book an appointment
            </Button>
          </Box>
          <Box>
            <Flex gap="21px" alignItems={"center"} mb='101px'>
                <Image src="/software.svg"></Image>
                <Image src="/clutch.svg"></Image>
                <Text
              maxW={"334px"}
            color="#9A9FA0"
            fontSize="16px"
            fontWeight="400"
            lineHeight={"30px"}
          >
     Trusted By 200+ enterprises and startups Top
Software Development Company
          </Text>
            </Flex>

          </Box>
          <Flex  mt="16px" alignItems={"center"} gap="10px">
          <Text
             
            color="white"
            fontSize="16px"
            fontWeight="400"
            lineHeight={"30px"}
          >
     01
          </Text>
          
          <Box
          bg="#253538"
          height="1px"
          width="33%" // Adjust width as needed
          borderRadius="full"
        >
          <Box
            bg="white"
           h='1px'
            width={`${calculateProgress()}%`}
            borderRadius="full"
          />
        </Box>
        
          
        <Text
             
            color="white"
            fontSize="16px"
            fontWeight="400"
            lineHeight={"30px"}
          >
     02
          </Text>
      </Flex>

      </Box>
    </Box>
   
    

      </Box>
    
      <Box
      bgImage="url('/bg1slider.png')"
      bgSize="cover"
      bgPosition="center"
      w="100%"
      h="100vh" // Adjust the height as needed
    >
      <Box>
      <Flex justifyContent="center" mt="16px">
        <Box
          bg="gray.200"
          height="8px"
          width="33%" // Adjust width as needed
          borderRadius="full"
        >
          <Box
            bg="green.500"
           h='10px'
            width={`${calculateProgress()}%`}
            borderRadius="full"
          />
        </Box>
      </Flex>
      </Box>
    </Box>
    <Box
      bgImage="url('/bg1slider.png')"
      bgSize="cover"
      bgPosition="center"
      w="100%"
      h="100vh" // Adjust the height as needed
    >
      <Box>
      <Flex justifyContent="center" mt="16px">
        <Box
          bg="#253538"
          height="1px"
          width="33%" // Adjust width as needed
          borderRadius="full"
        >
          <Box
            bg="white"
           h='1px'
            width={`${calculateProgress()}%`}
            borderRadius="full"
          />
        </Box>
      </Flex>
      </Box>
    </Box>
      
      
      </Slider>
      
    </div>
  );
}

export default HeroSlider;

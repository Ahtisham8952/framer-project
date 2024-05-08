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
      autoplay: true,
      autoplaySpeed: 2000,
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
        <Flex flexDirection={{base:'column',lg:'row'}}>
          <Box w={{base:'100%',lg:'50%'}} bg="linear-gradient(135deg, #0C1E21 0%, #003640 100%);">
          <Box pb={{base:'30px',lg:'0px'}} px={{
              base: '20px',
              md: '40px',
              lg: '80px',
              xl: '100px',
              xxl: '100px',
              xxxl: '100px',
            }} pt={{
              base: '110px',
              md: '120px',
              lg: '120px',
              xl: '120px',
              xxl: '165px',
              xxxl: '165px',
            }}
            >
        <Box mb="48px" borderBottom={"1px solid #253538"}   maxW={{base:'100%',md:'100%',lg:'574px'}} >

        
      <Text
      mb="24px"
          
            color="#FFFFFF"
            fontSize={{
              base: '18px',
              md: '22px',
              lg: '32px',
              xl: '55px',
              xxl: '61px',
              xxxl: '65px',
            }}
            fontWeight="700"
            lineHeight={{
              base: '28px',
              md: '42px',
              lg: '45px',
              xl: '65px',
              xxl: '70px',
            }}
          >
    Turn your vision into reality
          </Text>
          <Text
              maxW={"470px"}
            color="#9A9FA0"
            fontSize="16px"
            fontWeight="400"
            lineHeight={{
              base: '20px',
              md: '22px',
              lg: '22px',
              xl: '25px',
              xxl: '30px',
            }}
          >
     We are here to unlock creativity and imagination with digital marketing and E-commerce websites. We allow customers to discover their best.
          </Text>
          <Button
              my={{
                base: '20px',
                md: '22px',
                lg: '22px',
                xl: '32px',
                xxl: '44px',
              }}
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
            <Flex flexWrap={{
                base: 'no-wrap',
                md: 'wrap',
                lg: 'wrap',
                xl: 'wrap',
                xxl: 'wrap',
              }} gap="21px" alignItems={"center"} 
            mb={{
              base: '40px',
              md: '52px',
              lg: '62px',
              xl: '82px',
              xxl: '101px',
            }}
            >
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
          width="33.33%" 
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
     03
          </Text>
      </Flex>

      </Box>
          </Box>
          <Box w={{base:'100%',lg:'50%'}} >
            <Image h="100%" objectFit={"cover"} src="/bannerimage.png" w="100%"></Image>
          </Box>
        </Flex>
      </Box>
      <Box>
        <Flex flexDirection={{base:'column',lg:'row'}}>
          <Box w={{base:'100%',lg:'50%'}} bg="linear-gradient(135deg, #0C1E21 0%, #003640 100%);">
          <Box pb={{base:'30px',lg:'0px'}} px={{
              base: '20px',
              md: '40px',
              lg: '80px',
              xl: '100px',
              xxl: '100px',
              xxxl: '100px',
            }} pt={{
              base: '110px',
              md: '120px',
              lg: '120px',
              xl: '120px',
              xxl: '165px',
              xxxl: '165px',
            }}
            >
        <Box mb="48px" borderBottom={"1px solid #253538"}   maxW={{base:'100%',md:'100%',lg:'574px'}} >

        
      <Text
      mb="24px"
          
            color="#FFFFFF"
            fontSize={{
              base: '18px',
              md: '22px',
              lg: '32px',
              xl: '55px',
              xxl: '61px',
              xxxl: '65px',
            }}
            fontWeight="700"
            lineHeight={{
              base: '28px',
              md: '42px',
              lg: '45px',
              xl: '65px',
              xxl: '70px',
            }}
          >
    Turn your vision into reality
          </Text>
          <Text
              maxW={"470px"}
            color="#9A9FA0"
            fontSize="16px"
            fontWeight="400"
            lineHeight={{
              base: '20px',
              md: '22px',
              lg: '22px',
              xl: '25px',
              xxl: '30px',
            }}
          >
     We are here to unlock creativity and imagination with digital marketing and E-commerce websites. We allow customers to discover their best.
          </Text>
          <Button
              my={{
                base: '20px',
                md: '22px',
                lg: '22px',
                xl: '32px',
                xxl: '44px',
              }}
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
            <Flex flexWrap={{
                base: 'no-wrap',
                md: 'wrap',
                lg: 'wrap',
                xl: 'wrap',
                xxl: 'wrap',
              }} gap="21px" alignItems={"center"} 
            mb={{
              base: '40px',
              md: '52px',
              lg: '62px',
              xl: '82px',
              xxl: '101px',
            }}
            >
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
     02
          </Text>
          
          <Box
          bg="#253538"
          height="1px"
          width="33.33%" 
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
     03
          </Text>
      </Flex>

      </Box>
          </Box>
          <Box w={{base:'100%',lg:'50%'}} >
            <Image h="100%" objectFit={"cover"} src="/bannerimage.png" w="100%"></Image>
          </Box>
        </Flex>
      </Box>
      <Box>
        <Flex flexDirection={{base:'column',lg:'row'}}>
          <Box w={{base:'100%',lg:'50%'}} bg="linear-gradient(135deg, #0C1E21 0%, #003640 100%);">
          <Box pb={{base:'30px',lg:'0px'}} px={{
              base: '20px',
              md: '40px',
              lg: '80px',
              xl: '100px',
              xxl: '100px',
              xxxl: '100px',
            }} pt={{
              base: '110px',
              md: '120px',
              lg: '120px',
              xl: '120px',
              xxl: '165px',
              xxxl: '165px',
            }}
            >
        <Box mb="48px" borderBottom={"1px solid #253538"}   maxW={{base:'100%',md:'100%',lg:'574px'}} >

        
      <Text
      mb="24px"
          
            color="#FFFFFF"
            fontSize={{
              base: '18px',
              md: '22px',
              lg: '32px',
              xl: '55px',
              xxl: '61px',
              xxxl: '65px',
            }}
            fontWeight="700"
            lineHeight={{
              base: '28px',
              md: '42px',
              lg: '45px',
              xl: '65px',
              xxl: '70px',
            }}
          >
    Turn your vision into reality
          </Text>
          <Text
              maxW={"470px"}
            color="#9A9FA0"
            fontSize="16px"
            fontWeight="400"
            lineHeight={{
              base: '20px',
              md: '22px',
              lg: '22px',
              xl: '25px',
              xxl: '30px',
            }}
          >
     We are here to unlock creativity and imagination with digital marketing and E-commerce websites. We allow customers to discover their best.
          </Text>
          <Button
              my={{
                base: '20px',
                md: '22px',
                lg: '22px',
                xl: '32px',
                xxl: '44px',
              }}
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
            <Flex flexWrap={{
                base: 'no-wrap',
                md: 'wrap',
                lg: 'wrap',
                xl: 'wrap',
                xxl: 'wrap',
              }} gap="21px" alignItems={"center"} 
            mb={{
              base: '40px',
              md: '52px',
              lg: '62px',
              xl: '82px',
              xxl: '101px',
            }}
            >
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
     03
          </Text>
          
          <Box
          bg="#253538"
          height="1px"
          width="33.33%" 
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
     03
          </Text>
      </Flex>

      </Box>
          </Box>
          <Box w={{base:'100%',lg:'50%'}} >
            <Image h="100%" objectFit={"cover"} src="/bannerimage.png" w="100%"></Image>
          </Box>
        </Flex>
      </Box>
    
     
    
      
      
      </Slider>
      
    </div>
  );
}

export default HeroSlider;

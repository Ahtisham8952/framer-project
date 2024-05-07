import React, { useEffect, useState } from 'react';
import { Box, Image, Progress, Button, Flex, Text } from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProgressBar from './ProgressBar';

const data = [
  {
    imageUrl: '/cardimg1.svg',
    Title:'Ronald Richards',
    Work:'Digital Marketer',
    stars: 4,
    text: 'Absolutely blown away by the exceptional service provided! From the moment I reached out, every interaction was met with professionalism and genuine care. Thank you for exceeding my expectations!',
  },
  {
    imageUrl: '/cardimg1.svg',
    Title:'Ronald Richards',
    Work:'Digital Marketer',
    stars: 4,
    text: 'Absolutely blown away by the exceptional service provided! From the moment I reached out, every interaction was met with professionalism and genuine care. Thank you for exceeding my expectations!',
  },
  {
    imageUrl: '/cardimg1.svg',
    Title:'Ronald Richards',
    Work:'Digital Marketer',
    stars: 4,
    text: 'Absolutely blown away by the exceptional service provided! From the moment I reached out, every interaction was met with professionalism and genuine care. Thank you for exceeding my expectations!',
  },
  {
    imageUrl: '/cardimg1.svg',
    Title:'Ronald Richards',
    Work:'Digital Marketer',
    stars: 4,
    text: 'Absolutely blown away by the exceptional service provided! From the moment I reached out, every interaction was met with professionalism and genuine care. Thank you for exceeding my expectations!',
  },
  {
    imageUrl: '/cardimg1.svg',
    Title:'Ronald Richards',
    Work:'Digital Marketer',
    stars: 4,
    text: 'Absolutely blown away by the exceptional service provided! From the moment I reached out, every interaction was met with professionalism and genuine care. Thank you for exceeding my expectations!',
  },

];

const SliderComponent = () => {
  const [progress, setProgress] = useState(20);
  const [slider, setSlider] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    // Calculate the initial progress based on the initial slide
    const initialProgress = ((1 / data.length) * 100);
    setProgress(initialProgress);
  }, []);

  const handleBeforeChange = (oldIndex, newIndex) => {
    const calc = ((newIndex + 1) / data.length) * 100;
    setProgress(calc);
    setActiveIndex({  newIndex });
  };

  const handleAfterChange = (index) => {
    if (index === data.length - 1) {
      // Reset progress to zero if the last slide is reached
      setProgress(0);
    }
  };

  const settings = {
    slidesToShow: 2.5,
    slidesToScroll: 1,
    speed: 500,
    arrows: false,
    centerMode: false,
    initialSlide: 0,
    infinite: false,
    beforeChange: handleBeforeChange,
    afterChange: handleAfterChange,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const goToNext = () => {
    slider.slickNext();
  };

  const goToPrev = () => {
    slider.slickPrev();
  };

  return (
    <Box className="slider-container" textAlign="center" mt="30px" mb="50px" >
      <Slider ref={(slider) => setSlider(slider)} {...settings} 
    
       >
        {data.map((item, index) => (
          <Box key={index} p="10px" 
          borderRadius={"16px"}
         
           
              >
            <Box  bg="#F4F8F8" mx='10px' p="30px" borderRadius={"16px"}>
              <Flex justifyContent={"space-between"} alignItems='center'>
                <Flex gap={"16px"} alignItems="center">
                  <Box border="1px solid #1A1A1A" p="4px" borderRadius={"50%"}>
                  <Image src={item.imageUrl} alt={`Image ${index}`}  />
                  </Box>
                
                <Box>
                <Text
            
            color="#1A1A1A"
            fontSize="20px"
            fontWeight="700"
            lineHeight={"150%"}
          >
      {item.Title}
          </Text>
          <Text
            textAlign={"left"}
            color="#7B7A7A"
            fontSize="13px"
            fontWeight="400"
            lineHeight={"150%"}
          >
       {item.Work}
          </Text>

                </Box>

                </Flex>
                <Flex gap="6px">
                  
                {[...Array(item.stars)].map((star, i) => (
                  <Text key={i} color="yellow.400" fontSize="xl" display="inline">
                    ★
                  </Text>
                ))}
                </Flex>
              </Flex>
            
              <Box mt="10px">
                <Image w="100%" src="/BorderColon.svg"></Image>
              </Box>
              <Text
            
            color="#7B7A7A"
            fontSize="16px"
            fontWeight="400"
            lineHeight={"150%"}
          >
     {item.text}
          </Text>
           
            </Box>
          </Box>
        ))}
      </Slider>
      <Flex alignItems={"baseline"} mt="50px" flexDirection={{base:'column',lg:'row'}}>

      <Flex alignItems={"center"} mb={{base:'30px',lg:'0px'}}>
        <Button mr="10px" onClick={goToPrev} bg="transparent" _hover={{bg:'transparent'}}>
        <Image src="/previmg.svg"></Image>
        </Button>
        <Button onClick={goToNext} bg="transparent" _hover={{bg:'transparent'}}>
        <Image src="/nextimg.svg"></Image>
        </Button>
        </Flex>
      <Box mx="auto" w="80%">
        <Progress value={progress} h="10px" borderRadius="10px" mb="20px"  
         sx={{
          '& > div': {
            background: 'linear-gradient(90deg, rgba(233,117,34,1) 38%, rgba(30,163,177,1) 72%)',
          },
        }}
         />
        {/* <ProgressBar/> */}
        <Box as="span" className="slider__label" color="transparent" position={"absolute"}>
          {progress.toFixed(1)}% completed
        </Box>
       
       
      </Box>
      </Flex>
    </Box>
  );
};

export default SliderComponent;

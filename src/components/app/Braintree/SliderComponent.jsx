import React, { useState } from 'react';
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
  {
    imageUrl: '/cardimg1.svg',
    Title:'Ronald Richards',
    Work:'Digital Marketer',
    stars: 4,
    text: 'Absolutely blown away by the exceptional service provided! From the moment I reached out, every interaction was met with professionalism and genuine care. Thank you for exceeding my expectations!',
  },
];

const SliderComponent = () => {
  const [progress, setProgress] = useState(0);
  const [slider, setSlider] = useState(null);

  const handleBeforeChange = (oldIndex, newIndex) => {
    const calc = ((newIndex + 1) / data.length) * 100;
    setProgress(calc);
  };

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    beforeChange: handleBeforeChange,
    centerPadding: "  80px  ", 
    slidesToShow: 3,
    speed: 500,
  
    
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
          <Box key={index} p="10px"   >
            <Box  bg="#F4F8F8" mx='10px' p="30px">
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
                {[...Array(item.stars)].map((star, i) => (
                  <Text key={i} color="yellow.400" fontSize="xl" display="inline">
                    ★
                  </Text>
                ))}
              </Flex>
            
              <Box mt="10px">
                <Image src="/BorderColon.svg"></Image>
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
      <Flex alignItems={"center"} mt="50px">

      <Flex alignItems={"center"}>
        <Button mr="10px" onClick={goToPrev} bg="transparent" _hover={{bg:'transparent'}}>
        <Image src="/previmg.svg"></Image>
        </Button>
        <Button onClick={goToNext} bg="transparent" _hover={{bg:'transparent'}}>
        <Image src="/nextimg.svg"></Image>
        </Button>
        </Flex>
      <Box mx="auto" w="80%">
        <Progress value={progress} h="10px" borderRadius="10px" mb="20px" />
        {/* <ProgressBar/> */}
        <Box as="span" className="slider__label" color="transparent" position={"absolute"}>
          {progress.toFixed(2)}% completed
        </Box>
       
       
      </Box>
      </Flex>
    </Box>
  );
};

export default SliderComponent;

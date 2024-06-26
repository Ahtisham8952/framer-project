import React, { useEffect, useRef, useState } from 'react';
import { Box, Image, Progress, Button, Flex, Text } from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const data = [
  {
    imageUrl: '/cardimg1.svg',
    Title: 'Ronald Richards',
    Work: 'Digital Marketer',
    stars: 4,
    text: 'Absolutely blown away by the exceptional service provided! From the moment I reached out, every interaction was met with professionalism and genuine care. Thank you for exceeding my expectations!',
  },
  {
    imageUrl: '/cardimg1.svg',
    Title: 'Ronald Richards',
    Work: 'Digital Marketer',
    stars: 4,
    text: 'Absolutely blown away by the exceptional service provided! From the moment I reached out, every interaction was met with professionalism and genuine care. Thank you for exceeding my expectations!',
  },
  {
    imageUrl: '/cardimg1.svg',
    Title: 'Ronald Richards',
    Work: 'Digital Marketer',
    stars: 4,
    text: 'Absolutely blown away by the exceptional service provided! From the moment I reached out, every interaction was met with professionalism and genuine care. Thank you for exceeding my expectations!',
  },
  {
    imageUrl: '/cardimg1.svg',
    Title: 'Ronald Richards',
    Work: 'Digital Marketer',
    stars: 4,
    text: 'Absolutely blown away by the exceptional service provided! From the moment I reached out, every interaction was met with professionalism and genuine care. Thank you for exceeding my expectations!',
  },
  {
    imageUrl: '/cardimg1.svg',
    Title: 'Ronald Richards',
    Work: 'Digital Marketer',
    stars: 4,
    text: 'Absolutely blown away by the exceptional service provided! From the moment I reached out, every interaction was met with professionalism and genuine care. Thank you for exceeding my expectations!',
  },
];

const SliderComponent = () => {
  const [progress, setProgress] = useState(0);
  const [slider, setSlider] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    // Calculate initial progress based on initial slide index (0)
    const initialProgress = (1 / data.length) * 100;
    setProgress(initialProgress);

    // Ensure the slider goes to the first slide after initialization
    setTimeout(() => {
      if (ref.current) {
        ref.current.slickGoTo(0);
      }
    }, 750);
  }, []);

  const handleBeforeChange = (oldIndex, newIndex) => {
    // Calculate progress based on the new slide index
    const calc = ((newIndex + 1) / data.length) * 100;
    setProgress(calc);
  };

  const handleAfterChange = (index) => {
  // Check if the last slide is reached and set progress to 100%
  if (index === data.length - 1) {
    setProgress(100);
  } else {
    const calc = ((index + 1) / data.length) * 100;
    setProgress(calc);
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
    // centerPadding: '0% 20% 0% 0%',
    beforeChange: handleBeforeChange,
    afterChange: handleAfterChange,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const goToNext = () => {
    // Check if slider is available and the current slide is not the last slide
    if (slider) {
      const currentSlide = slider.state.currentSlide;
      if (currentSlide !== data.length - 1) {
        slider.slickNext();
        const calc = ((currentSlide + 2) / data.length) * 100; // Increment currentSlide by 2 to calculate progress
        setProgress(calc);
      }
    }
  };

  const goToPrev = () => {
    // Check if slider is available and the current slide is not the first slide
    if (slider && slider.state.currentSlide !== 0) {
      slider.slickPrev();
    }
  };

  return (
    <Box className="slider-container" textAlign="center" mt="30px" mb="50px">
      <Slider ref={(slider) => setSlider(slider)} {...settings}>
        {data.map((item, index) => (
          <Box key={index} p="10px" borderRadius={'16px'}>
            <Box bg="#F4F8F8" mx="10px" p="30px" borderRadius={'16px'}>
              <Flex justifyContent={'space-between'} alignItems="center">
                <Flex gap={'16px'} alignItems="center">
                  <Box border="1px solid #1A1A1A" p="4px" borderRadius={'50%'}>
                    <Image src={item.imageUrl} alt={`Image ${index}`} />
                  </Box>
                  <Box>
                    <Text
                      color="#1A1A1A"
                      fontSize="20px"
                      fontWeight="700"
                      lineHeight={'150%'}
                    >
                      {item.Title}
                    </Text>
                    <Text
                      textAlign={'left'}
                      color="#7B7A7A"
                      fontSize="13px"
                      fontWeight="400"
                      lineHeight={'150%'}
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
                <Image w="100%" src="/BorderColon.svg" />
              </Box>
              <Text
                color="#7B7A7A"
                fontSize="16px"
                fontWeight="400"
                lineHeight={'150%'}
              >
                {item.text}
              </Text>
            </Box>
          </Box>
        ))}
      </Slider>
      <Flex alignItems="baseline" mt="50px" flexDirection={{ base: 'column', lg: 'row' }}>
        <Flex alignItems="center" mb={{ base: '30px', lg: '0px' }}>
          <Button mr="10px" onClick={goToPrev} bg="transparent" _hover={{ bg: 'transparent' }}>
            <Image src="/previmg.svg" />
          </Button>
          <Button onClick={goToNext} bg="transparent" _hover={{ bg: 'transparent' }}>
            <Image src="/nextimg.svg" />
          </Button>
        </Flex>
        <Box mx="auto" w="80%">
          <Progress
            value={progress}
            h="10px"
            borderRadius="10px"
            mb="20px"
            sx={{
              '& > div': {
                background: 'linear-gradient(90deg, rgba(233,117,34,1) 38%, rgba(30,163,177,1) 72%)',
              },
            }}
          />
          <Box as="span" className="slider__label" color="transparent" position="absolute">
            {progress.toFixed(2)}% completed
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default SliderComponent;

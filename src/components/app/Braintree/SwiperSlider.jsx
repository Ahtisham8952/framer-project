import { useState, useEffect } from 'react';
import { ChakraProvider, Box, Flex, Text, VStack, HStack, Circle, IconButton } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper/core';
import 'swiper/css'; // Import Swiper's CSS
import 'swiper/css/navigation';
// Initialize Swiper Navigation
SwiperCore.use([Navigation]);

const SwiperSlider =()=> {
  const [swiperInstance, setSwiperInstance] = useState(null);
  
  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.on('init', () => {
        console.log('Swiper initialized');
      });
    }
  }, [swiperInstance]);
  
  return (
    <Flex fontFamily="Poppins" justifyContent="center" alignItems="center" mt={10} mb={20}>
      <VStack spacing={4} align="flex-start">
        <Box borderLeft="10px solid #FFCB00" pl={4}>
          <Text fontWeight="bold" textTransform="uppercase" fontSize="md" color="#650061">Avaliações</Text>
          <Text fontSize="2xl" color="#000">Mussum <b>Ipsum</b></Text>
        </Box>
        <HStack spacing={4}>
          <Box className="swiper-button-testmonials-prev">
            <IconButton
              aria-label="Previous"
              icon={<Circle size="65px" borderWidth="2px" borderColor="#FFCB00" />}
              onClick={() => swiperInstance?.slidePrev()}
            />
          </Box>
          <Box className="swiper-button-testmonials-next">
            <IconButton
              aria-label="Next"
              icon={<Circle size="65px" bg="#FFCB00" />}
              onClick={() => swiperInstance?.slideNext()}
            />
          </Box>
        </HStack>
      </VStack>
      <Swiper
        className="swiper-testmonials"
        onSwiper={setSwiperInstance}
        loop={true}
        slidesPerView={1.2}
        grabCursor={true}
        navigation={{
          nextEl: '.swiper-button-testmonials-next',
          prevEl: '.swiper-button-testmonials-prev',
        }}
        breakpoints={{
          500: { slidesPerView: 1.4 },
          780: { slidesPerView: 1.8 },
          1300: { slidesPerView: 2.6 },
          1630: { slidesPerView: 3.2 },
        }}
      >
        <SwiperSlide>
          <Box bg="linear-gradient(118deg, #7C1A78 10.88%, #43044A 83.88%)" borderRadius="10px" p={4} color="white">
            <Flex justifyContent="space-between" alignItems="center">
              <Box display="flex" alignItems="center" gap={4}>
                <Circle size="80px" bg="white" />
                <VStack align="flex-start">
                  <Text fontSize="lg" fontWeight="bold">Mussum Ipsum</Text>
                  <Text fontSize="sm" color="#FFCB00">Mussum Ipsum</Text>
                </VStack>
              </Box>
              <Circle size="47px" bg="white" />
            </Flex>
            <Text fontStyle="italic">
              Mussum Ipsum, cacilds vidis litro abertis. Si num tem leite então bota uma pinga aí cumpadi! Quem manda na minha terra sou euzis!
            </Text>
          </Box>
        </SwiperSlide>
        {/* Add more SwiperSlides here */}
      </Swiper>
    </Flex>
  );
}

export default SwiperSlider;

import React from 'react';
import { Flex, Box, Text, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TwoColumnSection = ({ imageSrc, text }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <Flex
      ref={ref}
      h="100vh"
      justify="center"
      align="center"
      py={16}
      bg="gray.100"
      
    >
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
        transition={{ duration: 0.5 }}
      >
        <Box w="50%">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Image alt="img" src={imageSrc} />
          </motion.div>
        </Box>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }}
        transition={{ duration: 0.5 }}
      >
        <Box w="50%">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Text>{text}</Text>
          </motion.div>
        </Box>
      </motion.div>
    </Flex>
  );
};

export default TwoColumnSection;

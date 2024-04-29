import React, { useRef } from 'react';
import { Flex, Box } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from './Header';
import Animation from './Animation';
import TwoColumnSection from './TwoColumnSection';


const SnapScrollSection = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0, y: 100 }}
    >
      {children}
    </motion.div>
  );
};

const SnapScroll = () => {
  const containerRef = useRef();

  const handleWheel = (e) => {
    const container = containerRef.current;
    const sections = container.children;
    const currentSectionIndex = Math.round(container.scrollTop / window.innerHeight);

    if (e.deltaY > 0 && currentSectionIndex < sections.length - 1) {
      container.scrollTo({
        top: window.innerHeight * (currentSectionIndex + 1),
        behavior: 'smooth',
      });
    } else if (e.deltaY < 0 && currentSectionIndex > 0) {
      container.scrollTo({
        top: window.innerHeight * (currentSectionIndex - 1),
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
    
  <Header/>
    <Box
      style={{
        height: '100vh',
        overflowY: 'hidden', // Hide the scroll bar
      }}
      onWheel={handleWheel} // Add wheel event listener
    >
      <Flex
        ref={containerRef}
        direction="column"
        h="100%"
        css={{
          scrollSnapType: 'y mandatory',
          overflowY: 'auto', // Add overflowY: auto to enable scrolling within the container
        }}
      >
        <AnimatePresence>
          <SnapScrollSection key="section1">
            <Box h="100vh" bg="red.400">
              <Animation />
            </Box>
          </SnapScrollSection>
        </AnimatePresence>
        <AnimatePresence>
        <SnapScrollSection key="section2">
        <TwoColumnSection imageSrc="/philipcenter.png" text="Some text here" />
             
            </SnapScrollSection>
        </AnimatePresence>
        <AnimatePresence>
          <SnapScrollSection key="section3">
            <Box h="100vh" bg="green.400">
              Section 3
            </Box>
          </SnapScrollSection>
        </AnimatePresence>
      </Flex>
    </Box>
    </>
  );
};

export default SnapScroll;

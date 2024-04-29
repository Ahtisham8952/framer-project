import React from 'react';
import { Flex, Box, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, useBreakpointValue } from '@chakra-ui/react';

const Sidebar = ({ isOpen, onClose }) => {
  const drawerSize = useBreakpointValue({ base: 'full', lg: '320px' });

  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement="top" >
      <DrawerOverlay />
      <DrawerContent
      width="100%"
        bg="gray.800"
        color="white"
       
        height="100vh" // Set height to 100vh
        top={0} // Align to the top
        left={0}
        paddingTop="64px" // Adjust padding to accommodate the fixed header
      >
        <DrawerCloseButton />
        <Flex direction="column" p={4}>
          {/* Your sidebar content */}
          <Box>Link 1</Box>
          <Box>Link 2</Box>
          <Box>Link 3</Box>
        </Flex>
      </DrawerContent>
    </Drawer>
  );
};

export default Sidebar;

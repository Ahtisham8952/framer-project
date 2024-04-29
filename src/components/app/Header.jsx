import React, { useState } from 'react';
import { Flex, Box, IconButton, useDisclosure,Image } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import Sidebar from './Sidebar';



const Header = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      px={10}
      py={10}
      bg="transparent"
      color="white"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={999}
      width="100%"

    >
      <Box>
        {/* Your logo component */}
        <Image src="/inlogo.svg" alt="Logo" height={24} />
      </Box>
      <IconButton
        aria-label="Open Sidebar"
        icon={<HamburgerIcon />}
        onClick={onToggle}
        variant="ghost"
      />
      <Sidebar isOpen={isOpen} onClose={onToggle} />
    </Flex>
  );
};

export default Header;

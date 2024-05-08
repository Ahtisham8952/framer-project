import React, { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons';

export default function Header() {
  const { isOpen, onToggle } = useDisclosure();
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box position={"fixed"}  top="0px" maxW={"1440px"} w="100%" zIndex={"999"}  bg={scrolling ? 'white' : 'transparent'}>
      <Flex
      flexDirection={{base:'row-reverse',md:'row'}}
      mx={"auto"}
      maxW={"1240px"} w="100%" 
      h="78px"
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
       
        align={'center'}>
        <Flex
        
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon  w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
            color={scrolling ? 'black' : 'white'} 
          />
        </Flex>
        <Flex  alignItems={"center"} flex={{ base: 1 }} justify={{ base: 'start', md: 'start' }}>
          <Box
            textAlign={useBreakpointValue({ base: 'start', md: 'start' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}>
          <Image src={scrolling ? "/darlogo.png" : "/brainlogo.png"} />
          </Box>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav  scrolling={scrolling}/>
          </Flex>
        </Flex>

        <Stack
        display={{base:'none',md:'flex'}}
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
           <Button
             border={scrolling ? '1px solid black' : 'none'}
              bg="#FFFFFF"
              colorScheme={'#FFFFFF'}
              color="#0C1E21"
              fontSize="14px"
              fontWeight="400"
              lineHeight={'150%'}
              p="8px 40px"
              borderRadius={'50px'}
              display="flex"
              gap="12px"
              alignItems={"center"}
            
            >
              <Image src='/mailbox.svg'></Image>
              Get in Touch
            </Button>
         
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = ({ scrolling }) => {
  const linkColor = useColorModeValue(scrolling ? 'gray.800' : '#FFFFFF', scrolling ? 'white' : '#FFFFFF');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  // Get current path
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/';

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                
                }}
                // Check if current path matches the link href exactly
                css={{
                  background: currentPath === navItem.href
                    ? 'linear-gradient(#08131D, #08131D) padding-box, linear-gradient(10deg, #E611B7, #7514F1) border-box'
                    : 'transparent',
                    color:currentPath === navItem.href ? 'white' : (scrolling ? 'black' : 'white'),
                  textTransform: 'uppercase',
                  border: currentPath === navItem.href
                    ? '1px solid transparent'
                    : 'none',
                  borderRadius: '50px',
                  display: 'inline-block',
                  // Apply border only if current path matches the link href
                  borderImage: currentPath === navItem.href
                    ? 'linear-gradient(135deg, #E97522 0%, #1EA3B1 100%) padding-box, linear-gradient(135deg, #E97522 0%, #1EA3B1 100%) border-box'
                    : 'none',
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}
      
      >
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}
           
            >
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: 'Home',
    href: '/', // Set the correct path for the home page
  },
  {
    label: 'Services',
    href: '#',
  },
  {
    label: 'About Us',
    href: '#',
  },
  {
    label: 'Portfolio',
    href: '#',
  },
];

import { Flex, IconButton, useDisclosure, Collapse, VStack, Box } from '@chakra-ui/react';
import { FaHamburger } from 'react-icons/fa';
import HeaderActions from './HeaderActions';
import Logo from './Logo';

const BurgerHeader = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();

  return (
    <>
      <Box px="5%" py={5} bgColor="white">
        <Flex align="center" justify="space-between">
          <Logo />
          <IconButton
            icon={<FaHamburger />}
            variant="ghost"
            onClick={onToggle}
            aria-label={isOpen ? 'close menu' : 'open menu'}
          />
        </Flex>
      </Box>
      <Collapse in={isOpen} style={{ zIndex: 10 }}>
        <VStack as="nav" bg="gray.100" textAlign="center" py={5} spacing={5}>
          <HeaderActions onClick={onClose} />
        </VStack>
      </Collapse>
    </>
  );
};

export default BurgerHeader;

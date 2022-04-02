import { chakra, Flex, IconButton, useDisclosure, Collapse, VStack } from '@chakra-ui/react';
import { FaHamburger } from 'react-icons/fa';
import HeaderActions from './HeaderActions';
import Logo from './Logo';

const BurgerHeader = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <chakra.header px="5%" py={5} bgColor="white" boxShadow="md" position="sticky" top={0} zIndex={1}>
        <Flex align="center" justify="space-between">
          <Logo />
          <IconButton
            as={FaHamburger}
            variant="ghost"
            onClick={onToggle}
            aria-label={isOpen ? 'close menu' : 'open menu'}
          />
        </Flex>
      </chakra.header>
      <Collapse in={isOpen} style={{ zIndex: 10 }}>
        <VStack bg="gray.100" shadow="xl" textAlign="center" py={5} spacing={5}>
          <HeaderActions />
        </VStack>
      </Collapse>
    </>
  );
};

export default BurgerHeader;

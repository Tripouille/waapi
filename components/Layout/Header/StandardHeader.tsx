import { chakra, Flex } from '@chakra-ui/react';
import HeaderActions from './HeaderActions';
import Logo from './Logo';

const StandardHeader = () => {
  return (
    <chakra.header
      px="5%"
      py={5}
      bgColor="white"
      boxShadow="md"
      position="sticky"
      top={0}
      zIndex={3}
    >
      <Flex align="center">
        <Logo mr={10} />
        <Flex align="center" justify="space-between" flex={1}>
          <HeaderActions />
        </Flex>
      </Flex>
    </chakra.header>
  );
};

export default StandardHeader;

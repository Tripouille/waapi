import { Box, Flex } from '@chakra-ui/react';
import HeaderActions from './HeaderActions';
import Logo from './Logo';

const StandardHeader = () => {
  return (
    <Box px="5%" py={5} bgColor="white">
      <Flex align="center">
        <Logo mr={10} />
        <Flex as="nav" align="center" justify="space-between" flex={1}>
          <HeaderActions />
        </Flex>
      </Flex>
    </Box>
  );
};

export default StandardHeader;

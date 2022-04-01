import { chakra, Flex, FlexProps, Image, Text } from '@chakra-ui/react';
import { FC } from 'react';

const Logo: FC<FlexProps> = flexProps => {
  return (
    <Flex align="center" {...flexProps}>
      <Image src="/images/carotte.png" alt="Carotte Man" h="40px" mr={3} />
      <Text fontSize="xl" fontFamily="Aquatico" letterSpacing="1px">
        FOOD<chakra.span color="green.300">AWAA</chakra.span>
      </Text>
    </Flex>
  );
};

export default Logo;

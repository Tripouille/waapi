import { Box, Button, chakra, Flex, Icon, Image, Text, Wrap } from '@chakra-ui/react';
import { FC } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import { FaHome } from 'react-icons/fa';

const Layout: FC = ({ children }) => {
  return (
    <Box bgColor="#E5E5E5" minH="100vh">
      <chakra.header px="10%" py={5} bgColor="white" boxShadow="md">
        <Flex align="center">
          <Flex mr={20} align='center'>
            <Image src="/images/carotte.png" alt="Carotte Man" boxSize="40px" />
            <Text fontSize="xl" fontFamily="Aquatico" letterSpacing="1px">
              FOOD<chakra.span color="green.300">AWAA</chakra.span>
            </Text>
          </Flex>
          <Wrap align="center" justify="space-between" w="100%" spacing={4}>
            <Flex align="center">
              <Icon as={FaHome} width="20px" height="20px" mr={2} />
              <Text fontWeight="bold" fontSize="xl">
                Catalogue Produits
              </Text>
            </Flex>
            <Button leftIcon={<BsPlusLg />} colorScheme="success">
              Ajouter un produit
            </Button>
          </Wrap>
        </Flex>
      </chakra.header>
      {children}
    </Box>
  );
};

export default Layout;

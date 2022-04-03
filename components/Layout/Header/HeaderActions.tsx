import { Flex, Icon, Text, Button } from '@chakra-ui/react';
import { BsPlusLg } from 'react-icons/bs';
import { FaHome } from 'react-icons/fa';

const HeaderActions = () => {
  return (
    <>
      <Flex align="center" justify="center">
        <Icon as={FaHome} width="20px" height="20px" mr={2} />
        <Text fontWeight="bold" fontSize="xl">
          Catalogue Produits
        </Text>
      </Flex>
      <Button leftIcon={<BsPlusLg />} colorScheme="success">
        Ajouter un produit
      </Button>
    </>
  );
};

export default HeaderActions;

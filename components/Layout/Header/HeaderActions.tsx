import { Flex, Icon, Text, Button } from '@chakra-ui/react';
import NextLink from 'next/link';
import { FC } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import { FaHome } from 'react-icons/fa';
import { FrontRoutes } from 'utils/routes';
import { Callback } from 'utils/types';

export interface HeaderActionsProps {
  onClick?: Callback;
}

const HeaderActions: FC<HeaderActionsProps> = ({ onClick }) => {
  return (
    <>
      <NextLink href={FrontRoutes.HOME()} passHref>
        <Flex as="a" align="center" justify="center" onClick={onClick}>
          <Icon as={FaHome} width="20px" height="20px" mr={2} />
          <Text fontWeight="bold" fontSize="xl">
            Catalogue Produits
          </Text>
        </Flex>
      </NextLink>
      <NextLink href={FrontRoutes.CREATE_PRODUCT()} passHref>
        <Button as="a" leftIcon={<BsPlusLg />} colorScheme="success" onClick={onClick}>
          Ajouter un produit
        </Button>
      </NextLink>
    </>
  );
};

export default HeaderActions;

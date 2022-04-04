import NextLink from 'next/link';
import { FC } from 'react';
import { Flex, VStack, Text, Image, AspectRatio } from '@chakra-ui/react';
import { Product } from 'services/product/types';
import { formatProductPrice } from 'utils/format';
import { FrontRoutes } from 'utils/routes';

export interface ProductCardProps {
  product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { name, price, description, image, _id } = product;

  return (
    <NextLink href={FrontRoutes.PRODUCT_DETAILS(_id)} passHref>
      <VStack
        as="a"
        borderRadius="2xl"
        bgColor="glass"
        p={3}
        spacing={3}
        minW="full"
        align="left"
        boxShadow="card"
        _hover={{ bgColor: 'white', outline: '3px darkgray solid' }}
      >
        <AspectRatio w="full" ratio={16 / 9}>
          <Image src={image} alt={name} objectFit="cover" borderRadius="2xl" />
        </AspectRatio>
        <Flex justify="space-between" w="full" align="center" fontSize="lg">
          <Text noOfLines={1} fontWeight="bold" mr={2} flex={3}>
            {name}
          </Text>
          <Text fontWeight="medium" color="secondary" flex={2} textAlign="right" isTruncated>
            {formatProductPrice(price)}
          </Text>
        </Flex>
        <Text noOfLines={3} color="secondary">
          {description}
        </Text>
      </VStack>
    </NextLink>
  );
};

export default ProductCard;

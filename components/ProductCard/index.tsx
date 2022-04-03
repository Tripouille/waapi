import { Flex, VStack, Text, Image, AspectRatio } from '@chakra-ui/react';
import { FC } from 'react';
import { Product } from 'services/product/types';
import { formatProductPrice } from 'utils/format';

export interface ProductCardProps {
  product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { name, price, description, image } = product;

  return (
    <VStack
      borderRadius="2xl"
      bgColor="glass"
      p={3}
      spacing={3}
      minW="full"
      align="left"
      boxShadow="card"
    >
      <AspectRatio w="full" ratio={16 / 9}>
        <Image src={image} alt={name} objectFit="cover" borderRadius="2xl" />
      </AspectRatio>
      <Flex justify="space-between" w="full" align="center" fontSize="lg">
        <Text noOfLines={1} fontWeight="bold" mr={3}>
          {name}
        </Text>
        <Text fontWeight="medium" color="secondary">
          {formatProductPrice(price)}
        </Text>
      </Flex>
      <Text noOfLines={3} color="secondary">
        {description}
      </Text>
    </VStack>
  );
};

export default ProductCard;

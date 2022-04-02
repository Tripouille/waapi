import { Flex, VStack, Text, Image, AspectRatio } from '@chakra-ui/react';
import { FC, forwardRef } from 'react';
import { Product } from 'services/product/types';
import { formatProductPrice } from 'utils/format';

export interface ProductCardProps {
  product: Product;
}

const ProductCard = forwardRef<HTMLDivElement, ProductCardProps>(
  ({ product }, ref) => {
    const { name, price, description, image } = product;

    return (
      <VStack
        borderRadius="2xl"
        bgColor="white"
        p={3}
        spacing={3}
        minW="full"
        align="left"
        ref={ref}
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
  },
);

ProductCard.displayName = 'ProductCard';

export default ProductCard;

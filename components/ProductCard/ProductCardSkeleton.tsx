import { Flex, VStack, Skeleton, SkeletonText, AspectRatio } from '@chakra-ui/react';
import { forwardRef } from 'react';

const ProductCardSkeleton = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <VStack borderRadius="2xl" bgColor="white" p={3} spacing={3} minW="full" align="left" ref={ref}>
      <AspectRatio w="full" ratio={16 / 9}>
        <Skeleton borderRadius="2xl" />
      </AspectRatio>
      <Flex justify="space-between" align="center">
        <Skeleton h="27px" w="70%" />
        <Skeleton h="27px" w="15%" />
      </Flex>
      <SkeletonText noOfLines={3} skeletonHeight="4" />
    </VStack>
  );
});

ProductCardSkeleton.displayName = 'ProductCardSkeleton';

export default ProductCardSkeleton;

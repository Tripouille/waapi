import { Box, Flex, Skeleton, SkeletonText, VStack } from '@chakra-ui/react';
import SimilarProductsSkeleton from 'components/SimilarProducts/SimilarProductsSkeleton';
import TagsListSkeleton from 'components/TagsList/TagsListSkeleton';

const ProductDetailsSkeleton = () => {
  return (
    <>
      <Flex direction={['column', null, 'row']} mb={10}>
        <Skeleton
          w={['100%', null, '40%']}
          h={200}
          mr={[0, null, 16]}
          mb={[5, null, 0]}
          borderRadius="2xl"
        />
        <VStack align="start" flex="1" spacing={6}>
          <Flex justify="space-between" w="full" align="center" direction={['column', null, 'row']}>
            <Skeleton w={['full', null, '60%']} h={10} mr={1} />
            <Skeleton w={['full', null, '35%']} h={10} mr={1} />
          </Flex>
          <TagsListSkeleton />
          <Box w="full">
            <Skeleton h={6} w={40} mb={3} />
            <SkeletonText noOfLines={5} skeletonHeight={3} />
          </Box>
          <Skeleton h={10} w={28} />
        </VStack>
      </Flex>
      <SimilarProductsSkeleton />
    </>
  );
};

export default ProductDetailsSkeleton;

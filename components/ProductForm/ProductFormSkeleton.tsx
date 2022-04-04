import { Flex, Skeleton, Stack, VStack } from '@chakra-ui/react';
import FormInputSkeleton from 'components/FormInput/FormInputSkeleton';
import TagsListSkeleton from 'components/TagsList/TagsListSkeleton';

const ProductFormSkeleton = () => {
  return (
    <VStack
      p={[2, 4, 10]}
      borderWidth={2}
      borderColor="border"
      borderRadius="xl"
      align="start"
      spacing={5}
    >
      <Flex align="center" alignSelf={['center', 'start']}>
        <Skeleton h={12} w={12} mr={3} />
        <Skeleton h={6} w={44} />
      </Flex>
      <Stack justify="space-between" w="full" flexDirection={['column', 'row']} spacing={[5, 0]}>
        <FormInputSkeleton containerProps={{ w: ['100%', '65%'] }} />
        <FormInputSkeleton containerProps={{ w: ['100%', '30%'] }} />
      </Stack>
      <FormInputSkeleton contentProps={{ h: 20 }} />
      <FormInputSkeleton />
      <FormInputSkeleton />
      <TagsListSkeleton />
      <Skeleton h={10} w={32} />
    </VStack>
  );
};

export default ProductFormSkeleton;

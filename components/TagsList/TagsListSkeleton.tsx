import { Skeleton, Wrap } from '@chakra-ui/react';

const TagsListSkeleton = () => {
  return (
    <Wrap spacing={2} mt={2}>
      {[...Array(5)].map((_, index) => (
        <Skeleton key={index} w={20} h={6} borderRadius="full" />
      ))}
    </Wrap>
  );
};

export default TagsListSkeleton;

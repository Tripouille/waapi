import { FC } from 'react';
import { ChakraProps, Skeleton, VStack } from '@chakra-ui/react';

export type FormInputSkeletonProps = {
  containerProps?: ChakraProps;
  labelProps?: ChakraProps;
  contentProps?: ChakraProps;
};

const FormInputSkeleton: FC<FormInputSkeletonProps> = ({
  containerProps,
  labelProps,
  contentProps,
}) => {
  return (
    <VStack align="rigth" w="full" {...containerProps}>
      <Skeleton h={6} w={36} {...labelProps} />
      <Skeleton h={10} w="100%" {...contentProps} />
    </VStack>
  );
};

export default FormInputSkeleton;

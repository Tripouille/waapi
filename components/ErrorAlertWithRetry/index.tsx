import { Alert, AlertIcon, AlertTitle, Button, Center, VStack } from '@chakra-ui/react';
import { FC } from 'react';
import { Callback } from 'utils/types';

export interface ErrorAlertWithRetryProps {
  onRetry: Callback;
}

const ErrorAlertWithRetry: FC<ErrorAlertWithRetryProps> = ({ onRetry }) => {
  return (
    <Center mt={3}>
      <Alert
        status="error"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        borderRadius="xl"
        py={6}
        textAlign="center"
      >
        <VStack spacing={3}>
          <AlertIcon mr={0} />
          <AlertTitle>Oops something went wrong</AlertTitle>
          <Button colorScheme="blue" onClick={onRetry}>
            Retry
          </Button>
        </VStack>
      </Alert>
    </Center>
  );
};

export default ErrorAlertWithRetry;

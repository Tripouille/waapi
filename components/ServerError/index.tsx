import { Alert, AlertIcon, AlertTitle, Button, Center, VStack } from '@chakra-ui/react';
import { FC } from 'react';
import { Callback } from 'utils/types';

export interface ServerErrorProps {
  onRetry: Callback;
}

const ServerError: FC<ServerErrorProps> = ({ onRetry }) => {
  return (
    <Center mt={3}>
      <Alert status="error" flexDirection="column" alignItems="center" justifyContent="center">
        <VStack spacing={3}>
          <AlertIcon mr={0} />
          <AlertTitle>Oups something went wrong</AlertTitle>
          <Button colorScheme="success" onClick={onRetry}>
            Retry
          </Button>
        </VStack>
      </Alert>
    </Center>
  );
};

export default ServerError;

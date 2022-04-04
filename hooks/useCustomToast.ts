import { useToast, UseToastOptions } from '@chakra-ui/react';
import { useCallback } from 'react';
import { TOAST_DURATION } from 'utils/constant';

export type useCustomToastParams = UseToastOptions;

export const defaultToastOptions: UseToastOptions = {
  duration: TOAST_DURATION,
  isClosable: true,
  position: 'bottom-right',
};

const useCustomToast = () => {
  const toast = useToast();

  const customToast = useCallback(
    (toastOptions: useCustomToastParams) => {
      toast({
        ...defaultToastOptions,
        ...toastOptions,
      });
    },
    [toast],
  );
  return customToast;
};

export default useCustomToast;

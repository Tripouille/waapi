import { debounce } from 'lodash-es';
import { useCallback } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function useDebounce<T extends (...args: any[]) => any>(fn: T, delay = 500) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedFn = useCallback(debounce(fn, delay), [debounce, fn, delay]);
  return debouncedFn;
}

export default useDebounce;

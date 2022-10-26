import { useMemo } from 'react';

type Payload = {
  type: 'first' | 'last' | 'next' | 'prev';
  isDisabled: boolean;
  current: number;
  total: number;
};

export function useItemPageNumber({
  type,
  isDisabled,
  current,
  total,
}: Payload) {
  const pageNumber = useMemo(() => {
    if (type === 'first') {
      return 1;
    } else if (type === 'prev') {
      return !isDisabled ? current - 1 : 1;
    } else if (type === 'next') {
      return !isDisabled ? current + 1 : total;
    } else {
      return total;
    }
  }, [type, isDisabled, current, total]);

  return { pageNumber };
}

import { useCallback, useState } from 'react';

export const useSample = (n: number) => {
  const [number, setNumber] = useState(n);
  const countUp = useCallback(() => setNumber((num) => num + 1), []);
  return [number, countUp] as const;
};

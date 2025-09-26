import { useCallback, useEffect, useState } from 'react';
import { useValueRef } from './useValueRef';

export function useSliderMoveEvent() {
  const [diffX, setDiffX] = useState(0);
  const [diffY, setDiffY] = useState(0);
  const [startX, setStartX] = useState<number | null>(null);
  const [startY, setStartY] = useState<number | null>(null);
  const diffXRef = useValueRef(diffX);
  const diffYRef = useValueRef(diffY);
  const startXRef = useValueRef(startX);
  const startYRef = useValueRef(startY);

  // biome-ignore lint/correctness/useExhaustiveDependencies: Refs are used for mutable values that don't trigger re-renders
  const onMouseMove = useCallback((e: MouseEvent) => {
    if (startXRef.current === null || startYRef.current === null) return;

    e.preventDefault();

    setDiffX(e.clientX - startXRef.current);
    setDiffY(e.clientY - startYRef.current);
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: Refs are used for mutable values that don't trigger re-renders
  const onTouchMove = useCallback((e: TouchEvent) => {
    if (
      startXRef.current === null ||
      startYRef.current === null ||
      !e.touches.length
    ) {
      return;
    }

    const touch = e.touches[0];

    setDiffX(touch.clientX - startXRef.current);
    setDiffY(touch.clientY - startYRef.current);
  }, []);

  useEffect(() => {
    document.body.addEventListener('mousemove', onMouseMove);
    document.body.addEventListener('touchmove', onTouchMove, {
      passive: true,
    });

    return () => {
      document.body.removeEventListener('mousemove', onMouseMove);
      document.body.removeEventListener('touchmove', onTouchMove);
    };
  }, [onMouseMove, onTouchMove]);

  return {
    diffXRef,
    diffYRef,
    setDiffX,
    setDiffY,
    setStartX,
    setStartY,
  };
}

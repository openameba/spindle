import { useIllustCanvas } from '../hooks/useIllustCanvas';
import type { IllustState } from '../types';
import styles from './Preview.module.css';

type Props = {
  state: IllustState;
};

export function Preview({ state }: Props) {
  const { canvasRef } = useIllustCanvas(state);

  return <canvas ref={canvasRef} className={styles.canvas} />;
}

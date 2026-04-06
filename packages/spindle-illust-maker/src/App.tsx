import { useCallback, useState } from 'react';
import { IconButton } from '@openameba/spindle-ui/IconButton';
import '@openameba/spindle-ui/IconButton/IconButton.css';
import Dice from '@openameba/spindle-ui/Icon/Dice';
import type { IllustState, NeckTilt, PartCategory, PoseId } from './types';
import { getDefaultState, getRandomParts } from './lib/defaults';
import { useIllustCanvas } from './hooks/useIllustCanvas';
import { PoseSelector } from './components/PoseSelector';
import { PartsPanel } from './components/PartsPanel';
import { SizeControl } from './components/SizeControl';
import { ExportButtons } from './components/ExportButtons';
import styles from './App.module.css';

export function App() {
  const [state, setState] = useState<IllustState>(() => getDefaultState());

  const handlePoseChange = useCallback((poseId: PoseId) => {
    setState((prev) => ({
      ...prev,
      ...getDefaultState(poseId),
    }));
  }, []);

  const handlePartChange = useCallback(
    (part: PartCategory, path: string | null) => {
      setState((prev) => ({ ...prev, [part]: path }));
    },
    [],
  );

  const handleScaleChange = useCallback((scale: number) => {
    setState((prev) => ({ ...prev, scale }));
  }, []);

  const handleNeckTiltChange = useCallback((neckTilt: NeckTilt) => {
    setState((prev) => ({ ...prev, neckTilt }));
  }, []);

  const handleHeadBodySwapChange = useCallback((headBodySwap: boolean) => {
    setState((prev) => ({ ...prev, headBodySwap }));
  }, []);

  const handleBodyLegSwapChange = useCallback((bodyLegSwap: boolean) => {
    setState((prev) => ({ ...prev, bodyLegSwap }));
  }, []);

  const handleRandomize = useCallback(() => {
    setState((prev) => ({
      ...prev,
      ...getRandomParts(prev.pose),
    }));
  }, []);

  const { canvasRef, exportToCanvas } = useIllustCanvas(state);

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1 className={styles.title}>Spindle Illustration Maker</h1>
        <div className={styles['header-actions']}>
          <SizeControl scale={state.scale} onChange={handleScaleChange} />
          <ExportButtons exportToCanvas={exportToCanvas} />
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles['preview-area']}>
          <canvas ref={canvasRef} />
          <div className={styles['random-button']}>
            <IconButton size="medium" variant="lighted" onClick={handleRandomize} aria-label="ランダム">
              <Dice />
            </IconButton>
          </div>
        </div>
        <div className={styles.panel}>
          <PoseSelector value={state.pose} onChange={handlePoseChange} />
          <PartsPanel state={state} onPartChange={handlePartChange} onNeckTiltChange={handleNeckTiltChange} onHeadBodySwapChange={handleHeadBodySwapChange} onBodyLegSwapChange={handleBodyLegSwapChange} />
        </div>
      </main>
      <footer className={styles.footer}>
        <small>
          © Ameba -{' '}
          <a href="https://spindle.ameba.design/styles/illustration/regulation/" target="_blank" rel="noreferrer">
            Illustration Guidelines
          </a>
        </small>
      </footer>
    </div>
  );
}

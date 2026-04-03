import { useCallback, useState } from 'react';
import type { IllustState, NeckTilt, PartCategory, PoseId } from './types';
import { getDefaultState } from './lib/defaults';
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

  const { canvasRef, exportToCanvas } = useIllustCanvas(state);

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1 className={styles.title}>Spindle Illustration Maker</h1>
        <div className={styles.headerActions}>
          <SizeControl scale={state.scale} onChange={handleScaleChange} />
          <ExportButtons exportToCanvas={exportToCanvas} />
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.previewArea}>
          <canvas ref={canvasRef} />
        </div>
        <div className={styles.panel}>
          <PoseSelector value={state.pose} onChange={handlePoseChange} />
          <PartsPanel state={state} onPartChange={handlePartChange} onNeckTiltChange={handleNeckTiltChange} onHeadBodySwapChange={handleHeadBodySwapChange} onBodyLegSwapChange={handleBodyLegSwapChange} />
        </div>
      </main>
      <footer className={styles.footer}>
        <small>
          © Ameba - Illustration files are licensed under{' '}
          <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.ja" target="_blank" rel="noreferrer">
            CC BY-NC-ND 4.0
          </a>
        </small>
      </footer>
    </div>
  );
}

import { IconButton } from '@openameba/spindle-ui/IconButton';
import { useCallback, useEffect, useState } from 'react';
import '@openameba/spindle-ui/IconButton/IconButton.css';
import Dice from '@openameba/spindle-ui/Icon/Dice';
import styles from './App.module.css';
import { ExportButtons } from './components/ExportButtons';
import { PartsPanel } from './components/PartsPanel';
import { PoseSelector } from './components/PoseSelector';
import { SizeControl } from './components/SizeControl';
import { useIllustCanvas } from './hooks/useIllustCanvas';
import { getDefaultState, getRandomParts } from './lib/defaults';
import { getHeadTypeFromPath } from './lib/head-type';
import { getStateFromUrl, syncUrlToState } from './lib/url-state';
import type {
  HeadType,
  IllustState,
  NeckTilt,
  PartCategory,
  PoseId,
} from './types';

export function App() {
  const [state, setState] = useState<IllustState>(
    () => getStateFromUrl() ?? getDefaultState(),
  );
  // Man / Woman を切り替えてからサムネイルを選ぶまでの間だけ、head パーツと独立して持つ。
  // null のときは state.head のパスから導出するので、URL 復元やランダム生成と食い違わない
  const [selectedHeadType, setSelectedHeadType] = useState<HeadType | null>(
    null,
  );
  const headType = selectedHeadType ?? getHeadTypeFromPath(state.head) ?? 'man';

  useEffect(() => {
    syncUrlToState(state);
  }, [state]);

  const handlePoseChange = useCallback((poseId: PoseId) => {
    setSelectedHeadType(null);
    setState((prev) => ({
      ...prev,
      ...getDefaultState(poseId),
    }));
  }, []);

  const handlePartChange = useCallback(
    (part: PartCategory, path: string | null) => {
      if (part === 'head') setSelectedHeadType(null);
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
    // 選択中のヘッドタイプ（Man / Woman）を維持したままランダムにする
    setSelectedHeadType(null);
    setState((prev) => ({
      ...prev,
      ...getRandomParts(prev.pose, headType),
    }));
  }, [headType]);

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
            <IconButton
              size="medium"
              variant="lighted"
              onClick={handleRandomize}
              aria-label="ランダム"
            >
              <Dice />
            </IconButton>
          </div>
        </div>
        <div className={styles.panel}>
          <PoseSelector value={state.pose} onChange={handlePoseChange} />
          <PartsPanel
            state={state}
            headType={headType}
            onPartChange={handlePartChange}
            onHeadTypeChange={setSelectedHeadType}
            onNeckTiltChange={handleNeckTiltChange}
            onHeadBodySwapChange={handleHeadBodySwapChange}
            onBodyLegSwapChange={handleBodyLegSwapChange}
          />
        </div>
      </main>
      <footer className={styles.footer}>
        <small>
          © Ameba -{' '}
          <a
            href="https://spindle.ameba.design/styles/illustration/regulation/"
            target="_blank"
            rel="noreferrer"
          >
            Illustration Guidelines
          </a>
        </small>
      </footer>
    </div>
  );
}

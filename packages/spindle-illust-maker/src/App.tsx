import { useCallback, useState } from 'react';
import type { IllustState, NeckTilt, PartCategory, PoseId } from './types';
import { POSE_MAP } from './constants/poses';
import { PARTS_BY_CATEGORY } from './constants/parts';
import { useIllustCanvas } from './hooks/useIllustCanvas';
import { PoseSelector } from './components/PoseSelector';
import { PartsPanel } from './components/PartsPanel';
import { SizeControl } from './components/SizeControl';
import { ExportButtons } from './components/ExportButtons';
import styles from './App.module.css';

function findGreenDefault(items: { path: string }[] | undefined): string | null {
  if (!items?.length) return null;
  return items.find((i) => i.path.includes('-green.'))?.path ?? items[0].path;
}

function getDefaultParts(poseId: PoseId): Partial<IllustState> {
  const pose = POSE_MAP[poseId];
  if (!pose) return {};

  const result: Partial<IllustState> = {};
  for (const layer of pose.layers) {
    const part = layer.part;
    if (part === 'head') {
      const headType = pose.headTypes[0] ?? 'man';
      const key = `head/${headType}`;
      result.head = findGreenDefault(PARTS_BY_CATEGORY[key]);
    } else if (part === 'body') {
      const bodyKey = pose.bodySubdir ?? 'body';
      result.body = findGreenDefault(PARTS_BY_CATEGORY[bodyKey]);
    } else if (part === 'leg') {
      result.leg = findGreenDefault(PARTS_BY_CATEGORY['leg']);
    } else {
      (result as Record<string, string | null>)[part] = null;
    }
  }
  return result;
}

function createInitialState(): IllustState {
  const pose: PoseId = 'adult-standing';
  return {
    pose,
    neckTilt: 'normal',
    headBodySwap: false,
    bodyLegSwap: false,
    head: null,
    body: null,
    leg: null,
    hat: null,
    glasses: null,
    mask: null,
    beard: null,
    umbrella: null,
    scale: 1,
    ...getDefaultParts(pose),
  };
}

export function App() {
  const [state, setState] = useState<IllustState>(createInitialState);

  const handlePoseChange = useCallback((poseId: PoseId) => {
    setState((prev) => ({
      ...prev,
      pose: poseId,
      neckTilt: 'normal',
      headBodySwap: false,
      bodyLegSwap: false,
      hat: null,
      glasses: null,
      mask: null,
      beard: null,
      umbrella: null,
      ...getDefaultParts(poseId),
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
    </div>
  );
}

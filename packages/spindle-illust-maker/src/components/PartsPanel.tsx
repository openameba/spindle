import { useMemo, useState } from 'react';
import type { HeadType, IllustState, NeckTilt, PartCategory } from '../types';
import { POSE_MAP } from '../constants/poses';
import { PARTS_BY_CATEGORY } from '../constants/parts';
import { Button, SegmentedControl } from '@openameba/spindle-ui';
import '@openameba/spindle-ui/Button/Button.css';
import '@openameba/spindle-ui/SegmentedControl/SegmentedControl.css';
import * as Form from '@openameba/spindle-ui/Form';
import '@openameba/spindle-ui/Form/DropDown.css';
import '@openameba/spindle-ui/Form/InputLabel.css';
import '@openameba/spindle-ui/Form/ToggleSwitch.css';
import styles from './PartsPanel.module.css';

type Props = {
  state: IllustState;
  onPartChange: (part: PartCategory, path: string | null) => void;
  onNeckTiltChange: (tilt: NeckTilt) => void;
  onHeadBodySwapChange: (swap: boolean) => void;
  onBodyLegSwapChange: (swap: boolean) => void;
};

const PART_LABELS: Record<string, string> = {
  head: 'Head',
  body: 'Body',
  leg: 'Leg',
  hat: 'Hat',
  glasses: 'Glasses',
  mask: 'Mask',
  beard: 'Beard',
  umbrella: 'Umbrella',
};

const HEAD_TYPE_LABELS: Record<HeadType, string> = {
  man: 'Man',
  woman: 'Woman',
  child: 'Child',
  old: 'Old',
  baby: 'Baby',
};

const NECK_TILT_OPTIONS = [
  { id: 'normal' as const, label: '通常' },
  { id: 'up' as const, label: '上向き' },
  { id: 'down' as const, label: '下向き' },
];

const PART_ORDER: PartCategory[] = ['head', 'body', 'leg', 'hat', 'glasses', 'mask', 'beard', 'umbrella'];

const BODY_LEG_POSES: string[] = ['adult-standing', 'adult-sitting'];

export function PartsPanel({ state, onPartChange, onNeckTiltChange, onHeadBodySwapChange, onBodyLegSwapChange }: Props) {
  const pose = POSE_MAP[state.pose];
  const availableParts = useMemo(() => {
    if (!pose) return [];
    const parts = new Set(pose.layers.map((l) => l.part));
    return PART_ORDER.filter((p) => parts.has(p));
  }, [pose]);

  const [activeTab, setActiveTab] = useState<PartCategory>('head');
  const [headType, setHeadType] = useState<HeadType>('man');

  const effectiveHeadType = useMemo(() => {
    if (!pose) return headType;
    return pose.headTypes.includes(headType) ? headType : pose.headTypes[0];
  }, [pose, headType]);

  const currentTab = availableParts.includes(activeTab)
    ? activeTab
    : availableParts[0] ?? 'head';

  const items = useMemo(() => {
    if (currentTab === 'head') {
      const key = `head/${effectiveHeadType}`;
      return PARTS_BY_CATEGORY[key] ?? [];
    }
    if (currentTab === 'body' && pose?.bodySubdir) {
      return PARTS_BY_CATEGORY[pose.bodySubdir] ?? [];
    }
    if (currentTab === 'leg' && pose?.legSubdir) {
      return PARTS_BY_CATEGORY[pose.legSubdir] ?? [];
    }
    return PARTS_BY_CATEGORY[currentTab] ?? [];
  }, [currentTab, effectiveHeadType, pose]);

  const selectedPath = state[currentTab];
  const isOptional = ['hat', 'glasses', 'mask', 'beard', 'umbrella'].includes(
    currentTab,
  );

  return (
    <div className={styles.panel}>
      <div className={styles.tabs}>
        {availableParts.map((part) => (
          <div
            key={part}
            className={currentTab === part ? styles.tabActive : styles.tab}
          >
            <Button
              size="small"
              variant="neutral"
              onClick={() => setActiveTab(part)}
            >
              {PART_LABELS[part] ?? part}
            </Button>
          </div>
        ))}
      </div>

      {currentTab === 'head' && pose && pose.headTypes.length > 1 && (
        <div className={styles.headTypeWrap}>
          <SegmentedControl
            size="medium"
            options={pose.headTypes.map((ht) => ({
              id: ht,
              label: HEAD_TYPE_LABELS[ht],
            }))}
            selectedId={effectiveHeadType}
            onClick={(_e, id) => setHeadType(id as HeadType)}
          />
        </div>
      )}

      {pose?.neckTilts && (
        <div className={styles.dropdownRow}>
          <Form.InputLabel id="neck-tilt-label">首の傾き</Form.InputLabel>
          <Form.DropDown
            aria-labelledby="neck-tilt-label"
            value={state.neckTilt}
            onChange={(e) => onNeckTiltChange(e.target.value as NeckTilt)}
          >
            {NECK_TILT_OPTIONS.map((opt) => (
              <option key={opt.id} value={opt.id}>
                {opt.label}
              </option>
            ))}
          </Form.DropDown>
        </div>
      )}

      <div className={styles.toggleRow}>
        <Form.InputLabel id="head-body-swap">Head↔Body 入れ替え</Form.InputLabel>
        <Form.ToggleSwitch
          id="head-body-swap"
          checked={state.headBodySwap}
          onChange={(e) => onHeadBodySwapChange(e.target.checked)}
        />
      </div>

      {BODY_LEG_POSES.includes(state.pose) && (
        <div className={styles.toggleRow}>
          <Form.InputLabel id="body-leg-swap">Body↔Leg 入れ替え</Form.InputLabel>
          <Form.ToggleSwitch
            id="body-leg-swap"
            checked={state.bodyLegSwap}
            onChange={(e) => onBodyLegSwapChange(e.target.checked)}
          />
        </div>
      )}

      <div className={styles.grid}>
        {isOptional && (
          <button
            className={`${styles.thumb} ${selectedPath === null ? styles.thumbSelected : ''}`}
            onClick={() => onPartChange(currentTab, null)}
          >
            <span className={styles.thumbNone}>None</span>
          </button>
        )}
        {items.map((item) => (
          <button
            key={item.id}
            title={item.label}
            className={`${styles.thumb} ${selectedPath === item.path ? styles.thumbSelected : ''}`}
            onClick={() => onPartChange(currentTab, item.path)}
          >
            <img
              className={styles.thumbImg}
              src={item.path}
              alt={item.label}
              loading="lazy"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

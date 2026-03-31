import type { PoseId } from '../types';
import { POSES } from '../constants/poses';
import { Button } from '@openameba/spindle-ui';
import '@openameba/spindle-ui/Button/Button.css';
import styles from './PoseSelector.module.css';

type Props = {
  value: PoseId;
  onChange: (pose: PoseId) => void;
};

export function PoseSelector({ value, onChange }: Props) {
  return (
    <div className={styles.wrap}>
      {POSES.map((pose) => (
        <div
          key={pose.id}
          className={value === pose.id ? styles.active : styles.btn}
        >
          <Button
            size="small"
            variant="neutral"
            onClick={() => onChange(pose.id)}
          >
            {pose.label}
          </Button>
        </div>
      ))}
    </div>
  );
}

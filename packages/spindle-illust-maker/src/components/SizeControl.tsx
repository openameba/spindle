import { Button } from '@openameba/spindle-ui';
import '@openameba/spindle-ui/Button/Button.css';
import styles from './SizeControl.module.css';

type Props = {
  scale: number;
  onChange: (scale: number) => void;
};

const SCALES = [
  { value: 0.5, label: 'S' },
  { value: 1, label: 'M' },
  { value: 2, label: 'L' },
];

export function SizeControl({ scale, onChange }: Props) {
  return (
    <div className={styles.wrap}>
      {SCALES.map((s) => (
        <div
          key={s.value}
          className={scale === s.value ? styles.active : styles.btn}
        >
          <Button
            size="small"
            variant="neutral"
            onClick={() => onChange(s.value)}
          >
            {s.label}
          </Button>
        </div>
      ))}
    </div>
  );
}

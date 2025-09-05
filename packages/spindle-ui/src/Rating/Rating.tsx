import React from 'react';
import Star from '../Icon/Star';
import StarBack from './StarBack';
import StarFront from './StarFront';

type Size = 'large' | 'medium' | 'small';

interface Props extends React.HTMLAttributes<HTMLElement> {
  max: number;
  value: number;
  size: Size;
  showText?: boolean;
}

const BLOCK_NAME = 'spui-Rating';

const convertToValue = (num: number): number => {
  return Math.round(num * 10) / 10;
};

const clamp = (num: number, min: number, max: number): number => {
  return Math.max(min, Math.min(num, max));
};

export const Rating = (props: Props) => {
  const { max, value, size, showText = false, ...rest } = props;
  const convertedValue = convertToValue(value);
  const clampedValue = clamp(convertedValue, 0, max);
  const iconClass = [`${BLOCK_NAME}-icon`, `${BLOCK_NAME}-icon--${size}`]
    .filter(Boolean)
    .join(' ')
    .trim();
  const ariaLabel = `${max}つ星中${clampedValue}の評価`;

  return (
    <div className={BLOCK_NAME} {...rest}>
      {showText && (
        <p className={`${BLOCK_NAME}-text ${BLOCK_NAME}-text--${size}`}>
          {clampedValue}
        </p>
      )}
      <div className={BLOCK_NAME} role="img" aria-label={ariaLabel}>
        {Array.from({ length: max }, (_, index: number) => {
          const itemValue = index + 1;
          const isFull = clampedValue >= itemValue;
          const fillRatio = clamp(clampedValue - (itemValue - 1), 0, 1);
          const isActive = fillRatio > 0 && fillRatio < 1;

          return (
            <span key={itemValue} className={`${BLOCK_NAME}-item`}>
              {isFull ? (
                <span className={`${BLOCK_NAME}-item--full`}>
                  <StarFront className={iconClass} />
                </span>
              ) : isActive ? (
                <span className={`${BLOCK_NAME}-item--active`}>
                  <StarBack className={iconClass} />
                  <span
                    className={`${BLOCK_NAME}-item--front`}
                    style={{ width: `${fillRatio * 100}%` }}
                  >
                    <StarFront className={iconClass} />
                  </span>
                </span>
              ) : (
                <Star className={iconClass} />
              )}
            </span>
          );
        })}
      </div>
    </div>
  );
};

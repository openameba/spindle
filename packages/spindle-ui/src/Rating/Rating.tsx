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
  const ariaLabel = `${max}つ星中${clampedValue}の評価`;

  return (
    <div className={`${BLOCK_NAME} ${BLOCK_NAME}--${size}`} {...rest}>
      {showText && <p className={`${BLOCK_NAME}-text`}>{clampedValue}</p>}
      <div className={`${BLOCK_NAME}-image`} role="img" aria-label={ariaLabel}>
        {Array.from({ length: max }, (_, index: number) => {
          const itemValue = index + 1;
          const isFull = clampedValue >= itemValue;
          const fillRatio = clamp(clampedValue - (itemValue - 1), 0, 1);
          const isActive = fillRatio > 0 && fillRatio < 1;

          return (
            <span key={itemValue} className={`${BLOCK_NAME}-item`}>
              {isFull ? (
                <span className={`${BLOCK_NAME}-item--active`}>
                  <StarFront
                    className={`${BLOCK_NAME}-icon`}
                    aria-hidden="true"
                  />
                </span>
              ) : isActive ? (
                <span className={`${BLOCK_NAME}-item--active`}>
                  <StarBack
                    className={`${BLOCK_NAME}-icon`}
                    aria-hidden="true"
                  />
                  <span
                    className={`${BLOCK_NAME}-item--front`}
                    style={{ width: `${fillRatio * 100}%` }}
                  >
                    <StarFront
                      className={`${BLOCK_NAME}-icon`}
                      aria-hidden="true"
                    />
                  </span>
                </span>
              ) : (
                <Star className={`${BLOCK_NAME}-icon`} aria-hidden="true" />
              )}
            </span>
          );
        })}
      </div>
    </div>
  );
};

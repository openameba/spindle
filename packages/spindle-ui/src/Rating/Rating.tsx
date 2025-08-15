import React from 'react';
import Star from '../Icon/Star';
import StarFill from '../Icon/StarFill';
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

export const Rating = (props: Props) => {
  const { max, value, size, showText = false, ...rest } = props;
  const convertedValue = convertToValue(value);
  const iconClass = `${BLOCK_NAME}-icon ${BLOCK_NAME}-icon--${size}`;
  const ariaLabel = `${max}つ星中${convertedValue}の評価`;

  return (
    <div className={BLOCK_NAME} {...rest}>
      {showText && (
        <p className={`${BLOCK_NAME}-text ${BLOCK_NAME}-text--${size}`}>
          {convertedValue}
        </p>
      )}
      <div className={BLOCK_NAME} role="img" aria-label={ariaLabel}>
        {Array.from({ length: max }, (_, index: number) => {
          const itemValue = index + 1;
          const isFull = convertedValue >= itemValue;
          const fillRatio = Math.max(
            0,
            Math.min(1, convertedValue - (itemValue - 1)),
          );
          const isActive = fillRatio > 0 && fillRatio < 1;

          return (
            <span key={itemValue} className={`${BLOCK_NAME}-item`}>
              {isFull ? (
                <span className={`${BLOCK_NAME}-item--full`}>
                  <StarFill className={iconClass} />
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

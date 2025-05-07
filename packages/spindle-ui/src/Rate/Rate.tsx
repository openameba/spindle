import React from 'react';
import Star from '../Icon/Star';
import StarFill from '../Icon/StarFill';
import StarHalf from '../Icon/StarHalf';

type Size = 'large' | 'medium' | 'small';

interface Props extends React.HTMLAttributes<HTMLElement> {
  max: number;
  value: number;
  size?: Size;
  showText?: boolean;
}

const BLOCK_NAME = 'spui-Rate';

const convertToValue = (num: number): number => {
  return Math.round(num * 2) / 2;
};

export const Rate = (props: Props) => {
  const { max, value, size = 'medium', showText = false, ...rest } = props;
  const convertedValue = convertToValue(value);
  const iconClass = `${BLOCK_NAME}-item-icon ${BLOCK_NAME}-item-icon--${size}`;

  return (
    <div className={BLOCK_NAME} {...rest}>
      {showText && (
        <p className={`${BLOCK_NAME}-text ${BLOCK_NAME}-text--${size}`}>
          {convertedValue}
        </p>
      )}
      <ul className={`${BLOCK_NAME}-list`}>
        {Array.from({ length: max }, (_, index: number) => {
          const itemValue = index + 1;
          const isHalf = convertedValue === itemValue - 0.5;
          const isFull = convertedValue >= itemValue;
          return (
            <li
              key={itemValue}
              className={`${BLOCK_NAME}-item`}
              data-value={itemValue}
            >
              {isFull ? (
                <StarFill className={iconClass} />
              ) : isHalf ? (
                <span className={`${BLOCK_NAME}-item-half`}>
                  <Star className={iconClass} />
                  <StarHalf className={iconClass} />
                </span>
              ) : (
                <Star className={iconClass} />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

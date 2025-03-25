import React, { createRef, type RefObject, useCallback, useRef } from 'react';
import CheckBold from '../Icon/CheckBold';

type Props = {
  id?: string;
  value: string | null;
  options: {
    label: string;
    value: string;
  }[];
  onClick?: (value: string) => void;
};

const BLOCK_NAME = 'spui-ButtonSwitch';

export const ButtonSwitch: React.FC<Props> = ({
  id,
  value,
  options,
  onClick,
}) => {
  const buttonsRef = useRef<RefObject<HTMLButtonElement>[]>([]);

  options.forEach((_, index) => {
    buttonsRef.current[index] = createRef<HTMLButtonElement>();
  });

  const handleKeydown = useCallback(
    (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
      switch (e.key) {
        case 'ArrowUp':
        case 'ArrowLeft': {
          e.preventDefault();
          const prevButtonRef =
            buttonsRef.current[(options.length + index - 1) % options.length];
          const prevButton = prevButtonRef.current;
          prevButton?.focus();
          if (onClick) {
            onClick(
              options[(options.length + index - 1) % options.length].value,
            );
          }
          break;
        }
        case 'ArrowDown':
        case 'ArrowRight': {
          e.preventDefault();
          const nextButtonRef =
            buttonsRef.current[(index + 1) % options.length];
          const nextButton = nextButtonRef.current;
          nextButton?.focus();
          if (onClick) {
            onClick(options[(index + 1) % options.length].value);
          }
          break;
        }
      }
    },
    [value, options.length],
  );

  return (
    <div id={id} className={BLOCK_NAME} role="group">
      {options.map((option, index) => (
        <button
          type="button"
          aria-pressed={value === option.value ? 'true' : 'false'}
          data-value={option.value}
          onKeyDown={(e) => handleKeydown(e, index)}
          key={option.value}
          className={`${BLOCK_NAME}-button`}
          onClick={() => onClick && onClick(option.value)}
          ref={buttonsRef.current[index]}
        >
          {value === option.value && (
            <CheckBold
              className={`${BLOCK_NAME}-icon`}
              width={12}
              height={12}
            />
          )}
          <div className={`${BLOCK_NAME}-label`}>{option.label}</div>
        </button>
      ))}
    </div>
  );
};

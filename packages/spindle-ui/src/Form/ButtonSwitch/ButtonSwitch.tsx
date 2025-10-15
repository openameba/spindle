import React, { createRef, type RefObject, useCallback, useRef } from 'react';
import CheckBold from '../../Icon/CheckBold';

type Props = {
  id?: string;
  value: string | null;
  options: {
    label: string;
    value: string;
  }[];
  onClick: (value: string) => void;
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
      const focusButton = (offset: number) => {
        const buttonRef =
          buttonsRef.current[
            (options.length + index + offset) % options.length
          ];
        const button = buttonRef.current;
        button?.focus();
        if (onClick) {
          onClick(
            options[(options.length + index + offset) % options.length].value,
          );
        }
      };
      switch (e.key) {
        case 'ArrowUp':
        case 'ArrowLeft': {
          e.preventDefault();
          focusButton(-1);
          break;
        }
        case 'ArrowDown':
        case 'ArrowRight': {
          e.preventDefault();
          focusButton(1);
          break;
        }
      }
    },
    [options, onClick],
  );

  return (
    <div id={id} className={BLOCK_NAME} role="group">
      {options.map((option, index) => (
        <button
          type="button"
          aria-pressed={value === option.value}
          onKeyDown={(e) => handleKeydown(e, index)}
          key={option.value}
          className={`${BLOCK_NAME}-button`}
          onClick={() => onClick?.(option.value)}
          ref={buttonsRef.current[index]}
        >
          {value === option.value && (
            <CheckBold
              aria-hidden="true"
              className={`${BLOCK_NAME}-icon`}
              width={12}
              height={12}
            />
          )}
          <span className={`${BLOCK_NAME}-label`}>{option.label}</span>
        </button>
      ))}
    </div>
  );
};

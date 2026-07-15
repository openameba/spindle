import React from 'react';
import ChevronLeftBold from '../../Icon/ChevronLeftBold';
import ChevronRightBold from '../../Icon/ChevronRightBold';
import { useScrollArrows, useTabList } from '../hooks';

type Option = {
  label: string;
  id: string;
  countBadge?: string;
};

type Variant = 'fixed' | 'scrollable';

type Props = {
  defaultSelectedId: string;
  options: Option[];
  hasBorder?: boolean;
  variant?: Variant;
  onClick?: (
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.KeyboardEvent<HTMLButtonElement>,
    id: string,
  ) => void;
};

const BLOCK_NAME = 'spui-UnderlineTab';

export const UnderlineTab: React.FC<Props> = ({
  defaultSelectedId,
  options,
  hasBorder = false,
  variant = 'fixed',
  onClick,
}) => {
  const { selectedId, buttonsRef, handleClick, handleKeyDown } = useTabList({
    defaultSelectedId,
    options,
    onClick,
  });
  const { containerRef, showPrevButton, showNextButton, handleScroll } =
    useScrollArrows(variant === 'scrollable');

  if (options.length === 0) {
    return null;
  }

  return (
    <div
      className={[
        BLOCK_NAME,
        `${BLOCK_NAME}--${variant}`,
        hasBorder && `${BLOCK_NAME}--border`,
      ]
        .filter(Boolean)
        .join(' ')
        .trim()}
    >
      {variant === 'scrollable' && (
        <div
          className={[
            `${BLOCK_NAME}-arrow`,
            `${BLOCK_NAME}-arrow--left`,
            showPrevButton && 'is-showed',
          ]
            .filter(Boolean)
            .join(' ')
            .trim()}
        >
          <button
            className={`${BLOCK_NAME}-arrowButton`}
            type="button"
            onClick={() => handleScroll('prev')}
          >
            <ChevronLeftBold aria-label="左に移動" height={16} width={16} />
          </button>
        </div>
      )}

      <div
        className={`${BLOCK_NAME}-container`}
        role="tablist"
        ref={containerRef}
      >
        {options.map((option, index) => {
          const { label, id, countBadge } = option;
          const isSelected = id === selectedId;

          return (
            <button
              aria-controls={`${id}-tabpanel`}
              aria-selected={isSelected}
              className={`${BLOCK_NAME}-button`}
              key={id}
              id={id}
              style={{
                maxWidth:
                  variant === 'fixed'
                    ? `calc(${100 / options.length}%`
                    : 'fit-content',
              }}
              tabIndex={isSelected ? 0 : -1}
              type="button"
              ref={buttonsRef.current[index]}
              role="tab"
              onClick={(e) => handleClick(e, id, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            >
              <span className={`${BLOCK_NAME}-labelWrapper`}>
                <span className={`${BLOCK_NAME}-label`}>{label}</span>
                {countBadge && (
                  <>
                    <span className={`${BLOCK_NAME}-badge`}>{countBadge}</span>
                    <span className={`${BLOCK_NAME}-visuallyHidden`}>件</span>
                  </>
                )}
              </span>
            </button>
          );
        })}
      </div>

      {variant === 'scrollable' && (
        <div
          className={[
            `${BLOCK_NAME}-arrow`,
            `${BLOCK_NAME}-arrow--right`,
            showNextButton && 'is-showed',
          ]
            .filter(Boolean)
            .join(' ')
            .trim()}
        >
          <button
            className={`${BLOCK_NAME}-arrowButton`}
            type="button"
            onClick={() => handleScroll('next')}
          >
            <ChevronRightBold aria-label="右に移動" height={16} width={16} />
          </button>
        </div>
      )}
    </div>
  );
};

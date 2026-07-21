import React from 'react';
import { useTabList } from '../hooks';

type Option = {
  label: string;
  id: string;
};

type Props = {
  defaultSelectedId: string;
  options: Option[];
  onClick?: (
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.KeyboardEvent<HTMLButtonElement>,
    id: string,
  ) => void;
};

const BLOCK_NAME = 'spui-InlineTab';

export const InlineTab: React.FC<Props> = ({
  defaultSelectedId,
  options,
  onClick,
}) => {
  const { selectedId, buttonsRef, handleClick, handleKeyDown } = useTabList({
    defaultSelectedId,
    options,
    onClick,
  });

  if (options.length === 0) {
    return null;
  }

  return (
    <div className={BLOCK_NAME} role="tablist">
      {options.map((option, index) => {
        const { label, id } = option;
        const isSelected = id === selectedId;

        return (
          <button
            aria-controls={`${id}-tabpanel`}
            aria-selected={isSelected}
            className={`${BLOCK_NAME}-button`}
            key={id}
            id={id}
            tabIndex={isSelected ? 0 : -1}
            type="button"
            ref={buttonsRef.current[index]}
            role="tab"
            onClick={(e) => handleClick(e, id, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          >
            <span className={`${BLOCK_NAME}-label`}>{label}</span>
          </button>
        );
      })}
    </div>
  );
};

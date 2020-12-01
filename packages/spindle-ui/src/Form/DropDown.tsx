import React, { useEffect, useRef, useState } from 'react';

import { ChevronDownBold } from '../Icon';

type Props = {
  hasError?: boolean;
} & Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'className'>; // Layout styles should be added at containers

const BLOCK_NAME = 'spui-DropDown';

export const DropDown: React.FC<Props> = ({
  children,
  hasError = false,
  onChange,
  ...rest
}: Props) => {
  const selectEl = useRef<HTMLSelectElement>(null);

  const [text, setText] = useState('');
  const [disabled, setDisabled] = useState(false);

  const update = () => {
    if (selectEl && selectEl.current) {
      const selectedEl =
        selectEl.current.options[selectEl.current.selectedIndex];
      const value = selectedEl.text;
      const disabled = selectedEl.disabled;
      setText(value);
      setDisabled(disabled);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (typeof onChange === 'function') {
      onChange(event);
    }
    update();
  };

  // Update text once
  useEffect(update, []);

  return (
    <label
      className={[
        `${BLOCK_NAME}-label`,
        !disabled ? 'is-active' : '',
        hasError ? 'is-error' : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <span className={`${BLOCK_NAME}-visual`}>{text}</span>
      <span className={`${BLOCK_NAME}-icon`}>
        <ChevronDownBold aria-hidden="true" />
      </span>
      <select
        className={`${BLOCK_NAME}-select`}
        ref={selectEl}
        onChange={handleChange}
        {...rest}
      >
        {children}
      </select>
      <span className={`${BLOCK_NAME}-outline`}></span>
    </label>
  );
};

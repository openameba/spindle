import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { useMergeRefs } from 'use-callback-ref';

import ChevronDownBold from '../../Icon/ChevronDownBold';

interface Props
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'className'> {
  children?: React.ReactNode;
  hasError?: boolean;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
}

const BLOCK_NAME = 'spui-DropDown';

export const DropDown = forwardRef<HTMLSelectElement, Props>(function DropDown(
  { children, hasError = false, onChange, ...rest }: Props,
  ref,
) {
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
        ref={useMergeRefs([selectEl, ref])}
        onChange={handleChange}
        {...rest}
      >
        {children}
      </select>
      <span className={`${BLOCK_NAME}-outline`}></span>
    </label>
  );
});

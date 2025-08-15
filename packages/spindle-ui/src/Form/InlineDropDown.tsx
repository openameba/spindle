import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { useMergeRefs } from 'use-callback-ref';

import ChevronDownBold from '../Icon/ChevronDownBold';

type Size = 'medium' | 'small';

interface Props
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'className'> {
  children?: React.ReactNode;
  visualSize?: Size;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
}

const BLOCK_NAME = 'spui-InlineDropDown';

export const InlineDropDown = forwardRef<HTMLSelectElement, Props>(
  function InlineDropDown(
    { children, visualSize = 'medium', onChange, ...rest }: Props,
    ref,
  ) {
    const selectEl = useRef<HTMLSelectElement>(null);

    const [text, setText] = useState('');

    const update = () => {
      if (selectEl && selectEl.current) {
        const selectedEl =
          selectEl.current.options[selectEl.current.selectedIndex];
        const value = selectedEl.text;
        setText(value);
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
      <label className={[`${BLOCK_NAME}-label`].filter(Boolean).join(' ')}>
        <span className={`${BLOCK_NAME}-visual`}>
          <span
            className={`${BLOCK_NAME}-text ${BLOCK_NAME}-text--${visualSize}`}
          >
            {text}
          </span>
          <span
            className={`${BLOCK_NAME}-icon ${BLOCK_NAME}-icon--${visualSize}`}
          >
            <ChevronDownBold aria-hidden="true" />
          </span>
        </span>
        <select
          className={`${BLOCK_NAME}-select ${BLOCK_NAME}-select--${visualSize}`}
          ref={useMergeRefs([selectEl, ref])}
          onChange={handleChange}
          {...rest}
        >
          {children}
        </select>
        <span className={`${BLOCK_NAME}-outline`}></span>
      </label>
    );
  },
);

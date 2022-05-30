import React, { forwardRef, useEffect, useRef } from 'react';
import mergeRefs from 'react-merge-refs';
import { ButtonGroup as Group } from '../ButtonGroup';

interface DialogProps extends React.DialogHTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  onCancel?: (event: React.BaseSyntheticEvent) => void;
  onClose?: (event: React.BaseSyntheticEvent) => void;
}

export interface DialogHTMLElement extends HTMLElement {
  close?: () => void;
  showModal?: (returnValue?: string) => void;
  open?: boolean;
}

interface PartsProps {
  children?: React.ReactNode;
  className?: string;
}

const BLOCK_NAME = 'spui-Dialog';

const Frame = forwardRef<DialogHTMLElement, DialogProps>(function Dialog(
  { children, className, open, onClose, ...rest },
  ref,
) {
  const dialogEl = useRef<DialogHTMLElement>(null);

  const handleFormSubmit = (event: React.BaseSyntheticEvent) => {
    typeof onClose === 'function' && onClose(event);
  };

  useEffect(() => {
    if (!dialogEl.current) {
      return;
    }

    // Remove this when browsers support :has() pseudo-class
    const classNameToStopScrollBehindDialog = `${BLOCK_NAME}--open`;

    if (open) {
      // Check element state to work with dialog-polyfill
      if (dialogEl.current.open) {
        return;
      }
      dialogEl.current.showModal && dialogEl.current.showModal();
      document.documentElement.classList.add(classNameToStopScrollBehindDialog);
    } else {
      dialogEl.current.open &&
        dialogEl.current.close &&
        dialogEl.current.close();
      // Always remove this class to avoid unexpected scroll stopping
      document.documentElement.classList.remove(
        classNameToStopScrollBehindDialog,
      );
    }
  }, [open, dialogEl]);

  return (
    <dialog
      ref={mergeRefs([dialogEl, ref])}
      className={[BLOCK_NAME, className].filter(Boolean).join(' ').trim()}
      {...rest}
    >
      <form method="dialog" onSubmit={handleFormSubmit}>
        {children}
      </form>
    </dialog>
  );
});

const StyleOnly = ({ className, children }: PartsProps) => {
  return (
    <div className={[BLOCK_NAME, className].filter(Boolean).join(' ').trim()}>
      {children}
    </div>
  );
};

const Title = ({ children }: PartsProps) => {
  return <p className={`${BLOCK_NAME}-title`}>{children}</p>;
};

const Body = ({ children }: PartsProps) => {
  return <p className={`${BLOCK_NAME}-body`}>{children}</p>;
};

const ButtonGroup: typeof Group = ({ children, ...rest }) => {
  return (
    <Group className={`${BLOCK_NAME}-buttonGroup`} size="medium" {...rest}>
      {children}
    </Group>
  );
};

export const Dialog = {
  Frame,
  StyleOnly,
  Title,
  Body,
  ButtonGroup,
};

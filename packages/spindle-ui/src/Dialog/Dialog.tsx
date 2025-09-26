import React, { forwardRef, useEffect, useRef } from 'react';
import { useMergeRefs } from 'use-callback-ref';
import { ButtonGroup as Group } from '../ButtonGroup';

interface DialogProps extends React.DialogHTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  onCancel?: (event: React.BaseSyntheticEvent) => void;
  onClose?: (event: React.BaseSyntheticEvent) => void;
}

interface PartsProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
}

const BLOCK_NAME = 'spui-Dialog';

const Frame = forwardRef<HTMLDialogElement, DialogProps>(function Dialog(
  { children, className, open, onClose, ...rest },
  ref,
) {
  const dialogEl = useRef<HTMLDialogElement>(null);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // To be closed with the open prop
    typeof onClose === 'function' && onClose(event);
  };

  const handleDialogClick = (event: React.MouseEvent<HTMLDialogElement>) => {
    // Detect backdrop click
    if (event.target === dialogEl.current) {
      onClose?.(event);
    }
  };

  const handleDialogClose = (
    event: React.SyntheticEvent<HTMLDialogElement>,
  ) => {
    // Detect escape key type
    if (event.target === dialogEl.current) {
      onClose?.(event);
    }
  };

  useEffect(() => {
    const dialog = dialogEl.current;
    if (!dialog) {
      return;
    }

    if (open) {
      !dialog.open && dialog.showModal?.();
    } else {
      dialog?.open && dialog.close?.();
    }
  }, [open]);

  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: Dialog close on backdrop click is standard behavior, ESC key handles keyboard closing
    <dialog
      ref={useMergeRefs([dialogEl, ref])}
      className={[BLOCK_NAME, className].filter(Boolean).join(' ').trim()}
      onClick={handleDialogClick}
      onClose={handleDialogClose}
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
    <div
      className={[BLOCK_NAME, `${BLOCK_NAME}--styleOnly`, className]
        .filter(Boolean)
        .join(' ')
        .trim()}
    >
      {children}
    </div>
  );
};

const Title = ({ children, id }: PartsProps) => {
  return (
    <p className={`${BLOCK_NAME}-title`} {...(id ? { id } : {})}>
      {children}
    </p>
  );
};

const Body = ({ children, id }: PartsProps) => {
  return (
    <p className={`${BLOCK_NAME}-body`} {...(id ? { id } : {})}>
      {children}
    </p>
  );
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

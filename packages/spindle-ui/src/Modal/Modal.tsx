import React, { useEffect, useRef, forwardRef, useCallback } from 'react';
import mergeRefs from 'react-merge-refs';
import { CrossBold } from '../Icon';
import { IconButton } from '../IconButton';

export type Size = 'small' | 'medium' | 'large';

interface ModalProps extends React.DialogHTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  size?: Size;
  onCancel?: (event: React.BaseSyntheticEvent) => void;
  onClose?: () => void;
}

export interface DialogHTMLElement extends HTMLElement {
  close?: () => void;
  showModal?: (returnValue?: string) => void;
  open?: boolean;
}

interface ModalHeaderProps {
  children?: React.ReactNode;
  hideCloseButton?: boolean;
  onClose?: (event?: React.BaseSyntheticEvent) => void;
}

interface PartsProps {
  children?: React.ReactNode;
  className?: string;
}

const BLOCK_NAME = 'spui-Modal';

function joinClassNames(classNames: (string | undefined)[]) {
  return classNames.filter(Boolean).join(' ').trim();
}

const Frame = forwardRef<DialogHTMLElement, ModalProps>(function Modal(
  { children, className, open, size = 'medium', onClose, ...rest },
  ref,
) {
  const dialogEl = useRef<DialogHTMLElement>(null);

  const handleDialogClick = useCallback(
    (event) => {
      // Detect backdrop click
      if (event.target === dialogEl.current) {
        onClose && onClose();
      }
    },
    [dialogEl],
  );

  useEffect(() => {
    if (!dialogEl.current) {
      return;
    }

    if (open) {
      !dialogEl.current.open &&
        dialogEl.current.showModal &&
        dialogEl.current.showModal();
    } else {
      dialogEl.current.open &&
        dialogEl.current.close &&
        dialogEl.current.close();
    }
  }, [open, dialogEl]);

  return (
    <dialog
      ref={mergeRefs([dialogEl, ref])}
      className={joinClassNames([
        BLOCK_NAME,
        `${BLOCK_NAME}--${size}`,
        className,
      ])}
      onClick={handleDialogClick}
      {...rest}
    >
      {children}
    </dialog>
  );
});

const StyleOnly = ({ className, children, size = 'medium' }: ModalProps) => {
  return (
    <div
      className={joinClassNames([
        BLOCK_NAME,
        `${BLOCK_NAME}--${size}`,
        className,
      ])}
    >
      {children}
    </div>
  );
};

const Header = ({ children, hideCloseButton, onClose }: ModalHeaderProps) => {
  const handleCloseButtonClick = useCallback(() => {
    typeof onClose === 'function' && onClose();
  }, [onClose]);

  return (
    <header className={`${BLOCK_NAME}-header`}>
      {children}
      {!hideCloseButton && (
        <p className={`${BLOCK_NAME}-closeButton`}>
          <IconButton
            aria-label="閉じる"
            variant="neutral"
            onClick={handleCloseButtonClick}
          >
            <CrossBold />
          </IconButton>
        </p>
      )}
    </header>
  );
};

const Title = ({ children, className }: PartsProps) => {
  return (
    <p className={joinClassNames([`${BLOCK_NAME}-title`, className])}>
      {children}
    </p>
  );
};

const TitleCaption = ({ children, className }: PartsProps) => {
  return (
    <span className={joinClassNames([`${BLOCK_NAME}-titleCaption`, className])}>
      {children}
    </span>
  );
};

const Content = ({ children, className }: PartsProps) => {
  return (
    <div className={joinClassNames([`${BLOCK_NAME}-content`, className])}>
      {children}
    </div>
  );
};

export const Modal = {
  Frame,
  Header,
  Title,
  TitleCaption,
  Content,
  StyleOnly,
};

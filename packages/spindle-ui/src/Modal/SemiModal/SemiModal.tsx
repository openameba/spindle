import React, { forwardRef, ReactNode, useEffect, useRef } from 'react';
import { useMergeRefs } from 'use-callback-ref';
import CrossBold from '../../Icon/CrossBold';
import { IconButton } from '../../IconButton';

type Size = 'large' | 'medium' | 'small';
type Type = 'sheet' | 'popup';

interface SemiModalProps
  extends Omit<React.DialogHTMLAttributes<HTMLElement>, 'className'> {
  children?: React.ReactNode;
  type?: Type;
  size?: Size;
  onCancel?: (event: React.BaseSyntheticEvent) => void;
  onClose?: (event: React.BaseSyntheticEvent) => void;
}

const BLOCK_NAME = 'spui-SemiModal';

const Frame = forwardRef<HTMLDialogElement, SemiModalProps>(function SemiModal(
  { children, open, size = 'medium', type = 'popup', onClose, ...rest },
  ref,
) {
  const dialogEl = useRef<HTMLDialogElement>(null);

  // 閉じるアイコンを押した時
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // To be closed with the open prop
    onClose?.(event);
  };

  // backdropを押した時
  const handleDialogClick = (event: React.MouseEvent<HTMLDialogElement>) => {
    // Detect backdrop click
    if (event.target === dialogEl.current) {
      onClose?.(event);
    }
  };

  //EscKeyを押したとき
  const handleDialogClose = (
    event: React.SyntheticEvent<HTMLDialogElement>,
  ) => {
    // Detect escape key type
    if (event.target === dialogEl.current) {
      onClose?.(event);
    }
  };

  useEffect(() => {
    if (!dialogEl.current) {
      return;
    }

    if (open) {
      dialogEl.current?.showModal?.();
    } else {
      dialogEl.current?.close?.();
    }
  }, [open, dialogEl]);

  return (
    <dialog
      role="dialog"
      className={BLOCK_NAME}
      ref={useMergeRefs([dialogEl, ref])}
      onClick={handleDialogClick}
      onClose={handleDialogClose}
      data-type={type}
      data-size={size}
      {...rest}
    >
      <form
        className={`${BLOCK_NAME}-frame`}
        method="dialog"
        onSubmit={handleFormSubmit}
      >
        {children}
      </form>
    </dialog>
  );
});

const Header = ({
  children,
  ...rest
}: React.ComponentProps<'header'> & { children: ReactNode }) => {
  return (
    <header role="heading" className={`${BLOCK_NAME}-header`} {...rest}>
      {children}
      <div className={`${BLOCK_NAME}-closeIconButton`}>
        <IconButton
          style={{ width: '100%', height: '100%' }}
          aria-label="閉じる"
          variant="neutral"
        >
          <CrossBold aria-hidden="true" className={`${BLOCK_NAME}-closeIcon`} />
        </IconButton>
      </div>
    </header>
  );
};

const HeaderTitle = ({ children, ...rest }: React.ComponentProps<'p'>) => {
  return (
    <p className={`${BLOCK_NAME}-headerTitle`} {...rest}>
      {children}
    </p>
  );
};

const Contents = ({
  children,
  ...rest
}: React.ComponentProps<'div'> & { children: ReactNode }) => {
  return (
    <div className={`${BLOCK_NAME}-contents`} {...rest}>
      {children}
    </div>
  );
};

const Footer = ({ children, ...rest }: React.ComponentProps<'div'>) => {
  return (
    <div className={`${BLOCK_NAME}-footer`} {...rest}>
      {children}
    </div>
  );
};

const StyleOnly = ({
  className,
  children,
  size = 'medium',
  type = 'popup',
  ...rest
}: React.ComponentProps<'div'> & { size?: Size; type?: Type }) => {
  return (
    <div
      className={[
        BLOCK_NAME,
        `${BLOCK_NAME}--styleOnly`,
        `${BLOCK_NAME}--${size}`,
        className,
      ]
        .filter(Boolean)
        .join(' ')
        .trim()}
      {...rest}
      data-type={type}
      data-size={size}
    >
      <div className={`${BLOCK_NAME}-frame`}>{children}</div>
    </div>
  );
};

export const SemiModal = {
  Frame,
  Header,
  HeaderTitle,
  Contents,
  Footer,
  StyleOnly,
};

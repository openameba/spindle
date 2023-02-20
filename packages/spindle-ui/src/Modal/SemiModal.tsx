import React, {
  forwardRef,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import mergeRefs from 'react-merge-refs';
import { CrossBold } from '../Icon';
import { IconButton } from '../IconButton';

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

export interface DialogHTMLElement extends HTMLElement {
  close?: () => void;
  showModal?: (returnValue?: string) => void;
  open?: boolean;
}

const BLOCK_NAME = 'spui-SemiModal';
const ANIMATION_NAME_LIST = [
  `${BLOCK_NAME}-fade-out`,
  `${BLOCK_NAME}-slide-out`,
];

const Frame = forwardRef<DialogHTMLElement, SemiModalProps>(function SemiModal(
  { children, open, size = 'medium', type = 'popup', onClose, ...rest },
  ref,
) {
  const [closing, setClosing] = useState(false);
  const dialogEl = useRef<DialogHTMLElement>(null);

  // 閉じるアイコンを押した時
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // To be closed with the open prop
    onClose?.(event);
  };

  // backdropを押した時
  const handleDialogClick = (event: React.MouseEvent<DialogHTMLElement>) => {
    // Detect backdrop click
    if (event.target === dialogEl.current) {
      onClose?.(event);
    }
  };

  //EscKeyを押したとき
  const handleDialogClose = (
    event: React.SyntheticEvent<DialogHTMLElement>,
  ) => {
    // Detect escape key type
    if (event.target === dialogEl.current) {
      onClose?.(event);
      setClosing(false);
    }
  };

  // modalアニメーション終了時
  const handleAnimationEnd = useCallback(
    (event: AnimationEvent) => {
      if (
        dialogEl.current &&
        ANIMATION_NAME_LIST.includes(event.animationName) &&
        !event.pseudoElement // To exclude ::backdrop
      ) {
        dialogEl.current?.close?.();
      }
    },
    [dialogEl],
  );

  useEffect(() => {
    dialogEl.current?.addEventListener(
      'animationend',
      handleAnimationEnd,
      false,
    );
  }, [handleAnimationEnd]);

  useEffect(() => {
    if (!dialogEl.current) {
      return;
    }

    // Remove this when browsers support :has() pseudo-class
    const classNameToStopScrollBehindDialog = `${BLOCK_NAME}--open`;

    if (open) {
      dialogEl.current?.showModal?.();
      document.documentElement.classList.add(classNameToStopScrollBehindDialog);
    } else {
      dialogEl.current?.open && setClosing(true);
      // Always remove this class to avoid unexpected scroll stopping
      document.documentElement.classList.remove(
        classNameToStopScrollBehindDialog,
      );
    }
  }, [open, dialogEl]);

  return (
    <dialog
      role="dialog"
      className={[BLOCK_NAME, closing && `${BLOCK_NAME}--closing`]
        .filter(Boolean)
        .join(' ')
        .trim()}
      ref={mergeRefs([dialogEl, ref])}
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
      className={[BLOCK_NAME, `${BLOCK_NAME}--${size}`, className]
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

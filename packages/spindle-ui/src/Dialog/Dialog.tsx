import React, {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
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
const FADE_OUT_ANIMATION = 'spui-Dialog-fade-out';

const Frame = forwardRef<HTMLDialogElement, DialogProps>(function Dialog(
  { children, className, open, onClose, ...rest },
  ref,
) {
  const [closing, setClosing] = useState(false);
  const dialogEl = useRef<HTMLDialogElement>(null);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // To be closed with the open prop
    typeof onClose === 'function' && onClose(event);
  };

  const handleDialogClick = (event: React.MouseEvent<HTMLDialogElement>) => {
    // Detect backdrop click
    if (event.target === dialogEl.current) {
      onClose && onClose(event);
    }
  };

  const handleDialogClose = (
    event: React.SyntheticEvent<HTMLDialogElement>,
  ) => {
    // Detect escape key type
    if (event.target === dialogEl.current) {
      onClose && onClose(event);
      setClosing(false);
    }
  };

  const handleAnimationEnd = useCallback(
    (event: AnimationEvent) => {
      if (
        dialogEl.current &&
        event.animationName === FADE_OUT_ANIMATION &&
        !event.pseudoElement // To exclude ::backdrop
      ) {
        dialogEl.current.close && dialogEl.current.close();
        setClosing(false);
      }
    },
    [dialogEl],
  );

  useEffect(() => {
    const dialog = dialogEl.current;
    dialog?.addEventListener('animationend', handleAnimationEnd, false);

    return () =>
      dialog?.removeEventListener('animationend', handleAnimationEnd, false);
  }, [dialogEl, handleAnimationEnd]);

  useEffect(() => {
    const dialog = dialogEl.current;
    if (!dialog) {
      return;
    }

    // Remove this when browsers support :has() pseudo-class
    const classNameToStopScrollBehindDialog = `${BLOCK_NAME}--open`;

    if (open) {
      !dialog.open && dialog.showModal?.();
      document.documentElement.classList.add(classNameToStopScrollBehindDialog);
    } else {
      dialog?.open && setClosing(true);
      // Always remove this class to avoid unexpected scroll stopping
      document.documentElement.classList.remove(
        classNameToStopScrollBehindDialog,
      );
    }
  }, [open, dialogEl]);

  return (
    <dialog
      ref={useMergeRefs([dialogEl, ref])}
      className={[BLOCK_NAME, closing && `${BLOCK_NAME}--closing`, className]
        .filter(Boolean)
        .join(' ')
        .trim()}
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

import React, { forwardRef, useEffect, useRef } from 'react';
import mergeRefs from 'react-merge-refs';
import { ButtonGroup as Group } from '../ButtonGroup';
import { CrossBold } from '../Icon';
import { IconButton } from '../IconButton';
import { SubtleButton } from '../SubtleButton';

type Size = 'large' | 'medium' | 'small';

interface AppealModalProps extends React.DialogHTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  size?: Size;
  onCancel?: (event: React.BaseSyntheticEvent) => void;
  onClose?: (event: React.BaseSyntheticEvent) => void;
}

export interface DialogHTMLElement extends HTMLElement {
  close?: () => void;
  showModal?: (returnValue?: string) => void;
  open?: boolean;
}

const BLOCK_NAME = 'spui-AppealModal';

const Frame = forwardRef<DialogHTMLElement, AppealModalProps>(
  function AppealModal(
    { children, className, open, size = 'large', onClose, ...rest },
    ref,
  ) {
    const dialogEl = useRef<DialogHTMLElement>(null);

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      onClose && onClose(event);
    };

    const handleDialogClick = (event: React.MouseEvent<DialogHTMLElement>) => {
      // Detect backdrop click
      if (event.target === dialogEl.current) {
        onClose && onClose(event);
      }
    };

    useEffect(() => {
      if (!dialogEl.current) {
        return;
      }

      // Remove this when browsers support :has() pseudo-class
      const classNameToStopScrollBehindDialog = `${BLOCK_NAME}--open`;

      if (open) {
        dialogEl.current.showModal && dialogEl.current.showModal();
        document.documentElement.classList.add(
          classNameToStopScrollBehindDialog,
        );
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
        className={[BLOCK_NAME, `${BLOCK_NAME}--${size}`, className]
          .filter(Boolean)
          .join(' ')
          .trim()}
        ref={mergeRefs([dialogEl, ref])}
        onClick={handleDialogClick}
        {...rest}
      >
        <form
          className={`${BLOCK_NAME}-frame`}
          method="dialog"
          onSubmit={handleFormSubmit}
        >
          <div className={`${BLOCK_NAME}-closeIconButton`}>
            <IconButton aria-label="閉じる" variant="neutral">
              <CrossBold aria-hidden="true" />
            </IconButton>
          </div>
          {children}
          <div className={`${BLOCK_NAME}-closeTextButton`}>
            <SubtleButton>閉じる</SubtleButton>
          </div>
        </form>
      </dialog>
    );
  },
);

const StyleOnly = ({
  className,
  children,
  size = 'large',
  ...rest
}: React.ComponentProps<'div'> & { size?: Size }) => {
  return (
    <div
      className={[BLOCK_NAME, `${BLOCK_NAME}--${size}`, className]
        .filter(Boolean)
        .join(' ')
        .trim()}
      {...rest}
    >
      <div className={`${BLOCK_NAME}-frame`}>
        <div className={`${BLOCK_NAME}-closeIconButton`}>
          <IconButton aria-label="閉じる" variant="neutral">
            <CrossBold aria-hidden="true" />
          </IconButton>
        </div>
        {children}
        <div className={`${BLOCK_NAME}-closeTextButton`}>
          <SubtleButton>閉じる</SubtleButton>
        </div>
      </div>
    </div>
  );
};

const Title = ({ children, ...rest }: React.ComponentProps<'p'>) => {
  return (
    <p className={`${BLOCK_NAME}-title`} {...rest}>
      {children}
    </p>
  );
};

const Image = ({ children, ...rest }: React.ComponentProps<'div'>) => {
  return (
    <div className={`${BLOCK_NAME}-image`} {...rest}>
      {children}
    </div>
  );
};

const Body = ({ children, ...rest }: React.ComponentProps<'p'>) => {
  return (
    <p className={`${BLOCK_NAME}-body`} {...rest}>
      {children}
    </p>
  );
};

const ButtonGroup: typeof Group = ({ children, ...rest }) => {
  return (
    <Group
      className={`${BLOCK_NAME}-buttonGroup`}
      size="medium"
      direction="column"
      {...rest}
    >
      {children}
    </Group>
  );
};

export const AppealModal = {
  Frame,
  StyleOnly,
  Title,
  Image,
  Body,
  ButtonGroup,
};

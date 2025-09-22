import React, { forwardRef, useEffect, useRef } from 'react';
import { useMergeRefs } from 'use-callback-ref';
import { ButtonGroup as Group } from '../ButtonGroup';
import CrossBold from '../Icon/CrossBold';
import { IconButton } from '../IconButton';
import { SubtleButton } from '../SubtleButton';

type Size = 'large' | 'medium' | 'small';

interface AppealModalProps extends React.DialogHTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  size?: Size;
  onCancel?: (event: React.BaseSyntheticEvent) => void;
  onClose?: (event: React.BaseSyntheticEvent) => void;
}

const BLOCK_NAME = 'spui-AppealModal';

const Frame = forwardRef<HTMLDialogElement, AppealModalProps>(
  function AppealModal(
    { children, className, open, size = 'large', onClose, ...rest },
    ref,
  ) {
    const dialogEl = useRef<HTMLDialogElement>(null);

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault(); // To be closed with the open prop
      onClose && onClose(event);
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
        dialog?.close?.();
      }
    }, [open, dialogEl]);

    return (
      <dialog
        className={[BLOCK_NAME, `${BLOCK_NAME}--${size}`, className]
          .filter(Boolean)
          .join(' ')
          .trim()}
        ref={useMergeRefs([dialogEl, ref])}
        onClick={handleDialogClick}
        onClose={handleDialogClose}
        {...rest}
      >
        <form
          className={`${BLOCK_NAME}-frame`}
          method="dialog"
          onSubmit={handleFormSubmit}
        >
          <div className={`${BLOCK_NAME}-closeIconButton`}>
            <IconButton aria-label="とじる" variant="neutral">
              <CrossBold aria-hidden="true" />
            </IconButton>
          </div>
          {children}
          <div className={`${BLOCK_NAME}-closeTextButton`}>
            <SubtleButton>とじる</SubtleButton>
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
    >
      <div className={`${BLOCK_NAME}-frame`}>
        <div className={`${BLOCK_NAME}-closeIconButton`}>
          <IconButton aria-label="閉じる" variant="neutral">
            <CrossBold aria-hidden="true" />
          </IconButton>
        </div>
        {children}
        <div className={`${BLOCK_NAME}-closeTextButton`}>
          <SubtleButton>とじる</SubtleButton>
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

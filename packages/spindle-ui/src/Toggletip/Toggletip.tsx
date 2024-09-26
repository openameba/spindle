/// <reference types="react/canary" />

import React, { useCallback, useEffect, useRef, useState } from 'react';

declare module 'react' {
  interface CSSProperties {
    anchorName?: string;
    positionAnchor?: string;
  }
}

type Variant =
  | 'text'
  | 'textWithIcon'
  | 'headWithIcon'
  | 'headWithIconAndCaption';

type Position =
  | 'topLeft'
  | 'topCenter'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomCenter'
  | 'bottomRight';

interface DefaultProps {
  children: React.ReactNode;
}

interface BodyProps extends DefaultProps {
  id: string;
  onClose?: (state: 'open' | 'closed') => void;
  open?: boolean;
  popover?: 'auto' | 'manual';
  position?: Position;
  triggerRef: React.RefObject<HTMLButtonElement>;
  variant?: Variant;
}

export const BLOCK_NAME = 'spui-Toggletip';

const Caption = ({ children }: DefaultProps) => {
  return <p className={`${BLOCK_NAME}-caption`}>{children}</p>;
};

const Frame = ({ children }: DefaultProps) => {
  return <div className={`${BLOCK_NAME}`}>{children}</div>;
};

const Body = ({
  children,
  onClose,
  open,
  popover = 'auto',
  position = 'topCenter',
  variant = 'text',
  triggerRef,
}: BodyProps) => {
  const menuEl = useRef<HTMLDivElement>(null);
  const [anchorName, setAnchorName] = useState('');

  // TODO: close with menu item click
  // NOTE: esc, backdrop click do not fire close event
  const handleClose = useCallback(
    (event: React.ToggleEvent) => {
      onClose?.(event.newState);
    },
    [onClose],
  );

  useEffect(() => {
    // triggerRef is for backword compatibility, id string is more reliable
    if (triggerRef.current) {
      setAnchorName(triggerRef.current.id);
    }
  }, [triggerRef]);

  useEffect(() => {
    // initial state
    if (open) {
      // @ts-ignore
      menuEl.current?.showPopover();
    } else {
      // @ts-ignore
      menuEl.current?.hidePopover();
    }
  }, [menuEl, open]);

  return (
    <div
      className={[
        `${BLOCK_NAME}-menu`,
        `${BLOCK_NAME}-menu--${variant}`,
        `${BLOCK_NAME}-menu--${position}`,
      ]
        .filter(Boolean)
        .join(' ')}
      ref={menuEl}
      role="menu"
      // eslint-disable-next-line react/no-unknown-property
      popover={popover}
      style={{ positionAnchor: `--${anchorName}` }}
      onToggle={handleClose}
    >
      <div
        className={[`${BLOCK_NAME}-inner`, `${BLOCK_NAME}-inner--${position}`]
          .filter(Boolean)
          .join(' ')}
      >
        {children}
      </div>
    </div>
  );
};

const Label = ({ children }: DefaultProps) => {
  return <p className={`${BLOCK_NAME}-label`}>{children}</p>;
};

export const Toggletip = {
  Caption,
  Frame,
  Body,
  Label,
};

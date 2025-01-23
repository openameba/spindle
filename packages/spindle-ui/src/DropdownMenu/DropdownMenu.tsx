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
  | 'rightTop'
  | 'rightCenter'
  | 'rightBottom'
  | 'bottomLeft'
  | 'bottomCenter'
  | 'bottomRight'
  | 'leftTop'
  | 'leftCenter'
  | 'leftBottom';

interface DefaultProps {
  children: React.ReactNode;
}

interface ListItemProps extends DefaultProps {
  icon?: React.ReactNode;
  onClick: () => void;
}

interface ListProps extends DefaultProps {
  id: string;
  onClose?: (state: 'open' | 'closed') => void;
  open?: boolean;
  popover?: 'auto' | 'manual';
  position?: Position;
  triggerRef: React.RefObject<HTMLButtonElement>;
  variant?: Variant;
}

export const BLOCK_NAME = 'spui-DropdownMenu';

const Caption = ({ children }: DefaultProps) => {
  return <p className={`${BLOCK_NAME}-caption`}>{children}</p>;
};

const Frame = ({ children }: DefaultProps) => {
  return <div className={`${BLOCK_NAME}`}>{children}</div>;
};

const List = ({
  children,
  id,
  onClose,
  open,
  popover = 'auto',
  position = 'leftTop',
  variant = 'text',
  triggerRef,
}: ListProps) => {
  const menuEl = useRef<HTMLUListElement & { showPopover: () => void }>(null);
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
      menuEl.current?.showPopover();
    }
  }, [menuEl, open]);

  return (
    <ul
      id={id}
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
      {children}
    </ul>
  );
};

const ListItem = ({ children, icon, onClick }: ListItemProps) => {
  return (
    <li className={`${BLOCK_NAME}-menuItem`} role="menuItem">
      <button className={`${BLOCK_NAME}-menuButton`} onClick={onClick}>
        {icon && <div className={`${BLOCK_NAME}-iconContainer`}>{icon}</div>}
        <div className={`${BLOCK_NAME}-textContainer`}>{children}</div>
      </button>
    </li>
  );
};

const Title = ({ children }: DefaultProps) => {
  return <p className={`${BLOCK_NAME}-title`}>{children}</p>;
};

export const DropdownMenu = {
  Caption,
  Frame,
  List,
  ListItem,
  Title,
};

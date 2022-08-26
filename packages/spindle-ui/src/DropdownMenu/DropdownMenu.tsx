import React, { useEffect, useCallback, useRef, useState } from 'react';

type Variant =
  | 'text'
  | 'textWithIcon'
  | 'headWithIcon'
  | 'headWithIconAndCaption';

interface DefaultProps {
  children: React.ReactNode;
}

interface ListItemProps extends DefaultProps {
  icon?: React.ReactNode;
  onClick: () => void;
}

interface ListProps extends DefaultProps {
  id?: string;
  onClose: () => void;
  open: boolean;
  position?: 'left' | 'right';
  triggerRef: React.RefObject<HTMLButtonElement>;
  variant?: Variant;
}

export const BLOCK_NAME = 'spui-DropdownMenu';
const FADE_IN_ANIMATION = 'spui-DropdownMenu-fade-in';
const CLOSE_KEY_LIST = ['Escape', 'Esc'];

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
  position = 'left',
  triggerRef,
  variant = 'text',
}: ListProps) => {
  const menuEl = useRef<HTMLUListElement>(null);
  const [fadeOut, setFadeOut] = useState(false);

  const onClickBody = useCallback(
    (e: MouseEvent) => {
      if (!open) return;
      if (triggerRef.current && e.composedPath().includes(triggerRef.current))
        return;
      const menuEl = document.querySelector(`.${BLOCK_NAME}-menu`);
      if (menuEl && e.composedPath().includes(menuEl)) return;

      setFadeOut(true);
    },
    [open, setFadeOut, triggerRef],
  );

  const onClickCloser = useCallback(() => {
    setFadeOut(true);
    triggerRef.current?.focus();
  }, [setFadeOut, triggerRef]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (CLOSE_KEY_LIST.includes(e.key)) {
        onClickCloser();
      }
    },
    [onClickCloser],
  );

  const handleAnimationEnd = useCallback(
    (event: AnimationEvent) => {
      if (event.animationName === FADE_IN_ANIMATION) return;

      onClose();
      setFadeOut(false);
    },
    [onClose, setFadeOut],
  );

  useEffect(() => {
    const menu = menuEl.current;
    menu?.addEventListener('animationend', handleAnimationEnd, false);

    return () =>
      menu?.removeEventListener('animationend', handleAnimationEnd, false);
  }, [menuEl, handleAnimationEnd]);

  useEffect(() => {
    window.addEventListener('click', onClickBody, false);

    return () => {
      window.removeEventListener('click', onClickBody, false);
    };
  }, [onClickBody]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  if (!open) {
    return <></>;
  }

  return (
    <ul
      id={id}
      onClick={onClickCloser}
      className={[
        `${BLOCK_NAME}-menu`,
        `${BLOCK_NAME}-menu--${variant}`,
        position === 'right' && `${BLOCK_NAME}-menu--right`,
        fadeOut && 'is-fade-out',
      ]
        .filter(Boolean)
        .join(' ')}
      ref={menuEl}
      role="menu"
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

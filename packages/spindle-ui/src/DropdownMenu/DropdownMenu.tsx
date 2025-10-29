import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

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
  id?: string;
  onClose: () => void;
  open: boolean;
  position?: Position;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
  variant?: Variant;
}

export const BLOCK_NAME = 'spui-DropdownMenu';
const FADE_IN_ANIMATION = 'spui-DropdownMenu-fade-in';
const CLOSE_KEY_LIST = ['ESCAPE', 'ESC'];
const MENU_WIDTH = 256;

const CloseMenuContext = React.createContext<(() => void) | null>(null);

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
  position = 'leftTop',
  triggerRef,
  variant = 'text',
}: ListProps) => {
  const menuEl = useRef<HTMLDivElement>(null);
  const [fadeOut, setFadeOut] = useState(false);
  const [triggerHeight, setTriggerHeight] = useState(0);
  const [triggerWidth, setTriggerWidth] = useState(0);
  const [menuHeight, setMenuHeight] = useState(0);

  const onClickBody = useCallback(
    (e: MouseEvent) => {
      if (!open) return;
      if (triggerRef.current && e.composedPath().includes(triggerRef.current))
        return;
      const menuEl = document.querySelector(`.${BLOCK_NAME}-menu`);
      if (menuEl && e.composedPath().includes(menuEl)) return;

      setFadeOut(true);
    },
    [open, triggerRef],
  );

  const onClickCloser = useCallback(() => {
    setFadeOut(true);
    triggerRef.current?.focus();
  }, [triggerRef]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (CLOSE_KEY_LIST.includes(e.key.toUpperCase())) {
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
    [onClose],
  );

  // Triggerボタンの縦横幅を取得
  useEffect(() => {
    if (!triggerRef.current) return;

    const { height, width } = triggerRef.current.getBoundingClientRect();
    setTriggerHeight(height);
    setTriggerWidth(width);
  }, [triggerRef]);

  // Menuの縦幅を取得
  useEffect(() => {
    if (!open) return;
    if (!menuEl.current) return;

    const { height } = menuEl.current.getBoundingClientRect();
    setMenuHeight(height);
  }, [open]);

  useEffect(() => {
    const menu = menuEl.current;
    if (open) {
      menu?.addEventListener('animationend', handleAnimationEnd, false);
    }

    return () =>
      menu?.removeEventListener('animationend', handleAnimationEnd, false);
  }, [handleAnimationEnd, open]);

  useEffect(() => {
    if (open) {
      window.addEventListener('click', onClickBody, false);
    }

    return () => window.removeEventListener('click', onClickBody, false);
  }, [onClickBody, open]);

  useEffect(() => {
    if (open) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown, open]);

  if (!open) {
    return null;
  }

  let top: string | undefined;
  let bottom: string | undefined;
  let left: string | undefined;
  if (['topLeft', 'topCenter', 'topRight'].includes(position)) {
    bottom = `${triggerHeight}px`;
  }
  if (['topCenter', 'bottomCenter'].includes(position)) {
    left = `-${(MENU_WIDTH - triggerWidth) / 2}px`;
  }
  if (['rightCenter', 'leftCenter'].includes(position)) {
    top = `-${(menuHeight - triggerHeight) / 2}px`;
  }
  if (['bottomLeft', 'bottomCenter', 'bottomRight'].includes(position)) {
    top = `${triggerHeight}px`;
  }

  return (
    <CloseMenuContext.Provider value={onClickCloser}>
      <div
        id={id}
        className={[
          `${BLOCK_NAME}-menu`,
          `${BLOCK_NAME}-menu--${variant}`,
          `${BLOCK_NAME}-menu--${position}`,
          fadeOut && 'is-fade-out',
        ]
          .filter(Boolean)
          .join(' ')}
        ref={menuEl}
        role="menu"
        style={{ bottom, left, top }}
      >
        {children}
      </div>
    </CloseMenuContext.Provider>
  );
};

const ListItem = ({ children, icon, onClick }: ListItemProps) => {
  const closeMenu = useContext(CloseMenuContext);
  return (
    <div className={`${BLOCK_NAME}-menuItem`}>
      <button
        className={`${BLOCK_NAME}-menuButton`}
        type="button"
        role="menuitem"
        onClick={() => {
          onClick();
          closeMenu?.();
        }}
      >
        {icon && <div className={`${BLOCK_NAME}-iconContainer`}>{icon}</div>}
        <div className={`${BLOCK_NAME}-textContainer`}>{children}</div>
      </button>
    </div>
  );
};

// Storybookでのpositionプロパティのバリエーション確認用
const Position = ({
  children,
  position = 'leftTop',
  triggerRef,
}: Omit<ListProps, 'onClose' | 'open'>) => {
  const menuEl = useRef<HTMLDivElement>(null);
  const [triggerHeight, setTriggerHeight] = useState(0);
  const [triggerWidth, setTriggerWidth] = useState(0);
  const [menuHeight, setMenuHeight] = useState(0);

  // Triggerボタンの縦横幅を取得
  useEffect(() => {
    if (!triggerRef.current) return;

    const { height, width } = triggerRef.current.getBoundingClientRect();
    setTriggerHeight(height);
    setTriggerWidth(width);
  }, [triggerRef]);

  // Menuの縦幅を取得
  useEffect(() => {
    if (!menuEl.current) return;

    const { height } = menuEl.current.getBoundingClientRect();
    setMenuHeight(height);
  }, []);

  let top: string | undefined;
  let bottom: string | undefined;
  let left: string | undefined;
  if (['topLeft', 'topCenter', 'topRight'].includes(position)) {
    bottom = `${triggerHeight}px`;
  }
  if (['topCenter', 'bottomCenter'].includes(position)) {
    left = `-${(MENU_WIDTH - triggerWidth) / 2}px`;
  }
  if (['rightCenter', 'leftCenter'].includes(position)) {
    top = `-${(menuHeight - triggerHeight) / 2}px`;
  }
  if (['bottomLeft', 'bottomCenter', 'bottomRight'].includes(position)) {
    top = `${triggerHeight}px`;
  }

  return (
    <div
      className={[
        `${BLOCK_NAME}-menu`,
        `${BLOCK_NAME}-menu--text`,
        `${BLOCK_NAME}-menu--${position}`,
      ]
        .filter(Boolean)
        .join(' ')}
      ref={menuEl}
      role="menu"
      style={{ bottom, left, top }}
    >
      {children}
    </div>
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
  Position,
  Title,
};

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import Cross from '../Icon/Cross';
import { IconButton } from '../IconButton';

type Direction = 'top' | 'right' | 'bottom' | 'left';
type Position = 'edgeStart' | 'start' | 'center' | 'end' | 'edgeEnd';
type Variant = 'information' | 'confirmation' | 'error';

type FrameProps = {
  children: React.ReactNode;
  defaultOpen?: boolean;
  onClose?: () => void;
  variant?: Variant;
  direction?: Direction;
  position?: Position;
};

type TriggerProps = {
  ref: React.RefCallback<HTMLElement>;
  'aria-describedby': string;
  'aria-expanded'?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onClick?: () => void;
};

type TriggerComponentProps = {
  children: (props: TriggerProps) => React.ReactNode;
};

type ContentProps = {
  children?: React.ReactNode;
};

type TooltipContextValue = {
  tooltipId: string;
  isOpen: boolean;
  isInitialOpen: boolean;
  isTouchDevice: boolean;
  setIsOpen: (open: boolean) => void;
  handleClose: () => void;
  cancelClose: () => void;
  triggerRef: React.RefObject<HTMLElement | null>;
  triggerWidth: number;
  triggerHeight: number;
  variant: Variant;
  direction: Direction;
  position: Position;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
  handleFocus: () => void;
  handleBlur: () => void;
  handleClick: () => void;
};

const BLOCK_NAME = 'spui-Tooltip';
const FADE_IN_ANIMATION = 'spui-Tooltip-fade-in';
const CLOSE_KEY_LIST = ['ESCAPE', 'ESC'];

const TooltipContext = createContext<TooltipContextValue | null>(null);

const useTooltipContext = () => {
  const context = useContext(TooltipContext);
  if (!context) {
    throw new Error('Tooltip components must be used within Tooltip.Frame');
  }
  return context;
};

const Frame = ({
  children,
  defaultOpen = false,
  onClose,
  variant = 'information',
  direction = 'top',
  position = 'center',
}: FrameProps) => {
  const tooltipId = useId();
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [isInitialOpen, setIsInitialOpen] = useState(defaultOpen);
  const triggerRef = useRef<HTMLElement | null>(null);
  const [triggerWidth, setTriggerWidth] = useState(0);
  const [triggerHeight, setTriggerHeight] = useState(0);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  useLayoutEffect(() => {
    if (!triggerRef.current) return;
    const { width, height } = triggerRef.current.getBoundingClientRect();
    setTriggerWidth(width);
    setTriggerHeight(height);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    setIsInitialOpen(false);
    onClose?.();
  }, [onClose]);

  const cancelClose = useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  }, []);

  const scheduleClose = useCallback(() => {
    if (isTouchDevice || isInitialOpen) return;
    closeTimeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 100);
  }, [isTouchDevice, isInitialOpen]);

  const handleMouseEnter = useCallback(() => {
    if (isTouchDevice || isInitialOpen) return;
    cancelClose();
    if (!triggerRef.current) return;
    const { width, height } = triggerRef.current.getBoundingClientRect();
    setTriggerWidth(width);
    setTriggerHeight(height);
    setIsOpen(true);
  }, [isTouchDevice, isInitialOpen, cancelClose]);

  const handleMouseLeave = useCallback(() => {
    scheduleClose();
  }, [scheduleClose]);

  const handleFocus = useCallback(() => {
    if (isTouchDevice || isInitialOpen) return;
    cancelClose();
    if (!triggerRef.current) return;
    const { width, height } = triggerRef.current.getBoundingClientRect();
    setTriggerWidth(width);
    setTriggerHeight(height);
    setIsOpen(true);
  }, [isTouchDevice, isInitialOpen, cancelClose]);

  const handleBlur = useCallback(() => {
    scheduleClose();
  }, [scheduleClose]);

  const handleClick = useCallback(() => {
    if (!isTouchDevice || isInitialOpen) return;
    if (!triggerRef.current) return;
    const { width, height } = triggerRef.current.getBoundingClientRect();
    setTriggerWidth(width);
    setTriggerHeight(height);
    setIsOpen((prev) => !prev);
  }, [isTouchDevice, isInitialOpen]);


  const contextValue: TooltipContextValue = {
    tooltipId,
    isOpen,
    isInitialOpen,
    isTouchDevice,
    setIsOpen,
    handleClose,
    cancelClose,
    triggerRef,
    triggerWidth,
    triggerHeight,
    variant,
    direction,
    position,
    handleMouseEnter,
    handleMouseLeave,
    handleFocus,
    handleBlur,
    handleClick,
  };

  return (
    <TooltipContext.Provider value={contextValue}>
      <div className={BLOCK_NAME}>{children}</div>
    </TooltipContext.Provider>
  );
};

const Trigger = ({ children }: TriggerComponentProps) => {
  const {
    tooltipId,
    isOpen,
    isInitialOpen,
    triggerRef,
    handleMouseEnter,
    handleMouseLeave,
    handleFocus,
    handleBlur,
    handleClick,
  } = useTooltipContext();

  const triggerProps: TriggerProps = {
    ref: (node) => {
      triggerRef.current = node;
    },
    'aria-describedby': tooltipId,
    ...(isInitialOpen ? { 'aria-expanded': isOpen } : {}),
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onClick: handleClick,
  };

  return children(triggerProps);
};

const Content = ({ children }: ContentProps) => {
  const {
    tooltipId,
    isOpen,
    isInitialOpen,
    isTouchDevice,
    handleClose,
    cancelClose,
    handleMouseLeave,
    triggerRef,
    triggerWidth,
    triggerHeight,
    variant,
    direction,
    position,
  } = useTooltipContext();

  const contentRef = useRef<HTMLDivElement>(null);
  const [fadeOut, setFadeOut] = useState(false);

  const handleClickOutsideRef = useRef<((e: MouseEvent) => void) | null>(null);
  const handleKeyDownRef = useRef<((e: KeyboardEvent) => void) | null>(null);

  useEffect(() => {
    handleClickOutsideRef.current = (e: MouseEvent) => {
      if (!isOpen || !isTouchDevice || isInitialOpen) return;

      const content = contentRef.current;
      const trigger = triggerRef.current;
      const target = e.target as Node;

      if (
        content &&
        !content.contains(target) &&
        trigger &&
        !trigger.contains(target)
      ) {
        setFadeOut(true);
      }
    };
  }, [isOpen, isTouchDevice, isInitialOpen, triggerRef]);

  useEffect(() => {
    handleKeyDownRef.current = (e: KeyboardEvent) => {
      if (!CLOSE_KEY_LIST.includes(e.key.toUpperCase())) return;

      if (isInitialOpen && isOpen) {
        const content = contentRef.current;
        if (
          content &&
          (content.contains(document.activeElement) ||
            document.activeElement === content)
        ) {
          e.preventDefault();
          handleClose();
        }
      }
    };
  }, [isInitialOpen, isOpen, handleClose]);

  const handleAnimationEnd = useCallback(
    (event: AnimationEvent) => {
      if (event.animationName === FADE_IN_ANIMATION) return;

      handleClose();
      setFadeOut(false);
    },
    [handleClose],
  );

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      handleClickOutsideRef.current?.(e);
    };

    const handleKey = (e: KeyboardEvent) => {
      handleKeyDownRef.current?.(e);
    };

    if (isOpen) {
      window.addEventListener('click', handleClick);
      window.addEventListener('keydown', handleKey);
    }

    return () => {
      window.removeEventListener('click', handleClick);
      window.removeEventListener('keydown', handleKey);
    };
  }, [isOpen]);

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    content.addEventListener('animationend', handleAnimationEnd);
    return () =>
      content.removeEventListener('animationend', handleAnimationEnd);
  }, [handleAnimationEnd]);

  if (!isOpen) {
    return null;
  }

  const role = isInitialOpen ? 'group' : 'tooltip';
  const showCloseButton = isInitialOpen;

  return (

    // biome-ignore lint/a11y/noStaticElementInteractions: non-interactive wrapper needs mouse handlers for timeout control
<div
      id={tooltipId}
      ref={contentRef}
      className={[
        `${BLOCK_NAME}-frame`,
        `${BLOCK_NAME}-frame--${variant}`,
        `${BLOCK_NAME}-frame--${direction}`,
        `${BLOCK_NAME}-frame--${position}`,
        fadeOut && 'is-fade-out',
      ]
        .filter(Boolean)
        .join(' ')}
      role={role}
      onMouseEnter={isInitialOpen ? undefined : cancelClose}
      onMouseLeave={isInitialOpen ? undefined : handleMouseLeave}
      style={
        {
          '--Tooltip-trigger-width': `${triggerWidth}px`,
          '--Tooltip-trigger-height': `${triggerHeight}px`,
        } as React.CSSProperties
      }
    >
      <div className={`${BLOCK_NAME}-content`}>
        <div className={`${BLOCK_NAME}-text`}>{children}</div>
        {showCloseButton && (
          <div className={`${BLOCK_NAME}-closeButton`}>
            <IconButton
              size="exSmall"
              variant="neutral"
              aria-label="閉じる"
              onClick={handleClose}
            >
              <Cross aria-hidden="true" />
            </IconButton>
          </div>
        )}
      </div>
    </div>
  );
};

export const Tooltip = {
  Frame,
  Trigger,
  Content,
};

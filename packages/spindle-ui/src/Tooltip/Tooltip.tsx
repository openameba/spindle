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
import { createGraceArea, isPointInPolygon, type Polygon } from './graceArea';

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
  onMouseEnter: (e: React.MouseEvent) => void;
  onFocus: () => void;
  onBlur: () => void;
  onPointerDown: (e: React.PointerEvent) => void;
  onPointerUp: (e: React.PointerEvent) => void;
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
  setIsOpen: (open: boolean) => void;
  handleClose: () => void;
  triggerRef: React.RefObject<HTMLElement | null>;
  contentRef: React.RefObject<HTMLElement | null>;
  triggerWidth: number;
  triggerHeight: number;
  variant: Variant;
  direction: Direction;
  position: Position;
  handleMouseEnter: (e: React.MouseEvent) => void;
  handleFocus: () => void;
  handleBlur: () => void;
  handlePointerDown: (e: React.PointerEvent) => void;
  handleTriggerPointerUp: (e: React.PointerEvent) => void;
  isPointerInTransitRef: React.RefObject<boolean>;
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
  const contentRef = useRef<HTMLElement | null>(null);
  const [triggerWidth, setTriggerWidth] = useState(0);
  const [triggerHeight, setTriggerHeight] = useState(0);

  const isPointerInTransitRef = useRef(false);
  // pointerdown中はfocusイベントを無視
  const isPointerDownRef = useRef(false);
  // pointerdownした要素を記録（キャンセル判定用）
  const pointerDownTargetRef = useRef<EventTarget | null>(null);

  const handlePointerUp = useCallback(() => {
    isPointerDownRef.current = false;
    pointerDownTargetRef.current = null;
  }, []);

  useLayoutEffect(() => {
    if (!triggerRef.current) return;
    const { width, height } = triggerRef.current.getBoundingClientRect();
    setTriggerWidth(width);
    setTriggerHeight(height);
  }, []);

  useEffect(() => {
    return () => document.removeEventListener('pointerup', handlePointerUp);
  }, [handlePointerUp]);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    setIsInitialOpen(false);
    onClose?.();
  }, [onClose]);

  const openTooltip = useCallback(() => {
    if (!triggerRef.current) return;
    const { width, height } = triggerRef.current.getBoundingClientRect();
    setTriggerWidth(width);
    setTriggerHeight(height);
    setIsOpen(true);
  }, []);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      isPointerDownRef.current = true;
      pointerDownTargetRef.current = e.currentTarget;
      document.addEventListener('pointerup', handlePointerUp, { once: true });
    },
    [handlePointerUp],
  );

  const handleTriggerPointerUp = useCallback(
    (e: React.PointerEvent) => {
      // タッチデバイスでpointerdownと同じ要素でpointerupした場合のみトグル
      if (
        e.pointerType === 'touch' &&
        !isInitialOpen &&
        pointerDownTargetRef.current === e.currentTarget
      ) {
        if (!triggerRef.current) return;
        const { width, height } = triggerRef.current.getBoundingClientRect();
        setTriggerWidth(width);
        setTriggerHeight(height);
        setIsOpen((prev) => !prev);
      }
    },
    [isInitialOpen],
  );

  // ポインティングデバイス: hover
  const handleMouseEnter = useCallback(
    (_e: React.MouseEvent) => {
      if (isPointerDownRef.current) return;
      if (isInitialOpen) return;
      if (isPointerInTransitRef.current) return;
      openTooltip();
    },
    [isInitialOpen, openTooltip],
  );

  // ポインティングデバイス: focus（pointerdown中は無視）
  const handleFocus = useCallback(() => {
    if (isPointerDownRef.current) return;
    if (isInitialOpen) return;
    openTooltip();
  }, [isInitialOpen, openTooltip]);

  // ポインティングデバイス: blur
  const handleBlur = useCallback(() => {
    if (isPointerDownRef.current) return;
    if (isInitialOpen) return;
    setIsOpen(false);
  }, [isInitialOpen]);

  const contextValue: TooltipContextValue = {
    tooltipId,
    isOpen,
    isInitialOpen,
    setIsOpen,
    handleClose,
    triggerRef,
    contentRef,
    triggerWidth,
    triggerHeight,
    variant,
    direction,
    position,
    handleMouseEnter,
    handleFocus,
    handleBlur,
    handlePointerDown,
    handleTriggerPointerUp,
    isPointerInTransitRef,
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
    handleFocus,
    handleBlur,
    handlePointerDown,
    handleTriggerPointerUp,
  } = useTooltipContext();

  const triggerProps: TriggerProps = {
    ref: (node) => {
      triggerRef.current = node;
    },
    'aria-describedby': tooltipId,
    ...(isInitialOpen ? { 'aria-expanded': isOpen } : {}),
    onMouseEnter: handleMouseEnter,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onPointerDown: handlePointerDown,
    onPointerUp: handleTriggerPointerUp,
  };

  return children(triggerProps);
};

const Content = ({ children }: ContentProps) => {
  const {
    tooltipId,
    isOpen,
    isInitialOpen,
    handleClose,
    triggerRef,
    contentRef,
    triggerWidth,
    triggerHeight,
    variant,
    direction,
    position,
    setIsOpen,
    isPointerInTransitRef,
  } = useTooltipContext();

  const localContentRef = useRef<HTMLDivElement>(null);
  const [fadeOut, setFadeOut] = useState(false);
  const [graceArea, setGraceArea] = useState<Polygon | null>(null);
  const prevIsOpenRef = useRef(isOpen);

  useEffect(() => {
    contentRef.current = localContentRef.current;
  });

  // 再表示時にfadeOutをリセット
  useEffect(() => {
    if (isOpen && !prevIsOpenRef.current) {
      setFadeOut(false);
    }
    prevIsOpenRef.current = isOpen;
  }, [isOpen]);

  // Grace area: triggerとtooltip間のポインター移動を許容
  const handleRemoveGraceArea = useCallback(() => {
    setGraceArea(null);
    isPointerInTransitRef.current = false;
  }, [isPointerInTransitRef]);

  const handleCreateGraceArea = useCallback(
    (event: PointerEvent, targetElement: HTMLElement) => {
      const currentTarget = event.currentTarget as HTMLElement;
      if (!currentTarget) return;

      const exitPoint = { x: event.clientX, y: event.clientY };
      const polygon = createGraceArea(exitPoint, currentTarget, targetElement);
      setGraceArea(polygon);
      isPointerInTransitRef.current = true;
    },
    [isPointerInTransitRef],
  );

  // pointerleaveでgrace areaを生成
  useEffect(() => {
    if (isInitialOpen || !isOpen) return;

    const trigger = triggerRef.current;
    const content = localContentRef.current;
    if (!trigger || !content) return;

    const handleTriggerLeave = (event: PointerEvent) => {
      if (event.pointerType === 'touch') return;
      handleCreateGraceArea(event, content);
    };

    const handleContentLeave = (event: PointerEvent) => {
      if (event.pointerType === 'touch') return;
      handleCreateGraceArea(event, trigger);
    };

    trigger.addEventListener('pointerleave', handleTriggerLeave);
    content.addEventListener('pointerleave', handleContentLeave);

    return () => {
      trigger.removeEventListener('pointerleave', handleTriggerLeave);
      content.removeEventListener('pointerleave', handleContentLeave);
    };
  }, [triggerRef, isOpen, isInitialOpen, handleCreateGraceArea]);

  // grace area内のポインター移動を追跡
  useEffect(() => {
    if (!graceArea || isInitialOpen) return;

    const trigger = triggerRef.current;
    const content = localContentRef.current;

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType === 'touch') return;

      const target = event.target as HTMLElement;
      const pointerPosition = { x: event.clientX, y: event.clientY };
      const hasEnteredTarget =
        trigger?.contains(target) || content?.contains(target);
      const isPointerOutsideGraceArea = !isPointInPolygon(
        pointerPosition,
        graceArea,
      );

      if (hasEnteredTarget) {
        handleRemoveGraceArea();
      } else if (isPointerOutsideGraceArea) {
        handleRemoveGraceArea();
        setIsOpen(false);
      }
    };

    document.addEventListener('pointermove', handlePointerMove);
    return () => document.removeEventListener('pointermove', handlePointerMove);
  }, [graceArea, triggerRef, isInitialOpen, setIsOpen, handleRemoveGraceArea]);

  useEffect(() => {
    if (!isOpen) {
      handleRemoveGraceArea();
    }
  }, [isOpen, handleRemoveGraceArea]);

  // タッチデバイス: 外部タップで閉じる
  useEffect(() => {
    if (!isOpen || isInitialOpen) return;

    const handlePointerDownOutside = (e: PointerEvent) => {
      if (e.pointerType !== 'touch') return;

      const content = localContentRef.current;
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

    window.addEventListener('pointerdown', handlePointerDownOutside);
    return () =>
      window.removeEventListener('pointerdown', handlePointerDownOutside);
  }, [isOpen, isInitialOpen, triggerRef]);

  // Escapeキーで閉じる
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!CLOSE_KEY_LIST.includes(e.key.toUpperCase())) return;

      if (isInitialOpen) {
        const content = localContentRef.current;
        if (
          content &&
          (content.contains(document.activeElement) ||
            document.activeElement === content)
        ) {
          e.preventDefault();
          handleClose();
        }
      } else {
        e.preventDefault();
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, isInitialOpen, handleClose, setIsOpen]);

  const handleAnimationEnd = useCallback(
    (event: AnimationEvent) => {
      if (event.animationName === FADE_IN_ANIMATION) return;
      handleClose();
      setFadeOut(false);
    },
    [handleClose],
  );

  useEffect(() => {
    const content = localContentRef.current;
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
    <div
      id={tooltipId}
      ref={localContentRef}
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
          <button
            type="button"
            className={`${BLOCK_NAME}-closeButton`}
            aria-label="閉じる"
            onClick={handleClose}
          >
            <Cross
              aria-hidden="true"
              className={`${BLOCK_NAME}-closeButtonIcon`}
            />
          </button>
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

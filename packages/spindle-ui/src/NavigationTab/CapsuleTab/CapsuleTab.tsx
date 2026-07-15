import React, {
  createRef,
  type RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import ChevronLeftBold from '../../Icon/ChevronLeftBold';
import ChevronRightBold from '../../Icon/ChevronRightBold';

type Option = {
  label: string;
  id: string;
};

type Variant = 'fixed' | 'scrollable';

type Props = {
  defaultSelectedId: string;
  options: Option[];
  hasBorder?: boolean;
  variant?: Variant;
  onClick?: (
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.KeyboardEvent<HTMLButtonElement>,
    id: string,
  ) => void;
};

const BLOCK_NAME = 'spui-CapsuleTab';
const SCROLL_DISTANCE = 150;

export const CapsuleTab: React.FC<Props> = ({
  defaultSelectedId,
  options,
  hasBorder = false,
  variant = 'fixed',
  onClick,
}) => {
  const [selectedId, setSelectedId] = useState(defaultSelectedId);
  const [showPrevButton, setShowPrevButton] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);

  const buttonsRef = useRef<RefObject<HTMLButtonElement | null>[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback((direction: 'prev' | 'next') => {
    const containerElement = containerRef.current;
    if (!containerElement) {
      return;
    }

    const scrollDistance =
      direction === 'next' ? SCROLL_DISTANCE : -SCROLL_DISTANCE;
    containerElement.scrollLeft = containerElement.scrollLeft + scrollDistance;
  }, []);

  const handleClick = useCallback(
    (
      e:
        | React.MouseEvent<HTMLButtonElement>
        | React.KeyboardEvent<HTMLButtonElement>,
      id: string,
      index: number,
    ) => {
      // 既に選択中の項目に対してクリックした場合は何もしない
      if (id === selectedId) {
        return;
      }

      setSelectedId(id);

      // 選択した項目が中央に来るようにスクロールする
      if (variant === 'scrollable') {
        buttonsRef.current[index]?.current?.scrollIntoView?.({
          block: 'nearest',
          inline: 'center',
        });
      }

      if (typeof onClick === 'function') {
        onClick(e, id);
      }
    },
    [onClick, selectedId, variant],
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
      const totalLength = options.length;

      switch (e.key) {
        case 'ArrowLeft': {
          // 基本的には1つ前の要素に移動。ただし、既に先頭の要素にいる場合はリストの最後尾に移動
          const prevButtonIndex = index - 1 < 0 ? totalLength - 1 : index - 1;
          const prevButtonRef = buttonsRef.current[prevButtonIndex];
          prevButtonRef.current?.focus();
          handleClick(e, options[prevButtonIndex].id, prevButtonIndex);
          break;
        }
        case 'ArrowRight': {
          // 基本的には1つ後の要素に移動。ただし、既に最後尾の要素にいる場合はリストの先頭に移動
          const nextButtonIndex = index + 1 >= totalLength ? 0 : index + 1;
          const nextButtonRef = buttonsRef.current[nextButtonIndex];
          nextButtonRef.current?.focus();
          handleClick(e, options[nextButtonIndex].id, nextButtonIndex);
          break;
        }
        case 'Enter': {
          const targetButton = buttonsRef.current[index].current;
          // 既に選択中の項目に対してEnterを押下した場合は無効にする
          if (targetButton?.getAttribute('aria-selected') === 'true') {
            e.preventDefault();
          }
          break;
        }
      }
    },
    [options, handleClick],
  );

  useEffect(() => {
    buttonsRef.current = options.map(
      (_, index) => buttonsRef.current[index] ?? createRef<HTMLButtonElement>(),
    );
  }, [options]);

  useEffect(() => {
    if (variant !== 'scrollable') {
      return;
    }
    const containerElement = containerRef.current;
    if (!containerElement) {
      return;
    }

    const updateDisplayedButton = () => {
      setShowPrevButton(containerElement.scrollLeft > 0);
      setShowNextButton(
        containerElement.scrollWidth >
          Math.ceil(containerElement.clientWidth + containerElement.scrollLeft),
      );
    };

    updateDisplayedButton();
    window.addEventListener('resize', updateDisplayedButton);
    containerElement.addEventListener('scroll', updateDisplayedButton);

    return () => {
      window.removeEventListener('resize', updateDisplayedButton);
      containerElement.removeEventListener('scroll', updateDisplayedButton);
    };
  }, [variant]);

  if (options.length === 0) {
    return null;
  }

  return (
    <div
      className={[
        BLOCK_NAME,
        `${BLOCK_NAME}--${variant}`,
        hasBorder && `${BLOCK_NAME}--border`,
      ]
        .filter(Boolean)
        .join(' ')
        .trim()}
    >
      {variant === 'scrollable' && (
        <div
          className={[
            `${BLOCK_NAME}-arrow`,
            `${BLOCK_NAME}-arrow--left`,
            showPrevButton && 'is-showed',
          ]
            .filter(Boolean)
            .join(' ')
            .trim()}
        >
          <button
            className={`${BLOCK_NAME}-arrowButton`}
            type="button"
            onClick={() => handleScroll('prev')}
          >
            <ChevronLeftBold aria-label="左に移動" height={16} width={16} />
          </button>
        </div>
      )}

      <div
        className={`${BLOCK_NAME}-container`}
        role="tablist"
        ref={containerRef}
      >
        {options.map((option, index) => {
          const { label, id } = option;
          const isSelected = id === selectedId;

          return (
            <button
              aria-controls={`${id}-tabpanel`}
              aria-selected={isSelected}
              className={`${BLOCK_NAME}-button`}
              key={id}
              id={id}
              tabIndex={isSelected ? 0 : -1}
              type="button"
              ref={buttonsRef.current[index]}
              role="tab"
              onClick={(e) => handleClick(e, id, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            >
              <span className={`${BLOCK_NAME}-label`}>{label}</span>
            </button>
          );
        })}
      </div>

      {variant === 'scrollable' && (
        <div
          className={[
            `${BLOCK_NAME}-arrow`,
            `${BLOCK_NAME}-arrow--right`,
            showNextButton && 'is-showed',
          ]
            .filter(Boolean)
            .join(' ')
            .trim()}
        >
          <button
            className={`${BLOCK_NAME}-arrowButton`}
            type="button"
            onClick={() => handleScroll('next')}
          >
            <ChevronRightBold aria-label="右に移動" height={16} width={16} />
          </button>
        </div>
      )}
    </div>
  );
};

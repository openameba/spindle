import React, {
  createRef,
  type RefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

type Option = {
  id: string;
  label: string;
};

type Size = 'medium' | 'large';

type Props = {
  selectedId: string;
  options: Option[];
  onClick?: (event: React.MouseEvent<HTMLButtonElement>, id: string) => void;
  size?: Size;
};

const BLOCK_NAME = 'spui-SegmentedControl';

export const SegmentedControl: React.FC<Props> = ({
  selectedId: userSelectedId,
  options,
  onClick,
  size = 'medium',
}) => {
  const [selectedId, setSelectedId] = useState(userSelectedId);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<RefObject<HTMLButtonElement>[]>([]);
  const selectedIndex = useMemo(
    () => options.findIndex((option) => option.id === selectedId),
    [options, selectedId],
  );

  options.forEach((_, index) => {
    buttonsRef.current[index] = createRef<HTMLButtonElement>();
  });

  useEffect(() => {
    indicatorRef.current?.style.setProperty(
      'transform',
      // 4はgapのpx値
      `translateX(calc(${100 * selectedIndex}% + ${
        (4 + 4) * selectedIndex + 4
      }px))`,
    );
  }, [options, selectedIndex]);

  useEffect(() => {
    // selectedIdがどの項目にも一致しない場合は最初の項目を選択する
    if (!options.some((option) => option.id === userSelectedId)) {
      setSelectedId(options[0].id);
      return;
    }
    setSelectedId(userSelectedId);
  }, [options, userSelectedId]);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
      setSelectedId(id);

      if (typeof onClick === 'function') {
        onClick(e, id);
      }
    },
    [onClick],
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
      const targetButton = buttonsRef.current[index].current;
      switch (e.key) {
        case 'ArrowUp':
        case 'ArrowLeft': {
          e.preventDefault();
          const prevButtonRef =
            buttonsRef.current[(options.length + index - 1) % options.length];
          const prevButton = prevButtonRef.current;
          prevButton?.focus();
          break;
        }
        case 'ArrowDown':
        case 'ArrowRight': {
          e.preventDefault();
          const nextButtonRef =
            buttonsRef.current[(index + 1) % options.length];
          const nextButton = nextButtonRef.current;
          nextButton?.focus();
          break;
        }
        case 'Enter':
        case 'Space': {
          // 選択中の項目をEnter/Spaceした際のイベントを無効にする
          if (
            targetButton &&
            targetButton.getAttribute('aria-checked') === 'true'
          ) {
            e.preventDefault();
          }
          break;
        }
      }
    },
    [options.length],
  );

  if (options.length === 0) {
    return null;
  }

  return (
    <div
      className={[
        `${BLOCK_NAME}`,
        `${BLOCK_NAME}--${size}`,
        options.length > 2 && `${BLOCK_NAME}--divider`,
      ]
        .filter(Boolean)
        .join(' ')}
      style={{
        gridTemplateColumns: `repeat(${options.length}, 1fr)`,
      }}
      role="radiogroup"
    >
      <div
        className={[`${BLOCK_NAME}-indicator`, `${BLOCK_NAME}-button`]
          .filter(Boolean)
          .join(' ')}
        style={{
          // 4はgapのpx値
          width: `calc(${100 / options.length}% - ${4 + 4}px)`,
          transform: `translateX(calc(${100 * selectedIndex}% + ${
            (4 + 4) * selectedIndex + 4
          }px))`,
        }}
        ref={indicatorRef}
      />
      {options.map((option, index) => {
        const isSelected = option.id === selectedId;
        return (
          <button
            key={option.id}
            className={`${BLOCK_NAME}-button`}
            onClick={(e) => handleClick(e, option.id)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            type="button"
            role="radio"
            aria-checked={isSelected}
            tabIndex={isSelected ? 0 : -1}
            ref={buttonsRef.current[index]}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
};

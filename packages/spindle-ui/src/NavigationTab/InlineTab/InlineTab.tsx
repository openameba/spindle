import React, {
  createRef,
  type RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

type Option = {
  label: string;
  id: string;
};

type Props = {
  defaultSelectedId: string;
  options: Option[];
  onClick?: (
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.KeyboardEvent<HTMLButtonElement>,
    id: string,
  ) => void;
};

const BLOCK_NAME = 'spui-InlineTab';

export const InlineTab: React.FC<Props> = ({
  defaultSelectedId,
  options,
  onClick,
}) => {
  const [selectedId, setSelectedId] = useState(defaultSelectedId);

  const buttonsRef = useRef<RefObject<HTMLButtonElement | null>[]>([]);

  const handleClick = useCallback(
    (
      e:
        | React.MouseEvent<HTMLButtonElement>
        | React.KeyboardEvent<HTMLButtonElement>,
      id: string,
    ) => {
      // 既に選択中の項目に対してクリックした場合は何もしない
      if (id === selectedId) {
        return;
      }

      setSelectedId(id);

      if (typeof onClick === 'function') {
        onClick(e, id);
      }
    },
    [onClick, selectedId],
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
          handleClick(e, options[prevButtonIndex].id);
          break;
        }
        case 'ArrowRight': {
          // 基本的には1つ後の要素に移動。ただし、既に最後尾の要素にいる場合はリストの先頭に移動
          const nextButtonIndex = index + 1 >= totalLength ? 0 : index + 1;
          const nextButtonRef = buttonsRef.current[nextButtonIndex];
          nextButtonRef.current?.focus();
          handleClick(e, options[nextButtonIndex].id);
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

  if (options.length === 0) {
    return null;
  }

  return (
    <div className={BLOCK_NAME} role="tablist">
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
            onClick={(e) => handleClick(e, id)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          >
            <span className={`${BLOCK_NAME}-label`}>{label}</span>
          </button>
        );
      })}
    </div>
  );
};

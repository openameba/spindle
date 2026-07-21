import {
  createRef,
  type KeyboardEvent,
  type MouseEvent,
  type RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

type TabClickEvent =
  | MouseEvent<HTMLButtonElement>
  | KeyboardEvent<HTMLButtonElement>;

type UseTabListParams = {
  defaultSelectedId: string;
  options: { id: string }[];
  onClick?: (event: TabClickEvent, id: string) => void;
  onSelect?: (selectedButton: HTMLButtonElement | null) => void;
};

/**
 * NavigationTab系コンポーネント共通のタブ選択状態とキーボード操作を提供する
 */
export const useTabList = ({
  defaultSelectedId,
  options,
  onClick,
  onSelect,
}: UseTabListParams) => {
  const [selectedId, setSelectedId] = useState(defaultSelectedId);

  const buttonsRef = useRef<RefObject<HTMLButtonElement | null>[]>([]);
  // 初回レンダーからref属性に渡せるよう、レンダー中に遅延初期化する
  // （useEffectで生成すると再レンダーまでrefがDOMに接続されず、初回のキーボード操作でフォーカス移動できない）
  buttonsRef.current = options.map(
    (_, index) => buttonsRef.current[index] ?? createRef<HTMLButtonElement>(),
  );

  const handleClick = useCallback(
    (e: TabClickEvent, id: string, index: number) => {
      // 既に選択中の項目に対してクリックした場合は何もしない
      if (id === selectedId) {
        return;
      }

      setSelectedId(id);

      if (typeof onSelect === 'function') {
        onSelect(buttonsRef.current[index]?.current ?? null);
      }

      if (typeof onClick === 'function') {
        onClick(e, id);
      }
    },
    [onClick, onSelect, selectedId],
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
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

  return { selectedId, buttonsRef, handleClick, handleKeyDown };
};

const SCROLL_DISTANCE = 150;

/**
 * NavigationTab系コンポーネント共通の横スクロールと矢印ボタンの表示制御を提供する
 */
export const useScrollArrows = (enabled: boolean) => {
  const [showPrevButton, setShowPrevButton] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);

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

  useEffect(() => {
    if (!enabled) {
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
  }, [enabled]);

  return { containerRef, showPrevButton, showNextButton, handleScroll };
};

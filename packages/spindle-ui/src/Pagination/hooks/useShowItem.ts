import { useMemo } from 'react';

type Payload = {
  current: number;
  total: number;
};

const MINIMUM_PAGE_ITEM = 3;
const DEFAULT_PAGE_ITEM = 5;
const PAGE_ITEM_ONE_HUNDRED = 100;

export function useShowItem({ current, total }: Payload) {
  const displayItem = useMemo(() => {
    if (total < DEFAULT_PAGE_ITEM) {
      // 総ページ数が5件よりも小さい場合
      return Array.from({ length: total }, (_element, index) => index + 1);
    } else if (current === 1 || current === 2) {
      // 現在値が1か2の場合は"1,2,3,4,total"とする
      return [1, 2, 3, 4, total];
    } else if (
      PAGE_ITEM_ONE_HUNDRED <= total &&
      PAGE_ITEM_ONE_HUNDRED !== current
    ) {
      // 総ページ数が100件以上で現在地が100件じゃない場合
      return [current - 2, current - 1, current, current + 1, current + 2];
    } else if (current !== total && current !== total - 1) {
      // "1,current-1,current,current+1,total"とする
      return [1, current - 1, current, current + 1, total];
    } else {
      // 現在値最大値なら"1,total-3,total-2,total-1,total"とする
      return [1, total - 3, total - 2, total - 1, total];
    }
  }, [current, total]);

  // 総ページ数が6件以上かつ100件以下の場合
  const showHorizontal =
    total > DEFAULT_PAGE_ITEM && total <= PAGE_ITEM_ONE_HUNDRED;

  // 総ページ数が3件以上かつ5件以下の場合
  const hideDisplayItemLevel1 =
    total > MINIMUM_PAGE_ITEM && total <= DEFAULT_PAGE_ITEM;

  // 総ページ数が6件以上かつ100件未満の場合
  const hideDisplayItemLevel2 =
    total > DEFAULT_PAGE_ITEM && total < PAGE_ITEM_ONE_HUNDRED;

  // 総ページ数が100件以上の場合
  const hideDisplayItemLevel3 = total >= PAGE_ITEM_ONE_HUNDRED;

  // 「前へ」「次へ」アイコンの表示条件
  const showPrevNext = hideDisplayItemLevel1 || hideDisplayItemLevel2;

  // 「最初へ」「最後へ」アイコンの表示条件
  const showFirstLast = hideDisplayItemLevel3;

  return {
    displayItem,
    hideDisplayItemLevel1,
    hideDisplayItemLevel2,
    hideDisplayItemLevel3,
    showHorizontal,
    showPrevNext,
    showFirstLast,
  };
}

import { useMemo } from 'react';

type Payload = {
  current: number;
  total: number;
  pageItem: number;
};

export function useShowItem({ current, total, pageItem = 5 }: Payload) {
  const displayItem = useMemo(() => {
    if (current === 1 || current === 2) {
      // 現在値が1か2の場合は"1,2,3,4,total"とする
      return [1, 2, 3, 4, total];
    } else if (current !== total && current !== total - 1) {
      // "1,current-1,current,current+1,total"とする
      return [1, current - 1, current, current + 1, total];
    } else {
      // 現在値最大値なら"1,total-3,total-2,total-1,total"とする
      return [1, total - 3, total - 2, total - 1, total];
    }
  }, [current, total]);

  // totalは表示数超えている前提で、前から2つ目のアイテムが2より大きいかどうか（最初が連続した数字じゃないことをチェック）
  const showPrevHorizontal = total > pageItem && 2 < displayItem[1];

  // totalは表示数超えている前提で、後ろから2つ目のアイテムがtotal-1より小さいか（最後が連続した数字じゃないことをチェック）
  const showNextHorizontal =
    total > pageItem && displayItem[pageItem - 2] < total - 1;

  return { displayItem, showPrevHorizontal, showNextHorizontal };
}

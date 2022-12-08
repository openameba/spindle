type Payload = {
  current: number;
  total: number;
  showItemSize: 3 | 5;
  totalThreshold: number;
};

// 表示出来る数字（アイテム）の最大数
const MAX_SHOW_ITEM_SIZE = 5;

/**
 * useShowItem分岐条件
 * 1.総ページ数が表示したいアイテム数以下の場合、総ページ数と同じアイテム数を返す
 * 2.総ページ数がアイテムの表示最大数以下、または総ページ数が閾値以上の場合
 *   1.現在のページ数が中央値 + 1より小さい場合、表示したいアイテム数を最初のページから返す
 *   2.現在のページ数が総ページ数 - 中央値より大きい場合、総ページ数からさかのぼった表示したいアイテム数を返す
 *   3.現在のページ数と前後に表示したいアイテム数を返す
 * 3.上記に該当しない場合は以下の処理を行う
 *   1.現在のページ数が中央値 + 1より小さい場合、表示したいアイテム数を最初のページから返し最後は総ページ数を返す
 *   2.現在のページ数が総ページ数 - 中央値より大きい場合、最初のページとtotalまでの表示したいアイテム数を返す
 *   3.最初のアイテムは1を最後のアイテムは総ページ数を返すとともにlengthが3の場合は現在のページ数のみでlengthが5の場合は現在のページ数とその前後のアイテム数を返す
 */
export function useShowItem({
  current,
  total,
  showItemSize,
  totalThreshold,
}: Payload) {
  if (total <= showItemSize) {
    return Array.from({ length: total }, (_e, index) => index + 1);
  }

  // 中央値（少数の切り捨て）
  const median = (showItemSize / 2) | 0;

  if (total <= MAX_SHOW_ITEM_SIZE || total >= totalThreshold) {
    if (current < 1 + median) {
      return Array.from({ length: showItemSize }, (_e, index) => index + 1);
    }
    if (current > total - median) {
      return Array.from(
        { length: showItemSize },
        (_e, index) => total - index,
      ).reverse();
    }
    return Array.from(
      { length: showItemSize },
      (_e, index) => current - median + index,
    );
  }
  if (current < 1 + median) {
    return [
      ...Array.from({ length: showItemSize - 1 }, (_e, index) => index + 1),
      total,
    ];
  }
  if (current > total - median) {
    return [
      1,
      ...Array.from(
        { length: showItemSize - 1 },
        (_e, index) => total - index,
      ).reverse(),
    ];
  }
  return [
    1,
    ...Array.from(
      { length: showItemSize - 2 },
      (_e, index) => current - (median - 1) + index,
    ),
    total,
  ];
}

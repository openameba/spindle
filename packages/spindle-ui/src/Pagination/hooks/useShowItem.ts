type Payload = {
  current: number;
  total: number;
  totalThreshold: number;
};

// 表示出来る数字（アイテム）の最大数
const MAX_SHOW_ITEM_SIZE = 5;

export function useShowItem({ current, total, totalThreshold }: Payload) {
  const showItemSize = 5;

  // 総数が表示したいアイテム数に満たない場合
  if (total <= showItemSize) {
    return Array.from({ length: total }, (_e, index) => index + 1);
  }
  // 中央値（少数の切り捨て）
  const median = (showItemSize / 2) | 0;
  // 総数がアイテムの表示最大数に満たない、または総数がしきい値を超える場合
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
      (_e, index) => current - (index - median),
    ).reverse();
  }
  // 総数がアイテムの表示最大数以上の場合
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
      (_e, index) => current - (index - median),
    ).reverse(),
    total,
  ];
}

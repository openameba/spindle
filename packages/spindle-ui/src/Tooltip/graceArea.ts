/**
 * triggerとtooltip間のポインター移動を許容するためのgrace area（猶予領域）
 * ポインターがtriggerからtooltipへ移動する際、tooltipが閉じないようにする
 */

export type Point = { x: number; y: number };
export type Polygon = Point[];
export type Side = 'top' | 'right' | 'bottom' | 'left';

/**
 * ポインターがrectのどの辺から出たかを判定
 */
export function getExitSideFromRect(point: Point, rect: DOMRect): Side {
  const top = Math.abs(rect.top - point.y);
  const bottom = Math.abs(rect.bottom - point.y);
  const right = Math.abs(rect.right - point.x);
  const left = Math.abs(rect.left - point.x);

  const min = Math.min(top, bottom, right, left);
  if (min === left) return 'left';
  if (min === right) return 'right';
  if (min === top) return 'top';
  return 'bottom';
}

/**
 * exit pointの周囲にpaddingを追加した2点を生成
 */
export function getPaddedExitPoints(
  exitPoint: Point,
  exitSide: Side,
  padding = 5,
): Point[] {
  switch (exitSide) {
    case 'top':
      return [
        { x: exitPoint.x - padding, y: exitPoint.y + padding },
        { x: exitPoint.x + padding, y: exitPoint.y + padding },
      ];
    case 'bottom':
      return [
        { x: exitPoint.x - padding, y: exitPoint.y - padding },
        { x: exitPoint.x + padding, y: exitPoint.y - padding },
      ];
    case 'left':
      return [
        { x: exitPoint.x + padding, y: exitPoint.y - padding },
        { x: exitPoint.x + padding, y: exitPoint.y + padding },
      ];
    case 'right':
      return [
        { x: exitPoint.x - padding, y: exitPoint.y - padding },
        { x: exitPoint.x - padding, y: exitPoint.y + padding },
      ];
  }
}

/**
 * rectの4隅の座標を取得
 */
export function getPointsFromRect(rect: DOMRect): Point[] {
  return [
    { x: rect.left, y: rect.top },
    { x: rect.right, y: rect.top },
    { x: rect.right, y: rect.bottom },
    { x: rect.left, y: rect.bottom },
  ];
}

/**
 * pointがpolygon内にあるかをray casting法で判定
 * https://github.com/substack/point-in-polygon
 */
export function isPointInPolygon(point: Point, polygon: Polygon): boolean {
  const { x, y } = point;
  let inside = false;

  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const pi = polygon[i];
    const pj = polygon[j];
    if (!pi || !pj) continue;

    const xi = pi.x;
    const yi = pi.y;
    const xj = pj.x;
    const yj = pj.y;

    const intersect =
      yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }

  return inside;
}

/**
 * 点群の凸包を計算
 * https://www.nayuki.io/page/convex-hull-algorithm
 */
export function getConvexHull(points: Point[]): Point[] {
  const sorted = [...points].sort((a, b) => {
    if (a.x !== b.x) return a.x - b.x;
    return a.y - b.y;
  });

  if (sorted.length <= 1) return sorted;

  const upperHull: Point[] = [];
  for (const p of sorted) {
    while (upperHull.length >= 2) {
      const q = upperHull[upperHull.length - 1];
      const r = upperHull[upperHull.length - 2];
      if (q && r && (q.x - r.x) * (p.y - r.y) >= (q.y - r.y) * (p.x - r.x)) {
        upperHull.pop();
      } else {
        break;
      }
    }
    upperHull.push(p);
  }
  upperHull.pop();

  const lowerHull: Point[] = [];
  for (let i = sorted.length - 1; i >= 0; i--) {
    const p = sorted[i];
    if (!p) continue;
    while (lowerHull.length >= 2) {
      const q = lowerHull[lowerHull.length - 1];
      const r = lowerHull[lowerHull.length - 2];
      if (q && r && (q.x - r.x) * (p.y - r.y) >= (q.y - r.y) * (p.x - r.x)) {
        lowerHull.pop();
      } else {
        break;
      }
    }
    lowerHull.push(p);
  }
  lowerHull.pop();

  if (
    upperHull.length === 1 &&
    lowerHull.length === 1 &&
    upperHull[0]?.x === lowerHull[0]?.x &&
    upperHull[0]?.y === lowerHull[0]?.y
  ) {
    return upperHull;
  }

  return [...upperHull, ...lowerHull];
}

/**
 * 2要素間のgrace area polygonを生成
 */
export function createGraceArea(
  exitPoint: Point,
  exitElement: HTMLElement,
  targetElement: HTMLElement,
): Polygon {
  const exitSide = getExitSideFromRect(
    exitPoint,
    exitElement.getBoundingClientRect(),
  );
  const paddedExitPoints = getPaddedExitPoints(exitPoint, exitSide);
  const targetPoints = getPointsFromRect(targetElement.getBoundingClientRect());
  return getConvexHull([...paddedExitPoints, ...targetPoints]);
}

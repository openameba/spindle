import {
  getConvexHull,
  getExitSideFromRect,
  getPaddedExitPoints,
  getPointsFromRect,
  isPointInPolygon,
} from './graceArea';

describe('graceArea utilities', () => {
  describe('getExitSideFromRect', () => {
    const rect = {
      top: 100,
      right: 200,
      bottom: 150,
      left: 100,
    } as DOMRect;

    test('returns "top" when point is closest to top edge', () => {
      expect(getExitSideFromRect({ x: 150, y: 102 }, rect)).toBe('top');
    });

    test('returns "bottom" when point is closest to bottom edge', () => {
      expect(getExitSideFromRect({ x: 150, y: 148 }, rect)).toBe('bottom');
    });

    test('returns "left" when point is closest to left edge', () => {
      expect(getExitSideFromRect({ x: 102, y: 125 }, rect)).toBe('left');
    });

    test('returns "right" when point is closest to right edge', () => {
      expect(getExitSideFromRect({ x: 198, y: 125 }, rect)).toBe('right');
    });
  });

  describe('getPaddedExitPoints', () => {
    const exitPoint = { x: 100, y: 100 };

    test('creates padded points for top exit', () => {
      const points = getPaddedExitPoints(exitPoint, 'top', 5);
      expect(points).toEqual([
        { x: 95, y: 105 },
        { x: 105, y: 105 },
      ]);
    });

    test('creates padded points for bottom exit', () => {
      const points = getPaddedExitPoints(exitPoint, 'bottom', 5);
      expect(points).toEqual([
        { x: 95, y: 95 },
        { x: 105, y: 95 },
      ]);
    });

    test('creates padded points for left exit', () => {
      const points = getPaddedExitPoints(exitPoint, 'left', 5);
      expect(points).toEqual([
        { x: 105, y: 95 },
        { x: 105, y: 105 },
      ]);
    });

    test('creates padded points for right exit', () => {
      const points = getPaddedExitPoints(exitPoint, 'right', 5);
      expect(points).toEqual([
        { x: 95, y: 95 },
        { x: 95, y: 105 },
      ]);
    });
  });

  describe('getPointsFromRect', () => {
    test('returns four corner points of rectangle', () => {
      const rect = {
        top: 10,
        right: 50,
        bottom: 30,
        left: 20,
      } as DOMRect;

      expect(getPointsFromRect(rect)).toEqual([
        { x: 20, y: 10 },
        { x: 50, y: 10 },
        { x: 50, y: 30 },
        { x: 20, y: 30 },
      ]);
    });
  });

  describe('isPointInPolygon', () => {
    // Square polygon: (0,0), (10,0), (10,10), (0,10)
    const square = [
      { x: 0, y: 0 },
      { x: 10, y: 0 },
      { x: 10, y: 10 },
      { x: 0, y: 10 },
    ];

    test('returns true for point inside polygon', () => {
      expect(isPointInPolygon({ x: 5, y: 5 }, square)).toBe(true);
    });

    test('returns false for point outside polygon', () => {
      expect(isPointInPolygon({ x: 15, y: 5 }, square)).toBe(false);
      expect(isPointInPolygon({ x: -5, y: 5 }, square)).toBe(false);
      expect(isPointInPolygon({ x: 5, y: -5 }, square)).toBe(false);
      expect(isPointInPolygon({ x: 5, y: 15 }, square)).toBe(false);
    });

    test('works with triangle', () => {
      const triangle = [
        { x: 0, y: 0 },
        { x: 10, y: 0 },
        { x: 5, y: 10 },
      ];
      expect(isPointInPolygon({ x: 5, y: 3 }, triangle)).toBe(true);
      expect(isPointInPolygon({ x: 1, y: 9 }, triangle)).toBe(false);
    });
  });

  describe('getConvexHull', () => {
    test('returns same points for triangle', () => {
      const triangle = [
        { x: 0, y: 0 },
        { x: 10, y: 0 },
        { x: 5, y: 10 },
      ];
      const hull = getConvexHull(triangle);
      expect(hull).toHaveLength(3);
    });

    test('removes interior points', () => {
      // Square with a point inside
      const points = [
        { x: 0, y: 0 },
        { x: 10, y: 0 },
        { x: 10, y: 10 },
        { x: 0, y: 10 },
        { x: 5, y: 5 }, // interior point
      ];
      const hull = getConvexHull(points);
      expect(hull).toHaveLength(4);
      expect(hull).not.toContainEqual({ x: 5, y: 5 });
    });

    test('handles single point', () => {
      expect(getConvexHull([{ x: 5, y: 5 }])).toEqual([{ x: 5, y: 5 }]);
    });

    test('handles empty array', () => {
      expect(getConvexHull([])).toEqual([]);
    });
  });
});

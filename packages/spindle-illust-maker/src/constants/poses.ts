import type { PoseConfig } from '../types';

export const POSES: PoseConfig[] = [
  {
    id: 'adult-standing',
    label: '立ち',
    canvasWidth: 300,
    canvasHeight: 680,
    headTypes: ['man', 'woman'],
    hasAccessories: true,
    layers: [
      { part: 'leg', x: -3, y: 295, width: 300, height: 400 },
      { part: 'body', x: -3, y: 146, width: 300, height: 250 },
      { part: 'head', x: 67, y: -11, width: 180, height: 170 },
      { part: 'beard', x: 104, y: 106, width: 75, height: 48 },
      { part: 'mask', x: 99, y: 81, width: 96, height: 65 },
      { part: 'glasses', x: 100, y: 69, width: 86, height: 49 },
      { part: 'hat', x: 64, y: -6, width: 160, height: 95 },
    ],
    neckTilts: {
      up: {
        layers: [
          { part: 'head', x: 84.7, y: -4.9, width: 180, height: 170, rotation: 7, pivotX: 174.7, pivotY: 80.1 },
          { part: 'beard', x: 114.9, y: 109.9, width: 75, height: 48, rotation: 7, pivotX: 152.4, pivotY: 133.9 },
          { part: 'mask', x: 111.9, y: 85.7, width: 96, height: 65, rotation: 7, pivotX: 159.9, pivotY: 118.2 },
          { part: 'glasses', x: 115.3, y: 73.4, width: 86, height: 49, rotation: 7, pivotX: 158.3, pivotY: 97.9 },
          { part: 'hat', x: 85.7, y: -1.1, width: 160, height: 95, rotation: 7, pivotX: 165.7, pivotY: 46.4 },
        ],
      },
      down: {
        layers: [
          { part: 'head', x: 53.6, y: -12.2, width: 180, height: 170, rotation: -12, pivotX: 143.6, pivotY: 72.8 },
          { part: 'beard', x: 102.7, y: 106.9, width: 75, height: 48, rotation: -12, pivotX: 140.2, pivotY: 130.9 },
          { part: 'mask', x: 94.0, y: 81.0, width: 96, height: 65, rotation: -12, pivotX: 142.0, pivotY: 113.5 },
          { part: 'glasses', x: 90.9, y: 70.3, width: 86, height: 49, rotation: -12, pivotX: 133.9, pivotY: 94.8 },
          { part: 'hat', x: 44.1, y: -3.7, width: 160, height: 95, rotation: -12, pivotX: 124.1, pivotY: 43.8 },
        ],
      },
    },
  },
  {
    id: 'adult-sitting',
    label: '座り',
    canvasWidth: 300,
    canvasHeight: 680,
    headTypes: ['man', 'woman'],
    hasAccessories: true,
    layers: [
      { part: 'leg', x: -7.8, y: 479.7, width: 300, height: 400 },
      { part: 'body', x: -11, y: 329, width: 300, height: 250 },
      { part: 'head', x: 59, y: 172, width: 180, height: 170 },
      { part: 'beard', x: 96, y: 289, width: 75, height: 48 },
      { part: 'mask', x: 91, y: 264, width: 96, height: 65 },
      { part: 'glasses', x: 92, y: 252, width: 86, height: 49 },
      { part: 'hat', x: 56, y: 177, width: 160, height: 95 },
    ],
    neckTilts: {
      up: {
        layers: [
          { part: 'head', x: 74.7, y: 179.4, width: 180, height: 170, rotation: 7, pivotX: 164.7, pivotY: 264.4 },
          { part: 'beard', x: 104.9, y: 294.0, width: 75, height: 48, rotation: 7, pivotX: 142.4, pivotY: 318.0 },
          { part: 'mask', x: 101.9, y: 269.8, width: 96, height: 65, rotation: 7, pivotX: 149.9, pivotY: 302.3 },
          { part: 'glasses', x: 105.4, y: 257.4, width: 86, height: 49, rotation: 7, pivotX: 148.4, pivotY: 281.9 },
          { part: 'hat', x: 75.8, y: 183.0, width: 160, height: 95, rotation: 7, pivotX: 155.8, pivotY: 230.5 },
        ],
      },
      down: {
        layers: [
          { part: 'head', x: 44.6, y: 169.8, width: 180, height: 170, rotation: -12, pivotX: 134.6, pivotY: 254.8 },
          { part: 'beard', x: 93.6, y: 288.9, width: 75, height: 48, rotation: -12, pivotX: 131.1, pivotY: 312.9 },
          { part: 'mask', x: 85.0, y: 263.1, width: 96, height: 65, rotation: -12, pivotX: 133.0, pivotY: 295.6 },
          { part: 'glasses', x: 81.9, y: 252.3, width: 86, height: 49, rotation: -12, pivotX: 124.9, pivotY: 276.8 },
          { part: 'hat', x: 35.1, y: 178.3, width: 160, height: 95, rotation: -12, pivotX: 115.1, pivotY: 225.8 },
        ],
      },
    },
  },
  {
    id: 'adult-desk',
    label: '机座り',
    canvasWidth: 300,
    canvasHeight: 680,
    headTypes: ['man', 'woman'],
    hasAccessories: true,
    layers: [
      { part: 'head', x: 80.2, y: 150, width: 180, height: 170 },
      { part: 'body', x: 10.5, y: 307, width: 300, height: 250 },
      { part: 'beard', x: 117.2, y: 267, width: 75, height: 48 },
      { part: 'mask', x: 112.2, y: 242, width: 96, height: 65 },
      { part: 'glasses', x: 113.2, y: 230, width: 86, height: 49 },
      { part: 'hat', x: 77.2, y: 155, width: 160, height: 95 },
    ],
  },
  {
    id: 'adult-riding',
    label: '乗り',
    canvasWidth: 300,
    canvasHeight: 680,
    headTypes: ['man', 'woman'],
    hasAccessories: true,
    bodySubdir: 'body-ride',
    layers: [
      { part: 'body', x: -18, y: 133, width: 300, height: 250 },
      // Rotated parts: x/y is the center of the flex container (rotation pivot)
      { part: 'head', x: 43.7, y: -18.9, width: 180, height: 170, rotation: -14.71, pivotX: 133.7, pivotY: 66.1 },
      { part: 'beard', x: 96.0, y: 100.9, width: 75, height: 48, rotation: -14.71, pivotX: 133.5, pivotY: 124.9 },
      { part: 'mask', x: 84.6, y: 73.9, width: 96, height: 65, rotation: -14.71, pivotX: 132.6, pivotY: 106.5 },
      { part: 'glasses', x: 82.7, y: 63.6, width: 86, height: 49, rotation: -14.71, pivotX: 125.7, pivotY: 88.2 },
      { part: 'hat', x: 32.5, y: -9.9, width: 160, height: 95, rotation: -14.71, pivotX: 112.5, pivotY: 37.6 },
    ],
  },
  {
    id: 'old',
    label: 'Old',
    canvasWidth: 250,
    canvasHeight: 600,
    headTypes: ['old'],
    hasAccessories: false,
    layers: [
      { part: 'leg', x: 26.4, y: 214.5, width: 300, height: 400 },
      { part: 'head', x: 20, y: 0, width: 180, height: 170 },
      { part: 'body', x: 22.7, y: 66, width: 300, height: 250 },
    ],
  },
  {
    id: 'child',
    label: 'Child',
    canvasWidth: 250,
    canvasHeight: 400,
    headTypes: ['child'],
    hasAccessories: false,
    layers: [
      { part: 'head', x: 43.8, y: -12, width: 180, height: 170 },
      { part: 'body', x: -24.8, y: 141.5, width: 300, height: 250 },
    ],
  },
  {
    id: 'baby',
    label: 'Baby',
    canvasWidth: 250,
    canvasHeight: 400,
    headTypes: ['baby'],
    hasAccessories: false,
    layers: [
      { part: 'body', x: -25, y: 141, width: 300, height: 250 },
      { part: 'head', x: 44, y: -12, width: 180, height: 170 },
    ],
  },
];

export const POSE_MAP = Object.fromEntries(
  POSES.map((p) => [p.id, p]),
) as Record<string, PoseConfig>;

import '@testing-library/jest-dom';

// JSDOMにPointerEventがないのでPolyfill
if (typeof PointerEvent === 'undefined') {
  class PointerEventPolyfill extends MouseEvent {
    readonly pointerType: string;
    readonly pointerId: number;
    readonly pressure: number;

    constructor(type: string, params: PointerEventInit = {}) {
      super(type, params);
      this.pointerType = params.pointerType ?? '';
      this.pointerId = params.pointerId ?? 0;
      this.pressure = params.pressure ?? 0;
    }
  }

  // @ts-expect-error Polyfill for JSDOM
  global.PointerEvent = PointerEventPolyfill;
}

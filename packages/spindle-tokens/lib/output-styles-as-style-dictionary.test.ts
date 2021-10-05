import { StyleNode, FillStyle, EffectStyle, Style } from '@figma-export/types';

import fs from 'fs';
import path from 'path';
import { exporter } from './output-styles-as-style-dictionary';

const mockFill = (
  fills: FillStyle[] = [],
  visible = true,
  comment = 'lorem ipsum',
): Style => ({
  fills,
  visible,
  name: 'variable-name',
  comment,
  styleType: 'FILL',
  originalNode: { ...({} as StyleNode) },
});

const mockSolid = (value: string, visible = true): FillStyle => ({
  value,
  visible,
  type: 'SOLID',
  color: {
    a: 1,
    r: 255,
    g: 255,
    b: 255,
    rgba: 'rgba(255, 255, 255, 1)',
  },
});

const mockEffect = (
  effects: EffectStyle[] = [],
  visible = true,
  comment = 'lorem ipsum',
): Style => ({
  effects,
  visible,
  name: 'variable-name',
  comment,
  styleType: 'EFFECT',
  originalNode: { ...({} as StyleNode) },
});

const mockShadow = (value: string, visible = true): EffectStyle => ({
  value,
  visible,
  type: 'DROP_SHADOW',
  color: {
    a: 1,
    r: 255,
    g: 255,
    b: 255,
    rgba: 'rgba(255, 255, 255, 1)',
  },
  inset: false,
  blurRadius: 10,
  spreadRadius: 10,
  offset: { x: 10, y: 10 },
});

describe('style output as style dictionary JSON', () => {
  let writeFileSync: jest.SpyInstance;

  beforeEach(() => {
    writeFileSync = jest.spyOn(fs, 'writeFileSync');
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  const output = 'output-folder';
  const fileName = 'design-tokens.json';

  it('should not print anything if style is not visible', async () => {
    await exporter({
      output,
    })([mockFill([], false)]);

    expect(writeFileSync).toHaveBeenCalledTimes(1);
    expect(writeFileSync).toBeCalledWith(path.resolve(output, fileName), '{}');
  });

  it('should be able to change the filename, the extension and output folder', async () => {
    const fileName = 'test.json';
    await exporter({
      output,
      fileName,
    })([]);

    expect(writeFileSync).toHaveBeenCalledTimes(1);
    expect(writeFileSync).toBeCalledWith(path.resolve(output, fileName), '{}');
  });

  describe('colors', () => {
    it('should not print anything if fill is not visible', async () => {
      await exporter({
        output,
      })([mockFill([mockSolid('solid-1', false)])]);

      expect(writeFileSync).toHaveBeenCalledTimes(1);
      expect(writeFileSync).toBeCalledWith(
        path.resolve(output, fileName),
        '{}',
      );
    });

    it('should be able to extract a solid color', async () => {
      await exporter({
        output,
      })([
        mockFill([
          mockSolid('rgba(0, 0, 0, 1)', true),
          mockSolid('rgba(100, 100, 100, 1)', false),
        ]),
      ]);

      expect(writeFileSync).toHaveBeenCalledTimes(1);
      expect(writeFileSync).toBeCalledWith(
        path.resolve(output, fileName),
        '{\n' +
          '  "variable-name": {\n' +
          '    "comment": "lorem ipsum",\n' +
          '    "value": "rgba(0, 0, 0, 1)"\n' +
          '  }\n' +
          '}',
      );
    });

    it('should be able to extract an alias from comment', async () => {
      await exporter({
        output,
      })([
        mockFill(
          [mockSolid('rgba(0, 0, 0, 1)', true)],
          true,
          'Alias\n{Color.Primitive.Green}',
        ),
      ]);

      expect(writeFileSync).toHaveBeenCalledTimes(1);
      expect(writeFileSync).toBeCalledWith(
        path.resolve(output, fileName),
        '{\n' +
          '  "variable-name": {\n' +
          '    "comment": "Alias",\n' +
          '    "value": "{Color.Primitive.Green}"\n' +
          '  }\n' +
          '}',
      );
    });
  });

  describe('effects', () => {
    it('should not print anything if effect is not visible', async () => {
      await exporter({
        output,
      })([mockEffect([mockShadow('shadow-1', false)])]);

      expect(writeFileSync).toHaveBeenCalledTimes(1);
      expect(writeFileSync).toBeCalledWith(
        path.resolve(output, fileName),
        '{}',
      );
    });

    it('should be able to extract a drop shadow', async () => {
      await exporter({
        output,
      })([mockEffect([mockShadow('shadow-1', true)])]);

      expect(writeFileSync).toHaveBeenCalledTimes(1);
      expect(writeFileSync).toBeCalledWith(
        path.resolve(output, fileName),
        '{\n' +
          '  "variable-name": {\n' +
          '    "color": {\n' +
          '      "value": "rgba(255, 255, 255, 1)"\n' +
          '    },\n' +
          '    "inset": {\n' +
          '      "value": false\n' +
          '    },\n' +
          '    "offset": {\n' +
          '      "x": {\n' +
          '        "value": 10\n' +
          '      },\n' +
          '      "y": {\n' +
          '        "value": 10\n' +
          '      }\n' +
          '    },\n' +
          '    "blurRadius": {\n' +
          '      "value": 5\n' +
          '    },\n' +
          '    "spreadRadius": {\n' +
          '      "value": 10\n' +
          '    },\n' +
          '    "comment": "lorem ipsum"\n' +
          '  }\n' +
          '}',
      );
    });
  });
});

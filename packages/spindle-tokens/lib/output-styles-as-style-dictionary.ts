import * as FigmaExport from '@figma-export/types';

import fs from 'fs';
import path from 'path';
import makeDir from 'make-dir';

import set from 'lodash.setwith';

type ReplacerArgument = Record<string, unknown>;
type Replacer = (arg: ReplacerArgument) => string;

type Options = {
  output: string;
  fileName?: string;
  replacer?: Replacer;
};

type ColorToken = {
  comment?: string;
  value?: string;
  attributes: {
    category: 'color';
  };
};

type SizeCategory = {
  category: 'size';
};

type DropShadowToken = {
  color: { value: string };
  inset: { value: boolean };
  blurRadius: { value: number; attributes: SizeCategory };
  spreadRadius: { value: number; attributes: SizeCategory };
  offset: {
    x: { value: number; attributes: SizeCategory };
    y: { value: number; attributes: SizeCategory };
  };
  comment?: string;
};

function defaultReplacer(obj: ReplacerArgument): string {
  return JSON.stringify(obj, null, 2);
}

export function exporter({
  output,
  fileName = 'design-tokens.json',
  replacer = defaultReplacer,
}: Options): FigmaExport.StyleOutputter {
  function customizer(obj: Record<string, unknown>) {
    return obj || {};
  }

  return async (styles) => {
    const result = {};

    styles
      .filter((style) => style.visible)
      .forEach((style) => {
        switch (style.styleType) {
          case 'FILL': {
            const visibleFills = style.fills.filter((fill) => fill.visible);

            if (visibleFills.length > 0) {
              visibleFills.forEach((fill, i) => {
                const propArray = style.name
                  .replace(/\./g, '')
                  .split('/')
                  .map((s) => s.trim())
                  .join('.');
                const name = i === 0 ? propArray : `${propArray}.${i}`;

                const objectValue: ColorToken = {
                  attributes: { category: 'color' },
                };
                let aliasValue;

                if (style.comment) {
                  // extract style dictionary style alias value from comment
                  const aliasReg = /{.+}/;
                  const aliasValueMatch = style.comment.match(aliasReg);
                  aliasValue = aliasValueMatch ? aliasValueMatch[0] : null;

                  const finalComment = style.comment
                    .replace(aliasReg, '')
                    .trim()
                    .replace(/\n/g, ', ');

                  if (finalComment) {
                    objectValue.comment = finalComment;
                  }
                }

                objectValue.value = aliasValue || fill.value;

                set(result, name, objectValue, customizer);
              });
            }

            break;
          }

          case 'EFFECT': {
            const visibleEffects = style.effects.filter(
              (effect) => effect.visible,
            );

            const dropShadowValues = visibleEffects.filter(
              (effect) =>
                effect.type === 'INNER_SHADOW' || effect.type === 'DROP_SHADOW',
            );

            dropShadowValues.forEach((effect, i) => {
              const propArray = style.name
                .replace(/\./g, '')
                .split('/')
                .map((s) => s.trim())
                .join('.');
              const name = i === 0 ? propArray : `${propArray}.${i}`;
              const shadowEffect = effect as FigmaExport.EffectStyleShadow;
              const objectValue: DropShadowToken = {
                color: { value: shadowEffect.color.rgba },
                inset: { value: shadowEffect.inset },
                offset: {
                  x: {
                    value: shadowEffect.offset.x,
                    attributes: { category: 'size' },
                  },
                  y: {
                    value: shadowEffect.offset.y,
                    attributes: { category: 'size' },
                  },
                },
                blurRadius: {
                  value: shadowEffect.blurRadius / 2,
                  attributes: { category: 'size' },
                },
                spreadRadius: {
                  value: shadowEffect.spreadRadius,
                  attributes: { category: 'size' },
                },
              };

              if (style.comment) {
                objectValue.comment = style.comment;
              }

              set(result, name, objectValue, customizer);
            });

            // TODO: add LAYER_BLUR

            break;
          }
          // TODO: add EFFECT, TEXT cases
        }
      });

    const filePath = makeDir.sync(path.resolve(output));
    fs.writeFileSync(path.resolve(filePath, fileName), replacer(result));
  };
}

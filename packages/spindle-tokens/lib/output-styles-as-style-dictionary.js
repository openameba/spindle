const fs = require('fs');
const path = require('path');
const makeDir = require('make-dir');

const set = require('lodash.setwith');

/**
 * @typedef {function} DefaultReplacer
 * @function
 * @param {object}
 * @returns {string}
 */
function defaultReplacer(obj) {
  return JSON.stringify(obj, null, 2);
}

/**
 * exporter
 * @param {object} params
 * @param {string} params.output - path
 * @param {string} [params.fileName]
 * @param {DefaultReplacer} [params.replacer]
 * @returns {void}
 */
function exporter({
  output,
  fileName = 'design-tokens.json',
  replacer = defaultReplacer,
}) {
  function customizer(obj) {
    return obj || {};
  }

  return (styles) => {
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

                const objectValue = {};
                let aliasValue;

                if (style.comment) {
                  // extract style dictionary style alias value from comment
                  const aliasReg = /{.+}/;
                  const aliasValueMatch = style.comment.match(aliasReg);
                  aliasValue = aliasValueMatch ? aliasValueMatch[0] : null;

                  const finalComment = style.comment.replace(aliasReg, '');

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
              const objectValue = {
                color: { value: effect.color.rgba },
                inset: { value: effect.inset },
                offset: {
                  x: { value: effect.offset.x },
                  y: { value: effect.offset.y },
                },
                blurRadius: { value: effect.blurRadius / 2 },
                spreadRadius: { value: effect.spreadRadius },
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

module.exports = {
  exporter,
};

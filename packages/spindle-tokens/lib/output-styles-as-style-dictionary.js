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
            const value = style.fills
              .filter((fill) => fill.visible)
              .map((fill) => fill.value)
              .join(', ');

            if (value) {
              const propArray = style.name
                .split('/')
                .map((s) => s.trim())
                .join('.');

              const objectValue = {};
              let aliasValue;

              if (style.comment) {
                const aliasValueMatch = style.comment.match(/{.+}/);
                aliasValue = aliasValueMatch ? aliasValueMatch[0] : null;

                objectValue.comment = style.comment;
              }

              objectValue.value = aliasValue || value;

              set(result, propArray, objectValue, customizer);
            }

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

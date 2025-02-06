// eslint-disable-next-line @typescript-eslint/no-var-requires
const { access } = require('fs').promises;
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { dirname, join, resolve } = require('path');

async function checkFileExists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

const shouldReplaceExtension = (value) =>
  (value.startsWith('./') || value.startsWith('../')) &&
  !value.endsWith('.mjs');

/**
 *
 * @param {import('jscodeshift').FileInfo} file
 * @param {import('jscodeshift').API} api
 */
module.exports = async function transformer(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);
  await Promise.all(
    [
      j.ImportDeclaration,
      j.ExportNamedDeclaration,
      j.ExportAllDeclaration,
      j.ExportDefaultDeclaration,
    ]
      .flatMap((declaration) => root.find(declaration).nodes())
      .flatMap(async (node) => {
        const source = node.source;
        if (!source) {
          return;
        }
        const value = source.value;

        if (shouldReplaceExtension(value)) {
          const importPath = resolve(dirname(file.path), value);
          const mjsPath = `${importPath}.mjs`;
          const indexPath = join(importPath, 'index.mjs');

          if (await checkFileExists(mjsPath)) {
            node.source.value = `${value}.mjs`;
          } else if (await checkFileExists(indexPath)) {
            node.source.value = `${value}/index.mjs`;
          } else {
            console.error(
              `missing ${mjsPath} and ${indexPath} for ${file.path}`,
            );
            return;
          }
          console.info(
            `change ${value} to ${node.source.value} in ${file.path}`,
          );
        }
      }),
  );

  return root.toSource();
};

module.exports.checkFileExists = checkFileExists;
module.exports.shouldReplaceExtension = shouldReplaceExtension;

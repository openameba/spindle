const { readFile, writeFile, access } = require('fs').promises;
const { join, dirname, resolve } = require('path');
const glob = require('glob-promise');
const process = require('process');

/**
 * 非同期の置換処理を行う関数
 * @param {string} str - 置換対象の文字列
 * @param {RegExp} regex - 正規表現
 * @param {(match: string, ...args: any[]) => Promise<string>} asyncFn - 非同期関数
 * @return {Promise<string>}
 */
async function replaceAsync(str, regex, asyncFn) {
  const promises = [];
  str.replace(regex, (match, ...args) => {
    const promise = asyncFn(match, ...args);
    promises.push(promise);
    return match;
  });
  const data = await Promise.all(promises);
  return str.replace(regex, () => data.shift());
}

/**
 * 指定されたファイルのimport文を置換する
 * @param {string} filePath - ファイルのパス
 * @return {Promise<void>}
 */
async function replaceImportsInFile(filePath) {
  try {
    const data = await readFile(filePath, 'utf8');
    const importRegex =
      /from\s+['"](\.\/|\.\.\/)(?!.*\.mjs['"])([^'"]+)(['"])/g;
    const result = await replaceAsync(
      data,
      importRegex,
      async (_match, p1, p2, p3) => {
        const importPath = resolve(dirname(filePath), p1 + p2);
        const mjsPath = importPath + '.mjs';
        const indexPath = join(importPath, 'index.mjs');
        return await Promise.allSettled([
          access(mjsPath),
          access(indexPath),
        ]).then((results) => {
          const mjsPathResult = results[0];
          const indexPathResult = results[1];
          if (mjsPathResult.status === 'fulfilled') {
            return `from '${p1}${p2}.mjs${p3}`;
          } else if (indexPathResult.status === 'fulfilled') {
            return `from '${p1}${p2}/index.mjs${p3}`;
          } else {
            console.error(
              `.mjs または /index.mjs が存在しません: ${importPath}`,
            );
            process.exit(1);
          }
        });
      },
    );
    await writeFile(filePath, result, 'utf8');
    if (data !== result) {
      console.log(`置換処理が完了しました: ${filePath}`);
    }
  } catch (err) {
    console.error(`エラーが発生しました: ${filePath}`, err);
    process.exit(1);
  }
}

async function main() {
  try {
    const directories = await glob(join(__dirname, '../packages/*/dist/**/*.mjs'));
    await Promise.all(directories.map(replaceImportsInFile));
  } catch (err) {
    console.error('エラーが発生しました', err);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  replaceAsync,
  replaceImportsInFile,
};

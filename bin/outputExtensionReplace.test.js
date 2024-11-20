const fs = require('fs').promises;
const {
  replaceImportsInFile,
  getMjsFiles,
  replaceAsync,
} = require('./outputExtensionReplace');

jest.mock('fs', () => {
  const originalModule = jest.requireActual('fs');
  return {
    ...originalModule,
    promises: {
      readdir: jest.fn(),
      readFile: jest.fn(),
      writeFile: jest.fn(),
      stat: jest.fn(),
      access: jest.fn(),
    },
  };
});

describe('replaceImportsInFile', () => {
  let originalExit;
  let originalConsoleError;
  let originalConsoleLog;

  beforeAll(() => {
    originalExit = process.exit;
    process.exit = jest.fn();
    originalConsoleError = console.error;
    console.error = jest.fn();
    originalConsoleLog = console.log;
    console.log = jest.fn();
  });

  afterAll(() => {
    process.exit = originalExit;
    console.error = originalConsoleError;
    console.log = originalConsoleLog;
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should replace imports in a file', async () => {
    const filePath = '/file.mjs';
    const fileContent = `
      import React, { forwardRef } from 'react';
      import module from './module';
      import hasIndexDirectory from '../hasIndexDirectory';
    `;
    const expectedContent = `
      import React, { forwardRef } from 'react';
      import module from './module.mjs';
      import hasIndexDirectory from '../hasIndexDirectory/index.mjs';
    `;
    fs.readFile.mockResolvedValue(fileContent);
    fs.writeFile.mockResolvedValue();
    fs.access.mockImplementation((path) => {
      if (path.endsWith('module.mjs')) {
        return Promise.resolve();
      } else if (path.endsWith('hasIndexDirectory/index.mjs')) {
        return Promise.resolve();
      }
      return Promise.reject();
    });
    await replaceImportsInFile(filePath);
    expect(fs.readFile).toHaveBeenCalledWith(filePath, 'utf8');
    expect(fs.writeFile).toHaveBeenCalledWith(
      filePath,
      expectedContent,
      'utf8',
    );
    expect(console.log).toHaveBeenCalledWith(`置換処理が完了しました: ${filePath}`);
  });

  it('should exit the process if an error occurs', async () => {
    const filePath = '/file.mjs';
    fs.readFile.mockRejectedValue(new Error('error'));
    await replaceImportsInFile(filePath);
    expect(process.exit).toHaveBeenCalledWith(1);
    expect(console.error).toHaveBeenCalledWith(
      `エラーが発生しました: ${filePath}`,
      new Error('error'),
    );
  });
});

describe('getMjsFiles', () => {
  it('should only return an array of .mjs files', () => {
    const files = [
      'packages/spindle-ui/dist/Button/Button.mjs',
      'bin/outputExtensionReplace.js',
    ];
    fs.readdir.mockResolvedValue(files);
    fs.stat.mockImplementation((path) => {
      return Promise.resolve({
        isDirectory: () => path === 'packages/spindle-ui/dist/Button',
      });
    });
    return expect(getMjsFiles('/')).resolves.toEqual([
      '/packages/spindle-ui/dist/Button/Button.mjs',
    ]);
  });
});

describe('replaceAsync', () => {
  it('should replace a string asynchronously', async () => {
    const result = await replaceAsync(
      "import module from './module",
      /.\/module/g,
      async () => './module.mjs',
    );
    expect(result).toBe("import module from './module.mjs");
  });
});

const {
  checkFileExists,
  shouldReplaceExtension,
} = require('./outputExtensionReplace');

describe('checkFileExists', () => {
  it('should return true if the file exists', async () => {
    const result = await checkFileExists(__filename);
    expect(result).toBe(true);
  });

  it('should return false if the file does not exist', async () => {
    const filePath = 'non_existent_file.dummy';
    const result = await checkFileExists(filePath);
    expect(result).toBe(false);
  });
});

describe('shouldReplaceExtension', () => {
  it('should return true if the value starts with ./ or ../ and does not end with .mjs', () => {
    [
      { value: './foo', expected: true },
      { value: '../foo', expected: true },
      { value: './foo/bar', expected: true },
      { value: '../foo/bar', expected: true },
      { value: './foo.mjs', expected: false },
      { value: '../foo.mjs', expected: false },
      { value: './foo/bar.mjs', expected: false },
      { value: '../foo/bar.mjs', expected: false },
      { value: 'react', expected: false },
    ].forEach(({ value, expected }) => {
      const result = shouldReplaceExtension(value);
      expect(result).toBe(expected);
    });
  });
});

const {
  checkFileExists,
  shouldReplaceExtension,
  // eslint-disable-next-line @typescript-eslint/no-var-requires
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
  test.each([
    ['./foo', true],
    ['../foo', true],
    ['./foo/bar', true],
    ['../foo/bar', true],
    ['./foo.mjs', false],
    ['../foo.mjs', false],
    ['./foo/bar.mjs', false],
    ['../foo/bar.mjs', false],
    ['react', false],
  ])('should return %p if the value is %p', (value, expected) => {
    const result = shouldReplaceExtension(value);
    expect(result).toBe(expected);
  });
});

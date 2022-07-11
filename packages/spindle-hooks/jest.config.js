module.exports = {
  verbose: true,
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  setupFilesAfterEnv: ['<rootDir>/setup-tests.ts'],
  moduleNameMapper: {
    // rootのnode_modulesを参照してしまってversionが競合してしまっていたので、
    // spindle-hooksのnode_modulesのreactを使用するように指定する
    '^react($|/.+)': '<rootDir>/node_modules/react$1',
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testEnvironment: 'jsdom',
};

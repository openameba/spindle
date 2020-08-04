module.exports = {
  verbose: true,
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  setupFiles: ['<rootDir>/setup-tests.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};

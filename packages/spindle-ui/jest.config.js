module.exports = {
  verbose: true,
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  setupFilesAfterEnv: ['<rootDir>/setup-tests.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};

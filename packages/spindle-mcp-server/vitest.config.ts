import { defineProject } from 'vitest/config';

export default defineProject({
  test: {
    include: ['src/**/*.test.ts'],
    exclude: ['node_modules', 'dist', 'assets'],
    globalSetup: './vitest.global-setup.ts',
  },
});

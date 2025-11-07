import { defineProject } from 'vitest/config';

export default defineProject({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./setup-tests.ts'],
  },
});

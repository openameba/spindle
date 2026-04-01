import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { playwright } from '@vitest/browser-playwright';

const browserProject = {
  plugins: [react()],
  test: {
    name: 'browser',
    include: ['src/**/*.browser.test.tsx'],
    browser: {
      provider: playwright(),
      enabled: true,
      headless: true,
      instances: [{ browser: 'chromium' }],
      screenshotFailures: true,
    },
  },
};

export default defineConfig({
  test: {
    exclude: ['src/**/*.browser.test.tsx', 'node_modules'],
    projects: [
      {
        test: {
          name: 'unit',
          environment: 'node',
          include: ['src/**/*.test.ts'],
        },
      },
      // browser テストは BROWSER_TEST=true の時のみ有効
      ...(process.env.BROWSER_TEST === 'true' ? [browserProject] : []),
    ],
  },
});

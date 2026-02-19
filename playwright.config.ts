import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 30000, // Timeout for each test
  retries: 2, // Retry failed tests
  reporter: [
    ['dot'], // Minimal output
    ['html', { outputFile: 'test-results/report.html' }] // HTML report
  ],
  use: {
    browserName: 'chromium', // Choose your browser (chromium, firefox, webkit)
  },
});
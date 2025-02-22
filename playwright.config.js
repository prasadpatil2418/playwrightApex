// @ts-check
require('dotenv').config();
const { defineConfig, devices } = require('@playwright/test');
import dotenv from 'dotenv';
import path from 'path';

// Read from ".env" file.
dotenv.config({ path: path.resolve(__dirname, '.env') });
// Alternatively, read from "../.env" file.
dotenv.config({ path: path.resolve(__dirname, '..', '.env') });
 
/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({

  globalTimeout: 120 * 120 * 1000,
  timeout: 240 * 1000,
  expect: {
    timeout: 60000,
  },
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
     baseURL: process.env.AUTH_URL,

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    headless: false,
    
  },

  /* Configure projects for major browsers */
  projects: [

    {
      use: {
        browserName: process.env.BROWSER,  // Use the browser defined in the environment variable
        headless: process.env.HEADLESS === 'true',  // Use headless mode based on environment variable
        // Additional browser-specific settings can be added here
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'retain-on-failure',
      },
    },
    
    // {
    //   name: 'chromium',
    //   use: { ...devices['Desktop Chrome'] },
    // },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

  ],
});


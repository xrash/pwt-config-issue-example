import { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
  testDir: './tests',
  testMatch: '*.spec.ts',

  use: {
    video: 'on',
    screenshot: 'on',
    trace: 'on',
  },

  preserveOutput: 'always',
}

export default config


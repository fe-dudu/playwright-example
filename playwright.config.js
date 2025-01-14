const config = {
  timeout: 15 * 1000,
  retries: 3,
  globalSetup: require.resolve('./global-setup'),
  use: {
    headless: true,
    storageState: 'auth.json',
  },
  testDir: './tests',
  testMatch: '*.test.js',
  workers: 3,
};

export default config;

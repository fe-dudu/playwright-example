const config = {
  timeout: 30 * 1000,
  retries: 3,
  use: {
    headless: true,
  },
  testDir: "./tests",
  testMatch: "*.test.js",
  workers: 3,
};

export default config;
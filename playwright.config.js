// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = {
  testDir: './tests',
  timeout: 70* 1000,
    expect: {
    timeout: 7000
  },
  
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {

    browserName: 'firefox',
    viewport: { width: 1280, height: 720 },
    headless: true,
    ignoreHTTPSErrors: true,
    video: 'only-on-failure',
    screenshot: 'only-on-failure',
    actionTimeout: 0,
  
    
  },
  
 
};

module.exports = config

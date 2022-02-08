const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: 'tests/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://gustavogmail.github.io',
      show: true,
      browser: 'chromium'
    }
  },
  include: {
    I: './steps_file.js',
    todo_applicationPage: './pages/todo_application.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'AutomatedTests',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}
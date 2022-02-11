exports.config = {
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
    login_form_applicationPage: './pages/login_form_application.js',
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    allure: {
      enabled: true
    }
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  tests: 'tests/*_test.js',
  name: 'AutomatedTests'
}
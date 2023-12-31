const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    url: 'http://localhost:3000/'
    
  },
  retries: {
    runMode: 1,
    
    },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/*.js'
  },
});

module.exports = (on, config) => {
  // modify the config values
  config.defaultCommandTimeout = 10000

  // read an environment variable and
  // pass its value to the specs
  config.env.userName = process.env.TEST_USER || 'Joe'
  // the specs will be able to access the above value
  // by using Cypress.env('userName')

  // IMPORTANT return the updated config object
  return config
}
module.exports = (on, config) => {

  config.defaultCommandTimeout = 10000

  config.env.userName = process.env.TEST_USER || 'test'
  config.env.userPassword = process.env.TEST_PASSWORD || '1234'

  return config
}
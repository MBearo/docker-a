const dev = require('./config.dev.json')
const prod = require('./config.json')

if (process.env.NODE_ENV === 'production') {
  module.exports = prod
} else if (process.env.NODE_ENV === 'development') {
  module.exports = dev
}

var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',

  TOKEN: '"7430fe97a9baeacd012639c9e4a9d2c977cc2cda"'
})

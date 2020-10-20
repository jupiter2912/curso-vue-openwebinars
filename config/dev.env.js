var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',

  TOKEN: '"7fc00e777ebcd69a7f47de2c6f295fb995453494"'
})

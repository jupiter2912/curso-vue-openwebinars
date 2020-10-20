var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',

  TOKEN: '"7a01407a5b7a1e1751cc0982ea252651ce4fc0b1"'
})

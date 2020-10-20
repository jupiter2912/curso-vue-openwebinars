var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',

  TOKEN: '"279367ece6d9e614e8c47e78ba7506deb4919fe4"'
})

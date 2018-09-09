require('babel-register')({
  presets: ['env']
})
module.exports = require('./webpack.config.client.prod.js')

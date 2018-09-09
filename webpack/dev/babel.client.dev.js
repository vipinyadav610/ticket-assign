require('babel-register')({
    presets: [ 'env' ]
})
module.exports = require("./webpack.config.client.dev.js");

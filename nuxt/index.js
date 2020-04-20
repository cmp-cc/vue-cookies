const { resolve } = require('path')

module.exports = function nuxtVueWaitModule (moduleOptions) {

 const defaults = {
    alias: 'cookies'
  }
  const options = Object.assign({}, defaults, moduleOptions)

  this.addPlugin({
    src: resolve(__dirname, './plugin.template.js'),
    fileName: 'vue-cookies.js',
    options
  })

}

// required by nuxt
module.exports.meta = require('../package.json')

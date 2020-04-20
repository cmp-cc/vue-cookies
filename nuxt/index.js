const { resolve } = require('path')

module.exports = function nuxtVueWaitModule (moduleOptions) {

  const options = Object.assign({}, this.options.cookies, moduleOptions)

  this.addPlugin({
    src: resolve(__dirname, './plugin.template.js'),
    fileName: 'vue-cookies.js',
    options
  })

}

// required by nuxt
module.exports.meta = require('../package.json')

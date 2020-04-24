import Vue from 'vue'
import VueCookies from 'vue-cookies'

export default (ctx, inject) => {  

  // inject options from module
  const pluginOptions = [<%= serialize(options) %>][0] || {}
  const property = pluginOptions.property || '$cookies'

  Vue.use(VueCookies, pluginOptions)
  const instance = Vue.prototype[property]
    
//   if (instance) {
    ctx[property] = instance    
    inject(property.replace('$',''), instance)
//   }
}

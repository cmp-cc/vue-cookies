import Vue from 'vue'
import VueCookies from 'vue-cookies'

export default (obj, inject) => {  
    
  // inject options from module
  const pluginOptions = [<%= serialize(options) %>][0] || {}
  const property = pluginOptions.property || '$cookies'

  Vue.use(VueCookies, pluginOptions)

  inject(property, Vue.$cookies)
}

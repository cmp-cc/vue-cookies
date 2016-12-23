/**
 * Vue Cookies v0.1
 * https://github.com/cmp-cc/vue-cookies
 *
 * Copyright 2016, cmp-cc
 * Released under the MIT license
 */

(function() {
  var VueCookies = {
    // install of Vue
    install: function(Vue) {
      Vue.prototype.$cookies = this
      Vue.cookies = this
    },
    set: function(name, value, expireDays) {
      var exDate = new Date()
      exDate.setDate(exDate.getDate() + expireDays)
      document.cookie =
                name + '=' + encodeURIComponent(value) +
                ((expireDays) == null ? '' : ';expires='+ exDate.toGMTString())
    },

    get: function( key ){
      if(document.cookie.length > 0) {
        var nameIndex = document.cookie.indexOf(key + '=')
        if(nameIndex !== -1){
          var nameStartIndex = nameIndex + key.length + 1
          var nameEndIndex = document.cookie.indexOf(';',nameStartIndex)
          return decodeURIComponent(document.cookie.substring(nameStartIndex,nameEndIndex))
        }
      }
      return ''
    }
  }

  if (typeof exports == "object") {
    module.exports = VueCookies;
  } else if (typeof define == "function" && define.amd) {
    define([], function(){ return VueCookies; })
  } else if (window.Vue) {
    window.VueCookies = VueCookies;
    Vue.use(VueCookies);
  }

})()
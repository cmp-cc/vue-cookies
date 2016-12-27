/**
 * Vue Cookies v1.0
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
    // ===

    get: function (key) {
      return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(key).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
    },
    set : function (key, value, expireDays, path, domain, secure) {
      if (!key || /^(?:expires|max\-age|path|domain|secure)$/i.test(key)) { return false; }
      var sExpires = "";
      if (expireDays) {
        switch (expireDays.constructor) {
          case Number:
            sExpires = expireDays === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + expireDays;
            break;
          case String:
            sExpires = "; expires=" + expireDays;
            break;
          case Date:
            sExpires = "; expires=" + expireDays.toUTCString();
            break;
        }
      }
      document.cookie = encodeURIComponent(key) + "=" + encodeURIComponent(value) + sExpires + (domain ? "; domain=" + domain : "") + (path ? "; path=" + path : "") + (secure ? "; secure" : "");
      return true;
    },
    remove: function (key, path, domain) {
      if (!key || !this.isKey(key)) { return false; }
      document.cookie = encodeURIComponent(key) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + ( domain ? "; domain=" + domain : "") + ( path ? "; path=" + path : "");
      return true;
    },
    isKey: function (key) {
      return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(key).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
    },
    keys: /* optional method: you can safely remove it! */ function () {
      var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
      for (var nIdx = 0; nIdx < aKeys.length; nIdx++) { aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]); }
      return aKeys;
    }
  }

  if (typeof exports == "object") {
    module.exports = VueCookies;
  } else if (typeof define == "function" && define.amd) {
    define([], function(){ return VueCookies; })
  } else if (window.Vue) {
    Vue.use(VueCookies);
  }

})()
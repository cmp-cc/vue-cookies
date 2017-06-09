# vue-cookies

A simple Vue.js plugin for handling browser cookies

## Installation

### Browser
```
  <script src="https://unpkg.com/vue/dist/vue.js"></script>
  <script src="../libs/vue-cookies.js"></script>
```
### Package Managers
```
npm install vue-cookies --save

// require
var Vue = require('vue')
Vue.use(require('vue-cookies'))

// es2015 module
import Vue from 'Vue'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

```

## Api
* Set a cookie
```
this.$cookies.set(name, value[, expireDays[, path[, domain[, secure]]]])
```
* Get a cookie
```
this.$cookies.get(keyName)
```
* Remove a cookie
```
this.$cookie.remove(name[, path],domain)
```
* Exist a `cookie name`
```
this.cookie.isKey(keyName)
```
* Get All `cookie name`
```
this.cookie.keys()  // return a array
```

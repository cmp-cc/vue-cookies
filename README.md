# vue-cookies

A simple Vue.js plugin for handling browser cookies

## Installation

### Browser
```
  <script src="https://unpkg.com/vue/dist/vue.js"></script>
  <script src="https://unpkg.com/vue-cookies@1.5.12/vue-cookies.js"></script>
```
### Package Managers
```
npm install vue-cookies --save

// require
var Vue = require('vue')
Vue.use(require('vue-cookies'))

// es2015 module
import Vue from 'vue'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

// set default config
VueCookies.config('7d')

// set global cookie
VueCookies.set('theme','default');
VueCookies.set('hover-time','1s');
```

## Api

syntax format: **[this | Vue | window].$cookies.[method]**

* Set global config
```
$cookies.config(expireTimes[,path])  // default: expireTimes = 1d , path=/
```

* Set a cookie
```
$cookies.set(keyName, value[, expireTimes[, path[, domain[, secure]]]])   //return this
```
* Get a cookie
```
$cookies.get(keyName)  // return value                             
```
* Remove a cookie
```
$cookies.remove(keyName [, path [, domain]])  // return this
```
* Exist a `cookie name`
```
$cookies.isKey(keyName)  // return false or true
```
* Get All `cookie name`
```
this.$cookies.keys()  // return a array
```

## Example Usage

#### set global config
```
// 30 day after, expire
this.$cookies.config('30d')

this.$cookies.config(new Date(2019,03,13).toUTCString())

// 30 day after, expire, '' current path , browser default
this.$cookies.config(60 * 60 * 24 * 30,'');

// window object
window.$cookies.config('30d')
```

#### support json object
```
var user = { id:1, name:'Journal',session:'25j_7Sl6xDq2Kc3ym0fmrSSk2xV2XkUkX' };
this.$cookies.set('user',user);
// print user name
console.log(this.$cookies.get('user').name)
```

#### set expire times
**Suppose the current time is : Sat, 11 Mar 2017 12:25:57 GMT**

**Following equivalence: 1 day after, expire**

**Support chaining sets together**
``` javascript
 // default expire time: 1 day
this.$cookies.set("user_session","25j_7Sl6xDq2Kc3ym0fmrSSk2xV2XkUkX")
        // number + d , ignore case
        .set("user_session","25j_7Sl6xDq2Kc3ym0fmrSSk2xV2XkUkX","1d")
        .set("user_session","25j_7Sl6xDq2Kc3ym0fmrSSk2xV2XkUkX","1D")
        // Base of second
        .set("user_session","25j_7Sl6xDq2Kc3ym0fmrSSk2xV2XkUkX",60 * 60 * 24)
        // input a Date, + 1day
        .set("user_session","25j_7Sl6xDq2Kc3ym0fmrSSk2xV2XkUkX", new Date(2017, 03, 12))
        // input a date string, + 1day
        .set("user_session","25j_7Sl6xDq2Kc3ym0fmrSSk2xV2XkUkX", "Sat, 13 Mar 2017 12:25:57 GMT")
```
#### set expire times, input number type

```
this.$cookies.set("default_unit_second","input_value",1);            // 1 second after, expire
this.$cookies.set("default_unit_second","input_value",60 + 30);      // 1 minute 30 second after, expire
this.$cookies.set("default_unit_second","input_value",60 * 60 * 12); // 12 hour after, expire
this.$cookies.set("default_unit_second","input_value",60 * 60 * 24 * 30); // 1 month after, expire
```

#### set expire times - end of browser session

```
this.$cookies.set("default_unit_second","input_value",0);          // end of session - use 0 or "0"!
```


#### set expire times , input string type

| Unit   | full name |
| ----------- | ----------- |
| y           |  year       |
| m           |  month      |
| d           |  day        |
| h           |  hour       |
| min         |  minute     |
| s           |  second     |

**Unit Names Ignore Case**

**not support the combination**

**not support the double value**

```javascript
this.$cookies.set("token","GH1.1.1689020474.1484362313","60s");  // 60 second after, expire
this.$cookies.set("token","GH1.1.1689020474.1484362313","30MIN");  // 30 minute after, expire, ignore case
this.$cookies.set("token","GH1.1.1689020474.1484362313","24d");  // 24 day after, expire
this.$cookies.set("token","GH1.1.1689020474.1484362313","4m");  // 4 month after, expire
this.$cookies.set("token","GH1.1.1689020474.1484362313","16h");  // 16 hour after, expire
this.$cookies.set("token","GH1.1.1689020474.1484362313","3y");  // 3 year after, expire

// input date string 
this.$cookies.set('token',"GH1.1.1689020474.1484362313", new Date(2017,3,13).toUTCString());
this.$cookies.set("token","GH1.1.1689020474.1484362313", "Sat, 13 Mar 2017 12:25:57 GMT ");
```

#### set expire support date
```
var date = new Date;
date.setDate(date.getDate() + 1);
this.$cookies.set("token","GH1.1.1689020474.1484362313", date);
```

#### set never expire
```
this.$cookies.set("token","GH1.1.1689020474.1484362313", Infinity);  // never expire
// never expire , only -1,Other negative Numbers are invalid
this.$cookies.set("token","GH1.1.1689020474.1484362313", -1); 
```
#### set other arguments
```
// set path
this.$cookies.set("use_path_argument","value","1d","/app");  

// set domain
this.$cookies.set("use_path_argument","value",null, null, "domain.com");   // default 1 day after,expire

// set secure
this.$cookies.set("use_path_argument","value",null, null, null,true);
```
#### other operation
```
// check a cookie exist
this.$cookies.isKey("token")

// get a cookie
this.$cookies.get("token");

// remove a cookie
this.$cookies.remove("token");

// get all cookie key names, line shows
this.$cookies.keys().join("\n"); 

// vue-cookies global
[this | Vue | window].$cookies.[method] 

```


## Warning
**$cookies key names Cannot be set to ['expires','max-age','path','domain','secure']**


## explain
**vue-cookies no dependencies, It can exist independently, Friendly to vuejs**
```
window.$cookies.get
window.$cookies.set
window.$cookies.isKey
window.$cookies.remove
window.$cookies.keys
```

## License
[MIT](http://opensource.org/licenses/MIT)
Copyright (c) 2016-present, cmp-cc

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("vue")):"function"==typeof define&&define.amd?define(["vue"],t):(e="undefined"!=typeof globalThis?globalThis:e||self)["rollup-vue-ts"]=t(e.Vue)}(this,(function(e){"use strict";function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e),o=function(e,t){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},o(e,t)};
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
/**
      * vue-class-component v7.2.6
      * (c) 2015-present Evan You
      * @license MIT
      */
function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function c(){return"undefined"!=typeof Reflect&&Reflect.defineMetadata&&Reflect.getOwnMetadataKeys}function u(e,t){f(e,t),Object.getOwnPropertyNames(t.prototype).forEach((function(n){f(e.prototype,t.prototype,n)})),Object.getOwnPropertyNames(t).forEach((function(n){f(e,t,n)}))}function f(e,t,n){(n?Reflect.getOwnMetadataKeys(t,n):Reflect.getOwnMetadataKeys(t)).forEach((function(o){var r=n?Reflect.getOwnMetadata(o,t,n):Reflect.getOwnMetadata(o,t);n?Reflect.defineMetadata(o,r,e,n):Reflect.defineMetadata(o,r,e)}))}var s={__proto__:[]}instanceof Array;function l(e,t){var n=t.prototype._init;t.prototype._init=function(){var t=this,n=Object.getOwnPropertyNames(e);if(e.$options.props)for(var o in e.$options.props)e.hasOwnProperty(o)||n.push(o);n.forEach((function(n){Object.defineProperty(t,n,{get:function(){return e[n]},set:function(t){e[n]=t},configurable:!0})}))};var o=new t;t.prototype._init=n;var r={};return Object.keys(o).forEach((function(e){void 0!==o[e]&&(r[e]=o[e])})),r}var p=["data","beforeCreate","created","beforeMount","mounted","beforeDestroy","destroyed","beforeUpdate","updated","activated","deactivated","render","errorCaptured","serverPrefetch"];function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.name=t.name||e._componentTag||e.name;var o=e.prototype;Object.getOwnPropertyNames(o).forEach((function(e){if("constructor"!==e)if(p.indexOf(e)>-1)t[e]=o[e];else{var n=Object.getOwnPropertyDescriptor(o,e);void 0!==n.value?"function"==typeof n.value?(t.methods||(t.methods={}))[e]=n.value:(t.mixins||(t.mixins=[])).push({data:function(){return i({},e,n.value)}}):(n.get||n.set)&&((t.computed||(t.computed={}))[e]={get:n.get,set:n.set})}})),(t.mixins||(t.mixins=[])).push({data:function(){return l(this,e)}});var r=e.__decorators__;r&&(r.forEach((function(e){return e(t)})),delete e.__decorators__);var a=Object.getPrototypeOf(e.prototype),f=a instanceof n.default?a.constructor:n.default,s=f.extend(t);return m(s,e,f),c()&&u(s,e),s}var y={prototype:!0,arguments:!0,callee:!0,caller:!0};function m(e,t,n){Object.getOwnPropertyNames(t).forEach((function(o){if(!y[o]){var i=Object.getOwnPropertyDescriptor(e,o);if(!i||i.configurable){var a,c,u=Object.getOwnPropertyDescriptor(t,o);if(!s){if("cid"===o)return;var f=Object.getOwnPropertyDescriptor(n,o);if(a=u.value,c=r(a),null!=a&&("object"===c||"function"===c)&&f&&f.value===u.value)return}Object.defineProperty(e,o,u)}}}))}function v(e){return"function"==typeof e?d(e):function(t){return d(t,e)}}v.registerHooks=function(e){p.push.apply(p,a(e))};var b=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.count=0,t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.clickBtn=function(){this.count++,console.log("按钮被点击")},t=function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i<3?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}([v({name:"CwhButton"})],t),t}(n.default);function h(e,t,n,o,r,i,a,c,u,f){"boolean"!=typeof a&&(u=c,c=a,a=!1);var s,l="function"==typeof n?n.options:n;if(e&&e.render&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0,r&&(l.functional=!0)),o&&(l._scopeId=o),i?(s=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,u(e)),e&&e._registeredComponents&&e._registeredComponents.add(i)},l._ssrRegister=s):t&&(s=a?function(e){t.call(this,f(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,c(e))}),s)if(l.functional){var p=l.render;l.render=function(e,t){return s.call(t),p(e,t)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,s):[s]}return n}var g,_="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function O(e){return function(e,t){return function(e,t){var n=_?t.media||"default":e,o=w[n]||(w[n]={ids:new Set,styles:[]});if(!o.ids.has(e)){o.ids.add(e);var r=t.source;if(t.map&&(r+="\n/*# sourceURL="+t.map.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t.map))))+" */"),o.element||(o.element=document.createElement("style"),o.element.type="text/css",t.media&&o.element.setAttribute("media",t.media),void 0===g&&(g=document.head||document.getElementsByTagName("head")[0]),g.appendChild(o.element)),"styleSheet"in o.element)o.styles.push(r),o.element.styleSheet.cssText=o.styles.filter(Boolean).join("\n");else{var i=o.ids.size-1,a=document.createTextNode(r),c=o.element.childNodes;c[i]&&o.element.removeChild(c[i]),c.length?o.element.insertBefore(a,c[i]):o.element.appendChild(a)}}}(e,t)}}var w={};var j=b,R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.$style.container},[e._v("\n  点击次数"+e._s(e.count)+"\n  "),n("button",{class:e.$style.btn,attrs:{id:"btn"},on:{click:e.clickBtn}},[e._v("按钮组件")])])};R._withStripped=!0;var A=h({render:R,staticRenderFns:[]},(function(e){e&&(e("data-v-6f8b1400_0",{source:".src-lib-Button-btn-1T_e {\n  background-color: yellow;\n  color: red;\n}",map:{version:3,sources:["index.vue"],names:[],mappings:"AAAA;EACE,wBAAwB;EACxB,UAAU;AACZ",file:"index.vue",sourcesContent:[".btn {\n  background-color: yellow;\n  color: red;\n}\n\n/*# sourceMappingURL=index.vue.map */"]},media:void 0}),Object.defineProperty(this,"$style",{value:{btn:"src-lib-Button-btn-1T_e"}}))}),j,undefined,false,undefined,!1,O,void 0,void 0),C=[A],E={install:function(e){C.forEach((function(t){e.component(t.extendOptions.name,t)}))},Button:A};return E}));
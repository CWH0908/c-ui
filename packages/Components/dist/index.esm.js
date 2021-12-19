import e from"vue";
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
***************************************************************************** */var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},t(e,n)};
/**
  * vue-class-component v7.2.6
  * (c) 2015-present Evan You
  * @license MIT
  */
function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function i(){return"undefined"!=typeof Reflect&&Reflect.defineMetadata&&Reflect.getOwnMetadataKeys}function a(e,t){c(e,t),Object.getOwnPropertyNames(t.prototype).forEach((function(n){c(e.prototype,t.prototype,n)})),Object.getOwnPropertyNames(t).forEach((function(n){c(e,t,n)}))}function c(e,t,n){(n?Reflect.getOwnMetadataKeys(t,n):Reflect.getOwnMetadataKeys(t)).forEach((function(o){var r=n?Reflect.getOwnMetadata(o,t,n):Reflect.getOwnMetadata(o,t);n?Reflect.defineMetadata(o,r,e,n):Reflect.defineMetadata(o,r,e)}))}var s={__proto__:[]}instanceof Array;function u(e,t){var n=t.prototype._init;t.prototype._init=function(){var t=this,n=Object.getOwnPropertyNames(e);if(e.$options.props)for(var o in e.$options.props)e.hasOwnProperty(o)||n.push(o);n.forEach((function(n){Object.defineProperty(t,n,{get:function(){return e[n]},set:function(t){e[n]=t},configurable:!0})}))};var o=new t;t.prototype._init=n;var r={};return Object.keys(o).forEach((function(e){void 0!==o[e]&&(r[e]=o[e])})),r}var f=["data","beforeCreate","created","beforeMount","mounted","beforeDestroy","destroyed","beforeUpdate","updated","activated","deactivated","render","errorCaptured","serverPrefetch"];function l(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};n.name=n.name||t._componentTag||t.name;var r=t.prototype;Object.getOwnPropertyNames(r).forEach((function(e){if("constructor"!==e)if(f.indexOf(e)>-1)n[e]=r[e];else{var t=Object.getOwnPropertyDescriptor(r,e);void 0!==t.value?"function"==typeof t.value?(n.methods||(n.methods={}))[e]=t.value:(n.mixins||(n.mixins=[])).push({data:function(){return o({},e,t.value)}}):(t.get||t.set)&&((n.computed||(n.computed={}))[e]={get:t.get,set:t.set})}})),(n.mixins||(n.mixins=[])).push({data:function(){return u(this,t)}});var c=t.__decorators__;c&&(c.forEach((function(e){return e(n)})),delete t.__decorators__);var s=Object.getPrototypeOf(t.prototype),l=s instanceof e?s.constructor:e,p=l.extend(n);return d(p,t,l),i()&&a(p,t),p}var p={prototype:!0,arguments:!0,callee:!0,caller:!0};function d(e,t,o){Object.getOwnPropertyNames(t).forEach((function(r){if(!p[r]){var i=Object.getOwnPropertyDescriptor(e,r);if(!i||i.configurable){var a,c,u=Object.getOwnPropertyDescriptor(t,r);if(!s){if("cid"===r)return;var f=Object.getOwnPropertyDescriptor(o,r);if(a=u.value,c=n(a),null!=a&&("object"===c||"function"===c)&&f&&f.value===u.value)return}Object.defineProperty(e,r,u)}}}))}function y(e){return"function"==typeof e?l(e):function(t){return l(t,e)}}y.registerHooks=function(e){f.push.apply(f,r(e))};var m=function(e){function n(){var t=null!==e&&e.apply(this,arguments)||this;return t.count=0,t}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}(n,e),n.prototype.clickBtn=function(){this.count++,console.log("按钮被点击")},n=function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i<3?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}([y({name:"CwhButton"})],n),n}(e);function v(e,t,n,o,r,i,a,c,s,u){"boolean"!=typeof a&&(s=c,c=a,a=!1);var f,l="function"==typeof n?n.options:n;if(e&&e.render&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0,r&&(l.functional=!0)),o&&(l._scopeId=o),i?(f=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,s(e)),e&&e._registeredComponents&&e._registeredComponents.add(i)},l._ssrRegister=f):t&&(f=a?function(e){t.call(this,u(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,c(e))}),f)if(l.functional){var p=l.render;l.render=function(e,t){return f.call(t),p(e,t)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,f):[f]}return n}var b,h="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function g(e){return function(e,t){return function(e,t){var n=h?t.media||"default":e,o=_[n]||(_[n]={ids:new Set,styles:[]});if(!o.ids.has(e)){o.ids.add(e);var r=t.source;if(t.map&&(r+="\n/*# sourceURL="+t.map.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t.map))))+" */"),o.element||(o.element=document.createElement("style"),o.element.type="text/css",t.media&&o.element.setAttribute("media",t.media),void 0===b&&(b=document.head||document.getElementsByTagName("head")[0]),b.appendChild(o.element)),"styleSheet"in o.element)o.styles.push(r),o.element.styleSheet.cssText=o.styles.filter(Boolean).join("\n");else{var i=o.ids.size-1,a=document.createTextNode(r),c=o.element.childNodes;c[i]&&o.element.removeChild(c[i]),c.length?o.element.insertBefore(a,c[i]):o.element.appendChild(a)}}}(e,t)}}var _={};var O=m,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.$style.container},[e._v("\n  点击次数"+e._s(e.count)+"\n  "),n("button",{class:e.$style.btn,attrs:{id:"btn"},on:{click:e.clickBtn}},[e._v("按钮组件")])])};w._withStripped=!0;var j=v({render:w,staticRenderFns:[]},(function(e){e&&(e("data-v-6f8b1400_0",{source:".src-lib-Button-btn-1T_e {\n  background-color: yellow;\n  color: red;\n}",map:{version:3,sources:["index.vue"],names:[],mappings:"AAAA;EACE,wBAAwB;EACxB,UAAU;AACZ",file:"index.vue",sourcesContent:[".btn {\n  background-color: yellow;\n  color: red;\n}\n\n/*# sourceMappingURL=index.vue.map */"]},media:void 0}),Object.defineProperty(this,"$style",{value:{btn:"src-lib-Button-btn-1T_e"}}))}),O,undefined,false,undefined,!1,g,void 0,void 0),R=[j],A={install:function(e){R.forEach((function(t){e.component(t.extendOptions.name,t)}))},Button:j};export{A as default};

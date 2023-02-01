// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).isPlainObjectArray=r()}(this,(function(){"use strict";var t=Math.floor;function r(r){return null!=r&&"function"!=typeof r&&"number"==typeof r.length&&(e=r.length,t(e)===e)&&r.length>=0&&r.length<=4294967295;var e}var e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function n(){return e&&"symbol"==typeof Symbol.toStringTag}var o=Object.prototype.toString;var u=Object.prototype.hasOwnProperty;function i(t,r){return null!=t&&u.call(t,r)}var c="function"==typeof Symbol?Symbol.toStringTag:"";var f=n()?function(t){var r,e,n;if(null==t)return o.call(t);e=t[c],r=i(t,c);try{t[c]=void 0}catch(r){return o.call(t)}return n=o.call(t),r?t[c]=e:delete t[c],n}:function(t){return o.call(t)};var l=Array.isArray?Array.isArray:function(t){return"[object Array]"===f(t)};var a=/./,p="function"==typeof Object.defineProperty?Object.defineProperty:null;var y,s=Object.defineProperty,b=Object.prototype,v=b.toString,d=b.__defineGetter__,j=b.__defineSetter__,g=b.__lookupGetter__,_=b.__lookupSetter__;y=function(){try{return p({},"x",{}),!0}catch(t){return!1}}()?s:function(t,r,e){var n,o,u,i;if("object"!=typeof t||null===t||"[object Array]"===v.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===v.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(g.call(t,r)||_.call(t,r)?(n=t.__proto__,t.__proto__=b,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),u="get"in e,i="set"in e,o&&(u||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&d&&d.call(t,r,e.get),i&&j&&j.call(t,r,e.set),t};var m=y;function h(t,r,e){m(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function w(t){return"boolean"==typeof t}var O=Boolean.prototype.toString;var S=n();function P(t){return"object"==typeof t&&(t instanceof Boolean||(S?function(t){try{return O.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===f(t)))}function A(t){return w(t)||P(t)}function E(){return new Function("return this;")()}h(A,"isPrimitive",w),h(A,"isObject",P);var T="object"==typeof self?self:null,B="object"==typeof window?window:null,x="object"==typeof global?global:null;var V=function(t){if(arguments.length){if(!w(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return E()}if(T)return T;if(B)return B;if(x)return x;throw new Error("unexpected error. Unable to resolve global object.")}(),F=V.document&&V.document.childNodes,M=Int8Array;function k(){return/^\s*function\s*([^(]*)/i}var C=/^\s*function\s*([^(]*)/i;function G(t){return null!==t&&"object"==typeof t}function L(t){var r,e,n,o;if(("Object"===(e=f(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=C.exec(n.toString()))return r[1]}return G(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}h(k,"REGEXP",C),h(G,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!l(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(G));var I="function"==typeof a||"object"==typeof M||"function"==typeof F?function(t){return L(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?L(t).toLowerCase():r};function N(t){return"function"===I(t)}var R,U=Object.getPrototypeOf;R=N(Object.getPrototypeOf)?U:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===f(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var X=R;var q=Object.prototype;var z=function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var n,o;if(!r(e))return!1;if(0===(n=e.length))return!1;for(o=0;o<n;o++)if(!1===t(e[o]))return!1;return!0}}((function(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!l(t)}(t)&&(r=function(t){return null==t?null:(t=Object(t),X(t))}(t),!r||!i(t,"constructor")&&i(r,"constructor")&&N(r.constructor)&&"[object Function]"===f(r.constructor)&&i(r,"isPrototypeOf")&&N(r.isPrototypeOf)&&(r===q||function(t){var r;for(r in t)if(!i(t,r))return!1;return!0}(t)))}));return z}));
//# sourceMappingURL=index.js.map

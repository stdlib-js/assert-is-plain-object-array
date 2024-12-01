// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).isPlainObjectArray=e()}(this,(function(){"use strict";var r=Math.floor;var e=4294967295;function t(t){return null!=t&&"function"!=typeof t&&"number"==typeof t.length&&(n=t.length,r(n)===n)&&t.length>=0&&t.length<=e;var n}function n(r){return"number"==typeof r}function o(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+o(i):o(i)+r,n&&(r="-"+r)),r}var a=String.prototype.toLowerCase,c=String.prototype.toUpperCase;function u(r){var e,t,o;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,o=parseInt(t,10),!isFinite(o)){if(!n(t))throw new Error("invalid integer. Value: "+t);o=0}return o<0&&("u"===r.specifier||10!==e)&&(o=4294967295+o+1),o<0?(t=(-o).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=o.toString(e),o||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===c.call(r.specifier)?c.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var l=Math.abs,f=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,y=/^(\d+)$/,b=/^(\d+)e/,h=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var e,t,o=parseFloat(r.arg);if(!isFinite(o)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);o=r.arg}switch(r.specifier){case"e":case"E":t=o.toExponential(r.precision);break;case"f":case"F":t=o.toFixed(r.precision);break;case"g":case"G":l(o)<1e-4?((e=r.precision)>0&&(e-=1),t=o.toExponential(e)):t=o.toPrecision(r.precision),r.alternate||(t=p.call(t,w,"$1e"),t=p.call(t,v,"e"),t=p.call(t,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=p.call(t,g,"e+0$1"),t=p.call(t,d,"e-0$1"),r.alternate&&(t=p.call(t,y,"$1."),t=p.call(t,b,"$1.e")),o>=0&&r.sign&&(t=r.sign+t),t=r.specifier===s.call(r.specifier)?s.call(t):f.call(t)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var _=String.fromCharCode,E=Array.isArray;function S(r){return r!=r}function O(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function x(r){var e,t,n,o,a,c,l,f,s,p,g,d,y;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",l=1,f=0;f<r.length;f++)if(n=r[f],"string"==typeof n)c+=n;else{if(e=void 0!==n.precision,!(n=O(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(o=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,S(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,S(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!S(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=S(a)?String(n.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,d=n.padRight,y=void 0,(y=g-p.length)<0?p:p=d?p+j(y):j(y)+p)),c+=n.arg||"",l+=1}return c}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function A(r){var e,t,n,o;for(t=[],o=0,n=k.exec(r);n;)(e=r.slice(o,k.lastIndex-n[0].length)).length&&t.push(e),t.push(T(n)),o=k.lastIndex,n=k.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function V(r){var e,t;if("string"!=typeof r)throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[A(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return x.apply(null,e)}var P="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function F(){return P&&"symbol"==typeof Symbol.toStringTag}var $=Object.prototype.toString;var C=Object.prototype.hasOwnProperty;function I(r,e){return null!=r&&C.call(r,e)}var B="function"==typeof Symbol?Symbol:void 0,R="function"==typeof B?B.toStringTag:"";var L=F()?function(r){var e,t,n;if(null==r)return $.call(r);t=r[R],e=I(r,R);try{r[R]=void 0}catch(e){return $.call(r)}return n=$.call(r),e?r[R]=t:delete r[R],n}:function(r){return $.call(r)};var G=Array.isArray?Array.isArray:function(r){return"[object Array]"===L(r)};var M=/./,Z="function"==typeof Object.defineProperty?Object.defineProperty:null;var W,U=Object.defineProperty,X=Object.prototype,z=X.toString,N=X.__defineGetter__,q=X.__defineSetter__,D=X.__lookupGetter__,H=X.__lookupSetter__;W=function(){try{return Z({},"x",{}),!0}catch(r){return!1}}()?U:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===z.call(r))throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===z.call(t))throw new TypeError(V("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(D.call(r,e)||H.call(r,e)?(n=r.__proto__,r.__proto__=X,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&N&&N.call(r,e,t.get),a&&q&&q.call(r,e,t.set),r};var J=W;function K(r,e,t){J(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Q(r){return"boolean"==typeof r}var Y=Boolean,rr=Boolean.prototype.toString;var er=F();function tr(r){return"object"==typeof r&&(r instanceof Y||(er?function(r){try{return rr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===L(r)))}function nr(r){return Q(r)||tr(r)}K(nr,"isPrimitive",Q),K(nr,"isObject",tr);var or="object"==typeof self?self:null,ir="object"==typeof window?window:null,ar="object"==typeof global?global:null,cr="object"==typeof globalThis?globalThis:null;var ur=function(r){if(arguments.length){if(!Q(r))throw new TypeError(V("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(cr)return cr;if(or)return or;if(ir)return ir;if(ar)return ar;throw new Error("unexpected error. Unable to resolve global object.")}(),lr=ur.document&&ur.document.childNodes,fr=Int8Array;function sr(){return/^\s*function\s*([^(]*)/i}var pr=/^\s*function\s*([^(]*)/i;function gr(r){return null!==r&&"object"==typeof r}function dr(r){var e,t,n,o;if(("Object"===(t=L(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=pr.exec(n.toString()))return e[1]}return gr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}K(sr,"REGEXP",pr),K(gr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(V("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!G(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(gr));var yr="function"==typeof M||"object"==typeof fr||"function"==typeof lr?function(r){return dr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?dr(r).toLowerCase():e};function br(r){return"function"===yr(r)}var hr,vr=Object,wr=Object.getPrototypeOf;hr=br(Object.getPrototypeOf)?wr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===L(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var mr=hr;var jr=Object.prototype;var _r=function(r){if("function"!=typeof r)throw new TypeError(V("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var n,o;if(!t(e))return!1;if(0===(n=e.length))return!1;for(o=0;o<n;o++)if(!1===r(e[o]))return!1;return!0}}((function(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!G(r)}(r)&&(!(e=function(r){return null==r?null:(r=vr(r),mr(r))}(r))||!I(r,"constructor")&&I(e,"constructor")&&br(e.constructor)&&"[object Function]"===L(e.constructor)&&I(e,"isPrototypeOf")&&br(e.isPrototypeOf)&&(e===jr||function(r){var e;for(e in r)if(!I(r,e))return!1;return!0}(r)))}));return _r}));
//# sourceMappingURL=index.js.map
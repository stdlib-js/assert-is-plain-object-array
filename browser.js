// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e=Math.floor;function t(t){return null!=t&&"function"!=typeof t&&"number"==typeof t.length&&(r=t.length,e(r)===r)&&t.length>=0&&t.length<=4294967295;var r}function r(e){return"number"==typeof e}function n(e){var t,r="";for(t=0;t<e;t++)r+="0";return r}function o(e,t,r){var o=!1,i=t-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(o=!0,e=e.substr(1)),e=r?e+n(i):n(i)+e,o&&(e="-"+e)),e}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(e){var t,n,c;switch(e.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=e.arg,c=parseInt(n,10),!isFinite(c)){if(!r(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===e.specifier||10!==t)&&(c=4294967295+c+1),c<0?(n=(-c).toString(t),e.precision&&(n=o(n,e.precision,e.padRight)),n="-"+n):(n=c.toString(t),c||e.precision?e.precision&&(n=o(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===t&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):i.call(n)),8===t&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function l(e){return"string"==typeof e}var u=Math.abs,f=String.prototype.toLowerCase,p=String.prototype.toUpperCase,s=String.prototype.replace,y=/e\+(\d)$/,g=/e-(\d)$/,b=/^(\d+)$/,d=/^(\d+)e/,h=/\.0$/,v=/\.0*e/,_=/(\..*[^0])0*e/;function m(e){var t,n,o=parseFloat(e.arg);if(!isFinite(o)){if(!r(e.arg))throw new Error("invalid floating-point number. Value: "+n);o=e.arg}switch(e.specifier){case"e":case"E":n=o.toExponential(e.precision);break;case"f":case"F":n=o.toFixed(e.precision);break;case"g":case"G":u(o)<1e-4?((t=e.precision)>0&&(t-=1),n=o.toExponential(t)):n=o.toPrecision(e.precision),e.alternate||(n=s.call(n,_,"$1e"),n=s.call(n,v,"e"),n=s.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=s.call(n,y,"e+0$1"),n=s.call(n,g,"e-0$1"),e.alternate&&(n=s.call(n,b,"$1."),n=s.call(n,d,"$1.e")),o>=0&&e.sign&&(n=e.sign+n),n=e.specifier===p.call(e.specifier)?p.call(n):f.call(n)}function w(e){var t,r="";for(t=0;t<e;t++)r+=" ";return r}function j(e,t,r){var n=t-e.length;return n<0?e:e=r?e+w(n):w(n)+e}var S=String.fromCharCode,O=isNaN,E=Array.isArray;function T(e){var t={};return t.specifier=e.specifier,t.precision=void 0===e.precision?1:e.precision,t.width=e.width,t.flags=e.flags||"",t.mapping=e.mapping,t}function k(e){var t,r,n,i,a,u,f,p,s;if(!E(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(u="",f=1,p=0;p<e.length;p++)if(l(n=e[p]))u+=n;else{if(t=void 0!==n.precision,!(n=T(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),r=n.flags,s=0;s<r.length;s++)switch(i=r.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=r.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,O(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,O(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!O(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=O(a)?String(n.arg):S(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=j(n.arg,n.width,n.padRight)),u+=n.arg||"",f+=1}return u}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function P(e){var t={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(t.precision="1"),t}function A(e){var t,r,n,o;for(r=[],o=0,n=x.exec(e);n;)(t=e.slice(o,x.lastIndex-n[0].length)).length&&r.push(t),r.push(P(n)),o=x.lastIndex,n=x.exec(e);return(t=e.slice(o)).length&&r.push(t),r}function V(e){return"string"==typeof e}function F(e){var t,r;if(!V(e))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",e));for(t=[A(e)],r=1;r<arguments.length;r++)t.push(arguments[r]);return k.apply(null,t)}function C(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var $=C(),G=Object.prototype.toString,I=Object.prototype.hasOwnProperty;function B(e,t){return null!=e&&I.call(e,t)}var R,L="function"==typeof Symbol?Symbol:void 0,M="function"==typeof L?L.toStringTag:"",Z=$&&"symbol"==typeof Symbol.toStringTag?function(e){var t,r,n;if(null==e)return G.call(e);r=e[M],t=B(e,M);try{e[M]=void 0}catch(t){return G.call(e)}return n=G.call(e),t?e[M]=r:delete e[M],n}:function(e){return G.call(e)},W=Array.isArray?Array.isArray:function(e){return"[object Array]"===Z(e)},N=/./,U="function"==typeof Object.defineProperty?Object.defineProperty:null,X=Object.defineProperty,z=Object.prototype,q=z.toString,D=z.__defineGetter__,H=z.__defineSetter__,J=z.__lookupGetter__,K=z.__lookupSetter__;R=function(){try{return U({},"x",{}),!0}catch(e){return!1}}()?X:function(e,t,r){var n,o,i,a;if("object"!=typeof e||null===e||"[object Array]"===q.call(e))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof r||null===r||"[object Array]"===q.call(r))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",r));if((o="value"in r)&&(J.call(e,t)||K.call(e,t)?(n=e.__proto__,e.__proto__=z,delete e[t],e[t]=r.value,e.__proto__=n):e[t]=r.value),i="get"in r,a="set"in r,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&D&&D.call(e,t,r.get),a&&H&&H.call(e,t,r.set),e};var Q=R;function Y(e,t,r){Q(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}function ee(e){return"boolean"==typeof e}var te=C();function re(){return te&&"symbol"==typeof Symbol.toStringTag}var ne=Object.prototype.toString,oe="function"==typeof Symbol?Symbol:void 0,ie="function"==typeof oe?oe.toStringTag:"",ae=re()?function(e){var t,r,n;if(null==e)return ne.call(e);r=e[ie],t=B(e,ie);try{e[ie]=void 0}catch(t){return ne.call(e)}return n=ne.call(e),t?e[ie]=r:delete e[ie],n}:function(e){return ne.call(e)},ce=Boolean,le=Boolean.prototype.toString,ue=re();function fe(e){return"object"==typeof e&&(e instanceof ce||(ue?function(e){try{return le.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===ae(e)))}function pe(e){return ee(e)||fe(e)}function se(){return new Function("return this;")()}Y(pe,"isPrimitive",ee),Y(pe,"isObject",fe);var ye,ge="object"==typeof self?self:null,be="object"==typeof window?window:null,de="object"==typeof globalThis?globalThis:null,he=function(e){if(arguments.length){if(!ee(e))throw new TypeError(F("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return se()}if(de)return de;if(ge)return ge;if(be)return be;throw new Error("unexpected error. Unable to resolve global object.")}(),ve=he.document&&he.document.childNodes,_e=Int8Array,me=C(),we=Object.prototype.toString,je="function"==typeof Symbol?Symbol:void 0,Se="function"==typeof je?je.toStringTag:"",Oe=me&&"symbol"==typeof Symbol.toStringTag?function(e){var t,r,n;if(null==e)return we.call(e);r=e[Se],t=B(e,Se);try{e[Se]=void 0}catch(t){return we.call(e)}return n=we.call(e),t?e[Se]=r:delete e[Se],n}:function(e){return we.call(e)},Ee="function"==typeof Object.defineProperty?Object.defineProperty:null,Te=Object.defineProperty,ke=Object.prototype,xe=ke.toString,Pe=ke.__defineGetter__,Ae=ke.__defineSetter__,Ve=ke.__lookupGetter__,Fe=ke.__lookupSetter__;ye=function(){try{return Ee({},"x",{}),!0}catch(e){return!1}}()?Te:function(e,t,r){var n,o,i,a;if("object"!=typeof e||null===e||"[object Array]"===xe.call(e))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof r||null===r||"[object Array]"===xe.call(r))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",r));if((o="value"in r)&&(Ve.call(e,t)||Fe.call(e,t)?(n=e.__proto__,e.__proto__=ke,delete e[t],e[t]=r.value,e.__proto__=n):e[t]=r.value),i="get"in r,a="set"in r,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&Pe&&Pe.call(e,t,r.get),a&&Ae&&Ae.call(e,t,r.set),e};var Ce=ye;function $e(){return/^\s*function\s*([^(]*)/i}var Ge=/^\s*function\s*([^(]*)/i;!function(e,t,r){Ce(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}($e,"REGEXP",Ge);var Ie,Be="function"==typeof Object.defineProperty?Object.defineProperty:null,Re=Object.defineProperty,Le=Object.prototype,Me=Le.toString,Ze=Le.__defineGetter__,We=Le.__defineSetter__,Ne=Le.__lookupGetter__,Ue=Le.__lookupSetter__;Ie=function(){try{return Be({},"x",{}),!0}catch(e){return!1}}()?Re:function(e,t,r){var n,o,i,a;if("object"!=typeof e||null===e||"[object Array]"===Me.call(e))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof r||null===r||"[object Array]"===Me.call(r))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",r));if((o="value"in r)&&(Ne.call(e,t)||Ue.call(e,t)?(n=e.__proto__,e.__proto__=Le,delete e[t],e[t]=r.value,e.__proto__=n):e[t]=r.value),i="get"in r,a="set"in r,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&Ze&&Ze.call(e,t,r.get),a&&We&&We.call(e,t,r.set),e};var Xe=Ie;function ze(e){return null!==e&&"object"==typeof e}function qe(e){var t,r,n,o;if(("Object"===(r=Oe(e).slice(8,-1))||"Error"===r)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(t=Ge.exec(n.toString()))return t[1]}return ze(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}!function(e,t,r){Xe(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}(ze,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",e));return function(t){var r,n;if(!W(t))return!1;if(0===(r=t.length))return!1;for(n=0;n<r;n++)if(!1===e(t[n]))return!1;return!0}}(ze));var De="function"==typeof N||"object"==typeof _e||"function"==typeof ve?function(e){return qe(e).toLowerCase()}:function(e){var t;return null===e?"null":"object"==(t=typeof e)?qe(e).toLowerCase():t};function He(e){return"function"===De(e)}var Je,Ke=Object,Qe=Object.getPrototypeOf,Ye=C(),et=Object.prototype.toString,tt="function"==typeof Symbol?Symbol:void 0,rt="function"==typeof tt?tt.toStringTag:"",nt=Ye&&"symbol"==typeof Symbol.toStringTag?function(e){var t,r,n;if(null==e)return et.call(e);r=e[rt],t=B(e,rt);try{e[rt]=void 0}catch(t){return et.call(e)}return n=et.call(e),t?e[rt]=r:delete e[rt],n}:function(e){return et.call(e)};Je=He(Object.getPrototypeOf)?Qe:function(e){var t=function(e){return e.__proto__}(e);return t||null===t?t:"[object Function]"===nt(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var ot=Je,it=C(),at=Object.prototype.toString,ct="function"==typeof Symbol?Symbol:void 0,lt="function"==typeof ct?ct.toStringTag:"",ut=it&&"symbol"==typeof Symbol.toStringTag?function(e){var t,r,n;if(null==e)return at.call(e);r=e[lt],t=B(e,lt);try{e[lt]=void 0}catch(t){return at.call(e)}return n=at.call(e),t?e[lt]=r:delete e[lt],n}:function(e){return at.call(e)},ft=Object.prototype,pt=function(e){if("function"!=typeof e)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var n,o;if(!t(r))return!1;if(0===(n=r.length))return!1;for(o=0;o<n;o++)if(!1===e(r[o]))return!1;return!0}}((function(e){var t;return!!function(e){return"object"==typeof e&&null!==e&&!W(e)}(e)&&(t=function(e){return null==e?null:(e=Ke(e),ot(e))}(e),!t||!B(e,"constructor")&&B(t,"constructor")&&He(t.constructor)&&"[object Function]"===ut(t.constructor)&&B(t,"isPrototypeOf")&&He(t.isPrototypeOf)&&(t===ft||function(e){var t;for(t in e)if(!B(e,t))return!1;return!0}(e)))}));return pt},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).isPlainObjectArray=t();
//# sourceMappingURL=browser.js.map

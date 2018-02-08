/*

base64.js 2.15
Source: https://github.com/dankogai/js-base64

Copyright 2017 Dan Kogai
License: http://opensource.org/licenses/BSD-3-Clause

*/

!function(e){"use strict";var t,r=e.Base64;if("undefined"!=typeof module&&module.exports)try{t=require("buffer").Buffer}catch(e){}var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",o=function(e){for(var t={},r=0,n=e.length;r<n;r++)t[e.charAt(r)]=r;return t}(n),u=String.fromCharCode,c=function(e){if(e.length<2)return(t=e.charCodeAt(0))<128?e:t<2048?u(192|t>>>6)+u(128|63&t):u(224|t>>>12&15)+u(128|t>>>6&63)+u(128|63&t);var t=65536+1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320);return u(240|t>>>18&7)+u(128|t>>>12&63)+u(128|t>>>6&63)+u(128|63&t)},a=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,i=function(e){return e.replace(a,c)},f=function(e){var t=[0,2,1][e.length%3],r=e.charCodeAt(0)<<16|(e.length>1?e.charCodeAt(1):0)<<8|(e.length>2?e.charCodeAt(2):0);return[n.charAt(r>>>18),n.charAt(r>>>12&63),t>=2?"=":n.charAt(r>>>6&63),t>=1?"=":n.charAt(63&r)].join("")},d=e.btoa?function(t){return e.btoa(t)}:function(e){return e.replace(/[\s\S]{1,3}/g,f)},h=t?function(e){return(e.constructor===t.constructor?e:new t(e)).toString("base64")}:function(e){return d(i(e))},s=function(e,t){return t?h(String(e)).replace(/[+\/]/g,function(e){return"+"==e?"-":"_"}).replace(/=/g,""):h(String(e))},l=function(e){return s(e,!0)},g=new RegExp(["[À-ß][-¿]","[à-ï][-¿]{2}","[ð-÷][-¿]{3}"].join("|"),"g"),p=function(e){switch(e.length){case 4:var t=((7&e.charCodeAt(0))<<18|(63&e.charCodeAt(1))<<12|(63&e.charCodeAt(2))<<6|63&e.charCodeAt(3))-65536;return u(55296+(t>>>10))+u(56320+(1023&t));case 3:return u((15&e.charCodeAt(0))<<12|(63&e.charCodeAt(1))<<6|63&e.charCodeAt(2));default:return u((31&e.charCodeAt(0))<<6|63&e.charCodeAt(1))}},A=function(e){return e.replace(g,p)},b=function(e){var t=e.length,r=t%4,n=(t>0?o[e.charAt(0)]<<18:0)|(t>1?o[e.charAt(1)]<<12:0)|(t>2?o[e.charAt(2)]<<6:0)|(t>3?o[e.charAt(3)]:0),c=[u(n>>>16),u(n>>>8&255),u(255&n)];return c.length-=[0,0,2,1][r],c.join("")},C=e.atob?function(t){return e.atob(t)}:function(e){return e.replace(/[\s\S]{1,4}/g,b)},B=t?function(e){return(e.constructor===t.constructor?e:new t(e,"base64")).toString()}:function(e){return A(C(e))},y=function(e){return B(String(e).replace(/[-_]/g,function(e){return"-"==e?"+":"/"}).replace(/[^A-Za-z0-9\+\/]/g,""))},S=function(){var t=e.Base64;return e.Base64=r,t};if(e.Base64={VERSION:"2.1.9",atob:C,btoa:d,fromBase64:y,toBase64:s,utob:i,encode:s,encodeURI:l,btou:A,decode:y,noConflict:S},"function"==typeof Object.defineProperty){var m=function(e){return{value:e,enumerable:!1,writable:!0,configurable:!0}};e.Base64.extendString=function(){Object.defineProperty(String.prototype,"fromBase64",m(function(){return y(this)})),Object.defineProperty(String.prototype,"toBase64",m(function(e){return s(this,e)})),Object.defineProperty(String.prototype,"toBase64URI",m(function(){return s(this,!0)}))}}e.Meteor&&(Base64=e.Base64),"undefined"!=typeof module&&module.exports&&(module.exports.Base64=e.Base64),"function"==typeof define&&define.amd&&define([],function(){return e.Base64})}("undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:this);
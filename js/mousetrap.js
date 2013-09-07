/*

Mousetrap 1.4.4
Source: http://github.com/ccampbell/mousetrap

Copyright 2013 Craig Campbell
License: http://www.apache.org/licenses/LICENSE-2.0

*/

(function(){function s(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent("on"+b,c)}function z(a){if("keypress"==a.type){var b=String.fromCharCode(a.which);a.shiftKey||(b=b.toLowerCase());return" "==b?"space":b}return k[a.which]?k[a.which]:A[a.which]?A[a.which]:String.fromCharCode(a.which).toLowerCase()}function t(a){a=a||{};var b=!1,c;for(c in p)a[c]?b=!0:p[c]=0;b||(u=!1)}function B(a,b,c,d,e,g){var f,l,h=[],k=c.type;if(!m[a])return[];"keyup"==k&&v(a)&&(b=[a]);for(f=0;f<m[a].length;++f)if(l=m[a][f],!(!d&&l.seq&&p[l.seq]!=l.level||k!=l.action||("keypress"!=k||c.metaKey||c.ctrlKey)&&b.sort().join(",")!==l.modifiers.sort().join(","))){var n=d&&l.seq==d&&l.level==g;(!d&&l.combo==e||n)&&m[a].splice(f,1);h.push(l)}return h}function I(a){var b=[];a.shiftKey&&b.push("shift");a.altKey&&b.push("alt");a.ctrlKey&&b.push("ctrl");a.metaKey&&b.push("meta");return b}function w(a,b,c){n.stopCallback(b,b.target||b.srcElement,c)||!1!==a(b,c)||(b.preventDefault&&b.preventDefault(),b.stopPropagation&&b.stopPropagation(),b.returnValue=!1,b.cancelBubble=!0)}function x(a){"number"!==typeof a.which&&(a.which=a.keyCode);var b=z(a);b&&("keyup"==a.type&&y===b?y=!1:n.handleKey(b,I(a),a))}function v(a){return"shift"==a||"ctrl"==a||"alt"==a||"meta"==a}function J(a,b,c,d){function e(b){return function(){u=b;++p[a];clearTimeout(C);C=setTimeout(t,1E3)}}function g(b){w(c,b,a);"keyup"!==d&&(y=z(b));setTimeout(t,10)}for(var f=p[a]=0;f<b.length;++f){var h=f+1===b.length?g:e(d||D(b[f+1]).action);E(b[f],h,d,a,f)}}function D(a,b){var c,d,e,g=[];c="+"===a?["+"]:a.split("+");for(e=0;e<c.length;++e)d=c[e],F[d]&&(d=F[d]),b&&("keypress"!=b&&G[d])&&(d=G[d],g.push("shift")),v(d)&&g.push(d);c=d;e=b;if(!e){if(!q){q={};for(var f in k)95<f&&112>f||k.hasOwnProperty(f)&&(q[k[f]]=f)}e=q[c]?"keydown":"keypress"}"keypress"==e&&g.length&&(e="keydown");return{key:d,modifiers:g,action:e}}function E(a,b,c,d,e){r[a+":"+c]=b;a=a.replace(/\s+/g," ");var g=a.split(" ");1<g.length?J(a,g,b,c):(c=D(a,c),m[c.key]=m[c.key]||[],B(c.key,c.modifiers,{type:c.action},d,a,e),m[c.key][d?"unshift":"push"]({callback:b,modifiers:c.modifiers,action:c.action,seq:d,level:e,combo:a}))}for(var k={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},A={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},G={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},F={option:"alt",command:"meta","return":"enter",escape:"esc",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},q,m={},r={},p={},C,y=!1,H=!1,u=!1,h=1;20>h;++h)k[111+h]="f"+h;for(h=0;9>=h;++h)k[h+96]=h;s(document,"keypress",x);s(document,"keydown",x);s(document,"keyup",x);var n={bind:function(a,b,c){a=a instanceof Array?a:[a];for(var d=0;d<a.length;++d)E(a[d],b,c);return this},unbind:function(a,b){return n.bind(a,function(){},b)},trigger:function(a,b){if(r[a+":"+b])r[a+":"+b]({},a);return this},reset:function(){m={};r={};return this},stopCallback:function(a,b){return-1<(" "+b.className+" ").indexOf(" mousetrap ")?!1:"INPUT"==b.tagName||"SELECT"==b.tagName||"TEXTAREA"==b.tagName||b.contentEditable&&"true"==b.contentEditable},handleKey:function(a,b,c){var d=B(a,b,c),e;b={};var g=0,f=!1;for(e=0;e<d.length;++e)d[e].seq&&(g=Math.max(g,d[e].level));for(e=0;e<d.length;++e)d[e].seq?d[e].level==g&&(f=!0,b[d[e].seq]=1,w(d[e].callback,c,d[e].combo)):f||w(d[e].callback,c,d[e].combo);d="keypress"==c.type&&H;c.type!=u||(v(a)||d)||t(b);H=f&&"keydown"==c.type}};window.Mousetrap=n;"function"===typeof define&&define.amd&&define(n)})();

/**
 * This is an auto-generated code by Monaca JS/CSS Components.
 * Please do not edit by hand.
 */

/*** <GENERATED> ***//*** <Start:async> ***/
/*** <Start:async LoadJs:"components/async/dist/async.min.js"> ***/
!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(n.async=n.async||{})}(this,function(n){"use strict";function t(n,t,e){switch(e.length){case 0:return n.call(t);case 1:return n.call(t,e[0]);case 2:return n.call(t,e[0],e[1]);case 3:return n.call(t,e[0],e[1],e[2])}return n.apply(t,e)}function e(n,e,r){return e=rt(void 0===e?n.length-1:e,0),function(){for(var u=arguments,o=-1,i=rt(u.length-e,0),c=Array(i);++o<i;)c[o]=u[e+o];o=-1;for(var f=Array(e+1);++o<e;)f[o]=u[o];return f[e]=r(c),t(n,this,f)}}function r(n){return n}function u(n,t){return e(n,t,r)}function o(n){return u(function(t,e){var r=ut(function(e,r){var u=this;return n(t,function(n,t){n.apply(u,e.concat(t))},r)});return e.length?r.apply(this,e):r})}function i(n){var t=lt.call(n,pt),e=n[pt];try{n[pt]=void 0;var r=!0}catch(n){}var u=st.call(n);return r&&(t?n[pt]=e:delete n[pt]),u}function c(n){return yt.call(n)}function f(n){return null==n?void 0===n?dt:vt:mt&&mt in Object(n)?i(n):c(n)}function a(n){var t=typeof n;return null!=n&&("object"==t||"function"==t)}function l(n){if(!a(n))return!1;var t=f(n);return t==bt||t==jt||t==gt||t==St}function s(n){return"number"==typeof n&&n>-1&&n%1==0&&n<=kt}function p(n){return null!=n&&s(n.length)&&!l(n)}function h(){}function y(n){return function(){if(null!==n){var t=n;n=null,t.apply(this,arguments)}}}function v(n,t){for(var e=-1,r=Array(n);++e<n;)r[e]=t(e);return r}function d(n){return null!=n&&"object"==typeof n}function m(n){return d(n)&&f(n)==Et}function g(){return!1}function b(n,t){return t=null==t?Pt:t,!!t&&("number"==typeof n||qt.test(n))&&n>-1&&n%1==0&&n<t}function j(n){return d(n)&&s(n.length)&&!!le[f(n)]}function S(n){return function(t){return n(t)}}function k(n,t){var e=It(n),r=!e&&Ft(n),u=!e&&!r&&Vt(n),o=!e&&!r&&!u&&ge(n),i=e||r||u||o,c=i?v(n.length,String):[],f=c.length;for(var a in n)!t&&!je.call(n,a)||i&&("length"==a||u&&("offset"==a||"parent"==a)||o&&("buffer"==a||"byteLength"==a||"byteOffset"==a)||b(a,f))||c.push(a);return c}function w(n){var t=n&&n.constructor,e="function"==typeof t&&t.prototype||Se;return n===e}function O(n,t){return function(e){return n(t(e))}}function x(n){if(!w(n))return ke(n);var t=[];for(var e in Object(n))Oe.call(n,e)&&"constructor"!=e&&t.push(e);return t}function E(n){return p(n)?k(n):x(n)}function L(n){var t=-1,e=n.length;return function(){return++t<e?{value:n[t],key:t}:null}}function A(n){var t=-1;return function(){var e=n.next();return e.done?null:(t++,{value:e.value,key:t})}}function T(n){var t=E(n),e=-1,r=t.length;return function(){var u=t[++e];return e<r?{value:n[u],key:u}:null}}function F(n){if(p(n))return L(n);var t=xt(n);return t?A(t):T(n)}function I(n){return function(){if(null===n)throw new Error("Callback was already called.");var t=n;n=null,t.apply(this,arguments)}}function _(n){return function(t,e,r){function u(n,t){if(f-=1,n)c=!0,r(n);else{if(t===wt||c&&f<=0)return c=!0,r(null);o()}}function o(){for(;f<n&&!c;){var t=i();if(null===t)return c=!0,void(f<=0&&r(null));f+=1,e(t.value,t.key,I(u))}}if(r=y(r||h),n<=0||!t)return r(null);var i=F(t),c=!1,f=0;o()}}function B(n,t,e,r){_(t)(n,e,r)}function M(n,t){return function(e,r,u){return n(e,t,r,u)}}function U(n,t,e){function r(n,t){n?e(n):++o!==i&&t!==wt||e(null)}e=y(e||h);var u=0,o=0,i=n.length;for(0===i&&e(null);u<i;u++)t(n[u],u,I(r))}function z(n){return function(t,e,r){return n(Ee,t,e,r)}}function V(n,t,e,r){r=r||h,t=t||[];var u=[],o=0;n(t,function(n,t,r){var i=o++;e(n,function(n,t){u[i]=t,r(n)})},function(n){r(n,u)})}function P(n){return function(t,e,r,u){return n(_(e),t,r,u)}}function q(n){return ut(function(t,e){var r;try{r=n.apply(this,t)}catch(n){return e(n)}a(r)&&"function"==typeof r.then?r.then(function(n){e(null,n)},function(n){e(n.message?n:new Error(n))}):e(null,r)})}function D(n,t){for(var e=-1,r=null==n?0:n.length;++e<r&&t(n[e],e,n)!==!1;);return n}function R(n){return function(t,e,r){for(var u=-1,o=Object(t),i=r(t),c=i.length;c--;){var f=i[n?c:++u];if(e(o[f],f,o)===!1)break}return t}}function C(n,t){return n&&Be(n,t,E)}function $(n,t,e,r){for(var u=n.length,o=e+(r?1:-1);r?o--:++o<u;)if(t(n[o],o,n))return o;return-1}function W(n){return n!==n}function N(n,t,e){for(var r=e-1,u=n.length;++r<u;)if(n[r]===t)return r;return-1}function Q(n,t,e){return t===t?N(n,t,e):$(n,W,e)}function G(n,t){for(var e=-1,r=null==n?0:n.length,u=Array(r);++e<r;)u[e]=t(n[e],e,n);return u}function H(n){return"symbol"==typeof n||d(n)&&f(n)==Ue}function J(n){if("string"==typeof n)return n;if(It(n))return G(n,J)+"";if(H(n))return Pe?Pe.call(n):"";var t=n+"";return"0"==t&&1/n==-ze?"-0":t}function K(n,t,e){var r=-1,u=n.length;t<0&&(t=-t>u?0:u+t),e=e>u?u:e,e<0&&(e+=u),u=t>e?0:e-t>>>0,t>>>=0;for(var o=Array(u);++r<u;)o[r]=n[r+t];return o}function X(n,t,e){var r=n.length;return e=void 0===e?r:e,!t&&e>=r?n:K(n,t,e)}function Y(n,t){for(var e=n.length;e--&&Q(t,n[e],0)>-1;);return e}function Z(n,t){for(var e=-1,r=n.length;++e<r&&Q(t,n[e],0)>-1;);return e}function nn(n){return n.split("")}function tn(n){return Qe.test(n)}function en(n){return n.match(pr)||[]}function rn(n){return tn(n)?en(n):nn(n)}function un(n){return null==n?"":J(n)}function on(n,t,e){if(n=un(n),n&&(e||void 0===t))return n.replace(hr,"");if(!n||!(t=J(t)))return n;var r=rn(n),u=rn(t),o=Z(r,u),i=Y(r,u)+1;return X(r,o,i).join("")}function cn(n){return n=n.toString().replace(mr,""),n=n.match(yr)[2].replace(" ",""),n=n?n.split(vr):[],n=n.map(function(n){return on(n.replace(dr,""))})}function fn(n,t){var e={};C(n,function(n,t){function r(t,e){var r=G(u,function(n){return t[n]});r.push(e),n.apply(null,r)}var u;if(It(n))u=n.slice(0,-1),n=n[n.length-1],e[t]=u.concat(u.length>0?r:n);else if(1===n.length)e[t]=n;else{if(u=cn(n),0===n.length&&0===u.length)throw new Error("autoInject task functions require explicit parameters.");u.pop(),e[t]=u.concat(r)}}),Me(e,t)}function an(n){setTimeout(n,0)}function ln(n){return u(function(t,e){n(function(){t.apply(null,e)})})}function sn(){this.head=this.tail=null,this.length=0}function pn(n,t){n.length=1,n.head=n.tail=t}function hn(n,t,e){function r(n,t,e){if(null!=e&&"function"!=typeof e)throw new Error("task callback must be a function");if(a.started=!0,It(n)||(n=[n]),0===n.length&&a.idle())return jr(function(){a.drain()});for(var r=0,u=n.length;r<u;r++){var o={data:n[r],callback:e||h};t?a._tasks.unshift(o):a._tasks.push(o)}jr(a.process)}function o(n){return u(function(t){i-=1;for(var e=0,r=n.length;e<r;e++){var u=n[e],o=Q(c,u,0);o>=0&&c.splice(o),u.callback.apply(u,t),null!=t[0]&&a.error(t[0],u.data)}i<=a.concurrency-a.buffer&&a.unsaturated(),a.idle()&&a.drain(),a.process()})}if(null==t)t=1;else if(0===t)throw new Error("Concurrency must not be zero");var i=0,c=[],f=!1,a={_tasks:new sn,concurrency:t,payload:e,saturated:h,unsaturated:h,buffer:t/4,empty:h,drain:h,error:h,started:!1,paused:!1,push:function(n,t){r(n,!1,t)},kill:function(){a.drain=h,a._tasks.empty()},unshift:function(n,t){r(n,!0,t)},process:function(){if(!f){for(f=!0;!a.paused&&i<a.concurrency&&a._tasks.length;){var t=[],e=[],r=a._tasks.length;a.payload&&(r=Math.min(r,a.payload));for(var u=0;u<r;u++){var l=a._tasks.shift();t.push(l),e.push(l.data)}0===a._tasks.length&&a.empty(),i+=1,c.push(t[0]),i===a.concurrency&&a.saturated();var s=I(o(t));n(e,s)}f=!1}},length:function(){return a._tasks.length},running:function(){return i},workersList:function(){return c},idle:function(){return a._tasks.length+i===0},pause:function(){a.paused=!0},resume:function(){a.paused!==!1&&(a.paused=!1,jr(a.process))}};return a}function yn(n,t){return hn(n,1,t)}function vn(n,t,e,r){r=y(r||h),kr(n,function(n,r,u){e(t,n,function(n,e){t=e,u(n)})},function(n){r(n,t)})}function dn(n,t,e,r){var u=[];n(t,function(n,t,r){e(n,function(n,t){u=u.concat(t||[]),r(n)})},function(n){r(n,u)})}function mn(n){return function(t,e,r){return n(kr,t,e,r)}}function gn(n,t){return function(e,r,u,o){o=o||h;var i,c=!1;e(r,function(e,r,o){u(e,function(r,u){r?o(r):n(u)&&!i?(c=!0,i=t(!0,e),o(null,wt)):o()})},function(n){n?o(n):o(null,c?i:t(!1))})}}function bn(n,t){return t}function jn(n){return u(function(t,e){t.apply(null,e.concat(u(function(t,e){"object"==typeof console&&(t?console.error&&console.error(t):console[n]&&D(e,function(t){console[n](t)}))})))})}function Sn(n,t,e){function r(t,r){return t?e(t):r?void n(o):e(null)}e=I(e||h);var o=u(function(n,u){return n?e(n):(u.push(r),void t.apply(this,u))});r(null,!0)}function kn(n,t,e){e=I(e||h);var r=u(function(u,o){return u?e(u):t.apply(this,o)?n(r):void e.apply(null,[null].concat(o))});n(r)}function wn(n,t,e){kn(n,function(){return!t.apply(this,arguments)},e)}function On(n,t,e){function r(t){return t?e(t):void n(u)}function u(n,u){return n?e(n):u?void t(r):e(null)}e=I(e||h),n(u)}function xn(n){return function(t,e,r){return n(t,r)}}function En(n,t,e){Ee(n,xn(t),e)}function Ln(n,t,e,r){_(t)(n,xn(e),r)}function An(n){return ut(function(t,e){var r=!0;t.push(function(){var n=arguments;r?jr(function(){e.apply(null,n)}):e.apply(null,n)}),n.apply(this,t),r=!1})}function Tn(n){return!n}function Fn(n){return function(t){return null==t?void 0:t[n]}}function In(n,t,e,r){var u=new Array(t.length);n(t,function(n,t,r){e(n,function(n,e){u[t]=!!e,r(n)})},function(n){if(n)return r(n);for(var e=[],o=0;o<t.length;o++)u[o]&&e.push(t[o]);r(null,e)})}function _n(n,t,e,r){var u=[];n(t,function(n,t,r){e(n,function(e,o){e?r(e):(o&&u.push({index:t,value:n}),r())})},function(n){n?r(n):r(null,G(u.sort(function(n,t){return n.index-t.index}),Fn("value")))})}function Bn(n,t,e,r){var u=p(t)?In:_n;u(n,t,e,r||h)}function Mn(n,t){function e(n){return n?r(n):void u(e)}var r=I(t||h),u=An(n);e()}function Un(n,t,e,r){r=y(r||h);var u={};B(n,t,function(n,t,r){e(n,t,function(n,e){return n?r(n):(u[t]=e,void r())})},function(n){r(n,u)})}function zn(n,t){return t in n}function Vn(n,t){var e=Object.create(null),o=Object.create(null);t=t||r;var i=ut(function(r,i){var c=t.apply(null,r);zn(e,c)?jr(function(){i.apply(null,e[c])}):zn(o,c)?o[c].push(i):(o[c]=[i],n.apply(null,r.concat(u(function(n){e[c]=n;var t=o[c];delete o[c];for(var r=0,u=t.length;r<u;r++)t[r].apply(null,n)}))))});return i.memo=e,i.unmemoized=n,i}function Pn(n,t,e){e=e||h;var r=p(t)?[]:{};n(t,function(n,t,e){n(u(function(n,u){u.length<=1&&(u=u[0]),r[t]=u,e(n)}))},function(n){e(n,r)})}function qn(n,t){Pn(Ee,n,t)}function Dn(n,t,e){Pn(_(t),n,e)}function Rn(n,t){if(t=y(t||h),!It(n))return t(new TypeError("First argument to race must be an array of functions"));if(!n.length)return t();for(var e=0,r=n.length;e<r;e++)n[e](t)}function Cn(n,t,e,r){var u=Nr.call(n).reverse();vn(u,t,e,r)}function $n(n){return ut(function(t,e){return t.push(u(function(n,t){if(n)e(null,{error:n});else{var r=null;1===t.length?r=t[0]:t.length>1&&(r=t),e(null,{value:r})}})),n.apply(this,t)})}function Wn(n,t,e,r){Bn(n,t,function(n,t){e(n,function(n,e){t(n,!e)})},r)}function Nn(n){var t;return It(n)?t=G(n,$n):(t={},C(n,function(n,e){t[e]=$n.call(this,n)})),t}function Qn(n){return function(){return n}}function Gn(n,t,e){function r(n,t){if("object"==typeof t)n.times=+t.times||o,n.intervalFunc="function"==typeof t.interval?t.interval:Qn(+t.interval||i),n.errorFilter=t.errorFilter;else{if("number"!=typeof t&&"string"!=typeof t)throw new Error("Invalid arguments for async.retry");n.times=+t||o}}function u(){t(function(n){n&&f++<c.times&&("function"!=typeof c.errorFilter||c.errorFilter(n))?setTimeout(u,c.intervalFunc(f)):e.apply(null,arguments)})}var o=5,i=0,c={times:o,intervalFunc:Qn(i)};if(arguments.length<3&&"function"==typeof n?(e=t||h,t=n):(r(c,n),e=e||h),"function"!=typeof t)throw new Error("Invalid arguments for async.retry");var f=1;u()}function Hn(n,t){Pn(kr,n,t)}function Jn(n,t,e){function r(n,t){var e=n.criteria,r=t.criteria;return e<r?-1:e>r?1:0}Le(n,function(n,e){t(n,function(t,r){return t?e(t):void e(null,{value:n,criteria:r})})},function(n,t){return n?e(n):void e(null,G(t.sort(r),Fn("value")))})}function Kn(n,t,e){function r(){c||(o.apply(null,arguments),clearTimeout(i))}function u(){var t=n.name||"anonymous",r=new Error('Callback function "'+t+'" timed out.');r.code="ETIMEDOUT",e&&(r.info=e),c=!0,o(r)}var o,i,c=!1;return ut(function(e,c){o=c,i=setTimeout(u,t),n.apply(null,e.concat(r))})}function Xn(n,t,e,r){for(var u=-1,o=nu(Zr((t-n)/(e||1)),0),i=Array(o);o--;)i[r?o:++u]=n,n+=e;return i}function Yn(n,t,e,r){Te(Xn(0,n,1),t,e,r)}function Zn(n,t,e,r){3===arguments.length&&(r=e,e=t,t=It(n)?[]:{}),r=y(r||h),Ee(n,function(n,r,u){e(t,n,r,u)},function(n){r(n,t)})}function nt(n){return function(){return(n.unmemoized||n).apply(null,arguments)}}function tt(n,t,e){if(e=I(e||h),!n())return e(null);var r=u(function(u,o){return u?e(u):n()?t(r):void e.apply(null,[null].concat(o))});t(r)}function et(n,t,e){tt(function(){return!n.apply(this,arguments)},t,e)}var rt=Math.max,ut=function(n){return u(function(t){var e=t.pop();n.call(this,t,e)})},ot="object"==typeof global&&global&&global.Object===Object&&global,it="object"==typeof self&&self&&self.Object===Object&&self,ct=ot||it||Function("return this")(),ft=ct.Symbol,at=Object.prototype,lt=at.hasOwnProperty,st=at.toString,pt=ft?ft.toStringTag:void 0,ht=Object.prototype,yt=ht.toString,vt="[object Null]",dt="[object Undefined]",mt=ft?ft.toStringTag:void 0,gt="[object AsyncFunction]",bt="[object Function]",jt="[object GeneratorFunction]",St="[object Proxy]",kt=9007199254740991,wt={},Ot="function"==typeof Symbol&&Symbol.iterator,xt=function(n){return Ot&&n[Ot]&&n[Ot]()},Et="[object Arguments]",Lt=Object.prototype,At=Lt.hasOwnProperty,Tt=Lt.propertyIsEnumerable,Ft=m(function(){return arguments}())?m:function(n){return d(n)&&At.call(n,"callee")&&!Tt.call(n,"callee")},It=Array.isArray,_t="object"==typeof n&&n&&!n.nodeType&&n,Bt=_t&&"object"==typeof module&&module&&!module.nodeType&&module,Mt=Bt&&Bt.exports===_t,Ut=Mt?ct.Buffer:void 0,zt=Ut?Ut.isBuffer:void 0,Vt=zt||g,Pt=9007199254740991,qt=/^(?:0|[1-9]\d*)$/,Dt="[object Arguments]",Rt="[object Array]",Ct="[object Boolean]",$t="[object Date]",Wt="[object Error]",Nt="[object Function]",Qt="[object Map]",Gt="[object Number]",Ht="[object Object]",Jt="[object RegExp]",Kt="[object Set]",Xt="[object String]",Yt="[object WeakMap]",Zt="[object ArrayBuffer]",ne="[object DataView]",te="[object Float32Array]",ee="[object Float64Array]",re="[object Int8Array]",ue="[object Int16Array]",oe="[object Int32Array]",ie="[object Uint8Array]",ce="[object Uint8ClampedArray]",fe="[object Uint16Array]",ae="[object Uint32Array]",le={};le[te]=le[ee]=le[re]=le[ue]=le[oe]=le[ie]=le[ce]=le[fe]=le[ae]=!0,le[Dt]=le[Rt]=le[Zt]=le[Ct]=le[ne]=le[$t]=le[Wt]=le[Nt]=le[Qt]=le[Gt]=le[Ht]=le[Jt]=le[Kt]=le[Xt]=le[Yt]=!1;var se,pe="object"==typeof n&&n&&!n.nodeType&&n,he=pe&&"object"==typeof module&&module&&!module.nodeType&&module,ye=he&&he.exports===pe,ve=ye&&ot.process,de=function(){try{return ve&&ve.binding&&ve.binding("util")}catch(n){}}(),me=de&&de.isTypedArray,ge=me?S(me):j,be=Object.prototype,je=be.hasOwnProperty,Se=Object.prototype,ke=O(Object.keys,Object),we=Object.prototype,Oe=we.hasOwnProperty,xe=M(B,1/0),Ee=function(n,t,e){var r=p(n)?U:xe;r(n,t,e)},Le=z(V),Ae=o(Le),Te=P(V),Fe=M(Te,1),Ie=o(Fe),_e=u(function(n,t){return u(function(e){return n.apply(null,t.concat(e))})}),Be=R(),Me=function(n,t,e){function r(n,t){b.push(function(){f(n,t)})}function o(){if(0===b.length&&0===d)return e(null,v);for(;b.length&&d<t;){var n=b.shift();n()}}function i(n,t){var e=g[n];e||(e=g[n]=[]),e.push(t)}function c(n){var t=g[n]||[];D(t,function(n){n()}),o()}function f(n,t){if(!m){var r=I(u(function(t,r){if(d--,r.length<=1&&(r=r[0]),t){var u={};C(v,function(n,t){u[t]=n}),u[n]=r,m=!0,g=Object.create(null),e(t,u)}else v[n]=r,c(n)}));d++;var o=t[t.length-1];t.length>1?o(v,r):o(r)}}function a(){for(var n,t=0;j.length;)n=j.pop(),t++,D(l(n),function(n){0===--S[n]&&j.push(n)});if(t!==p)throw new Error("async.auto cannot execute tasks due to a recursive dependency")}function l(t){var e=[];return C(n,function(n,r){It(n)&&Q(n,t,0)>=0&&e.push(r)}),e}"function"==typeof t&&(e=t,t=null),e=y(e||h);var s=E(n),p=s.length;if(!p)return e(null);t||(t=p);var v={},d=0,m=!1,g=Object.create(null),b=[],j=[],S={};C(n,function(t,e){if(!It(t))return r(e,[t]),void j.push(e);var u=t.slice(0,t.length-1),o=u.length;return 0===o?(r(e,t),void j.push(e)):(S[e]=o,void D(u,function(c){if(!n[c])throw new Error("async.auto task `"+e+"` has a non-existent dependency `"+c+"` in "+u.join(", "));i(c,function(){o--,0===o&&r(e,t)})}))}),a(),o()},Ue="[object Symbol]",ze=1/0,Ve=ft?ft.prototype:void 0,Pe=Ve?Ve.toString:void 0,qe="\\ud800-\\udfff",De="\\u0300-\\u036f",Re="\\ufe20-\\ufe2f",Ce="\\u20d0-\\u20ff",$e=De+Re+Ce,We="\\ufe0e\\ufe0f",Ne="\\u200d",Qe=RegExp("["+Ne+qe+$e+We+"]"),Ge="\\ud800-\\udfff",He="\\u0300-\\u036f",Je="\\ufe20-\\ufe2f",Ke="\\u20d0-\\u20ff",Xe=He+Je+Ke,Ye="\\ufe0e\\ufe0f",Ze="["+Ge+"]",nr="["+Xe+"]",tr="\\ud83c[\\udffb-\\udfff]",er="(?:"+nr+"|"+tr+")",rr="[^"+Ge+"]",ur="(?:\\ud83c[\\udde6-\\uddff]){2}",or="[\\ud800-\\udbff][\\udc00-\\udfff]",ir="\\u200d",cr=er+"?",fr="["+Ye+"]?",ar="(?:"+ir+"(?:"+[rr,ur,or].join("|")+")"+fr+cr+")*",lr=fr+cr+ar,sr="(?:"+[rr+nr+"?",nr,ur,or,Ze].join("|")+")",pr=RegExp(tr+"(?="+tr+")|"+sr+lr,"g"),hr=/^\s+|\s+$/g,yr=/^(function)?\s*[^\(]*\(\s*([^\)]*)\)/m,vr=/,/,dr=/(=.+)?(\s*)$/,mr=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,gr="function"==typeof setImmediate&&setImmediate,br="object"==typeof process&&"function"==typeof process.nextTick;se=gr?setImmediate:br?process.nextTick:an;var jr=ln(se);sn.prototype.removeLink=function(n){return n.prev?n.prev.next=n.next:this.head=n.next,n.next?n.next.prev=n.prev:this.tail=n.prev,n.prev=n.next=null,this.length-=1,n},sn.prototype.empty=sn,sn.prototype.insertAfter=function(n,t){t.prev=n,t.next=n.next,n.next?n.next.prev=t:this.tail=t,n.next=t,this.length+=1},sn.prototype.insertBefore=function(n,t){t.prev=n.prev,t.next=n,n.prev?n.prev.next=t:this.head=t,n.prev=t,this.length+=1},sn.prototype.unshift=function(n){this.head?this.insertBefore(this.head,n):pn(this,n)},sn.prototype.push=function(n){this.tail?this.insertAfter(this.tail,n):pn(this,n)},sn.prototype.shift=function(){return this.head&&this.removeLink(this.head)},sn.prototype.pop=function(){return this.tail&&this.removeLink(this.tail)};var Sr,kr=M(B,1),wr=u(function(n){return u(function(t){var e=this,r=t[t.length-1];"function"==typeof r?t.pop():r=h,vn(n,t,function(n,t,r){t.apply(e,n.concat(u(function(n,t){r(n,t)})))},function(n,t){r.apply(e,[n].concat(t))})})}),Or=u(function(n){return wr.apply(null,n.reverse())}),xr=z(dn),Er=mn(dn),Lr=u(function(n){var t=[null].concat(n);return ut(function(n,e){return e.apply(this,t)})}),Ar=z(gn(r,bn)),Tr=P(gn(r,bn)),Fr=M(Tr,1),Ir=jn("dir"),_r=M(Ln,1),Br=z(gn(Tn,Tn)),Mr=P(gn(Tn,Tn)),Ur=M(Mr,1),zr=z(Bn),Vr=P(Bn),Pr=M(Vr,1),qr=jn("log"),Dr=M(Un,1/0),Rr=M(Un,1);Sr=br?process.nextTick:gr?setImmediate:an;var Cr=ln(Sr),$r=function(n,t){return hn(function(t,e){n(t[0],e)},t,1)},Wr=function(n,t){var e=$r(n,t);return e.push=function(n,t,r){if(null==r&&(r=h),"function"!=typeof r)throw new Error("task callback must be a function");if(e.started=!0,It(n)||(n=[n]),0===n.length)return jr(function(){e.drain()});t=t||0;for(var u=e._tasks.head;u&&t>=u.priority;)u=u.next;for(var o=0,i=n.length;o<i;o++){var c={data:n[o],priority:t,callback:r};u?e._tasks.insertBefore(u,c):e._tasks.push(c)}jr(e.process)},delete e.unshift,e},Nr=Array.prototype.slice,Qr=z(Wn),Gr=P(Wn),Hr=M(Gr,1),Jr=function(n,t){return t||(t=n,n=null),ut(function(e,r){function u(n){t.apply(null,e.concat(n))}n?Gn(n,u,r):Gn(u,r)})},Kr=z(gn(Boolean,r)),Xr=P(gn(Boolean,r)),Yr=M(Xr,1),Zr=Math.ceil,nu=Math.max,tu=M(Yn,1/0),eu=M(Yn,1),ru=function(n,t){function e(o){if(r===n.length)return t.apply(null,[null].concat(o));var i=I(u(function(n,r){return n?t.apply(null,[n].concat(r)):void e(r)}));o.push(i);var c=n[r++];c.apply(null,o)}if(t=y(t||h),!It(n))return t(new Error("First argument to waterfall must be an array of functions"));if(!n.length)return t();var r=0;e([])},uu={applyEach:Ae,applyEachSeries:Ie,apply:_e,asyncify:q,auto:Me,autoInject:fn,cargo:yn,compose:Or,concat:xr,concatSeries:Er,constant:Lr,detect:Ar,detectLimit:Tr,detectSeries:Fr,dir:Ir,doDuring:Sn,doUntil:wn,doWhilst:kn,during:On,each:En,eachLimit:Ln,eachOf:Ee,eachOfLimit:B,eachOfSeries:kr,eachSeries:_r,ensureAsync:An,every:Br,everyLimit:Mr,everySeries:Ur,filter:zr,filterLimit:Vr,filterSeries:Pr,forever:Mn,log:qr,map:Le,mapLimit:Te,mapSeries:Fe,mapValues:Dr,mapValuesLimit:Un,mapValuesSeries:Rr,memoize:Vn,nextTick:Cr,parallel:qn,parallelLimit:Dn,priorityQueue:Wr,queue:$r,race:Rn,reduce:vn,reduceRight:Cn,reflect:$n,reflectAll:Nn,reject:Qr,rejectLimit:Gr,rejectSeries:Hr,retry:Gn,retryable:Jr,seq:wr,series:Hn,setImmediate:jr,some:Kr,someLimit:Xr,someSeries:Yr,sortBy:Jn,timeout:Kn,times:tu,timesLimit:Yn,timesSeries:eu,transform:Zn,unmemoize:nt,until:et,waterfall:ru,whilst:tt,all:Br,any:Kr,forEach:En,forEachSeries:_r,forEachLimit:Ln,forEachOf:Ee,forEachOfSeries:kr,forEachOfLimit:B,inject:vn,foldl:vn,foldr:Cn,select:zr,selectLimit:Vr,selectSeries:Pr,wrapSync:q};n.default=uu,n.applyEach=Ae,n.applyEachSeries=Ie,n.apply=_e,n.asyncify=q,n.auto=Me,n.autoInject=fn,n.cargo=yn,n.compose=Or,n.concat=xr,n.concatSeries=Er,n.constant=Lr,n.detect=Ar,n.detectLimit=Tr,n.detectSeries=Fr,n.dir=Ir,n.doDuring=Sn,n.doUntil=wn,n.doWhilst=kn,n.during=On,n.each=En,n.eachLimit=Ln,n.eachOf=Ee,n.eachOfLimit=B,n.eachOfSeries=kr,n.eachSeries=_r,n.ensureAsync=An,n.every=Br,n.everyLimit=Mr,n.everySeries=Ur,n.filter=zr,n.filterLimit=Vr,n.filterSeries=Pr,n.forever=Mn,n.log=qr,n.map=Le,n.mapLimit=Te,n.mapSeries=Fe,n.mapValues=Dr,n.mapValuesLimit=Un,n.mapValuesSeries=Rr,n.memoize=Vn,n.nextTick=Cr,n.parallel=qn,n.parallelLimit=Dn,n.priorityQueue=Wr,n.queue=$r,n.race=Rn,n.reduce=vn,n.reduceRight=Cn,n.reflect=$n,n.reflectAll=Nn,n.reject=Qr,n.rejectLimit=Gr,n.rejectSeries=Hr,n.retry=Gn,n.retryable=Jr,n.seq=wr,n.series=Hn,n.setImmediate=jr,n.some=Kr,n.someLimit=Xr,n.someSeries=Yr,n.sortBy=Jn,n.timeout=Kn,n.times=tu,n.timesLimit=Yn,n.timesSeries=eu,n.transform=Zn,n.unmemoize=nt,n.until=et,n.waterfall=ru,n.whilst=tt,n.all=Br,n.allLimit=Mr,n.allSeries=Ur,n.any=Kr,n.anyLimit=Xr,n.anySeries=Yr,n.find=Ar,n.findLimit=Tr,n.findSeries=Fr,n.forEach=En,n.forEachSeries=_r,n.forEachLimit=Ln,n.forEachOf=Ee,n.forEachOfSeries=kr,n.forEachOfLimit=B,n.inject=vn,n.foldl=vn,n.foldr=Cn,n.select=zr,n.selectLimit=Vr,n.selectSeries=Pr,n.wrapSync=q,Object.defineProperty(n,"__esModule",{value:!0})});
//# sourceMappingURL=async.min.map
;
/*** <End:async LoadJs:"components/async/dist/async.min.js"> ***/
/*** <End:async> ***/



/*** <Start:monaca-core-utils> ***/
/*** <Start:monaca-core-utils LoadJs:"components/monaca-core-utils/monaca-core-utils.js"> ***/
/**
 * Monaca Core Utility Library
 * This library requires cordova.js
 *
 * @version 2.0.7
 * @author  Asial Corporation
 */
window.monaca = window.monaca || {};

(function() {
    /*
     * monaca api queue.
     */
    monaca.apiQueue = monaca.apiQueue || {};
    monaca.apiQueue.paramsArray = [];
    monaca.apiQueue.exec = function(a,b,c,d,e){
        if (!monaca.isDeviceReady) {
            monaca.apiQueue.paramsArray.push([a,b,c,d,e]);
        } else {
            window.cordova.exec(a,b,c,d,e);
        }
    };
    monaca.apiQueue.next = function(){
        var params = monaca.apiQueue.paramsArray.shift();
        if (params) {
            window.cordova.exec(
                function(r) {
                  if (typeof params[0] === 'function') params[0](r);
                  monaca.apiQueue.next();
                },
                function(r) {
                  if (typeof params[1] === 'function') params[1](r);
                  monaca.apiQueue.next();
                },
                params[2],
                params[3],
                params[4]
            );
        }
    };

    monaca.isDeviceReady = monaca.isDeviceReady || false;
    document.addEventListener('deviceready', function(){
        window.monaca.isDeviceReady = true;
        monaca.apiQueue.next();
    }, false);

    /**
     * Check User-Agent
     */
    var isAndroid = !!(navigator.userAgent.match(/Android/i));
    var isIOS     = !!(navigator.userAgent.match(/iPhone|iPad|iPod/i));
    monaca.isAndroid = isAndroid;
    monaca.isIOS     = isIOS;

    /**
     * Obtain style property
     */
    monaca.retrieveUIStyle = function() {
        var argsArray = [].slice.apply(arguments);
        monaca.apiQueue.exec(arguments[arguments.length-1], null, "mobi.monaca.nativecomponent", "retrieve", argsArray);
    };

    /**
     * Update style property
     */
    monaca.updateUIStyle = function(id, name, value) {
        if (typeof id == "string") {
            var argsArray = [].slice.apply(arguments);
            monaca.apiQueue.exec(null, null, "mobi.monaca.nativecomponent", "update", argsArray);
        } else {
            for (var i = 0; i < id.length; i++) {
                monaca.apiQueue.exec(null, null, "mobi.monaca.nativecomponent", "update", [id[i], name, value]);
            }
        }
    };

    if (isAndroid) {
        monaca.retrieveUIStyle = function(id, name, success, failure) {
            monaca.apiQueue.exec(
                function(style) { success(style[name]); } || function() { },
                failure || function() { },
                "mobi.monaca.nativecomponent",
                "retrieve",
                [id]
            );
        };

        monaca.updateUIStyle = function(id, name, value, success, failure) {
            var style = {};
            style[name] = value;

            monaca.apiQueue.exec(
                success || function() { },
                failure || function() { },
                "mobi.monaca.nativecomponent",
                "update",
                [id, style]
            );
        };
    }

    /**
     * Spinner handling
     */
    monaca.showSpinner = function (options) {
        options = options || {};
        var src = options.src ? options.src : null;
        var frames = options.frames != null ? options.frames : null;
        var interval = options.interval != null ? options.interval : null;
        var backgroundColor = options.backgroundColor ? options.backgroundColor : null;
        var backgroundOpacity = options.backgroundOpacity != null ? options.backgroundOpacity : null;
        var title = options.title ? options.title : null;
        var titleColor = options.titleColor ? options.titleColor : null;
        var titleFontScale = options.titleFontScale != null ? options.titleFontScale : null;
        monaca.apiQueue.exec(null, null, "mobi.monaca.nativecomponent", 'showSpinner', [ src, frames, interval, backgroundColor, backgroundOpacity, title, titleColor, titleFontScale, null ]);
    };

    monaca.hideSpinner = function(){
        monaca.apiQueue.exec(null, null, "mobi.monaca.nativecomponent", 'hideSpinner', []);
    };

    monaca.updateSpinnerTitle = function(newTitle){
        if (!newTitle) newTitle = "";
        monaca.apiQueue.exec(null, null, "mobi.monaca.nativecomponent", 'updateSpinnerTitle', [ newTitle ]);
    };

    var transitionPluginName = "Transit";

    /**
     * Open new page.
     */
    monaca.pushPage = function(path, options, param) {
        options = options || {};
        var animation = null;
        switch (options.animation) {
        case "lift":
          animation = "modal"; break;
        case "slide":
        case "slideLeft":
          animation = "push"; break;
        case "slideRight":
          animation = "slideRight"; break;
        default:
          animation = "push";
        }
        monaca.apiQueue.exec(null, null, transitionPluginName, animation, [path, options, param]);
    };
    /**
     * Close current page.
     */
    monaca.popPage = function(options) {
        options = options || {};
        var name = options.animation == 'lift' ? 'dismiss' : 'pop';
        monaca.apiQueue.exec(null, null, transitionPluginName, name, [options]);
    };

    /**
     * Open in browser.
     */
    monaca.invokeBrowser = function(url) {
        monaca.apiQueue.exec(null, null, transitionPluginName, "browse", [url]);
    };

    /**
     * Load in current page.
     */
    monaca.load = function(path, options, param) {
        monaca.apiQueue.exec(null, null, transitionPluginName, "link", [path, options, param]);
    };

    /**
     * return to top page.
     */
    monaca.home = function(options) {
        options = options || {};
        monaca.apiQueue.exec(null, null, transitionPluginName, "home", [options]);
    };

    /**
     * Clear stack
     */
    monaca.clearPageStack = function(clearAll) {
        clearAll = clearAll || false;
        monaca.apiQueue.exec(null, null, transitionPluginName, "clearPageStack", [clearAll]);
    };


    /**
     * Console API from independent PhoneGap.
     */
    window.monaca.console = window.monaca.console || {};

    /**
     * base method for send log.
     */
    monaca.console.sendLog = function(level, url, line, char, arguments) {
        var message;
        for (var i=0; i<arguments.length; i++){
            if (typeof arguments[i] == "string") {
                message = arguments[i];
            } else {
                message = JSON.stringify(arguments[i]);
            }
            if (message === undefined) {
                message = "undefined";
            }

            if (isIOS) {
                // not checked yet  or  confirmed MonacaDebugger
                if (! monaca.isMonacaDebuggerChecked || monaca.isMonacaDebugger ) {
                  var head = message.substr(0, 5);
                  if (window.monaca.isDeviceReady !== true || (head != 'ERROR' && head != 'WARN:')) {
                      var xhr = new XMLHttpRequest();
                      var path = "https://monaca-debugger.local/log?level=" + encodeURIComponent(level) + "&message=" + encodeURIComponent(message) + "&at=" + (new Date()).getTime();
                      xhr.open("GET", path);
                      xhr.send();
                  }
                }
                window.orig_console[level](message);
            } else {
                window.console[level](message);
            }
        }
    }

    /**
     * monaca console methods
     */
    var methods = ["debug", "info", "log", "warn", "error"];
    for (var i=0; i<methods.length; i++) {
        var method = methods[i];
        monaca.console[method] = function(method) {
            return function() {
                monaca.console.sendLog(method, null, null, null, arguments);
            };
        }(method);
    }

    /** Replace window.console if iOS **/
    if (isIOS) {
      window.orig_console = window.console;
      window.console = window.monaca.console;
      window.addEventListener( "error" , function (desc, page, line, char) {
          monaca.console.sendLog("error", null, null, null, [ { "message" : desc.message , "page" : desc.filename , "line" : desc.lineno , "char" : desc.colno   } ]);
      } , false );
      // window.onerror = function (desc, page, line, char) {
      //    monaca.console.sendLog("error", page, line, char, [ { "message" : desc , "page" : page , "line" : line, "char" : char } ] );
      // };
    }
    /* Comment out for now
    window.onerror = function (desc, page, line, char) {
      monaca.console.sendLog("error", page, line, char, [desc]);
    };
    */

    window.monaca.splashScreen = window.monaca.splashScreen || {};
    var splashScreenPluginName = "MonacaSplashScreen";

    /**
     * hide SplashScreen.
     */
    monaca.splashScreen.hide = function() {
        if (isAndroid) {
            monaca.apiQueue.exec(null, null, splashScreenPluginName, "hide", []);
        } else {
            navigator.splashscreen.hide();
        }
    };

    // Set monaca.baseUrl
    if (typeof location.href !== "string") {
        console.warn("Cannot find base url");
        monaca.baseUrl = null;
    } else {
        monaca.baseUrl = location.href.split("/www/")[0] + "/www/";
    }

    /**
     * Get device ID
     */
    monaca.getDeviceId = function(callback) {
        monaca.apiQueue.exec(function(result) { callback(result.deviceId); }, null, "Monaca", "getRuntimeConfiguration", []);
    };

    monaca.getRuntimeConfiguration = function(success,failure) {
        monaca.apiQueue.exec( success , failure , "Monaca" , "getRuntimeConfiguration" , []);
    };

    monaca.isMonacaDebuggerChecked = false;
    monaca.isMonacaDebugger = null;

    monaca.getRuntimeConfiguration( function(result) {
        monaca.isMonacaDebuggerChecked = true;
        monaca.isMonacaDebugger = !! result.isMonacaDebugger;
    });


})();

/**
 * iOS Status Bar Plugin
 *
 * @author Asial Corporation
 * @date   2014/1/15
 */
window.StatusBar = window.StatusBar || {};

(function() {

  /*
    hideStatusBar
    support : iOS6,iOS7
  */
  StatusBar.hideStatusBar = function() {
    monaca.apiQueue.exec(null, null, "mobi.monaca.nativecomponent", 'hideStatusBar', []);
  }

  /*
    showStatusBar
    support : iOS6,iOS7
  */
  StatusBar.showStatusBar = function() {
    monaca.apiQueue.exec(null, null, "mobi.monaca.nativecomponent", 'showStatusBar', []);
  }

  /*
    statusBarStyleDefault
    support : iOS6,iOS7
  */
  StatusBar.statusBarStyleDefault = function() {
    monaca.apiQueue.exec(null, null, "mobi.monaca.nativecomponent", 'statusBarStyleDefault', []);
  }

  /*
    statusBarStyleLightContent
    support : iOS7
  */
  StatusBar.statusBarStyleLightContent = function() {
    monaca.apiQueue.exec(null, null, "mobi.monaca.nativecomponent", 'statusBarStyleLightContent', []);
  }

  /*
    statusBarStyleBlackOpaque
    support : iOS6
  */
  StatusBar.statusBarStyleBlackOpaque = function() {
    monaca.apiQueue.exec(null, null, "mobi.monaca.nativecomponent", 'statusBarStyleBlackOpaque', []);
  }

  /*
    statusBarStyleBlackTranslucent
    support : iOS6
  */
  StatusBar.statusBarStyleBlackTranslucent = function() {
    monaca.apiQueue.exec(null, null, "mobi.monaca.nativecomponent", 'statusBarStyleBlackTranslucent', []);
  }

})();

/**
 * Monaca Cloud Functions
 *  Version 1.5.0
 *
 * @author Masahiro TANAKA <info@monaca.mobi>
 * @date   2013/03/17
 */
window.monaca = window.monaca || {};
window.monaca.cloud = window.monaca.cloud || {};

(function() {
    /**
     * Push Notification
     */
    monaca.cloud.Push = {};
    monaca.cloud.Push.callback = null;
    monaca.cloud.Push.callbackData = null;

    monaca.cloud.Push.send = function(data) {
        if (typeof monaca.cloud.Push.callback === "function") {
            monaca.cloud.Push.callback(data);
        } else {
            monaca.cloud.Push.callbackData = data;
        }
    };
    monaca.cloud.Push.setHandler = function(fn) {
        if (typeof fn !== "function") {
            console.warn("Push callback must be a function");
        } else {
            monaca.cloud.Push.callback = fn;
            if (monaca.cloud.Push.callbackData) {
                monaca.cloud.Push.callback(monaca.cloud.Push.callbackData);
                monaca.cloud.Push.callbackData = null;
            }
        }
    };

})();


/*
 * cloud
 */
(function(root) {
  var original$ = root.$;
  var originalZepto = root.Zepto;

  /* Zepto 1.1.3 - zepto event ajax deferred callbacks - zeptojs.com/license */
  var Zepto=function(){function k(t){return null==t?String(t):j[T.call(t)]||"object"}function $(t){return"function"==k(t)}function L(t){return null!=t&&t==t.window}function D(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function F(t){return"object"==k(t)}function Z(t){return F(t)&&!L(t)&&Object.getPrototypeOf(t)==Object.prototype}function M(t){return"number"==typeof t.length}function R(t){return s.call(t,function(t){return null!=t})}function _(t){return t.length>0?n.fn.concat.apply([],t):t}function q(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function W(t){return t in f?f[t]:f[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function z(t,e){return"number"!=typeof e||c[q(t)]?e:e+"px"}function H(t){var e,n;return u[t]||(e=a.createElement(t),a.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),u[t]=n),u[t]}function V(t){return"children"in t?o.call(t.children):n.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function I(n,i,r){for(e in i)r&&(Z(i[e])||A(i[e]))?(Z(i[e])&&!Z(n[e])&&(n[e]={}),A(i[e])&&!A(n[e])&&(n[e]=[]),I(n[e],i[e],r)):i[e]!==t&&(n[e]=i[e])}function B(t,e){return null==e?n(t):n(t).filter(e)}function J(t,e,n,i){return $(e)?e.call(t,n,i):e}function U(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function X(e,n){var i=e.className,r=i&&i.baseVal!==t;return n===t?r?i.baseVal:i:void(r?i.baseVal=n:e.className=n)}function Y(t){var e;try{return t?"true"==t||("false"==t?!1:"null"==t?null:/^0/.test(t)||isNaN(e=Number(t))?/^[\[\{]/.test(t)?n.parseJSON(t):t:e):t}catch(i){return t}}function G(t,e){e(t);for(var n in t.childNodes)G(t.childNodes[n],e)}var t,e,n,i,C,N,r=[],o=r.slice,s=r.filter,a=window.document,u={},f={},c={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},l=/^\s*<(\w+|!)[^>]*>/,h=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,p=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,d=/^(?:body|html)$/i,m=/([A-Z])/g,g=["val","css","html","text","data","width","height","offset"],v=["after","prepend","before","append"],y=a.createElement("table"),x=a.createElement("tr"),b={tr:a.createElement("tbody"),tbody:y,thead:y,tfoot:y,td:x,th:x,"*":a.createElement("div")},w=/complete|loaded|interactive/,E=/^[\w-]*$/,j={},T=j.toString,S={},O=a.createElement("div"),P={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},A=Array.isArray||function(t){return t instanceof Array};return S.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=O).appendChild(t),i=~S.qsa(r,e).indexOf(t),o&&O.removeChild(t),i},C=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},N=function(t){return s.call(t,function(e,n){return t.indexOf(e)==n})},S.fragment=function(e,i,r){var s,u,f;return h.test(e)&&(s=n(a.createElement(RegExp.$1))),s||(e.replace&&(e=e.replace(p,"<$1></$2>")),i===t&&(i=l.test(e)&&RegExp.$1),i in b||(i="*"),f=b[i],f.innerHTML=""+e,s=n.each(o.call(f.childNodes),function(){f.removeChild(this)})),Z(r)&&(u=n(s),n.each(r,function(t,e){g.indexOf(t)>-1?u[t](e):u.attr(t,e)})),s},S.Z=function(t,e){return t=t||[],t.__proto__=n.fn,t.selector=e||"",t},S.isZ=function(t){return t instanceof S.Z},S.init=function(e,i){var r;if(!e)return S.Z();if("string"==typeof e)if(e=e.trim(),"<"==e[0]&&l.test(e))r=S.fragment(e,RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=S.qsa(a,e)}else{if($(e))return n(a).ready(e);if(S.isZ(e))return e;if(A(e))r=R(e);else if(F(e))r=[e],e=null;else if(l.test(e))r=S.fragment(e.trim(),RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=S.qsa(a,e)}}return S.Z(r,e)},n=function(t,e){return S.init(t,e)},n.extend=function(t){var e,n=o.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){I(t,n,e)}),t},S.qsa=function(t,e){var n,i="#"==e[0],r=!i&&"."==e[0],s=i||r?e.slice(1):e,a=E.test(s);return D(t)&&a&&i?(n=t.getElementById(s))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:o.call(a&&!i?r?t.getElementsByClassName(s):t.getElementsByTagName(e):t.querySelectorAll(e))},n.contains=function(t,e){return t!==e&&t.contains(e)},n.type=k,n.isFunction=$,n.isWindow=L,n.isArray=A,n.isPlainObject=Z,n.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},n.inArray=function(t,e,n){return r.indexOf.call(e,t,n)},n.camelCase=C,n.trim=function(t){return null==t?"":String.prototype.trim.call(t)},n.uuid=0,n.support={},n.expr={},n.map=function(t,e){var n,r,o,i=[];if(M(t))for(r=0;r<t.length;r++)n=e(t[r],r),null!=n&&i.push(n);else for(o in t)n=e(t[o],o),null!=n&&i.push(n);return _(i)},n.each=function(t,e){var n,i;if(M(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},n.grep=function(t,e){return s.call(t,e)},window.JSON&&(n.parseJSON=JSON.parse),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){j["[object "+e+"]"]=e.toLowerCase()}),n.fn={forEach:r.forEach,reduce:r.reduce,push:r.push,sort:r.sort,indexOf:r.indexOf,concat:r.concat,map:function(t){return n(n.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return n(o.apply(this,arguments))},ready:function(t){return w.test(a.readyState)&&a.body?t(n):a.addEventListener("DOMContentLoaded",function(){t(n)},!1),this},get:function(e){return e===t?o.call(this):this[e>=0?e:e+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return r.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return $(t)?this.not(this.not(t)):n(s.call(this,function(e){return S.matches(e,t)}))},add:function(t,e){return n(N(this.concat(n(t,e))))},is:function(t){return this.length>0&&S.matches(this[0],t)},not:function(e){var i=[];if($(e)&&e.call!==t)this.each(function(t){e.call(this,t)||i.push(this)});else{var r="string"==typeof e?this.filter(e):M(e)&&$(e.item)?o.call(e):n(e);this.forEach(function(t){r.indexOf(t)<0&&i.push(t)})}return n(i)},has:function(t){return this.filter(function(){return F(t)?n.contains(this,t):n(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!F(t)?t:n(t)},last:function(){var t=this[this.length-1];return t&&!F(t)?t:n(t)},find:function(t){var e,i=this;return e="object"==typeof t?n(t).filter(function(){var t=this;return r.some.call(i,function(e){return n.contains(e,t)})}):1==this.length?n(S.qsa(this[0],t)):this.map(function(){return S.qsa(this,t)})},closest:function(t,e){var i=this[0],r=!1;for("object"==typeof t&&(r=n(t));i&&!(r?r.indexOf(i)>=0:S.matches(i,t));)i=i!==e&&!D(i)&&i.parentNode;return n(i)},parents:function(t){for(var e=[],i=this;i.length>0;)i=n.map(i,function(t){return(t=t.parentNode)&&!D(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return B(e,t)},parent:function(t){return B(N(this.pluck("parentNode")),t)},children:function(t){return B(this.map(function(){return V(this)}),t)},contents:function(){return this.map(function(){return o.call(this.childNodes)})},siblings:function(t){return B(this.map(function(t,e){return s.call(V(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return n.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=H(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=$(t);if(this[0]&&!e)var i=n(t).get(0),r=i.parentNode||this.length>1;return this.each(function(o){n(this).wrapAll(e?t.call(this,o):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){n(this[0]).before(t=n(t));for(var e;(e=t.children()).length;)t=e.first();n(t).append(this)}return this},wrapInner:function(t){var e=$(t);return this.each(function(i){var r=n(this),o=r.contents(),s=e?t.call(this,i):t;o.length?o.wrapAll(s):r.append(s)})},unwrap:function(){return this.parent().each(function(){n(this).replaceWith(n(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(e){return this.each(function(){var i=n(this);(e===t?"none"==i.css("display"):e)?i.show():i.hide()})},prev:function(t){return n(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return n(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0===arguments.length?this.length>0?this[0].innerHTML:null:this.each(function(e){var i=this.innerHTML;n(this).empty().append(J(this,t,e,i))})},text:function(e){return 0===arguments.length?this.length>0?this[0].textContent:null:this.each(function(){this.textContent=e===t?"":""+e})},attr:function(n,i){var r;return"string"==typeof n&&i===t?0==this.length||1!==this[0].nodeType?t:"value"==n&&"INPUT"==this[0].nodeName?this.val():!(r=this[0].getAttribute(n))&&n in this[0]?this[0][n]:r:this.each(function(t){if(1===this.nodeType)if(F(n))for(e in n)U(this,e,n[e]);else U(this,n,J(this,i,t,this.getAttribute(n)))})},removeAttr:function(t){return this.each(function(){1===this.nodeType&&U(this,t)})},prop:function(e,n){return e=P[e]||e,n===t?this[0]&&this[0][e]:this.each(function(t){this[e]=J(this,n,t,this[e])})},data:function(e,n){var i=this.attr("data-"+e.replace(m,"-$1").toLowerCase(),n);return null!==i?Y(i):t},val:function(t){return 0===arguments.length?this[0]&&(this[0].multiple?n(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value):this.each(function(e){this.value=J(this,t,e,this.value)})},offset:function(t){if(t)return this.each(function(e){var i=n(this),r=J(this,t,e,i.offset()),o=i.offsetParent().offset(),s={top:r.top-o.top,left:r.left-o.left};"static"==i.css("position")&&(s.position="relative"),i.css(s)});if(0==this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(t,i){if(arguments.length<2){var r=this[0],o=getComputedStyle(r,"");if(!r)return;if("string"==typeof t)return r.style[C(t)]||o.getPropertyValue(t);if(A(t)){var s={};return n.each(A(t)?t:[t],function(t,e){s[e]=r.style[C(e)]||o.getPropertyValue(e)}),s}}var a="";if("string"==k(t))i||0===i?a=q(t)+":"+z(t,i):this.each(function(){this.style.removeProperty(q(t))});else for(e in t)t[e]||0===t[e]?a+=q(e)+":"+z(e,t[e])+";":this.each(function(){this.style.removeProperty(q(e))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(n(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?r.some.call(this,function(t){return this.test(X(t))},W(t)):!1},addClass:function(t){return t?this.each(function(e){i=[];var r=X(this),o=J(this,t,e,r);o.split(/\s+/g).forEach(function(t){n(this).hasClass(t)||i.push(t)},this),i.length&&X(this,r+(r?" ":"")+i.join(" "))}):this},removeClass:function(e){return this.each(function(n){return e===t?X(this,""):(i=X(this),J(this,e,n,i).split(/\s+/g).forEach(function(t){i=i.replace(W(t)," ")}),void X(this,i.trim()))})},toggleClass:function(e,i){return e?this.each(function(r){var o=n(this),s=J(this,e,r,X(this));s.split(/\s+/g).forEach(function(e){(i===t?!o.hasClass(e):i)?o.addClass(e):o.removeClass(e)})}):this},scrollTop:function(e){if(this.length){var n="scrollTop"in this[0];return e===t?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){this.scrollTop=e}:function(){this.scrollTo(this.scrollX,e)})}},scrollLeft:function(e){if(this.length){var n="scrollLeft"in this[0];return e===t?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){this.scrollLeft=e}:function(){this.scrollTo(e,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),i=this.offset(),r=d.test(e[0].nodeName)?{top:0,left:0}:e.offset();return i.top-=parseFloat(n(t).css("margin-top"))||0,i.left-=parseFloat(n(t).css("margin-left"))||0,r.top+=parseFloat(n(e[0]).css("border-top-width"))||0,r.left+=parseFloat(n(e[0]).css("border-left-width"))||0,{top:i.top-r.top,left:i.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||a.body;t&&!d.test(t.nodeName)&&"static"==n(t).css("position");)t=t.offsetParent;return t})}},n.fn.detach=n.fn.remove,["width","height"].forEach(function(e){var i=e.replace(/./,function(t){return t[0].toUpperCase()});n.fn[e]=function(r){var o,s=this[0];return r===t?L(s)?s["inner"+i]:D(s)?s.documentElement["scroll"+i]:(o=this.offset())&&o[e]:this.each(function(t){s=n(this),s.css(e,J(this,r,t,s[e]()))})}}),v.forEach(function(t,e){var i=e%2;n.fn[t]=function(){var t,o,r=n.map(arguments,function(e){return t=k(e),"object"==t||"array"==t||null==e?e:S.fragment(e)}),s=this.length>1;return r.length<1?this:this.each(function(t,a){o=i?a:a.parentNode,a=0==e?a.nextSibling:1==e?a.firstChild:2==e?a:null,r.forEach(function(t){if(s)t=t.cloneNode(!0);else if(!o)return n(t).remove();G(o.insertBefore(t,a),function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},n.fn[i?t+"To":"insert"+(e?"Before":"After")]=function(e){return n(e)[t](this),this}}),S.Z.prototype=n.fn,S.uniq=N,S.deserializeValue=Y,n.zepto=S,n}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function l(t){return t._zid||(t._zid=e++)}function h(t,e,n,i){if(e=p(e),e.ns)var r=d(e.ns);return(s[l(t)]||[]).filter(function(t){return!(!t||e.e&&t.e!=e.e||e.ns&&!r.test(t.ns)||n&&l(t.fn)!==l(n)||i&&t.sel!=i)})}function p(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function d(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function m(t,e){return t.del&&!u&&t.e in f||!!e}function g(t){return c[t]||u&&f[t]||t}function v(e,i,r,o,a,u,f){var h=l(e),d=s[h]||(s[h]=[]);i.split(/\s/).forEach(function(i){if("ready"==i)return t(document).ready(r);var s=p(i);s.fn=r,s.sel=a,s.e in c&&(r=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?s.fn.apply(this,arguments):void 0}),s.del=u;var l=u||r;s.proxy=function(t){if(t=j(t),!t.isImmediatePropagationStopped()){t.data=o;var i=l.apply(e,t._args==n?[t]:[t].concat(t._args));return i===!1&&(t.preventDefault(),t.stopPropagation()),i}},s.i=d.length,d.push(s),"addEventListener"in e&&e.addEventListener(g(s.e),s.proxy,m(s,f))})}function y(t,e,n,i,r){var o=l(t);(e||"").split(/\s/).forEach(function(e){h(t,e,n,i).forEach(function(e){delete s[o][e.i],"removeEventListener"in t&&t.removeEventListener(g(e.e),e.proxy,m(e,r))})})}function j(e,i){return(i||!e.isDefaultPrevented)&&(i||(i=e),t.each(E,function(t,n){var r=i[t];e[t]=function(){return this[n]=x,r&&r.apply(i,arguments)},e[n]=b}),(i.defaultPrevented!==n?i.defaultPrevented:"returnValue"in i?i.returnValue===!1:i.getPreventDefault&&i.getPreventDefault())&&(e.isDefaultPrevented=x)),e}function T(t){var e,i={originalEvent:t};for(e in t)w.test(e)||t[e]===n||(i[e]=t[e]);return j(i,t)}var n,e=1,i=Array.prototype.slice,r=t.isFunction,o=function(t){return"string"==typeof t},s={},a={},u="onfocusin"in window,f={focus:"focusin",blur:"focusout"},c={mouseenter:"mouseover",mouseleave:"mouseout"};a.click=a.mousedown=a.mouseup=a.mousemove="MouseEvents",t.event={add:v,remove:y},t.proxy=function(e,n){if(r(e)){var i=function(){return e.apply(n,arguments)};return i._zid=l(e),i}if(o(n))return t.proxy(e[n],e);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var x=function(){return!0},b=function(){return!1},w=/^([A-Z]|returnValue$|layer[XY]$)/,E={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,s,a,u,f){var c,l,h=this;return e&&!o(e)?(t.each(e,function(t,e){h.on(t,s,a,e,f)}),h):(o(s)||r(u)||u===!1||(u=a,a=s,s=n),(r(a)||a===!1)&&(u=a,a=n),u===!1&&(u=b),h.each(function(n,r){f&&(c=function(t){return y(r,t.type,u),u.apply(this,arguments)}),s&&(l=function(e){var n,o=t(e.target).closest(s,r).get(0);return o&&o!==r?(n=t.extend(T(e),{currentTarget:o,liveFired:r}),(c||u).apply(o,[n].concat(i.call(arguments,1)))):void 0}),v(r,e,u,a,s,l||c)}))},t.fn.off=function(e,i,s){var a=this;return e&&!o(e)?(t.each(e,function(t,e){a.off(t,i,e)}),a):(o(i)||r(s)||s===!1||(s=i,i=n),s===!1&&(s=b),a.each(function(){y(this,e,s,i)}))},t.fn.trigger=function(e,n){return e=o(e)||t.isPlainObject(e)?t.Event(e):j(e),e._args=n,this.each(function(){"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,n){var i,r;return this.each(function(s,a){i=T(o(e)?t.Event(e):e),i._args=n,i.target=a,t.each(h(a,e.type||e),function(t,e){return r=e.proxy(i),i.isImmediatePropagationStopped()?!1:void 0})}),r},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.trigger(e)}}),["focus","blur"].forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.each(function(){try{this[e]()}catch(t){}}),this}}),t.Event=function(t,e){o(t)||(e=t,t=e.type);var n=document.createEvent(a[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0),j(n)}}(Zepto),function(t){function l(e,n,i){var r=t.Event(n);return t(e).trigger(r,i),!r.isDefaultPrevented()}function h(t,e,i,r){return t.global?l(e||n,i,r):void 0}function p(e){e.global&&0===t.active++&&h(e,null,"ajaxStart")}function d(e){e.global&&!--t.active&&h(e,null,"ajaxStop")}function m(t,e){var n=e.context;return e.beforeSend.call(n,t,e)===!1||h(e,n,"ajaxBeforeSend",[t,e])===!1?!1:void h(e,n,"ajaxSend",[t,e])}function g(t,e,n,i){var r=n.context,o="success";n.success.call(r,t,o,e),i&&i.resolveWith(r,[t,o,e]),h(n,r,"ajaxSuccess",[e,n,t]),y(o,e,n)}function v(t,e,n,i,r){var o=i.context;i.error.call(o,n,e,t),r&&r.rejectWith(o,[n,e,t]),h(i,o,"ajaxError",[n,i,t||e]),y(e,n,i)}function y(t,e,n){var i=n.context;n.complete.call(i,e,t),h(n,i,"ajaxComplete",[e,n]),d(n)}function x(){}function b(t){return t&&(t=t.split(";",2)[0]),t&&(t==f?"html":t==u?"json":s.test(t)?"script":a.test(t)&&"xml")||"text"}function w(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function E(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=w(e.url,e.data),e.data=void 0)}function j(e,n,i,r){return t.isFunction(n)&&(r=i,i=n,n=void 0),t.isFunction(i)||(r=i,i=void 0),{url:e,data:n,success:i,dataType:r}}function S(e,n,i,r){var o,s=t.isArray(n),a=t.isPlainObject(n);t.each(n,function(n,u){o=t.type(u),r&&(n=i?r:r+"["+(a||"object"==o||"array"==o?n:"")+"]"),!r&&s?e.add(u.name,u.value):"array"==o||!i&&"object"==o?S(e,u,i,n):e.add(n,u)})}var i,r,e=0,n=window.document,o=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,s=/^(?:text|application)\/javascript/i,a=/^(?:text|application)\/xml/i,u="application/json",f="text/html",c=/^\s*$/;t.active=0,t.ajaxJSONP=function(i,r){if(!("type"in i))return t.ajax(i);var f,h,o=i.jsonpCallback,s=(t.isFunction(o)?o():o)||"jsonp"+ ++e,a=n.createElement("script"),u=window[s],c=function(e){t(a).triggerHandler("error",e||"abort")},l={abort:c};return r&&r.promise(l),t(a).on("load error",function(e,n){clearTimeout(h),t(a).off().remove(),"error"!=e.type&&f?g(f[0],l,i,r):v(null,n||"error",l,i,r),window[s]=u,f&&t.isFunction(u)&&u(f[0]),u=f=void 0}),m(l,i)===!1?(c("abort"),l):(window[s]=function(){f=arguments},a.src=i.url.replace(/\?(.+)=\?/,"?$1="+s),n.head.appendChild(a),i.timeout>0&&(h=setTimeout(function(){c("timeout")},i.timeout)),l)},t.ajaxSettings={type:"GET",beforeSend:x,success:x,error:x,complete:x,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:u,xml:"application/xml, text/xml",html:f,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var n=t.extend({},e||{}),o=t.Deferred&&t.Deferred();for(i in t.ajaxSettings)void 0===n[i]&&(n[i]=t.ajaxSettings[i]);p(n),n.crossDomain||(n.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(n.url)&&RegExp.$2!=window.location.host),n.url||(n.url=window.location.toString()),E(n),n.cache===!1&&(n.url=w(n.url,"_="+Date.now()));var s=n.dataType,a=/\?.+=\?/.test(n.url);if("jsonp"==s||a)return a||(n.url=w(n.url,n.jsonp?n.jsonp+"=?":n.jsonp===!1?"":"callback=?")),t.ajaxJSONP(n,o);var j,u=n.accepts[s],f={},l=function(t,e){f[t.toLowerCase()]=[t,e]},h=/^([\w-]+:)\/\//.test(n.url)?RegExp.$1:window.location.protocol,d=n.xhr(),y=d.setRequestHeader;if(o&&o.promise(d),n.crossDomain||l("X-Requested-With","XMLHttpRequest"),l("Accept",u||"*/*"),(u=n.mimeType||u)&&(u.indexOf(",")>-1&&(u=u.split(",",2)[0]),d.overrideMimeType&&d.overrideMimeType(u)),(n.contentType||n.contentType!==!1&&n.data&&"GET"!=n.type.toUpperCase())&&l("Content-Type",n.contentType||"application/x-www-form-urlencoded"),n.headers)for(r in n.headers)l(r,n.headers[r]);if(d.setRequestHeader=l,d.onreadystatechange=function(){if(4==d.readyState){d.onreadystatechange=x,clearTimeout(j);var e,i=!1;if(d.status>=200&&d.status<300||304==d.status||0==d.status&&"file:"==h){s=s||b(n.mimeType||d.getResponseHeader("content-type")),e=d.responseText;try{"script"==s?(1,eval)(e):"xml"==s?e=d.responseXML:"json"==s&&(e=c.test(e)?null:t.parseJSON(e))}catch(r){i=r}i?v(i,"parsererror",d,n,o):g(e,d,n,o)}else v(d.statusText||null,d.status?"error":"abort",d,n,o)}},m(d,n)===!1)return d.abort(),v(null,"abort",d,n,o),d;if(n.xhrFields)for(r in n.xhrFields)d[r]=n.xhrFields[r];var T="async"in n?n.async:!0;d.open(n.type,n.url,T,n.username,n.password);for(r in f)y.apply(d,f[r]);return n.timeout>0&&(j=setTimeout(function(){d.onreadystatechange=x,d.abort(),v(null,"timeout",d,n,o)},n.timeout)),d.send(n.data?n.data:null),d},t.get=function(){return t.ajax(j.apply(null,arguments))},t.post=function(){var e=j.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=j.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,i){if(!this.length)return this;var a,r=this,s=e.split(/\s/),u=j(e,n,i),f=u.success;return s.length>1&&(u.url=s[0],a=s[1]),u.success=function(e){r.html(a?t("<div>").html(e.replace(o,"")).find(a):e),f&&f.apply(r,arguments)},t.ajax(u),this};var T=encodeURIComponent;t.param=function(t,e){var n=[];return n.add=function(t,e){this.push(T(t)+"="+T(e))},S(n,t,e),n.join("&").replace(/%20/g,"+")}}(Zepto),function(t){function n(e){var i=[["resolve","done",t.Callbacks({once:1,memory:1}),"resolved"],["reject","fail",t.Callbacks({once:1,memory:1}),"rejected"],["notify","progress",t.Callbacks({memory:1})]],r="pending",o={state:function(){return r},always:function(){return s.done(arguments).fail(arguments),this},then:function(){var e=arguments;return n(function(n){t.each(i,function(i,r){var a=t.isFunction(e[i])&&e[i];s[r[1]](function(){var e=a&&a.apply(this,arguments);if(e&&t.isFunction(e.promise))e.promise().done(n.resolve).fail(n.reject).progress(n.notify);else{var i=this===o?n.promise():this,s=a?[e]:arguments;n[r[0]+"With"](i,s)}})}),e=null}).promise()},promise:function(e){return null!=e?t.extend(e,o):o}},s={};return t.each(i,function(t,e){var n=e[2],a=e[3];o[e[1]]=n.add,a&&n.add(function(){r=a},i[1^t][2].disable,i[2][2].lock),s[e[0]]=function(){return s[e[0]+"With"](this===s?o:this,arguments),this},s[e[0]+"With"]=n.fireWith}),o.promise(s),e&&e.call(s,s),s}var e=Array.prototype.slice;t.when=function(i){var f,c,l,r=e.call(arguments),o=r.length,s=0,a=1!==o||i&&t.isFunction(i.promise)?o:0,u=1===a?i:n(),h=function(t,n,i){return function(r){n[t]=this,i[t]=arguments.length>1?e.call(arguments):r,i===f?u.notifyWith(n,i):--a||u.resolveWith(n,i)}};if(o>1)for(f=new Array(o),c=new Array(o),l=new Array(o);o>s;++s)r[s]&&t.isFunction(r[s].promise)?r[s].promise().done(h(s,l,r)).fail(u.reject).progress(h(s,c,f)):--a;return a||u.resolveWith(l,r),u.promise()},t.Deferred=n}(Zepto),function(t){t.Callbacks=function(e){e=t.extend({},e);var n,i,r,o,s,a,u=[],f=!e.once&&[],c=function(t){for(n=e.memory&&t,i=!0,a=o||0,o=0,s=u.length,r=!0;u&&s>a;++a)if(u[a].apply(t[0],t[1])===!1&&e.stopOnFalse){n=!1;break}r=!1,u&&(f?f.length&&c(f.shift()):n?u.length=0:l.disable())},l={add:function(){if(u){var i=u.length,a=function(n){t.each(n,function(t,n){"function"==typeof n?e.unique&&l.has(n)||u.push(n):n&&n.length&&"string"!=typeof n&&a(n)})};a(arguments),r?s=u.length:n&&(o=i,c(n))}return this},remove:function(){return u&&t.each(arguments,function(e,n){for(var i;(i=t.inArray(n,u,i))>-1;)u.splice(i,1),r&&(s>=i&&--s,a>=i&&--a)}),this},has:function(e){return!(!u||!(e?t.inArray(e,u)>-1:u.length))},empty:function(){return s=u.length=0,this},disable:function(){return u=f=n=void 0,this},disabled:function(){return!u},lock:function(){return f=void 0,n||l.disable(),this},locked:function(){return!f},fireWith:function(t,e){return!u||i&&!f||(e=e||[],e=[t,e.slice?e.slice():e],r?f.push(e):c(e)),this},fire:function(){return l.fireWith(this,arguments)},fired:function(){return!!i}};return l}}(Zepto);

  root.$ = original$;
  root.Zepto = originalZepto;
  var monaca = root.monaca = root.monaca || {};
  monaca.cloud = monaca.cloud || {};

  monaca.cloud.timeout = 30000;
  monaca.cloud.url = '%%%CLOUD_HOST%%%';
  monaca.cloud.backendId = '%%%BACKEND_ID%%%';
  monaca.cloud.apiKey = '%%%BACKEND_API_KEY%%%';
  monaca.cloud.deviceId = null;
  monaca.cloud.postQueue = [];

  /**
   * @property {jQuery} .
   */
  monaca.cloud.$ = Zepto;

  var MonacaCloudError = (function() {
    function MonacaCloudError(code, message, data) {
      if (typeof data === "undefined") {
        data = {};
      }
      this.code = code;
      this.message = message;
      this.data = data;
    }
    return MonacaCloudError;
  })();

  /**
   * @class
   */
  monaca.cloud.Error = function(code, message, data) {
    return new MonacaCloudError(code, message, data);
  };

  /**
   * @param {Number} msec .
   */
  monaca.cloud.setTimeout = function(msec) {
    this.timeout = msec;
  };

  // Get device id
  document.addEventListener("deviceready", function() {

    cordova.exec(function(result) {
        monaca.cloud.deviceId = new String(result.deviceId);
        monaca.cloud.url = new String(result.url);
        monaca.cloud.backendId = new String(result.backendId);
        monaca.cloud.apiKey = new String(result.apiKey);

        // execute and clear postQueue
        for (var i = 0; i < monaca.cloud.postQueue.length; i++) {
          monaca.cloud._doPost.apply(monaca.cloud, monaca.cloud.postQueue[i]);
        }
        monaca.cloud.postQueue = [];
      }, function(error) {
        console.error(error);
      },

      "Monaca",
      "getRuntimeConfiguration", []
    );

  }, false);

  // Others
  monaca.cloud._post = function(method, params, dfd, ajaxOptions, beforeSuccess) {
    if (monaca.cloud.deviceId == null) {
      monaca.cloud.postQueue.push([method, params, dfd, ajaxOptions, beforeSuccess]);
    } else {
      monaca.cloud._doPost(method, params, dfd, ajaxOptions, beforeSuccess);
    }
  };

  monaca.cloud._doPost = function(method, params, dfd, ajaxOptions, beforeSuccess) {
    var $ = monaca.cloud.$;

    if (typeof(ajaxOptions) === 'undefined') ajaxOptions = {};
    if ((typeof(method) === 'undefined') && (typeof(params) === 'undefined')) {
      throw new Error('Invalid arguments');
    }

    params['__api_key'] = monaca.cloud.apiKey;
    params['__device'] = monaca.cloud.deviceId;
    var sid = monaca.cloud._getSessionId();
    if (sid.length > 0) {
      params['__session'] = sid;
    }
    var data = JSON.stringify({
      jsonrpc: '2.0',
      method: method,
      params: params,
      id: '1'
    });

    var o = $.extend(true, {
      url: this.url + this.backendId,
      data: data,
      dataType: 'json',
      type: 'POST',
      timeout: this.timeout,
      success: function(jsonResponse, status, xhr) {
        var sessionHeader = xhr.getResponseHeader('X-Set-Monaca-Cloud-Session');
        if (sessionHeader) {
          monaca.cloud._setSessionId(sessionHeader);
        }

        if (typeof(jsonResponse.error) !== 'undefined') {
          // has error code
          dfd.reject(jsonResponse.error);
        } else {
          // success
          if (typeof(jsonResponse.result.loginToken) !== 'undefined') {
            localStorage.monacaCloudLoginToken = jsonResponse.result.loginToken;
          }
          if (typeof(beforeSuccess) !== 'undefined') {
            beforeSuccess(jsonResponse, status, xhr, dfd);
          }
          dfd.resolve(jsonResponse.result);
        }
      },
      error: function(xhr, status) {
        switch (status) {
          case 'timeout':
            var err = monaca.cloud.Error(-11, 'Connection timeout');
            break;
          case 'parsererror':
            var err = monaca.cloud.Error(-12, 'Invalid response');
            break;
          default:
            var err = monaca.cloud.Error(-13, 'Invalid status code');
        }
        dfd.reject(err);
      }
    }, ajaxOptions);

    $.ajax(o);
  };

  var _sessionId = '';

  monaca.cloud._getSessionId = function() {
    return _sessionId;
  };

  monaca.cloud._setSessionId = function(id) {
    if (typeof id != 'string') {
      id = '';
    }
    _sessionId = id;
  };

})(window);
/*
 * CollectionItem
 */
(function(root) {

  var monaca = root.monaca = root.monaca || {};
  monaca.cloud = monaca.cloud || {};
  var $ = monaca.cloud.$;

  /**
   * @class
   */
  MonacaCloudCollectionItem = (function() {

    function MonacaCloudCollectionItem(item, collection) {

      /**
       * @property {String} .
       */
      this._id = item._id;

      /**
       * @property {String} .
       */
      this._ownerUserOid = item._ownerUserOid;

      /**
       * @property {Date} .
       */
      this._createdAt = new Date(item._createdAt);

      /**
       * @property {Date} .
       */
      this._updatedAt = new Date(item._updatedAt);

      /**
       * @property {MonacaCloudCollection} .
       */
      this._collection = collection;


      for (var key in item) {
        if (key.substr(0, 1) != '_') {
          this[key] = item[key];
        }
      }
    }

    MonacaCloudCollectionItem.prototype = {

      /**
       * @return {$.Promise} .
       */
      update: function() {
        var dfd = new $.Deferred();
        var col = this._collection;
        var data = {};

        for (var key in this) {
          if (key.indexOf('_') !== 0) {
            data[key] = this[key];
          }
        }

        monaca.cloud._post('Collection.update', {
          collectionName: col.name,
          itemOid: this._id,
          data: data,
        }, dfd, {});

        return dfd.promise();
      },

      /**
       * @return {$.Promise} .
       */
      getPermission: function() {
        var dfd = new $.Deferred();
        var col = this._collection;

        monaca.cloud._post('Collection.getPermission', {
          collectionName: col.name,
          itemOid: this._id
        }, dfd, {});

        return dfd.promise();
      },

      /**
       * @param {Object} permission .
       * @param {Object} [options] .
       * @return {$.Promise} .
       */
      updatePermission: function(permission, options) {
        var dfd = new $.Deferred();
        var col = this._collection;

        if (typeof(options) === 'undefined') {
          options = {};
        }

        monaca.cloud._post('Collection.updatePermission', {
          collectionName: col.name,
          criteria: '_id == ?',
          bindParams: [this._id],
          permission: permission,
          options: options
        }, dfd, {});

        return dfd.promise();
      },

      /**
       * @return {$.Promise} .
       */
      remove: function() {
        var dfd = new $.Deferred();
        var col = this._collection;

        monaca.cloud._post('Collection.delete', {
          collectionName: col.name,
          itemOid: this._id,
        }, dfd, {});

        return dfd.promise();
      },

      'delete': function() {
        return this.remove();
      }

    };


    return MonacaCloudCollectionItem;
  })();

  monaca.cloud.CollectionItem = function(item, collection) {
    return new MonacaCloudCollectionItem(item, collection);
  };

})(window);
/*
 * Collection
 */
(function(root) {

  var monaca = root.monaca = root.monaca || {};
  monaca.cloud = monaca.cloud || {};
  var $ = monaca.cloud.$;

  /**
   * @class
   */
  MonacaCloudCollection = (function() {

    function MonacaCloudCollection(name) {
      this.name = name;
    }

    MonacaCloudCollection.prototype = {

      /**
       * @param {Object|Array} items .
       * @return {Array} result .
       */
      _makeCollectionItem: function(items) {
        var result = [];

        if (items instanceof Array) {
          for (var i = 0; i < items.length; i++) {
            result[i] = monaca.cloud.CollectionItem(items[i], this);
          }
        } else {
          result = monaca.cloud.CollectionItem(items, this);
        }

        return result;
      },

      /**
       * @param {Criteria|Array} criteria .
       */
      _validateCriteria: function(criteria) {
        if ((typeof(criteria) === 'undefined') || (typeof(criteria) === 'null')) {
          criteria = monaca.cloud.Criteria('');
        } else if (typeof(criteria) === 'string') {
          criteria = monaca.cloud.Criteria(criteria);
        }

        return criteria;
      },

      /**
       * @param {Object|Array} orderBy .
       * @param {Object} options .
       */
      _validateOptions: function(orderBy, options) {
        //if orderBy is hash, consider it as "options"
        if ((typeof(orderBy) === 'object') && (typeof(orderBy.length) === 'undefined')) {
          options = orderBy;
          if (typeof(options.orderBy) !== 'undefined') {
            orderBy = orderBy.orderBy;
          } else {
            orderBy = null;
          }
        }

        if (orderBy === '') {
          orderBy = null;
        }

        return {
          orderBy: orderBy,
          options: options
        };
      },

      /**
       * @param {Criteria|String} criteria .
       * @param {String|Array} [orderBy] .
       * @param {Object} [options] .
       * @return {$.Promise} .
       */
      find: function(criteria, orderBy, options) {
        var self = this;
        var dfd = new $.Deferred();

        criteria = self._validateCriteria(criteria);
        var o = self._validateOptions(orderBy, options);

        monaca.cloud._post('Collection.find', {
            collectionName: this.name,
            criteria: criteria.query,
            bindParams: criteria.bindParams,
            orderBy: o.orderBy,
            options: o.options
          }, dfd, {},
          function(e, status, xhr, dfd) {
            e.result.items = self._makeCollectionItem(e.result.items);
            dfd.resolve(e.result);
          });

        return dfd.promise();
      },

      /**
       * @param {Criteria|String} criteria .
       * @param {String|Array} [orderBy] .
       * @param {Object} [options] .
       * @return {$.Promise} .
       */
      findMine: function(criteria, orderBy, options) {
        var self = this;
        var dfd = new $.Deferred();

        criteria = self._validateCriteria(criteria);
        var o = self._validateOptions(orderBy, options);

        var userOid = monaca.cloud.User._oid;

        if (criteria.query != '') {
          criteria.query = '(' + criteria.query + ') && ';
        }
        if (userOid != null) {
          criteria.query += '(_ownerUserOid == ?)';
          criteria.bindParams.push(userOid);
        } else {
          criteria.query += '(_ownerDeviceOid == ?)';
          criteria.bindParams.push(monaca.cloud.deviceId);
        }

        monaca.cloud._post('Collection.find', {
            collectionName: this.name,
            criteria: criteria.query,
            bindParams: criteria.bindParams,
            orderBy: o.orderBy,
            options: o.options
          }, dfd, {},
          function(e, status, xhr, dfd) {
            e.result.items = self._makeCollectionItem(e.result.items);
            dfd.resolve(e.result);
          });

        return dfd.promise();
      },

      /**
       * @param {Criteria|String} criteria .
       * @param {String|Array} [orderBy] .
       * @param {Object} [options] .
       * @return {$.Promise} .
       */
      findOne: function(criteria, orderBy, options) {
        var self = this;
        var dfd = new $.Deferred();

        criteria = self._validateCriteria(criteria);
        var o = self._validateOptions(orderBy, options);

        monaca.cloud._post('Collection.find', {
            collectionName: this.name,
            criteria: criteria.query,
            bindParams: criteria.bindParams,
            orderBy: o.orderBy,
            options: o.options
          }, dfd, {},
          function(e, status, xhr, dfd) {
            var result = (e.result.totalItems > 0) ? self._makeCollectionItem(e.result.items[0]) : null;
            dfd.resolve(result);
          });

        return dfd.promise();
      },

      /**
       * @param {Criteria|String} criteria .
       * @param {String|Array} [orderBy] .
       * @param {Object} [options] .
       * @return {$.Promise} .
       */
      findOneMine: function(criteria, orderBy, options) {
        var self = this;
        var dfd = new $.Deferred();

        criteria = self._validateCriteria(criteria);
        var o = self._validateOptions(orderBy, options);

        var userOid = monaca.cloud.User._oid;

        if (criteria.query != '') {
          criteria.query = '(' + criteria.query + ') && ';
        }
        if (userOid != null) {
          criteria.query += '(_ownerUserOid == ?)';
          criteria.bindParams.push(userOid);
        } else {
          criteria.query += '(_ownerDeviceOid == ?)';
          criteria.bindParams.push(monaca.cloud.deviceId);
        }

        monaca.cloud._post('Collection.find', {
            collectionName: this.name,
            criteria: criteria.query,
            bindParams: criteria.bindParams,
            orderBy: o.orderBy,
            options: o.options
          }, dfd, {},
          function(e, status, xhr, dfd) {
            var result = (e.result.totalItems > 0) ? self._makeCollectionItem(e.result.items[0]) : null;
            dfd.resolve(result);
          });

        return dfd.promise();
      },

      /**
       * @param {Object} item .
       * @param {Object} [permission] .
       * @return {$.Promise} .
       */
      insert: function(item, permission) {
        var self = this;
        var dfd = new $.Deferred();

        if (typeof(permission) === 'undefined') {
          permission = {};
        }

        monaca.cloud._post('Collection.insert', {
            collectionName: this.name,
            item: item,
            permission: permission
          }, dfd, {},
          function(e, status, xhr, dfd) {
            var item = self._makeCollectionItem(e.result.item);
            dfd.resolve(item);
          });

        return dfd.promise();
      },

      /**
       * @param {Criteria|String} criteria .
       * @param {Object} permission .
       * @param {Object} [options] .
       * @return {$.Promise} .
       */
      updatePermission: function(criteria, permission, options) {
        var self = this;
        var dfd = new $.Deferred();

        criteria = self._validateCriteria(criteria);

        monaca.cloud._post('Collection.updatePermission', {
          collectionName: this.name,
          criteria: criteria.query,
          bindParams: criteria.bindParams,
          permission: permission,
          options: options
        }, dfd, {});

        return dfd.promise();
      }
    };

    return MonacaCloudCollection;
  })();


  monaca.cloud.Collection = function(name) {
    return new MonacaCloudCollection(name);
  };

})(window);
/*
 * Criteria
 */
(function(root) {

  var monaca = root.monaca = root.monaca || {};
  monaca.cloud = monaca.cloud || {};
  var $ = monaca.cloud.$;

  /**
   * @class
   */
  MonacaCloudCriteria = (function() {

    function MonacaCloudCriteria(query, bindParams) {
      this.query = query;
      this.bindParams = (typeof(bindParams) !== 'undefined') ? bindParams : [];
    }

    return MonacaCloudCriteria;
  })();


  monaca.cloud.Criteria = function(query, bindParams) {
    return new MonacaCloudCriteria(query, bindParams);
  };

})(window);
/*
 * Device
 */
(function(root) {

  var monaca = root.monaca = root.monaca || {};
  monaca.cloud = monaca.cloud || {};
  var $ = monaca.cloud.$;

  /**
   * @class
   */
  monaca.cloud.Device = {

    /**
     * @param {String} name .
     * @return {$.Promise} .
     */
    getProperty: function(name) {
      var dfd = new $.Deferred();

      monaca.cloud._post('Device.getProperties', {
          names: [name]
        }, dfd, {},
        function(e, status, xhr, dfd) {
          dfd.resolve(e.result.properties[name]);
        }
      );

      return dfd.promise();
    },

    /**
     * @param {Array} names .
     * @return {$.Promise} .
     */
    getProperties: function(names) {
      var dfd = new $.Deferred();

      monaca.cloud._post('Device.getProperties', {
          names: names
        }, dfd, {},
        function(e, status, xhr, dfd) {
          dfd.resolve(e.result.properties);
        }
      );

      return dfd.promise();
    },

    /**
     * @param {String} name .
     * @param {String} value .
     * @return {$.Promise} .
     */
    saveProperty: function(name, value) {
      var dfd = new $.Deferred();
      var param = {};

      if ((typeof(name) !== 'undefined') && (typeof(value) !== 'undefined')) {
        param = {
          properties: {}
        };
        param.properties[name] = value;
      }

      monaca.cloud._post('Device.saveProperties', param, dfd);

      return dfd.promise();
    },

    /**
     * @param {Object} properties .
     * @return {$.Promise} .
     */
    saveProperties: function(properties) {
      var dfd = new $.Deferred();
      var param = {};

      if (typeof(properties) !== 'undefined') param.properties = properties;
      monaca.cloud._post('Device.saveProperties', param, dfd);

      return dfd.promise();
    }

  };

})(window);
/*
 * Mailer
 */
(function(root) {

  var monaca = root.monaca = root.monaca || {};
  monaca.cloud = monaca.cloud || {};
  var $ = monaca.cloud.$;

  /**
   * @class
   */
  monaca.cloud.Mailer = {

    /**
     * @param {String} userOid .
     * @param {String} templateName .
     * @param {Object} substituteParams .
     * @param {Object} [options] .
     * @return {$.Promise} .
     */
    sendMail: function(userOid, templateName, substituteParams, options) {
      var dfd = new $.Deferred();

      if (typeof(options) === 'undefined') {
        options = {};
      }

      monaca.cloud._post('Mailer.sendMail', {
        userOid: userOid,
        templateName: templateName,
        substituteParams: substituteParams,
        options: options
      }, dfd);

      return dfd.promise();
    }
  };

})(window);
/*
 * User
 */
(function(root) {

  var monaca = root.monaca = root.monaca || {};
  monaca.cloud = monaca.cloud || {};
  var $ = monaca.cloud.$;

  /**
   * @class
   */
  monaca.cloud.User = (function() {


    return {

      _oid: null,

      /**
       * @return {Boolean} .
       */
      isAuthenticated: function() {
        return (this._oid === null) ? false : true;
      },


      /**
       * @param {String} username .
       * @param {String} password .
       * @param {Object} [properties] .
       * @return {$.Promise} .
       */
      register: function(username, password, properties) {
        var dfd = new $.Deferred();
        var self = this;

        if (typeof(properties) === 'undefined') properties = {};

        monaca.cloud._post('User.register', {
            username: username,
            password: password,
            properties: properties
          }, dfd, {},
          function(jsonResponse) {
            self._oid = jsonResponse.result.user._id;
          }
        );


        return dfd.promise();
      },

      /**
       * @param {String} username .
       * @param {Object} properties .
       * @return {$.Promise} .
       */
      validate: function(username, properties) {
        var dfd = new $.Deferred();

        monaca.cloud._post('User.validate', {
          username: username,
          properties: properties
        }, dfd);

        return dfd.promise();
      },

      /**
       * @param {String} password .
       * @return {$.Promise} .
       */
      unregister: function(password) {
        var self = this,
          dfd = new $.Deferred();

        monaca.cloud._post('User.unregister', {
            password: password
          }, dfd, {},
          function() {
            self._oid = null;
            monaca.cloud._setSessionId('');
            localStorage.removeItem('monacaCloudLoginToken');
          }
        );

        return dfd.promise();
      },

      /**
       * @param {String} username .
       * @param {String} password .
       * @return {$.Promise} .
       */
      login: function(username, password) {
        var self = this,
          dfd = new $.Deferred();

        monaca.cloud._post('User.login', {
            username: username,
            password: password
          }, dfd, {},
          function(jsonResponse) {
            self._oid = jsonResponse.result.user._id;
          }
        );

        return dfd.promise();
      },

      /**
       * @return {$.Promise} .
       */
      autoLogin: function() {
        var dfd = new $.Deferred();
        var token = localStorage.monacaCloudLoginToken || '';
        var self = this;

        monaca.cloud._post('User.autoLogin', {
            loginToken: token
          }, dfd, {},
          function(jsonResponse) {
            self._oid = jsonResponse.result.user._id;
          }
        );

        return dfd.promise();
      },

      /**
       * @return {$.Promise} .
       */
      logout: function() {
        var self = this,
          dfd = new $.Deferred();

        monaca.cloud._post('User.logout', {}, dfd, {},
          function() {
            self._oid = null;
            monaca.cloud._setSessionId('');
            localStorage.removeItem('monacaCloudLoginToken');
          }
        );

        return dfd.promise();
      },

      /**
       * @param {String} oldPassword .
       * @param {String} newPassword .
       * @return {$.Promise} .
       */
      updatePassword: function(oldPassword, newPassword) {
        var dfd = new $.Deferred();

        monaca.cloud._post('User.updatePassword', {
          oldPassword: oldPassword,
          newPassword: newPassword
        }, dfd);

        return dfd.promise();
      },

      /**
       * @param {String} username .
       * @param {Object} options .
       * @return {$.Promise} .
       */
      sendPasswordResetToken: function(username, options) {
        var dfd = new $.Deferred();

        monaca.cloud._post('User.sendPasswordResetToken', {
          username: username,
          options: options
        }, dfd);

        return dfd.promise();
      },

      /**
       * @param {String} username .
       * @param {String} newPassword .
       * @param {String} token .
       * @return {$.Promise} .
       */
      resetPasswordAndLogin: function(username, newPassword, token) {
        var dfd = new $.Deferred();
        var self = this;

        monaca.cloud._post('User.resetPasswordAndLogin', {
            username: username,
            newPassword: newPassword,
            token: token
          }, dfd, {},
          function(jsonResponse) {
            self._oid = jsonResponse.result.user._id;
          }
        );

        return dfd.promise();
      },

      /**
       * @param {String} name .
       * @return {$.Promise} .
       */
      getProperty: function(name) {
        var dfd = new $.Deferred();

        monaca.cloud._post('User.getProperties', {
            names: [name]
          }, dfd, {},
          function(e, status, xhr, dfd) {
            dfd.resolve(e.result.properties[name]);
          }
        );

        return dfd.promise();
      },

      /**
       * @param {Array} names .
       * @return {$.Promise} .
       */
      getProperties: function(names) {
        var dfd = new $.Deferred();

        monaca.cloud._post('User.getProperties', {
            names: names
          }, dfd, {},
          function(e, status, xhr, dfd) {
            dfd.resolve(e.result.properties);
          }
        );

        return dfd.promise();
      },

      /**
       * @param {String} name .
       * @param {String} value .
       * @return {$.Promise} .
       */
      saveProperty: function(name, value) {
        var dfd = new $.Deferred();
        var param = {};

        if (typeof(name) !== 'undefined') {
          param = {
            properties: {}
          };
          param.properties[name] = value;
        }

        monaca.cloud._post('User.saveProperties', param, dfd);

        return dfd.promise();
      },

      /**
       * @param {Object} properties .
       * @return {$.Promise} .
       */
      saveProperties: function(properties) {
        var dfd = new $.Deferred();
        var param = {};

        if (typeof(properties) !== 'undefined') param.properties = properties;
        monaca.cloud._post('User.saveProperties', param, dfd);

        return dfd.promise();
      }

    };
  })();

})(window);

;
/*** <End:monaca-core-utils LoadJs:"components/monaca-core-utils/monaca-core-utils.js"> ***/
/*** <End:monaca-core-utils> ***/



/*** <Start:monaca-cordova-loader> ***/
/*** <Start:monaca-cordova-loader LoadJs:"components/monaca-cordova-loader/cordova-loader.js"> ***/
(function(){
  function getDeviceObjectForPreview() {
    var raw_values = window.location.search.substring(1).split('&');
    var values = {};
    var device = { platform: "" };
    
    if (raw_values) {
      for (var key in raw_values) {
        var tmp = raw_values[key].split('=');
        values[tmp[0]] = decodeURIComponent(tmp[1]);
      }
      device.platform = values.platform;
    }
    
    return device;
  }
    
  if (location && typeof location.href === "string" && /^https:\/\/preview-.+monaca\.(local||mobi)/.test(location.href)) {
    window.device = getDeviceObjectForPreview();
  }

  if ((navigator.userAgent.match(/Android/i)) || (navigator.userAgent.match(/iPhone|iPad|iPod/i))) {
    if (typeof location.href === "string") {
      var relativePath = location.href.split("/www")[1];
      var paths = relativePath.split("/");
      var cordovaJsUrl = ""; 
      for (var i = 0; i < paths.length - 2; i++) {
        cordovaJsUrl += "../";
      }
      document.write("<script src=\"" + cordovaJsUrl+ "cordova.js" + "\"></script>");
    }
  } else if ( (navigator.userAgent.match(/MSIE\s10.0/) && navigator.userAgent.match(/Windows\sNT\s6.2/)) || navigator.userAgent.match(/MSAppHost/)) {
    var elm = document.createElement('script');
    elm.setAttribute("src", "cordova.js");
    document.getElementsByTagName("head")[0].appendChild(elm);
  };
})();

;
/*** <End:monaca-cordova-loader LoadJs:"components/monaca-cordova-loader/cordova-loader.js"> ***/
/*** <End:monaca-cordova-loader> ***/
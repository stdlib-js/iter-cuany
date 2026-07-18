"use strict";var c=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(n){throw (r=0, n)}};};var f=c(function(g,v){
var a=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=require('@stdlib/assert-is-function/dist'),m=require('@stdlib/assert-is-iterator-like/dist'),u=require('@stdlib/symbol-iterator/dist'),x=require('@stdlib/error-tools-fmtprodmsg/dist');function o(e){var r,n,i;if(!m(e))throw new TypeError(x('1xT3w',e));return r=!1,n={},a(n,"next",s),a(n,"return",l),u&&q(e[u])&&a(n,u,d),n;function s(){var t;return i?{done:!0}:(t=e.next(),t.done?(i=!0,t):(t.value&&(r=!0),{value:r,done:!1}))}function l(t){return i=!0,arguments.length?{value:t,done:!0}:{done:!0}}function d(){return o(e[u]())}}v.exports=o
});var y=f();module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

"use strict";var c=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var f=c(function(g,v){
var a=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=require('@stdlib/assert-is-function/dist'),m=require('@stdlib/assert-is-iterator-like/dist'),u=require('@stdlib/symbol-iterator/dist'),x=require('@stdlib/error-tools-fmtprodmsg/dist');function o(e){var r,t,i;if(!m(e))throw new TypeError(x('null3w',e));return r=!1,t={},a(t,"next",s),a(t,"return",l),u&&q(e[u])&&a(t,u,d),t;function s(){var n;return i?{done:!0}:(n=e.next(),n.done?(i=!0,n):(n.value&&(r=!0),{value:r,done:!1}))}function l(n){return i=!0,arguments.length?{value:n,done:!0}:{done:!0}}function d(){return o(e[u]())}}v.exports=o
});var y=f();module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

/*! third party licenses: js/vendor.LICENSE.txt */
import{g as c}from"./modulepreload-polyfill-CtIajbZu.mjs";function i(e,r){for(var n=0;n<r.length;n++){const t=r[n];if(typeof t!="string"&&!Array.isArray(t)){for(const a in t)if(a!=="default"&&!(a in e)){const s=Object.getOwnPropertyDescriptor(t,a);s&&Object.defineProperty(e,a,s.get?s:{enumerable:!0,get:()=>t[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}function l(e){const r=e.COMMENT(/\{/,/\}/,{contains:["self"]});return{name:"Parser3",subLanguage:"xml",relevance:0,contains:[e.COMMENT("^#","$"),e.COMMENT(/\^rem\{/,/\}/,{relevance:10,contains:[r]}),{className:"meta",begin:"^@(?:BASE|USE|CLASS|OPTIONS)$",relevance:10},{className:"title",begin:"@[\\w\\-]+\\[[\\w^;\\-]*\\](?:\\[[\\w^;\\-]*\\])?(?:.*)$"},{className:"variable",begin:/\$\{?[\w\-.:]+\}?/},{className:"keyword",begin:/\^[\w\-.:]+/},{className:"number",begin:"\\^#[0-9a-fA-F]+"},e.C_NUMBER_MODE]}}var o=l;const f=c(o),m=i({__proto__:null,default:f},[o]);export{o as a,m as p};
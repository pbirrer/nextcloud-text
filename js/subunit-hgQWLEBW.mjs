/*! third party licenses: js/vendor.LICENSE.txt */
import{g as o}from"./modulepreload-polyfill-CtIajbZu.mjs";function c(s,i){for(var r=0;r<i.length;r++){const e=i[r];if(typeof e!="string"&&!Array.isArray(e)){for(const t in e)if(t!=="default"&&!(t in s)){const n=Object.getOwnPropertyDescriptor(e,t);n&&Object.defineProperty(s,t,n.get?n:{enumerable:!0,get:()=>e[t]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}function g(s){return{name:"SubUnit",case_insensitive:!0,contains:[{className:"string",begin:"\\[\n(multipart)?",end:"\\]\n"},{className:"string",begin:"\\d{4}-\\d{2}-\\d{2}(\\s+)\\d{2}:\\d{2}:\\d{2}.\\d+Z"},{className:"string",begin:"(\\+|-)\\d+"},{className:"keyword",relevance:10,variants:[{begin:"^(test|testing|success|successful|failure|error|skip|xfail|uxsuccess)(:?)\\s+(test)?"},{begin:"^progress(:?)(\\s+)?(pop|push)?"},{begin:"^tags:"},{begin:"^time:"}]}]}}var a=g;const u=o(a),f=c({__proto__:null,default:u},[a]);export{a,f as s};
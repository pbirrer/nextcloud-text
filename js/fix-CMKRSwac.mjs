/*! third party licenses: js/vendor.LICENSE.txt */
import{g as a}from"./modulepreload-polyfill-CtIajbZu.mjs";function c(t,i){for(var r=0;r<i.length;r++){const e=i[r];if(typeof e!="string"&&!Array.isArray(e)){for(const n in e)if(n!=="default"&&!(n in t)){const u=Object.getOwnPropertyDescriptor(e,n);u&&Object.defineProperty(t,n,u.get?u:{enumerable:!0,get:()=>e[n]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}function s(t){return{name:"FIX",contains:[{begin:/[^\u2401\u0001]+/,end:/[\u2401\u0001]/,excludeEnd:!0,returnBegin:!0,returnEnd:!1,contains:[{begin:/([^\u2401\u0001=]+)/,end:/=([^\u2401\u0001=]+)/,returnEnd:!0,returnBegin:!1,className:"attr"},{begin:/=/,end:/([\u2401\u0001])/,excludeEnd:!0,excludeBegin:!0,className:"string"}]}],case_insensitive:!0}}var o=s;const d=a(o),f=c({__proto__:null,default:d},[o]);export{o as a,f};
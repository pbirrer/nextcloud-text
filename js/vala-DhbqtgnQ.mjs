/*! third party licenses: js/vendor.LICENSE.txt */
import{g as o}from"./modulepreload-polyfill-sPpBbGTg.mjs";function c(e,i){for(var r=0;r<i.length;r++){const t=i[r];if(typeof t!="string"&&!Array.isArray(t)){for(const n in t)if(n!=="default"&&!(n in e)){const a=Object.getOwnPropertyDescriptor(t,n);a&&Object.defineProperty(e,n,a.get?a:{enumerable:!0,get:()=>t[n]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}function l(e){return{name:"Vala",keywords:{keyword:"char uchar unichar int uint long ulong short ushort int8 int16 int32 int64 uint8 uint16 uint32 uint64 float double bool struct enum string void weak unowned owned async signal static abstract interface override virtual delegate if while do for foreach else switch case break default return try catch public private protected internal using new this get set const stdout stdin stderr var",built_in:"DBus GLib CCode Gee Object Gtk Posix",literal:"false true null"},contains:[{className:"class",beginKeywords:"class interface namespace",end:/\{/,excludeEnd:!0,illegal:"[^,:\\n\\s\\.]",contains:[e.UNDERSCORE_TITLE_MODE]},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{className:"string",begin:'"""',end:'"""',relevance:5},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.C_NUMBER_MODE,{className:"meta",begin:"^#",end:"$"}]}}var s=l;const u=o(s),f=c({__proto__:null,default:u},[s]);export{s as a,f as v};
import{g as p}from"./emoji-picker-Coav-X6q.chunk.mjs";function O(e,n){for(var t=0;t<n.length;t++){const i=n[t];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in e)){const a=Object.getOwnPropertyDescriptor(i,r);a&&Object.defineProperty(e,r,a.get?a:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}function T(e){const n="[a-z'][a-zA-Z0-9_']*",t="("+n+":"+n+"|"+n+")",i={keyword:"after and andalso|10 band begin bnot bor bsl bzr bxor case catch cond div end fun if let not of orelse|10 query receive rem try when xor maybe else",literal:"false true"},r=e.COMMENT("%","$"),a={className:"number",begin:"\\b(\\d+(_\\d+)*#[a-fA-F0-9]+(_[a-fA-F0-9]+)*|\\d+(_\\d+)*(\\.\\d+(_\\d+)*)?([eE][-+]?\\d+)?)",relevance:0},E={begin:"fun\\s+"+n+"/\\d+"},b={begin:t+"\\(",end:"\\)",returnBegin:!0,relevance:0,contains:[{begin:t,relevance:0},{begin:"\\(",end:"\\)",endsWithParent:!0,returnEnd:!0,relevance:0}]},s={begin:/\{/,end:/\}/,relevance:0},g={begin:"\\b_([A-Z][A-Za-z0-9_]*)?",relevance:0},f={begin:"[A-Z][a-zA-Z0-9_]*",relevance:0},c={begin:"#"+e.UNDERSCORE_IDENT_RE,relevance:0,returnBegin:!0,contains:[{begin:"#"+e.UNDERSCORE_IDENT_RE,relevance:0},{begin:/\{/,end:/\}/,relevance:0}]},_={scope:"string",match:/\$(\\([^0-9]|[0-9]{1,3}|)|.)/},d={scope:"string",match:/"""("*)(?!")[\s\S]*?"""\1/},l={scope:"string",contains:[e.BACKSLASH_ESCAPE],variants:[{match:/~\w?"""("*)(?!")[\s\S]*?"""\1/},{begin:/~\w?\(/,end:/\)/},{begin:/~\w?\[/,end:/\]/},{begin:/~\w?{/,end:/}/},{begin:/~\w?</,end:/>/},{begin:/~\w?\//,end:/\//},{begin:/~\w?\|/,end:/\|/},{begin:/~\w?'/,end:/'/},{begin:/~\w?"/,end:/"/},{begin:/~\w?`/,end:/`/},{begin:/~\w?#/,end:/#/}]},u={beginKeywords:"fun receive if try case maybe",end:"end",keywords:i};u.contains=[r,E,e.inherit(e.APOS_STRING_MODE,{className:""}),u,b,l,d,e.QUOTE_STRING_MODE,a,s,g,f,c,_];const o=[r,E,u,b,l,d,e.QUOTE_STRING_MODE,a,s,g,f,c,_];b.contains[1].contains=o,s.contains=o,c.contains[1].contains=o;const w=["-module","-record","-undef","-export","-ifdef","-ifndef","-author","-copyright","-doc","-moduledoc","-vsn","-import","-include","-include_lib","-compile","-define","-else","-endif","-file","-behaviour","-behavior","-spec","-on_load","-nifs"],m={className:"params",begin:"\\(",end:"\\)",contains:o};return{name:"Erlang",aliases:["erl"],keywords:i,illegal:"(</|\\*=|\\+=|-=|/\\*|\\*/|\\(\\*|\\*\\))",contains:[{className:"function",begin:"^"+n+"\\s*\\(",end:"->",returnBegin:!0,illegal:"\\(|#|//|/\\*|\\\\|:|;",contains:[m,e.inherit(e.TITLE_MODE,{begin:n})],starts:{end:";|\\.",keywords:i,contains:o}},r,{begin:"^-",end:"\\.",relevance:0,excludeEnd:!0,returnBegin:!0,keywords:{$pattern:"-"+e.IDENT_RE,keyword:w.map(y=>"".concat(y,"|1.5")).join(" ")},contains:[m,l,d,e.QUOTE_STRING_MODE]},a,l,d,e.QUOTE_STRING_MODE,c,g,f,s,_,{begin:/\.$/}]}}var v=T;const N=p(v),A=O({__proto__:null,default:N},[v]);export{v as a,A as e};
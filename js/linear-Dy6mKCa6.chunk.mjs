/*! third party licenses: js/vendor.LICENSE.txt */
import{aD as or,aE as G,aF as Y,aG as Z,aH as ur}from"./mermaid.core-D0HQUDZw.chunk.mjs";import{i as cr}from"./init-q33yAy1W.chunk.mjs";function D(r,n){return r==null||n==null?NaN:r<n?-1:r>n?1:r>=n?0:NaN}function fr(r,n){return r==null||n==null?NaN:n<r?-1:n>r?1:n>=r?0:NaN}function _(r){let n,i,t;r.length!==2?(n=D,i=(u,f)=>D(r(u),f),t=(u,f)=>r(u)-f):(n=r===D||r===fr?r:sr,i=r,t=r);function e(u,f,a=0,g=u.length){if(a<g){if(n(f,f)!==0)return g;do{const s=a+g>>>1;i(u[s],f)<0?a=s+1:g=s}while(a<g)}return a}function c(u,f,a=0,g=u.length){if(a<g){if(n(f,f)!==0)return g;do{const s=a+g>>>1;i(u[s],f)<=0?a=s+1:g=s}while(a<g)}return a}function o(u,f,a=0,g=u.length){const s=e(u,f,a,g-1);return s>a&&t(u[s-1],f)>-t(u[s],f)?s-1:s}return{left:e,center:o,right:c}}function sr(){return 0}function lr(r){return r===null?NaN:+r}const hr=_(D),gr=hr.right;_(lr).center;const pr=Math.sqrt(50),vr=Math.sqrt(10),Mr=Math.sqrt(2);function F(r,n,i){const t=(n-r)/Math.max(0,i),e=Math.floor(Math.log10(t)),c=t/Math.pow(10,e),o=c>=pr?10:c>=vr?5:c>=Mr?2:1;let u,f,a;return e<0?(a=Math.pow(10,-e)/o,u=Math.round(r*a),f=Math.round(n*a),u/a<r&&++u,f/a>n&&--f,a=-a):(a=Math.pow(10,e)*o,u=Math.round(r/a),f=Math.round(n/a),u*a<r&&++u,f*a>n&&--f),f<u&&.5<=i&&i<2?F(r,n,i*2):[u,f,a]}function dr(r,n,i){if(n=+n,r=+r,i=+i,!(i>0))return[];if(r===n)return[r];const t=n<r,[e,c,o]=t?F(n,r,i):F(r,n,i);if(!(c>=e))return[];const u=c-e+1,f=new Array(u);if(t)if(o<0)for(let a=0;a<u;++a)f[a]=(c-a)/-o;else for(let a=0;a<u;++a)f[a]=(c-a)*o;else if(o<0)for(let a=0;a<u;++a)f[a]=(e+a)/-o;else for(let a=0;a<u;++a)f[a]=(e+a)*o;return f}function L(r,n,i){return n=+n,r=+r,i=+i,F(r,n,i)[2]}function mr(r,n,i){n=+n,r=+r,i=+i;const t=n<r,e=t?L(n,r,i):L(r,n,i);return(t?-1:1)*(e<0?1/-e:e)}function yr(r,n){n||(n=[]);var i=r?Math.min(n.length,r.length):0,t=n.slice(),e;return function(c){for(e=0;e<i;++e)t[e]=r[e]*(1-c)+n[e]*c;return t}}function br(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function wr(r,n){var i=n?n.length:0,t=r?Math.min(i,r.length):0,e=new Array(t),c=new Array(i),o;for(o=0;o<t;++o)e[o]=T(r[o],n[o]);for(;o<i;++o)c[o]=n[o];return function(u){for(o=0;o<t;++o)c[o]=e[o](u);return c}}function Nr(r,n){var i=new Date;return r=+r,n=+n,function(t){return i.setTime(r*(1-t)+n*t),i}}function xr(r,n){var i={},t={},e;(r===null||typeof r!="object")&&(r={}),(n===null||typeof n!="object")&&(n={});for(e in n)e in r?i[e]=T(r[e],n[e]):t[e]=n[e];return function(c){for(e in i)t[e]=i[e](c);return t}}function T(r,n){var i=typeof n,t;return n==null||i==="boolean"?or(n):(i==="number"?G:i==="string"?(t=Y(n))?(n=t,Z):ur:n instanceof Y?Z:n instanceof Date?Nr:br(n)?yr:Array.isArray(n)?wr:typeof n.valueOf!="function"&&typeof n.toString!="function"||isNaN(n)?xr:G)(r,n)}function kr(r,n){return r=+r,n=+n,function(i){return Math.round(r*(1-i)+n*i)}}function Ar(r){return Math.abs(r=Math.round(r))>=1e21?r.toLocaleString("en").replace(/,/g,""):r.toString(10)}function q(r,n){if((i=(r=n?r.toExponential(n-1):r.toExponential()).indexOf("e"))<0)return null;var i,t=r.slice(0,i);return[t.length>1?t[0]+t.slice(2):t,+r.slice(i+1)]}function k(r){return r=q(Math.abs(r)),r?r[1]:NaN}function Sr(r,n){return function(i,t){for(var e=i.length,c=[],o=0,u=r[0],f=0;e>0&&u>0&&(f+u+1>t&&(u=Math.max(1,t-f)),c.push(i.substring(e-=u,e+u)),!((f+=u+1)>t));)u=r[o=(o+1)%r.length];return c.reverse().join(n)}}function jr(r){return function(n){return n.replace(/[0-9]/g,function(i){return r[+i]})}}var zr=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function C(r){if(!(n=zr.exec(r)))throw new Error("invalid format: "+r);var n;return new V({fill:n[1],align:n[2],sign:n[3],symbol:n[4],zero:n[5],width:n[6],comma:n[7],precision:n[8]&&n[8].slice(1),trim:n[9],type:n[10]})}C.prototype=V.prototype;function V(r){this.fill=r.fill===void 0?" ":r.fill+"",this.align=r.align===void 0?">":r.align+"",this.sign=r.sign===void 0?"-":r.sign+"",this.symbol=r.symbol===void 0?"":r.symbol+"",this.zero=!!r.zero,this.width=r.width===void 0?void 0:+r.width,this.comma=!!r.comma,this.precision=r.precision===void 0?void 0:+r.precision,this.trim=!!r.trim,this.type=r.type===void 0?"":r.type+""}V.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function Er(r){r:for(var n=r.length,i=1,t=-1,e;i<n;++i)switch(r[i]){case".":t=e=i;break;case"0":t===0&&(t=i),e=i;break;default:if(!+r[i])break r;t>0&&(t=0);break}return t>0?r.slice(0,t)+r.slice(e+1):r}var rr;function $r(r,n){var i=q(r,n);if(!i)return r+"";var t=i[0],e=i[1],c=e-(rr=Math.max(-8,Math.min(8,Math.floor(e/3)))*3)+1,o=t.length;return c===o?t:c>o?t+new Array(c-o+1).join("0"):c>0?t.slice(0,c)+"."+t.slice(c):"0."+new Array(1-c).join("0")+q(r,Math.max(0,n+c-1))[0]}function I(r,n){var i=q(r,n);if(!i)return r+"";var t=i[0],e=i[1];return e<0?"0."+new Array(-e).join("0")+t:t.length>e+1?t.slice(0,e+1)+"."+t.slice(e+1):t+new Array(e-t.length+2).join("0")}const J={"%":(r,n)=>(r*100).toFixed(n),b:r=>Math.round(r).toString(2),c:r=>r+"",d:Ar,e:(r,n)=>r.toExponential(n),f:(r,n)=>r.toFixed(n),g:(r,n)=>r.toPrecision(n),o:r=>Math.round(r).toString(8),p:(r,n)=>I(r*100,n),r:I,s:$r,X:r=>Math.round(r).toString(16).toUpperCase(),x:r=>Math.round(r).toString(16)};function P(r){return r}var K=Array.prototype.map,Q=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function Dr(r){var n=r.grouping===void 0||r.thousands===void 0?P:Sr(K.call(r.grouping,Number),r.thousands+""),i=r.currency===void 0?"":r.currency[0]+"",t=r.currency===void 0?"":r.currency[1]+"",e=r.decimal===void 0?".":r.decimal+"",c=r.numerals===void 0?P:jr(K.call(r.numerals,String)),o=r.percent===void 0?"%":r.percent+"",u=r.minus===void 0?"−":r.minus+"",f=r.nan===void 0?"NaN":r.nan+"";function a(s){s=C(s);var h=s.fill,m=s.align,M=s.sign,A=s.symbol,w=s.zero,S=s.width,B=s.comma,y=s.precision,X=s.trim,p=s.type;p==="n"?(B=!0,p="g"):J[p]||(y===void 0&&(y=12),X=!0,p="g"),(w||h==="0"&&m==="=")&&(w=!0,h="0",m="=");var ir=A==="$"?i:A==="#"&&/[boxX]/.test(p)?"0"+p.toLowerCase():"",er=A==="$"?t:/[%p]/.test(p)?o:"",H=J[p],ar=/[defgprs%]/.test(p);y=y===void 0?6:/[gprs]/.test(p)?Math.max(1,Math.min(21,y)):Math.max(0,Math.min(20,y));function R(l){var b=ir,v=er,N,U,j;if(p==="c")v=H(l)+v,l="";else{l=+l;var z=l<0||1/l<0;if(l=isNaN(l)?f:H(Math.abs(l),y),X&&(l=Er(l)),z&&+l==0&&M!=="+"&&(z=!1),b=(z?M==="("?M:u:M==="-"||M==="("?"":M)+b,v=(p==="s"?Q[8+rr/3]:"")+v+(z&&M==="("?")":""),ar){for(N=-1,U=l.length;++N<U;)if(j=l.charCodeAt(N),48>j||j>57){v=(j===46?e+l.slice(N+1):l.slice(N))+v,l=l.slice(0,N);break}}}B&&!w&&(l=n(l,1/0));var E=b.length+l.length+v.length,d=E<S?new Array(S-E+1).join(h):"";switch(B&&w&&(l=n(d+l,d.length?S-v.length:1/0),d=""),m){case"<":l=b+l+v+d;break;case"=":l=b+d+l+v;break;case"^":l=d.slice(0,E=d.length>>1)+b+l+v+d.slice(E);break;default:l=d+b+l+v;break}return c(l)}return R.toString=function(){return s+""},R}function g(s,h){var m=a((s=C(s),s.type="f",s)),M=Math.max(-8,Math.min(8,Math.floor(k(h)/3)))*3,A=Math.pow(10,-M),w=Q[8+M/3];return function(S){return m(A*S)+w}}return{format:a,formatPrefix:g}}var $,nr,tr;Fr({thousands:",",grouping:[3],currency:["$",""]});function Fr(r){return $=Dr(r),nr=$.format,tr=$.formatPrefix,$}function qr(r){return Math.max(0,-k(Math.abs(r)))}function Cr(r,n){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(k(n)/3)))*3-k(Math.abs(r)))}function Br(r,n){return r=Math.abs(r),n=Math.abs(n)-r,Math.max(0,k(n)-k(r))+1}function Gr(r){return function(){return r}}function Lr(r){return+r}var W=[0,1];function x(r){return r}function O(r,n){return(n-=r=+r)?function(i){return(i-r)/n}:Gr(isNaN(n)?NaN:.5)}function Or(r,n){var i;return r>n&&(i=r,r=n,n=i),function(t){return Math.max(r,Math.min(n,t))}}function Tr(r,n,i){var t=r[0],e=r[1],c=n[0],o=n[1];return e<t?(t=O(e,t),c=i(o,c)):(t=O(t,e),c=i(c,o)),function(u){return c(t(u))}}function Vr(r,n,i){var t=Math.min(r.length,n.length)-1,e=new Array(t),c=new Array(t),o=-1;for(r[t]<r[0]&&(r=r.slice().reverse(),n=n.slice().reverse());++o<t;)e[o]=O(r[o],r[o+1]),c[o]=i(n[o],n[o+1]);return function(u){var f=gr(r,u,1,t)-1;return c[f](e[f](u))}}function Xr(r,n){return n.domain(r.domain()).range(r.range()).interpolate(r.interpolate()).clamp(r.clamp()).unknown(r.unknown())}function Hr(){var r=W,n=W,i=T,t,e,c,o=x,u,f,a;function g(){var h=Math.min(r.length,n.length);return o!==x&&(o=Or(r[0],r[h-1])),u=h>2?Vr:Tr,f=a=null,s}function s(h){return h==null||isNaN(h=+h)?c:(f||(f=u(r.map(t),n,i)))(t(o(h)))}return s.invert=function(h){return o(e((a||(a=u(n,r.map(t),G)))(h)))},s.domain=function(h){return arguments.length?(r=Array.from(h,Lr),g()):r.slice()},s.range=function(h){return arguments.length?(n=Array.from(h),g()):n.slice()},s.rangeRound=function(h){return n=Array.from(h),i=kr,g()},s.clamp=function(h){return arguments.length?(o=h?!0:x,g()):o!==x},s.interpolate=function(h){return arguments.length?(i=h,g()):i},s.unknown=function(h){return arguments.length?(c=h,s):c},function(h,m){return t=h,e=m,g()}}function Rr(){return Hr()(x,x)}function Ur(r,n,i,t){var e=mr(r,n,i),c;switch(t=C(t!=null?t:",f"),t.type){case"s":{var o=Math.max(Math.abs(r),Math.abs(n));return t.precision==null&&!isNaN(c=Cr(e,o))&&(t.precision=c),tr(t,o)}case"":case"e":case"g":case"p":case"r":{t.precision==null&&!isNaN(c=Br(e,Math.max(Math.abs(r),Math.abs(n))))&&(t.precision=c-(t.type==="e"));break}case"f":case"%":{t.precision==null&&!isNaN(c=qr(e))&&(t.precision=c-(t.type==="%")*2);break}}return nr(t)}function Yr(r){var n=r.domain;return r.ticks=function(i){var t=n();return dr(t[0],t[t.length-1],i!=null?i:10)},r.tickFormat=function(i,t){var e=n();return Ur(e[0],e[e.length-1],i!=null?i:10,t)},r.nice=function(i){i==null&&(i=10);var t=n(),e=0,c=t.length-1,o=t[e],u=t[c],f,a,g=10;for(u<o&&(a=o,o=u,u=a,a=e,e=c,c=a);g-- >0;){if(a=L(o,u,i),a===f)return t[e]=o,t[c]=u,n(t);if(a>0)o=Math.floor(o/a)*a,u=Math.ceil(u/a)*a;else if(a<0)o=Math.ceil(o*a)/a,u=Math.floor(u*a)/a;else break;f=a}return r},r}function Zr(){var r=Rr();return r.copy=function(){return Xr(r,Zr())},cr.apply(r,arguments),Yr(r)}export{Xr as a,_ as b,Rr as c,Zr as l,mr as t};
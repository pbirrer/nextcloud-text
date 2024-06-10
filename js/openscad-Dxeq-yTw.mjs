/*! third party licenses: js/vendor.LICENSE.txt */
import{g as d}from"./modulepreload-polyfill-CtIajbZu.mjs";function u(e,t){for(var o=0;o<t.length;o++){const n=t[o];if(typeof n!="string"&&!Array.isArray(n)){for(const r in n)if(r!=="default"&&!(r in e)){const s=Object.getOwnPropertyDescriptor(n,r);s&&Object.defineProperty(e,r,s.get?s:{enumerable:!0,get:()=>n[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}function f(e){const t={className:"keyword",begin:"\\$(f[asn]|t|vp[rtd]|children)"},o={className:"literal",begin:"false|true|PI|undef"},n={className:"number",begin:"\\b\\d+(\\.\\d+)?(e-?\\d+)?",relevance:0},r=e.inherit(e.QUOTE_STRING_MODE,{illegal:null}),s={className:"meta",keywords:{keyword:"include use"},begin:"include|use <",end:">"},a={className:"params",begin:"\\(",end:"\\)",contains:["self",n,r,t,o]},l={begin:"[*!#%]",relevance:0},c={className:"function",beginKeywords:"module function",end:/=|\{/,contains:[a,e.UNDERSCORE_TITLE_MODE]};return{name:"OpenSCAD",aliases:["scad"],keywords:{keyword:"function module include use for intersection_for if else \\%",literal:"false true PI undef",built_in:"circle square polygon text sphere cube cylinder polyhedron translate rotate scale resize mirror multmatrix color offset hull minkowski union difference intersection abs sign sin cos tan acos asin atan atan2 floor round ceil ln log pow sqrt exp rands min max concat lookup str chr search version version_num norm cross parent_module echo import import_dxf dxf_linear_extrude linear_extrude rotate_extrude surface projection render children dxf_cross dxf_dim let assign"},contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,n,s,r,t,l,c]}}var i=f;const m=d(i),p=u({__proto__:null,default:m},[i]);export{i as a,p as o};
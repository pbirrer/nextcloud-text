/*! third party licenses: js/vendor.LICENSE.txt */
import{B as o}from"./BaseReader-BeakPNML.chunk.mjs";import{X as i,R as s}from"./RichText-Cy7Ik9_w.chunk.mjs";import{n as c}from"./_plugin-vue2_normalizer-BSkpdvAR.chunk.mjs";const a={name:"RichTextReader",components:{BaseReader:o},provide:{renderHtml(e){return i.render(e)},extensions(){return[s.configure({editing:!1})]}},props:{content:{type:String,required:!0}}};var l=function(){var e=this,r=e._self._c;return r("BaseReader",{attrs:{content:e.content},on:{"click-link":(t,n)=>e.$emit("click-link",t,n)}})},m=[],p=c(a,l,m,!1,null,null);const R=p.exports;export{R};
/*! third party licenses: js/vendor.LICENSE.txt */
import{P as o}from"./PlainTextReader.chunk.mjs";import{R as e}from"./RichTextReader.chunk.mjs";import{n as i}from"./_plugin-vue2_normalizer.chunk.mjs";import"./RichText.chunk.mjs";import"./NcUserBubble-DMjZyrGY.chunk.mjs";import"./vue.runtime.esm.chunk.mjs";import"./index.chunk2.mjs";import"./NcNoteCard-BLPU1den.chunk.mjs";import"./modulepreload-polyfill.chunk.mjs";import"./emoji-picker.chunk.mjs";import"./index.chunk.mjs";import"./index.chunk3.mjs";import"./index.chunk4.mjs";import"./index.chunk5.mjs";import"./MediaHandler.provider.chunk.mjs";import"./logger.chunk.mjs";const n={name:"Reader",components:{PlainTextReader:o,RichTextReader:e},props:{content:{type:String,required:!0},isRichEditor:{type:Boolean,default:!0}}};var p=function(){var t=this,r=t._self._c;return t.isRichEditor?r("RichTextReader",{attrs:{content:t.content}}):r("PlainTextReader",{attrs:{content:t.content}})},m=[],a=i(n,p,m,!1,null,null,null,null);const q=a.exports;export{q as default};
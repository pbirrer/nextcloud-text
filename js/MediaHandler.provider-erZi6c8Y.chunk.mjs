import{l as e}from"./logger-YW53u4Eu.chunk.mjs";const o=Symbol("tiptap:editor"),a=Symbol("editor:file"),i=Symbol("attachment:resolver"),l=Symbol("editor:is-mobile"),s=Symbol("editor:is-public"),r=Symbol("editor:is-rich-editor"),c=Symbol("editor:is-rich-woskapace"),m=Symbol("sync:service"),n=Symbol("editor:upload"),h=Symbol("hook:mention-search"),p=Symbol("hook:mention-insert"),S={inject:{$editor:{from:o,default:null}}},y={inject:{$syncService:{from:m,default:null}}},j={inject:{$isPublic:{from:s,default:!1}}},$={inject:{$isRichWorkspace:{from:c,default:!1}}},v={inject:{$isRichEditor:{from:r,default:!1}}},k={inject:{$isMobile:{from:l,default:!1}}},A={inject:{$file:{from:a,default:()=>({fileId:0,relativePath:null,document:null})}}},g={inject:{$attachmentResolver:{from:i,default:{resolve(t){return e.warn("No attachment resolver provided. Some attachment sources cannot be resolved."),[t]}}}}},R={inject:{$editorUpload:{from:n,default:!0}}},d=Symbol("state:uploading-state"),f=Symbol("editor:action:attachment-prompt"),u=Symbol("editor:action:upload-attachment"),E={inject:{$uploadingState:{from:d,default:{isUploadingAttachments:!1}}}},I={inject:{$callAttachmentPrompt:{from:f,default:()=>{}}}},P={inject:{$callChooseLocalAttachment:{from:u,default:()=>{}}}};export{f as A,n as E,a as F,h as H,r as I,d as S,p as a,i as b,o as c,S as d,k as e,v as f,$ as g,A as h,u as i,R as j,j as k,m as l,s as m,c as n,l as o,g as p,I as q,E as r,P as s,y as u};
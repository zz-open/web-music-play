import{z as n}from"./index-DWPvFz-A.js";function c(){const o=n();return{goHome:()=>{o.push("/")},goLocalPage:e=>{o.push({name:"local",query:{name:encodeURIComponent(e.name),url:encodeURIComponent(e.url)}})},goServerPage:e=>{o.push({name:"server",query:{name:encodeURIComponent(e.name),id:encodeURIComponent(e.id),type:encodeURIComponent(e.type),server:encodeURIComponent(e.server)}})}}}export{c as u};

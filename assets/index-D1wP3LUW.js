import{r as h,o as B,q as b,d as S,s as L,f as v,h as R,i as A,v as D,j as z,_ as q,k as x,u as f,x as M,m as E,y as U,A as H,S as j,a as O}from"./index-DWPvFz-A.js";import{a as I,e as W,f as G,d as N,h as V,i as F}from"./conf-B_uLuYoE.js";import{u as T}from"./useRouter-DB3S7Tcz.js";function J(){const o=h();return{musicBgRef:o,changeMusicBg:()=>{const t=document.querySelector(`#${I} .aplayer-pic`),n=new Image;n.src=W(t.style.backgroundImage),n.onload=function(){o.value.style.backgroundImage=t.style.backgroundImage}}}}function K(){B(()=>{const o=window.innerHeight*1;document.documentElement.style.setProperty("--vh",`${o}px`),window.addEventListener("resize",()=>{const s=window.innerHeight*1;document.documentElement.style.setProperty("--vh",`${s}px`)})})}async function Q(o){try{const{id:s,type:t,server:n}=o,r=`https://api.i-meto.com/meting/api?server=${n}&type=${t}&id=${s}&r=${Math.random()}`;return await(await fetch(r)).json()}catch(s){return console.log("获取远程服务器数据失败:",s),alert("获取网络歌单出错"),Promise.resolve([])}}function de(){const o=b();async function s(){let t=[];const n=o.query.url?decodeURIComponent(o.query.url):"";return n?t=await G(n):t=(await N()).songs,t}return{loadSongs:s}}function ue(){const o=b();return{loadSongs:async()=>{let t=o.query.id?decodeURIComponent(o.query.id):"",n=o.query.server?decodeURIComponent(o.query.server):"",r=o.query.type?decodeURIComponent(o.query.type):"";if(!t){const a=V();t=a.id,n=a.server,r=a.type}return t&&n&&r?await Q({id:t,server:n,type:r}):[]}}}function X(){K();const o=h(),{musicBgRef:s,changeMusicBg:t}=J();return{musicBgRef:s,heoMusicPageRef:o,handlePlayerLoadedData:()=>{t()}}}const Y=S({name:"CircleBtn",inheritAttrs:!1,__name:"index",props:{text:{default:"按钮"},style:{default:void 0},hide:{type:Boolean}},emits:["click"],setup(o){const s=o,t=L(()=>({"circle-btn":!0,"circle-btn-hide":s.hide,"circle-btn-hover":s.hide}));return(n,r)=>(v(),R("div",{class:D(t.value),style:z(s.style),onClick:r[0]||(r[0]=a=>n.$emit("click"))},A(s.text),7))}}),Z=q(Y,[["__scopeId","data-v-10ae0ce9"]]),ee=Z,te={class:"player-core-wrapper"},ne=["id"],oe=["id"],se=S({name:"PlayerCore",inheritAttrs:!1,__name:"index",props:{songs:{default:()=>[]}},emits:["playerReady"],setup(o){const s=o,{musicBgRef:t,heoMusicPageRef:n,handlePlayerLoadedData:r}=X(),{goHome:a}=T();return(c,i)=>(v(),R("div",te,[x("div",{id:f(F),ref_key:"musicBgRef",ref:t},null,8,ne),M(f(ee),{text:"回到首页",hide:!0,onClick:f(a)},null,8,["onClick"]),x("div",{id:f(I),ref_key:"heoMusicPageRef",ref:n,class:"localMusic"},null,8,oe),(v(),E(j,null,{default:U(()=>[M(f(H),{songs:s.songs,onAplayerLoadeddata:f(r),onAplayerReady:i[0]||(i[0]=p=>c.$emit("playerReady"))},null,8,["songs","onAplayerLoadeddata"])]),_:1}))]))}}),ae=q(se,[["__scopeId","data-v-cfaf4859"]]),fe=ae,$="abcdefghijklmnopqrstuvwxyz",k=26,re=S({__name:"index",setup(o){let s=600,t=600,n=null,r=0;const a={},c={},i={},p={},y=h(),d=h();function P(){y.value&&d.value&&(_(),n=d.value.getContext("2d"),n.font="14px SourceHanSansCN-Regular")}function w(){if(n){n.clearRect(0,0,s,t);for(let e=0;e<s;e+=k){n.beginPath();const l=n.createLinearGradient(0,0,0,t),C=.2*Math.random(),m=.8*Math.random()+.2,g=.02*Math.random();c[e]=c[e]||-C,i[e]=i[e]||0,a[e]=a[e]||-m,l.addColorStop(0,"#000000"),l.addColorStop(a[e]<0?0:a[e],"#000000"),l.addColorStop(c[e]<0?0:c[e],"#0ee30e"),l.addColorStop(i[e],"#000000"),l.addColorStop(1,"#000000"),n.fillStyle=l;for(let u=0;u<t;u+=k)p[`${e}-${u}`]=p[`${e}-${u}`]||$[Math.floor(Math.random()*$.length)],n.fillText(p[`${e}-${u}`],e,u);c[e]+=g,i[e]+=g,a[e]+=g,a[e]>1&&(a[e]=-m),c[e]>1&&(a[e]===-m?c[e]=-C:c[e]=1),i[e]>1&&(c[e]===-C&&a[e]===-m?i[e]=g:i[e]=1)}r=window.requestAnimationFrame(w)}}function _(){if(y.value&&d.value){const{offsetWidth:e,offsetHeight:l}=y.value;s=e,t=l,d.value.width=s,d.value.height=t}}return B(()=>{P(),w(),window.addEventListener("resize",_)}),O(()=>{r&&cancelAnimationFrame(r),window.removeEventListener("resize",_)}),(e,l)=>(v(),R("div",{ref_key:"boxRef",ref:y,style:{boxSizing:"border-box",width:"100%",height:"100%",display:"flex",backgroundColor:"#000"}},[x("canvas",{ref_key:"canvasRef",ref:d},null,512)],512))}}),pe=re;export{pe as C,fe as P,ue as a,de as u};

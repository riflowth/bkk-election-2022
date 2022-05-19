var J=Object.defineProperty,X=Object.defineProperties;var Y=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var M=(s,n,r)=>n in s?J(s,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[n]=r,m=(s,n)=>{for(var r in n||(n={}))Z.call(n,r)&&M(s,r,n[r]);if(F)for(var r of F(n))q.call(n,r)&&M(s,r,n[r]);return s},b=(s,n)=>X(s,Y(n));import{L as Q,O as $,T as tt,D as et,A as ot,V as nt,W as R,a as S,M as it,S as P,b as rt,c as at}from"./MapHelper.ef4e18d7.js";import{F as st,p as lt,h as H,m as D,j as _,a as ct,_ as dt,y as I,b as pt}from"./index.b62750ab.js";import{D as ht}from"./DistrictTooltip.f54834b7.js";const ut=200;Q.registerPlugin($);const bt=({onDistrictClick:s})=>{const n=st(lt),r=H(null),h=H(null),[A,O]=D(),[T,U]=D(),[E,G]=D(!1),L=H(0),[u,x]=D({show:!1,district:void 0,left:"unset",top:"unset",bottom:"unset",pointUp:!0,anchorRight:!1});if(!n)return _(ct,{});const{electionData:j,candidateMap:N}=n,[W,V]=D([]),k=new tt({fontFamily:"Anuphan",fontSize:20,fontStyle:"normal",fontWeight:"600",fill:"#ffffff",stroke:"#000000",strokeThickness:6,lineJoin:"round",textBaseline:"bottom"}),z=(e,t)=>{e.on("pointerdown",l=>{L.current=Date.now()}),e.on("pointerup",l=>{Date.now()-L.current<ut&&t()})},B=(e,t)=>{if(W.length>0){K(t);const l=e.loader.resources.stripe.animation,i=100,g=20;W.forEach(C=>{const{coordinate:c,district:a,highestScoreCandidate:v}=C,w=c.col*i+c.col*g,d=c.row*i+c.row*g,o=new P;if(v&&o.beginFill(+v.color.replace("#","0x"),1,!0),o.drawRoundedRect(w,d,i,i,2),o.endFill(),o.interactive=!0,o.buttonMode=!0,z(o,()=>s==null?void 0:s(a)),o.on("pointerover",p=>{o.tint=6710886,x(y=>b(m({},y),{district:a,show:!0}))}),o.on("pointerout",p=>{o.tint=16777215,x(y=>b(m({},y),{show:!1}))}),typeof a.voting.progress!="undefined"&&a.voting.progress<100){const p=o.getBounds();o.beginTextureFill({alpha:.2,texture:l==null?void 0:l.texture,matrix:new rt(p.width/30,0,0,p.height/30,p.x,p.y)}),o.drawRect(w,d,i,i),o.endFill()}t.addChild(o);const f=new at(a.name,k);f.x=w+i*.5,f.y=d+i*.5,f.anchor.set(.5),t.addChild(f)})}},K=e=>{const t=new P;t.lineStyle(50,16777215,.3),t.moveTo(530,0),t.lineTo(530,170),t.lineTo(410,170),t.lineTo(410,530),t.lineTo(530,530),t.lineTo(530,770),t.lineTo(770,770),t.lineTo(770,650),t.lineTo(1010,650),t.lineTo(1010,740),e.addChild(t)};return dt(()=>{if(!n)return;const{districts:e}=j;let t=e.reduce((i,g)=>i.voting.eligiblePopulation>g.voting.eligiblePopulation?i:g);t&&t.voting.eligiblePopulation;let l=[];e.forEach(i=>{l.push(new et(i,N))}),V(l)},[n]),I(()=>{var t,l,i;if(!h.current)return;const e=new ot({width:((t=h.current.parentElement)==null?void 0:t.clientWidth)||window.innerWidth,height:((l=h.current.parentElement)==null?void 0:l.clientHeight)||window.innerWidth,backgroundColor:0,antialias:!0,resolution:2,autoDensity:!0});return e.loader.add("stripe","/map/images/strip-black.gif"),e.loader.load((g,C)=>{var v,w;const c=C.stripe.animation;c&&(c.x=-c.width,c.y=-c.height,e.stage.addChild(c));const a=new nt({screenWidth:(v=h.current)==null?void 0:v.clientWidth,screenHeight:(w=h.current)==null?void 0:w.clientHeight,worldWidth:R,worldHeight:S,passiveWheel:!1,stopPropagation:!0,interaction:e.renderer.plugins.interaction});e.stage.addChild(a),a.on("pointermove",d=>{if(r.current){const{clientWidth:o,clientHeight:f}=r.current,p=!(d.data.global.y>f*.33);x(y=>b(m({},y),{left:d.data.global.x-15,top:p?d.data.global.y+20:"unset",bottom:p?"unset":f-d.data.global.y+10,pointUp:p,anchorRight:d.data.global.x>o*.66}))}}),a.on("pointerdown",d=>{d.target.cursor!=="pointer"&&x(o=>b(m({},o),{show:!1}))}),a.drag().pinch().wheel(),a.clampZoom({minWidth:300,minHeight:300,maxWidth:2e3,maxHeight:2e3}),a.fit(),a.moveCenter(R/2,S/2),O(e),U(a),G(!0)}),(i=h.current)==null||i.appendChild(e.view),e.start(),()=>{e.destroy(!0)}},[]),I(()=>{A&&T&&E&&(T.removeChildren(),B(A,T),x(e=>b(m({},e),{show:!1})),T.fit(),T.moveCenter(R/2,S/2))},[E,W]),pt("div",{className:"relative h-full",class:"overflow-hidden",ref:r,children:[_("div",{className:"w-full h-full",ref:h}),_(ht,{show:u.show,district:u.district,style:{left:u.left,top:u.top,bottom:u.bottom},pointUp:u.pointUp,topCandidateDisplay:it,anchorRight:u.anchorRight})]})};export{bt as default};

import{S as oe,i as ce,s as fe,N as xe,e as b,t as O,k as D,O as Z,c as w,a as v,h as F,d as u,m as $,P as ee,b as n,g as H,I as o,j as se,Q as Ue,M as le,R as ye,z as Be,l as _e,T as ge,C as me,H as Ke,F as qe,w as W,x as Y,y as J,q as B,o as N,B as Q,J as ze,K as Ge,L as We,n as Re,p as Ne,v as Ye,U as Je,V as ue,W as Ie,A as Qe,f as Xe}from"../chunks/vendor-f5e46ae8.js";import{M as Ze,P as et}from"../chunks/partners-logo-f2bc6e0f.js";var Ve=globalThis&&globalThis.__awaiter||function(i,e,t,s){function l(a){return a instanceof t?a:new t(function(r){r(a)})}return new(t||(t=Promise))(function(a,r){function c(h){try{_(s.next(h))}catch(g){r(g)}}function f(h){try{_(s.throw(h))}catch(g){r(g)}}function _(h){h.done?a(h.value):l(h.value).then(c,f)}_((s=s.apply(i,e||[])).next())})};function tt(i){return i?`?${Object.entries(i).map(([e,t])=>`${e}=${t}`).join("&")}`:""}const Oe=({apiRoot:i,electionTagId:e,mediaTargetSize:t})=>({limit:s=6,tag:l=""}={})=>Ve(void 0,void 0,void 0,function*(){const a=(f,_)=>Ve(void 0,void 0,void 0,function*(){return yield(yield fetch(i+f+tt(_))).json()}),r=l?(yield a("/tags",{search:l,_fields:"id",per_page:1}))[0].id:e;return(yield a("/posts",{tags:r,_embed:"wp:featuredmedia",_fields:"id,title,link,date,tags,_links.wp:featuredmedia,_embedded.wp:featuredmedia",per_page:s})).filter(({tags:f})=>!l||(f==null?void 0:f.includes(e))).map(({id:f,title:_,link:h,date:g,_embedded:d})=>{const[k]=d==null?void 0:d["wp:featuredmedia"];return{id:f,title:_.rendered,link:h,date:new Date(g).toLocaleDateString("th-TH",{dateStyle:"long"}),image:k.media_details.sizes[t].source_url}})}),lt={apiRoot:"https://thestandard.co/wp-json/wp/v2",electionTagId:47793,mediaTargetSize:"newsthumb-small"},st={apiRoot:"https://wevis.info/wp-json/wp/v2",electionTagId:17,mediaTargetSize:"small-thumb"},at=Oe(lt),rt=Oe(st);function De(i,e,t){const s=i.slice();return s[9]=e[t],s}function it(i,e,t){const s=i.slice();return s[5]=e[t],s}function nt(i){let e,t,s=i[12].message+"",l;return{c(){e=b("p"),t=O("\u0E1E\u0E1A\u0E02\u0E49\u0E2D\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14: "),l=O(s)},l(a){e=w(a,"P",{});var r=v(e);t=F(r,"\u0E1E\u0E1A\u0E02\u0E49\u0E2D\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14: "),l=F(r,s),r.forEach(u)},m(a,r){H(a,e,r),o(e,t),o(e,l)},p(a,r){r&16&&s!==(s=a[12].message+"")&&se(l,s)},d(a){a&&u(e)}}}function ot(i){let e,t=i[8],s=[];for(let l=0;l<t.length;l+=1)s[l]=$e(De(i,t,l));return{c(){for(let l=0;l<s.length;l+=1)s[l].c();e=_e()},l(l){for(let a=0;a<s.length;a+=1)s[a].l(l);e=_e()},m(l,a){for(let r=0;r<s.length;r+=1)s[r].m(l,a);H(l,e,a)},p(l,a){if(a&16){t=l[8];let r;for(r=0;r<t.length;r+=1){const c=De(l,t,r);s[r]?s[r].p(c,a):(s[r]=$e(c),s[r].c(),s[r].m(e.parentNode,e))}for(;r<s.length;r+=1)s[r].d(1);s.length=t.length}},d(l){ge(s,l),l&&u(e)}}}function $e(i){let e,t,s,l=[i[9]],a={};for(let r=0;r<l.length;r+=1)a=me(a,l[r]);return{c(){e=b("div"),t=b("ui-post-card"),s=D(),this.h()},l(r){e=w(r,"DIV",{class:!0});var c=v(e);t=w(c,"UI-POST-CARD",{}),v(t).forEach(u),s=$(c),c.forEach(u),this.h()},h(){ye(t,a),n(e,"class","flex-shrink-0 w-64 md:w-auto")},m(r,c){H(r,e,c),o(e,t),o(e,s)},p(r,c){ye(t,a=Be(l,[c&16&&r[9]]))},d(r){r&&u(e)}}}function ct(i){let e,t=new Array(ht).fill(null),s=[];for(let l=0;l<t.length;l+=1)s[l]=ft(it(i,t,l));return{c(){for(let l=0;l<s.length;l+=1)s[l].c();e=_e()},l(l){for(let a=0;a<s.length;a+=1)s[a].l(l);e=_e()},m(l,a){for(let r=0;r<s.length;r+=1)s[r].m(l,a);H(l,e,a)},p:le,d(l){ge(s,l),l&&u(e)}}}function ft(i){let e,t,s;return{c(){e=b("div"),t=b("ui-post-card"),s=D(),this.h()},l(l){e=w(l,"DIV",{class:!0});var a=v(e);t=w(a,"UI-POST-CARD",{loading:!0}),v(t).forEach(u),s=$(a),a.forEach(u),this.h()},h(){Ke(t,"loading","true"),n(e,"class","flex-shrink-0 w-64 md:w-auto")},m(l,a){H(l,e,a),o(e,t),o(e,s)},d(l){l&&u(e)}}}function ut(i){let e,t,s,l,a,r,c,f,_,h,g,d,k,I,E,M,T,S,y,m,V,x={ctx:i,current:null,token:null,hasCatch:!0,pending:ct,then:ot,catch:nt,value:8,error:12};return xe(V=i[4](),x),{c(){e=b("div"),t=b("div"),s=b("div"),l=b("h1"),a=O(i[0]),r=D(),c=b("h2"),f=O(i[1]),_=D(),h=b("div"),g=b("a"),d=b("span"),k=O(i[2]),I=D(),E=Z("svg"),M=Z("path"),T=Z("path"),S=Z("path"),y=D(),m=b("div"),x.block.c(),this.h()},l(j){e=w(j,"DIV",{class:!0});var P=v(e);t=w(P,"DIV",{class:!0});var R=v(t);s=w(R,"DIV",{class:!0});var K=v(s);l=w(K,"H1",{class:!0});var U=v(l);a=F(U,i[0]),U.forEach(u),r=$(K),c=w(K,"H2",{class:!0});var q=v(c);f=F(q,i[1]),q.forEach(u),K.forEach(u),_=$(R),h=w(R,"DIV",{});var ie=v(h);g=w(ie,"A",{href:!0,target:!0,class:!0});var z=v(g);d=w(z,"SPAN",{});var ae=v(d);k=F(ae,i[2]),ae.forEach(u),I=$(z),E=ee(z,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0});var G=v(E);M=ee(G,"path",{d:!0,stroke:!0,"stroke-width":!0}),v(M).forEach(u),T=ee(G,"path",{d:!0,stroke:!0,"stroke-width":!0}),v(T).forEach(u),S=ee(G,"path",{d:!0,stroke:!0,"stroke-width":!0}),v(S).forEach(u),G.forEach(u),z.forEach(u),ie.forEach(u),R.forEach(u),y=$(P),m=w(P,"DIV",{class:!0});var A=v(m);x.block.l(A),A.forEach(u),P.forEach(u),this.h()},h(){n(l,"class","typo-h4"),n(c,"class","typo-u3"),n(s,"class","flex-1"),n(M,"d","M6 10L14 2"),n(M,"stroke","black"),n(M,"stroke-width","2"),n(T,"d","M7 1H15V9"),n(T,"stroke","black"),n(T,"stroke-width","2"),n(S,"d","M11 9.85714V15H1V5H6.14286"),n(S,"stroke","black"),n(S,"stroke-width","2"),n(E,"width","16"),n(E,"height","16"),n(E,"viewBox","0 0 16 16"),n(E,"fill","none"),n(E,"xmlns","http://www.w3.org/2000/svg"),n(g,"href",i[3]),n(g,"target","_blank"),n(g,"class","flex flex-row space-x-2 items-center typo-b5 hover:underline"),n(t,"class","flex flex-col md:flex-row space-y-4 md:space-y-0"),n(m,"class","flex md:grid md:grid-cols-3 gap-6 md:gap-12 overflow-y-hidden overflow-x-auto -mx-5 px-5 md:mx-0 md:px-0"),n(e,"class","py-20 space-y-8")},m(j,P){H(j,e,P),o(e,t),o(t,s),o(s,l),o(l,a),o(s,r),o(s,c),o(c,f),o(t,_),o(t,h),o(h,g),o(g,d),o(d,k),o(g,I),o(g,E),o(E,M),o(E,T),o(E,S),o(e,y),o(e,m),x.block.m(m,x.anchor=null),x.mount=()=>m,x.anchor=null},p(j,[P]){i=j,P&1&&se(a,i[0]),P&2&&se(f,i[1]),P&4&&se(k,i[2]),P&8&&n(g,"href",i[3]),x.ctx=i,P&16&&V!==(V=i[4]())&&xe(V,x)||Ue(x,i,P)},i:le,o:le,d(j){j&&u(e),x.block.d(),x.token=null,x=null}}}const ht=6;function dt(i,e,t){let{title:s}=e,{subtitle:l}=e,{viewAllText:a}=e,{viewAllLink:r}=e,{fetchPosts:c}=e;return i.$$set=f=>{"title"in f&&t(0,s=f.title),"subtitle"in f&&t(1,l=f.subtitle),"viewAllText"in f&&t(2,a=f.viewAllText),"viewAllLink"in f&&t(3,r=f.viewAllLink),"fetchPosts"in f&&t(4,c=f.fetchPosts)},[s,l,a,r,c]}class Te extends oe{constructor(e){super();ce(this,e,dt,ut,fe,{title:0,subtitle:1,viewAllText:2,viewAllLink:3,fetchPosts:4})}}function Pe(i,e,t){const s=i.slice();return s[3]=e[t],s}function Ae(i){let e,t=i[3]+"",s,l;return{c(){e=b("div"),s=O(t),l=D(),this.h()},l(a){e=w(a,"DIV",{class:!0});var r=v(e);s=F(r,t),l=$(r),r.forEach(u),this.h()},h(){n(e,"class","box flex-1 text-white h-10 md:h-16 flex justify-center items-center typo-h3 svelte-1aaatrq")},m(a,r){H(a,e,r),o(e,s),o(e,l)},p(a,r){r&2&&t!==(t=a[3]+"")&&se(s,t)},d(a){a&&u(e)}}}function vt(i){let e,t,s,l,a,r=i[1],c=[];for(let f=0;f<r.length;f+=1)c[f]=Ae(Pe(i,r,f));return{c(){e=b("div"),t=b("div");for(let f=0;f<c.length;f+=1)c[f].c();s=D(),l=b("p"),a=O(i[0]),this.h()},l(f){e=w(f,"DIV",{class:!0});var _=v(e);t=w(_,"DIV",{class:!0});var h=v(t);for(let d=0;d<c.length;d+=1)c[d].l(h);h.forEach(u),s=$(_),l=w(_,"P",{class:!0});var g=v(l);a=F(g,i[0]),g.forEach(u),_.forEach(u),this.h()},h(){n(t,"class","flex flex-row space-x-1"),n(l,"class","typo-u5 text-center"),n(e,"class","flex-1 flex flex-col space-y-2")},m(f,_){H(f,e,_),o(e,t);for(let h=0;h<c.length;h+=1)c[h].m(t,null);o(e,s),o(e,l),o(l,a)},p(f,[_]){if(_&2){r=f[1];let h;for(h=0;h<r.length;h+=1){const g=Pe(f,r,h);c[h]?c[h].p(g,_):(c[h]=Ae(g),c[h].c(),c[h].m(t,null))}for(;h<c.length;h+=1)c[h].d(1);c.length=r.length}_&1&&se(a,f[0])},i:le,o:le,d(f){f&&u(e),ge(c,f)}}}function _t(i,e,t){let s,{value:l}=e,{label:a}=e;return i.$$set=r=>{"value"in r&&t(2,l=r.value),"label"in r&&t(0,a=r.label)},i.$$.update=()=>{i.$$.dirty&4&&t(1,s=`${l<10?0:""}${l}`.split(""))},[a,s,l]}class de extends oe{constructor(e){super();ce(this,e,_t,vt,fe,{value:2,label:0})}}function Me(i){let e,t,s,l,a,r,c,f,_,h,g,d,k,I,E,M,T,S;return t=new de({props:{label:"\u0E27\u0E31\u0E19",value:i[0].day}}),c=new de({props:{label:"\u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07",value:i[0].hour}}),d=new de({props:{label:"\u0E19\u0E32\u0E17\u0E35",value:i[0].minute}}),T=new de({props:{label:"\u0E27\u0E34\u0E19\u0E32\u0E17\u0E35",value:i[0].second}}),{c(){e=b("div"),W(t.$$.fragment),s=D(),l=b("span"),a=O(":"),r=D(),W(c.$$.fragment),f=D(),_=b("span"),h=O(":"),g=D(),W(d.$$.fragment),k=D(),I=b("span"),E=O(":"),M=D(),W(T.$$.fragment),this.h()},l(y){e=w(y,"DIV",{class:!0});var m=v(e);Y(t.$$.fragment,m),s=$(m),l=w(m,"SPAN",{class:!0});var V=v(l);a=F(V,":"),V.forEach(u),r=$(m),Y(c.$$.fragment,m),f=$(m),_=w(m,"SPAN",{class:!0});var x=v(_);h=F(x,":"),x.forEach(u),g=$(m),Y(d.$$.fragment,m),k=$(m),I=w(m,"SPAN",{class:!0});var j=v(I);E=F(j,":"),j.forEach(u),M=$(m),Y(T.$$.fragment,m),m.forEach(u),this.h()},h(){n(l,"class","svelte-16mf04h"),n(_,"class","svelte-16mf04h"),n(I,"class","svelte-16mf04h"),n(e,"class","flex flex-row space-x-1 typo-h5 items-center")},m(y,m){H(y,e,m),J(t,e,null),o(e,s),o(e,l),o(l,a),o(e,r),J(c,e,null),o(e,f),o(e,_),o(_,h),o(e,g),J(d,e,null),o(e,k),o(e,I),o(I,E),o(e,M),J(T,e,null),S=!0},p(y,m){const V={};m&1&&(V.value=y[0].day),t.$set(V);const x={};m&1&&(x.value=y[0].hour),c.$set(x);const j={};m&1&&(j.value=y[0].minute),d.$set(j);const P={};m&1&&(P.value=y[0].second),T.$set(P)},i(y){S||(B(t.$$.fragment,y),B(c.$$.fragment,y),B(d.$$.fragment,y),B(T.$$.fragment,y),S=!0)},o(y){N(t.$$.fragment,y),N(c.$$.fragment,y),N(d.$$.fragment,y),N(T.$$.fragment,y),S=!1},d(y){y&&u(e),Q(t),Q(c),Q(d),Q(T)}}}function mt(i){let e,t,s,l,a,r,c,f,_;const h=i[3].default,g=qe(h,i,i[2],null);let d=i[0]&&Me(i);return{c(){e=b("div"),t=b("div"),s=b("div"),l=D(),a=b("p"),g&&g.c(),r=D(),c=b("div"),f=D(),d&&d.c(),this.h()},l(k){e=w(k,"DIV",{class:!0});var I=v(e);t=w(I,"DIV",{class:!0});var E=v(t);s=w(E,"DIV",{class:!0}),v(s).forEach(u),l=$(E),a=w(E,"P",{class:!0});var M=v(a);g&&g.l(M),M.forEach(u),r=$(E),c=w(E,"DIV",{class:!0}),v(c).forEach(u),E.forEach(u),f=$(I),d&&d.l(I),I.forEach(u),this.h()},h(){n(s,"class","line svelte-16mf04h"),n(a,"class","typo-u5 text-center"),n(c,"class","line svelte-16mf04h"),n(t,"class","flex flex-row space-x-3"),n(e,"class","flex flex-col space-y-3")},m(k,I){H(k,e,I),o(e,t),o(t,s),o(t,l),o(t,a),g&&g.m(a,null),o(t,r),o(t,c),o(e,f),d&&d.m(e,null),_=!0},p(k,[I]){g&&g.p&&(!_||I&4)&&ze(g,h,k,k[2],_?We(h,k[2],I,null):Ge(k[2]),null),k[0]?d?(d.p(k,I),I&1&&B(d,1)):(d=Me(k),d.c(),B(d,1),d.m(e,null)):d&&(Re(),N(d,1,1,()=>{d=null}),Ne())},i(k){_||(B(g,k),B(d),_=!0)},o(k){N(g,k),N(d),_=!1},d(k){k&&u(e),g&&g.d(k),d&&d.d()}}}const re=1e3,ne=60,ve=60,Se=24,gt=1e3;function pt(i,e,t){let{$$slots:s={},$$scope:l}=e,{until:a}=e,r,c;const f=_=>{let h=_.getTime()-new Date().getTime();const g=h/re/ne/ve/Se,d=Math.floor(g);h=(g-d)*re*ne*ve*Se;const k=h/re/ne/ve,I=Math.floor(k);h=(k-I)*re*ne*ve;const E=h/re/ne,M=Math.floor(E);h=(E-M)*re*ne;const T=Math.floor(h/re);return{day:d,hour:I,minute:M,second:T}};return Ye(()=>{t(0,c=f(a)),r=setInterval(()=>{t(0,c=f(a))},gt)}),Je(()=>clearInterval(r)),i.$$set=_=>{"until"in _&&t(1,a=_.until),"$$scope"in _&&t(2,l=_.$$scope)},[c,a,l,s]}class bt extends oe{constructor(e){super();ce(this,e,pt,mt,fe,{until:1})}}function wt(i){let e,t,s;return{c(){e=Z("svg"),t=Z("path"),s=Z("path"),this.h()},l(l){e=ee(l,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,stroke:!0,"stroke-width":!0});var a=v(e);t=ee(a,"path",{d:!0}),v(t).forEach(u),s=ee(a,"path",{d:!0}),v(s).forEach(u),a.forEach(u),this.h()},h(){n(t,"d","M8 1.5L15.5789 9.5L8 17.5"),n(s,"d","M0 9.5L16 9.5"),n(e,"width","17"),n(e,"height","19"),n(e,"viewBox","0 0 17 19"),n(e,"fill","none"),n(e,"stroke","white"),n(e,"stroke-width","2")},m(l,a){H(l,e,a),o(e,t),o(e,s)},d(l){l&&u(e)}}}function kt(i){let e,t,s,l;return{c(){e=Z("svg"),t=Z("path"),s=Z("path"),l=Z("path"),this.h()},l(a){e=ee(a,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,stroke:!0,"stroke-width":!0});var r=v(e);t=ee(r,"path",{d:!0}),v(t).forEach(u),s=ee(r,"path",{d:!0}),v(s).forEach(u),l=ee(r,"path",{d:!0}),v(l).forEach(u),r.forEach(u),this.h()},h(){n(t,"d","M6.00037 10.5L14.0004 2.5"),n(s,"d","M7.00037 1.5H15.0004V9.5"),n(l,"d","M11.0004 10.3571V15.5H1.00037V5.5H6.14322"),n(e,"width","16"),n(e,"height","17"),n(e,"viewBox","0 0 16 17"),n(e,"fill","none"),n(e,"stroke","white"),n(e,"stroke-width","2")},m(a,r){H(a,e,r),o(e,t),o(e,s),o(e,l)},d(a){a&&u(e)}}}function Le(i){let e,t;return{c(){e=b("div"),t=O("Coming soon"),this.h()},l(s){e=w(s,"DIV",{class:!0});var l=v(e);t=F(l,"Coming soon"),l.forEach(u),this.h()},h(){n(e,"class","absolute inset-0 flex justify-center items-center typo-b2 bg-black bg-opacity-60")},m(s,l){H(s,e,l),o(e,t)},d(s){s&&u(e)}}}function Et(i){let e,t,s,l,a,r,c,f,_,h,g,d,k,I,E,M;function T(V,x){return V[3]?kt:wt}let S=T(i),y=S(i),m=!i[2]&&Le();return{c(){e=b("div"),t=b("a"),s=b("div"),l=b("img"),r=D(),c=b("div"),f=b("div"),_=b("p"),h=O(i[1]),g=D(),d=b("p"),k=O(i[0]),I=D(),y.c(),M=D(),m&&m.c(),this.h()},l(V){e=w(V,"DIV",{class:!0});var x=v(e);t=w(x,"A",{href:!0,target:!0,class:!0});var j=v(t);s=w(j,"DIV",{class:!0});var P=v(s);l=w(P,"IMG",{src:!0,alt:!0,class:!0}),P.forEach(u),r=$(j),c=w(j,"DIV",{class:!0});var R=v(c);f=w(R,"DIV",{class:!0});var K=v(f);_=w(K,"P",{class:!0});var U=v(_);h=F(U,i[1]),U.forEach(u),g=$(K),d=w(K,"P",{class:!0});var q=v(d);k=F(q,i[0]),q.forEach(u),K.forEach(u),I=$(R),y.l(R),R.forEach(u),j.forEach(u),M=$(x),m&&m.l(x),x.forEach(u),this.h()},h(){ue(l.src,a=i[4])||n(l,"src",a),n(l,"alt",i[1]),n(l,"class","object-cover w-full h-full"),n(s,"class","absolute inset-0"),n(_,"class","typo-u3"),n(d,"class","typo-h6"),n(f,"class","flex-1"),n(c,"class","content absolute inset-0 flex flex-row px-8 py-6 bg-black bg-opacity-20"),n(t,"href",i[2]),n(t,"target",E=i[3]?"_blank":""),n(t,"class","absolute inset-0 border border-black hover:border-white"),n(e,"class","relative bg-gray h-44 md:h-52")},m(V,x){H(V,e,x),o(e,t),o(t,s),o(s,l),o(t,r),o(t,c),o(c,f),o(f,_),o(_,h),o(f,g),o(f,d),o(d,k),o(c,I),y.m(c,null),o(e,M),m&&m.m(e,null)},p(V,[x]){x&16&&!ue(l.src,a=V[4])&&n(l,"src",a),x&2&&n(l,"alt",V[1]),x&2&&se(h,V[1]),x&1&&se(k,V[0]),S!==(S=T(V))&&(y.d(1),y=S(V),y&&(y.c(),y.m(c,null))),x&4&&n(t,"href",V[2]),x&8&&E!==(E=V[3]?"_blank":"")&&n(t,"target",E),V[2]?m&&(m.d(1),m=null):m||(m=Le(),m.c(),m.m(e,null))},i:le,o:le,d(V){V&&u(e),y.d(),m&&m.d()}}}function xt(i,e,t){let{th:s}=e,{en:l}=e,{href:a=null}=e,{external:r=!1}=e,{image:c}=e;return i.$$set=f=>{"th"in f&&t(0,s=f.th),"en"in f&&t(1,l=f.en),"href"in f&&t(2,a=f.href),"external"in f&&t(3,r=f.external),"image"in f&&t(4,c=f.image)},[s,l,a,r,c]}class yt extends oe{constructor(e){super();ce(this,e,xt,Et,fe,{th:0,en:1,href:2,external:3,image:4})}}function It(i){let e,t,s,l;return{c(){e=b("div"),t=b("iframe"),this.h()},l(a){e=w(a,"DIV",{class:!0});var r=v(e);t=w(r,"IFRAME",{width:!0,height:!0,src:!0,title:!0,frameborder:!0,allow:!0,class:!0}),v(t).forEach(u),r.forEach(u),this.h()},h(){n(t,"width","560"),n(t,"height","315"),ue(t.src,s="https://www.youtube.com/embed/"+i[0])||n(t,"src",s),n(t,"title","YouTube video player"),n(t,"frameborder","0"),n(t,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"),t.allowFullscreen=!0,n(t,"class","svelte-1m2ek54"),n(e,"class",l="video-container "+(i[1].class||"")+" svelte-1m2ek54")},m(a,r){H(a,e,r),o(e,t)},p(a,[r]){r&1&&!ue(t.src,s="https://www.youtube.com/embed/"+a[0])&&n(t,"src",s),r&2&&l!==(l="video-container "+(a[1].class||"")+" svelte-1m2ek54")&&n(e,"class",l)},i:le,o:le,d(a){a&&u(e)}}}function Vt(i,e,t){let{videoId:s}=e;return i.$$set=l=>{t(1,e=me(me({},e),Ie(l))),"videoId"in l&&t(0,s=l.videoId)},e=Ie(e),[s,e]}class je extends oe{constructor(e){super();ce(this,e,Vt,It,fe,{videoId:0})}}function Ce(i,e,t){const s=i.slice();return s[1]=e[t],s}function Dt(i){let e,t,s;return{c(){e=O("\u0E19\u0E31\u0E1A\u0E16\u0E2D\u0E22\u0E2B\u0E25\u0E31\u0E07\u0E40\u0E1B\u0E34\u0E14\u0E2B\u0E35\u0E1A\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E15\u0E31\u0E49\u0E07"),t=b("br"),s=O("\u0E27\u0E31\u0E19\u0E2D\u0E32\u0E17\u0E34\u0E15\u0E22\u0E4C\u0E17\u0E35\u0E48 22 \u0E1E\u0E24\u0E29\u0E20\u0E32\u0E04\u0E21 \u0E1E.\u0E28. 2565 \u0E40\u0E27\u0E25\u0E32 08.00 - 17.00 \u0E19.")},l(l){e=F(l,"\u0E19\u0E31\u0E1A\u0E16\u0E2D\u0E22\u0E2B\u0E25\u0E31\u0E07\u0E40\u0E1B\u0E34\u0E14\u0E2B\u0E35\u0E1A\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E15\u0E31\u0E49\u0E07"),t=w(l,"BR",{}),s=F(l,"\u0E27\u0E31\u0E19\u0E2D\u0E32\u0E17\u0E34\u0E15\u0E22\u0E4C\u0E17\u0E35\u0E48 22 \u0E1E\u0E24\u0E29\u0E20\u0E32\u0E04\u0E21 \u0E1E.\u0E28. 2565 \u0E40\u0E27\u0E25\u0E32 08.00 - 17.00 \u0E19.")},m(l,a){H(l,e,a),H(l,t,a),H(l,s,a)},d(l){l&&u(e),l&&u(t),l&&u(s)}}}function He(i){let e,t;const s=[i[1]];let l={};for(let a=0;a<s.length;a+=1)l=me(l,s[a]);return e=new yt({props:l}),{c(){W(e.$$.fragment)},l(a){Y(e.$$.fragment,a)},m(a,r){J(e,a,r),t=!0},p(a,r){const c=r&1?Be(s,[Qe(a[1])]):{};e.$set(c)},i(a){t||(B(e.$$.fragment,a),t=!0)},o(a){N(e.$$.fragment,a),t=!1},d(a){Q(e,a)}}}function $t(i){let e,t,s,l,a,r,c,f,_,h,g,d,k,I,E,M,T,S,y,m,V,x,j,P,R,K,U,q,ie,z,ae;e=new Ze({}),c=new et({}),E=new bt({props:{until:new Date("2022/05/22 8:00 GMT+7"),$$slots:{default:[Dt]},$$scope:{ctx:i}}}),S=new je({props:{videoId:"KqaFyTtv3PU"}}),m=new je({props:{class:"md:hidden",videoId:"KqaFyTtv3PU"}});let G=i[0],A=[];for(let p=0;p<G.length;p+=1)A[p]=He(Ce(i,G,p));const Fe=p=>N(A[p],1,1,()=>{A[p]=null});return q=new Te({props:{title:"\u0E02\u0E48\u0E32\u0E27\u0E25\u0E48\u0E32\u0E2A\u0E38\u0E14\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E15\u0E31\u0E49\u0E07 \u0E01\u0E17\u0E21.",subtitle:"\u0E23\u0E27\u0E21\u0E02\u0E48\u0E32\u0E27\u0E2A\u0E32\u0E23\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E15\u0E31\u0E49\u0E07 \u0E01\u0E17\u0E21. \u0E08\u0E32\u0E01 THE STANDARD",fetchPosts:at,viewAllText:"\u0E14\u0E39\u0E02\u0E48\u0E32\u0E27\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 \u0E1A\u0E19 thestandard.co",viewAllLink:"https://thestandard.co/bkkelection2022/"}}),z=new Te({props:{title:"\u0E0A\u0E38\u0E14\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E15\u0E31\u0E49\u0E07 \u0E01\u0E17\u0E21.",subtitle:"\u0E23\u0E27\u0E21\u0E1A\u0E17\u0E04\u0E27\u0E32\u0E21\u0E40\u0E25\u0E48\u0E32\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E19\u0E48\u0E32\u0E2A\u0E19\u0E43\u0E08\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E15\u0E31\u0E49\u0E07 \u0E42\u0E14\u0E22 WeVis",fetchPosts:rt,viewAllText:"\u0E14\u0E39\u0E1A\u0E17\u0E04\u0E27\u0E32\u0E21\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 \u0E1A\u0E19 wevis.info",viewAllLink:"https://wevis.info/tag/\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E15\u0E31\u0E49\u0E07-\u0E01\u0E17\u0E21/"}}),{c(){W(e.$$.fragment),t=D(),s=b("div"),l=b("div"),a=b("div"),r=b("div"),W(c.$$.fragment),f=D(),_=b("img"),g=D(),d=b("p"),k=O("\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E15\u0E31\u0E49\u0E07\u0E1C\u0E39\u0E49\u0E27\u0E48\u0E32\u0E2F \u0E41\u0E25\u0E30\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E2A\u0E20\u0E32 \u0E01\u0E17\u0E21. \u0E44\u0E14\u0E49\u0E17\u0E35\u0E48\u0E19\u0E35\u0E48"),I=D(),W(E.$$.fragment),M=D(),T=b("div"),W(S.$$.fragment),y=D(),W(m.$$.fragment),V=D(),x=b("div"),j=D(),P=b("div"),R=b("div");for(let p=0;p<A.length;p+=1)A[p].c();K=D(),U=b("div"),W(q.$$.fragment),ie=D(),W(z.$$.fragment),this.h()},l(p){Y(e.$$.fragment,p),t=$(p),s=w(p,"DIV",{class:!0});var L=v(s);l=w(L,"DIV",{class:!0,style:!0});var te=v(l);a=w(te,"DIV",{class:!0});var C=v(a);r=w(C,"DIV",{class:!0});var X=v(r);Y(c.$$.fragment,X),f=$(X),_=w(X,"IMG",{src:!0,alt:!0}),g=$(X),d=w(X,"P",{class:!0});var be=v(d);k=F(be,"\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E15\u0E31\u0E49\u0E07\u0E1C\u0E39\u0E49\u0E27\u0E48\u0E32\u0E2F \u0E41\u0E25\u0E30\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E2A\u0E20\u0E32 \u0E01\u0E17\u0E21. \u0E44\u0E14\u0E49\u0E17\u0E35\u0E48\u0E19\u0E35\u0E48"),be.forEach(u),I=$(X),Y(E.$$.fragment,X),X.forEach(u),M=$(C),T=w(C,"DIV",{class:!0});var we=v(T);Y(S.$$.fragment,we),we.forEach(u),y=$(C),Y(m.$$.fragment,C),C.forEach(u),te.forEach(u),V=$(L),x=w(L,"DIV",{class:!0}),v(x).forEach(u),j=$(L),P=w(L,"DIV",{class:!0});var ke=v(P);R=w(ke,"DIV",{class:!0});var Ee=v(R);for(let pe=0;pe<A.length;pe+=1)A[pe].l(Ee);Ee.forEach(u),ke.forEach(u),L.forEach(u),K=$(p),U=w(p,"DIV",{class:!0});var he=v(U);Y(q.$$.fragment,he),ie=$(he),Y(z.$$.fragment,he),he.forEach(u),this.h()},h(){ue(_.src,h="/static/images/bkkelection-white-big.png")||n(_,"src",h),n(_,"alt","BKK ELECTION 2022"),n(d,"class","typo-b4 text-center"),n(r,"class","flex-1 flex flex-col space-y-8"),n(T,"class","-md:hidden flex-1"),n(a,"class","flex flex-col md:flex-row justify-center items-center px-5 py-12 md:py-32 w-full max-w-screen-xl space-y-8 md:space-y-0 md:space-x-16"),n(l,"class","flex flex-col items-center bg-cover bg-center"),Xe(l,"background-image","url('/static/images/landing-bg.png')"),n(x,"class","-mt-12 h-12 to-black from-transparent bg-gradient-to-b "),n(R,"class","grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-screen-2xl p-5 gap-5"),n(P,"class","flex flex-col items-center"),n(s,"class","bg-black text-white"),n(U,"class","flex flex-col max-w-screen-xl mx-auto divide-y divide-black px-5 md:py-8")},m(p,L){J(e,p,L),H(p,t,L),H(p,s,L),o(s,l),o(l,a),o(a,r),J(c,r,null),o(r,f),o(r,_),o(r,g),o(r,d),o(d,k),o(r,I),J(E,r,null),o(a,M),o(a,T),J(S,T,null),o(a,y),J(m,a,null),o(s,V),o(s,x),o(s,j),o(s,P),o(P,R);for(let te=0;te<A.length;te+=1)A[te].m(R,null);H(p,K,L),H(p,U,L),J(q,U,null),o(U,ie),J(z,U,null),ae=!0},p(p,[L]){const te={};if(L&16&&(te.$$scope={dirty:L,ctx:p}),E.$set(te),L&1){G=p[0];let C;for(C=0;C<G.length;C+=1){const X=Ce(p,G,C);A[C]?(A[C].p(X,L),B(A[C],1)):(A[C]=He(X),A[C].c(),B(A[C],1),A[C].m(R,null))}for(Re(),C=G.length;C<A.length;C+=1)Fe(C);Ne()}},i(p){if(!ae){B(e.$$.fragment,p),B(c.$$.fragment,p),B(E.$$.fragment,p),B(S.$$.fragment,p),B(m.$$.fragment,p);for(let L=0;L<G.length;L+=1)B(A[L]);B(q.$$.fragment,p),B(z.$$.fragment,p),ae=!0}},o(p){N(e.$$.fragment,p),N(c.$$.fragment,p),N(E.$$.fragment,p),N(S.$$.fragment,p),N(m.$$.fragment,p),A=A.filter(Boolean);for(let L=0;L<A.length;L+=1)N(A[L]);N(q.$$.fragment,p),N(z.$$.fragment,p),ae=!1},d(p){Q(e,p),p&&u(t),p&&u(s),Q(c),Q(E),Q(S),Q(m),ge(A,p),p&&u(K),p&&u(U),Q(q),Q(z)}}}function Tt(i){return[[{th:"\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E1C\u0E39\u0E49\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E1C\u0E39\u0E49\u0E27\u0E48\u0E32\u0E2F + \u0E2A.\u0E01.",en:"Meet the Candidates",href:"/candidate",image:"/static/images/cover/tn_candidate.png"},{th:"\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E01\u0E32\u0E23\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E15\u0E31\u0E49\u0E07 \u0E01\u0E17\u0E21. \u0E22\u0E49\u0E2D\u0E19\u0E2B\u0E25\u0E31\u0E07",en:"Voting Map",image:"/static/images/cover/tn_result.png"},{th:"\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E01\u0E15\u0E34\u0E01\u0E32\u0E01\u0E32\u0E23\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E15\u0E31\u0E49\u0E07",en:"How to Vote?",href:"",image:"/static/images/cover/tn_howtovote.png"},{th:"\u0E28\u0E36\u0E01\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E15\u0E31\u0E49\u0E07 \u0E01\u0E17\u0E21. \u0E1A\u0E19\u0E42\u0E25\u0E01\u0E42\u0E0B\u0E40\u0E0A\u0E35\u0E22\u0E25",en:"Social Trend",href:"/socialtrend",image:"/static/images/cover/tn_sociallistening.png"},{th:"\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E1B\u0E31\u0E0D\u0E2B\u0E32\u0E01\u0E27\u0E19\u0E43\u0E08\u0E0A\u0E32\u0E27 \u0E01\u0E17\u0E21.",en:"BKK Followup",href:"https://bkkfollowup.wevis.info/",external:!0,image:"/static/images/cover/tn_openbkk.png"},{th:"\u0E23\u0E48\u0E27\u0E21\u0E2D\u0E2D\u0E01\u0E41\u0E1A\u0E1A\u0E07\u0E1A\u0E1B\u0E23\u0E30\u0E21\u0E32\u0E13 \u0E01\u0E17\u0E21.",en:"Bangkok Budgeting",href:"https://bangkokbudgeting.wevis.info",external:!0,image:"/static/images/cover/tn_bangkokbudget.png"}]]}class Mt extends oe{constructor(e){super();ce(this,e,Tt,$t,fe,{})}}export{Mt as default};
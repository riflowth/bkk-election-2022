const Ne=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const _ of o)if(_.type==="childList")for(const l of _.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const _={};return o.integrity&&(_.integrity=o.integrity),o.referrerpolicy&&(_.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?_.credentials="include":o.crossorigin==="anonymous"?_.credentials="omit":_.credentials="same-origin",_}function r(o){if(o.ep)return;o.ep=!0;const _=n(o);fetch(o.href,_)}};Ne();var O,u,pe,de,E,he,B,ve,M={},me=[],Te=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function $(e,t){for(var n in t)e[n]=t[n];return e}function ye(e){var t=e.parentNode;t&&t.removeChild(e)}function w(e,t,n){var r,o,_,l={};for(_ in t)_=="key"?r=t[_]:_=="ref"?o=t[_]:l[_]=t[_];if(arguments.length>2&&(l.children=arguments.length>3?O.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(_ in e.defaultProps)l[_]===void 0&&(l[_]=e.defaultProps[_]);return S(e,l,r,o,null)}function S(e,t,n,r,o){var _={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:o==null?++pe:o};return o==null&&u.vnode!=null&&u.vnode(_),_}function Le(){return{current:null}}function x(e){return e.children}function k(e,t){this.props=e,this.context=t}function C(e,t){if(t==null)return e.__?C(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?C(e):null}function ge(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return ge(e)}}function W(e){(!e.__d&&(e.__d=!0)&&E.push(e)&&!j.__r++||B!==u.debounceRendering)&&((B=u.debounceRendering)||he)(j)}function j(){for(var e;j.__r=E.length;)e=E.sort(function(t,n){return t.__v.__b-n.__v.__b}),E=[],e.some(function(t){var n,r,o,_,l,s;t.__d&&(l=(_=(n=t).__v).__e,(s=n.__P)&&(r=[],(o=$({},_)).__v=_.__v+1,I(s,_,o,n.__n,s.ownerSVGElement!==void 0,_.__h!=null?[l]:null,r,l==null?C(_):l,_.__h),Pe(r,_),_.__e!=l&&ge(_)))})}function be(e,t,n,r,o,_,l,s,p,d){var i,h,a,c,f,P,v,m=r&&r.__k||me,y=m.length;for(n.__k=[],i=0;i<t.length;i++)if((c=n.__k[i]=(c=t[i])==null||typeof c=="boolean"?null:typeof c=="string"||typeof c=="number"||typeof c=="bigint"?S(null,c,null,null,c):Array.isArray(c)?S(x,{children:c},null,null,null):c.__b>0?S(c.type,c.props,c.key,null,c.__v):c)!=null){if(c.__=n,c.__b=n.__b+1,(a=m[i])===null||a&&c.key==a.key&&c.type===a.type)m[i]=void 0;else for(h=0;h<y;h++){if((a=m[h])&&c.key==a.key&&c.type===a.type){m[h]=void 0;break}a=null}I(e,c,a=a||M,o,_,l,s,p,d),f=c.__e,(h=c.ref)&&a.ref!=h&&(v||(v=[]),a.ref&&v.push(a.ref,null,c),v.push(h,c.__c||f,c)),f!=null?(P==null&&(P=f),typeof c.type=="function"&&c.__k===a.__k?c.__d=p=ke(c,p,e):p=$e(e,c,a,m,f,p),typeof n.type=="function"&&(n.__d=p)):p&&a.__e==p&&p.parentNode!=e&&(p=C(a))}for(n.__e=P,i=y;i--;)m[i]!=null&&(typeof n.type=="function"&&m[i].__e!=null&&m[i].__e==n.__d&&(n.__d=C(r,i+1)),Ce(m[i],m[i]));if(v)for(i=0;i<v.length;i++)xe(v[i],v[++i],v[++i])}function ke(e,t,n){for(var r,o=e.__k,_=0;o&&_<o.length;_++)(r=o[_])&&(r.__=e,t=typeof r.type=="function"?ke(r,t,n):$e(n,r,r,o,r.__e,t));return t}function A(e,t){return t=t||[],e==null||typeof e=="boolean"||(Array.isArray(e)?e.some(function(n){A(n,t)}):t.push(e)),t}function $e(e,t,n,r,o,_){var l,s,p;if(t.__d!==void 0)l=t.__d,t.__d=void 0;else if(n==null||o!=_||o.parentNode==null)e:if(_==null||_.parentNode!==e)e.appendChild(o),l=null;else{for(s=_,p=0;(s=s.nextSibling)&&p<r.length;p+=2)if(s==o)break e;e.insertBefore(o,_),l=_}return l!==void 0?l:o.nextSibling}function Me(e,t,n,r,o){var _;for(_ in n)_==="children"||_==="key"||_ in t||D(e,_,null,n[_],r);for(_ in t)o&&typeof t[_]!="function"||_==="children"||_==="key"||_==="value"||_==="checked"||n[_]===t[_]||D(e,_,t[_],n[_],r)}function z(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||Te.test(t)?n:n+"px"}function D(e,t,n,r,o){var _;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||z(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||z(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")_=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+_]=n,n?r||e.addEventListener(t,_?G:Z,_):e.removeEventListener(t,_?G:Z,_);else if(t!=="dangerouslySetInnerHTML"){if(o)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n==null?"":n;break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function Z(e){this.l[e.type+!1](u.event?u.event(e):e)}function G(e){this.l[e.type+!0](u.event?u.event(e):e)}function I(e,t,n,r,o,_,l,s,p){var d,i,h,a,c,f,P,v,m,y,H,b=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(p=n.__h,s=t.__e=n.__e,t.__h=null,_=[s]),(d=u.__b)&&d(t);try{e:if(typeof b=="function"){if(v=t.props,m=(d=b.contextType)&&r[d.__c],y=d?m?m.props.value:d.__:r,n.__c?P=(i=t.__c=n.__c).__=i.__E:("prototype"in b&&b.prototype.render?t.__c=i=new b(v,y):(t.__c=i=new k(v,y),i.constructor=b,i.render=De),m&&m.sub(i),i.props=v,i.state||(i.state={}),i.context=y,i.__n=r,h=i.__d=!0,i.__h=[]),i.__s==null&&(i.__s=i.state),b.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=$({},i.__s)),$(i.__s,b.getDerivedStateFromProps(v,i.__s))),a=i.props,c=i.state,h)b.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(b.getDerivedStateFromProps==null&&v!==a&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(v,y),!i.__e&&i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(v,i.__s,y)===!1||t.__v===n.__v){i.props=v,i.state=i.__s,t.__v!==n.__v&&(i.__d=!1),i.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(U){U&&(U.__=t)}),i.__h.length&&l.push(i);break e}i.componentWillUpdate!=null&&i.componentWillUpdate(v,i.__s,y),i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(a,c,f)})}i.context=y,i.props=v,i.state=i.__s,(d=u.__r)&&d(t),i.__d=!1,i.__v=t,i.__P=e,d=i.render(i.props,i.state,i.context),i.state=i.__s,i.getChildContext!=null&&(r=$($({},r),i.getChildContext())),h||i.getSnapshotBeforeUpdate==null||(f=i.getSnapshotBeforeUpdate(a,c)),H=d!=null&&d.type===x&&d.key==null?d.props.children:d,be(e,Array.isArray(H)?H:[H],t,n,r,o,_,l,s,p),i.base=t.__e,t.__h=null,i.__h.length&&l.push(i),P&&(i.__E=i.__=null),i.__e=!1}else _==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=je(n.__e,t,n,r,o,_,l,p);(d=u.diffed)&&d(t)}catch(U){t.__v=null,(p||_!=null)&&(t.__e=s,t.__h=!!p,_[_.indexOf(s)]=null),u.__e(U,t,n)}}function Pe(e,t){u.__c&&u.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(r){r.call(n)})}catch(r){u.__e(r,n.__v)}})}function je(e,t,n,r,o,_,l,s){var p,d,i,h=n.props,a=t.props,c=t.type,f=0;if(c==="svg"&&(o=!0),_!=null){for(;f<_.length;f++)if((p=_[f])&&"setAttribute"in p==!!c&&(c?p.localName===c:p.nodeType===3)){e=p,_[f]=null;break}}if(e==null){if(c===null)return document.createTextNode(a);e=o?document.createElementNS("http://www.w3.org/2000/svg",c):document.createElement(c,a.is&&a),_=null,s=!1}if(c===null)h===a||s&&e.data===a||(e.data=a);else{if(_=_&&O.call(e.childNodes),d=(h=n.props||M).dangerouslySetInnerHTML,i=a.dangerouslySetInnerHTML,!s){if(_!=null)for(h={},f=0;f<e.attributes.length;f++)h[e.attributes[f].name]=e.attributes[f].value;(i||d)&&(i&&(d&&i.__html==d.__html||i.__html===e.innerHTML)||(e.innerHTML=i&&i.__html||""))}if(Me(e,a,h,o,s),i)t.__k=[];else if(f=t.props.children,be(e,Array.isArray(f)?f:[f],t,n,r,o&&c!=="foreignObject",_,l,_?_[0]:n.__k&&C(n,0),s),_!=null)for(f=_.length;f--;)_[f]!=null&&ye(_[f]);s||("value"in a&&(f=a.value)!==void 0&&(f!==e.value||c==="progress"&&!f||c==="option"&&f!==h.value)&&D(e,"value",f,h.value,!1),"checked"in a&&(f=a.checked)!==void 0&&f!==e.checked&&D(e,"checked",f,h.checked,!1))}return e}function xe(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){u.__e(r,n)}}function Ce(e,t,n){var r,o;if(u.unmount&&u.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||xe(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(_){u.__e(_,t)}r.base=r.__P=null}if(r=e.__k)for(o=0;o<r.length;o++)r[o]&&Ce(r[o],t,typeof e.type!="function");n||e.__e==null||ye(e.__e),e.__e=e.__d=void 0}function De(e,t,n){return this.constructor(e,n)}function V(e,t,n){var r,o,_;u.__&&u.__(e,t),o=(r=typeof n=="function")?null:n&&n.__k||t.__k,_=[],I(t,e=(!r&&n||t).__k=w(x,null,[e]),o||M,M,t.ownerSVGElement!==void 0,!r&&n?[n]:o?null:t.firstChild?O.call(t.childNodes):null,_,!r&&n?n:o?o.__e:t.firstChild,r),Pe(_,e)}function Ee(e,t){V(e,t,Ee)}function Fe(e,t,n){var r,o,_,l=$({},e.props);for(_ in t)_=="key"?r=t[_]:_=="ref"?o=t[_]:l[_]=t[_];return arguments.length>2&&(l.children=arguments.length>3?O.call(arguments,2):n),S(e.type,l,r||e.key,o||e.ref,null)}function We(e,t){var n={__c:t="__cC"+ve++,__:e,Consumer:function(r,o){return r.children(o)},Provider:function(r){var o,_;return this.getChildContext||(o=[],(_={})[t]=this,this.getChildContext=function(){return _},this.shouldComponentUpdate=function(l){this.props.value!==l.value&&o.some(W)},this.sub=function(l){o.push(l);var s=l.componentWillUnmount;l.componentWillUnmount=function(){o.splice(o.indexOf(l),1),s&&s.call(l)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}O=me.slice,u={__e:function(e,t,n,r){for(var o,_,l;t=t.__;)if((o=t.__c)&&!o.__)try{if((_=o.constructor)&&_.getDerivedStateFromError!=null&&(o.setState(_.getDerivedStateFromError(e)),l=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(e,r||{}),l=o.__d),l)return o.__E=o}catch(s){e=s}throw e}},pe=0,de=function(e){return e!=null&&e.constructor===void 0},k.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=$({},this.state),typeof e=="function"&&(e=e($({},n),this.props)),e&&$(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),W(this))},k.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),W(this))},k.prototype.render=x,E=[],he=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,j.__r=0,ve=0;var Re=Object.freeze(Object.defineProperty({__proto__:null,render:V,hydrate:Ee,createElement:w,h:w,Fragment:x,createRef:Le,get isValidElement(){return de},Component:k,cloneElement:Fe,createContext:We,toChildArray:A,get options(){return u}},Symbol.toStringTag,{value:"Module"})),Se,g,K,J=0,we=[],Q=u.__b,Y=u.__r,X=u.diffed,ee=u.__c,te=u.unmount;function qe(e,t){u.__h&&u.__h(g,e,J||t),J=0;var n=g.__H||(g.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function Ie(e,t){var n=qe(Se++,3);!u.__s&&Be(n.__H,t)&&(n.__=e,n.__H=t,g.__H.__h.push(n))}function Ve(){for(var e;e=we.shift();)if(e.__P)try{e.__H.__h.forEach(T),e.__H.__h.forEach(R),e.__H.__h=[]}catch(t){e.__H.__h=[],u.__e(t,e.__v)}}u.__b=function(e){g=null,Q&&Q(e)},u.__r=function(e){Y&&Y(e),Se=0;var t=(g=e.__c).__H;t&&(t.__h.forEach(T),t.__h.forEach(R),t.__h=[])},u.diffed=function(e){X&&X(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(we.push(t)!==1&&K===u.requestAnimationFrame||((K=u.requestAnimationFrame)||function(n){var r,o=function(){clearTimeout(_),ne&&cancelAnimationFrame(r),setTimeout(n)},_=setTimeout(o,100);ne&&(r=requestAnimationFrame(o))})(Ve)),g=null},u.__c=function(e,t){t.some(function(n){try{n.__h.forEach(T),n.__h=n.__h.filter(function(r){return!r.__||R(r)})}catch(r){t.some(function(o){o.__h&&(o.__h=[])}),t=[],u.__e(r,n.__v)}}),ee&&ee(e,t)},u.unmount=function(e){te&&te(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{T(r)}catch(o){t=o}}),t&&u.__e(t,n.__v))};var ne=typeof requestAnimationFrame=="function";function T(e){var t=g,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),g=t}function R(e){var t=g;e.__c=e.__(),g=t}function Be(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function ze(e,t){for(var n in t)e[n]=t[n];return e}function _e(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var r in t)if(r!=="__source"&&e[r]!==t[r])return!0;return!1}function re(e){this.props=e}(re.prototype=new k).isPureReactComponent=!0,re.prototype.shouldComponentUpdate=function(e,t){return _e(this.props,e)||_e(this.state,t)};var oe=u.__b;u.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),oe&&oe(e)};var Ze=u.__e;u.__e=function(e,t,n,r){if(e.then){for(var o,_=t;_=_.__;)if((o=_.__c)&&o.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),o.__c(e,t)}Ze(e,t,n,r)};var ie=u.unmount;function F(){this.__u=0,this.t=null,this.__b=null}function Ae(e){var t=e.__.__c;return t&&t.__e&&t.__e(e)}function N(){this.u=null,this.o=null}u.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&e.__h===!0&&(e.type=null),ie&&ie(e)},(F.prototype=new k).__c=function(e,t){var n=t.__c,r=this;r.t==null&&(r.t=[]),r.t.push(n);var o=Ae(r.__v),_=!1,l=function(){_||(_=!0,n.__R=null,o?o(s):s())};n.__R=l;var s=function(){if(!--r.__u){if(r.state.__e){var d=r.state.__e;r.__v.__k[0]=function h(a,c,f){return a&&(a.__v=null,a.__k=a.__k&&a.__k.map(function(P){return h(P,c,f)}),a.__c&&a.__c.__P===c&&(a.__e&&f.insertBefore(a.__e,a.__d),a.__c.__e=!0,a.__c.__P=f)),a}(d,d.__c.__P,d.__c.__O)}var i;for(r.setState({__e:r.__b=null});i=r.t.pop();)i.forceUpdate()}},p=t.__h===!0;r.__u++||p||r.setState({__e:r.__b=r.__v.__k[0]}),e.then(l,l)},F.prototype.componentWillUnmount=function(){this.t=[]},F.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=function _(l,s,p){return l&&(l.__c&&l.__c.__H&&(l.__c.__H.__.forEach(function(d){typeof d.__c=="function"&&d.__c()}),l.__c.__H=null),(l=ze({},l)).__c!=null&&(l.__c.__P===p&&(l.__c.__P=s),l.__c=null),l.__k=l.__k&&l.__k.map(function(d){return _(d,s,p)})),l}(this.__b,n,r.__O=r.__P)}this.__b=null}var o=t.__e&&w(x,null,e.fallback);return o&&(o.__h=null),[w(x,null,t.__e?null:e.children),o]};var le=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};(N.prototype=new k).__e=function(e){var t=this,n=Ae(t.__v),r=t.o.get(e);return r[0]++,function(o){var _=function(){t.props.revealOrder?(r.push(o),le(t,e,r)):o()};n?n(_):_()}},N.prototype.render=function(e){this.u=null,this.o=new Map;var t=A(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},N.prototype.componentDidUpdate=N.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,n){le(e,n,t)})};var Ge=typeof Symbol!="undefined"&&Symbol.for&&Symbol.for("react.element")||60103,Ke=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Je=typeof document!="undefined",Qe=function(e){return(typeof Symbol!="undefined"&&typeof Symbol()=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(e)};k.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(k.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var ue=u.event;function Ye(){}function Xe(){return this.cancelBubble}function et(){return this.defaultPrevented}u.event=function(e){return ue&&(e=ue(e)),e.persist=Ye,e.isPropagationStopped=Xe,e.isDefaultPrevented=et,e.nativeEvent=e};var ce={configurable:!0,get:function(){return this.class}},ae=u.vnode;u.vnode=function(e){var t=e.type,n=e.props,r=n;if(typeof t=="string"){var o=t.indexOf("-")===-1;for(var _ in r={},n){var l=n[_];Je&&_==="children"&&t==="noscript"||_==="value"&&"defaultValue"in n&&l==null||(_==="defaultValue"&&"value"in n&&n.value==null?_="value":_==="download"&&l===!0?l="":/ondoubleclick/i.test(_)?_="ondblclick":/^onchange(textarea|input)/i.test(_+t)&&!Qe(n.type)?_="oninput":/^onfocus$/i.test(_)?_="onfocusin":/^onblur$/i.test(_)?_="onfocusout":/^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(_)?_=_.toLowerCase():o&&Ke.test(_)?_=_.replace(/[A-Z0-9]/,"-$&").toLowerCase():l===null&&(l=void 0),r[_]=l)}t=="select"&&r.multiple&&Array.isArray(r.value)&&(r.value=A(n.children).forEach(function(s){s.props.selected=r.value.indexOf(s.props.value)!=-1})),t=="select"&&r.defaultValue!=null&&(r.value=A(n.children).forEach(function(s){s.props.selected=r.multiple?r.defaultValue.indexOf(s.props.value)!=-1:r.defaultValue==s.props.value})),e.props=r,n.class!=n.className&&(ce.enumerable="className"in n,n.className!=null&&(r.class=n.className),Object.defineProperty(r,"className",ce))}e.$$typeof=Ge,ae&&ae(e)};var se=u.__r;u.__r=function(e){se&&se(e)};function tt(){if(document.head.querySelector("#ui-webcomponent-script"))return;const e=document.createElement("script");e.setAttribute("id","ui-webcomponent-script"),e.setAttribute("src","/ui/ui.umd.js"),e.setAttribute("async",!0),document.head.appendChild(e)}function nt(e){if(e.__esModule)return e;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach(function(n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}),t}var _t=nt(Re),Oe,He,Ue,q=_t,rt=0;function fe(e,t,n,r,o){var _,l,s={};for(l in t)l=="ref"?_=t[l]:s[l]=t[l];var p={type:e,props:s,key:n,ref:_,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--rt,__source:o,__self:r};if(typeof e=="function"&&(_=e.defaultProps))for(l in _)s[l]===void 0&&(s[l]=_[l]);return q.options.vnode&&q.options.vnode(p),p}Ue=q.Fragment,He=fe,Oe=fe;const L=He,ot=Oe,it=Ue,lt=()=>(Ie(()=>{tt()},[]),ot(it,{children:[L("ui-navbar",{}),L("p",{className:"typo-h1",children:"Map"}),L("p",{className:"text-ultramarine",children:"Write with react, build with preact/compat"})]}));V(L(lt,{}),document.getElementById("app"));
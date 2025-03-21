(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Cl(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Ie={},Nr=[],Bt=()=>{},qm=()=>!1,So=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),kl=n=>n.startsWith("onUpdate:"),at=Object.assign,Dl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Wm=Object.prototype.hasOwnProperty,ve=(n,e)=>Wm.call(n,e),se=Array.isArray,xr=n=>Po(n)==="[object Map]",xf=n=>Po(n)==="[object Set]",ae=n=>typeof n=="function",Ne=n=>typeof n=="string",jn=n=>typeof n=="symbol",Re=n=>n!==null&&typeof n=="object",Mf=n=>(Re(n)||ae(n))&&ae(n.then)&&ae(n.catch),Lf=Object.prototype.toString,Po=n=>Lf.call(n),Km=n=>Po(n).slice(8,-1),Ff=n=>Po(n)==="[object Object]",Vl=n=>Ne(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ss=Cl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Co=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},zm=/-(\w)/g,Nn=Co(n=>n.replace(zm,(e,t)=>t?t.toUpperCase():"")),Gm=/\B([A-Z])/g,pr=Co(n=>n.replace(Gm,"-$1").toLowerCase()),Uf=Co(n=>n.charAt(0).toUpperCase()+n.slice(1)),ya=Co(n=>n?`on${Uf(n)}`:""),Pn=(n,e)=>!Object.is(n,e),ji=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Bf=(n,e,t,r=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:r,value:t})},qa=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Du;const ko=()=>Du||(Du=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Do(n){if(se(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],s=Ne(r)?Xm(r):Do(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ne(n)||Re(n))return n}const Qm=/;(?![^(]*\))/g,Jm=/:([^]+)/,Ym=/\/\*[^]*?\*\//g;function Xm(n){const e={};return n.replace(Ym,"").split(Qm).forEach(t=>{if(t){const r=t.split(Jm);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ni(n){let e="";if(Ne(n))e=n;else if(se(n))for(let t=0;t<n.length;t++){const r=ni(n[t]);r&&(e+=r+" ")}else if(Re(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Zm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",e_=Cl(Zm);function jf(n){return!!n||n===""}const $f=n=>!!(n&&n.__v_isRef===!0),Ut=n=>Ne(n)?n:n==null?"":se(n)||Re(n)&&(n.toString===Lf||!ae(n.toString))?$f(n)?Ut(n.value):JSON.stringify(n,Hf,2):String(n),Hf=(n,e)=>$f(e)?Hf(n,e.value):xr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,s],i)=>(t[va(r,i)+" =>"]=s,t),{})}:xf(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>va(t))}:jn(e)?va(e):Re(e)&&!se(e)&&!Ff(e)?String(e):e,va=(n,e="")=>{var t;return jn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ft;class qf{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=ft,!e&&ft&&(this.index=(ft.scopes||(ft.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=ft;try{return ft=this,e()}finally{ft=t}}}on(){ft=this}off(){ft=this.parent}stop(e){if(this._active){this._active=!1;let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(this.effects.length=0,t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Wf(n){return new qf(n)}function Kf(){return ft}function t_(n,e=!1){ft&&ft.cleanups.push(n)}let we;const Ea=new WeakSet;class zf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ft&&ft.active&&ft.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ea.has(this)&&(Ea.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Qf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Vu(this),Jf(this);const e=we,t=Dt;we=this,Dt=!0;try{return this.fn()}finally{Yf(this),we=e,Dt=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)xl(e);this.deps=this.depsTail=void 0,Vu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ea.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Wa(this)&&this.run()}get dirty(){return Wa(this)}}let Gf=0,Ps,Cs;function Qf(n,e=!1){if(n.flags|=8,e){n.next=Cs,Cs=n;return}n.next=Ps,Ps=n}function Ol(){Gf++}function Nl(){if(--Gf>0)return;if(Cs){let e=Cs;for(Cs=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Ps;){let e=Ps;for(Ps=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){n||(n=r)}e=t}}if(n)throw n}function Jf(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Yf(n){let e,t=n.depsTail,r=t;for(;r;){const s=r.prevDep;r.version===-1?(r===t&&(t=s),xl(r),n_(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}n.deps=e,n.depsTail=t}function Wa(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Xf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Xf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Bs))return;n.globalVersion=Bs;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!Wa(n)){n.flags&=-3;return}const t=we,r=Dt;we=n,Dt=!0;try{Jf(n);const s=n.fn(n._value);(e.version===0||Pn(s,n._value))&&(n._value=s,e.version++)}catch(s){throw e.version++,s}finally{we=t,Dt=r,Yf(n),n.flags&=-3}}function xl(n,e=!1){const{dep:t,prevSub:r,nextSub:s}=n;if(r&&(r.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=r,n.nextSub=void 0),t.subs===n&&(t.subs=r,!r&&t.computed)){t.computed.flags&=-5;for(let i=t.computed.deps;i;i=i.nextDep)xl(i,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function n_(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Dt=!0;const Zf=[];function $n(){Zf.push(Dt),Dt=!1}function Hn(){const n=Zf.pop();Dt=n===void 0?!0:n}function Vu(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=we;we=void 0;try{e()}finally{we=t}}}let Bs=0;class r_{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ml{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!we||!Dt||we===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==we)t=this.activeLink=new r_(we,this),we.deps?(t.prevDep=we.depsTail,we.depsTail.nextDep=t,we.depsTail=t):we.deps=we.depsTail=t,ed(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=we.depsTail,t.nextDep=void 0,we.depsTail.nextDep=t,we.depsTail=t,we.deps===t&&(we.deps=r)}return t}trigger(e){this.version++,Bs++,this.notify(e)}notify(e){Ol();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Nl()}}}function ed(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)ed(r)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const eo=new WeakMap,sr=Symbol(""),Ka=Symbol(""),js=Symbol("");function tt(n,e,t){if(Dt&&we){let r=eo.get(n);r||eo.set(n,r=new Map);let s=r.get(t);s||(r.set(t,s=new Ml),s.map=r,s.key=t),s.track()}}function en(n,e,t,r,s,i){const a=eo.get(n);if(!a){Bs++;return}const l=c=>{c&&c.trigger()};if(Ol(),e==="clear")a.forEach(l);else{const c=se(n),h=c&&Vl(t);if(c&&t==="length"){const d=Number(r);a.forEach((g,E)=>{(E==="length"||E===js||!jn(E)&&E>=d)&&l(g)})}else switch((t!==void 0||a.has(void 0))&&l(a.get(t)),h&&l(a.get(js)),e){case"add":c?h&&l(a.get("length")):(l(a.get(sr)),xr(n)&&l(a.get(Ka)));break;case"delete":c||(l(a.get(sr)),xr(n)&&l(a.get(Ka)));break;case"set":xr(n)&&l(a.get(sr));break}}Nl()}function s_(n,e){const t=eo.get(n);return t&&t.get(e)}function br(n){const e=ge(n);return e===n?e:(tt(e,"iterate",js),At(n)?e:e.map(nt))}function Vo(n){return tt(n=ge(n),"iterate",js),n}const i_={__proto__:null,[Symbol.iterator](){return Ta(this,Symbol.iterator,nt)},concat(...n){return br(this).concat(...n.map(e=>se(e)?br(e):e))},entries(){return Ta(this,"entries",n=>(n[1]=nt(n[1]),n))},every(n,e){return Xt(this,"every",n,e,void 0,arguments)},filter(n,e){return Xt(this,"filter",n,e,t=>t.map(nt),arguments)},find(n,e){return Xt(this,"find",n,e,nt,arguments)},findIndex(n,e){return Xt(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Xt(this,"findLast",n,e,nt,arguments)},findLastIndex(n,e){return Xt(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Xt(this,"forEach",n,e,void 0,arguments)},includes(...n){return Ia(this,"includes",n)},indexOf(...n){return Ia(this,"indexOf",n)},join(n){return br(this).join(n)},lastIndexOf(...n){return Ia(this,"lastIndexOf",n)},map(n,e){return Xt(this,"map",n,e,void 0,arguments)},pop(){return vs(this,"pop")},push(...n){return vs(this,"push",n)},reduce(n,...e){return Ou(this,"reduce",n,e)},reduceRight(n,...e){return Ou(this,"reduceRight",n,e)},shift(){return vs(this,"shift")},some(n,e){return Xt(this,"some",n,e,void 0,arguments)},splice(...n){return vs(this,"splice",n)},toReversed(){return br(this).toReversed()},toSorted(n){return br(this).toSorted(n)},toSpliced(...n){return br(this).toSpliced(...n)},unshift(...n){return vs(this,"unshift",n)},values(){return Ta(this,"values",nt)}};function Ta(n,e,t){const r=Vo(n),s=r[e]();return r!==n&&!At(n)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=t(i.value)),i}),s}const o_=Array.prototype;function Xt(n,e,t,r,s,i){const a=Vo(n),l=a!==n&&!At(n),c=a[e];if(c!==o_[e]){const g=c.apply(n,i);return l?nt(g):g}let h=t;a!==n&&(l?h=function(g,E){return t.call(this,nt(g),E,n)}:t.length>2&&(h=function(g,E){return t.call(this,g,E,n)}));const d=c.call(a,h,r);return l&&s?s(d):d}function Ou(n,e,t,r){const s=Vo(n);let i=t;return s!==n&&(At(n)?t.length>3&&(i=function(a,l,c){return t.call(this,a,l,c,n)}):i=function(a,l,c){return t.call(this,a,nt(l),c,n)}),s[e](i,...r)}function Ia(n,e,t){const r=ge(n);tt(r,"iterate",js);const s=r[e](...t);return(s===-1||s===!1)&&Ul(t[0])?(t[0]=ge(t[0]),r[e](...t)):s}function vs(n,e,t=[]){$n(),Ol();const r=ge(n)[e].apply(n,t);return Nl(),Hn(),r}const a_=Cl("__proto__,__v_isRef,__isVue"),td=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(jn));function l_(n){jn(n)||(n=String(n));const e=ge(this);return tt(e,"has",n),e.hasOwnProperty(n)}class nd{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,r){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return i;if(t==="__v_raw")return r===(s?i?y_:od:i?id:sd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=se(e);if(!s){let c;if(a&&(c=i_[t]))return c;if(t==="hasOwnProperty")return l_}const l=Reflect.get(e,t,Pe(e)?e:r);return(jn(t)?td.has(t):a_(t))||(s||tt(e,"get",t),i)?l:Pe(l)?a&&Vl(t)?l:l.value:Re(l)?s?ad(l):Oo(l):l}}class rd extends nd{constructor(e=!1){super(!1,e)}set(e,t,r,s){let i=e[t];if(!this._isShallow){const c=or(i);if(!At(r)&&!or(r)&&(i=ge(i),r=ge(r)),!se(e)&&Pe(i)&&!Pe(r))return c?!1:(i.value=r,!0)}const a=se(e)&&Vl(t)?Number(t)<e.length:ve(e,t),l=Reflect.set(e,t,r,Pe(e)?e:s);return e===ge(s)&&(a?Pn(r,i)&&en(e,"set",t,r):en(e,"add",t,r)),l}deleteProperty(e,t){const r=ve(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&r&&en(e,"delete",t,void 0),s}has(e,t){const r=Reflect.has(e,t);return(!jn(t)||!td.has(t))&&tt(e,"has",t),r}ownKeys(e){return tt(e,"iterate",se(e)?"length":sr),Reflect.ownKeys(e)}}class c_ extends nd{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const u_=new rd,h_=new c_,f_=new rd(!0);const za=n=>n,Vi=n=>Reflect.getPrototypeOf(n);function d_(n,e,t){return function(...r){const s=this.__v_raw,i=ge(s),a=xr(i),l=n==="entries"||n===Symbol.iterator&&a,c=n==="keys"&&a,h=s[n](...r),d=t?za:e?Ga:nt;return!e&&tt(i,"iterate",c?Ka:sr),{next(){const{value:g,done:E}=h.next();return E?{value:g,done:E}:{value:l?[d(g[0]),d(g[1])]:d(g),done:E}},[Symbol.iterator](){return this}}}}function Oi(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function p_(n,e){const t={get(s){const i=this.__v_raw,a=ge(i),l=ge(s);n||(Pn(s,l)&&tt(a,"get",s),tt(a,"get",l));const{has:c}=Vi(a),h=e?za:n?Ga:nt;if(c.call(a,s))return h(i.get(s));if(c.call(a,l))return h(i.get(l));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!n&&tt(ge(s),"iterate",sr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,a=ge(i),l=ge(s);return n||(Pn(s,l)&&tt(a,"has",s),tt(a,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const a=this,l=a.__v_raw,c=ge(l),h=e?za:n?Ga:nt;return!n&&tt(c,"iterate",sr),l.forEach((d,g)=>s.call(i,h(d),h(g),a))}};return at(t,n?{add:Oi("add"),set:Oi("set"),delete:Oi("delete"),clear:Oi("clear")}:{add(s){!e&&!At(s)&&!or(s)&&(s=ge(s));const i=ge(this);return Vi(i).has.call(i,s)||(i.add(s),en(i,"add",s,s)),this},set(s,i){!e&&!At(i)&&!or(i)&&(i=ge(i));const a=ge(this),{has:l,get:c}=Vi(a);let h=l.call(a,s);h||(s=ge(s),h=l.call(a,s));const d=c.call(a,s);return a.set(s,i),h?Pn(i,d)&&en(a,"set",s,i):en(a,"add",s,i),this},delete(s){const i=ge(this),{has:a,get:l}=Vi(i);let c=a.call(i,s);c||(s=ge(s),c=a.call(i,s)),l&&l.call(i,s);const h=i.delete(s);return c&&en(i,"delete",s,void 0),h},clear(){const s=ge(this),i=s.size!==0,a=s.clear();return i&&en(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=d_(s,n,e)}),t}function Ll(n,e){const t=p_(n,e);return(r,s,i)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?r:Reflect.get(ve(t,s)&&s in r?t:r,s,i)}const g_={get:Ll(!1,!1)},m_={get:Ll(!1,!0)},__={get:Ll(!0,!1)};const sd=new WeakMap,id=new WeakMap,od=new WeakMap,y_=new WeakMap;function v_(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function E_(n){return n.__v_skip||!Object.isExtensible(n)?0:v_(Km(n))}function Oo(n){return or(n)?n:Fl(n,!1,u_,g_,sd)}function T_(n){return Fl(n,!1,f_,m_,id)}function ad(n){return Fl(n,!0,h_,__,od)}function Fl(n,e,t,r,s){if(!Re(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const i=s.get(n);if(i)return i;const a=E_(n);if(a===0)return n;const l=new Proxy(n,a===2?r:t);return s.set(n,l),l}function on(n){return or(n)?on(n.__v_raw):!!(n&&n.__v_isReactive)}function or(n){return!!(n&&n.__v_isReadonly)}function At(n){return!!(n&&n.__v_isShallow)}function Ul(n){return n?!!n.__v_raw:!1}function ge(n){const e=n&&n.__v_raw;return e?ge(e):n}function Bl(n){return!ve(n,"__v_skip")&&Object.isExtensible(n)&&Bf(n,"__v_skip",!0),n}const nt=n=>Re(n)?Oo(n):n,Ga=n=>Re(n)?ad(n):n;function Pe(n){return n?n.__v_isRef===!0:!1}function be(n){return I_(n,!1)}function I_(n,e){return Pe(n)?n:new w_(n,e)}class w_{constructor(e,t){this.dep=new Ml,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:ge(e),this._value=t?e:nt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,r=this.__v_isShallow||At(e)||or(e);e=r?e:ge(e),Pn(e,t)&&(this._rawValue=e,this._value=r?e:nt(e),this.dep.trigger())}}function Ke(n){return Pe(n)?n.value:n}const A_={get:(n,e,t)=>e==="__v_raw"?n:Ke(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const s=n[e];return Pe(s)&&!Pe(t)?(s.value=t,!0):Reflect.set(n,e,t,r)}};function ld(n){return on(n)?n:new Proxy(n,A_)}function b_(n){const e=se(n)?new Array(n.length):{};for(const t in n)e[t]=cd(n,t);return e}class R_{constructor(e,t,r){this._object=e,this._key=t,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return s_(ge(this._object),this._key)}}class S_{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function P_(n,e,t){return Pe(n)?n:ae(n)?new S_(n):Re(n)&&arguments.length>1?cd(n,e,t):be(n)}function cd(n,e,t){const r=n[e];return Pe(r)?r:new R_(n,e,t)}class C_{constructor(e,t,r){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Ml(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Bs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&we!==this)return Qf(this,!0),!0}get value(){const e=this.dep.track();return Xf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function k_(n,e,t=!1){let r,s;return ae(n)?r=n:(r=n.get,s=n.set),new C_(r,s,t)}const Ni={},to=new WeakMap;let tr;function D_(n,e=!1,t=tr){if(t){let r=to.get(t);r||to.set(t,r=[]),r.push(n)}}function V_(n,e,t=Ie){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:l,call:c}=t,h=q=>s?q:At(q)||s===!1||s===0?tn(q,1):tn(q);let d,g,E,b,k=!1,O=!1;if(Pe(n)?(g=()=>n.value,k=At(n)):on(n)?(g=()=>h(n),k=!0):se(n)?(O=!0,k=n.some(q=>on(q)||At(q)),g=()=>n.map(q=>{if(Pe(q))return q.value;if(on(q))return h(q);if(ae(q))return c?c(q,2):q()})):ae(n)?e?g=c?()=>c(n,2):n:g=()=>{if(E){$n();try{E()}finally{Hn()}}const q=tr;tr=d;try{return c?c(n,3,[b]):n(b)}finally{tr=q}}:g=Bt,e&&s){const q=g,oe=s===!0?1/0:s;g=()=>tn(q(),oe)}const N=Kf(),K=()=>{d.stop(),N&&N.active&&Dl(N.effects,d)};if(i&&e){const q=e;e=(...oe)=>{q(...oe),K()}}let G=O?new Array(n.length).fill(Ni):Ni;const z=q=>{if(!(!(d.flags&1)||!d.dirty&&!q))if(e){const oe=d.run();if(s||k||(O?oe.some((ye,w)=>Pn(ye,G[w])):Pn(oe,G))){E&&E();const ye=tr;tr=d;try{const w=[oe,G===Ni?void 0:O&&G[0]===Ni?[]:G,b];c?c(e,3,w):e(...w),G=oe}finally{tr=ye}}}else d.run()};return l&&l(z),d=new zf(g),d.scheduler=a?()=>a(z,!1):z,b=q=>D_(q,!1,d),E=d.onStop=()=>{const q=to.get(d);if(q){if(c)c(q,4);else for(const oe of q)oe();to.delete(d)}},e?r?z(!0):G=d.run():a?a(z.bind(null,!0),!0):d.run(),K.pause=d.pause.bind(d),K.resume=d.resume.bind(d),K.stop=K,K}function tn(n,e=1/0,t){if(e<=0||!Re(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,Pe(n))tn(n.value,e,t);else if(se(n))for(let r=0;r<n.length;r++)tn(n[r],e,t);else if(xf(n)||xr(n))n.forEach(r=>{tn(r,e,t)});else if(Ff(n)){for(const r in n)tn(n[r],e,t);for(const r of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,r)&&tn(n[r],e,t)}return n}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ri(n,e,t,r){try{return r?n(...r):n()}catch(s){No(s,e,t)}}function Wt(n,e,t,r){if(ae(n)){const s=ri(n,e,t,r);return s&&Mf(s)&&s.catch(i=>{No(i,e,t)}),s}if(se(n)){const s=[];for(let i=0;i<n.length;i++)s.push(Wt(n[i],e,t,r));return s}}function No(n,e,t,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Ie;if(e){let l=e.parent;const c=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${t}`;for(;l;){const d=l.ec;if(d){for(let g=0;g<d.length;g++)if(d[g](n,c,h)===!1)return}l=l.parent}if(i){$n(),ri(i,null,10,[n,c,h]),Hn();return}}O_(n,t,s,r,a)}function O_(n,e,t,r=!0,s=!1){if(s)throw n;console.error(n)}const dt=[];let Mt=-1;const Mr=[];let Tn=null,Sr=0;const ud=Promise.resolve();let no=null;function hd(n){const e=no||ud;return n?e.then(this?n.bind(this):n):e}function N_(n){let e=Mt+1,t=dt.length;for(;e<t;){const r=e+t>>>1,s=dt[r],i=$s(s);i<n||i===n&&s.flags&2?e=r+1:t=r}return e}function jl(n){if(!(n.flags&1)){const e=$s(n),t=dt[dt.length-1];!t||!(n.flags&2)&&e>=$s(t)?dt.push(n):dt.splice(N_(e),0,n),n.flags|=1,fd()}}function fd(){no||(no=ud.then(pd))}function x_(n){se(n)?Mr.push(...n):Tn&&n.id===-1?Tn.splice(Sr+1,0,n):n.flags&1||(Mr.push(n),n.flags|=1),fd()}function Nu(n,e,t=Mt+1){for(;t<dt.length;t++){const r=dt[t];if(r&&r.flags&2){if(n&&r.id!==n.uid)continue;dt.splice(t,1),t--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function dd(n){if(Mr.length){const e=[...new Set(Mr)].sort((t,r)=>$s(t)-$s(r));if(Mr.length=0,Tn){Tn.push(...e);return}for(Tn=e,Sr=0;Sr<Tn.length;Sr++){const t=Tn[Sr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Tn=null,Sr=0}}const $s=n=>n.id==null?n.flags&2?-1:1/0:n.id;function pd(n){try{for(Mt=0;Mt<dt.length;Mt++){const e=dt[Mt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ri(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Mt<dt.length;Mt++){const e=dt[Mt];e&&(e.flags&=-2)}Mt=-1,dt.length=0,dd(),no=null,(dt.length||Mr.length)&&pd()}}let _t=null,gd=null;function ro(n){const e=_t;return _t=n,gd=n&&n.type.__scopeId||null,e}function M_(n,e=_t,t){if(!e||n._n)return n;const r=(...s)=>{r._d&&Hu(-1);const i=ro(e);let a;try{a=n(...s)}finally{ro(i),r._d&&Hu(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function wa(n,e){if(_t===null)return n;const t=Fo(_t),r=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[i,a,l,c=Ie]=e[s];i&&(ae(i)&&(i={mounted:i,updated:i}),i.deep&&tn(a),r.push({dir:i,instance:t,value:a,oldValue:void 0,arg:l,modifiers:c}))}return n}function Zn(n,e,t,r){const s=n.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const l=s[a];i&&(l.oldValue=i[a].value);let c=l.dir[r];c&&($n(),Wt(c,t,8,[n.el,l,n,e]),Hn())}}const L_=Symbol("_vte"),F_=n=>n.__isTeleport;function $l(n,e){n.shapeFlag&6&&n.component?(n.transition=e,$l(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}/*! #__NO_SIDE_EFFECTS__ */function gr(n,e){return ae(n)?at({name:n.name},e,{setup:n}):n}function md(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function so(n,e,t,r,s=!1){if(se(n)){n.forEach((k,O)=>so(k,e&&(se(e)?e[O]:e),t,r,s));return}if(ks(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&so(n,e,t,r.component.subTree);return}const i=r.shapeFlag&4?Fo(r.component):r.el,a=s?null:i,{i:l,r:c}=n,h=e&&e.r,d=l.refs===Ie?l.refs={}:l.refs,g=l.setupState,E=ge(g),b=g===Ie?()=>!1:k=>ve(E,k);if(h!=null&&h!==c&&(Ne(h)?(d[h]=null,b(h)&&(g[h]=null)):Pe(h)&&(h.value=null)),ae(c))ri(c,l,12,[a,d]);else{const k=Ne(c),O=Pe(c);if(k||O){const N=()=>{if(n.f){const K=k?b(c)?g[c]:d[c]:c.value;s?se(K)&&Dl(K,i):se(K)?K.includes(i)||K.push(i):k?(d[c]=[i],b(c)&&(g[c]=d[c])):(c.value=[i],n.k&&(d[n.k]=c.value))}else k?(d[c]=a,b(c)&&(g[c]=a)):O&&(c.value=a,n.k&&(d[n.k]=a))};a?(N.id=-1,mt(N,t)):N()}}}ko().requestIdleCallback;ko().cancelIdleCallback;const ks=n=>!!n.type.__asyncLoader,_d=n=>n.type.__isKeepAlive;function U_(n,e){yd(n,"a",e)}function B_(n,e){yd(n,"da",e)}function yd(n,e,t=it){const r=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(xo(e,r,t),t){let s=t.parent;for(;s&&s.parent;)_d(s.parent.vnode)&&j_(r,e,t,s),s=s.parent}}function j_(n,e,t,r){const s=xo(e,n,r,!0);vd(()=>{Dl(r[e],s)},t)}function xo(n,e,t=it,r=!1){if(t){const s=t[n]||(t[n]=[]),i=e.__weh||(e.__weh=(...a)=>{$n();const l=si(t),c=Wt(e,t,n,a);return l(),Hn(),c});return r?s.unshift(i):s.push(i),i}}const dn=n=>(e,t=it)=>{(!qs||n==="sp")&&xo(n,(...r)=>e(...r),t)},$_=dn("bm"),Hl=dn("m"),H_=dn("bu"),q_=dn("u"),W_=dn("bum"),vd=dn("um"),K_=dn("sp"),z_=dn("rtg"),G_=dn("rtc");function Q_(n,e=it){xo("ec",n,e)}const J_=Symbol.for("v-ndc");function Ed(n,e,t,r){let s;const i=t,a=se(n);if(a||Ne(n)){const l=a&&on(n);let c=!1;l&&(c=!At(n),n=Vo(n)),s=new Array(n.length);for(let h=0,d=n.length;h<d;h++)s[h]=e(c?nt(n[h]):n[h],h,void 0,i)}else if(typeof n=="number"){s=new Array(n);for(let l=0;l<n;l++)s[l]=e(l+1,l,void 0,i)}else if(Re(n))if(n[Symbol.iterator])s=Array.from(n,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(n);s=new Array(l.length);for(let c=0,h=l.length;c<h;c++){const d=l[c];s[c]=e(n[d],d,c,i)}}else s=[];return s}const Qa=n=>n?Hd(n)?Fo(n):Qa(n.parent):null,Ds=at(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Qa(n.parent),$root:n=>Qa(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Id(n),$forceUpdate:n=>n.f||(n.f=()=>{jl(n.update)}),$nextTick:n=>n.n||(n.n=hd.bind(n.proxy)),$watch:n=>vy.bind(n)}),Aa=(n,e)=>n!==Ie&&!n.__isScriptSetup&&ve(n,e),Y_={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:r,data:s,props:i,accessCache:a,type:l,appContext:c}=n;let h;if(e[0]!=="$"){const b=a[e];if(b!==void 0)switch(b){case 1:return r[e];case 2:return s[e];case 4:return t[e];case 3:return i[e]}else{if(Aa(r,e))return a[e]=1,r[e];if(s!==Ie&&ve(s,e))return a[e]=2,s[e];if((h=n.propsOptions[0])&&ve(h,e))return a[e]=3,i[e];if(t!==Ie&&ve(t,e))return a[e]=4,t[e];Ja&&(a[e]=0)}}const d=Ds[e];let g,E;if(d)return e==="$attrs"&&tt(n.attrs,"get",""),d(n);if((g=l.__cssModules)&&(g=g[e]))return g;if(t!==Ie&&ve(t,e))return a[e]=4,t[e];if(E=c.config.globalProperties,ve(E,e))return E[e]},set({_:n},e,t){const{data:r,setupState:s,ctx:i}=n;return Aa(s,e)?(s[e]=t,!0):r!==Ie&&ve(r,e)?(r[e]=t,!0):ve(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(i[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:s,propsOptions:i}},a){let l;return!!t[a]||n!==Ie&&ve(n,a)||Aa(e,a)||(l=i[0])&&ve(l,a)||ve(r,a)||ve(Ds,a)||ve(s.config.globalProperties,a)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:ve(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function xu(n){return se(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Ja=!0;function X_(n){const e=Id(n),t=n.proxy,r=n.ctx;Ja=!1,e.beforeCreate&&Mu(e.beforeCreate,n,"bc");const{data:s,computed:i,methods:a,watch:l,provide:c,inject:h,created:d,beforeMount:g,mounted:E,beforeUpdate:b,updated:k,activated:O,deactivated:N,beforeDestroy:K,beforeUnmount:G,destroyed:z,unmounted:q,render:oe,renderTracked:ye,renderTriggered:w,errorCaptured:m,serverPrefetch:_,expose:T,inheritAttrs:A,components:R,directives:y,filters:ct}=e;if(h&&Z_(h,r,null),a)for(const le in a){const me=a[le];ae(me)&&(r[le]=me.bind(t))}if(s){const le=s.call(t,t);Re(le)&&(n.data=Oo(le))}if(Ja=!0,i)for(const le in i){const me=i[le],St=ae(me)?me.bind(t,t):ae(me.get)?me.get.bind(t,t):Bt,Kn=!ae(me)&&ae(me.set)?me.set.bind(t):Bt,Gt=Kl({get:St,set:Kn});Object.defineProperty(r,le,{enumerable:!0,configurable:!0,get:()=>Gt.value,set:xe=>Gt.value=xe})}if(l)for(const le in l)Td(l[le],r,t,le);if(c){const le=ae(c)?c.call(t):c;Reflect.ownKeys(le).forEach(me=>{iy(me,le[me])})}d&&Mu(d,n,"c");function Se(le,me){se(me)?me.forEach(St=>le(St.bind(t))):me&&le(me.bind(t))}if(Se($_,g),Se(Hl,E),Se(H_,b),Se(q_,k),Se(U_,O),Se(B_,N),Se(Q_,m),Se(G_,ye),Se(z_,w),Se(W_,G),Se(vd,q),Se(K_,_),se(T))if(T.length){const le=n.exposed||(n.exposed={});T.forEach(me=>{Object.defineProperty(le,me,{get:()=>t[me],set:St=>t[me]=St})})}else n.exposed||(n.exposed={});oe&&n.render===Bt&&(n.render=oe),A!=null&&(n.inheritAttrs=A),R&&(n.components=R),y&&(n.directives=y),_&&md(n)}function Z_(n,e,t=Bt){se(n)&&(n=Ya(n));for(const r in n){const s=n[r];let i;Re(s)?"default"in s?i=Vs(s.from||r,s.default,!0):i=Vs(s.from||r):i=Vs(s),Pe(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function Mu(n,e,t){Wt(se(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function Td(n,e,t,r){let s=r.includes(".")?Md(t,r):()=>t[r];if(Ne(n)){const i=e[n];ae(i)&&$i(s,i)}else if(ae(n))$i(s,n.bind(t));else if(Re(n))if(se(n))n.forEach(i=>Td(i,e,t,r));else{const i=ae(n.handler)?n.handler.bind(t):e[n.handler];ae(i)&&$i(s,i,n)}}function Id(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=n.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!t&&!r?c=e:(c={},s.length&&s.forEach(h=>io(c,h,a,!0)),io(c,e,a)),Re(e)&&i.set(e,c),c}function io(n,e,t,r=!1){const{mixins:s,extends:i}=e;i&&io(n,i,t,!0),s&&s.forEach(a=>io(n,a,t,!0));for(const a in e)if(!(r&&a==="expose")){const l=ey[a]||t&&t[a];n[a]=l?l(n[a],e[a]):e[a]}return n}const ey={data:Lu,props:Fu,emits:Fu,methods:Ts,computed:Ts,beforeCreate:ht,created:ht,beforeMount:ht,mounted:ht,beforeUpdate:ht,updated:ht,beforeDestroy:ht,beforeUnmount:ht,destroyed:ht,unmounted:ht,activated:ht,deactivated:ht,errorCaptured:ht,serverPrefetch:ht,components:Ts,directives:Ts,watch:ny,provide:Lu,inject:ty};function Lu(n,e){return e?n?function(){return at(ae(n)?n.call(this,this):n,ae(e)?e.call(this,this):e)}:e:n}function ty(n,e){return Ts(Ya(n),Ya(e))}function Ya(n){if(se(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function ht(n,e){return n?[...new Set([].concat(n,e))]:e}function Ts(n,e){return n?at(Object.create(null),n,e):e}function Fu(n,e){return n?se(n)&&se(e)?[...new Set([...n,...e])]:at(Object.create(null),xu(n),xu(e??{})):e}function ny(n,e){if(!n)return e;if(!e)return n;const t=at(Object.create(null),n);for(const r in e)t[r]=ht(n[r],e[r]);return t}function wd(){return{app:null,config:{isNativeTag:qm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ry=0;function sy(n,e){return function(r,s=null){ae(r)||(r=at({},r)),s!=null&&!Re(s)&&(s=null);const i=wd(),a=new WeakSet,l=[];let c=!1;const h=i.app={_uid:ry++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Uy,get config(){return i.config},set config(d){},use(d,...g){return a.has(d)||(d&&ae(d.install)?(a.add(d),d.install(h,...g)):ae(d)&&(a.add(d),d(h,...g))),h},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),h},component(d,g){return g?(i.components[d]=g,h):i.components[d]},directive(d,g){return g?(i.directives[d]=g,h):i.directives[d]},mount(d,g,E){if(!c){const b=h._ceVNode||vt(r,s);return b.appContext=i,E===!0?E="svg":E===!1&&(E=void 0),n(b,d,E),c=!0,h._container=d,d.__vue_app__=h,Fo(b.component)}},onUnmount(d){l.push(d)},unmount(){c&&(Wt(l,h._instance,16),n(null,h._container),delete h._container.__vue_app__)},provide(d,g){return i.provides[d]=g,h},runWithContext(d){const g=ir;ir=h;try{return d()}finally{ir=g}}};return h}}let ir=null;function iy(n,e){if(it){let t=it.provides;const r=it.parent&&it.parent.provides;r===t&&(t=it.provides=Object.create(r)),t[n]=e}}function Vs(n,e,t=!1){const r=it||_t;if(r||ir){const s=ir?ir._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&ae(e)?e.call(r&&r.proxy):e}}function oy(){return!!(it||_t||ir)}const Ad={},bd=()=>Object.create(Ad),Rd=n=>Object.getPrototypeOf(n)===Ad;function ay(n,e,t,r=!1){const s={},i=bd();n.propsDefaults=Object.create(null),Sd(n,e,s,i);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=r?s:T_(s):n.type.props?n.props=s:n.props=i,n.attrs=i}function ly(n,e,t,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=n,l=ge(s),[c]=n.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=n.vnode.dynamicProps;for(let g=0;g<d.length;g++){let E=d[g];if(Mo(n.emitsOptions,E))continue;const b=e[E];if(c)if(ve(i,E))b!==i[E]&&(i[E]=b,h=!0);else{const k=Nn(E);s[k]=Xa(c,l,k,b,n,!1)}else b!==i[E]&&(i[E]=b,h=!0)}}}else{Sd(n,e,s,i)&&(h=!0);let d;for(const g in l)(!e||!ve(e,g)&&((d=pr(g))===g||!ve(e,d)))&&(c?t&&(t[g]!==void 0||t[d]!==void 0)&&(s[g]=Xa(c,l,g,void 0,n,!0)):delete s[g]);if(i!==l)for(const g in i)(!e||!ve(e,g))&&(delete i[g],h=!0)}h&&en(n.attrs,"set","")}function Sd(n,e,t,r){const[s,i]=n.propsOptions;let a=!1,l;if(e)for(let c in e){if(Ss(c))continue;const h=e[c];let d;s&&ve(s,d=Nn(c))?!i||!i.includes(d)?t[d]=h:(l||(l={}))[d]=h:Mo(n.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,a=!0)}if(i){const c=ge(t),h=l||Ie;for(let d=0;d<i.length;d++){const g=i[d];t[g]=Xa(s,c,g,h[g],n,!ve(h,g))}}return a}function Xa(n,e,t,r,s,i){const a=n[t];if(a!=null){const l=ve(a,"default");if(l&&r===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&ae(c)){const{propsDefaults:h}=s;if(t in h)r=h[t];else{const d=si(s);r=h[t]=c.call(null,e),d()}}else r=c;s.ce&&s.ce._setProp(t,r)}a[0]&&(i&&!l?r=!1:a[1]&&(r===""||r===pr(t))&&(r=!0))}return r}const cy=new WeakMap;function Pd(n,e,t=!1){const r=t?cy:e.propsCache,s=r.get(n);if(s)return s;const i=n.props,a={},l=[];let c=!1;if(!ae(n)){const d=g=>{c=!0;const[E,b]=Pd(g,e,!0);at(a,E),b&&l.push(...b)};!t&&e.mixins.length&&e.mixins.forEach(d),n.extends&&d(n.extends),n.mixins&&n.mixins.forEach(d)}if(!i&&!c)return Re(n)&&r.set(n,Nr),Nr;if(se(i))for(let d=0;d<i.length;d++){const g=Nn(i[d]);Uu(g)&&(a[g]=Ie)}else if(i)for(const d in i){const g=Nn(d);if(Uu(g)){const E=i[d],b=a[g]=se(E)||ae(E)?{type:E}:at({},E),k=b.type;let O=!1,N=!0;if(se(k))for(let K=0;K<k.length;++K){const G=k[K],z=ae(G)&&G.name;if(z==="Boolean"){O=!0;break}else z==="String"&&(N=!1)}else O=ae(k)&&k.name==="Boolean";b[0]=O,b[1]=N,(O||ve(b,"default"))&&l.push(g)}}const h=[a,l];return Re(n)&&r.set(n,h),h}function Uu(n){return n[0]!=="$"&&!Ss(n)}const Cd=n=>n[0]==="_"||n==="$stable",ql=n=>se(n)?n.map(Ft):[Ft(n)],uy=(n,e,t)=>{if(e._n)return e;const r=M_((...s)=>ql(e(...s)),t);return r._c=!1,r},kd=(n,e,t)=>{const r=n._ctx;for(const s in n){if(Cd(s))continue;const i=n[s];if(ae(i))e[s]=uy(s,i,r);else if(i!=null){const a=ql(i);e[s]=()=>a}}},Dd=(n,e)=>{const t=ql(e);n.slots.default=()=>t},Vd=(n,e,t)=>{for(const r in e)(t||r!=="_")&&(n[r]=e[r])},hy=(n,e,t)=>{const r=n.slots=bd();if(n.vnode.shapeFlag&32){const s=e._;s?(Vd(r,e,t),t&&Bf(r,"_",s,!0)):kd(e,r)}else e&&Dd(n,e)},fy=(n,e,t)=>{const{vnode:r,slots:s}=n;let i=!0,a=Ie;if(r.shapeFlag&32){const l=e._;l?t&&l===1?i=!1:Vd(s,e,t):(i=!e.$stable,kd(e,s)),a=e}else e&&(Dd(n,e),a={default:1});if(i)for(const l in s)!Cd(l)&&a[l]==null&&delete s[l]},mt=Ry;function dy(n){return py(n)}function py(n,e){const t=ko();t.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:l,createComment:c,setText:h,setElementText:d,parentNode:g,nextSibling:E,setScopeId:b=Bt,insertStaticContent:k}=n,O=(v,I,C,x=null,V=null,M=null,$=void 0,B=null,U=!!I.dynamicChildren)=>{if(v===I)return;v&&!Es(v,I)&&(x=Qt(v),xe(v,V,M,!0),v=null),I.patchFlag===-2&&(U=!1,I.dynamicChildren=null);const{type:L,ref:J,shapeFlag:H}=I;switch(L){case Lo:N(v,I,C,x);break;case ar:K(v,I,C,x);break;case Ra:v==null&&G(I,C,x,$);break;case Ct:R(v,I,C,x,V,M,$,B,U);break;default:H&1?oe(v,I,C,x,V,M,$,B,U):H&6?y(v,I,C,x,V,M,$,B,U):(H&64||H&128)&&L.process(v,I,C,x,V,M,$,B,U,Nt)}J!=null&&V&&so(J,v&&v.ref,M,I||v,!I)},N=(v,I,C,x)=>{if(v==null)r(I.el=l(I.children),C,x);else{const V=I.el=v.el;I.children!==v.children&&h(V,I.children)}},K=(v,I,C,x)=>{v==null?r(I.el=c(I.children||""),C,x):I.el=v.el},G=(v,I,C,x)=>{[v.el,v.anchor]=k(v.children,I,C,x,v.el,v.anchor)},z=({el:v,anchor:I},C,x)=>{let V;for(;v&&v!==I;)V=E(v),r(v,C,x),v=V;r(I,C,x)},q=({el:v,anchor:I})=>{let C;for(;v&&v!==I;)C=E(v),s(v),v=C;s(I)},oe=(v,I,C,x,V,M,$,B,U)=>{I.type==="svg"?$="svg":I.type==="math"&&($="mathml"),v==null?ye(I,C,x,V,M,$,B,U):_(v,I,V,M,$,B,U)},ye=(v,I,C,x,V,M,$,B)=>{let U,L;const{props:J,shapeFlag:H,transition:Q,dirs:te}=v;if(U=v.el=a(v.type,M,J&&J.is,J),H&8?d(U,v.children):H&16&&m(v.children,U,null,x,V,ba(v,M),$,B),te&&Zn(v,null,x,"created"),w(U,v,v.scopeId,$,x),J){for(const ce in J)ce!=="value"&&!Ss(ce)&&i(U,ce,null,J[ce],M,x);"value"in J&&i(U,"value",null,J.value,M),(L=J.onVnodeBeforeMount)&&xt(L,x,v)}te&&Zn(v,null,x,"beforeMount");const Y=gy(V,Q);Y&&Q.beforeEnter(U),r(U,I,C),((L=J&&J.onVnodeMounted)||Y||te)&&mt(()=>{L&&xt(L,x,v),Y&&Q.enter(U),te&&Zn(v,null,x,"mounted")},V)},w=(v,I,C,x,V)=>{if(C&&b(v,C),x)for(let M=0;M<x.length;M++)b(v,x[M]);if(V){let M=V.subTree;if(I===M||Fd(M.type)&&(M.ssContent===I||M.ssFallback===I)){const $=V.vnode;w(v,$,$.scopeId,$.slotScopeIds,V.parent)}}},m=(v,I,C,x,V,M,$,B,U=0)=>{for(let L=U;L<v.length;L++){const J=v[L]=B?In(v[L]):Ft(v[L]);O(null,J,I,C,x,V,M,$,B)}},_=(v,I,C,x,V,M,$)=>{const B=I.el=v.el;let{patchFlag:U,dynamicChildren:L,dirs:J}=I;U|=v.patchFlag&16;const H=v.props||Ie,Q=I.props||Ie;let te;if(C&&er(C,!1),(te=Q.onVnodeBeforeUpdate)&&xt(te,C,I,v),J&&Zn(I,v,C,"beforeUpdate"),C&&er(C,!0),(H.innerHTML&&Q.innerHTML==null||H.textContent&&Q.textContent==null)&&d(B,""),L?T(v.dynamicChildren,L,B,C,x,ba(I,V),M):$||me(v,I,B,null,C,x,ba(I,V),M,!1),U>0){if(U&16)A(B,H,Q,C,V);else if(U&2&&H.class!==Q.class&&i(B,"class",null,Q.class,V),U&4&&i(B,"style",H.style,Q.style,V),U&8){const Y=I.dynamicProps;for(let ce=0;ce<Y.length;ce++){const de=Y[ce],Qe=H[de],$e=Q[de];($e!==Qe||de==="value")&&i(B,de,Qe,$e,V,C)}}U&1&&v.children!==I.children&&d(B,I.children)}else!$&&L==null&&A(B,H,Q,C,V);((te=Q.onVnodeUpdated)||J)&&mt(()=>{te&&xt(te,C,I,v),J&&Zn(I,v,C,"updated")},x)},T=(v,I,C,x,V,M,$)=>{for(let B=0;B<I.length;B++){const U=v[B],L=I[B],J=U.el&&(U.type===Ct||!Es(U,L)||U.shapeFlag&70)?g(U.el):C;O(U,L,J,null,x,V,M,$,!0)}},A=(v,I,C,x,V)=>{if(I!==C){if(I!==Ie)for(const M in I)!Ss(M)&&!(M in C)&&i(v,M,I[M],null,V,x);for(const M in C){if(Ss(M))continue;const $=C[M],B=I[M];$!==B&&M!=="value"&&i(v,M,B,$,V,x)}"value"in C&&i(v,"value",I.value,C.value,V)}},R=(v,I,C,x,V,M,$,B,U)=>{const L=I.el=v?v.el:l(""),J=I.anchor=v?v.anchor:l("");let{patchFlag:H,dynamicChildren:Q,slotScopeIds:te}=I;te&&(B=B?B.concat(te):te),v==null?(r(L,C,x),r(J,C,x),m(I.children||[],C,J,V,M,$,B,U)):H>0&&H&64&&Q&&v.dynamicChildren?(T(v.dynamicChildren,Q,C,V,M,$,B),(I.key!=null||V&&I===V.subTree)&&Od(v,I,!0)):me(v,I,C,J,V,M,$,B,U)},y=(v,I,C,x,V,M,$,B,U)=>{I.slotScopeIds=B,v==null?I.shapeFlag&512?V.ctx.activate(I,C,x,$,U):ct(I,C,x,V,M,$,U):Ot(v,I,U)},ct=(v,I,C,x,V,M,$)=>{const B=v.component=Oy(v,x,V);if(_d(v)&&(B.ctx.renderer=Nt),Ny(B,!1,$),B.asyncDep){if(V&&V.registerDep(B,Se,$),!v.el){const U=B.subTree=vt(ar);K(null,U,I,C)}}else Se(B,v,I,C,V,M,$)},Ot=(v,I,C)=>{const x=I.component=v.component;if(Ay(v,I,C))if(x.asyncDep&&!x.asyncResolved){le(x,I,C);return}else x.next=I,x.update();else I.el=v.el,x.vnode=I},Se=(v,I,C,x,V,M,$)=>{const B=()=>{if(v.isMounted){let{next:H,bu:Q,u:te,parent:Y,vnode:ce}=v;{const Je=Nd(v);if(Je){H&&(H.el=ce.el,le(v,H,$)),Je.asyncDep.then(()=>{v.isUnmounted||B()});return}}let de=H,Qe;er(v,!1),H?(H.el=ce.el,le(v,H,$)):H=ce,Q&&ji(Q),(Qe=H.props&&H.props.onVnodeBeforeUpdate)&&xt(Qe,Y,H,ce),er(v,!0);const $e=ju(v),Et=v.subTree;v.subTree=$e,O(Et,$e,g(Et.el),Qt(Et),v,V,M),H.el=$e.el,de===null&&by(v,$e.el),te&&mt(te,V),(Qe=H.props&&H.props.onVnodeUpdated)&&mt(()=>xt(Qe,Y,H,ce),V)}else{let H;const{el:Q,props:te}=I,{bm:Y,m:ce,parent:de,root:Qe,type:$e}=v,Et=ks(I);er(v,!1),Y&&ji(Y),!Et&&(H=te&&te.onVnodeBeforeMount)&&xt(H,de,I),er(v,!0);{Qe.ce&&Qe.ce._injectChildStyle($e);const Je=v.subTree=ju(v);O(null,Je,C,x,v,V,M),I.el=Je.el}if(ce&&mt(ce,V),!Et&&(H=te&&te.onVnodeMounted)){const Je=I;mt(()=>xt(H,de,Je),V)}(I.shapeFlag&256||de&&ks(de.vnode)&&de.vnode.shapeFlag&256)&&v.a&&mt(v.a,V),v.isMounted=!0,I=C=x=null}};v.scope.on();const U=v.effect=new zf(B);v.scope.off();const L=v.update=U.run.bind(U),J=v.job=U.runIfDirty.bind(U);J.i=v,J.id=v.uid,U.scheduler=()=>jl(J),er(v,!0),L()},le=(v,I,C)=>{I.component=v;const x=v.vnode.props;v.vnode=I,v.next=null,ly(v,I.props,x,C),fy(v,I.children,C),$n(),Nu(v),Hn()},me=(v,I,C,x,V,M,$,B,U=!1)=>{const L=v&&v.children,J=v?v.shapeFlag:0,H=I.children,{patchFlag:Q,shapeFlag:te}=I;if(Q>0){if(Q&128){Kn(L,H,C,x,V,M,$,B,U);return}else if(Q&256){St(L,H,C,x,V,M,$,B,U);return}}te&8?(J&16&&Gn(L,V,M),H!==L&&d(C,H)):J&16?te&16?Kn(L,H,C,x,V,M,$,B,U):Gn(L,V,M,!0):(J&8&&d(C,""),te&16&&m(H,C,x,V,M,$,B,U))},St=(v,I,C,x,V,M,$,B,U)=>{v=v||Nr,I=I||Nr;const L=v.length,J=I.length,H=Math.min(L,J);let Q;for(Q=0;Q<H;Q++){const te=I[Q]=U?In(I[Q]):Ft(I[Q]);O(v[Q],te,C,null,V,M,$,B,U)}L>J?Gn(v,V,M,!0,!1,H):m(I,C,x,V,M,$,B,U,H)},Kn=(v,I,C,x,V,M,$,B,U)=>{let L=0;const J=I.length;let H=v.length-1,Q=J-1;for(;L<=H&&L<=Q;){const te=v[L],Y=I[L]=U?In(I[L]):Ft(I[L]);if(Es(te,Y))O(te,Y,C,null,V,M,$,B,U);else break;L++}for(;L<=H&&L<=Q;){const te=v[H],Y=I[Q]=U?In(I[Q]):Ft(I[Q]);if(Es(te,Y))O(te,Y,C,null,V,M,$,B,U);else break;H--,Q--}if(L>H){if(L<=Q){const te=Q+1,Y=te<J?I[te].el:x;for(;L<=Q;)O(null,I[L]=U?In(I[L]):Ft(I[L]),C,Y,V,M,$,B,U),L++}}else if(L>Q)for(;L<=H;)xe(v[L],V,M,!0),L++;else{const te=L,Y=L,ce=new Map;for(L=Y;L<=Q;L++){const He=I[L]=U?In(I[L]):Ft(I[L]);He.key!=null&&ce.set(He.key,L)}let de,Qe=0;const $e=Q-Y+1;let Et=!1,Je=0;const gn=new Array($e);for(L=0;L<$e;L++)gn[L]=0;for(L=te;L<=H;L++){const He=v[L];if(Qe>=$e){xe(He,V,M,!0);continue}let Tt;if(He.key!=null)Tt=ce.get(He.key);else for(de=Y;de<=Q;de++)if(gn[de-Y]===0&&Es(He,I[de])){Tt=de;break}Tt===void 0?xe(He,V,M,!0):(gn[Tt-Y]=L+1,Tt>=Je?Je=Tt:Et=!0,O(He,I[Tt],C,null,V,M,$,B,U),Qe++)}const os=Et?my(gn):Nr;for(de=os.length-1,L=$e-1;L>=0;L--){const He=Y+L,Tt=I[He],mi=He+1<J?I[He+1].el:x;gn[L]===0?O(null,Tt,C,mi,V,M,$,B,U):Et&&(de<0||L!==os[de]?Gt(Tt,C,mi,2):de--)}}},Gt=(v,I,C,x,V=null)=>{const{el:M,type:$,transition:B,children:U,shapeFlag:L}=v;if(L&6){Gt(v.component.subTree,I,C,x);return}if(L&128){v.suspense.move(I,C,x);return}if(L&64){$.move(v,I,C,Nt);return}if($===Ct){r(M,I,C);for(let H=0;H<U.length;H++)Gt(U[H],I,C,x);r(v.anchor,I,C);return}if($===Ra){z(v,I,C);return}if(x!==2&&L&1&&B)if(x===0)B.beforeEnter(M),r(M,I,C),mt(()=>B.enter(M),V);else{const{leave:H,delayLeave:Q,afterLeave:te}=B,Y=()=>r(M,I,C),ce=()=>{H(M,()=>{Y(),te&&te()})};Q?Q(M,Y,ce):ce()}else r(M,I,C)},xe=(v,I,C,x=!1,V=!1)=>{const{type:M,props:$,ref:B,children:U,dynamicChildren:L,shapeFlag:J,patchFlag:H,dirs:Q,cacheIndex:te}=v;if(H===-2&&(V=!1),B!=null&&so(B,null,C,v,!0),te!=null&&(I.renderCache[te]=void 0),J&256){I.ctx.deactivate(v);return}const Y=J&1&&Q,ce=!ks(v);let de;if(ce&&(de=$&&$.onVnodeBeforeUnmount)&&xt(de,I,v),J&6)zn(v.component,C,x);else{if(J&128){v.suspense.unmount(C,x);return}Y&&Zn(v,null,I,"beforeUnmount"),J&64?v.type.remove(v,I,C,Nt,x):L&&!L.hasOnce&&(M!==Ct||H>0&&H&64)?Gn(L,I,C,!1,!0):(M===Ct&&H&384||!V&&J&16)&&Gn(U,I,C),x&&Me(v)}(ce&&(de=$&&$.onVnodeUnmounted)||Y)&&mt(()=>{de&&xt(de,I,v),Y&&Zn(v,null,I,"unmounted")},C)},Me=v=>{const{type:I,el:C,anchor:x,transition:V}=v;if(I===Ct){na(C,x);return}if(I===Ra){q(v);return}const M=()=>{s(C),V&&!V.persisted&&V.afterLeave&&V.afterLeave()};if(v.shapeFlag&1&&V&&!V.persisted){const{leave:$,delayLeave:B}=V,U=()=>$(C,M);B?B(v.el,M,U):U()}else M()},na=(v,I)=>{let C;for(;v!==I;)C=E(v),s(v),v=C;s(I)},zn=(v,I,C)=>{const{bum:x,scope:V,job:M,subTree:$,um:B,m:U,a:L}=v;Bu(U),Bu(L),x&&ji(x),V.stop(),M&&(M.flags|=8,xe($,v,I,C)),B&&mt(B,I),mt(()=>{v.isUnmounted=!0},I),I&&I.pendingBranch&&!I.isUnmounted&&v.asyncDep&&!v.asyncResolved&&v.suspenseId===I.pendingId&&(I.deps--,I.deps===0&&I.resolve())},Gn=(v,I,C,x=!1,V=!1,M=0)=>{for(let $=M;$<v.length;$++)xe(v[$],I,C,x,V)},Qt=v=>{if(v.shapeFlag&6)return Qt(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const I=E(v.anchor||v.el),C=I&&I[L_];return C?E(C):I};let ss=!1;const gi=(v,I,C)=>{v==null?I._vnode&&xe(I._vnode,null,null,!0):O(I._vnode||null,v,I,null,null,null,C),I._vnode=v,ss||(ss=!0,Nu(),dd(),ss=!1)},Nt={p:O,um:xe,m:Gt,r:Me,mt:ct,mc:m,pc:me,pbc:T,n:Qt,o:n};return{render:gi,hydrate:void 0,createApp:sy(gi)}}function ba({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function er({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function gy(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Od(n,e,t=!1){const r=n.children,s=e.children;if(se(r)&&se(s))for(let i=0;i<r.length;i++){const a=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=In(s[i]),l.el=a.el),!t&&l.patchFlag!==-2&&Od(a,l)),l.type===Lo&&(l.el=a.el)}}function my(n){const e=n.slice(),t=[0];let r,s,i,a,l;const c=n.length;for(r=0;r<c;r++){const h=n[r];if(h!==0){if(s=t[t.length-1],n[s]<h){e[r]=s,t.push(r);continue}for(i=0,a=t.length-1;i<a;)l=i+a>>1,n[t[l]]<h?i=l+1:a=l;h<n[t[i]]&&(i>0&&(e[r]=t[i-1]),t[i]=r)}}for(i=t.length,a=t[i-1];i-- >0;)t[i]=a,a=e[a];return t}function Nd(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Nd(e)}function Bu(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const _y=Symbol.for("v-scx"),yy=()=>Vs(_y);function $i(n,e,t){return xd(n,e,t)}function xd(n,e,t=Ie){const{immediate:r,deep:s,flush:i,once:a}=t,l=at({},t),c=e&&r||!e&&i!=="post";let h;if(qs){if(i==="sync"){const b=yy();h=b.__watcherHandles||(b.__watcherHandles=[])}else if(!c){const b=()=>{};return b.stop=Bt,b.resume=Bt,b.pause=Bt,b}}const d=it;l.call=(b,k,O)=>Wt(b,d,k,O);let g=!1;i==="post"?l.scheduler=b=>{mt(b,d&&d.suspense)}:i!=="sync"&&(g=!0,l.scheduler=(b,k)=>{k?b():jl(b)}),l.augmentJob=b=>{e&&(b.flags|=4),g&&(b.flags|=2,d&&(b.id=d.uid,b.i=d))};const E=V_(n,e,l);return qs&&(h?h.push(E):c&&E()),E}function vy(n,e,t){const r=this.proxy,s=Ne(n)?n.includes(".")?Md(r,n):()=>r[n]:n.bind(r,r);let i;ae(e)?i=e:(i=e.handler,t=e);const a=si(this),l=xd(s,i.bind(r),t);return a(),l}function Md(n,e){const t=e.split(".");return()=>{let r=n;for(let s=0;s<t.length&&r;s++)r=r[t[s]];return r}}const Ey=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Nn(e)}Modifiers`]||n[`${pr(e)}Modifiers`];function Ty(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||Ie;let s=t;const i=e.startsWith("update:"),a=i&&Ey(r,e.slice(7));a&&(a.trim&&(s=t.map(d=>Ne(d)?d.trim():d)),a.number&&(s=t.map(qa)));let l,c=r[l=ya(e)]||r[l=ya(Nn(e))];!c&&i&&(c=r[l=ya(pr(e))]),c&&Wt(c,n,6,s);const h=r[l+"Once"];if(h){if(!n.emitted)n.emitted={};else if(n.emitted[l])return;n.emitted[l]=!0,Wt(h,n,6,s)}}function Ld(n,e,t=!1){const r=e.emitsCache,s=r.get(n);if(s!==void 0)return s;const i=n.emits;let a={},l=!1;if(!ae(n)){const c=h=>{const d=Ld(h,e,!0);d&&(l=!0,at(a,d))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!i&&!l?(Re(n)&&r.set(n,null),null):(se(i)?i.forEach(c=>a[c]=null):at(a,i),Re(n)&&r.set(n,a),a)}function Mo(n,e){return!n||!So(e)?!1:(e=e.slice(2).replace(/Once$/,""),ve(n,e[0].toLowerCase()+e.slice(1))||ve(n,pr(e))||ve(n,e))}function ju(n){const{type:e,vnode:t,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:l,emit:c,render:h,renderCache:d,props:g,data:E,setupState:b,ctx:k,inheritAttrs:O}=n,N=ro(n);let K,G;try{if(t.shapeFlag&4){const q=s||r,oe=q;K=Ft(h.call(oe,q,d,g,b,E,k)),G=l}else{const q=e;K=Ft(q.length>1?q(g,{attrs:l,slots:a,emit:c}):q(g,null)),G=e.props?l:Iy(l)}}catch(q){Os.length=0,No(q,n,1),K=vt(ar)}let z=K;if(G&&O!==!1){const q=Object.keys(G),{shapeFlag:oe}=z;q.length&&oe&7&&(i&&q.some(kl)&&(G=wy(G,i)),z=jr(z,G,!1,!0))}return t.dirs&&(z=jr(z,null,!1,!0),z.dirs=z.dirs?z.dirs.concat(t.dirs):t.dirs),t.transition&&$l(z,t.transition),K=z,ro(N),K}const Iy=n=>{let e;for(const t in n)(t==="class"||t==="style"||So(t))&&((e||(e={}))[t]=n[t]);return e},wy=(n,e)=>{const t={};for(const r in n)(!kl(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function Ay(n,e,t){const{props:r,children:s,component:i}=n,{props:a,children:l,patchFlag:c}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return r?$u(r,a,h):!!a;if(c&8){const d=e.dynamicProps;for(let g=0;g<d.length;g++){const E=d[g];if(a[E]!==r[E]&&!Mo(h,E))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===a?!1:r?a?$u(r,a,h):!0:!!a;return!1}function $u(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==n[i]&&!Mo(t,i))return!0}return!1}function by({vnode:n,parent:e},t){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.el=n.el),r===n)(n=e.vnode).el=t,e=e.parent;else break}}const Fd=n=>n.__isSuspense;function Ry(n,e){e&&e.pendingBranch?se(n)?e.effects.push(...n):e.effects.push(n):x_(n)}const Ct=Symbol.for("v-fgt"),Lo=Symbol.for("v-txt"),ar=Symbol.for("v-cmt"),Ra=Symbol.for("v-stc"),Os=[];let yt=null;function Fe(n=!1){Os.push(yt=n?null:[])}function Sy(){Os.pop(),yt=Os[Os.length-1]||null}let Hs=1;function Hu(n,e=!1){Hs+=n,n<0&&yt&&e&&(yt.hasOnce=!0)}function Ud(n){return n.dynamicChildren=Hs>0?yt||Nr:null,Sy(),Hs>0&&yt&&yt.push(n),n}function ot(n,e,t,r,s,i){return Ud(rt(n,e,t,r,s,i,!0))}function Za(n,e,t,r,s){return Ud(vt(n,e,t,r,s,!0))}function Bd(n){return n?n.__v_isVNode===!0:!1}function Es(n,e){return n.type===e.type&&n.key===e.key}const jd=({key:n})=>n??null,Hi=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Ne(n)||Pe(n)||ae(n)?{i:_t,r:n,k:e,f:!!t}:n:null);function rt(n,e=null,t=null,r=0,s=null,i=n===Ct?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&jd(e),ref:e&&Hi(e),scopeId:gd,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:_t};return l?(Wl(c,t),i&128&&n.normalize(c)):t&&(c.shapeFlag|=Ne(t)?8:16),Hs>0&&!a&&yt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&yt.push(c),c}const vt=Py;function Py(n,e=null,t=null,r=0,s=null,i=!1){if((!n||n===J_)&&(n=ar),Bd(n)){const l=jr(n,e,!0);return t&&Wl(l,t),Hs>0&&!i&&yt&&(l.shapeFlag&6?yt[yt.indexOf(n)]=l:yt.push(l)),l.patchFlag=-2,l}if(Fy(n)&&(n=n.__vccOpts),e){e=Cy(e);let{class:l,style:c}=e;l&&!Ne(l)&&(e.class=ni(l)),Re(c)&&(Ul(c)&&!se(c)&&(c=at({},c)),e.style=Do(c))}const a=Ne(n)?1:Fd(n)?128:F_(n)?64:Re(n)?4:ae(n)?2:0;return rt(n,e,t,r,s,a,i,!0)}function Cy(n){return n?Ul(n)||Rd(n)?at({},n):n:null}function jr(n,e,t=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:l,transition:c}=n,h=e?ky(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:n.type,props:h,key:h&&jd(h),ref:e&&e.ref?t&&i?se(i)?i.concat(Hi(e)):[i,Hi(e)]:Hi(e):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:l,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Ct?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:c,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&jr(n.ssContent),ssFallback:n.ssFallback&&jr(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return c&&r&&$l(d,c.clone(d)),d}function $d(n=" ",e=0){return vt(Lo,null,n,e)}function $r(n="",e=!1){return e?(Fe(),Za(ar,null,n)):vt(ar,null,n)}function Ft(n){return n==null||typeof n=="boolean"?vt(ar):se(n)?vt(Ct,null,n.slice()):Bd(n)?In(n):vt(Lo,null,String(n))}function In(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:jr(n)}function Wl(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(se(e))t=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Wl(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!Rd(e)?e._ctx=_t:s===3&&_t&&(_t.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else ae(e)?(e={default:e,_ctx:_t},t=32):(e=String(e),r&64?(t=16,e=[$d(e)]):t=8);n.children=e,n.shapeFlag|=t}function ky(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=ni([e.class,r.class]));else if(s==="style")e.style=Do([e.style,r.style]);else if(So(s)){const i=e[s],a=r[s];a&&i!==a&&!(se(i)&&i.includes(a))&&(e[s]=i?[].concat(i,a):a)}else s!==""&&(e[s]=r[s])}return e}function xt(n,e,t,r=null){Wt(n,e,7,[t,r])}const Dy=wd();let Vy=0;function Oy(n,e,t){const r=n.type,s=(e?e.appContext:n.appContext)||Dy,i={uid:Vy++,vnode:n,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new qf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Pd(r,s),emitsOptions:Ld(r,s),emit:null,emitted:null,propsDefaults:Ie,inheritAttrs:r.inheritAttrs,ctx:Ie,data:Ie,props:Ie,attrs:Ie,slots:Ie,refs:Ie,setupState:Ie,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Ty.bind(null,i),n.ce&&n.ce(i),i}let it=null,oo,el;{const n=ko(),e=(t,r)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};oo=e("__VUE_INSTANCE_SETTERS__",t=>it=t),el=e("__VUE_SSR_SETTERS__",t=>qs=t)}const si=n=>{const e=it;return oo(n),n.scope.on(),()=>{n.scope.off(),oo(e)}},qu=()=>{it&&it.scope.off(),oo(null)};function Hd(n){return n.vnode.shapeFlag&4}let qs=!1;function Ny(n,e=!1,t=!1){e&&el(e);const{props:r,children:s}=n.vnode,i=Hd(n);ay(n,r,i,e),hy(n,s,t);const a=i?xy(n,e):void 0;return e&&el(!1),a}function xy(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Y_);const{setup:r}=t;if(r){$n();const s=n.setupContext=r.length>1?Ly(n):null,i=si(n),a=ri(r,n,0,[n.props,s]),l=Mf(a);if(Hn(),i(),(l||n.sp)&&!ks(n)&&md(n),l){if(a.then(qu,qu),e)return a.then(c=>{Wu(n,c)}).catch(c=>{No(c,n,0)});n.asyncDep=a}else Wu(n,a)}else qd(n)}function Wu(n,e,t){ae(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Re(e)&&(n.setupState=ld(e)),qd(n)}function qd(n,e,t){const r=n.type;n.render||(n.render=r.render||Bt);{const s=si(n);$n();try{X_(n)}finally{Hn(),s()}}}const My={get(n,e){return tt(n,"get",""),n[e]}};function Ly(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,My),slots:n.slots,emit:n.emit,expose:e}}function Fo(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(ld(Bl(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Ds)return Ds[t](n)},has(e,t){return t in e||t in Ds}})):n.proxy}function Fy(n){return ae(n)&&"__vccOpts"in n}const Kl=(n,e)=>k_(n,e,qs),Uy="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let tl;const Ku=typeof window<"u"&&window.trustedTypes;if(Ku)try{tl=Ku.createPolicy("vue",{createHTML:n=>n})}catch{}const Wd=tl?n=>tl.createHTML(n):n=>n,By="http://www.w3.org/2000/svg",jy="http://www.w3.org/1998/Math/MathML",Zt=typeof document<"u"?document:null,zu=Zt&&Zt.createElement("template"),$y={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const s=e==="svg"?Zt.createElementNS(By,n):e==="mathml"?Zt.createElementNS(jy,n):t?Zt.createElement(n,{is:t}):Zt.createElement(n);return n==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:n=>Zt.createTextNode(n),createComment:n=>Zt.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Zt.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,s,i){const a=t?t.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===i||!(s=s.nextSibling)););else{zu.innerHTML=Wd(r==="svg"?`<svg>${n}</svg>`:r==="mathml"?`<math>${n}</math>`:n);const l=zu.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Hy=Symbol("_vtc");function qy(n,e,t){const r=n[Hy];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Gu=Symbol("_vod"),Wy=Symbol("_vsh"),Ky=Symbol(""),zy=/(^|;)\s*display\s*:/;function Gy(n,e,t){const r=n.style,s=Ne(t);let i=!1;if(t&&!s){if(e)if(Ne(e))for(const a of e.split(";")){const l=a.slice(0,a.indexOf(":")).trim();t[l]==null&&qi(r,l,"")}else for(const a in e)t[a]==null&&qi(r,a,"");for(const a in t)a==="display"&&(i=!0),qi(r,a,t[a])}else if(s){if(e!==t){const a=r[Ky];a&&(t+=";"+a),r.cssText=t,i=zy.test(t)}}else e&&n.removeAttribute("style");Gu in n&&(n[Gu]=i?r.display:"",n[Wy]&&(r.display="none"))}const Qu=/\s*!important$/;function qi(n,e,t){if(se(t))t.forEach(r=>qi(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=Qy(n,e);Qu.test(t)?n.setProperty(pr(r),t.replace(Qu,""),"important"):n[r]=t}}const Ju=["Webkit","Moz","ms"],Sa={};function Qy(n,e){const t=Sa[e];if(t)return t;let r=Nn(e);if(r!=="filter"&&r in n)return Sa[e]=r;r=Uf(r);for(let s=0;s<Ju.length;s++){const i=Ju[s]+r;if(i in n)return Sa[e]=i}return e}const Yu="http://www.w3.org/1999/xlink";function Xu(n,e,t,r,s,i=e_(e)){r&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Yu,e.slice(6,e.length)):n.setAttributeNS(Yu,e,t):t==null||i&&!jf(t)?n.removeAttribute(e):n.setAttribute(e,i?"":jn(t)?String(t):t)}function Zu(n,e,t,r,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Wd(t):t);return}const i=n.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?n.getAttribute("value")||"":n.value,c=t==null?n.type==="checkbox"?"on":"":String(t);(l!==c||!("_value"in n))&&(n.value=c),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=jf(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(s||e)}function Pr(n,e,t,r){n.addEventListener(e,t,r)}function Jy(n,e,t,r){n.removeEventListener(e,t,r)}const eh=Symbol("_vei");function Yy(n,e,t,r,s=null){const i=n[eh]||(n[eh]={}),a=i[e];if(r&&a)a.value=r;else{const[l,c]=Xy(e);if(r){const h=i[e]=tv(r,s);Pr(n,l,h,c)}else a&&(Jy(n,l,a,c),i[e]=void 0)}}const th=/(?:Once|Passive|Capture)$/;function Xy(n){let e;if(th.test(n)){e={};let r;for(;r=n.match(th);)n=n.slice(0,n.length-r[0].length),e[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):pr(n.slice(2)),e]}let Pa=0;const Zy=Promise.resolve(),ev=()=>Pa||(Zy.then(()=>Pa=0),Pa=Date.now());function tv(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;Wt(nv(r,t.value),e,5,[r])};return t.value=n,t.attached=ev(),t}function nv(n,e){if(se(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const nh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,rv=(n,e,t,r,s,i)=>{const a=s==="svg";e==="class"?qy(n,r,a):e==="style"?Gy(n,t,r):So(e)?kl(e)||Yy(n,e,t,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):sv(n,e,r,a))?(Zu(n,e,r),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Xu(n,e,r,a,i,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Ne(r))?Zu(n,Nn(e),r,i,e):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),Xu(n,e,r,a))};function sv(n,e,t,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in n&&nh(e)&&ae(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return nh(e)&&Ne(t)?!1:e in n}const rh=n=>{const e=n.props["onUpdate:modelValue"]||!1;return se(e)?t=>ji(e,t):e};function iv(n){n.target.composing=!0}function sh(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ca=Symbol("_assign"),ka={created(n,{modifiers:{lazy:e,trim:t,number:r}},s){n[Ca]=rh(s);const i=r||s.props&&s.props.type==="number";Pr(n,e?"change":"input",a=>{if(a.target.composing)return;let l=n.value;t&&(l=l.trim()),i&&(l=qa(l)),n[Ca](l)}),t&&Pr(n,"change",()=>{n.value=n.value.trim()}),e||(Pr(n,"compositionstart",iv),Pr(n,"compositionend",sh),Pr(n,"change",sh))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:r,trim:s,number:i}},a){if(n[Ca]=rh(a),n.composing)return;const l=(i||n.type==="number")&&!/^0\d/.test(n.value)?qa(n.value):n.value,c=e??"";l!==c&&(document.activeElement===n&&n.type!=="range"&&(r&&e===t||s&&n.value.trim()===c)||(n.value=c))}},ov=["ctrl","shift","alt","meta"],av={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>ov.some(t=>n[`${t}Key`]&&!e.includes(t))},Kd=(n,e)=>{const t=n._withMods||(n._withMods={}),r=e.join(".");return t[r]||(t[r]=(s,...i)=>{for(let a=0;a<e.length;a++){const l=av[e[a]];if(l&&l(s,e))return}return n(s,...i)})},lv=at({patchProp:rv},$y);let ih;function cv(){return ih||(ih=dy(lv))}const uv=(...n)=>{const e=cv().createApp(...n),{mount:t}=e;return e.mount=r=>{const s=fv(r);if(!s)return;const i=e._component;!ae(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=t(s,!1,hv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function hv(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function fv(n){return Ne(n)?document.querySelector(n):n}/*!
 * pinia v3.0.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let zd;const Uo=n=>zd=n,Gd=Symbol();function nl(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var Ns;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(Ns||(Ns={}));function dv(){const n=Wf(!0),e=n.run(()=>be({}));let t=[],r=[];const s=Bl({install(i){Uo(s),s._a=i,i.provide(Gd,s),i.config.globalProperties.$pinia=s,r.forEach(a=>t.push(a)),r=[]},use(i){return this._a?t.push(i):r.push(i),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return s}const Qd=()=>{};function oh(n,e,t,r=Qd){n.push(e);const s=()=>{const i=n.indexOf(e);i>-1&&(n.splice(i,1),r())};return!t&&Kf()&&t_(s),s}function Rr(n,...e){n.slice().forEach(t=>{t(...e)})}const pv=n=>n(),ah=Symbol(),Da=Symbol();function rl(n,e){n instanceof Map&&e instanceof Map?e.forEach((t,r)=>n.set(r,t)):n instanceof Set&&e instanceof Set&&e.forEach(n.add,n);for(const t in e){if(!e.hasOwnProperty(t))continue;const r=e[t],s=n[t];nl(s)&&nl(r)&&n.hasOwnProperty(t)&&!Pe(r)&&!on(r)?n[t]=rl(s,r):n[t]=r}return n}const gv=Symbol();function mv(n){return!nl(n)||!n.hasOwnProperty(gv)}const{assign:En}=Object;function _v(n){return!!(Pe(n)&&n.effect)}function yv(n,e,t,r){const{state:s,actions:i,getters:a}=e,l=t.state.value[n];let c;function h(){l||(t.state.value[n]=s?s():{});const d=b_(t.state.value[n]);return En(d,i,Object.keys(a||{}).reduce((g,E)=>(g[E]=Bl(Kl(()=>{Uo(t);const b=t._s.get(n);return a[E].call(b,b)})),g),{}))}return c=Jd(n,h,e,t,r,!0),c}function Jd(n,e,t={},r,s,i){let a;const l=En({actions:{}},t),c={deep:!0};let h,d,g=[],E=[],b;const k=r.state.value[n];!i&&!k&&(r.state.value[n]={}),be({});let O;function N(m){let _;h=d=!1,typeof m=="function"?(m(r.state.value[n]),_={type:Ns.patchFunction,storeId:n,events:b}):(rl(r.state.value[n],m),_={type:Ns.patchObject,payload:m,storeId:n,events:b});const T=O=Symbol();hd().then(()=>{O===T&&(h=!0)}),d=!0,Rr(g,_,r.state.value[n])}const K=i?function(){const{state:_}=t,T=_?_():{};this.$patch(A=>{En(A,T)})}:Qd;function G(){a.stop(),g=[],E=[],r._s.delete(n)}const z=(m,_="")=>{if(ah in m)return m[Da]=_,m;const T=function(){Uo(r);const A=Array.from(arguments),R=[],y=[];function ct(le){R.push(le)}function Ot(le){y.push(le)}Rr(E,{args:A,name:T[Da],store:oe,after:ct,onError:Ot});let Se;try{Se=m.apply(this&&this.$id===n?this:oe,A)}catch(le){throw Rr(y,le),le}return Se instanceof Promise?Se.then(le=>(Rr(R,le),le)).catch(le=>(Rr(y,le),Promise.reject(le))):(Rr(R,Se),Se)};return T[ah]=!0,T[Da]=_,T},q={_p:r,$id:n,$onAction:oh.bind(null,E),$patch:N,$reset:K,$subscribe(m,_={}){const T=oh(g,m,_.detached,()=>A()),A=a.run(()=>$i(()=>r.state.value[n],R=>{(_.flush==="sync"?d:h)&&m({storeId:n,type:Ns.direct,events:b},R)},En({},c,_)));return T},$dispose:G},oe=Oo(q);r._s.set(n,oe);const w=(r._a&&r._a.runWithContext||pv)(()=>r._e.run(()=>(a=Wf()).run(()=>e({action:z}))));for(const m in w){const _=w[m];if(Pe(_)&&!_v(_)||on(_))i||(k&&mv(_)&&(Pe(_)?_.value=k[m]:rl(_,k[m])),r.state.value[n][m]=_);else if(typeof _=="function"){const T=z(_,m);w[m]=T,l.actions[m]=_}}return En(oe,w),En(ge(oe),w),Object.defineProperty(oe,"$state",{get:()=>r.state.value[n],set:m=>{N(_=>{En(_,m)})}}),r._p.forEach(m=>{En(oe,a.run(()=>m({store:oe,app:r._a,pinia:r,options:l})))}),k&&i&&t.hydrate&&t.hydrate(oe.$state,k),h=!0,d=!0,oe}/*! #__NO_SIDE_EFFECTS__ */function zl(n,e,t){let r;const s=typeof e=="function";r=s?t:e;function i(a,l){const c=oy();return a=a||(c?Vs(Gd,null):null),a&&Uo(a),a=zd,a._s.has(n)||(s?Jd(n,e,r,a):yv(n,r,a)),a._s.get(n)}return i.$id=n,i}function vv(n){const e=ge(n),t={};for(const r in e){const s=e[r];s.effect?t[r]=Kl({get:()=>n[r],set(i){n[r]=i}}):(Pe(s)||on(s))&&(t[r]=P_(n,r))}return t}const Ev=()=>{};var lh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yd=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Tv=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],l=n[t++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Xd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,l=a?n[s+1]:0,c=s+2<n.length,h=c?n[s+2]:0,d=i>>2,g=(i&3)<<4|l>>4;let E=(l&15)<<2|h>>6,b=h&63;c||(b=64,a||(E=64)),r.push(t[d],t[g],t[E],t[b])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Yd(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Tv(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const g=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||l==null||h==null||g==null)throw new Iv;const E=i<<2|l>>4;if(r.push(E),h!==64){const b=l<<4&240|h>>2;if(r.push(b),g!==64){const k=h<<6&192|g;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Iv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const wv=function(n){const e=Yd(n);return Xd.encodeByteArray(e,!0)},ao=function(n){return wv(n).replace(/\./g,"")},Zd=function(n){try{return Xd.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Av(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bv=()=>Av().__FIREBASE_DEFAULTS__,Rv=()=>{if(typeof process>"u"||typeof lh>"u")return;const n=lh.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Sv=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Zd(n[1]);return e&&JSON.parse(e)},Bo=()=>{try{return Ev()||bv()||Rv()||Sv()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ep=n=>{var e,t;return(t=(e=Bo())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Pv=n=>{const e=ep(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},tp=()=>{var n;return(n=Bo())===null||n===void 0?void 0:n.config},np=n=>{var e;return(e=Bo())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kv(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ao(JSON.stringify(t)),ao(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Dv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(lt())}function Vv(){var n;const e=(n=Bo())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ov(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Nv(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function xv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Mv(){const n=lt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Lv(){return!Vv()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Fv(){try{return typeof indexedDB=="object"}catch{return!1}}function Uv(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bv="FirebaseError";class pn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Bv,Object.setPrototypeOf(this,pn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ii.prototype.create)}}class ii{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?jv(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new pn(s,l,r)}}function jv(n,e){return n.replace($v,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const $v=/\{\$([^}]+)}/g;function Hv(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function lr(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(ch(i)&&ch(a)){if(!lr(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function ch(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Is(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ws(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function qv(n,e){const t=new Wv(n,e);return t.subscribe.bind(t)}class Wv{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Kv(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Va),s.error===void 0&&(s.error=Va),s.complete===void 0&&(s.complete=Va);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Kv(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Va(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(n){return n&&n._delegate?n._delegate:n}class cr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Cv;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Qv(e))try{this.getOrInitializeService({instanceIdentifier:nr})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=nr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=nr){return this.instances.has(e)}getOptions(e=nr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Gv(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=nr){return this.component?this.component.multipleInstances?e:nr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Gv(n){return n===nr?void 0:n}function Qv(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new zv(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(he||(he={}));const Yv={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},Xv=he.INFO,Zv={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},eE=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Zv[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Gl{constructor(e){this.name=e,this._logLevel=Xv,this._logHandler=eE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Yv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}const tE=(n,e)=>e.some(t=>n instanceof t);let uh,hh;function nE(){return uh||(uh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function rE(){return hh||(hh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rp=new WeakMap,sl=new WeakMap,sp=new WeakMap,Oa=new WeakMap,Ql=new WeakMap;function sE(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Cn(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&rp.set(t,n)}).catch(()=>{}),Ql.set(e,n),e}function iE(n){if(sl.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});sl.set(n,e)}let il={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return sl.get(n);if(e==="objectStoreNames")return n.objectStoreNames||sp.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Cn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function oE(n){il=n(il)}function aE(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Na(this),e,...t);return sp.set(r,e.sort?e.sort():[e]),Cn(r)}:rE().includes(n)?function(...e){return n.apply(Na(this),e),Cn(rp.get(this))}:function(...e){return Cn(n.apply(Na(this),e))}}function lE(n){return typeof n=="function"?aE(n):(n instanceof IDBTransaction&&iE(n),tE(n,nE())?new Proxy(n,il):n)}function Cn(n){if(n instanceof IDBRequest)return sE(n);if(Oa.has(n))return Oa.get(n);const e=lE(n);return e!==n&&(Oa.set(n,e),Ql.set(e,n)),e}const Na=n=>Ql.get(n);function cE(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),l=Cn(a);return r&&a.addEventListener("upgradeneeded",c=>{r(Cn(a.result),c.oldVersion,c.newVersion,Cn(a.transaction),c)}),t&&a.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const uE=["get","getKey","getAll","getAllKeys","count"],hE=["put","add","delete","clear"],xa=new Map;function fh(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(xa.get(e))return xa.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=hE.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||uE.includes(t)))return;const i=async function(a,...l){const c=this.transaction(a,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[t](...l),s&&c.done]))[0]};return xa.set(e,i),i}oE(n=>({...n,get:(e,t,r)=>fh(e,t)||n.get(e,t,r),has:(e,t)=>!!fh(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(dE(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function dE(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ol="@firebase/app",dh="0.11.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn=new Gl("@firebase/app"),pE="@firebase/app-compat",gE="@firebase/analytics-compat",mE="@firebase/analytics",_E="@firebase/app-check-compat",yE="@firebase/app-check",vE="@firebase/auth",EE="@firebase/auth-compat",TE="@firebase/database",IE="@firebase/data-connect",wE="@firebase/database-compat",AE="@firebase/functions",bE="@firebase/functions-compat",RE="@firebase/installations",SE="@firebase/installations-compat",PE="@firebase/messaging",CE="@firebase/messaging-compat",kE="@firebase/performance",DE="@firebase/performance-compat",VE="@firebase/remote-config",OE="@firebase/remote-config-compat",NE="@firebase/storage",xE="@firebase/storage-compat",ME="@firebase/firestore",LE="@firebase/vertexai",FE="@firebase/firestore-compat",UE="firebase",BE="11.5.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const al="[DEFAULT]",jE={[ol]:"fire-core",[pE]:"fire-core-compat",[mE]:"fire-analytics",[gE]:"fire-analytics-compat",[yE]:"fire-app-check",[_E]:"fire-app-check-compat",[vE]:"fire-auth",[EE]:"fire-auth-compat",[TE]:"fire-rtdb",[IE]:"fire-data-connect",[wE]:"fire-rtdb-compat",[AE]:"fire-fn",[bE]:"fire-fn-compat",[RE]:"fire-iid",[SE]:"fire-iid-compat",[PE]:"fire-fcm",[CE]:"fire-fcm-compat",[kE]:"fire-perf",[DE]:"fire-perf-compat",[VE]:"fire-rc",[OE]:"fire-rc-compat",[NE]:"fire-gcs",[xE]:"fire-gcs-compat",[ME]:"fire-fst",[FE]:"fire-fst-compat",[LE]:"fire-vertex","fire-js":"fire-js",[UE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lo=new Map,$E=new Map,ll=new Map;function ph(n,e){try{n.container.addComponent(e)}catch(t){cn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Hr(n){const e=n.name;if(ll.has(e))return cn.debug(`There were multiple attempts to register component ${e}.`),!1;ll.set(e,n);for(const t of lo.values())ph(t,n);for(const t of $E.values())ph(t,n);return!0}function Jl(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function It(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},kn=new ii("app","Firebase",HE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new cr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw kn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr=BE;function ip(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:al,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw kn.create("bad-app-name",{appName:String(s)});if(t||(t=tp()),!t)throw kn.create("no-options");const i=lo.get(s);if(i){if(lr(t,i.options)&&lr(r,i.config))return i;throw kn.create("duplicate-app",{appName:s})}const a=new Jv(s);for(const c of ll.values())a.addComponent(c);const l=new qE(t,r,a);return lo.set(s,l),l}function op(n=al){const e=lo.get(n);if(!e&&n===al&&tp())return ip();if(!e)throw kn.create("no-app",{appName:n});return e}function Dn(n,e,t){var r;let s=(r=jE[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),cn.warn(l.join(" "));return}Hr(new cr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WE="firebase-heartbeat-database",KE=1,Ws="firebase-heartbeat-store";let Ma=null;function ap(){return Ma||(Ma=cE(WE,KE,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ws)}catch(t){console.warn(t)}}}}).catch(n=>{throw kn.create("idb-open",{originalErrorMessage:n.message})})),Ma}async function zE(n){try{const t=(await ap()).transaction(Ws),r=await t.objectStore(Ws).get(lp(n));return await t.done,r}catch(e){if(e instanceof pn)cn.warn(e.message);else{const t=kn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});cn.warn(t.message)}}}async function gh(n,e){try{const r=(await ap()).transaction(Ws,"readwrite");await r.objectStore(Ws).put(e,lp(n)),await r.done}catch(t){if(t instanceof pn)cn.warn(t.message);else{const r=kn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});cn.warn(r.message)}}}function lp(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GE=1024,QE=30;class JE{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new XE(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=mh();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>QE){const a=ZE(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){cn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=mh(),{heartbeatsToSend:r,unsentEntries:s}=YE(this._heartbeatsCache.heartbeats),i=ao(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return cn.warn(t),""}}}function mh(){return new Date().toISOString().substring(0,10)}function YE(n,e=GE){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),_h(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),_h(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class XE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Fv()?Uv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await zE(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return gh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return gh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function _h(n){return ao(JSON.stringify({version:2,heartbeats:n})).length}function ZE(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eT(n){Hr(new cr("platform-logger",e=>new fE(e),"PRIVATE")),Hr(new cr("heartbeat",e=>new JE(e),"PRIVATE")),Dn(ol,dh,n),Dn(ol,dh,"esm2017"),Dn("fire-js","")}eT("");var tT="firebase",nT="11.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dn(tT,nT,"app");function Yl(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function cp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const rT=cp,up=new ii("auth","Firebase",cp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const co=new Gl("@firebase/auth");function sT(n,...e){co.logLevel<=he.WARN&&co.warn(`Auth (${Yr}): ${n}`,...e)}function Wi(n,...e){co.logLevel<=he.ERROR&&co.error(`Auth (${Yr}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(n,...e){throw Xl(n,...e)}function jt(n,...e){return Xl(n,...e)}function hp(n,e,t){const r=Object.assign(Object.assign({},rT()),{[e]:t});return new ii("auth","Firebase",r).create(e,{appName:n.name})}function an(n){return hp(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Xl(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return up.create(n,...e)}function ee(n,e,...t){if(!n)throw Xl(e,...t)}function nn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Wi(e),new Error(e)}function un(n,e){n||nn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cl(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function iT(){return yh()==="http:"||yh()==="https:"}function yh(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(iT()||Nv()||"connection"in navigator)?navigator.onLine:!0}function aT(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,t){this.shortDelay=e,this.longDelay=t,un(t>e,"Short delay should be less than long delay!"),this.isMobile=Dv()||xv()}get(){return oT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zl(n,e){un(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;nn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;nn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;nn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cT=new ai(3e4,6e4);function qn(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Wn(n,e,t,r,s={}){return dp(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const l=oi(Object.assign({key:n.config.apiKey},a)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const h=Object.assign({method:e,headers:c},i);return Ov()||(h.referrerPolicy="no-referrer"),fp.fetch()(pp(n,n.config.apiHost,t,l),h)})}async function dp(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},lT),e);try{const s=new hT(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw xi(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw xi(n,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw xi(n,"email-already-in-use",a);if(c==="USER_DISABLED")throw xi(n,"user-disabled",a);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw hp(n,d,h);Vt(n,d)}}catch(s){if(s instanceof pn)throw s;Vt(n,"network-request-failed",{message:String(s)})}}async function li(n,e,t,r,s={}){const i=await Wn(n,e,t,r,s);return"mfaPendingCredential"in i&&Vt(n,"multi-factor-auth-required",{_serverResponse:i}),i}function pp(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?Zl(n.config,s):`${n.config.apiScheme}://${s}`}function uT(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class hT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(jt(this.auth,"network-request-failed")),cT.get())})}}function xi(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=jt(n,e,r);return s.customData._tokenResponse=t,s}function vh(n){return n!==void 0&&n.enterprise!==void 0}class fT{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return uT(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function dT(n,e){return Wn(n,"GET","/v2/recaptchaConfig",qn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pT(n,e){return Wn(n,"POST","/v1/accounts:delete",e)}async function gp(n,e){return Wn(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xs(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function gT(n,e=!1){const t=Rt(n),r=await t.getIdToken(e),s=ec(r);ee(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:xs(La(s.auth_time)),issuedAtTime:xs(La(s.iat)),expirationTime:xs(La(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function La(n){return Number(n)*1e3}function ec(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Wi("JWT malformed, contained fewer than 3 sections"),null;try{const s=Zd(t);return s?JSON.parse(s):(Wi("Failed to decode base64 JWT payload"),null)}catch(s){return Wi("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Eh(n){const e=ec(n);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ks(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof pn&&mT(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function mT({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _T{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=xs(this.lastLoginAt),this.creationTime=xs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uo(n){var e;const t=n.auth,r=await n.getIdToken(),s=await Ks(n,gp(t,{idToken:r}));ee(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?mp(i.providerUserInfo):[],l=vT(n.providerData,a),c=n.isAnonymous,h=!(n.email&&i.passwordHash)&&!(l!=null&&l.length),d=c?h:!1,g={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new ul(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(n,g)}async function yT(n){const e=Rt(n);await uo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function vT(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function mp(n){return n.map(e=>{var{providerId:t}=e,r=Yl(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ET(n,e){const t=await dp(n,{},async()=>{const r=oi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=pp(n,s,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",fp.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function TT(n,e){return Wn(n,"POST","/v2/accounts:revokeToken",qn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Eh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ee(e.length!==0,"internal-error");const t=Eh(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await ET(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new Lr;return r&&(ee(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(ee(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(ee(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Lr,this.toJSON())}_performRefresh(){return nn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(n,e){ee(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class rn{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=Yl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new _T(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ul(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Ks(this,this.stsTokenManager.getToken(this.auth,e));return ee(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return gT(this,e)}reload(){return yT(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new rn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await uo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(It(this.auth.app))return Promise.reject(an(this.auth));const e=await this.getIdToken();return await Ks(this,pT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,a,l,c,h,d;const g=(r=t.displayName)!==null&&r!==void 0?r:void 0,E=(s=t.email)!==null&&s!==void 0?s:void 0,b=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,k=(a=t.photoURL)!==null&&a!==void 0?a:void 0,O=(l=t.tenantId)!==null&&l!==void 0?l:void 0,N=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,K=(h=t.createdAt)!==null&&h!==void 0?h:void 0,G=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:z,emailVerified:q,isAnonymous:oe,providerData:ye,stsTokenManager:w}=t;ee(z&&w,e,"internal-error");const m=Lr.fromJSON(this.name,w);ee(typeof z=="string",e,"internal-error"),vn(g,e.name),vn(E,e.name),ee(typeof q=="boolean",e,"internal-error"),ee(typeof oe=="boolean",e,"internal-error"),vn(b,e.name),vn(k,e.name),vn(O,e.name),vn(N,e.name),vn(K,e.name),vn(G,e.name);const _=new rn({uid:z,auth:e,email:E,emailVerified:q,displayName:g,isAnonymous:oe,photoURL:k,phoneNumber:b,tenantId:O,stsTokenManager:m,createdAt:K,lastLoginAt:G});return ye&&Array.isArray(ye)&&(_.providerData=ye.map(T=>Object.assign({},T))),N&&(_._redirectEventId=N),_}static async _fromIdTokenResponse(e,t,r=!1){const s=new Lr;s.updateFromServerResponse(t);const i=new rn({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await uo(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];ee(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?mp(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Lr;l.updateFromIdToken(r);const c=new rn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new ul(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,h),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Th=new Map;function sn(n){un(n instanceof Function,"Expected a class definition");let e=Th.get(n);return e?(un(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Th.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}_p.type="NONE";const Ih=_p;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(n,e,t){return`firebase:${n}:${e}:${t}`}class Fr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ki(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ki("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?rn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Fr(sn(Ih),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||sn(Ih);const a=Ki(r,e.config.apiKey,e.name);let l=null;for(const h of t)try{const d=await h._get(a);if(d){const g=rn._fromJSON(e,d);h!==i&&(l=g),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Fr(i,e,r):(i=c[0],l&&await i._set(a,l.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new Fr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wh(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Tp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(yp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(wp(e))return"Blackberry";if(Ap(e))return"Webos";if(vp(e))return"Safari";if((e.includes("chrome/")||Ep(e))&&!e.includes("edge/"))return"Chrome";if(Ip(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function yp(n=lt()){return/firefox\//i.test(n)}function vp(n=lt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ep(n=lt()){return/crios\//i.test(n)}function Tp(n=lt()){return/iemobile/i.test(n)}function Ip(n=lt()){return/android/i.test(n)}function wp(n=lt()){return/blackberry/i.test(n)}function Ap(n=lt()){return/webos/i.test(n)}function tc(n=lt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function IT(n=lt()){var e;return tc(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function wT(){return Mv()&&document.documentMode===10}function bp(n=lt()){return tc(n)||Ip(n)||Ap(n)||wp(n)||/windows phone/i.test(n)||Tp(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rp(n,e=[]){let t;switch(n){case"Browser":t=wh(lt());break;case"Worker":t=`${wh(lt())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Yr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,l)=>{try{const c=e(i);a(c)}catch(c){l(c)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bT(n,e={}){return Wn(n,"GET","/v2/passwordPolicy",qn(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RT=6;class ST{constructor(e){var t,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:RT,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,a,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PT{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ah(this),this.idTokenSubscription=new Ah(this),this.beforeStateQueue=new AT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=up,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=sn(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Fr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await gp(this,{idToken:e}),r=await rn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(It(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await uo(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=aT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(It(this.app))return Promise.reject(an(this));const t=e?Rt(e):null;return t&&ee(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return It(this.app)?Promise.reject(an(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return It(this.app)?Promise.reject(an(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(sn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await bT(this),t=new ST(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ii("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await TT(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&sn(e)||this._popupRedirectResolver;ee(t,this,"argument-error"),this.redirectPersistenceManager=await Fr.create(this,[sn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ee(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,s);return()=>{a=!0,c()}}else{const c=e.addObserver(t);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Rp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(It(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&sT(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function mr(n){return Rt(n)}class Ah{constructor(e){this.auth=e,this.observer=null,this.addObserver=qv(t=>this.observer=t)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function CT(n){jo=n}function Sp(n){return jo.loadJS(n)}function kT(){return jo.recaptchaEnterpriseScript}function DT(){return jo.gapiScript}function VT(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class OT{constructor(){this.enterprise=new NT}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class NT{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const xT="recaptcha-enterprise",Pp="NO_RECAPTCHA";class MT{constructor(e){this.type=xT,this.auth=mr(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,l)=>{dT(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new fT(c);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,a(h.siteKey)}}).catch(c=>{l(c)})})}function s(i,a,l){const c=window.grecaptcha;vh(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(h=>{a(h)}).catch(()=>{a(Pp)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new OT().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{r(this.auth).then(l=>{if(!t&&vh(window.grecaptcha))s(l,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let c=kT();c.length!==0&&(c+=l),Sp(c).then(()=>{s(l,i,a)}).catch(h=>{a(h)})}}).catch(l=>{a(l)})})}}async function bh(n,e,t,r=!1,s=!1){const i=new MT(n);let a;if(s)a=Pp;else try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}const l=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,h=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:h,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:a}):Object.assign(l,{captchaResponse:a}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function hl(n,e,t,r,s){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await bh(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await bh(n,e,t,t==="getOobCode");return r(n,l)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LT(n,e){const t=Jl(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(lr(i,e??{}))return s;Vt(s,"already-initialized")}return t.initialize({options:e})}function FT(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(sn);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function UT(n,e,t){const r=mr(n);ee(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Cp(e),{host:a,port:l}=BT(e),c=l===null?"":`:${l}`,h={url:`${i}//${a}${c}/`},d=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ee(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ee(lr(h,r.config.emulator)&&lr(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,jT()}function Cp(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function BT(n){const e=Cp(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Rh(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:Rh(a)}}}function Rh(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function jT(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return nn("not implemented")}_getIdTokenResponse(e){return nn("not implemented")}_linkToIdToken(e,t){return nn("not implemented")}_getReauthenticationResolver(e){return nn("not implemented")}}async function $T(n,e){return Wn(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HT(n,e){return li(n,"POST","/v1/accounts:signInWithPassword",qn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qT(n,e){return li(n,"POST","/v1/accounts:signInWithEmailLink",qn(n,e))}async function WT(n,e){return li(n,"POST","/v1/accounts:signInWithEmailLink",qn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs extends nc{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new zs(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new zs(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return hl(e,t,"signInWithPassword",HT);case"emailLink":return qT(e,{email:this._email,oobCode:this._password});default:Vt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return hl(e,r,"signUpPassword",$T);case"emailLink":return WT(e,{idToken:t,email:this._email,oobCode:this._password});default:Vt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ur(n,e){return li(n,"POST","/v1/accounts:signInWithIdp",qn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KT="http://localhost";class ur extends nc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ur(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Vt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=Yl(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new ur(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Ur(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Ur(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ur(e,t)}buildRequest(){const e={requestUri:KT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=oi(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zT(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function GT(n){const e=Is(ws(n)).link,t=e?Is(ws(e)).deep_link_id:null,r=Is(ws(n)).deep_link_id;return(r?Is(ws(r)).link:null)||r||t||e||n}class rc{constructor(e){var t,r,s,i,a,l;const c=Is(ws(e)),h=(t=c.apiKey)!==null&&t!==void 0?t:null,d=(r=c.oobCode)!==null&&r!==void 0?r:null,g=zT((s=c.mode)!==null&&s!==void 0?s:null);ee(h&&d&&g,"argument-error"),this.apiKey=h,this.operation=g,this.code=d,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(a=c.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const t=GT(e);try{return new rc(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(){this.providerId=Xr.PROVIDER_ID}static credential(e,t){return zs._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=rc.parseLink(t);return ee(r,"argument-error"),zs._fromEmailAndCode(e,r.code,r.tenantId)}}Xr.PROVIDER_ID="password";Xr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Xr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci extends kp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn extends ci{constructor(){super("facebook.com")}static credential(e){return ur._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wn.credential(e.oauthAccessToken)}catch{return null}}}wn.FACEBOOK_SIGN_IN_METHOD="facebook.com";wn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An extends ci{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ur._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return An.credentialFromTaggedObject(e)}static credentialFromError(e){return An.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return An.credential(t,r)}catch{return null}}}An.GOOGLE_SIGN_IN_METHOD="google.com";An.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends ci{constructor(){super("github.com")}static credential(e){return ur._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bn.credential(e.oauthAccessToken)}catch{return null}}}bn.GITHUB_SIGN_IN_METHOD="github.com";bn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn extends ci{constructor(){super("twitter.com")}static credential(e,t){return ur._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Rn.credential(t,r)}catch{return null}}}Rn.TWITTER_SIGN_IN_METHOD="twitter.com";Rn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QT(n,e){return li(n,"POST","/v1/accounts:signUp",qn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await rn._fromIdTokenResponse(e,r,s),a=Sh(r);return new hr({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Sh(r);return new hr({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Sh(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho extends pn{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ho.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new ho(e,t,r,s)}}function Dp(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ho._fromErrorAndOperation(n,i,e,r):i})}async function JT(n,e,t=!1){const r=await Ks(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return hr._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YT(n,e,t=!1){const{auth:r}=n;if(It(r.app))return Promise.reject(an(r));const s="reauthenticate";try{const i=await Ks(n,Dp(r,s,e,n),t);ee(i.idToken,r,"internal-error");const a=ec(i.idToken);ee(a,r,"internal-error");const{sub:l}=a;return ee(n.uid===l,r,"user-mismatch"),hr._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Vt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vp(n,e,t=!1){if(It(n.app))return Promise.reject(an(n));const r="signIn",s=await Dp(n,r,e),i=await hr._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function XT(n,e){return Vp(mr(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Op(n){const e=mr(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function ZT(n,e,t){if(It(n.app))return Promise.reject(an(n));const r=mr(n),a=await hl(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",QT).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Op(n),c}),l=await hr._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(l.user),l}function eI(n,e,t){return It(n.app)?Promise.reject(an(n)):XT(Rt(n),Xr.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Op(n),r})}function tI(n,e,t,r){return Rt(n).onIdTokenChanged(e,t,r)}function nI(n,e,t){return Rt(n).beforeAuthStateChanged(e,t)}function rI(n){return Rt(n).signOut()}const fo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(fo,"1"),this.storage.removeItem(fo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sI=1e3,iI=10;class xp extends Np{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=bp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);wT()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,iI):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},sI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}xp.type="LOCAL";const oI=xp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp extends Np{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Mp.type="SESSION";const Lp=Mp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aI(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new $o(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async h=>h(t.origin,i)),c=await aI(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}$o.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sc(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,c)=>{const h=sc("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(g){const E=g;if(E.data.eventId===h)switch(E.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(E.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(){return window}function cI(n){$t().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fp(){return typeof $t().WorkerGlobalScope<"u"&&typeof $t().importScripts=="function"}async function uI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function hI(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function fI(){return Fp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Up="firebaseLocalStorageDb",dI=1,po="firebaseLocalStorage",Bp="fbase_key";class ui{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ho(n,e){return n.transaction([po],e?"readwrite":"readonly").objectStore(po)}function pI(){const n=indexedDB.deleteDatabase(Up);return new ui(n).toPromise()}function fl(){const n=indexedDB.open(Up,dI);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(po,{keyPath:Bp})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(po)?e(r):(r.close(),await pI(),e(await fl()))})})}async function Ph(n,e,t){const r=Ho(n,!0).put({[Bp]:e,value:t});return new ui(r).toPromise()}async function gI(n,e){const t=Ho(n,!1).get(e),r=await new ui(t).toPromise();return r===void 0?null:r.value}function Ch(n,e){const t=Ho(n,!0).delete(e);return new ui(t).toPromise()}const mI=800,_I=3;class jp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await fl(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>_I)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Fp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$o._getInstance(fI()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await uI(),!this.activeServiceWorker)return;this.sender=new lI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||hI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await fl();return await Ph(e,fo,"1"),await Ch(e,fo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ph(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>gI(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ch(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ho(s,!1).getAll();return new ui(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),mI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}jp.type="LOCAL";const yI=jp;new ai(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vI(n,e){return e?sn(e):(ee(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic extends nc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ur(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ur(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ur(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function EI(n){return Vp(n.auth,new ic(n),n.bypassAuthState)}function TI(n){const{auth:e,user:t}=n;return ee(t,e,"internal-error"),YT(t,new ic(n),n.bypassAuthState)}async function II(n){const{auth:e,user:t}=n;return ee(t,e,"internal-error"),JT(t,new ic(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return EI;case"linkViaPopup":case"linkViaRedirect":return II;case"reauthViaPopup":case"reauthViaRedirect":return TI;default:Vt(this.auth,"internal-error")}}resolve(e){un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wI=new ai(2e3,1e4);class Or extends $p{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Or.currentPopupAction&&Or.currentPopupAction.cancel(),Or.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){un(this.filter.length===1,"Popup operations only handle one event");const e=sc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(jt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(jt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Or.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(jt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,wI.get())};e()}}Or.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AI="pendingRedirect",zi=new Map;class bI extends $p{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=zi.get(this.auth._key());if(!e){try{const r=await RI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}zi.set(this.auth._key(),e)}return this.bypassAuthState||zi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function RI(n,e){const t=CI(e),r=PI(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function SI(n,e){zi.set(n._key(),e)}function PI(n){return sn(n._redirectPersistence)}function CI(n){return Ki(AI,n.config.apiKey,n.name)}async function kI(n,e,t=!1){if(It(n.app))return Promise.reject(an(n));const r=mr(n),s=vI(r,e),a=await new bI(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DI=10*60*1e3;class VI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!OI(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Hp(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(jt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=DI&&this.cachedEventUids.clear(),this.cachedEventUids.has(kh(e))}saveEventToCache(e){this.cachedEventUids.add(kh(e)),this.lastProcessedEventTime=Date.now()}}function kh(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Hp({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function OI(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Hp(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NI(n,e={}){return Wn(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,MI=/^https?/;async function LI(n){if(n.config.emulator)return;const{authorizedDomains:e}=await NI(n);for(const t of e)try{if(FI(t))return}catch{}Vt(n,"unauthorized-domain")}function FI(n){const e=cl(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!MI.test(t))return!1;if(xI.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UI=new ai(3e4,6e4);function Dh(){const n=$t().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function BI(n){return new Promise((e,t)=>{var r,s,i;function a(){Dh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Dh(),t(jt(n,"network-request-failed"))},timeout:UI.get()})}if(!((s=(r=$t().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=$t().gapi)===null||i===void 0)&&i.load)a();else{const l=VT("iframefcb");return $t()[l]=()=>{gapi.load?a():t(jt(n,"network-request-failed"))},Sp(`${DT()}?onload=${l}`).catch(c=>t(c))}}).catch(e=>{throw Gi=null,e})}let Gi=null;function jI(n){return Gi=Gi||BI(n),Gi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $I=new ai(5e3,15e3),HI="__/auth/iframe",qI="emulator/auth/iframe",WI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},KI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function zI(n){const e=n.config;ee(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Zl(e,qI):`https://${n.config.authDomain}/${HI}`,r={apiKey:e.apiKey,appName:n.name,v:Yr},s=KI.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${oi(r).slice(1)}`}async function GI(n){const e=await jI(n),t=$t().gapi;return ee(t,n,"internal-error"),e.open({where:document.body,url:zI(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:WI,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=jt(n,"network-request-failed"),l=$t().setTimeout(()=>{i(a)},$I.get());function c(){$t().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},JI=500,YI=600,XI="_blank",ZI="http://localhost";class Vh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ew(n,e,t,r=JI,s=YI){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},QI),{width:r.toString(),height:s.toString(),top:i,left:a}),h=lt().toLowerCase();t&&(l=Ep(h)?XI:t),yp(h)&&(e=e||ZI,c.scrollbars="yes");const d=Object.entries(c).reduce((E,[b,k])=>`${E}${b}=${k},`,"");if(IT(h)&&l!=="_self")return tw(e||"",l),new Vh(null);const g=window.open(e||"",l,d);ee(g,n,"popup-blocked");try{g.focus()}catch{}return new Vh(g)}function tw(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nw="__/auth/handler",rw="emulator/auth/handler",sw=encodeURIComponent("fac");async function Oh(n,e,t,r,s,i){ee(n.config.authDomain,n,"auth-domain-config-required"),ee(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Yr,eventId:s};if(e instanceof kp){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Hv(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,g]of Object.entries({}))a[d]=g}if(e instanceof ci){const d=e.getScopes().filter(g=>g!=="");d.length>0&&(a.scopes=d.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await n._getAppCheckToken(),h=c?`#${sw}=${encodeURIComponent(c)}`:"";return`${iw(n)}?${oi(l).slice(1)}${h}`}function iw({config:n}){return n.emulator?Zl(n,rw):`https://${n.authDomain}/${nw}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa="webStorageSupport";class ow{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Lp,this._completeRedirectFn=kI,this._overrideRedirectResult=SI}async _openPopup(e,t,r,s){var i;un((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await Oh(e,t,r,cl(),s);return ew(e,a,sc())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await Oh(e,t,r,cl(),s);return cI(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(un(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await GI(e),r=new VI(e);return t.register("authEvent",s=>(ee(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Fa,{type:Fa},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Fa];a!==void 0&&t(!!a),Vt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=LI(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return bp()||vp()||tc()}}const aw=ow;var Nh="@firebase/auth",xh="1.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cw(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function uw(n){Hr(new cr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;ee(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Rp(n)},h=new PT(r,s,i,c);return FT(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Hr(new cr("auth-internal",e=>{const t=mr(e.getProvider("auth").getImmediate());return(r=>new lw(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Dn(Nh,xh,cw(n)),Dn(Nh,xh,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hw=5*60,fw=np("authIdTokenMaxAge")||hw;let Mh=null;const dw=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>fw)return;const s=t==null?void 0:t.token;Mh!==s&&(Mh=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function pw(n=op()){const e=Jl(n,"auth");if(e.isInitialized())return e.getImmediate();const t=LT(n,{popupRedirectResolver:aw,persistence:[yI,oI,Lp]}),r=np("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=dw(i.toString());nI(t,a,()=>a(t.currentUser)),tI(t,l=>a(l))}}const s=ep("auth");return s&&UT(t,`http://${s}`),t}function gw(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}CT({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=jt("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",gw().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});uw("Browser");var Lh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Vn,qp;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,m){function _(){}_.prototype=m.prototype,w.D=m.prototype,w.prototype=new _,w.prototype.constructor=w,w.C=function(T,A,R){for(var y=Array(arguments.length-2),ct=2;ct<arguments.length;ct++)y[ct-2]=arguments[ct];return m.prototype[A].apply(T,y)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,m,_){_||(_=0);var T=Array(16);if(typeof m=="string")for(var A=0;16>A;++A)T[A]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(A=0;16>A;++A)T[A]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=w.g[0],_=w.g[1],A=w.g[2];var R=w.g[3],y=m+(R^_&(A^R))+T[0]+3614090360&4294967295;m=_+(y<<7&4294967295|y>>>25),y=R+(A^m&(_^A))+T[1]+3905402710&4294967295,R=m+(y<<12&4294967295|y>>>20),y=A+(_^R&(m^_))+T[2]+606105819&4294967295,A=R+(y<<17&4294967295|y>>>15),y=_+(m^A&(R^m))+T[3]+3250441966&4294967295,_=A+(y<<22&4294967295|y>>>10),y=m+(R^_&(A^R))+T[4]+4118548399&4294967295,m=_+(y<<7&4294967295|y>>>25),y=R+(A^m&(_^A))+T[5]+1200080426&4294967295,R=m+(y<<12&4294967295|y>>>20),y=A+(_^R&(m^_))+T[6]+2821735955&4294967295,A=R+(y<<17&4294967295|y>>>15),y=_+(m^A&(R^m))+T[7]+4249261313&4294967295,_=A+(y<<22&4294967295|y>>>10),y=m+(R^_&(A^R))+T[8]+1770035416&4294967295,m=_+(y<<7&4294967295|y>>>25),y=R+(A^m&(_^A))+T[9]+2336552879&4294967295,R=m+(y<<12&4294967295|y>>>20),y=A+(_^R&(m^_))+T[10]+4294925233&4294967295,A=R+(y<<17&4294967295|y>>>15),y=_+(m^A&(R^m))+T[11]+2304563134&4294967295,_=A+(y<<22&4294967295|y>>>10),y=m+(R^_&(A^R))+T[12]+1804603682&4294967295,m=_+(y<<7&4294967295|y>>>25),y=R+(A^m&(_^A))+T[13]+4254626195&4294967295,R=m+(y<<12&4294967295|y>>>20),y=A+(_^R&(m^_))+T[14]+2792965006&4294967295,A=R+(y<<17&4294967295|y>>>15),y=_+(m^A&(R^m))+T[15]+1236535329&4294967295,_=A+(y<<22&4294967295|y>>>10),y=m+(A^R&(_^A))+T[1]+4129170786&4294967295,m=_+(y<<5&4294967295|y>>>27),y=R+(_^A&(m^_))+T[6]+3225465664&4294967295,R=m+(y<<9&4294967295|y>>>23),y=A+(m^_&(R^m))+T[11]+643717713&4294967295,A=R+(y<<14&4294967295|y>>>18),y=_+(R^m&(A^R))+T[0]+3921069994&4294967295,_=A+(y<<20&4294967295|y>>>12),y=m+(A^R&(_^A))+T[5]+3593408605&4294967295,m=_+(y<<5&4294967295|y>>>27),y=R+(_^A&(m^_))+T[10]+38016083&4294967295,R=m+(y<<9&4294967295|y>>>23),y=A+(m^_&(R^m))+T[15]+3634488961&4294967295,A=R+(y<<14&4294967295|y>>>18),y=_+(R^m&(A^R))+T[4]+3889429448&4294967295,_=A+(y<<20&4294967295|y>>>12),y=m+(A^R&(_^A))+T[9]+568446438&4294967295,m=_+(y<<5&4294967295|y>>>27),y=R+(_^A&(m^_))+T[14]+3275163606&4294967295,R=m+(y<<9&4294967295|y>>>23),y=A+(m^_&(R^m))+T[3]+4107603335&4294967295,A=R+(y<<14&4294967295|y>>>18),y=_+(R^m&(A^R))+T[8]+1163531501&4294967295,_=A+(y<<20&4294967295|y>>>12),y=m+(A^R&(_^A))+T[13]+2850285829&4294967295,m=_+(y<<5&4294967295|y>>>27),y=R+(_^A&(m^_))+T[2]+4243563512&4294967295,R=m+(y<<9&4294967295|y>>>23),y=A+(m^_&(R^m))+T[7]+1735328473&4294967295,A=R+(y<<14&4294967295|y>>>18),y=_+(R^m&(A^R))+T[12]+2368359562&4294967295,_=A+(y<<20&4294967295|y>>>12),y=m+(_^A^R)+T[5]+4294588738&4294967295,m=_+(y<<4&4294967295|y>>>28),y=R+(m^_^A)+T[8]+2272392833&4294967295,R=m+(y<<11&4294967295|y>>>21),y=A+(R^m^_)+T[11]+1839030562&4294967295,A=R+(y<<16&4294967295|y>>>16),y=_+(A^R^m)+T[14]+4259657740&4294967295,_=A+(y<<23&4294967295|y>>>9),y=m+(_^A^R)+T[1]+2763975236&4294967295,m=_+(y<<4&4294967295|y>>>28),y=R+(m^_^A)+T[4]+1272893353&4294967295,R=m+(y<<11&4294967295|y>>>21),y=A+(R^m^_)+T[7]+4139469664&4294967295,A=R+(y<<16&4294967295|y>>>16),y=_+(A^R^m)+T[10]+3200236656&4294967295,_=A+(y<<23&4294967295|y>>>9),y=m+(_^A^R)+T[13]+681279174&4294967295,m=_+(y<<4&4294967295|y>>>28),y=R+(m^_^A)+T[0]+3936430074&4294967295,R=m+(y<<11&4294967295|y>>>21),y=A+(R^m^_)+T[3]+3572445317&4294967295,A=R+(y<<16&4294967295|y>>>16),y=_+(A^R^m)+T[6]+76029189&4294967295,_=A+(y<<23&4294967295|y>>>9),y=m+(_^A^R)+T[9]+3654602809&4294967295,m=_+(y<<4&4294967295|y>>>28),y=R+(m^_^A)+T[12]+3873151461&4294967295,R=m+(y<<11&4294967295|y>>>21),y=A+(R^m^_)+T[15]+530742520&4294967295,A=R+(y<<16&4294967295|y>>>16),y=_+(A^R^m)+T[2]+3299628645&4294967295,_=A+(y<<23&4294967295|y>>>9),y=m+(A^(_|~R))+T[0]+4096336452&4294967295,m=_+(y<<6&4294967295|y>>>26),y=R+(_^(m|~A))+T[7]+1126891415&4294967295,R=m+(y<<10&4294967295|y>>>22),y=A+(m^(R|~_))+T[14]+2878612391&4294967295,A=R+(y<<15&4294967295|y>>>17),y=_+(R^(A|~m))+T[5]+4237533241&4294967295,_=A+(y<<21&4294967295|y>>>11),y=m+(A^(_|~R))+T[12]+1700485571&4294967295,m=_+(y<<6&4294967295|y>>>26),y=R+(_^(m|~A))+T[3]+2399980690&4294967295,R=m+(y<<10&4294967295|y>>>22),y=A+(m^(R|~_))+T[10]+4293915773&4294967295,A=R+(y<<15&4294967295|y>>>17),y=_+(R^(A|~m))+T[1]+2240044497&4294967295,_=A+(y<<21&4294967295|y>>>11),y=m+(A^(_|~R))+T[8]+1873313359&4294967295,m=_+(y<<6&4294967295|y>>>26),y=R+(_^(m|~A))+T[15]+4264355552&4294967295,R=m+(y<<10&4294967295|y>>>22),y=A+(m^(R|~_))+T[6]+2734768916&4294967295,A=R+(y<<15&4294967295|y>>>17),y=_+(R^(A|~m))+T[13]+1309151649&4294967295,_=A+(y<<21&4294967295|y>>>11),y=m+(A^(_|~R))+T[4]+4149444226&4294967295,m=_+(y<<6&4294967295|y>>>26),y=R+(_^(m|~A))+T[11]+3174756917&4294967295,R=m+(y<<10&4294967295|y>>>22),y=A+(m^(R|~_))+T[2]+718787259&4294967295,A=R+(y<<15&4294967295|y>>>17),y=_+(R^(A|~m))+T[9]+3951481745&4294967295,w.g[0]=w.g[0]+m&4294967295,w.g[1]=w.g[1]+(A+(y<<21&4294967295|y>>>11))&4294967295,w.g[2]=w.g[2]+A&4294967295,w.g[3]=w.g[3]+R&4294967295}r.prototype.u=function(w,m){m===void 0&&(m=w.length);for(var _=m-this.blockSize,T=this.B,A=this.h,R=0;R<m;){if(A==0)for(;R<=_;)s(this,w,R),R+=this.blockSize;if(typeof w=="string"){for(;R<m;)if(T[A++]=w.charCodeAt(R++),A==this.blockSize){s(this,T),A=0;break}}else for(;R<m;)if(T[A++]=w[R++],A==this.blockSize){s(this,T),A=0;break}}this.h=A,this.o+=m},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var m=1;m<w.length-8;++m)w[m]=0;var _=8*this.o;for(m=w.length-8;m<w.length;++m)w[m]=_&255,_/=256;for(this.u(w),w=Array(16),m=_=0;4>m;++m)for(var T=0;32>T;T+=8)w[_++]=this.g[m]>>>T&255;return w};function i(w,m){var _=l;return Object.prototype.hasOwnProperty.call(_,w)?_[w]:_[w]=m(w)}function a(w,m){this.h=m;for(var _=[],T=!0,A=w.length-1;0<=A;A--){var R=w[A]|0;T&&R==m||(_[A]=R,T=!1)}this.g=_}var l={};function c(w){return-128<=w&&128>w?i(w,function(m){return new a([m|0],0>m?-1:0)}):new a([w|0],0>w?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return g;if(0>w)return N(h(-w));for(var m=[],_=1,T=0;w>=_;T++)m[T]=w/_|0,_*=4294967296;return new a(m,0)}function d(w,m){if(w.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(w.charAt(0)=="-")return N(d(w.substring(1),m));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=h(Math.pow(m,8)),T=g,A=0;A<w.length;A+=8){var R=Math.min(8,w.length-A),y=parseInt(w.substring(A,A+R),m);8>R?(R=h(Math.pow(m,R)),T=T.j(R).add(h(y))):(T=T.j(_),T=T.add(h(y)))}return T}var g=c(0),E=c(1),b=c(16777216);n=a.prototype,n.m=function(){if(O(this))return-N(this).m();for(var w=0,m=1,_=0;_<this.g.length;_++){var T=this.i(_);w+=(0<=T?T:4294967296+T)*m,m*=4294967296}return w},n.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(k(this))return"0";if(O(this))return"-"+N(this).toString(w);for(var m=h(Math.pow(w,6)),_=this,T="";;){var A=q(_,m).g;_=K(_,A.j(m));var R=((0<_.g.length?_.g[0]:_.h)>>>0).toString(w);if(_=A,k(_))return R+T;for(;6>R.length;)R="0"+R;T=R+T}},n.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function k(w){if(w.h!=0)return!1;for(var m=0;m<w.g.length;m++)if(w.g[m]!=0)return!1;return!0}function O(w){return w.h==-1}n.l=function(w){return w=K(this,w),O(w)?-1:k(w)?0:1};function N(w){for(var m=w.g.length,_=[],T=0;T<m;T++)_[T]=~w.g[T];return new a(_,~w.h).add(E)}n.abs=function(){return O(this)?N(this):this},n.add=function(w){for(var m=Math.max(this.g.length,w.g.length),_=[],T=0,A=0;A<=m;A++){var R=T+(this.i(A)&65535)+(w.i(A)&65535),y=(R>>>16)+(this.i(A)>>>16)+(w.i(A)>>>16);T=y>>>16,R&=65535,y&=65535,_[A]=y<<16|R}return new a(_,_[_.length-1]&-2147483648?-1:0)};function K(w,m){return w.add(N(m))}n.j=function(w){if(k(this)||k(w))return g;if(O(this))return O(w)?N(this).j(N(w)):N(N(this).j(w));if(O(w))return N(this.j(N(w)));if(0>this.l(b)&&0>w.l(b))return h(this.m()*w.m());for(var m=this.g.length+w.g.length,_=[],T=0;T<2*m;T++)_[T]=0;for(T=0;T<this.g.length;T++)for(var A=0;A<w.g.length;A++){var R=this.i(T)>>>16,y=this.i(T)&65535,ct=w.i(A)>>>16,Ot=w.i(A)&65535;_[2*T+2*A]+=y*Ot,G(_,2*T+2*A),_[2*T+2*A+1]+=R*Ot,G(_,2*T+2*A+1),_[2*T+2*A+1]+=y*ct,G(_,2*T+2*A+1),_[2*T+2*A+2]+=R*ct,G(_,2*T+2*A+2)}for(T=0;T<m;T++)_[T]=_[2*T+1]<<16|_[2*T];for(T=m;T<2*m;T++)_[T]=0;return new a(_,0)};function G(w,m){for(;(w[m]&65535)!=w[m];)w[m+1]+=w[m]>>>16,w[m]&=65535,m++}function z(w,m){this.g=w,this.h=m}function q(w,m){if(k(m))throw Error("division by zero");if(k(w))return new z(g,g);if(O(w))return m=q(N(w),m),new z(N(m.g),N(m.h));if(O(m))return m=q(w,N(m)),new z(N(m.g),m.h);if(30<w.g.length){if(O(w)||O(m))throw Error("slowDivide_ only works with positive integers.");for(var _=E,T=m;0>=T.l(w);)_=oe(_),T=oe(T);var A=ye(_,1),R=ye(T,1);for(T=ye(T,2),_=ye(_,2);!k(T);){var y=R.add(T);0>=y.l(w)&&(A=A.add(_),R=y),T=ye(T,1),_=ye(_,1)}return m=K(w,A.j(m)),new z(A,m)}for(A=g;0<=w.l(m);){for(_=Math.max(1,Math.floor(w.m()/m.m())),T=Math.ceil(Math.log(_)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),R=h(_),y=R.j(m);O(y)||0<y.l(w);)_-=T,R=h(_),y=R.j(m);k(R)&&(R=E),A=A.add(R),w=K(w,y)}return new z(A,w)}n.A=function(w){return q(this,w).h},n.and=function(w){for(var m=Math.max(this.g.length,w.g.length),_=[],T=0;T<m;T++)_[T]=this.i(T)&w.i(T);return new a(_,this.h&w.h)},n.or=function(w){for(var m=Math.max(this.g.length,w.g.length),_=[],T=0;T<m;T++)_[T]=this.i(T)|w.i(T);return new a(_,this.h|w.h)},n.xor=function(w){for(var m=Math.max(this.g.length,w.g.length),_=[],T=0;T<m;T++)_[T]=this.i(T)^w.i(T);return new a(_,this.h^w.h)};function oe(w){for(var m=w.g.length+1,_=[],T=0;T<m;T++)_[T]=w.i(T)<<1|w.i(T-1)>>>31;return new a(_,w.h)}function ye(w,m){var _=m>>5;m%=32;for(var T=w.g.length-_,A=[],R=0;R<T;R++)A[R]=0<m?w.i(R+_)>>>m|w.i(R+_+1)<<32-m:w.i(R+_);return new a(A,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,qp=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=d,Vn=a}).apply(typeof Lh<"u"?Lh:typeof self<"u"?self:typeof window<"u"?window:{});var Mi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wp,As,Kp,Qi,dl,zp,Gp,Qp;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,f){return o==Array.prototype||o==Object.prototype||(o[u]=f.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Mi=="object"&&Mi];for(var u=0;u<o.length;++u){var f=o[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=t(this);function s(o,u){if(u)e:{var f=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var S=o[p];if(!(S in f))break e;f=f[S]}o=o[o.length-1],p=f[o],u=u(p),u!=p&&u!=null&&e(f,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var f=0,p=!1,S={next:function(){if(!p&&f<o.length){var P=f++;return{value:u(P,o[P]),done:!1}}return p=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function d(o,u,f){return o.call.apply(o.bind,arguments)}function g(o,u,f){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,p),o.apply(u,S)}}return function(){return o.apply(u,arguments)}}function E(o,u,f){return E=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:g,E.apply(null,arguments)}function b(o,u){var f=Array.prototype.slice.call(arguments,1);return function(){var p=f.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function k(o,u){function f(){}f.prototype=u.prototype,o.aa=u.prototype,o.prototype=new f,o.prototype.constructor=o,o.Qb=function(p,S,P){for(var j=Array(arguments.length-2),Te=2;Te<arguments.length;Te++)j[Te-2]=arguments[Te];return u.prototype[S].apply(p,j)}}function O(o){const u=o.length;if(0<u){const f=Array(u);for(let p=0;p<u;p++)f[p]=o[p];return f}return[]}function N(o,u){for(let f=1;f<arguments.length;f++){const p=arguments[f];if(c(p)){const S=o.length||0,P=p.length||0;o.length=S+P;for(let j=0;j<P;j++)o[S+j]=p[j]}else o.push(p)}}class K{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function G(o){return/^[\s\xa0]*$/.test(o)}function z(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function q(o){return q[" "](o),o}q[" "]=function(){};var oe=z().indexOf("Gecko")!=-1&&!(z().toLowerCase().indexOf("webkit")!=-1&&z().indexOf("Edge")==-1)&&!(z().indexOf("Trident")!=-1||z().indexOf("MSIE")!=-1)&&z().indexOf("Edge")==-1;function ye(o,u,f){for(const p in o)u.call(f,o[p],p,o)}function w(o,u){for(const f in o)u.call(void 0,o[f],f,o)}function m(o){const u={};for(const f in o)u[f]=o[f];return u}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,u){let f,p;for(let S=1;S<arguments.length;S++){p=arguments[S];for(f in p)o[f]=p[f];for(let P=0;P<_.length;P++)f=_[P],Object.prototype.hasOwnProperty.call(p,f)&&(o[f]=p[f])}}function A(o){var u=1;o=o.split(":");const f=[];for(;0<u&&o.length;)f.push(o.shift()),u--;return o.length&&f.push(o.join(":")),f}function R(o){l.setTimeout(()=>{throw o},0)}function y(){var o=St;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class ct{constructor(){this.h=this.g=null}add(u,f){const p=Ot.get();p.set(u,f),this.h?this.h.next=p:this.g=p,this.h=p}}var Ot=new K(()=>new Se,o=>o.reset());class Se{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let le,me=!1,St=new ct,Kn=()=>{const o=l.Promise.resolve(void 0);le=()=>{o.then(Gt)}};var Gt=()=>{for(var o;o=y();){try{o.h.call(o.g)}catch(f){R(f)}var u=Ot;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}me=!1};function xe(){this.s=this.s,this.C=this.C}xe.prototype.s=!1,xe.prototype.ma=function(){this.s||(this.s=!0,this.N())},xe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Me(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}Me.prototype.h=function(){this.defaultPrevented=!0};var na=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};l.addEventListener("test",f,u),l.removeEventListener("test",f,u)}catch{}return o}();function zn(o,u){if(Me.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var f=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(oe){e:{try{q(u.nodeName);var S=!0;break e}catch{}S=!1}S||(u=null)}}else f=="mouseover"?u=o.fromElement:f=="mouseout"&&(u=o.toElement);this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Gn[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&zn.aa.h.call(this)}}k(zn,Me);var Gn={2:"touch",3:"pen",4:"mouse"};zn.prototype.h=function(){zn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Qt="closure_listenable_"+(1e6*Math.random()|0),ss=0;function gi(o,u,f,p,S){this.listener=o,this.proxy=null,this.src=u,this.type=f,this.capture=!!p,this.ha=S,this.key=++ss,this.da=this.fa=!1}function Nt(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function is(o){this.src=o,this.g={},this.h=0}is.prototype.add=function(o,u,f,p,S){var P=o.toString();o=this.g[P],o||(o=this.g[P]=[],this.h++);var j=I(o,u,p,S);return-1<j?(u=o[j],f||(u.fa=!1)):(u=new gi(u,this.src,P,!!p,S),u.fa=f,o.push(u)),u};function v(o,u){var f=u.type;if(f in o.g){var p=o.g[f],S=Array.prototype.indexOf.call(p,u,void 0),P;(P=0<=S)&&Array.prototype.splice.call(p,S,1),P&&(Nt(u),o.g[f].length==0&&(delete o.g[f],o.h--))}}function I(o,u,f,p){for(var S=0;S<o.length;++S){var P=o[S];if(!P.da&&P.listener==u&&P.capture==!!f&&P.ha==p)return S}return-1}var C="closure_lm_"+(1e6*Math.random()|0),x={};function V(o,u,f,p,S){if(Array.isArray(u)){for(var P=0;P<u.length;P++)V(o,u[P],f,p,S);return null}return f=te(f),o&&o[Qt]?o.K(u,f,h(p)?!!p.capture:!1,S):M(o,u,f,!1,p,S)}function M(o,u,f,p,S,P){if(!u)throw Error("Invalid event type");var j=h(S)?!!S.capture:!!S,Te=H(o);if(Te||(o[C]=Te=new is(o)),f=Te.add(u,f,p,j,P),f.proxy)return f;if(p=$(),f.proxy=p,p.src=o,p.listener=f,o.addEventListener)na||(S=j),S===void 0&&(S=!1),o.addEventListener(u.toString(),p,S);else if(o.attachEvent)o.attachEvent(L(u.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return f}function $(){function o(f){return u.call(o.src,o.listener,f)}const u=J;return o}function B(o,u,f,p,S){if(Array.isArray(u))for(var P=0;P<u.length;P++)B(o,u[P],f,p,S);else p=h(p)?!!p.capture:!!p,f=te(f),o&&o[Qt]?(o=o.i,u=String(u).toString(),u in o.g&&(P=o.g[u],f=I(P,f,p,S),-1<f&&(Nt(P[f]),Array.prototype.splice.call(P,f,1),P.length==0&&(delete o.g[u],o.h--)))):o&&(o=H(o))&&(u=o.g[u.toString()],o=-1,u&&(o=I(u,f,p,S)),(f=-1<o?u[o]:null)&&U(f))}function U(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[Qt])v(u.i,o);else{var f=o.type,p=o.proxy;u.removeEventListener?u.removeEventListener(f,p,o.capture):u.detachEvent?u.detachEvent(L(f),p):u.addListener&&u.removeListener&&u.removeListener(p),(f=H(u))?(v(f,o),f.h==0&&(f.src=null,u[C]=null)):Nt(o)}}}function L(o){return o in x?x[o]:x[o]="on"+o}function J(o,u){if(o.da)o=!0;else{u=new zn(u,this);var f=o.listener,p=o.ha||o.src;o.fa&&U(o),o=f.call(p,u)}return o}function H(o){return o=o[C],o instanceof is?o:null}var Q="__closure_events_fn_"+(1e9*Math.random()>>>0);function te(o){return typeof o=="function"?o:(o[Q]||(o[Q]=function(u){return o.handleEvent(u)}),o[Q])}function Y(){xe.call(this),this.i=new is(this),this.M=this,this.F=null}k(Y,xe),Y.prototype[Qt]=!0,Y.prototype.removeEventListener=function(o,u,f,p){B(this,o,u,f,p)};function ce(o,u){var f,p=o.F;if(p)for(f=[];p;p=p.F)f.push(p);if(o=o.M,p=u.type||u,typeof u=="string")u=new Me(u,o);else if(u instanceof Me)u.target=u.target||o;else{var S=u;u=new Me(p,o),T(u,S)}if(S=!0,f)for(var P=f.length-1;0<=P;P--){var j=u.g=f[P];S=de(j,p,!0,u)&&S}if(j=u.g=o,S=de(j,p,!0,u)&&S,S=de(j,p,!1,u)&&S,f)for(P=0;P<f.length;P++)j=u.g=f[P],S=de(j,p,!1,u)&&S}Y.prototype.N=function(){if(Y.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var f=o.g[u],p=0;p<f.length;p++)Nt(f[p]);delete o.g[u],o.h--}}this.F=null},Y.prototype.K=function(o,u,f,p){return this.i.add(String(o),u,!1,f,p)},Y.prototype.L=function(o,u,f,p){return this.i.add(String(o),u,!0,f,p)};function de(o,u,f,p){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var S=!0,P=0;P<u.length;++P){var j=u[P];if(j&&!j.da&&j.capture==f){var Te=j.listener,qe=j.ha||j.src;j.fa&&v(o.i,j),S=Te.call(qe,p)!==!1&&S}}return S&&!p.defaultPrevented}function Qe(o,u,f){if(typeof o=="function")f&&(o=E(o,f));else if(o&&typeof o.handleEvent=="function")o=E(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(o,u||0)}function $e(o){o.g=Qe(()=>{o.g=null,o.i&&(o.i=!1,$e(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Et extends xe{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:$e(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Je(o){xe.call(this),this.h=o,this.g={}}k(Je,xe);var gn=[];function os(o){ye(o.g,function(u,f){this.g.hasOwnProperty(f)&&U(u)},o),o.g={}}Je.prototype.N=function(){Je.aa.N.call(this),os(this)},Je.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var He=l.JSON.stringify,Tt=l.JSON.parse,mi=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function ra(){}ra.prototype.h=null;function Bc(o){return o.h||(o.h=o.i())}function jc(){}var as={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function sa(){Me.call(this,"d")}k(sa,Me);function ia(){Me.call(this,"c")}k(ia,Me);var Qn={},$c=null;function _i(){return $c=$c||new Y}Qn.La="serverreachability";function Hc(o){Me.call(this,Qn.La,o)}k(Hc,Me);function ls(o){const u=_i();ce(u,new Hc(u))}Qn.STAT_EVENT="statevent";function qc(o,u){Me.call(this,Qn.STAT_EVENT,o),this.stat=u}k(qc,Me);function ut(o){const u=_i();ce(u,new qc(u,o))}Qn.Ma="timingevent";function Wc(o,u){Me.call(this,Qn.Ma,o),this.size=u}k(Wc,Me);function cs(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function us(){this.g=!0}us.prototype.xa=function(){this.g=!1};function Tm(o,u,f,p,S,P){o.info(function(){if(o.g)if(P)for(var j="",Te=P.split("&"),qe=0;qe<Te.length;qe++){var _e=Te[qe].split("=");if(1<_e.length){var Ye=_e[0];_e=_e[1];var Xe=Ye.split("_");j=2<=Xe.length&&Xe[1]=="type"?j+(Ye+"="+_e+"&"):j+(Ye+"=redacted&")}}else j=null;else j=P;return"XMLHTTP REQ ("+p+") [attempt "+S+"]: "+u+`
`+f+`
`+j})}function Im(o,u,f,p,S,P,j){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+S+"]: "+u+`
`+f+`
`+P+" "+j})}function Tr(o,u,f,p){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+Am(o,f)+(p?" "+p:"")})}function wm(o,u){o.info(function(){return"TIMEOUT: "+u})}us.prototype.info=function(){};function Am(o,u){if(!o.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(o=0;o<f.length;o++)if(Array.isArray(f[o])){var p=f[o];if(!(2>p.length)){var S=p[1];if(Array.isArray(S)&&!(1>S.length)){var P=S[0];if(P!="noop"&&P!="stop"&&P!="close")for(var j=1;j<S.length;j++)S[j]=""}}}}return He(f)}catch{return u}}var yi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Kc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},oa;function vi(){}k(vi,ra),vi.prototype.g=function(){return new XMLHttpRequest},vi.prototype.i=function(){return{}},oa=new vi;function mn(o,u,f,p){this.j=o,this.i=u,this.l=f,this.R=p||1,this.U=new Je(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new zc}function zc(){this.i=null,this.g="",this.h=!1}var Gc={},aa={};function la(o,u,f){o.L=1,o.v=wi(Jt(u)),o.m=f,o.P=!0,Qc(o,null)}function Qc(o,u){o.F=Date.now(),Ei(o),o.A=Jt(o.v);var f=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),cu(f.i,"t",p),o.C=0,f=o.j.J,o.h=new zc,o.g=Su(o.j,f?u:null,!o.m),0<o.O&&(o.M=new Et(E(o.Y,o,o.g),o.O)),u=o.U,f=o.g,p=o.ca;var S="readystatechange";Array.isArray(S)||(S&&(gn[0]=S.toString()),S=gn);for(var P=0;P<S.length;P++){var j=V(f,S[P],p||u.handleEvent,!1,u.h||u);if(!j)break;u.g[j.key]=j}u=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),ls(),Tm(o.i,o.u,o.A,o.l,o.R,o.m)}mn.prototype.ca=function(o){o=o.target;const u=this.M;u&&Yt(o)==3?u.j():this.Y(o)},mn.prototype.Y=function(o){try{if(o==this.g)e:{const Xe=Yt(this.g);var u=this.g.Ba();const Ar=this.g.Z();if(!(3>Xe)&&(Xe!=3||this.g&&(this.h.h||this.g.oa()||mu(this.g)))){this.J||Xe!=4||u==7||(u==8||0>=Ar?ls(3):ls(2)),ca(this);var f=this.g.Z();this.X=f;t:if(Jc(this)){var p=mu(this.g);o="";var S=p.length,P=Yt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Jn(this),hs(this);var j="";break t}this.h.i=new l.TextDecoder}for(u=0;u<S;u++)this.h.h=!0,o+=this.h.i.decode(p[u],{stream:!(P&&u==S-1)});p.length=0,this.h.g+=o,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=f==200,Im(this.i,this.u,this.A,this.l,this.R,Xe,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Te,qe=this.g;if((Te=qe.g?qe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!G(Te)){var _e=Te;break t}}_e=null}if(f=_e)Tr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ua(this,f);else{this.o=!1,this.s=3,ut(12),Jn(this),hs(this);break e}}if(this.P){f=!0;let Pt;for(;!this.J&&this.C<j.length;)if(Pt=bm(this,j),Pt==aa){Xe==4&&(this.s=4,ut(14),f=!1),Tr(this.i,this.l,null,"[Incomplete Response]");break}else if(Pt==Gc){this.s=4,ut(15),Tr(this.i,this.l,j,"[Invalid Chunk]"),f=!1;break}else Tr(this.i,this.l,Pt,null),ua(this,Pt);if(Jc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Xe!=4||j.length!=0||this.h.h||(this.s=1,ut(16),f=!1),this.o=this.o&&f,!f)Tr(this.i,this.l,j,"[Invalid Chunked Response]"),Jn(this),hs(this);else if(0<j.length&&!this.W){this.W=!0;var Ye=this.j;Ye.g==this&&Ye.ba&&!Ye.M&&(Ye.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),ma(Ye),Ye.M=!0,ut(11))}}else Tr(this.i,this.l,j,null),ua(this,j);Xe==4&&Jn(this),this.o&&!this.J&&(Xe==4?wu(this.j,this):(this.o=!1,Ei(this)))}else $m(this.g),f==400&&0<j.indexOf("Unknown SID")?(this.s=3,ut(12)):(this.s=0,ut(13)),Jn(this),hs(this)}}}catch{}finally{}};function Jc(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function bm(o,u){var f=o.C,p=u.indexOf(`
`,f);return p==-1?aa:(f=Number(u.substring(f,p)),isNaN(f)?Gc:(p+=1,p+f>u.length?aa:(u=u.slice(p,p+f),o.C=p+f,u)))}mn.prototype.cancel=function(){this.J=!0,Jn(this)};function Ei(o){o.S=Date.now()+o.I,Yc(o,o.I)}function Yc(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=cs(E(o.ba,o),u)}function ca(o){o.B&&(l.clearTimeout(o.B),o.B=null)}mn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(wm(this.i,this.A),this.L!=2&&(ls(),ut(17)),Jn(this),this.s=2,hs(this)):Yc(this,this.S-o)};function hs(o){o.j.G==0||o.J||wu(o.j,o)}function Jn(o){ca(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,os(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function ua(o,u){try{var f=o.j;if(f.G!=0&&(f.g==o||ha(f.h,o))){if(!o.K&&ha(f.h,o)&&f.G==3){try{var p=f.Da.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var S=p;if(S[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<o.F)Ci(f),Si(f);else break e;ga(f),ut(18)}}else f.za=S[1],0<f.za-f.T&&37500>S[2]&&f.F&&f.v==0&&!f.C&&(f.C=cs(E(f.Za,f),6e3));if(1>=eu(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Xn(f,11)}else if((o.K||f.g==o)&&Ci(f),!G(u))for(S=f.Da.g.parse(u),u=0;u<S.length;u++){let _e=S[u];if(f.T=_e[0],_e=_e[1],f.G==2)if(_e[0]=="c"){f.K=_e[1],f.ia=_e[2];const Ye=_e[3];Ye!=null&&(f.la=Ye,f.j.info("VER="+f.la));const Xe=_e[4];Xe!=null&&(f.Aa=Xe,f.j.info("SVER="+f.Aa));const Ar=_e[5];Ar!=null&&typeof Ar=="number"&&0<Ar&&(p=1.5*Ar,f.L=p,f.j.info("backChannelRequestTimeoutMs_="+p)),p=f;const Pt=o.g;if(Pt){const Di=Pt.g?Pt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Di){var P=p.h;P.g||Di.indexOf("spdy")==-1&&Di.indexOf("quic")==-1&&Di.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(fa(P,P.h),P.h=null))}if(p.D){const _a=Pt.g?Pt.g.getResponseHeader("X-HTTP-Session-Id"):null;_a&&(p.ya=_a,Ae(p.I,p.D,_a))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-o.F,f.j.info("Handshake RTT: "+f.R+"ms")),p=f;var j=o;if(p.qa=Ru(p,p.J?p.ia:null,p.W),j.K){tu(p.h,j);var Te=j,qe=p.L;qe&&(Te.I=qe),Te.B&&(ca(Te),Ei(Te)),p.g=j}else Tu(p);0<f.i.length&&Pi(f)}else _e[0]!="stop"&&_e[0]!="close"||Xn(f,7);else f.G==3&&(_e[0]=="stop"||_e[0]=="close"?_e[0]=="stop"?Xn(f,7):pa(f):_e[0]!="noop"&&f.l&&f.l.ta(_e),f.v=0)}}ls(4)}catch{}}var Rm=class{constructor(o,u){this.g=o,this.map=u}};function Xc(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Zc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function eu(o){return o.h?1:o.g?o.g.size:0}function ha(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function fa(o,u){o.g?o.g.add(u):o.h=u}function tu(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Xc.prototype.cancel=function(){if(this.i=nu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function nu(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const f of o.g.values())u=u.concat(f.D);return u}return O(o.i)}function Sm(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var u=[],f=o.length,p=0;p<f;p++)u.push(o[p]);return u}u=[],f=0;for(p in o)u[f++]=o[p];return u}function Pm(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var u=[];o=o.length;for(var f=0;f<o;f++)u.push(f);return u}u=[],f=0;for(const p in o)u[f++]=p;return u}}}function ru(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var f=Pm(o),p=Sm(o),S=p.length,P=0;P<S;P++)u.call(void 0,p[P],f&&f[P],o)}var su=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Cm(o,u){if(o){o=o.split("&");for(var f=0;f<o.length;f++){var p=o[f].indexOf("="),S=null;if(0<=p){var P=o[f].substring(0,p);S=o[f].substring(p+1)}else P=o[f];u(P,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function Yn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Yn){this.h=o.h,Ti(this,o.j),this.o=o.o,this.g=o.g,Ii(this,o.s),this.l=o.l;var u=o.i,f=new ps;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),iu(this,f),this.m=o.m}else o&&(u=String(o).match(su))?(this.h=!1,Ti(this,u[1]||"",!0),this.o=fs(u[2]||""),this.g=fs(u[3]||"",!0),Ii(this,u[4]),this.l=fs(u[5]||"",!0),iu(this,u[6]||"",!0),this.m=fs(u[7]||"")):(this.h=!1,this.i=new ps(null,this.h))}Yn.prototype.toString=function(){var o=[],u=this.j;u&&o.push(ds(u,ou,!0),":");var f=this.g;return(f||u=="file")&&(o.push("//"),(u=this.o)&&o.push(ds(u,ou,!0),"@"),o.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&o.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(ds(f,f.charAt(0)=="/"?Vm:Dm,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",ds(f,Nm)),o.join("")};function Jt(o){return new Yn(o)}function Ti(o,u,f){o.j=f?fs(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Ii(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function iu(o,u,f){u instanceof ps?(o.i=u,xm(o.i,o.h)):(f||(u=ds(u,Om)),o.i=new ps(u,o.h))}function Ae(o,u,f){o.i.set(u,f)}function wi(o){return Ae(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function fs(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function ds(o,u,f){return typeof o=="string"?(o=encodeURI(o).replace(u,km),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function km(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var ou=/[#\/\?@]/g,Dm=/[#\?:]/g,Vm=/[#\?]/g,Om=/[#\?@]/g,Nm=/#/g;function ps(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function _n(o){o.g||(o.g=new Map,o.h=0,o.i&&Cm(o.i,function(u,f){o.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}n=ps.prototype,n.add=function(o,u){_n(this),this.i=null,o=Ir(this,o);var f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(u),this.h+=1,this};function au(o,u){_n(o),u=Ir(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function lu(o,u){return _n(o),u=Ir(o,u),o.g.has(u)}n.forEach=function(o,u){_n(this),this.g.forEach(function(f,p){f.forEach(function(S){o.call(u,S,p,this)},this)},this)},n.na=function(){_n(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let p=0;p<u.length;p++){const S=o[p];for(let P=0;P<S.length;P++)f.push(u[p])}return f},n.V=function(o){_n(this);let u=[];if(typeof o=="string")lu(this,o)&&(u=u.concat(this.g.get(Ir(this,o))));else{o=Array.from(this.g.values());for(let f=0;f<o.length;f++)u=u.concat(o[f])}return u},n.set=function(o,u){return _n(this),this.i=null,o=Ir(this,o),lu(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function cu(o,u,f){au(o,u),0<f.length&&(o.i=null,o.g.set(Ir(o,u),O(f)),o.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var p=u[f];const P=encodeURIComponent(String(p)),j=this.V(p);for(p=0;p<j.length;p++){var S=P;j[p]!==""&&(S+="="+encodeURIComponent(String(j[p]))),o.push(S)}}return this.i=o.join("&")};function Ir(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function xm(o,u){u&&!o.j&&(_n(o),o.i=null,o.g.forEach(function(f,p){var S=p.toLowerCase();p!=S&&(au(this,p),cu(this,S,f))},o)),o.j=u}function Mm(o,u){const f=new us;if(l.Image){const p=new Image;p.onload=b(yn,f,"TestLoadImage: loaded",!0,u,p),p.onerror=b(yn,f,"TestLoadImage: error",!1,u,p),p.onabort=b(yn,f,"TestLoadImage: abort",!1,u,p),p.ontimeout=b(yn,f,"TestLoadImage: timeout",!1,u,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else u(!1)}function Lm(o,u){const f=new us,p=new AbortController,S=setTimeout(()=>{p.abort(),yn(f,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:p.signal}).then(P=>{clearTimeout(S),P.ok?yn(f,"TestPingServer: ok",!0,u):yn(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(S),yn(f,"TestPingServer: error",!1,u)})}function yn(o,u,f,p,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),p(f)}catch{}}function Fm(){this.g=new mi}function Um(o,u,f){const p=f||"";try{ru(o,function(S,P){let j=S;h(S)&&(j=He(S)),u.push(p+P+"="+encodeURIComponent(j))})}catch(S){throw u.push(p+"type="+encodeURIComponent("_badmap")),S}}function Ai(o){this.l=o.Ub||null,this.j=o.eb||!1}k(Ai,ra),Ai.prototype.g=function(){return new bi(this.l,this.j)},Ai.prototype.i=function(o){return function(){return o}}({});function bi(o,u){Y.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(bi,Y),n=bi.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,ms(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,gs(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,ms(this)),this.g&&(this.readyState=3,ms(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;uu(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function uu(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?gs(this):ms(this),this.readyState==3&&uu(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,gs(this))},n.Qa=function(o){this.g&&(this.response=o,gs(this))},n.ga=function(){this.g&&gs(this)};function gs(o){o.readyState=4,o.l=null,o.j=null,o.v=null,ms(o)}n.setRequestHeader=function(o,u){this.u.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=u.next();return o.join(`\r
`)};function ms(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(bi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function hu(o){let u="";return ye(o,function(f,p){u+=p,u+=":",u+=f,u+=`\r
`}),u}function da(o,u,f){e:{for(p in f){var p=!1;break e}p=!0}p||(f=hu(f),typeof o=="string"?f!=null&&encodeURIComponent(String(f)):Ae(o,u,f))}function ke(o){Y.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(ke,Y);var Bm=/^https?$/i,jm=["POST","PUT"];n=ke.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,u,f,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():oa.g(),this.v=this.o?Bc(this.o):Bc(oa),this.g.onreadystatechange=E(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(P){fu(this,P);return}if(o=f||"",f=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var S in p)f.set(S,p[S]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const P of p.keys())f.set(P,p.get(P));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(f.keys()).find(P=>P.toLowerCase()=="content-type"),S=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(jm,u,void 0))||p||S||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,j]of f)this.g.setRequestHeader(P,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{gu(this),this.u=!0,this.g.send(o),this.u=!1}catch(P){fu(this,P)}};function fu(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,du(o),Ri(o)}function du(o){o.A||(o.A=!0,ce(o,"complete"),ce(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,ce(this,"complete"),ce(this,"abort"),Ri(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ri(this,!0)),ke.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?pu(this):this.bb())},n.bb=function(){pu(this)};function pu(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Yt(o)!=4||o.Z()!=2)){if(o.u&&Yt(o)==4)Qe(o.Ea,0,o);else if(ce(o,"readystatechange"),Yt(o)==4){o.h=!1;try{const j=o.Z();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var p;if(p=j===0){var S=String(o.D).match(su)[1]||null;!S&&l.self&&l.self.location&&(S=l.self.location.protocol.slice(0,-1)),p=!Bm.test(S?S.toLowerCase():"")}f=p}if(f)ce(o,"complete"),ce(o,"success");else{o.m=6;try{var P=2<Yt(o)?o.g.statusText:""}catch{P=""}o.l=P+" ["+o.Z()+"]",du(o)}}finally{Ri(o)}}}}function Ri(o,u){if(o.g){gu(o);const f=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||ce(o,"ready");try{f.onreadystatechange=p}catch{}}}function gu(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function Yt(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<Yt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Tt(u)}};function mu(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function $m(o){const u={};o=(o.g&&2<=Yt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(G(o[p]))continue;var f=A(o[p]);const S=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const P=u[S]||[];u[S]=P,P.push(f)}w(u,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function _s(o,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||u}function _u(o){this.Aa=0,this.i=[],this.j=new us,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=_s("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=_s("baseRetryDelayMs",5e3,o),this.cb=_s("retryDelaySeedMs",1e4,o),this.Wa=_s("forwardChannelMaxRetries",2,o),this.wa=_s("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Xc(o&&o.concurrentRequestLimit),this.Da=new Fm,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=_u.prototype,n.la=8,n.G=1,n.connect=function(o,u,f,p){ut(0),this.W=o,this.H=u||{},f&&p!==void 0&&(this.H.OSID=f,this.H.OAID=p),this.F=this.X,this.I=Ru(this,null,this.W),Pi(this)};function pa(o){if(yu(o),o.G==3){var u=o.U++,f=Jt(o.I);if(Ae(f,"SID",o.K),Ae(f,"RID",u),Ae(f,"TYPE","terminate"),ys(o,f),u=new mn(o,o.j,u),u.L=2,u.v=wi(Jt(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=u.v,f=!0),f||(u.g=Su(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Ei(u)}bu(o)}function Si(o){o.g&&(ma(o),o.g.cancel(),o.g=null)}function yu(o){Si(o),o.u&&(l.clearTimeout(o.u),o.u=null),Ci(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function Pi(o){if(!Zc(o.h)&&!o.s){o.s=!0;var u=o.Ga;le||Kn(),me||(le(),me=!0),St.add(u,o),o.B=0}}function Hm(o,u){return eu(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=cs(E(o.Ga,o,u),Au(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const S=new mn(this,this.j,o);let P=this.o;if(this.S&&(P?(P=m(P),T(P,this.S)):P=this.S),this.m!==null||this.O||(S.H=P,P=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var p=this.i[f];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(u+=p,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=Eu(this,S,u),f=Jt(this.I),Ae(f,"RID",o),Ae(f,"CVER",22),this.D&&Ae(f,"X-HTTP-Session-Id",this.D),ys(this,f),P&&(this.O?u="headers="+encodeURIComponent(String(hu(P)))+"&"+u:this.m&&da(f,this.m,P)),fa(this.h,S),this.Ua&&Ae(f,"TYPE","init"),this.P?(Ae(f,"$req",u),Ae(f,"SID","null"),S.T=!0,la(S,f,null)):la(S,f,u),this.G=2}}else this.G==3&&(o?vu(this,o):this.i.length==0||Zc(this.h)||vu(this))};function vu(o,u){var f;u?f=u.l:f=o.U++;const p=Jt(o.I);Ae(p,"SID",o.K),Ae(p,"RID",f),Ae(p,"AID",o.T),ys(o,p),o.m&&o.o&&da(p,o.m,o.o),f=new mn(o,o.j,f,o.B+1),o.m===null&&(f.H=o.o),u&&(o.i=u.D.concat(o.i)),u=Eu(o,f,1e3),f.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),fa(o.h,f),la(f,p,u)}function ys(o,u){o.H&&ye(o.H,function(f,p){Ae(u,p,f)}),o.l&&ru({},function(f,p){Ae(u,p,f)})}function Eu(o,u,f){f=Math.min(o.i.length,f);var p=o.l?E(o.l.Na,o.l,o):null;e:{var S=o.i;let P=-1;for(;;){const j=["count="+f];P==-1?0<f?(P=S[0].g,j.push("ofs="+P)):P=0:j.push("ofs="+P);let Te=!0;for(let qe=0;qe<f;qe++){let _e=S[qe].g;const Ye=S[qe].map;if(_e-=P,0>_e)P=Math.max(0,S[qe].g-100),Te=!1;else try{Um(Ye,j,"req"+_e+"_")}catch{p&&p(Ye)}}if(Te){p=j.join("&");break e}}}return o=o.i.splice(0,f),u.D=o,p}function Tu(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;le||Kn(),me||(le(),me=!0),St.add(u,o),o.v=0}}function ga(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=cs(E(o.Fa,o),Au(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,Iu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=cs(E(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ut(10),Si(this),Iu(this))};function ma(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function Iu(o){o.g=new mn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=Jt(o.qa);Ae(u,"RID","rpc"),Ae(u,"SID",o.K),Ae(u,"AID",o.T),Ae(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&Ae(u,"TO",o.ja),Ae(u,"TYPE","xmlhttp"),ys(o,u),o.m&&o.o&&da(u,o.m,o.o),o.L&&(o.g.I=o.L);var f=o.g;o=o.ia,f.L=1,f.v=wi(Jt(u)),f.m=null,f.P=!0,Qc(f,o)}n.Za=function(){this.C!=null&&(this.C=null,Si(this),ga(this),ut(19))};function Ci(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function wu(o,u){var f=null;if(o.g==u){Ci(o),ma(o),o.g=null;var p=2}else if(ha(o.h,u))f=u.D,tu(o.h,u),p=1;else return;if(o.G!=0){if(u.o)if(p==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var S=o.B;p=_i(),ce(p,new Wc(p,f)),Pi(o)}else Tu(o);else if(S=u.s,S==3||S==0&&0<u.X||!(p==1&&Hm(o,u)||p==2&&ga(o)))switch(f&&0<f.length&&(u=o.h,u.i=u.i.concat(f)),S){case 1:Xn(o,5);break;case 4:Xn(o,10);break;case 3:Xn(o,6);break;default:Xn(o,2)}}}function Au(o,u){let f=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(f*=2),f*u}function Xn(o,u){if(o.j.info("Error code "+u),u==2){var f=E(o.fb,o),p=o.Xa;const S=!p;p=new Yn(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ti(p,"https"),wi(p),S?Mm(p.toString(),f):Lm(p.toString(),f)}else ut(2);o.G=0,o.l&&o.l.sa(u),bu(o),yu(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),ut(2)):(this.j.info("Failed to ping google.com"),ut(1))};function bu(o){if(o.G=0,o.ka=[],o.l){const u=nu(o.h);(u.length!=0||o.i.length!=0)&&(N(o.ka,u),N(o.ka,o.i),o.h.i.length=0,O(o.i),o.i.length=0),o.l.ra()}}function Ru(o,u,f){var p=f instanceof Yn?Jt(f):new Yn(f);if(p.g!="")u&&(p.g=u+"."+p.g),Ii(p,p.s);else{var S=l.location;p=S.protocol,u=u?u+"."+S.hostname:S.hostname,S=+S.port;var P=new Yn(null);p&&Ti(P,p),u&&(P.g=u),S&&Ii(P,S),f&&(P.l=f),p=P}return f=o.D,u=o.ya,f&&u&&Ae(p,f,u),Ae(p,"VER",o.la),ys(o,p),p}function Su(o,u,f){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new ke(new Ai({eb:f})):new ke(o.pa),u.Ha(o.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Pu(){}n=Pu.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ki(){}ki.prototype.g=function(o,u){return new gt(o,u)};function gt(o,u){Y.call(this),this.g=new _u(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!G(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!G(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new wr(this)}k(gt,Y),gt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},gt.prototype.close=function(){pa(this.g)},gt.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.u&&(f={},f.__data__=He(o),o=f);u.i.push(new Rm(u.Ya++,o)),u.G==3&&Pi(u)},gt.prototype.N=function(){this.g.l=null,delete this.j,pa(this.g),delete this.g,gt.aa.N.call(this)};function Cu(o){sa.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const f in u){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}k(Cu,sa);function ku(){ia.call(this),this.status=1}k(ku,ia);function wr(o){this.g=o}k(wr,Pu),wr.prototype.ua=function(){ce(this.g,"a")},wr.prototype.ta=function(o){ce(this.g,new Cu(o))},wr.prototype.sa=function(o){ce(this.g,new ku)},wr.prototype.ra=function(){ce(this.g,"b")},ki.prototype.createWebChannel=ki.prototype.g,gt.prototype.send=gt.prototype.o,gt.prototype.open=gt.prototype.m,gt.prototype.close=gt.prototype.close,Qp=function(){return new ki},Gp=function(){return _i()},zp=Qn,dl={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},yi.NO_ERROR=0,yi.TIMEOUT=8,yi.HTTP_ERROR=6,Qi=yi,Kc.COMPLETE="complete",Kp=Kc,jc.EventType=as,as.OPEN="a",as.CLOSE="b",as.ERROR="c",as.MESSAGE="d",Y.prototype.listen=Y.prototype.K,As=jc,ke.prototype.listenOnce=ke.prototype.L,ke.prototype.getLastError=ke.prototype.Ka,ke.prototype.getLastErrorCode=ke.prototype.Ba,ke.prototype.getStatus=ke.prototype.Z,ke.prototype.getResponseJson=ke.prototype.Oa,ke.prototype.getResponseText=ke.prototype.oa,ke.prototype.send=ke.prototype.ea,ke.prototype.setWithCredentials=ke.prototype.Ha,Wp=ke}).apply(typeof Mi<"u"?Mi:typeof self<"u"?self:typeof window<"u"?window:{});const Fh="@firebase/firestore",Uh="4.7.10";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}et.UNAUTHENTICATED=new et(null),et.GOOGLE_CREDENTIALS=new et("google-credentials-uid"),et.FIRST_PARTY=new et("first-party-uid"),et.MOCK_USER=new et("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zr="11.5.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr=new Gl("@firebase/firestore");function Cr(){return fr.logLevel}function W(n,...e){if(fr.logLevel<=he.DEBUG){const t=e.map(oc);fr.debug(`Firestore (${Zr}): ${n}`,...t)}}function hn(n,...e){if(fr.logLevel<=he.ERROR){const t=e.map(oc);fr.error(`Firestore (${Zr}): ${n}`,...t)}}function qr(n,...e){if(fr.logLevel<=he.WARN){const t=e.map(oc);fr.warn(`Firestore (${Zr}): ${n}`,...t)}}function oc(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(n="Unexpected state"){const e=`FIRESTORE (${Zr}) INTERNAL ASSERTION FAILED: `+n;throw hn(e),new Error(e)}function Ee(n,e){n||ne()}function ie(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class X extends pn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class mw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(et.UNAUTHENTICATED))}shutdown(){}}class _w{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class yw{constructor(e){this.t=e,this.currentUser=et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ee(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let i=new On;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new On,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new On)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ee(typeof r.accessToken=="string"),new Jp(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ee(e===null||typeof e=="string"),new et(e)}}class vw{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=et.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class Ew{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new vw(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Bh{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Tw{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,It(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){Ee(this.o===void 0);const r=i=>{i.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,W("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new Bh(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Ee(typeof t.token=="string"),this.R=t.token,new Bh(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iw(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yp(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Iw(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function ue(n,e){return n<e?-1:n>e?1:0}function pl(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),s=e.codePointAt(t);if(r!==s){if(r<128&&s<128)return ue(r,s);{const i=Yp(),a=ww(i.encode(jh(n,t)),i.encode(jh(e,t)));return a!==0?a:ue(r,s)}}t+=r>65535?2:1}return ue(n.length,e.length)}function jh(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function ww(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return ue(n[t],e[t]);return ue(n.length,e.length)}function Wr(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $h=-62135596800,Hh=1e6;class Ue{static now(){return Ue.fromMillis(Date.now())}static fromDate(e){return Ue.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Hh);return new Ue(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new X(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new X(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<$h)throw new X(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new X(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Hh}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-$h;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{static fromTimestamp(e){return new re(e)}static min(){return new re(new Ue(0,0))}static max(){return new re(new Ue(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qh="__name__";class Lt{constructor(e,t,r){t===void 0?t=0:t>e.length&&ne(),r===void 0?r=e.length-t:r>e.length-t&&ne(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Lt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Lt?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=Lt.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return ue(e.length,t.length)}static compareSegments(e,t){const r=Lt.isNumericId(e),s=Lt.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Lt.extractNumericId(e).compare(Lt.extractNumericId(t)):pl(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Vn.fromString(e.substring(4,e.length-2))}}class De extends Lt{construct(e,t,r){return new De(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new X(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new De(t)}static emptyPath(){return new De([])}}const Aw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ze extends Lt{construct(e,t,r){return new ze(e,t,r)}static isValidIdentifier(e){return Aw.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ze.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===qh}static keyField(){return new ze([qh])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new X(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new X(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new X(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new X(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ze(t)}static emptyPath(){return new ze([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.path=e}static fromPath(e){return new Z(De.fromString(e))}static fromName(e){return new Z(De.fromString(e).popFirst(5))}static empty(){return new Z(De.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&De.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return De.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Z(new De(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gs=-1;function bw(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=re.fromTimestamp(r===1e9?new Ue(t+1,0):new Ue(t,r));return new xn(s,Z.empty(),e)}function Rw(n){return new xn(n.readTime,n.key,Gs)}class xn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new xn(re.min(),Z.empty(),Gs)}static max(){return new xn(re.max(),Z.empty(),Gs)}}function Sw(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Z.comparator(n.documentKey,e.documentKey),t!==0?t:ue(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Cw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function es(n){if(n.code!==F.FAILED_PRECONDITION||n.message!==Pw)throw n;W("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ne(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new D((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof D?t:D.resolve(t)}catch(t){return D.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):D.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):D.reject(t)}static resolve(e){return new D((t,r)=>{t(e)})}static reject(e){return new D((t,r)=>{r(e)})}static waitFor(e){return new D((t,r)=>{let s=0,i=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&t()},c=>r(c))}),a=!0,i===s&&t()})}static or(e){let t=D.resolve(!1);for(const r of e)t=t.next(s=>s?D.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new D((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;t(e[h]).next(d=>{a[h]=d,++l,l===i&&r(a)},d=>s(d))}})}static doWhile(e,t){return new D((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function kw(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ts(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.oe(r),this._e=r=>t.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}qo.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac=-1;function Wo(n){return n==null}function go(n){return n===0&&1/n==-1/0}function Dw(n){return typeof n=="number"&&Number.isInteger(n)&&!go(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zp="";function Vw(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Wh(e)),e=Ow(n.get(t),e);return Wh(e)}function Ow(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case Zp:t+="";break;default:t+=i}}return t}function Wh(n){return n+Zp+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kh(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function _r(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function eg(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,t){this.comparator=e,this.root=t||We.EMPTY}insert(e,t){return new Ce(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,We.BLACK,null,null))}remove(e){return new Ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,We.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Li(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Li(this.root,e,this.comparator,!1)}getReverseIterator(){return new Li(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Li(this.root,e,this.comparator,!0)}}class Li{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class We{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??We.RED,this.left=s??We.EMPTY,this.right=i??We.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new We(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return We.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return We.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,We.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,We.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ne();const e=this.left.check();if(e!==this.right.check())throw ne();return e+(this.isRed()?0:1)}}We.EMPTY=null,We.RED=!0,We.BLACK=!1;We.EMPTY=new class{constructor(){this.size=0}get key(){throw ne()}get value(){throw ne()}get color(){throw ne()}get left(){throw ne()}get right(){throw ne()}copy(e,t,r,s,i){return this}insert(e,t,r){return new We(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.comparator=e,this.data=new Ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new zh(this.data.getIterator())}getIteratorFrom(e){return new zh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Be)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Be(this.comparator);return t.data=e,t}}class zh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.fields=e,e.sort(ze.comparator)}static empty(){return new kt([])}unionWith(e){let t=new Be(ze.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new kt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Wr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new tg("Invalid base64 string: "+i):i}}(e);return new Ge(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new Ge(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ge.EMPTY_BYTE_STRING=new Ge("");const Nw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Mn(n){if(Ee(!!n),typeof n=="string"){let e=0;const t=Nw.exec(n);if(Ee(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ve(n.seconds),nanos:Ve(n.nanos)}}function Ve(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ln(n){return typeof n=="string"?Ge.fromBase64String(n):Ge.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ng="server_timestamp",rg="__type__",sg="__previous_value__",ig="__local_write_time__";function lc(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[rg])===null||t===void 0?void 0:t.stringValue)===ng}function Ko(n){const e=n.mapValue.fields[sg];return lc(e)?Ko(e):e}function Qs(n){const e=Mn(n.mapValue.fields[ig].timestampValue);return new Ue(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xw{constructor(e,t,r,s,i,a,l,c,h){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h}}const mo="(default)";class Js{constructor(e,t){this.projectId=e,this.database=t||mo}static empty(){return new Js("","")}get isDefaultDatabase(){return this.database===mo}isEqual(e){return e instanceof Js&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og="__type__",Mw="__max__",Fi={mapValue:{}},ag="__vector__",_o="value";function Fn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?lc(n)?4:Fw(n)?9007199254740991:Lw(n)?10:11:ne()}function Kt(n,e){if(n===e)return!0;const t=Fn(n);if(t!==Fn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Qs(n).isEqual(Qs(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Mn(s.timestampValue),l=Mn(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return Ln(s.bytesValue).isEqual(Ln(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return Ve(s.geoPointValue.latitude)===Ve(i.geoPointValue.latitude)&&Ve(s.geoPointValue.longitude)===Ve(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ve(s.integerValue)===Ve(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Ve(s.doubleValue),l=Ve(i.doubleValue);return a===l?go(a)===go(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return Wr(n.arrayValue.values||[],e.arrayValue.values||[],Kt);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Kh(a)!==Kh(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!Kt(a[c],l[c])))return!1;return!0}(n,e);default:return ne()}}function Ys(n,e){return(n.values||[]).find(t=>Kt(t,e))!==void 0}function Kr(n,e){if(n===e)return 0;const t=Fn(n),r=Fn(e);if(t!==r)return ue(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ue(n.booleanValue,e.booleanValue);case 2:return function(i,a){const l=Ve(i.integerValue||i.doubleValue),c=Ve(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(n,e);case 3:return Gh(n.timestampValue,e.timestampValue);case 4:return Gh(Qs(n),Qs(e));case 5:return pl(n.stringValue,e.stringValue);case 6:return function(i,a){const l=Ln(i),c=Ln(a);return l.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),c=a.split("/");for(let h=0;h<l.length&&h<c.length;h++){const d=ue(l[h],c[h]);if(d!==0)return d}return ue(l.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const l=ue(Ve(i.latitude),Ve(a.latitude));return l!==0?l:ue(Ve(i.longitude),Ve(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Qh(n.arrayValue,e.arrayValue);case 10:return function(i,a){var l,c,h,d;const g=i.fields||{},E=a.fields||{},b=(l=g[_o])===null||l===void 0?void 0:l.arrayValue,k=(c=E[_o])===null||c===void 0?void 0:c.arrayValue,O=ue(((h=b==null?void 0:b.values)===null||h===void 0?void 0:h.length)||0,((d=k==null?void 0:k.values)===null||d===void 0?void 0:d.length)||0);return O!==0?O:Qh(b,k)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===Fi.mapValue&&a===Fi.mapValue)return 0;if(i===Fi.mapValue)return 1;if(a===Fi.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=a.fields||{},d=Object.keys(h);c.sort(),d.sort();for(let g=0;g<c.length&&g<d.length;++g){const E=pl(c[g],d[g]);if(E!==0)return E;const b=Kr(l[c[g]],h[d[g]]);if(b!==0)return b}return ue(c.length,d.length)}(n.mapValue,e.mapValue);default:throw ne()}}function Gh(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ue(n,e);const t=Mn(n),r=Mn(e),s=ue(t.seconds,r.seconds);return s!==0?s:ue(t.nanos,r.nanos)}function Qh(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Kr(t[s],r[s]);if(i)return i}return ue(t.length,r.length)}function zr(n){return gl(n)}function gl(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Mn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Ln(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return Z.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=gl(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${gl(t.fields[a])}`;return s+"}"}(n.mapValue):ne()}function Ji(n){switch(Fn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ko(n);return e?16+Ji(e):16;case 5:return 2*n.stringValue.length;case 6:return Ln(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Ji(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return _r(r.fields,(i,a)=>{s+=i.length+Ji(a)}),s}(n.mapValue);default:throw ne()}}function ml(n){return!!n&&"integerValue"in n}function cc(n){return!!n&&"arrayValue"in n}function Jh(n){return!!n&&"nullValue"in n}function Yh(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Yi(n){return!!n&&"mapValue"in n}function Lw(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[og])===null||t===void 0?void 0:t.stringValue)===ag}function Ms(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return _r(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Ms(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ms(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Fw(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Mw}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.value=e}static empty(){return new wt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Yi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ms(t)}setAll(e){let t=ze.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,r,s),r={},s=[],t=l.popLast()}a?r[l.lastSegment()]=Ms(a):s.push(l.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Yi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Kt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Yi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){_r(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new wt(Ms(this.value))}}function lg(n){const e=[];return _r(n.fields,(t,r)=>{const s=new ze([t]);if(Yi(r)){const i=lg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new kt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,t,r,s,i,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new st(e,0,re.min(),re.min(),re.min(),wt.empty(),0)}static newFoundDocument(e,t,r,s){return new st(e,1,t,re.min(),r,s,0)}static newNoDocument(e,t){return new st(e,2,t,re.min(),re.min(),wt.empty(),0)}static newUnknownDocument(e,t){return new st(e,3,t,re.min(),re.min(),wt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof st&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new st(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e,t){this.position=e,this.inclusive=t}}function Xh(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=Z.comparator(Z.fromName(a.referenceValue),t.key):r=Kr(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Zh(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Kt(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e,t="asc"){this.field=e,this.dir=t}}function Uw(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{}class Le extends cg{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new jw(e,t,r):t==="array-contains"?new qw(e,r):t==="in"?new Ww(e,r):t==="not-in"?new Kw(e,r):t==="array-contains-any"?new zw(e,r):new Le(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new $w(e,r):new Hw(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Kr(t,this.value)):t!==null&&Fn(this.value)===Fn(t)&&this.matchesComparison(Kr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ne()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class zt extends cg{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new zt(e,t)}matches(e){return ug(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function ug(n){return n.op==="and"}function hg(n){return Bw(n)&&ug(n)}function Bw(n){for(const e of n.filters)if(e instanceof zt)return!1;return!0}function _l(n){if(n instanceof Le)return n.field.canonicalString()+n.op.toString()+zr(n.value);if(hg(n))return n.filters.map(e=>_l(e)).join(",");{const e=n.filters.map(t=>_l(t)).join(",");return`${n.op}(${e})`}}function fg(n,e){return n instanceof Le?function(r,s){return s instanceof Le&&r.op===s.op&&r.field.isEqual(s.field)&&Kt(r.value,s.value)}(n,e):n instanceof zt?function(r,s){return s instanceof zt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&fg(a,s.filters[l]),!0):!1}(n,e):void ne()}function dg(n){return n instanceof Le?function(t){return`${t.field.canonicalString()} ${t.op} ${zr(t.value)}`}(n):n instanceof zt?function(t){return t.op.toString()+" {"+t.getFilters().map(dg).join(" ,")+"}"}(n):"Filter"}class jw extends Le{constructor(e,t,r){super(e,t,r),this.key=Z.fromName(r.referenceValue)}matches(e){const t=Z.comparator(e.key,this.key);return this.matchesComparison(t)}}class $w extends Le{constructor(e,t){super(e,"in",t),this.keys=pg("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Hw extends Le{constructor(e,t){super(e,"not-in",t),this.keys=pg("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function pg(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>Z.fromName(r.referenceValue))}class qw extends Le{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return cc(t)&&Ys(t.arrayValue,this.value)}}class Ww extends Le{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ys(this.value.arrayValue,t)}}class Kw extends Le{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ys(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Ys(this.value.arrayValue,t)}}class zw extends Le{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!cc(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Ys(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{constructor(e,t=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.le=null}}function ef(n,e=null,t=[],r=[],s=null,i=null,a=null){return new Gw(n,e,t,r,s,i,a)}function uc(n){const e=ie(n);if(e.le===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>_l(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Wo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>zr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>zr(r)).join(",")),e.le=t}return e.le}function hc(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Uw(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!fg(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Zh(n.startAt,e.startAt)&&Zh(n.endAt,e.endAt)}function yl(n){return Z.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e,t=null,r=[],s=[],i=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=c,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function Qw(n,e,t,r,s,i,a,l){return new zo(n,e,t,r,s,i,a,l)}function fc(n){return new zo(n)}function tf(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Jw(n){return n.collectionGroup!==null}function Ls(n){const e=ie(n);if(e.he===null){e.he=[];const t=new Set;for(const i of e.explicitOrderBy)e.he.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Be(ze.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.he.push(new vo(i,r))}),t.has(ze.keyField().canonicalString())||e.he.push(new vo(ze.keyField(),r))}return e.he}function Ht(n){const e=ie(n);return e.Pe||(e.Pe=Yw(e,Ls(n))),e.Pe}function Yw(n,e){if(n.limitType==="F")return ef(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new vo(s.field,i)});const t=n.endAt?new yo(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new yo(n.startAt.position,n.startAt.inclusive):null;return ef(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function vl(n,e,t){return new zo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Go(n,e){return hc(Ht(n),Ht(e))&&n.limitType===e.limitType}function gg(n){return`${uc(Ht(n))}|lt:${n.limitType}`}function kr(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>dg(s)).join(", ")}]`),Wo(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>zr(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>zr(s)).join(",")),`Target(${r})`}(Ht(n))}; limitType=${n.limitType})`}function Qo(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Z.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of Ls(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,l,c){const h=Xh(a,l,c);return a.inclusive?h<=0:h<0}(r.startAt,Ls(r),s)||r.endAt&&!function(a,l,c){const h=Xh(a,l,c);return a.inclusive?h>=0:h>0}(r.endAt,Ls(r),s))}(n,e)}function Xw(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function mg(n){return(e,t)=>{let r=!1;for(const s of Ls(n)){const i=Zw(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Zw(n,e,t){const r=n.field.isKeyField()?Z.comparator(e.key,t.key):function(i,a,l){const c=a.data.field(i),h=l.data.field(i);return c!==null&&h!==null?Kr(c,h):ne()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return ne()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){_r(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return eg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eA=new Ce(Z.comparator);function fn(){return eA}const _g=new Ce(Z.comparator);function bs(...n){let e=_g;for(const t of n)e=e.insert(t.key,t);return e}function yg(n){let e=_g;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function rr(){return Fs()}function vg(){return Fs()}function Fs(){return new yr(n=>n.toString(),(n,e)=>n.isEqual(e))}const tA=new Ce(Z.comparator),nA=new Be(Z.comparator);function fe(...n){let e=nA;for(const t of n)e=e.add(t);return e}const rA=new Be(ue);function sA(){return rA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dc(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:go(e)?"-0":e}}function Eg(n){return{integerValue:""+n}}function iA(n,e){return Dw(e)?Eg(e):dc(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(){this._=void 0}}function oA(n,e,t){return n instanceof Eo?function(s,i){const a={fields:{[rg]:{stringValue:ng},[ig]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&lc(i)&&(i=Ko(i)),i&&(a.fields[sg]=i),{mapValue:a}}(t,e):n instanceof Xs?Ig(n,e):n instanceof Zs?wg(n,e):function(s,i){const a=Tg(s,i),l=nf(a)+nf(s.Ie);return ml(a)&&ml(s.Ie)?Eg(l):dc(s.serializer,l)}(n,e)}function aA(n,e,t){return n instanceof Xs?Ig(n,e):n instanceof Zs?wg(n,e):t}function Tg(n,e){return n instanceof To?function(r){return ml(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Eo extends Jo{}class Xs extends Jo{constructor(e){super(),this.elements=e}}function Ig(n,e){const t=Ag(e);for(const r of n.elements)t.some(s=>Kt(s,r))||t.push(r);return{arrayValue:{values:t}}}class Zs extends Jo{constructor(e){super(),this.elements=e}}function wg(n,e){let t=Ag(e);for(const r of n.elements)t=t.filter(s=>!Kt(s,r));return{arrayValue:{values:t}}}class To extends Jo{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function nf(n){return Ve(n.integerValue||n.doubleValue)}function Ag(n){return cc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function lA(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Xs&&s instanceof Xs||r instanceof Zs&&s instanceof Zs?Wr(r.elements,s.elements,Kt):r instanceof To&&s instanceof To?Kt(r.Ie,s.Ie):r instanceof Eo&&s instanceof Eo}(n.transform,e.transform)}class cA{constructor(e,t){this.version=e,this.transformResults=t}}class ln{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ln}static exists(e){return new ln(void 0,e)}static updateTime(e){return new ln(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Xi(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Yo{}function bg(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Sg(n.key,ln.none()):new hi(n.key,n.data,ln.none());{const t=n.data,r=wt.empty();let s=new Be(ze.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new vr(n.key,r,new kt(s.toArray()),ln.none())}}function uA(n,e,t){n instanceof hi?function(s,i,a){const l=s.value.clone(),c=sf(s.fieldTransforms,i,a.transformResults);l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof vr?function(s,i,a){if(!Xi(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=sf(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(Rg(s)),c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Us(n,e,t,r){return n instanceof hi?function(i,a,l,c){if(!Xi(i.precondition,a))return l;const h=i.value.clone(),d=of(i.fieldTransforms,c,a);return h.setAll(d),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof vr?function(i,a,l,c){if(!Xi(i.precondition,a))return l;const h=of(i.fieldTransforms,c,a),d=a.data;return d.setAll(Rg(i)),d.setAll(h),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(g=>g.field))}(n,e,t,r):function(i,a,l){return Xi(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function hA(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Tg(r.transform,s||null);i!=null&&(t===null&&(t=wt.empty()),t.set(r.field,i))}return t||null}function rf(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Wr(r,s,(i,a)=>lA(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class hi extends Yo{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class vr extends Yo{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Rg(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function sf(n,e,t){const r=new Map;Ee(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,aA(a,l,t[s]))}return r}function of(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,oA(i,a,e))}return r}class Sg extends Yo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class fA extends Yo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&uA(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Us(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Us(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=vg();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=t.has(s.key)?null:l;const c=bg(a,l);c!==null&&r.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(re.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),fe())}isEqual(e){return this.batchId===e.batchId&&Wr(this.mutations,e.mutations,(t,r)=>rf(t,r))&&Wr(this.baseMutations,e.baseMutations,(t,r)=>rf(t,r))}}class pc{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){Ee(e.mutations.length===r.length);let s=function(){return tA}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new pc(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pA{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oe,pe;function mA(n){switch(n){case F.OK:return ne();case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0;default:return ne()}}function Pg(n){if(n===void 0)return hn("GRPC error has no .code"),F.UNKNOWN;switch(n){case Oe.OK:return F.OK;case Oe.CANCELLED:return F.CANCELLED;case Oe.UNKNOWN:return F.UNKNOWN;case Oe.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case Oe.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case Oe.INTERNAL:return F.INTERNAL;case Oe.UNAVAILABLE:return F.UNAVAILABLE;case Oe.UNAUTHENTICATED:return F.UNAUTHENTICATED;case Oe.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case Oe.NOT_FOUND:return F.NOT_FOUND;case Oe.ALREADY_EXISTS:return F.ALREADY_EXISTS;case Oe.PERMISSION_DENIED:return F.PERMISSION_DENIED;case Oe.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case Oe.ABORTED:return F.ABORTED;case Oe.OUT_OF_RANGE:return F.OUT_OF_RANGE;case Oe.UNIMPLEMENTED:return F.UNIMPLEMENTED;case Oe.DATA_LOSS:return F.DATA_LOSS;default:return ne()}}(pe=Oe||(Oe={}))[pe.OK=0]="OK",pe[pe.CANCELLED=1]="CANCELLED",pe[pe.UNKNOWN=2]="UNKNOWN",pe[pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",pe[pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",pe[pe.NOT_FOUND=5]="NOT_FOUND",pe[pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",pe[pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",pe[pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",pe[pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",pe[pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",pe[pe.ABORTED=10]="ABORTED",pe[pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",pe[pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",pe[pe.INTERNAL=13]="INTERNAL",pe[pe.UNAVAILABLE=14]="UNAVAILABLE",pe[pe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _A=new Vn([4294967295,4294967295],0);function af(n){const e=Yp().encode(n),t=new qp;return t.update(e),new Uint8Array(t.digest())}function lf(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Vn([t,r],0),new Vn([s,i],0)]}class gc{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Rs(`Invalid padding: ${t}`);if(r<0)throw new Rs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Rs(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Rs(`Invalid padding when bitmap length is 0: ${t}`);this.Ee=8*e.length-t,this.de=Vn.fromNumber(this.Ee)}Ae(e,t,r){let s=e.add(t.multiply(Vn.fromNumber(r)));return s.compare(_A)===1&&(s=new Vn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const t=af(e),[r,s]=lf(t);for(let i=0;i<this.hashCount;i++){const a=this.Ae(r,s,i);if(!this.Re(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new gc(i,s,t);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.Ee===0)return;const t=af(e),[r,s]=lf(t);for(let i=0;i<this.hashCount;i++){const a=this.Ae(r,s,i);this.Ve(a)}}Ve(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Rs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,fi.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Xo(re.min(),s,new Ce(ue),fn(),fe())}}class fi{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new fi(r,t,fe(),fe(),fe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e,t,r,s){this.me=e,this.removedTargetIds=t,this.key=r,this.fe=s}}class Cg{constructor(e,t){this.targetId=e,this.ge=t}}class kg{constructor(e,t,r=Ge.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class cf{constructor(){this.pe=0,this.ye=uf(),this.we=Ge.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=fe(),t=fe(),r=fe();return this.ye.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:ne()}}),new fi(this.we,this.Se,e,t,r)}Me(){this.be=!1,this.ye=uf()}xe(e,t){this.be=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,Ee(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class yA{constructor(e){this.ke=e,this.qe=new Map,this.Qe=fn(),this.$e=Ui(),this.Ue=Ui(),this.Ke=new Ce(ue)}We(e){for(const t of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(t,e.fe):this.ze(t,e.key,e.fe);for(const t of e.removedTargetIds)this.ze(t,e.key,e.fe)}je(e){this.forEachTarget(e,t=>{const r=this.He(t);switch(e.state){case 0:this.Je(t)&&r.Ce(e.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(e.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(t);break;case 3:this.Je(t)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),r.Ce(e.resumeToken));break;default:ne()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach((r,s)=>{this.Je(s)&&t(s)})}Ze(e){const t=e.targetId,r=e.ge.count,s=this.Xe(t);if(s){const i=s.target;if(yl(i))if(r===0){const a=new Z(i.path);this.ze(t,a,st.newNoDocument(a,re.min()))}else Ee(r===1);else{const a=this.et(t);if(a!==r){const l=this.tt(e),c=l?this.nt(l,e,a):1;if(c!==0){this.Ye(t);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,h)}}}}}tt(e){const t=e.ge.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,l;try{a=Ln(r).toUint8Array()}catch(c){if(c instanceof tg)return qr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new gc(a,s,i)}catch(c){return qr(c instanceof Rs?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ee===0?null:l}nt(e,t,r){return t.ge.count===r-this.st(e,t.targetId)?0:2}st(e,t){const r=this.ke.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.ke.it(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.ze(t,i,null),s++)}),s}ot(e){const t=new Map;this.qe.forEach((i,a)=>{const l=this.Xe(a);if(l){if(i.current&&yl(l.target)){const c=new Z(l.target.path);this._t(c).has(a)||this.ut(a,c)||this.ze(a,c,st.newNoDocument(c,e))}i.ve&&(t.set(a,i.Fe()),i.Me())}});let r=fe();this.Ue.forEach((i,a)=>{let l=!0;a.forEachWhile(c=>{const h=this.Xe(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.Qe.forEach((i,a)=>a.setReadTime(e));const s=new Xo(e,t,this.Ke,this.Qe,r);return this.Qe=fn(),this.$e=Ui(),this.Ue=Ui(),this.Ke=new Ce(ue),s}Ge(e,t){if(!this.Je(e))return;const r=this.ut(e,t.key)?2:0;this.He(e).xe(t.key,r),this.Qe=this.Qe.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e)),this.Ue=this.Ue.insert(t.key,this.ct(t.key).add(e))}ze(e,t,r){if(!this.Je(e))return;const s=this.He(e);this.ut(e,t)?s.xe(t,1):s.Oe(t),this.Ue=this.Ue.insert(t,this.ct(t).delete(e)),this.Ue=this.Ue.insert(t,this.ct(t).add(e)),r&&(this.Qe=this.Qe.insert(t,r))}removeTarget(e){this.qe.delete(e)}et(e){const t=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let t=this.qe.get(e);return t||(t=new cf,this.qe.set(e,t)),t}ct(e){let t=this.Ue.get(e);return t||(t=new Be(ue),this.Ue=this.Ue.insert(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new Be(ue),this.$e=this.$e.insert(e,t)),t}Je(e){const t=this.Xe(e)!==null;return t||W("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.qe.get(e);return t&&t.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new cf),this.ke.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ut(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}}function Ui(){return new Ce(Z.comparator)}function uf(){return new Ce(Z.comparator)}const vA={asc:"ASCENDING",desc:"DESCENDING"},EA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},TA={and:"AND",or:"OR"};class IA{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function El(n,e){return n.useProto3Json||Wo(e)?e:{value:e}}function Io(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Dg(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function wA(n,e){return Io(n,e.toTimestamp())}function qt(n){return Ee(!!n),re.fromTimestamp(function(t){const r=Mn(t);return new Ue(r.seconds,r.nanos)}(n))}function mc(n,e){return Tl(n,e).canonicalString()}function Tl(n,e){const t=function(s){return new De(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Vg(n){const e=De.fromString(n);return Ee(Lg(e)),e}function Il(n,e){return mc(n.databaseId,e.path)}function Ua(n,e){const t=Vg(e);if(t.get(1)!==n.databaseId.projectId)throw new X(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new X(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Z(Ng(t))}function Og(n,e){return mc(n.databaseId,e)}function AA(n){const e=Vg(n);return e.length===4?De.emptyPath():Ng(e)}function wl(n){return new De(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Ng(n){return Ee(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function hf(n,e,t){return{name:Il(n,e),fields:t.value.mapValue.fields}}function bA(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ne()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,d){return h.useProto3Json?(Ee(d===void 0||typeof d=="string"),Ge.fromBase64String(d||"")):(Ee(d===void 0||d instanceof Buffer||d instanceof Uint8Array),Ge.fromUint8Array(d||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(h){const d=h.code===void 0?F.UNKNOWN:Pg(h.code);return new X(d,h.message||"")}(a);t=new kg(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ua(n,r.document.name),i=qt(r.document.updateTime),a=r.document.createTime?qt(r.document.createTime):re.min(),l=new wt({mapValue:{fields:r.document.fields}}),c=st.newFoundDocument(s,i,a,l),h=r.targetIds||[],d=r.removedTargetIds||[];t=new Zi(h,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ua(n,r.document),i=r.readTime?qt(r.readTime):re.min(),a=st.newNoDocument(s,i),l=r.removedTargetIds||[];t=new Zi([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ua(n,r.document),i=r.removedTargetIds||[];t=new Zi([],i,s,null)}else{if(!("filter"in e))return ne();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new gA(s,i),l=r.targetId;t=new Cg(l,a)}}return t}function RA(n,e){let t;if(e instanceof hi)t={update:hf(n,e.key,e.value)};else if(e instanceof Sg)t={delete:Il(n,e.key)};else if(e instanceof vr)t={update:hf(n,e.key,e.data),updateMask:xA(e.fieldMask)};else{if(!(e instanceof fA))return ne();t={verify:Il(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof Eo)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Xs)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Zs)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof To)return{fieldPath:a.field.canonicalString(),increment:l.Ie};throw ne()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:wA(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ne()}(n,e.precondition)),t}function SA(n,e){return n&&n.length>0?(Ee(e!==void 0),n.map(t=>function(s,i){let a=s.updateTime?qt(s.updateTime):qt(i);return a.isEqual(re.min())&&(a=qt(i)),new cA(a,s.transformResults||[])}(t,e))):[]}function PA(n,e){return{documents:[Og(n,e.path)]}}function CA(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Og(n,s);const i=function(h){if(h.length!==0)return Mg(zt.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(d=>function(E){return{field:Dr(E.field),direction:VA(E.dir)}}(d))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=El(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ht:t,parent:s}}function kA(n){let e=AA(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){Ee(r===1);const d=t.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];t.where&&(i=function(g){const E=xg(g);return E instanceof zt&&hg(E)?E.getFilters():[E]}(t.where));let a=[];t.orderBy&&(a=function(g){return g.map(E=>function(k){return new vo(Vr(k.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(E))}(t.orderBy));let l=null;t.limit&&(l=function(g){let E;return E=typeof g=="object"?g.value:g,Wo(E)?null:E}(t.limit));let c=null;t.startAt&&(c=function(g){const E=!!g.before,b=g.values||[];return new yo(b,E)}(t.startAt));let h=null;return t.endAt&&(h=function(g){const E=!g.before,b=g.values||[];return new yo(b,E)}(t.endAt)),Qw(e,s,a,i,l,"F",c,h)}function DA(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ne()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function xg(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Vr(t.unaryFilter.field);return Le.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Vr(t.unaryFilter.field);return Le.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Vr(t.unaryFilter.field);return Le.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Vr(t.unaryFilter.field);return Le.create(a,"!=",{nullValue:"NULL_VALUE"});default:return ne()}}(n):n.fieldFilter!==void 0?function(t){return Le.create(Vr(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ne()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return zt.create(t.compositeFilter.filters.map(r=>xg(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ne()}}(t.compositeFilter.op))}(n):ne()}function VA(n){return vA[n]}function OA(n){return EA[n]}function NA(n){return TA[n]}function Dr(n){return{fieldPath:n.canonicalString()}}function Vr(n){return ze.fromServerFormat(n.fieldPath)}function Mg(n){return n instanceof Le?function(t){if(t.op==="=="){if(Yh(t.value))return{unaryFilter:{field:Dr(t.field),op:"IS_NAN"}};if(Jh(t.value))return{unaryFilter:{field:Dr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Yh(t.value))return{unaryFilter:{field:Dr(t.field),op:"IS_NOT_NAN"}};if(Jh(t.value))return{unaryFilter:{field:Dr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Dr(t.field),op:OA(t.op),value:t.value}}}(n):n instanceof zt?function(t){const r=t.getFilters().map(s=>Mg(s));return r.length===1?r[0]:{compositeFilter:{op:NA(t.op),filters:r}}}(n):ne()}function xA(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Lg(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e,t,r,s,i=re.min(),a=re.min(),l=Ge.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Sn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Sn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Sn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Sn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MA{constructor(e){this.Tt=e}}function LA(n){const e=kA({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?vl(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{constructor(){this.Tn=new UA}addToCollectionParentIndex(e,t){return this.Tn.add(t),D.resolve()}getCollectionParents(e,t){return D.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return D.resolve()}deleteFieldIndex(e,t){return D.resolve()}deleteAllFieldIndexes(e){return D.resolve()}createTargetIndexes(e,t){return D.resolve()}getDocumentsMatchingTarget(e,t){return D.resolve(null)}getIndexType(e,t){return D.resolve(0)}getFieldIndexes(e,t){return D.resolve([])}getNextCollectionGroupToUpdate(e){return D.resolve(null)}getMinOffset(e,t){return D.resolve(xn.min())}getMinOffsetFromCollectionGroup(e,t){return D.resolve(xn.min())}updateCollectionGroup(e,t,r){return D.resolve()}updateIndexEntries(e,t){return D.resolve()}}class UA{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Be(De.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Be(De.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ff={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Fg=41943040;class pt{static withCacheSize(e){return new pt(e,pt.DEFAULT_COLLECTION_PERCENTILE,pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pt.DEFAULT_COLLECTION_PERCENTILE=10,pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,pt.DEFAULT=new pt(Fg,pt.DEFAULT_COLLECTION_PERCENTILE,pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),pt.DISABLED=new pt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Un(){return new Gr(0)}static Kn(){return new Gr(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const df="LruGarbageCollector",BA=1048576;function pf([n,e],[t,r]){const s=ue(n,t);return s===0?ue(e,r):s}class jA{constructor(e){this.Hn=e,this.buffer=new Be(pf),this.Jn=0}Yn(){return++this.Jn}Zn(e){const t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();pf(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class $A{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){W(df,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ts(t)?W(df,"Ignoring IndexedDB error during garbage collection: ",t):await es(t)}await this.er(3e5)})}}class HA{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return D.resolve(qo.ae);const r=new jA(t);return this.tr.forEachTarget(e,s=>r.Zn(s.sequenceNumber)).next(()=>this.tr.rr(e,s=>r.Zn(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.tr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(W("LruGarbageCollector","Garbage collection skipped; disabled"),D.resolve(ff)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(W("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ff):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let r,s,i,a,l,c,h;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(g=>(g>this.params.maximumSequenceNumbersToCollect?(W("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,a=Date.now(),this.nthSequenceNumber(e,s))).next(g=>(r=g,l=Date.now(),this.removeTargets(e,r,t))).next(g=>(i=g,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(g=>(h=Date.now(),Cr()<=he.DEBUG&&W("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${g} documents in `+(h-c)+`ms
Total Duration: ${h-d}ms`),D.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:g})))}}function qA(n,e){return new HA(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(){this.changes=new yr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,st.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?D.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KA{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Us(r.mutation,s,kt.empty(),Ue.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,fe()).next(()=>r))}getLocalViewOfDocuments(e,t,r=fe()){const s=rr();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=bs();return i.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=rr();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,fe()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,s){let i=fn();const a=Fs(),l=function(){return Fs()}();return t.forEach((c,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof vr)?i=i.insert(h.key,h):d!==void 0?(a.set(h.key,d.mutation.getFieldMask()),Us(d.mutation,h,d.mutation.getFieldMask(),Ue.now())):a.set(h.key,kt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((h,d)=>a.set(h,d)),t.forEach((h,d)=>{var g;return l.set(h,new KA(d,(g=a.get(h))!==null&&g!==void 0?g:null))}),l))}recalculateAndSaveOverlays(e,t){const r=Fs();let s=new Ce((a,l)=>a-l),i=fe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(c=>{const h=t.get(c);if(h===null)return;let d=r.get(c)||kt.empty();d=l.applyToLocalView(h,d),r.set(c,d);const g=(s.get(l.batchId)||fe()).add(c);s=s.insert(l.batchId,g)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,d=c.value,g=vg();d.forEach(E=>{if(!i.has(E)){const b=bg(t.get(E),r.get(E));b!==null&&g.set(E,b),i=i.add(E)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,g))}return D.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return Z.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Jw(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):D.resolve(rr());let l=Gs,c=i;return a.next(h=>D.forEach(h,(d,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),i.get(d)?D.resolve():this.remoteDocumentCache.getEntry(e,d).next(E=>{c=c.insert(d,E)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,c,h,fe())).next(d=>({batchId:l,changes:yg(d)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Z(t)).next(r=>{let s=bs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=bs();return this.indexManager.getCollectionParents(e,i).next(l=>D.forEach(l,c=>{const h=function(g,E){return new zo(E,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(d=>{d.forEach((g,E)=>{a=a.insert(g,E)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((c,h)=>{const d=h.getKey();a.get(d)===null&&(a=a.insert(d,st.newInvalidDocument(d)))});let l=bs();return a.forEach((c,h)=>{const d=i.get(c);d!==void 0&&Us(d.mutation,h,kt.empty(),Ue.now()),Qo(t,h)&&(l=l.insert(c,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GA{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return D.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:qt(s.createTime)}}(t)),D.resolve()}getNamedQuery(e,t){return D.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,function(s){return{name:s.name,query:LA(s.bundledQuery),readTime:qt(s.readTime)}}(t)),D.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{constructor(){this.overlays=new Ce(Z.comparator),this.Rr=new Map}getOverlay(e,t){return D.resolve(this.overlays.get(t))}getOverlays(e,t){const r=rr();return D.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.Et(e,t,i)}),D.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Rr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Rr.delete(r)),D.resolve()}getOverlaysForCollection(e,t,r){const s=rr(),i=t.length+1,a=new Z(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return D.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new Ce((h,d)=>h-d);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=rr(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const l=rr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,d)=>l.set(h,d)),!(l.size()>=s)););return D.resolve(l)}Et(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Rr.get(s.largestBatchId).delete(r.key);this.Rr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new pA(t,r));let i=this.Rr.get(t);i===void 0&&(i=fe(),this.Rr.set(t,i)),this.Rr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JA{constructor(){this.sessionToken=Ge.EMPTY_BYTE_STRING}getSessionToken(e){return D.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,D.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(){this.Vr=new Be(je.mr),this.gr=new Be(je.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){const r=new je(e,t);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.wr(new je(e,t))}Sr(e,t){e.forEach(r=>this.removeReference(r,t))}br(e){const t=new Z(new De([])),r=new je(t,e),s=new je(t,e+1),i=[];return this.gr.forEachInRange([r,s],a=>{this.wr(a),i.push(a.key)}),i}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const t=new Z(new De([])),r=new je(t,e),s=new je(t,e+1);let i=fe();return this.gr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new je(e,0),r=this.Vr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class je{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return Z.comparator(e.key,t.key)||ue(e.Cr,t.Cr)}static pr(e,t){return ue(e.Cr,t.Cr)||Z.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YA{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new Be(je.mr)}checkEmpty(e){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new dA(i,t,r,s);this.mutationQueue.push(a);for(const l of s)this.Mr=this.Mr.add(new je(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return D.resolve(a)}lookupMutationBatch(e,t){return D.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Nr(r),i=s<0?0:s;return D.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?ac:this.Fr-1)}getAllMutationBatches(e){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new je(t,0),s=new je(t,Number.POSITIVE_INFINITY),i=[];return this.Mr.forEachInRange([r,s],a=>{const l=this.Or(a.Cr);i.push(l)}),D.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Be(ue);return t.forEach(s=>{const i=new je(s,0),a=new je(s,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([i,a],l=>{r=r.add(l.Cr)})}),D.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;Z.isDocumentKey(i)||(i=i.child(""));const a=new je(new Z(i),0);let l=new Be(ue);return this.Mr.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.Cr)),!0)},a),D.resolve(this.Br(l))}Br(e){const t=[];return e.forEach(r=>{const s=this.Or(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){Ee(this.Lr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return D.forEach(t.mutations,s=>{const i=new je(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Mr=r})}qn(e){}containsKey(e,t){const r=new je(t,0),s=this.Mr.firstAfterOrEqual(r);return D.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,D.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{constructor(e){this.kr=e,this.docs=function(){return new Ce(Z.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.kr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return D.resolve(r?r.document.mutableCopy():st.newInvalidDocument(t))}getEntries(e,t){let r=fn();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():st.newInvalidDocument(s))}),D.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=fn();const a=t.path,l=new Z(a.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:d}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||Sw(Rw(d),r)<=0||(s.has(d.key)||Qo(t,d))&&(i=i.insert(d.key,d.mutableCopy()))}return D.resolve(i)}getAllFromCollectionGroup(e,t,r,s){ne()}qr(e,t){return D.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new ZA(this)}getSize(e){return D.resolve(this.size)}}class ZA extends WA{constructor(e){super(),this.Ir=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Ir.addEntry(e,s)):this.Ir.removeEntry(r)}),D.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(e){this.persistence=e,this.Qr=new yr(t=>uc(t),hc),this.lastRemoteSnapshotVersion=re.min(),this.highestTargetId=0,this.$r=0,this.Ur=new _c,this.targetCount=0,this.Kr=Gr.Un()}forEachTarget(e,t){return this.Qr.forEach((r,s)=>t(s)),D.resolve()}getLastRemoteSnapshotVersion(e){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return D.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Kr.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.$r&&(this.$r=t),D.resolve()}zn(e){this.Qr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Kr=new Gr(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,D.resolve()}updateTargetData(e,t){return this.zn(t),D.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Ur.br(t.targetId),this.targetCount-=1,D.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Qr.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.Qr.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),D.waitFor(i).next(()=>s)}getTargetCount(e){return D.resolve(this.targetCount)}getTargetData(e,t){const r=this.Qr.get(t)||null;return D.resolve(r)}addMatchingKeys(e,t,r){return this.Ur.yr(t,r),D.resolve()}removeMatchingKeys(e,t,r){this.Ur.Sr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),D.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Ur.br(t),D.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Ur.vr(t);return D.resolve(r)}containsKey(e,t){return D.resolve(this.Ur.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new qo(0),this.zr=!1,this.zr=!0,this.jr=new JA,this.referenceDelegate=e(this),this.Hr=new eb(this),this.indexManager=new FA,this.remoteDocumentCache=function(s){return new XA(s)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new MA(t),this.Yr=new GA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new QA,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Wr[e.toKey()];return r||(r=new YA(t,this.referenceDelegate),this.Wr[e.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,r){W("MemoryPersistence","Starting transaction:",e);const s=new tb(this.Gr.next());return this.referenceDelegate.Zr(),r(s).next(i=>this.referenceDelegate.Xr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}ei(e,t){return D.or(Object.values(this.Wr).map(r=>()=>r.containsKey(e,t)))}}class tb extends Cw{constructor(e){super(),this.currentSequenceNumber=e}}class yc{constructor(e){this.persistence=e,this.ti=new _c,this.ni=null}static ri(e){return new yc(e)}get ii(){if(this.ni)return this.ni;throw ne()}addReference(e,t,r){return this.ti.addReference(r,t),this.ii.delete(r.toString()),D.resolve()}removeReference(e,t,r){return this.ti.removeReference(r,t),this.ii.add(r.toString()),D.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),D.resolve()}removeTarget(e,t){this.ti.br(t.targetId).forEach(s=>this.ii.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.ii.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.ii,r=>{const s=Z.fromPath(r);return this.si(e,s).next(i=>{i||t.removeEntry(s,re.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(r=>{r?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return D.or([()=>D.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class wo{constructor(e,t){this.persistence=e,this.oi=new yr(r=>Vw(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=qA(this,t)}static ri(e,t){return new wo(e,t)}Zr(){}Xr(e){return D.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){const t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}sr(e){let t=0;return this.rr(e,r=>{t++}).next(()=>t)}rr(e,t){return D.forEach(this.oi,(r,s)=>this.ar(e,r,s).next(i=>i?D.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.qr(e,a=>this.ar(e,a,t).next(l=>{l||(r++,i.removeEntry(a,re.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),D.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),D.resolve()}removeReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),D.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),D.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ji(e.data.value)),t}ar(e,t,r){return D.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.oi.get(t);return D.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Hi=r,this.Ji=s}static Yi(e,t){let r=fe(),s=fe();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new vc(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return Lv()?8:kw(lt())>0?6:4}()}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.rs(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ss(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new nb;return this._s(e,t,a).next(l=>{if(i.result=l,this.Xi)return this.us(e,t,a,l.size)})}).next(()=>i.result)}us(e,t,r,s){return r.documentReadCount<this.es?(Cr()<=he.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",kr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),D.resolve()):(Cr()<=he.DEBUG&&W("QueryEngine","Query:",kr(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ts*s?(Cr()<=he.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",kr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ht(t))):D.resolve())}rs(e,t){if(tf(t))return D.resolve(null);let r=Ht(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=vl(t,null,"F"),r=Ht(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=fe(...i);return this.ns.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const h=this.cs(t,l);return this.ls(t,h,a,c.readTime)?this.rs(e,vl(t,null,"F")):this.hs(e,h,t,c)}))})))}ss(e,t,r,s){return tf(t)||s.isEqual(re.min())?D.resolve(null):this.ns.getDocuments(e,r).next(i=>{const a=this.cs(t,i);return this.ls(t,a,r,s)?D.resolve(null):(Cr()<=he.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),kr(t)),this.hs(e,a,t,bw(s,Gs)).next(l=>l))})}cs(e,t){let r=new Be(mg(e));return t.forEach((s,i)=>{Qo(e,i)&&(r=r.add(i))}),r}ls(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}_s(e,t,r){return Cr()<=he.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",kr(t)),this.ns.getDocumentsMatchingQuery(e,t,xn.min(),r)}hs(e,t,r,s){return this.ns.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ec="LocalStore",sb=3e8;class ib{constructor(e,t,r,s){this.persistence=e,this.Ps=t,this.serializer=s,this.Ts=new Ce(ue),this.Is=new yr(i=>uc(i),hc),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(r)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new zA(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}function ob(n,e,t,r){return new ib(n,e,t,r)}async function Bg(n,e){const t=ie(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.As(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let c=fe();for(const h of s){a.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}for(const h of i){l.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}return t.localDocuments.getDocuments(r,c).next(h=>({Rs:h,removedBatchIds:a,addedBatchIds:l}))})})}function ab(n,e){const t=ie(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.ds.newChangeBuffer({trackRemovals:!0});return function(l,c,h,d){const g=h.batch,E=g.keys();let b=D.resolve();return E.forEach(k=>{b=b.next(()=>d.getEntry(c,k)).next(O=>{const N=h.docVersions.get(k);Ee(N!==null),O.version.compareTo(N)<0&&(g.applyToRemoteDocument(O,h),O.isValidDocument()&&(O.setReadTime(h.commitVersion),d.addEntry(O)))})}),b.next(()=>l.mutationQueue.removeMutationBatch(c,g))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=fe();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function jg(n){const e=ie(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}function lb(n,e){const t=ie(n),r=e.snapshotVersion;let s=t.Ts;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.ds.newChangeBuffer({trackRemovals:!0});s=t.Ts;const l=[];e.targetChanges.forEach((d,g)=>{const E=s.get(g);if(!E)return;l.push(t.Hr.removeMatchingKeys(i,d.removedDocuments,g).next(()=>t.Hr.addMatchingKeys(i,d.addedDocuments,g)));let b=E.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?b=b.withResumeToken(Ge.EMPTY_BYTE_STRING,re.min()).withLastLimboFreeSnapshotVersion(re.min()):d.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(d.resumeToken,r)),s=s.insert(g,b),function(O,N,K){return O.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=sb?!0:K.addedDocuments.size+K.modifiedDocuments.size+K.removedDocuments.size>0}(E,b,d)&&l.push(t.Hr.updateTargetData(i,b))});let c=fn(),h=fe();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(cb(i,a,e.documentUpdates).next(d=>{c=d.Vs,h=d.fs})),!r.isEqual(re.min())){const d=t.Hr.getLastRemoteSnapshotVersion(i).next(g=>t.Hr.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return D.waitFor(l).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(t.Ts=s,i))}function cb(n,e,t){let r=fe(),s=fe();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=fn();return t.forEach((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(re.min())?(e.removeEntry(l,c.readTime),a=a.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),a=a.insert(l,c)):W(Ec,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{Vs:a,fs:s}})}function ub(n,e){const t=ie(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=ac),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function hb(n,e){const t=ie(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Hr.getTargetData(r,e).next(i=>i?(s=i,D.resolve(s)):t.Hr.allocateTargetId(r).next(a=>(s=new Sn(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Hr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.Ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ts=t.Ts.insert(r.targetId,r),t.Is.set(e,r.targetId)),r})}async function Al(n,e,t){const r=ie(n),s=r.Ts.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!ts(a))throw a;W(Ec,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Ts=r.Ts.remove(e),r.Is.delete(s.target)}function gf(n,e,t){const r=ie(n);let s=re.min(),i=fe();return r.persistence.runTransaction("Execute query","readwrite",a=>function(c,h,d){const g=ie(c),E=g.Is.get(d);return E!==void 0?D.resolve(g.Ts.get(E)):g.Hr.getTargetData(h,d)}(r,a,Ht(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(a,l.targetId).next(c=>{i=c})}).next(()=>r.Ps.getDocumentsMatchingQuery(a,e,t?s:re.min(),t?i:fe())).next(l=>(fb(r,Xw(e),l),{documents:l,gs:i})))}function fb(n,e,t){let r=n.Es.get(e)||re.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.Es.set(e,r)}class mf{constructor(){this.activeTargetIds=sA()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class db{constructor(){this.ho=new mf,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,r){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new mf,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pb{To(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _f="ConnectivityMonitor";class yf{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){W(_f,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){W(_f,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bi=null;function bl(){return Bi===null?Bi=function(){return 268435456+Math.round(2147483648*Math.random())}():Bi++,"0x"+Bi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba="RestConnection",gb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class mb{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${r}/databases/${s}`,this.wo=this.databaseId.database===mo?`project_id=${r}`:`project_id=${r}&database_id=${s}`}So(e,t,r,s,i){const a=bl(),l=this.bo(e,t.toUriEncodedString());W(Ba,`Sending RPC '${e}' ${a}:`,l,r);const c={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(c,s,i),this.vo(e,l,c,r).then(h=>(W(Ba,`Received RPC '${e}' ${a}: `,h),h),h=>{throw qr(Ba,`RPC '${e}' ${a} failed with error: `,h,"url: ",l,"request:",r),h})}Co(e,t,r,s,i,a){return this.So(e,t,r,s,i)}Do(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Zr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}bo(e,t){const r=gb[e];return`${this.po}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _b{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Uo(e){this.ko(e)}Ko(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze="WebChannelConnection";class yb extends mb{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,r,s){const i=bl();return new Promise((a,l)=>{const c=new Wp;c.setWithCredentials(!0),c.listenOnce(Kp.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Qi.NO_ERROR:const d=c.getResponseJson();W(Ze,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),a(d);break;case Qi.TIMEOUT:W(Ze,`RPC '${e}' ${i} timed out`),l(new X(F.DEADLINE_EXCEEDED,"Request time out"));break;case Qi.HTTP_ERROR:const g=c.getStatus();if(W(Ze,`RPC '${e}' ${i} failed with status:`,g,"response text:",c.getResponseText()),g>0){let E=c.getResponseJson();Array.isArray(E)&&(E=E[0]);const b=E==null?void 0:E.error;if(b&&b.status&&b.message){const k=function(N){const K=N.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(K)>=0?K:F.UNKNOWN}(b.status);l(new X(k,b.message))}else l(new X(F.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new X(F.UNAVAILABLE,"Connection failed."));break;default:ne()}}finally{W(Ze,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);W(Ze,`RPC '${e}' ${i} sending request:`,s),c.send(t,"POST",h,r,15)})}Wo(e,t,r){const s=bl(),i=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Qp(),l=Gp(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Do(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const d=i.join("");W(Ze,`Creating RPC '${e}' stream ${s}: ${d}`,c);const g=a.createWebChannel(d,c);let E=!1,b=!1;const k=new _b({Fo:N=>{b?W(Ze,`Not sending because RPC '${e}' stream ${s} is closed:`,N):(E||(W(Ze,`Opening RPC '${e}' stream ${s} transport.`),g.open(),E=!0),W(Ze,`RPC '${e}' stream ${s} sending:`,N),g.send(N))},Mo:()=>g.close()}),O=(N,K,G)=>{N.listen(K,z=>{try{G(z)}catch(q){setTimeout(()=>{throw q},0)}})};return O(g,As.EventType.OPEN,()=>{b||(W(Ze,`RPC '${e}' stream ${s} transport opened.`),k.Qo())}),O(g,As.EventType.CLOSE,()=>{b||(b=!0,W(Ze,`RPC '${e}' stream ${s} transport closed`),k.Uo())}),O(g,As.EventType.ERROR,N=>{b||(b=!0,qr(Ze,`RPC '${e}' stream ${s} transport errored:`,N),k.Uo(new X(F.UNAVAILABLE,"The operation could not be completed")))}),O(g,As.EventType.MESSAGE,N=>{var K;if(!b){const G=N.data[0];Ee(!!G);const z=G,q=(z==null?void 0:z.error)||((K=z[0])===null||K===void 0?void 0:K.error);if(q){W(Ze,`RPC '${e}' stream ${s} received error:`,q);const oe=q.status;let ye=function(_){const T=Oe[_];if(T!==void 0)return Pg(T)}(oe),w=q.message;ye===void 0&&(ye=F.INTERNAL,w="Unknown error status: "+oe+" with message "+q.message),b=!0,k.Uo(new X(ye,w)),g.close()}else W(Ze,`RPC '${e}' stream ${s} received:`,G),k.Ko(G)}}),O(l,zp.STAT_EVENT,N=>{N.stat===dl.PROXY?W(Ze,`RPC '${e}' stream ${s} detected buffering proxy`):N.stat===dl.NOPROXY&&W(Ze,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{k.$o()},0),k}}function ja(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zo(n){return new IA(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Ti=e,this.timerId=t,this.Go=r,this.zo=s,this.jo=i,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const t=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),s=Math.max(0,t-r);s>0&&W("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,s,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vf="PersistentStream";class Hg{constructor(e,t,r,s,i,a,l,c){this.Ti=e,this.n_=r,this.r_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new $g(e,t)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():t&&t.code===F.RESOURCE_EXHAUSTED?(hn(t.toString()),hn("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.i_===t&&this.V_(r,s)},r=>{e(()=>{const s=new X(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(s)})})}V_(e,t){const r=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(s=>{r(()=>this.m_(s))}),this.stream.onMessage(s=>{r(()=>++this.__==1?this.g_(s):this.onNext(s))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return W(vf,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(W(vf,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class vb extends Hg{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}f_(e,t){return this.connection.Wo("Listen",e,t)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const t=bA(this.serializer,e),r=function(i){if(!("targetChange"in i))return re.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?re.min():a.readTime?qt(a.readTime):re.min()}(e);return this.listener.p_(t,r)}y_(e){const t={};t.database=wl(this.serializer),t.addTarget=function(i,a){let l;const c=a.target;if(l=yl(c)?{documents:PA(i,c)}:{query:CA(i,c).ht},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Dg(i,a.resumeToken);const h=El(i,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(re.min())>0){l.readTime=Io(i,a.snapshotVersion.toTimestamp());const h=El(i,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=DA(this.serializer,e);r&&(t.labels=r),this.I_(t)}w_(e){const t={};t.database=wl(this.serializer),t.removeTarget=e,this.I_(t)}}class Eb extends Hg{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return Ee(!!e.streamToken),this.lastStreamToken=e.streamToken,Ee(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){Ee(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const t=SA(e.writeResults,e.commitTime),r=qt(e.commitTime);return this.listener.v_(r,t)}C_(){const e={};e.database=wl(this.serializer),this.I_(e)}b_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>RA(this.serializer,r))};this.I_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{}class Ib extends Tb{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.F_=!1}M_(){if(this.F_)throw new X(F.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,r,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.So(e,Tl(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new X(F.UNKNOWN,i.toString())})}Co(e,t,r,s,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Co(e,Tl(t,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new X(F.UNKNOWN,a.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class wb{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(hn(t),this.N_=!1):W("OnlineStateTracker",t)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr="RemoteStore";class Ab{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=i,this.z_.To(a=>{r.enqueueAndForget(async()=>{Er(this)&&(W(dr,"Restarting streams for network reachability change."),await async function(c){const h=ie(c);h.W_.add(4),await di(h),h.j_.set("Unknown"),h.W_.delete(4),await ea(h)}(this))})}),this.j_=new wb(r,s)}}async function ea(n){if(Er(n))for(const e of n.G_)await e(!0)}async function di(n){for(const e of n.G_)await e(!1)}function qg(n,e){const t=ie(n);t.K_.has(e.targetId)||(t.K_.set(e.targetId,e),Ac(t)?wc(t):ns(t).c_()&&Ic(t,e))}function Tc(n,e){const t=ie(n),r=ns(t);t.K_.delete(e),r.c_()&&Wg(t,e),t.K_.size===0&&(r.c_()?r.P_():Er(t)&&t.j_.set("Unknown"))}function Ic(n,e){if(n.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(re.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ns(n).y_(e)}function Wg(n,e){n.H_.Ne(e),ns(n).w_(e)}function wc(n){n.H_=new yA({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>n.K_.get(e)||null,it:()=>n.datastore.serializer.databaseId}),ns(n).start(),n.j_.B_()}function Ac(n){return Er(n)&&!ns(n).u_()&&n.K_.size>0}function Er(n){return ie(n).W_.size===0}function Kg(n){n.H_=void 0}async function bb(n){n.j_.set("Online")}async function Rb(n){n.K_.forEach((e,t)=>{Ic(n,e)})}async function Sb(n,e){Kg(n),Ac(n)?(n.j_.q_(e),wc(n)):n.j_.set("Unknown")}async function Pb(n,e,t){if(n.j_.set("Online"),e instanceof kg&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const l of i.targetIds)s.K_.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.K_.delete(l),s.H_.removeTarget(l))}(n,e)}catch(r){W(dr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ao(n,r)}else if(e instanceof Zi?n.H_.We(e):e instanceof Cg?n.H_.Ze(e):n.H_.je(e),!t.isEqual(re.min()))try{const r=await jg(n.localStore);t.compareTo(r)>=0&&await function(i,a){const l=i.H_.ot(a);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.K_.get(h);d&&i.K_.set(h,d.withResumeToken(c.resumeToken,a))}}),l.targetMismatches.forEach((c,h)=>{const d=i.K_.get(c);if(!d)return;i.K_.set(c,d.withResumeToken(Ge.EMPTY_BYTE_STRING,d.snapshotVersion)),Wg(i,c);const g=new Sn(d.target,c,h,d.sequenceNumber);Ic(i,g)}),i.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){W(dr,"Failed to raise snapshot:",r),await Ao(n,r)}}async function Ao(n,e,t){if(!ts(e))throw e;n.W_.add(1),await di(n),n.j_.set("Offline"),t||(t=()=>jg(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{W(dr,"Retrying IndexedDB access"),await t(),n.W_.delete(1),await ea(n)})}function zg(n,e){return e().catch(t=>Ao(n,t,e))}async function ta(n){const e=ie(n),t=Un(e);let r=e.U_.length>0?e.U_[e.U_.length-1].batchId:ac;for(;Cb(e);)try{const s=await ub(e.localStore,r);if(s===null){e.U_.length===0&&t.P_();break}r=s.batchId,kb(e,s)}catch(s){await Ao(e,s)}Gg(e)&&Qg(e)}function Cb(n){return Er(n)&&n.U_.length<10}function kb(n,e){n.U_.push(e);const t=Un(n);t.c_()&&t.S_&&t.b_(e.mutations)}function Gg(n){return Er(n)&&!Un(n).u_()&&n.U_.length>0}function Qg(n){Un(n).start()}async function Db(n){Un(n).C_()}async function Vb(n){const e=Un(n);for(const t of n.U_)e.b_(t.mutations)}async function Ob(n,e,t){const r=n.U_.shift(),s=pc.from(r,e,t);await zg(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await ta(n)}async function Nb(n,e){e&&Un(n).S_&&await async function(r,s){if(function(a){return mA(a)&&a!==F.ABORTED}(s.code)){const i=r.U_.shift();Un(r).h_(),await zg(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ta(r)}}(n,e),Gg(n)&&Qg(n)}async function Ef(n,e){const t=ie(n);t.asyncQueue.verifyOperationInProgress(),W(dr,"RemoteStore received new credentials");const r=Er(t);t.W_.add(3),await di(t),r&&t.j_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.W_.delete(3),await ea(t)}async function xb(n,e){const t=ie(n);e?(t.W_.delete(2),await ea(t)):e||(t.W_.add(2),await di(t),t.j_.set("Unknown"))}function ns(n){return n.J_||(n.J_=function(t,r,s){const i=ie(t);return i.M_(),new vb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{xo:bb.bind(null,n),No:Rb.bind(null,n),Lo:Sb.bind(null,n),p_:Pb.bind(null,n)}),n.G_.push(async e=>{e?(n.J_.h_(),Ac(n)?wc(n):n.j_.set("Unknown")):(await n.J_.stop(),Kg(n))})),n.J_}function Un(n){return n.Y_||(n.Y_=function(t,r,s){const i=ie(t);return i.M_(),new Eb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{xo:()=>Promise.resolve(),No:Db.bind(null,n),Lo:Nb.bind(null,n),D_:Vb.bind(null,n),v_:Ob.bind(null,n)}),n.G_.push(async e=>{e?(n.Y_.h_(),await ta(n)):(await n.Y_.stop(),n.U_.length>0&&(W(dr,`Stopping write stream with ${n.U_.length} pending writes`),n.U_=[]))})),n.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new On,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,l=new bc(e,t,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new X(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Rc(n,e){if(hn("AsyncQueue",`${e}: ${n}`),ts(n))return new X(F.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{static emptySet(e){return new Br(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||Z.comparator(t.key,r.key):(t,r)=>Z.comparator(t.key,r.key),this.keyedMap=bs(),this.sortedSet=new Ce(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Br)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Br;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(){this.Z_=new Ce(Z.comparator)}track(e){const t=e.doc.key,r=this.Z_.get(t);r?e.type!==0&&r.type===3?this.Z_=this.Z_.insert(t,e):e.type===3&&r.type!==1?this.Z_=this.Z_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Z_=this.Z_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Z_=this.Z_.remove(t):e.type===1&&r.type===2?this.Z_=this.Z_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):ne():this.Z_=this.Z_.insert(t,e)}X_(){const e=[];return this.Z_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Qr{constructor(e,t,r,s,i,a,l,c,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new Qr(e,t,Br.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Go(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class Lb{constructor(){this.queries=If(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(t,r){const s=ie(t),i=s.queries;s.queries=If(),i.forEach((a,l)=>{for(const c of l.ta)c.onError(r)})})(this,new X(F.ABORTED,"Firestore shutting down"))}}function If(){return new yr(n=>gg(n),Go)}async function Fb(n,e){const t=ie(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.na()&&e.ra()&&(r=2):(i=new Mb,r=e.ra()?0:1);try{switch(r){case 0:i.ea=await t.onListen(s,!0);break;case 1:i.ea=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const l=Rc(a,`Initialization of query '${kr(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,i),i.ta.push(e),e.sa(t.onlineState),i.ea&&e.oa(i.ea)&&Sc(t)}async function Ub(n,e){const t=ie(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.ta.indexOf(e);a>=0&&(i.ta.splice(a,1),i.ta.length===0?s=e.ra()?0:1:!i.na()&&e.ra()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Bb(n,e){const t=ie(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const l of a.ta)l.oa(s)&&(r=!0);a.ea=s}}r&&Sc(t)}function jb(n,e,t){const r=ie(n),s=r.queries.get(e);if(s)for(const i of s.ta)i.onError(t);r.queries.delete(e)}function Sc(n){n.ia.forEach(e=>{e.next()})}var Rl,wf;(wf=Rl||(Rl={}))._a="default",wf.Cache="cache";class $b{constructor(e,t,r){this.query=e,this.aa=t,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Qr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ua?this.la(e)&&(this.aa.next(e),t=!0):this.ha(e,this.onlineState)&&(this.Pa(e),t=!0),this.ca=e,t}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let t=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),t=!0),t}ha(e,t){if(!e.fromCache||!this.ra())return!0;const r=t!=="Offline";return(!this.options.Ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}la(e){if(e.docChanges.length>0)return!0;const t=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Pa(e){e=Qr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==Rl.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{constructor(e){this.key=e}}class Yg{constructor(e){this.key=e}}class Hb{constructor(e,t){this.query=e,this.fa=t,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=fe(),this.mutatedKeys=fe(),this.ya=mg(e),this.wa=new Br(this.ya)}get Sa(){return this.fa}ba(e,t){const r=t?t.Da:new Tf,s=t?t.wa:this.wa;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,g)=>{const E=s.get(d),b=Qo(this.query,g)?g:null,k=!!E&&this.mutatedKeys.has(E.key),O=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let N=!1;E&&b?E.data.isEqual(b.data)?k!==O&&(r.track({type:3,doc:b}),N=!0):this.va(E,b)||(r.track({type:2,doc:b}),N=!0,(c&&this.ya(b,c)>0||h&&this.ya(b,h)<0)&&(l=!0)):!E&&b?(r.track({type:0,doc:b}),N=!0):E&&!b&&(r.track({type:1,doc:E}),N=!0,(c||h)&&(l=!0)),N&&(b?(a=a.add(b),i=O?i.add(d):i.delete(d)):(a=a.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{wa:a,Da:r,ls:l,mutatedKeys:i}}va(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const a=e.Da.X_();a.sort((d,g)=>function(b,k){const O=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ne()}};return O(b)-O(k)}(d.type,g.type)||this.ya(d.doc,g.doc)),this.Ca(r),s=s!=null&&s;const l=t&&!s?this.Fa():[],c=this.pa.size===0&&this.current&&!s?1:0,h=c!==this.ga;return this.ga=c,a.length!==0||h?{snapshot:new Qr(this.query,e.wa,i,a,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:l}:{Ma:l}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new Tf,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(t=>this.fa=this.fa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.fa=this.fa.delete(t)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=fe(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const t=[];return e.forEach(r=>{this.pa.has(r)||t.push(new Yg(r))}),this.pa.forEach(r=>{e.has(r)||t.push(new Jg(r))}),t}Oa(e){this.fa=e.gs,this.pa=fe();const t=this.ba(e.documents);return this.applyChanges(t,!0)}Na(){return Qr.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const Pc="SyncEngine";class qb{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Wb{constructor(e){this.key=e,this.Ba=!1}}class Kb{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.La={},this.ka=new yr(l=>gg(l),Go),this.qa=new Map,this.Qa=new Set,this.$a=new Ce(Z.comparator),this.Ua=new Map,this.Ka=new _c,this.Wa={},this.Ga=new Map,this.za=Gr.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function zb(n,e,t=!0){const r=rm(n);let s;const i=r.ka.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Na()):s=await Xg(r,e,t,!0),s}async function Gb(n,e){const t=rm(n);await Xg(t,e,!0,!1)}async function Xg(n,e,t,r){const s=await hb(n.localStore,Ht(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let l;return r&&(l=await Qb(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&qg(n.remoteStore,s),l}async function Qb(n,e,t,r,s){n.Ha=(g,E,b)=>async function(O,N,K,G){let z=N.view.ba(K);z.ls&&(z=await gf(O.localStore,N.query,!1).then(({documents:w})=>N.view.ba(w,z)));const q=G&&G.targetChanges.get(N.targetId),oe=G&&G.targetMismatches.get(N.targetId)!=null,ye=N.view.applyChanges(z,O.isPrimaryClient,q,oe);return bf(O,N.targetId,ye.Ma),ye.snapshot}(n,g,E,b);const i=await gf(n.localStore,e,!0),a=new Hb(e,i.gs),l=a.ba(i.documents),c=fi.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=a.applyChanges(l,n.isPrimaryClient,c);bf(n,t,h.Ma);const d=new qb(e,t,a);return n.ka.set(e,d),n.qa.has(t)?n.qa.get(t).push(e):n.qa.set(t,[e]),h.snapshot}async function Jb(n,e,t){const r=ie(n),s=r.ka.get(e),i=r.qa.get(s.targetId);if(i.length>1)return r.qa.set(s.targetId,i.filter(a=>!Go(a,e))),void r.ka.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Al(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Tc(r.remoteStore,s.targetId),Sl(r,s.targetId)}).catch(es)):(Sl(r,s.targetId),await Al(r.localStore,s.targetId,!0))}async function Yb(n,e){const t=ie(n),r=t.ka.get(e),s=t.qa.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Tc(t.remoteStore,r.targetId))}async function Xb(n,e,t){const r=iR(n);try{const s=await function(a,l){const c=ie(a),h=Ue.now(),d=l.reduce((b,k)=>b.add(k.key),fe());let g,E;return c.persistence.runTransaction("Locally write mutations","readwrite",b=>{let k=fn(),O=fe();return c.ds.getEntries(b,d).next(N=>{k=N,k.forEach((K,G)=>{G.isValidDocument()||(O=O.add(K))})}).next(()=>c.localDocuments.getOverlayedDocuments(b,k)).next(N=>{g=N;const K=[];for(const G of l){const z=hA(G,g.get(G.key).overlayedDocument);z!=null&&K.push(new vr(G.key,z,lg(z.value.mapValue),ln.exists(!0)))}return c.mutationQueue.addMutationBatch(b,h,K,l)}).next(N=>{E=N;const K=N.applyToLocalDocumentSet(g,O);return c.documentOverlayCache.saveOverlays(b,N.batchId,K)})}).then(()=>({batchId:E.batchId,changes:yg(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,c){let h=a.Wa[a.currentUser.toKey()];h||(h=new Ce(ue)),h=h.insert(l,c),a.Wa[a.currentUser.toKey()]=h}(r,s.batchId,t),await pi(r,s.changes),await ta(r.remoteStore)}catch(s){const i=Rc(s,"Failed to persist write");t.reject(i)}}async function Zg(n,e){const t=ie(n);try{const r=await lb(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Ua.get(i);a&&(Ee(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.Ba=!0:s.modifiedDocuments.size>0?Ee(a.Ba):s.removedDocuments.size>0&&(Ee(a.Ba),a.Ba=!1))}),await pi(t,r,e)}catch(r){await es(r)}}function Af(n,e,t){const r=ie(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.ka.forEach((i,a)=>{const l=a.view.sa(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const c=ie(a);c.onlineState=l;let h=!1;c.queries.forEach((d,g)=>{for(const E of g.ta)E.sa(l)&&(h=!0)}),h&&Sc(c)}(r.eventManager,e),s.length&&r.La.p_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Zb(n,e,t){const r=ie(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Ua.get(e),i=s&&s.key;if(i){let a=new Ce(Z.comparator);a=a.insert(i,st.newNoDocument(i,re.min()));const l=fe().add(i),c=new Xo(re.min(),new Map,new Ce(ue),a,l);await Zg(r,c),r.$a=r.$a.remove(i),r.Ua.delete(e),Cc(r)}else await Al(r.localStore,e,!1).then(()=>Sl(r,e,t)).catch(es)}async function eR(n,e){const t=ie(n),r=e.batch.batchId;try{const s=await ab(t.localStore,e);tm(t,r,null),em(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await pi(t,s)}catch(s){await es(s)}}async function tR(n,e,t){const r=ie(n);try{const s=await function(a,l){const c=ie(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let d;return c.mutationQueue.lookupMutationBatch(h,l).next(g=>(Ee(g!==null),d=g.keys(),c.mutationQueue.removeMutationBatch(h,g))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d)).next(()=>c.localDocuments.getDocuments(h,d))})}(r.localStore,e);tm(r,e,t),em(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await pi(r,s)}catch(s){await es(s)}}function em(n,e){(n.Ga.get(e)||[]).forEach(t=>{t.resolve()}),n.Ga.delete(e)}function tm(n,e,t){const r=ie(n);let s=r.Wa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Wa[r.currentUser.toKey()]=s}}function Sl(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.qa.get(e))n.ka.delete(r),t&&n.La.Ja(r,t);n.qa.delete(e),n.isPrimaryClient&&n.Ka.br(e).forEach(r=>{n.Ka.containsKey(r)||nm(n,r)})}function nm(n,e){n.Qa.delete(e.path.canonicalString());const t=n.$a.get(e);t!==null&&(Tc(n.remoteStore,t),n.$a=n.$a.remove(e),n.Ua.delete(t),Cc(n))}function bf(n,e,t){for(const r of t)r instanceof Jg?(n.Ka.addReference(r.key,e),nR(n,r)):r instanceof Yg?(W(Pc,"Document no longer in limbo: "+r.key),n.Ka.removeReference(r.key,e),n.Ka.containsKey(r.key)||nm(n,r.key)):ne()}function nR(n,e){const t=e.key,r=t.path.canonicalString();n.$a.get(t)||n.Qa.has(r)||(W(Pc,"New document in limbo: "+t),n.Qa.add(r),Cc(n))}function Cc(n){for(;n.Qa.size>0&&n.$a.size<n.maxConcurrentLimboResolutions;){const e=n.Qa.values().next().value;n.Qa.delete(e);const t=new Z(De.fromString(e)),r=n.za.next();n.Ua.set(r,new Wb(t)),n.$a=n.$a.insert(t,r),qg(n.remoteStore,new Sn(Ht(fc(t.path)),r,"TargetPurposeLimboResolution",qo.ae))}}async function pi(n,e,t){const r=ie(n),s=[],i=[],a=[];r.ka.isEmpty()||(r.ka.forEach((l,c)=>{a.push(r.Ha(c,e,t).then(h=>{var d;if((h||t)&&r.isPrimaryClient){const g=h?!h.fromCache:(d=t==null?void 0:t.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,g?"current":"not-current")}if(h){s.push(h);const g=vc.Yi(c.targetId,h);i.push(g)}}))}),await Promise.all(a),r.La.p_(s),await async function(c,h){const d=ie(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>D.forEach(h,E=>D.forEach(E.Hi,b=>d.persistence.referenceDelegate.addReference(g,E.targetId,b)).next(()=>D.forEach(E.Ji,b=>d.persistence.referenceDelegate.removeReference(g,E.targetId,b)))))}catch(g){if(!ts(g))throw g;W(Ec,"Failed to update sequence numbers: "+g)}for(const g of h){const E=g.targetId;if(!g.fromCache){const b=d.Ts.get(E),k=b.snapshotVersion,O=b.withLastLimboFreeSnapshotVersion(k);d.Ts=d.Ts.insert(E,O)}}}(r.localStore,i))}async function rR(n,e){const t=ie(n);if(!t.currentUser.isEqual(e)){W(Pc,"User change. New user:",e.toKey());const r=await Bg(t.localStore,e);t.currentUser=e,function(i,a){i.Ga.forEach(l=>{l.forEach(c=>{c.reject(new X(F.CANCELLED,a))})}),i.Ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await pi(t,r.Rs)}}function sR(n,e){const t=ie(n),r=t.Ua.get(e);if(r&&r.Ba)return fe().add(r.key);{let s=fe();const i=t.qa.get(e);if(!i)return s;for(const a of i){const l=t.ka.get(a);s=s.unionWith(l.view.Sa)}return s}}function rm(n){const e=ie(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Zg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=sR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Zb.bind(null,e),e.La.p_=Bb.bind(null,e.eventManager),e.La.Ja=jb.bind(null,e.eventManager),e}function iR(n){const e=ie(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=eR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=tR.bind(null,e),e}class bo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Zo(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){return ob(this.persistence,new rb,e.initialUser,this.serializer)}Xa(e){return new Ug(yc.ri,this.serializer)}Za(e){return new db}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}bo.provider={build:()=>new bo};class oR extends bo{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){Ee(this.persistence.referenceDelegate instanceof wo);const r=this.persistence.referenceDelegate.garbageCollector;return new $A(r,e.asyncQueue,t)}Xa(e){const t=this.cacheSizeBytes!==void 0?pt.withCacheSize(this.cacheSizeBytes):pt.DEFAULT;return new Ug(r=>wo.ri(r,t),this.serializer)}}class Pl{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Af(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=rR.bind(null,this.syncEngine),await xb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Lb}()}createDatastore(e){const t=Zo(e.databaseInfo.databaseId),r=function(i){return new yb(i)}(e.databaseInfo);return function(i,a,l,c){return new Ib(i,a,l,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,l){return new Ab(r,s,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>Af(this.syncEngine,t,0),function(){return yf.D()?new yf:new pb}())}createSyncEngine(e,t){return function(s,i,a,l,c,h,d){const g=new Kb(s,i,a,l,c,h);return d&&(g.ja=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=ie(s);W(dr,"RemoteStore shutting down."),i.W_.add(5),await di(i),i.z_.shutdown(),i.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Pl.provider={build:()=>new Pl};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aR{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):hn("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn="FirestoreClient";class lR{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=et.UNAUTHENTICATED,this.clientId=Xp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{W(Bn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(W(Bn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new On;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Rc(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function $a(n,e){n.asyncQueue.verifyOperationInProgress(),W(Bn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Bg(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Rf(n,e){n.asyncQueue.verifyOperationInProgress();const t=await cR(n);W(Bn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Ef(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Ef(e.remoteStore,s)),n._onlineComponents=e}async function cR(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){W(Bn,"Using user provided OfflineComponentProvider");try{await $a(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===F.FAILED_PRECONDITION||s.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;qr("Error using user provided cache. Falling back to memory cache: "+t),await $a(n,new bo)}}else W(Bn,"Using default OfflineComponentProvider"),await $a(n,new oR(void 0));return n._offlineComponents}async function sm(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(W(Bn,"Using user provided OnlineComponentProvider"),await Rf(n,n._uninitializedComponentsProvider._online)):(W(Bn,"Using default OnlineComponentProvider"),await Rf(n,new Pl))),n._onlineComponents}function uR(n){return sm(n).then(e=>e.syncEngine)}async function hR(n){const e=await sm(n),t=e.eventManager;return t.onListen=zb.bind(null,e.syncEngine),t.onUnlisten=Jb.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Gb.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Yb.bind(null,e.syncEngine),t}function fR(n,e,t={}){const r=new On;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,l,c,h){const d=new aR({next:E=>{d.su(),a.enqueueAndForget(()=>Ub(i,g));const b=E.docs.has(l);!b&&E.fromCache?h.reject(new X(F.UNAVAILABLE,"Failed to get document because the client is offline.")):b&&E.fromCache&&c&&c.source==="server"?h.reject(new X(F.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(E)},error:E=>h.reject(E)}),g=new $b(fc(l.path),d,{includeMetadataChanges:!0,Ta:!0});return Fb(i,g)}(await hR(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function im(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sf=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dR(n,e,t){if(!t)throw new X(F.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function pR(n,e,t,r){if(e===!0&&r===!0)throw new X(F.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Pf(n){if(!Z.isDocumentKey(n))throw new X(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function kc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ne()}function ei(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new X(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=kc(n);throw new X(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const om="firestore.googleapis.com",Cf=!0;class kf{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new X(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=om,this.ssl=Cf}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Cf;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Fg;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<BA)throw new X(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}pR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=im((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new X(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new X(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new X(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Dc{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new kf({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new X(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new X(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new kf(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new mw;switch(r.type){case"firstParty":return new Ew(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new X(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Sf.get(t);r&&(W("ComponentProvider","Removing Datastore"),Sf.delete(t),r.terminate())}(this),Promise.resolve()}}function gR(n,e,t,r={}){var s;const i=(n=ei(n,Dc))._getSettings(),a=Object.assign(Object.assign({},i),{emulatorOptions:n._getEmulatorOptions()}),l=`${e}:${t}`;i.host!==om&&i.host!==l&&qr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c=Object.assign(Object.assign({},i),{host:l,ssl:!1,emulatorOptions:r});if(!lr(c,a)&&(n._setSettings(c),r.mockUserToken)){let h,d;if(typeof r.mockUserToken=="string")h=r.mockUserToken,d=et.MOCK_USER;else{h=kv(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new X(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new et(g)}n._authCredentials=new _w(new Jp(h,d))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Vc(this.firestore,e,this._query)}}class bt{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ti(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new bt(this.firestore,e,this._key)}}class ti extends Vc{constructor(e,t,r){super(e,t,fc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new bt(this.firestore,null,new Z(e))}withConverter(e){return new ti(this.firestore,e,this._path)}}function Df(n,e,...t){if(n=Rt(n),arguments.length===1&&(e=Xp.newId()),dR("doc","path",e),n instanceof Dc){const r=De.fromString(e,...t);return Pf(r),new bt(n,null,new Z(r))}{if(!(n instanceof bt||n instanceof ti))throw new X(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(De.fromString(e,...t));return Pf(r),new bt(n.firestore,n instanceof ti?n.converter:null,new Z(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vf="AsyncQueue";class Of{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new $g(this,"async_queue_retry"),this.Su=()=>{const r=ja();r&&W(Vf,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.bu=e;const t=ja();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const t=ja();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const t=new On;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!ts(e))throw e;W(Vf,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const t=this.bu.then(()=>(this.pu=!0,e().catch(r=>{this.gu=r,this.pu=!1;const s=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw hn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.pu=!1,r))));return this.bu=t,t}enqueueAfterDelay(e,t,r){this.Du(),this.wu.indexOf(e)>-1&&(t=0);const s=bc.createAndSchedule(this,e,t,r,i=>this.Fu(i));return this.fu.push(s),s}Du(){this.gu&&ne()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.fu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const t=this.fu.indexOf(e);this.fu.splice(t,1)}}class Oc extends Dc{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Of,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Of(e),this._firestoreClient=void 0,await e}}}function mR(n,e){const t=typeof n=="object"?n:op(),r=typeof n=="string"?n:mo,s=Jl(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Pv("firestore");i&&gR(s,...i)}return s}function am(n){if(n._terminated)throw new X(F.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||_R(n),n._firestoreClient}function _R(n){var e,t,r;const s=n._freezeSettings(),i=function(l,c,h,d){return new xw(l,c,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,im(d.experimentalLongPollingOptions),d.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new lR(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Jr(Ge.fromBase64String(e))}catch(t){throw new X(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Jr(Ge.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new X(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new X(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new X(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yR=/^__.*__$/;class vR{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new vr(e,this.data,this.fieldMask,t,this.fieldTransforms):new hi(e,this.data,t,this.fieldTransforms)}}function cm(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ne()}}class Lc{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Bu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new Lc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.ku({path:r,Qu:!1});return s.$u(e),s}Uu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.ku({path:r,Qu:!1});return s.Bu(),s}Ku(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return Ro(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(cm(this.Lu)&&yR.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class ER{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Zo(e)}ju(e,t,r,s=!1){return new Lc({Lu:e,methodName:t,zu:r,path:ze.emptyPath(),Qu:!1,Gu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function TR(n){const e=n._freezeSettings(),t=Zo(n._databaseId);return new ER(n._databaseId,!!e.ignoreUndefinedProperties,t)}function IR(n,e,t,r,s,i={}){const a=n.ju(i.merge||i.mergeFields?2:0,e,t,s);dm("Data must be an object, but it was:",a,r);const l=hm(r,a);let c,h;if(i.merge)c=new kt(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const d=[];for(const g of i.mergeFields){const E=wR(e,g,t);if(!a.contains(E))throw new X(F.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);bR(d,E)||d.push(E)}c=new kt(d),h=a.fieldTransforms.filter(g=>c.covers(g.field))}else c=null,h=a.fieldTransforms;return new vR(new wt(l),c,h)}function um(n,e){if(fm(n=Rt(n)))return dm("Unsupported field value:",e,n),hm(n,e);if(n instanceof lm)return function(r,s){if(!cm(s.Lu))throw s.Wu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Wu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let c=um(l,s.Ku(a));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=Rt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return iA(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ue.fromDate(r);return{timestampValue:Io(s.serializer,i)}}if(r instanceof Ue){const i=new Ue(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Io(s.serializer,i)}}if(r instanceof xc)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Jr)return{bytesValue:Dg(s.serializer,r._byteString)};if(r instanceof bt){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Wu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:mc(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Mc)return function(a,l){return{mapValue:{fields:{[og]:{stringValue:ag},[_o]:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw l.Wu("VectorValues must only contain numeric values.");return dc(l.serializer,h)})}}}}}}(r,s);throw s.Wu(`Unsupported field value: ${kc(r)}`)}(n,e)}function hm(n,e){const t={};return eg(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):_r(n,(r,s)=>{const i=um(s,e.qu(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function fm(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ue||n instanceof xc||n instanceof Jr||n instanceof bt||n instanceof lm||n instanceof Mc)}function dm(n,e,t){if(!fm(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=kc(t);throw r==="an object"?e.Wu(n+" a custom object"):e.Wu(n+" "+r)}}function wR(n,e,t){if((e=Rt(e))instanceof Nc)return e._internalPath;if(typeof e=="string")return pm(n,e);throw Ro("Field path arguments must be of type string or ",n,!1,void 0,t)}const AR=new RegExp("[~\\*/\\[\\]]");function pm(n,e,t){if(e.search(AR)>=0)throw Ro(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Nc(...e.split("."))._internalPath}catch{throw Ro(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ro(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${r}`),a&&(c+=` in document ${s}`),c+=")"),new X(F.INVALID_ARGUMENT,l+n+c)}function bR(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new bt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new RR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(mm("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class RR extends gm{data(){return super.data()}}function mm(n,e){return typeof e=="string"?pm(n,e):e instanceof Nc?e._internalPath:e._delegate._internalPath}class SR{convertValue(e,t="none"){switch(Fn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ln(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ne()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return _r(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t[_o].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>Ve(a.doubleValue));return new Mc(i)}convertGeoPoint(e){return new xc(Ve(e.latitude),Ve(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Ko(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Qs(e));default:return null}}convertTimestamp(e){const t=Mn(e);return new Ue(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=De.fromString(e);Ee(Lg(r));const s=new Js(r.get(1),r.get(3)),i=new Z(r.popFirst(5));return s.isEqual(t)||hn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PR(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CR{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class _m extends gm{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new kR(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(mm("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class kR extends _m{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DR(n){n=ei(n,bt);const e=ei(n.firestore,Oc);return fR(am(e),n._key).then(t=>xR(e,n,t))}class VR extends SR{constructor(e){super(),this.firestore=e}convertBytes(e){return new Jr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new bt(this.firestore,null,t)}}function OR(n,e,t){n=ei(n,bt);const r=ei(n.firestore,Oc),s=PR(n.converter,e);return NR(r,[IR(TR(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,ln.none())])}function NR(n,e){return function(r,s){const i=new On;return r.asyncQueue.enqueueAndForget(async()=>Xb(await uR(r),s,i)),i.promise}(am(n),e)}function xR(n,e,t){const r=t.docs.get(e._key),s=new VR(n);return new _m(n,s,e._key,r,new CR(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){Zr=s})(Yr),Hr(new cr("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new Oc(new yw(r.getProvider("auth-internal")),new Tw(a,r.getProvider("app-check-internal")),function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new X(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Js(h.options.projectId,d)}(a,s),a);return i=Object.assign({useFetchStreams:t},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Dn(Fh,Uh,e),Dn(Fh,Uh,"esm2017")})();const MR={apiKey:"AIzaSyBAdaj6AItJ80QZP4Fj_8AcMK63S7Lf3qI",authDomain:"betbuttonappdb.firebaseapp.com",projectId:"betbuttonappdb",storageBucket:"betbuttonappdb.firebasestorage.app",messagingSenderId:"340173846898",appId:"1:340173846898:web:93de5961fa719c003f05eb",measurementId:"G-HPW28ZC4F7"},ym=ip(MR),Ha=pw(ym),Nf=mR(ym),Fc=zl("auth",()=>{const n=be(null),e=be(null),t=be(null),r=be(null),s=15*60*1e3,i=()=>{r.value&&clearTimeout(r.value),r.value=setTimeout(()=>{c()},s)},a=async(h,d,g)=>{try{const E=await ZT(Ha,d,g);n.value=E.user.email,e.value=h,await OR(Df(Nf,"users",E.user.uid),{name:h,email:d}),localStorage.setItem("authUser",JSON.stringify({email:d,name:h,timestamp:Date.now()})),i()}catch(E){t.value=E.message}},l=async(h,d)=>{try{const g=await eI(Ha,h,d);n.value=g.user.email;const E=await DR(Df(Nf,"users",g.user.uid));E.exists()&&(e.value=E.data().name),localStorage.setItem("authUser",JSON.stringify({email:h,name:e.value,timestamp:Date.now()})),i()}catch(g){t.value=g.message}},c=async()=>{await rI(Ha),n.value=null,e.value=null,localStorage.removeItem("authUser"),r.value&&clearTimeout(r.value)};return Hl(()=>{const h=localStorage.getItem("authUser");if(h){const{email:d,name:g,timestamp:E}=JSON.parse(h);Date.now()-E<s?(n.value=d,e.value=g,i()):c()}}),{user:n,userName:e,errorMessage:t,register:a,login:l,logout:c}}),LR={class:"auth-container"},FR={type:"submit"},UR={key:1,class:"error"},BR=gr({__name:"AuthForm",setup(n){const e=Fc(),{register:t,login:r,errorMessage:s}=e,i=be(!0),a=be(""),l=be(""),c=be(""),h=()=>i.value=!i.value,d=async()=>{i.value?await t(a.value,l.value,c.value):await r(l.value,c.value)};return(g,E)=>(Fe(),ot("div",LR,[rt("h2",null,Ut(i.value?"Register Bar":"Sign in"),1),rt("form",{onSubmit:Kd(d,["prevent"])},[i.value?wa((Fe(),ot("input",{key:0,"onUpdate:modelValue":E[0]||(E[0]=b=>a.value=b),type:"text",placeholder:"Name/nick/else?",required:""},null,512)),[[ka,a.value]]):$r("",!0),wa(rt("input",{"onUpdate:modelValue":E[1]||(E[1]=b=>l.value=b),type:"email",placeholder:"Email",required:""},null,512),[[ka,l.value]]),wa(rt("input",{"onUpdate:modelValue":E[2]||(E[2]=b=>c.value=b),type:"password",placeholder:"Password",required:""},null,512),[[ka,c.value]]),rt("button",FR,Ut(i.value?"Register":"Sign in"),1),Ke(s)?(Fe(),ot("p",UR,Ut(Ke(s)),1)):$r("",!0),rt("button",{onClick:h},Ut(i.value?"Already have an account? Then sign in":"No account? Register"),1)],32)]))}}),rs=(n,e)=>{const t=n.__vccOpts||n;for(const[r,s]of e)t[r]=s;return t},jR=rs(BR,[["__scopeId","data-v-d79b7bfd"]]),vm=zl("log",()=>{const n="terminal@output>>> Here you go. Please guess which button gonna win to make a bet. <<<",e=be([`${n}`]);return{logMessages:e,addLog:r=>{e.value.push(`terminal@output>>> [${new Date().toLocaleTimeString()}] ${r} <<<`)},permanentLog:n}}),Uc=zl("game",()=>{const n=be(["🎭","🔮","🌟","💎️","♦️","🧿","🔸","🔳","🪬"]),e=be(null),t=be(null),r=be(!0),s=be(!1),i=be(null),a=be([]),l=vm(),c=(k,O)=>{r.value&&(e.value=k,l.addLog(`Bet accepted: bet ${k+1+" "+O}`),h())},h=()=>{l.addLog("Defining the winning bet..."),r.value=!1;let k=0;const O=30,N=setInterval(()=>{t.value=Math.floor(Math.random()*n.value.length),k++,k>=O&&(clearInterval(N),d())},200)},d=()=>{const k=n.value[t.value];l.addLog(`Wining bet is: ${t.value+1} ${k}`),t.value===e.value?(l.addLog("🎉 YOU WIN!"),i.value="win"):(l.addLog("❌ You lose."),i.value="lose"),setTimeout(E,2e3)},g=k=>k.reduce((O,N)=>O.concat([N,N,N,N,N]),[]),E=()=>{const k=["🤤","✨","💚","💞","🥇","🏆"],O=["🥺","🤬","🥵","🆘","❌","💔"];a.value=g(i.value==="win"?k:O),s.value=!0,setTimeout(()=>{s.value=!1,i.value=null,a.value=[],b()},7e3)},b=()=>{e.value=null,t.value=null,r.value=!0,l.logMessages=[`${l.permanentLog}`]};return{betButtonEmojis:n,selectedIndex:e,winningIndex:t,isGameActive:r,placeBet:c,isOverlayVisible:s,showOverlay:E,selectedEmojis:a}}),$R={class:"container"},HR=["onClick","disabled"],qR=gr({__name:"BetButtons",setup(n){const e=Uc();return(t,r)=>(Fe(),ot("div",$R,[(Fe(!0),ot(Ct,null,Ed(Ke(e).betButtonEmojis,(s,i)=>(Fe(),ot("button",{key:i,class:ni(["button",{selected:Ke(e).selectedIndex===i,winning:Ke(e).winningIndex===i,disabled:Ke(e).selectedIndex!==null}]),onClick:a=>Ke(e).placeBet(i,s),disabled:Ke(e).selectedIndex!==null}," Bet "+Ut(s),11,HR))),128))]))}}),WR=rs(qR,[["__scopeId","data-v-2bd91ff1"]]),KR={key:0,class:"burger-icon"},zR={key:1,class:"menu-content"},GR=gr({__name:"BurgerMenu",setup(n){const e=Fc(),t=be(!1),r=()=>{t.value=!t.value};return(s,i)=>(Fe(),ot("div",{class:ni(["menu-container",{expanded:t.value}]),onClick:r},[t.value?(Fe(),ot("div",zR,[rt("span",null,"Hi bet picker, "+Ut(Ke(e).userName),1),rt("button",{onClick:i[0]||(i[0]=Kd((...a)=>Ke(e).logout&&Ke(e).logout(...a),["stop"]))},"Log out")])):(Fe(),ot("div",KR,"☰"))],2))}}),QR=rs(GR,[["__scopeId","data-v-7d788d0d"]]),JR={class:"monitor"},YR=gr({__name:"CommandMonitor",setup(n){const e=vm(),{logMessages:t}=vv(e);return(r,s)=>(Fe(),ot("div",null,[rt("div",JR,Ut(Ke(t).join(`
`)),1)]))}}),XR=rs(YR,[["__scopeId","data-v-8c9f840f"]]),ZR={key:0,class:"modal-overlay"},e0={class:"modal-content"},t0={class:"monitor"},n0={class:"log-text"},r0={key:0,class:"cursor"},s0=gr({__name:"RulesModal",setup(n){const e=be(!0),t=be("terminal@output>>> The rules are pretty simple. You have a few bet buttons, and you need to choose which one will win. After you click a button, it gets highlighted with a violet-orange gradient. When you're done, the app randomly selects a bet that will win. If both picks match, you're a winner; otherwise, keep trying until you succeed 😉"),r=be(""),s=be(!0),i=be(!0),a=()=>{let c=0;const h=setInterval(()=>{c<t.value.length?(r.value+=t.value[c],c++):(clearInterval(h),s.value=!1)},15);setInterval(()=>{s.value||(i.value=!i.value)},500)},l=()=>{e.value=!1};return Hl(()=>{a()}),(c,h)=>e.value?(Fe(),ot("div",ZR,[rt("div",e0,[rt("div",t0,[rt("p",n0,[$d(Ut(r.value)+" ",1),s.value||i.value?(Fe(),ot("span",r0)):$r("",!0)])]),rt("button",{class:"confirm-button",onClick:l},"Got it 🫡")])])):$r("",!0)}}),i0=rs(s0,[["__scopeId","data-v-d37fc801"]]),o0={key:0,class:"overlay"},a0={class:"emoji-container"},l0=gr({__name:"WinLoseAnimation",setup(n){const e=Uc(),t=()=>({left:`${Math.random()*100}vw`,animationDelay:`${Math.random()*3}s`});return(r,s)=>Ke(e).isOverlayVisible?(Fe(),ot("div",o0,[rt("div",a0,[(Fe(!0),ot(Ct,null,Ed(Ke(e).selectedEmojis,(i,a)=>(Fe(),ot("span",{key:a,class:"emoji",style:Do(t())},Ut(i),5))),128))])])):$r("",!0)}}),c0=rs(l0,[["__scopeId","data-v-910e0fc9"]]),u0={key:1,class:"main-container"},h0=gr({__name:"App",setup(n){const e=Fc(),t=Uc();return(r,s)=>Ke(e).user?(Fe(),ot("div",u0,[Ke(t).isOverlayVisible?(Fe(),Za(c0,{key:0})):$r("",!0),vt(i0),vt(XR),vt(WR),vt(QR)])):(Fe(),Za(jR,{key:0}))}}),Em=uv(h0);Em.use(dv());Em.mount("#app");

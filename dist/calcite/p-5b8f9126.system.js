var __extends=this&&this.__extends||function(){var e=function(t,r){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(t.hasOwnProperty(r))e[r]=t[r]};return e(t,r)};return function(t,r){e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(a,i){function s(e){try{l(n.next(e))}catch(e){i(e)}}function o(e){try{l(n["throw"](e))}catch(e){i(e)}}function l(e){e.done?a(e.value):new r(function(t){t(e.value)}).then(s,o)}l((n=n.apply(e,t||[])).next())})};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(e){return function(t){return l([e,t])}}function l(s){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,a&&(i=s[0]&2?a["return"]:s[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,s[1])).done)return i;if(a=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:r.label++;return{value:s[1],done:false};case 5:r.label++;a=s[1];s=[0];continue;case 7:s=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){r=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){r.label=s[1];break}if(s[0]===6&&r.label<i[1]){r.label=i[1];i=s;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(s);break}if(i[2])r.ops.pop();r.trys.pop();continue}s=t.call(e,r)}catch(e){s=[6,e];a=0}finally{n=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register([],function(e,t){"use strict";return{execute:function(){var r=this;var n={allRenderFn:true,cmpDidLoad:true,cmpDidUnload:true,cmpDidUpdate:false,cmpDidRender:true,cmpWillLoad:true,cmpWillUpdate:true,cmpWillRender:true,connectedCallback:true,disconnectedCallback:true,element:false,event:true,hasRenderFn:true,lifecycle:true,hostListener:true,hostListenerTargetWindow:false,hostListenerTargetDocument:false,hostListenerTargetBody:true,hostListenerTargetParent:true,hostListenerTarget:true,member:true,method:true,mode:false,noVdomRender:false,observeAttribute:true,prop:true,propBoolean:true,propNumber:true,propString:true,propMutable:true,reflect:true,scoped:false,shadowDom:true,slot:true,slotRelocation:true,state:true,style:true,svg:true,updatable:true,vdomAttribute:true,vdomClass:true,vdomFunctional:true,vdomKey:true,vdomListener:true,vdomRef:true,vdomRender:true,vdomStyle:true,vdomText:true,watchCallback:true,taskQueue:true,lazyLoad:true,hydrateServerSide:false,cssVarShim:true,hydrateClientSide:true,isDebug:false,isDev:false,lifecycleDOMEvents:false,profile:false,hotModuleReplacement:false,constructableCSS:true,initializeNextTick:true,cssAnnotations:true};var a="calcite";var i=window;var s=document;var o={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,r,n){return e.addEventListener(t,r,n)},rel:function(e,t,r,n){return e.removeEventListener(t,r,n)}};var l=!!s.documentElement.attachShadow;var $=function(){var e=false;try{s.addEventListener("e",null,Object.defineProperty({},"passive",{get:function(){e=true}}))}catch(e){}return e}();var f=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var u=new WeakMap;var c=function(e){return u.get(e)};var v=e("r",function(e,t){return u.set(t.$lazyInstance$=e,t)});var d=function(e){{var t={$flags$:0,$hostElement$:e,$instanceValues$:new Map};t.$onReadyPromise$=new Promise(function(e){return t.$onReadyResolve$=e});return u.set(e,t)}};var h=function(e,t){return t in e};var m=function(e){return console.error(e)};var g=new Map;var p=function(e,r,n){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleIds$;var s=g.get(i);if(s){return s[a]}return t.import("./"+i+".entry.js"+"").then(function(e){{g.set(i,e)}return e[a]},m)};var y=new Map;var b=i.__stencil_cssshim;var w=0;var R=false;var S=[];var x=[];var N=[];var L=function(e,t){return function(r){e.push(r);if(!R){R=true;if(t&&o.$flags$&4){C(_)}else{o.raf(_)}}}};var T=function(e){for(var t=0;t<e.length;t++){try{e[t](performance.now())}catch(e){m(e)}}e.length=0};var E=function(e,t){var r=0;var n=0;while(r<e.length&&(n=performance.now())<t){try{e[r++](n)}catch(e){m(e)}}if(r===e.length){e.length=0}else if(r!==0){e.splice(0,r)}};var _=function(){w++;T(S);var e=(o.$flags$&6)===2?performance.now()+10*Math.ceil(w*(1/22)):Infinity;E(x,e);E(N,e);if(x.length>0){N.push.apply(N,x);x.length=0}if(R=S.length+x.length+N.length>0){o.raf(_)}else{w=0}};var C=function(e){return Promise.resolve().then(e)};var k=L(x,true);var j={};var A="http://www.w3.org/2000/svg";var I=function(e){return e!=null};var O=function(e){return e.toLowerCase()};var P=function(e){return["object","function"].includes(typeof e)};var U=function(e){return"__sc_import_"+e.replace(/\s|-/g,"_")};var M=e("a",function(){if(!(i.CSS&&i.CSS.supports&&i.CSS.supports("color","var(--c)"))){return t.import("./p-aaf72d6b.system.js")}return Promise.resolve()});var z=e("p",function(){return __awaiter(r,void 0,void 0,function(){var e,r,n,o,l;return __generator(this,function($){switch($.label){case 0:e=t.meta.url;r=new RegExp("/"+a+"(.esm)?.js$");n=Array.from(s.querySelectorAll("script")).find(function(e){return r.test(e.src)||e.getAttribute("data-namespace")===a});o=n["data-opts"];if(!(e!==""))return[3,1];return[2,Object.assign({},o,{resourcesUrl:new URL(".",e).href})];case 1:l=new URL(".",new URL(n.getAttribute("data-resources-url")||n.src,i.location.href));B(l.href);if(!!window.customElements)return[3,3];return[4,t.import("./p-9725f31b.system.js")];case 2:$.sent();$.label=3;case 3:return[2,Object.assign({},o,{resourcesUrl:l.href})]}})})});var B=function(e){var t=U(a);try{i[t]=new Function("w","return import(w);")}catch(n){var r=new Map;i[t]=function(n){var a=new URL(n,e).href;var o=r.get(a);if(!o){var l=s.createElement("script");l.type="module";l.src=URL.createObjectURL(new Blob(["import * as m from '"+a+"'; window."+t+".m = m;"],{type:"application/javascript"}));o=new Promise(function(e){l.onload=function(){e(i[t].m);l.remove()}});r.set(a,o);s.head.appendChild(l)}return o}}};var D=function(e,t){if(e!=null&&!P(e)){if(t&4){return e==="false"?false:e===""||!!e}if(t&2){return parseFloat(e)}if(t&1){return String(e)}return e}return e};var q="r";var H="o";var V="s";var W="t";var F="hydrated";var G="s-id";var Q="c-id";var K="http://www.w3.org/1999/xlink";var Y=new WeakMap;var J=function(e,t,r){var n=y.get(e);if(f&&r){n=n||new CSSStyleSheet;n.replace(t)}else{n=t}y.set(e,n)};var X=function(e,t,r,n){var a=ee(t.$tagName$);var i=y.get(a);e=e.nodeType===11?e:s;if(i){if(typeof i==="string"){e=e.head||e;var o=Y.get(e);var l=void 0;if(!o){Y.set(e,o=new Set)}if(!o.has(a)){if(e.host&&(l=e.firstElementChild)&&l.tagName==="STYLE"){l.innerHTML=i}else{if(b){l=b.createHostStyle(n,a,i,!!(t.$flags$&10));var $=l["s-sc"];if($){a=$;o=null}}else{l=s.createElement("style");l.innerHTML=i}e.insertBefore(l,e.querySelector("link"))}if(o){o.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=e.adoptedStyleSheets.concat([i])}}return a};var Z=function(e,t,r){var n=X(l&&e.shadowRoot?e.shadowRoot:e.getRootNode(),t,r,e);if(t.$flags$&10){e["s-sc"]=n;e.classList.add(n+"-h")}};var ee=function(e,t){return"sc-"+e};var te=function(e){return e.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g,"$1{")};var re=e("h",function(e,t){var r=[];for(var n=2;n<arguments.length;n++){r[n-2]=arguments[n]}var a=null;var i=false;var s=false;var o;var l;var $=[];var f=function(t){for(var r=0;r<t.length;r++){a=t[r];if(Array.isArray(a)){f(a)}else if(a!=null&&typeof a!=="boolean"){if(i=typeof e!=="function"&&!P(a)){a=String(a)}if(i&&s){$[$.length-1].$text$+=a}else{$.push(i?{$flags$:0,$text$:a}:a)}s=i}}};f(r);if(t){{o=t.key||undefined}{l=t.name}{var u=t.className||t.class;if(u){t.class=typeof u!=="object"?u:Object.keys(u).filter(function(e){return u[e]}).join(" ")}}}if(typeof e==="function"){return e(t,$,ie)}var c={$flags$:0,$tag$:e,$children$:$.length>0?$:null,$elm$:undefined,$attrs$:t};{c.$key$=o}{c.$name$=l}return c});var ne=e("H",{});var ae=function(e){return e&&e.$tag$===ne};var ie={forEach:function(e,t){return e.map(se).forEach(t)},map:function(e,t){return e.map(se).map(t).map(oe)}};var se=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}};var oe=function(e){return{$flags$:0,$attrs$:e.vattrs,$children$:e.vchildren,$key$:e.vkey,$name$:e.vname,$tag$:e.vtag,$text$:e.vtext}};var le=function(e,t,r,n,a,i){if(r===n){return}if(t==="class"){var s=e.classList;$e(r).forEach(function(e){return s.remove(e)});$e(n).forEach(function(e){return s.add(e)})}else if(t==="style"){{for(var l in r){if(!n||n[l]==null){if(l.includes("-")){e.style.removeProperty(l)}else{e.style[l]=""}}}}for(var l in n){if(!r||n[l]!==r[l]){if(l.includes("-")){e.style.setProperty(l,n[l])}else{e.style[l]=n[l]}}}}else if(t==="key");else if(t==="ref"){if(n){n(e)}}else if(t.startsWith("on")&&!h(e,t)){if(h(e,O(t))){t=O(t.substring(2))}else{t=O(t[2])+t.substring(3)}if(r){o.rel(e,t,r,false)}if(n){o.ael(e,t,n,false)}}else{var $=h(e,t);var f=P(n);var u=e.tagName.includes("-");if(($||f&&n!==null)&&!a){try{if(u){e[t]=n}else if(e[t]!==n||""){e[t]=n||""}}catch(e){}}var c=a&&t!==(t=t.replace(/^xlink\:?/,""))?true:false;if(n==null||n===false){if(c){e.removeAttributeNS(K,O(t))}else{e.removeAttribute(t)}}else if((!$||i&4||a)&&!f){n=n===true?"":n.toString();if(c){e.setAttributeNS(K,O(t),n)}else{e.setAttribute(t,n)}}}};var $e=function(e){return!e?[]:e.split(/\s+/).filter(function(e){return e})};var fe=function(e,t,r,n){var a=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$;var i=e&&e.$attrs$||j;var s=t.$attrs$||j;{for(n in i){if(!(n in s)){le(a,n,i[n],undefined,r,t.$flags$)}}}for(n in s){le(a,n,i[n],s[n],r,t.$flags$)}};var ue;var ce;var ve;var de=false;var he=false;var me=false;var ge=false;var pe=function(e,t,r,n){var a=t.$children$[r];var i=0;var o;var l;var $;if(!de){me=true;if(a.$tag$==="slot"){if(ue){n.classList.add(ue+"-s")}if(!a.$children$){a.$flags$|=1}else{a.$flags$|=2}}}if(I(a.$text$)){a.$elm$=s.createTextNode(a.$text$)}else if(a.$flags$&1){a.$elm$=s.createTextNode("")}else{o=a.$elm$=ge||a.$tag$==="svg"?s.createElementNS(A,a.$tag$):s.createElement(a.$flags$&2?"slot-fb":a.$tag$);{ge=a.$tag$==="svg"?true:a.$tag$==="foreignObject"?false:ge}{fe(null,a,ge)}if(I(ue)&&o["s-si"]!==ue){o.classList.add(o["s-si"]=ue)}if(a.$children$){for(i=0;i<a.$children$.length;++i){l=pe(e,a,i,o);if(l){o.appendChild(l)}}}{if(a.$tag$==="svg"){ge=false}else if(a.$elm$.tagName==="foreignObject"){ge=true}}}{a.$elm$["s-hn"]=ve;if(a.$flags$&(2|1)){a.$elm$["s-sr"]=true;a.$elm$["s-cr"]=ce;a.$elm$["s-sn"]=a.$name$||"";$=e&&e.$children$&&e.$children$[r];if($&&$.$tag$===a.$tag$&&e.$elm$){ye(e.$elm$,false)}}}return a.$elm$};var ye=function(e,t){o.$flags$|=1;var r=e.childNodes;for(var n=r.length-1;n>=0;n--){var a=r[n];if(a["s-hn"]!==ve&&a["s-ol"]){Ne(a).insertBefore(a,xe(a));a["s-ol"].remove();a["s-ol"]=undefined;me=true}if(t){ye(a,t)}}o.$flags$&=~1};var be=function(e,t,r,n,a,i){var s=e["s-cr"]&&e["s-cr"].parentNode||e;var o;if(s.shadowRoot&&O(s.tagName)===ve){s=s.shadowRoot}for(;a<=i;++a){if(n[a]){o=pe(null,r,a,e);if(o){n[a].$elm$=o;s.insertBefore(o,xe(t))}}}};var we=function(e,t,r,n){for(;t<=r;++t){if(I(e[t])){n=e[t].$elm$;Ce(e[t],true);{he=true;if(n["s-ol"]){n["s-ol"].remove()}else{ye(n,true)}}n.remove()}}};var Re=function(e,t,r,n){var a=0;var i=0;var s=0;var o=0;var l=t.length-1;var $=t[0];var f=t[l];var u=n.length-1;var c=n[0];var v=n[u];var d;var h;while(a<=l&&i<=u){if($==null){$=t[++a]}else if(f==null){f=t[--l]}else if(c==null){c=n[++i]}else if(v==null){v=n[--u]}else if(Se($,c)){Le($,c);$=t[++a];c=n[++i]}else if(Se(f,v)){Le(f,v);f=t[--l];v=n[--u]}else if(Se($,v)){if($.$tag$==="slot"||v.$tag$==="slot"){ye($.$elm$.parentNode,false)}Le($,v);e.insertBefore($.$elm$,f.$elm$.nextSibling);$=t[++a];v=n[--u]}else if(Se(f,c)){if($.$tag$==="slot"||v.$tag$==="slot"){ye(f.$elm$.parentNode,false)}Le(f,c);e.insertBefore(f.$elm$,$.$elm$);f=t[--l];c=n[++i]}else{s=-1;{for(o=a;o<=l;++o){if(t[o]&&I(t[o].$key$)&&t[o].$key$===c.$key$){s=o;break}}}if(s>=0){h=t[s];if(h.$tag$!==c.$tag$){d=pe(t&&t[i],r,s,e)}else{Le(h,c);t[s]=undefined;d=h.$elm$}c=n[++i]}else{d=pe(t&&t[i],r,i,e);c=n[++i]}if(d){{Ne($.$elm$).insertBefore(d,xe($.$elm$))}}}}if(a>l){be(e,n[u+1]==null?null:n[u+1].$elm$,r,n,i,u)}else if(i>u){we(t,a,l)}};var Se=function(e,t){if(e.$tag$===t.$tag$){if(e.$tag$==="slot"){return e.$name$===t.$name$}{return e.$key$===t.$key$}return true}return false};var xe=function(e){return e&&e["s-ol"]||e};var Ne=function(e){return(e["s-ol"]?e["s-ol"]:e).parentNode};var Le=function(e,t){var r=t.$elm$=e.$elm$;var n=e.$children$;var a=t.$children$;var i;{ge=r&&I(r.parentNode)&&r.ownerSVGElement!==undefined;ge=t.$tag$==="svg"?true:t.$tag$==="foreignObject"?false:ge}if(!I(t.$text$)){{if(t.$tag$==="slot");else{fe(e,t,ge)}}if(I(n)&&I(a)){Re(r,n,t,a)}else if(I(a)){if(I(e.$text$)){r.textContent=""}be(r,null,t,a,0,a.length-1)}else if(I(n)){we(n,0,n.length-1)}}else if(i=r["s-cr"]){i.parentNode.textContent=t.$text$}else if(e.$text$!==t.$text$){r.textContent=t.$text$}if(ge&&t.$tag$==="svg"){ge=false}};var Te=function(e,t,r,n,a,i,s,o){r=e.childNodes;for(n=0,a=r.length;n<a;n++){t=r[n];if(t.nodeType===1){if(t["s-sr"]){s=t["s-sn"];t.hidden=false;for(i=0;i<a;i++){if(r[i]["s-hn"]!==t["s-hn"]){o=r[i].nodeType;if(s!==""){if(o===1&&s===r[i].getAttribute("slot")){t.hidden=true;break}}else{if(o===1||o===3&&r[i].textContent.trim()!==""){t.hidden=true;break}}}}}Te(t)}}};var Ee=[];var _e=function(e){var t=e.childNodes;var r=t.length;var n=0;var a=0;var i=0;var s;var o;var l;var $;for(r=t.length;n<r;n++){s=t[n];if(s["s-sr"]&&(o=s["s-cr"])){l=o.parentNode.childNodes;$=s["s-sn"];for(a=l.length-1;a>=0;a--){o=l[a];if(!o["s-cn"]&&!o["s-nr"]&&o["s-hn"]!==s["s-hn"]){i=o.nodeType;if((i===3||i===8)&&$===""||i===1&&o.getAttribute("slot")===null&&$===""||i===1&&o.getAttribute("slot")===$){if(!Ee.some(function(e){return e.$nodeToRelocate$===o})){he=true;o["s-sn"]=$;Ee.push({$slotRefNode$:s,$nodeToRelocate$:o})}}}}}if(s.nodeType===1){_e(s)}}};var Ce=function(e,t){if(e){e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(t?null:e.$elm$);e.$children$&&e.$children$.forEach(function(e){Ce(e,t)})}};var ke=function(e,t,r,n){ve=O(e.tagName);var a=t.$vnode$||{$flags$:0};var i=ae(n)?n:re(null,null,n);if(r.$attrsToReflect$){i.$attrs$=i.$attrs$||{};r.$attrsToReflect$.forEach(function(t){var r=t[0],n=t[1];return i.$attrs$[n]=e[r]})}i.$tag$=null;i.$flags$|=4;t.$vnode$=i;i.$elm$=a.$elm$=e.shadowRoot||e;{ue=e["s-sc"]}{ce=e["s-cr"];de=l&&(r.$flags$&1)!==0;me=he=false}Le(a,i);{if(me){_e(i.$elm$);for(var $=0;$<Ee.length;$++){var f=Ee[$];if(!f.$nodeToRelocate$["s-ol"]){var u=s.createTextNode("");u["s-nr"]=f.$nodeToRelocate$;f.$nodeToRelocate$.parentNode.insertBefore(f.$nodeToRelocate$["s-ol"]=u,f.$nodeToRelocate$)}}o.$flags$|=1;for(var $=0;$<Ee.length;$++){var f=Ee[$];var c=f.$slotRefNode$.parentNode;var v=f.$slotRefNode$.nextSibling;var u=f.$nodeToRelocate$["s-ol"];while(u=u.previousSibling){var d=u["s-nr"];if(d&&d["s-sn"]===f.$nodeToRelocate$["s-sn"]&&c===d.parentNode){d=d.nextSibling;if(!d||!d["s-nr"]){v=d;break}}}if(!v&&c!==f.$nodeToRelocate$.parentNode||f.$nodeToRelocate$.nextSibling!==v){if(f.$nodeToRelocate$!==v){c.insertBefore(f.$nodeToRelocate$,v)}}}o.$flags$&=~1}if(he){Te(i.$elm$)}Ee.length=0}};var je=function(e,t,r,n){{t.$flags$|=16}var a=t.$lazyInstance$;var i;if(n){{t.$flags$|=256}if(t.$queuedListeners$){t.$queuedListeners$.forEach(function(e){var t=e[0],r=e[1];return Ue(a,t,r)});t.$queuedListeners$=null}{i=Ue(a,"componentWillLoad")}}else{{i=Ue(a,"componentWillUpdate")}}{i=Me(i,function(){return Ue(a,"componentWillRender")})}var s=function(){return Ae(e,t,r,a,n)};return Me(i,function(){return k(s)})};var Ae=function(e,t,r,n,a){{t.$flags$&=~16}{e["s-lr"]=false}if(a){Z(e,r,t.$modeName$)}{{t.$flags$|=4;try{ke(e,t,r,n.render())}catch(e){m(e)}t.$flags$&=~4}}if(b){b.updateHost(e)}{e["s-lr"]=true}{t.$flags$|=2}if(e["s-rc"].length>0){e["s-rc"].forEach(function(e){return e()});e["s-rc"].length=0}Ie(e,t)};var Ie=function(e,t,r){if(!e["s-al"]){var n=t.$lazyInstance$;var a=t.$ancestorComponent$;{Ue(n,"componentDidRender")}if(!(t.$flags$&64)){t.$flags$|=64;{e.classList.add(F)}{Ue(n,"componentDidLoad")}{t.$onReadyResolve$(e)}if(!a){Pe()}}if(a){if(r=a["s-al"]){r.delete(e);if(r.size===0){a["s-al"]=undefined;a["s-init"]()}}t.$ancestorComponent$=undefined}}};var Oe=function(e,t){{var r=c(e);if(r.$flags$&2){je(e,r,t,false)}}};var Pe=function(){{s.documentElement.classList.add(F)}{o.$flags$|=2}};var Ue=function(e,t,r){if(e&&e[t]){try{return e[t](r)}catch(e){m(e)}}return undefined};var Me=function(e,t){return e&&e.then?e.then(t):t()};var ze=function(e,t){return c(e).$instanceValues$.get(t)};var Be=function(e,t,r,n){var a=c(e);var i=a.$hostElement$;var s=a.$instanceValues$.get(t);var o=a.$flags$;r=D(r,n.$members$[t][0]);if(r!==s&&(!(o&8)||s===undefined)){a.$instanceValues$.set(t,r);if(a.$lazyInstance$){if(n.$watchers$&&o&128){var l=n.$watchers$[t];if(l){l.forEach(function(e){try{a.$lazyInstance$[e].call(a.$lazyInstance$,r,s,t)}catch(e){m(e)}})}}if((o&(4|2|16))===2){je(i,a,n,false)}}}};var De=function(e,t,r){if(t.$members$){if(e.watchers){t.$watchers$=e.watchers}var n=Object.entries(t.$members$);var a=e.prototype;n.forEach(function(e){var n=e[0],i=e[1][0];if(i&31||r&2&&i&32){Object.defineProperty(a,n,{get:function(){return ze(this,n)},set:function(e){Be(this,n,e,t)},configurable:true,enumerable:true})}else if(r&1&&i&64){Object.defineProperty(a,n,{value:function(){var e=[];for(var t=0;t<arguments.length;t++){e[t]=arguments[t]}var r=c(this);return r.$onReadyPromise$.then(function(){var t;return(t=r.$lazyInstance$)[n].apply(t,e)})}})}});if(r&1){var i=new Map;a.attributeChangedCallback=function(e,t,r){var n=this;o.jmp(function(){var t=i.get(e);n[t]=r===null&&typeof n[t]==="boolean"?false:r})};e.observedAttributes=n.filter(function(e){var t=e[0],r=e[1];return r[0]&15}).map(function(e){var r=e[0],n=e[1];var a=n[1]||r;i.set(a,r);if(n[0]&512){t.$attrsToReflect$.push([r,a])}return a})}}return e};var qe=function(e,t,r){t.$queuedListeners$=t.$queuedListeners$||[];var n=r.map(function(r){var n=r[0],a=r[1],i=r[2];var s=Ve(e,n);var l=He(t,i);var $=We(n);o.ael(s,a,l,$);return function(){return o.rel(s,a,l,$)}});return function(){return n.forEach(function(e){return e()})}};var He=function(e,t){return function(r){{if(e.$flags$&256){e.$lazyInstance$[t](r)}else{e.$queuedListeners$.push([t,r])}}}};var Ve=function(e,t){if(t&32)return s.body;if(t&16)return e.parentElement;return e};var We=function(e){return $?{passive:(e&1)!==0,capture:(e&2)!==0}:(e&2)!==0};var Fe=function(e,t,r,n){var a=e.shadowRoot;var i=[];var l=[];var $=a?[]:null;var f=n.$vnode$={$flags$:0,$tag$:t};if(!o.$orgLocNodes$){Qe(s.body,o.$orgLocNodes$=new Map)}e[G]=r;e.removeAttribute(G);Ge(f,i,l,$,e,e,r);i.forEach(function(e){var r=e.$hostId$+"."+e.$nodeId$;var n=o.$orgLocNodes$.get(r);var i=e.$elm$;if(n&&(n["s-sd"]||e.$hostId$==="0")){n.parentNode.insertBefore(i,n.nextSibling)}if(!a){i["s-hn"]=t;if(n){i["s-ol"]=n;i["s-ol"]["s-nr"]=i}}o.$orgLocNodes$.delete(r)});if(a){$.forEach(function(e){if(e){a.appendChild(e)}})}};var Ge=function(e,t,r,n,a,i,o){var l;var $;var f;if(i.nodeType===1){l=i.getAttribute(Q);if(l){$=l.split(".");if($[0]===o||$[0]==="0"){f={$flags$:0,$hostId$:$[0],$nodeId$:$[1],$depth$:$[2],$index$:$[3],$tag$:O(i.tagName),$elm$:i};t.push(f);i.removeAttribute(Q);if(!e.$children$){e.$children$=[]}e.$children$[f.$index$]=f;e=f;if(n&&f.$depth$==="0"){n[f.$index$]=f.$elm$}}}var u=i.childNodes.length-1;for(;u>=0;u--){Ge(e,t,r,n,a,i.childNodes[u],o)}if(i.shadowRoot){for(u=i.shadowRoot.childNodes.length-1;u>=0;u--){Ge(e,t,r,n,a,i.shadowRoot.childNodes[u],o)}}}else if(i.nodeType===8){$=i.nodeValue.split(".");if($[1]===o||$[1]==="0"){l=$[0];f={$flags$:0,$hostId$:$[1],$nodeId$:$[2],$depth$:$[3],$index$:$[4],$elm$:i};if(l===W){f.$elm$=i.nextSibling;if(f.$elm$&&f.$elm$.nodeType===3){f.$text$=f.$elm$.textContent;t.push(f);i.remove();if(!e.$children$){e.$children$=[]}e.$children$[f.$index$]=f;if(n&&f.$depth$==="0"){n[f.$index$]=f.$elm$}}}else if(f.$hostId$===o){if(l===V){f.$tag$="slot";if($[5]){i["s-sn"]=f.$name$=$[5]}else{i["s-sn"]=""}i["s-sr"]=true;if(n){f.$elm$=s.createElement(f.$tag$);if(f.$name$){f.$elm$.setAttribute("name",f.$name$)}i.parentNode.insertBefore(f.$elm$,i);i.remove();if(f.$depth$==="0"){n[f.$index$]=f.$elm$}}r.push(f);if(!e.$children$){e.$children$=[]}e.$children$[f.$index$]=f}else if(l===q){if(n){i.remove()}else{a["s-cr"]=i;i["s-cn"]=true}}}}}else if(e&&e.$tag$==="style"){e.$children$=[{$index$:"0",$text$:i.textContent,$elm$:i}]}};var Qe=function(e,t){if(e.nodeType===1){var r=0;for(;r<e.childNodes.length;r++){Qe(e.childNodes[r],t)}if(e.shadowRoot){for(r=0;r<e.shadowRoot.childNodes.length;r++){Qe(e.shadowRoot.childNodes[r],t)}}}else if(e.nodeType===8){var n=e.nodeValue.split(".");if(n[0]===H){t.set(n[1]+"."+n[2],e);e.nodeValue="";e["s-sd"]=n[3]===""}}};var Ke=function(e,a,i,s,o){return __awaiter(r,void 0,void 0,function(){var r,s,l,$,f,u;return __generator(this,function(c){switch(c.label){case 0:if(!((a.$flags$&32)===0))return[3,5];a.$flags$|=32;o=p(i);if(!o.then)return[3,2];return[4,o];case 1:o=c.sent();c.label=2;case 2:if(!o.isProxied){{i.$watchers$=o.watchers}De(o,i,2);o.isProxied=true}{a.$flags$|=8}try{new o(a)}catch(e){m(e)}{a.$flags$&=~8}{a.$flags$|=128}Ye(a.$lazyInstance$);if(!(!o.$isStyleRegistered$&&o.style))return[3,5];r=o.style;s=ee(i.$tagName$);l=i.$flags$&8;$=n.runtimeScopeCss;if(!(l||$))return[3,4];return[4,t.import("./p-c1ffeac4.system.js").then(function(e){return e.scopeCss(r,s,false)})];case 3:r=c.sent();c.label=4;case 4:J(s,r,!!(i.$flags$&1));o.$isStyleRegistered$=true;c.label=5;case 5:f=a.$ancestorComponent$;u=function(){return je(e,a,i,true)};if(f&&f["s-lr"]===false&&f["s-rc"]){f["s-rc"].push(u)}else{u()}return[2]}})})};var Ye=function(e){{Ue(e,"connectedCallback")}};var Je=function(e,t){if((o.$flags$&1)===0){var r=c(e);if(t.$listeners$){r.$rmListeners$=qe(e,r,t.$listeners$)}if(!(r.$flags$&1)){r.$flags$|=1;var n=void 0;{n=e.getAttribute(G);if(n){if(l&&t.$flags$&1){var a=X(e.shadowRoot,t,e.getAttribute("s-mode"));e.classList.remove(a+"-h");e.classList.remove(a+"-s")}Fe(e,t.$tagName$,n,r)}}if(!n){if(t.$flags$&4||t.$flags$&8){Xe(e)}}{var i=e;while(i=i.parentNode||i.host){if(i.nodeType===1&&i.hasAttribute("s-id")||i["s-init"]&&i["s-lr"]===false){r.$ancestorComponent$=i;(i["s-al"]=i["s-al"]||new Set).add(e);break}}}if(t.$members$){Object.entries(t.$members$).forEach(function(t){var r=t[0],n=t[1][0];if(n&31&&e.hasOwnProperty(r)){var a=e[r];delete e[r];e[r]=a}})}{C(function(){return Ke(e,r,t)})}}Ye(r.$lazyInstance$)}};var Xe=function(e,t){var r;{r=""}t=e["s-cr"]=s.createComment(r);t["s-cn"]=true;e.insertBefore(t,e.firstChild)};var Ze=function(e){if((o.$flags$&1)===0){var t=c(e);{if(t.$rmListeners$){t.$rmListeners$();t.$rmListeners$=undefined}}if(b){b.removeHost(e)}var r=t.$lazyInstance$;{Ue(r,"disconnectedCallback")}{Ue(r,"componentDidUnload")}}};var et=e("b",function(e,t){if(t===void 0){t={}}var r=[];var n=t.exclude||[];var a=s.head;var $=i.customElements;var f=a.querySelector("meta[charset]");var u=s.createElement("style");var v;Object.assign(o,t);o.$resourcesUrl$=new URL(t.resourcesUrl||"./",s.baseURI).href;if(t.syncQueue){o.$flags$|=4}{var h=s.querySelectorAll("style[s-id]");var m="";h.forEach(function(e){return m+=e.innerHTML});h.forEach(function(e){J(e.getAttribute(G),m+te(e.innerHTML),true)})}e.forEach(function(e){return e[1].forEach(function(t){var a={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};{a.$attrsToReflect$=[]}{a.$watchers$={}}if(!l&&a.$flags$&1){a.$flags$|=8}var i=a.$tagName$;var s=function(e){__extends(t,e);function t(t){var r=e.call(this,t)||this;t=r;{r["s-lr"]=false;r["s-rc"]=[]}d(t);if(a.$flags$&1){if(l){t.attachShadow({mode:"open"})}else if(!("shadowRoot"in t)){t.shadowRoot=t}}return r}t.prototype.connectedCallback=function(){var e=this;if(v){clearTimeout(v);v=null}o.jmp(function(){return Je(e,a)})};t.prototype.disconnectedCallback=function(){var e=this;o.jmp(function(){return Ze(e)})};t.prototype["s-init"]=function(){var e=c(this);if(e.$lazyInstance$){Ie(this,e)}};t.prototype["s-hmr"]=function(e){};t.prototype.forceUpdate=function(){Oe(this,a)};t.prototype.componentOnReady=function(){return c(this).$onReadyPromise$};return t}(HTMLElement);a.$lazyBundleIds$=e[0];if(!n.includes(i)&&!$.get(i)){r.push(i);$.define(i,De(s,a,1))}})});u.innerHTML=r+"{visibility:hidden}.hydrated{visibility:inherit}";u.setAttribute("data-styles","");a.insertBefore(u,f?f.nextSibling:a.firstChild);o.jmp(function(){return v=setTimeout(Pe,30)})});var tt=e("c",function(e,t,r){var n=rt(e);return{emit:function(e){return n.dispatchEvent(new CustomEvent(t,{bubbles:!!(r&4),composed:!!(r&2),cancelable:!!(r&1),detail:e}))}}});var rt=e("g",function(e){return c(e).$hostElement$})}}});
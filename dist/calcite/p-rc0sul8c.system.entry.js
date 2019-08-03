var __awaiter=this&&this.__awaiter||function(e,t,r,i){return new(r||(r=Promise))(function(n,s){function l(e){try{a(i.next(e))}catch(e){s(e)}}function u(e){try{a(i["throw"](e))}catch(e){s(e)}}function a(e){e.done?n(e.value):new r(function(t){t(e.value)}).then(l,u)}a((i=i.apply(e,t||[])).next())})};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},i,n,s,l;return l={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(l[Symbol.iterator]=function(){return this}),l;function u(e){return function(t){return a([e,t])}}function a(l){if(i)throw new TypeError("Generator is already executing.");while(r)try{if(i=1,n&&(s=l[0]&2?n["return"]:l[0]?n["throw"]||((s=n["return"])&&s.call(n),0):n.next)&&!(s=s.call(n,l[1])).done)return s;if(n=0,s)l=[l[0]&2,s.value];switch(l[0]){case 0:case 1:s=l;break;case 4:r.label++;return{value:l[1],done:false};case 5:r.label++;n=l[1];l=[0];continue;case 7:l=r.ops.pop();r.trys.pop();continue;default:if(!(s=r.trys,s=s.length>0&&s[s.length-1])&&(l[0]===6||l[0]===2)){r=0;continue}if(l[0]===3&&(!s||l[1]>s[0]&&l[1]<s[3])){r.label=l[1];break}if(l[0]===6&&r.label<s[1]){r.label=s[1];s=l;break}if(s&&r.label<s[2]){r.label=s[2];r.ops.push(l);break}if(s[2])r.ops.pop();r.trys.pop();continue}l=t.call(e,r)}catch(e){l=[6,e];n=0}finally{i=s=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:true}}};System.register(["./p-5b8f9126.system.js","./p-6d3f767f.system.js","./p-f6a71c4a.system.js"],function(e){"use strict";var t,r,i,n,s,l,u,a,c,o;return{setters:[function(e){t=e.h;r=e.r;i=e.c;n=e.H;s=e.g},function(e){l=e.g},function(e){u=e.c;a=e.e;c=e.l;o=e.a}],execute:function(){var h=function(e,t){var r=new Map;var i=e;var n=function(e,t){if(Array.isArray(e)){e.slice().forEach(function(e){t[e]=i[e]})}else{t[e]=Object.assign({},i)}};var s=function(e,t){if(!r.has(e)){r.set(e,t);n(t,e)}return function(){if(r.has(e)){r.delete(e)}}};var l=function(e,t){var s=e.state;i=s;r.forEach(n);return t};var u=function(e,r){return t(s,r[0])};var a=function(e,t){var i=e.prototype;var n=i.connectedCallback;var l=i.disconnectedCallback;i.connectedCallback=function(){s(this,t);if(n){return n.call(this)}};i.disconnectedCallback=function(){r.delete(this);if(l){l.call(this)}}};return{Provider:l,Consumer:u,injectProps:a}};var f=h({currentAlert:"",queueLength:0},function(e,r){return t("context-consumer",{subscribe:e,renderer:r})});var d=function(){function e(e){r(this,e);this.active=false;this.dismiss=false;this.duration=this.dismiss?"medium":null;this.color="blue";this.theme="light";this.icon=false;this.alertId=this.el.id;this.currentAlert="";this.queueLength=0;this.durationDefaults={slow:14e3,medium:1e4,fast:6e3};this.iconDefaults={green:u,yellow:a,red:a,blue:c};this.calciteAlertClose=i(this,"calciteAlertClose",7);this.calciteAlertOpen=i(this,"calciteAlertOpen",7)}e.prototype.watchCurrentAlert=function(){var e=this;if(!this.active&&this.currentAlert===this.alertId){if(this.dismiss)setTimeout(function(){return e.closeCalciteAlert()},this.durationDefaults[this.duration]);setTimeout(function(){return e.active=true},300)}else{this.active=false}};e.prototype.closeCalciteAlert=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){this.calciteAlertClose.emit({requestedAlert:this.alertId});return[2]})})};e.prototype.openCalciteAlert=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){this.calciteAlertOpen.emit({requestedAlert:this.alertId});return[2]})})};e.prototype.connectedCallback=function(){var e=["blue","red","green","yellow"];if(!e.includes(this.color))this.color="blue";var t=["slow","medium","fast"];if(this.duration!==null&&!t.includes(this.duration))this.duration="medium";var r=["dark","light"];if(!r.includes(this.theme))this.theme="light"};e.prototype.setIcon=function(){var e=this.iconDefaults[this.color];return t("div",{class:"alert-icon"},t("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24",viewBox:"0 0 24 24"},t("path",{d:e})))};e.prototype.render=function(){var e=this;var r=l(this.el);var i=t("button",{class:"alert-close","aria-label":"close",onClick:function(){return e.closeCalciteAlert()}},t("svg",{xmlns:"http://www.w3.org/2000/svg",height:"32",width:"32",viewBox:"0 0 32 32"},t("path",{d:o})));var s=!this.dismiss?i:"";var u=this.icon?this.setIcon():"";var a=t("div",{class:(this.queueLength>0?"active ":"")+"alert-count"},"+",this.queueLength>0?this.queueLength:1);var c=this.active&&this.dismiss?t("div",{class:"alert-dismiss"}):"";return t(n,{active:!!this.active,dir:r},u,t("div",{class:"alert-content"},t("slot",{name:"alert-title"}),t("slot",{name:"alert-message"}),t("slot",{name:"alert-link"})),a,s,c)};Object.defineProperty(e.prototype,"el",{get:function(){return s(this)},enumerable:true,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{currentAlert:["watchCurrentAlert"]}},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return"body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}.overflow-hidden{overflow:hidden}calcite-tabs{display:block}:host{--calcite-alert-background:#fff;--calcite-alert-title-text:#404040;--calcite-alert-message-text:#555;--calcite-alert-icon-fill:#151515;--calcite-alert-close-background-hover:#f3f3f3;--calcite-alert-close-background-pressed:#eaeaea;--calcite-alert-count-text:#404040;--calcite-alert-count-border:#f3f3f3;--calcite-alert-dismiss-background:hsla(0,0%,100%,0.6);--calcite-alert-border-blue:#007ac2;--calcite-alert-border-green:#35ac46;--calcite-alert-border-red:#d83020;--calcite-alert-border-yellow:#edd317}:host([theme=dark]){--calcite-alert-background:#2b2b2b;--calcite-alert-title-text:#f8f8f8;--calcite-alert-message-text:#f3f3f3;--calcite-alert-icon-fill:#d4d4d4;--calcite-alert-close-background-hover:#202020;--calcite-alert-close-background-pressed:#151515;--calcite-alert-count-text:#d4d4d4;--calcite-alert-count-border:#202020;--calcite-alert-dismiss-background:rgba(43,43,43,0.6);--calcite-alert-border-blue:#3db8ff;--calcite-alert-border-green:#3bed52;--calcite-alert-border-red:#ff0015;--calcite-alert-border-yellow:#fe3}:host{display:-ms-flexbox;display:flex;position:relative;-ms-flex-pack:center;justify-content:center;pointer-events:none;z-index:102;margin:0 auto;width:50em;max-width:90%;max-height:0;background-color:var(--calcite-alert-background);-webkit-box-shadow:0 0 16px 0 rgba(0,0,0,.15);box-shadow:0 0 16px 0 rgba(0,0,0,.15);border-radius:2px;opacity:0;-webkit-transform:translate3d(0,1.5rem,0);transform:translate3d(0,1.5rem,0);-webkit-transition:.3s cubic-bezier(.215,.44,.42,.88),opacity .3s cubic-bezier(.215,.44,.42,.88),all .15s ease-in-out;transition:.3s cubic-bezier(.215,.44,.42,.88),opacity .3s cubic-bezier(.215,.44,.42,.88),all .15s ease-in-out;-webkit-border-before:0 solid transparent;border-block-start:0 solid transparent}\@media only screen and (max-width:860px){:host{width:100%;max-width:100%;border-radius:2px 2px 0 0;-webkit-box-shadow:0 -8px 16px 0 rgba(0,0,0,.15);box-shadow:0 -8px 16px 0 rgba(0,0,0,.15)}}:host:host(.hydrated){visibility:hidden!important}:host:host([active]){opacity:1;max-height:100%;-webkit-transform:translate3d(0,-1.5rem,0);transform:translate3d(0,-1.5rem,0);pointer-events:auto;border-block-start-width:3px}:host:host([active]):host(.hydrated){visibility:visible!important}\@media only screen and (max-width:860px){:host:host([active]){-webkit-transform:translateZ(0);transform:translateZ(0)}}:host slot[name=alert-title]::slotted(div){font-size:1rem;line-height:1.5;color:var(--calcite-alert-title-text);font-weight:500}:host slot[name=alert-link]::slotted(a),:host slot[name=alert-link]::slotted(calcite-button){font-size:.9375rem;line-height:1.5}:host slot[name=alert-message]::slotted(div){display:inline;margin-right:.75rem;font-size:.9375rem;line-height:1.5;color:var(--calcite-alert-message-text)}:host([dir=rtl]) slot[name=alert-message]::slotted(div){margin-right:unset;margin-left:.75rem}.alert-content{padding:.75rem 1.5rem;-ms-flex:0 0 auto;flex:0 0 auto;-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out;-ms-flex:1 1 auto;flex:1 1 auto;min-width:0;word-wrap:break-word;-webkit-padding-before:.75rem;padding-block-start:.75rem;-webkit-padding-after:.75rem;padding-block-end:.75rem;-webkit-padding-end:.75rem;padding-inline-end:.75rem;-webkit-padding-start:0;padding-inline-start:0}.alert-content svg{height:16px;width:16px;vertical-align:top}\@media only screen and (max-width:860px){.alert-content{padding:1.5rem}}.alert-content:first-of-type{-webkit-padding-start:1.5rem;padding-inline-start:1.5rem}\@media only screen and (max-width:860px){.alert-content{-webkit-padding-before:1.5rem;padding-block-start:1.5rem;-webkit-padding-after:1.5rem;padding-block-end:1.5rem;-webkit-padding-end:.75rem;padding-inline-end:.75rem;-webkit-padding-start:0;padding-inline-start:0}}.alert-icon{padding:.75rem 1.5rem;-ms-flex:0 0 auto;flex:0 0 auto;-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.alert-icon svg{height:16px;width:16px;vertical-align:top}\@media only screen and (max-width:860px){.alert-icon{padding:1.5rem}}.alert-close{padding:.75rem 1.5rem;-ms-flex:0 0 auto;flex:0 0 auto;-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out;background-color:transparent;-webkit-appearance:none;border:none;outline:none;cursor:pointer;border-radius:0 0 2px 0}.alert-close svg{height:16px;width:16px;vertical-align:top}\@media only screen and (max-width:860px){.alert-close{padding:1.5rem}}.alert-close svg{fill:var(--calcite-alert-icon-fill)}.alert-close:focus,.alert-close:hover{background-color:var(--calcite-alert-close-background-hover)}.alert-close:active{background-color:var(--calcite-alert-close-background-pressed)}:host([dir=rtl]) .alert-close{border-radius:0 0 0 2px}\@media only screen and (max-width:860px){:host([dir=rtl]) .alert-close{border-radius:0}}.alert-count{font-size:.875rem;line-height:1.5;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:space-evenly;justify-content:space-evenly;overflow:hidden;width:0;visibility:hidden;font-weight:500;text-align:center;color:var(--calcite-alert-count-text);opacity:0;-webkit-border-start:0 solid transparent;border-inline-start:0 solid transparent;-webkit-border-end:0 solid transparent;border-inline-end:0 solid transparent;cursor:default;-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out}.alert-count.active{visibility:visible;opacity:1;padding:0 .375rem;width:3rem;-webkit-border-start:1px solid var(--calcite-alert-count-border);border-inline-start:1px solid var(--calcite-alert-count-border);-webkit-border-end:1px solid var(--calcite-alert-count-border);border-inline-end:1px solid var(--calcite-alert-count-border)}.alert-count.active:last-child{-webkit-border-end:0 solid transparent;border-inline-end:0 solid transparent}\@media only screen and (max-width:860px){.alert-count{border-radius:0}}.alert-dismiss{left:0;top:0;width:100%;z-index:103}.alert-dismiss,.alert-dismiss:after{display:block;position:absolute;right:0;height:3px}.alert-dismiss:after{top:-3px;border-radius:2px 2px 0 0;content:\"\";background-color:var(--calcite-alert-dismiss-background);z-index:104}:host([color=blue]){border-block-start-color:var(--calcite-alert-border-blue)}:host([color=blue]) .alert-icon svg{fill:var(--calcite-alert-border-blue)}:host([color=red]){border-block-start-color:var(--calcite-alert-border-red)}:host([color=red]) .alert-icon svg{fill:var(--calcite-alert-border-red)}:host([color=yellow]){border-block-start-color:var(--calcite-alert-border-yellow)}:host([color=yellow]) .alert-icon svg{fill:var(--calcite-alert-border-yellow)}:host([color=green]){border-block-start-color:var(--calcite-alert-border-green)}:host([color=green]) .alert-icon svg{fill:var(--calcite-alert-border-green)}:host([duration=fast]) .alert-dismiss:after{-webkit-animation:dismissProgress 6s ease-out;animation:dismissProgress 6s ease-out}:host([duration=medium]) .alert-dismiss:after{-webkit-animation:dismissProgress 10s ease-out;animation:dismissProgress 10s ease-out}:host([duration=slow]) .alert-dismiss:after{-webkit-animation:dismissProgress 14s ease-out;animation:dismissProgress 14s ease-out}\@-webkit-keyframes dismissProgress{0%{width:0;opacity:0}to{width:100%;opacity:1}}\@keyframes dismissProgress{0%{width:0;opacity:0}to{width:100%;opacity:1}}"},enumerable:true,configurable:true});return e}();e("calcite_alert",d);f.injectProps(d,["currentAlert","queueLength"]);var p=function(){function e(e){r(this,e);this.currentAlert="";this.active=false;this.alertQueue=[];this.calciteAlertsClose=i(this,"calciteAlertsClose",7);this.calciteAlertsOpen=i(this,"calciteAlertsOpen",7)}e.prototype.updateQueueOnOpen=function(e){if(!this.alertQueue.includes(e.detail.requestedAlert)){this.active=true;this.currentAlert=e.detail.requestedAlert;this.alertQueue.push(e.detail.requestedAlert);this.calciteAlertsOpen.emit({currentAlert:this.currentAlert,alertQueue:this.alertQueue})}};e.prototype.updateQueueOnClose=function(e){var t=this;if(this.alertQueue.includes(e.detail.requestedAlert))this.alertQueue=this.alertQueue.filter(function(t){return t!==e.detail.requestedAlert});if(this.alertQueue.length<1)setTimeout(function(){t.active=false},400);this.calciteAlertsClose.emit({currentAlert:this.currentAlert,alertQueue:this.alertQueue})};e.prototype.componentWillUpdate=function(){this.currentAlert=this.alertQueue.length>0?this.alertQueue[0]:""};e.prototype.render=function(){var e={currentAlert:this.currentAlert,queueLength:this.alertQueue.length>=2?this.alertQueue.length-1:0};return t(n,{active:!!this.active},t(f.Provider,{state:e},t("slot",null)))};Object.defineProperty(e.prototype,"el",{get:function(){return s(this)},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return"body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}.overflow-hidden{overflow:hidden}calcite-tabs{display:block}:host{display:none;position:fixed;left:0;right:0;bottom:0;pointer-events:none;z-index:101}:host:host([active]){display:block}"},enumerable:true,configurable:true});return e}();e("calcite_alerts",p)}}});
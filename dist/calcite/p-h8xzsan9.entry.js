import{r as t,c as s,h as i,H as e,g as n}from"./p-81cf2cf6.js";import{h as o,g as h,a}from"./p-6bb56f1f.js";import{x as c}from"./p-9de72867.js";function r(t){return t.hasAttribute("hidden")||t.hasAttribute("aria-hidden")&&"false"!==t.getAttribute("aria-hidden")||"none"===t.style.display||"0"===t.style.opacity||"hidden"===t.style.visibility||"collapse"===t.style.visibility}function l(t){return"-1"!==t.getAttribute("tabindex")&&!r(t)&&!function(t){return t.hasAttribute("disabled")||t.hasAttribute("aria-disabled")&&"false"!==t.getAttribute("aria-disabled")}(t)&&(t.hasAttribute("tabindex")||(t instanceof HTMLAnchorElement||t instanceof HTMLAreaElement)&&t.hasAttribute("href")||t instanceof HTMLButtonElement||t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement||t instanceof HTMLIFrameElement)}let d=new Map;const u=document.createElement("template");u.innerHTML='\n\t<div id="start"></div>\n\t<slot></slot>\n\t<div id="backup"></div>\n\t<div id="end"></div>\n',window.customElements.define("focus-trap",class extends HTMLElement{constructor(){super(),this.debounceId=Math.random().toString(),this._focused=!1,this.attachShadow({mode:"open"}).appendChild(u.content.cloneNode(!0)),this.focusLastElement=this.focusLastElement.bind(this),this.focusFirstElement=this.focusFirstElement.bind(this),this.onFocusIn=this.onFocusIn.bind(this),this.onFocusOut=this.onFocusOut.bind(this)}static get observedAttributes(){return["inactive"]}get inactive(){return this.hasAttribute("inactive")}set inactive(t){t?this.setAttribute("inactive",""):this.removeAttribute("inactive")}get focused(){return this._focused}connectedCallback(){this.$backup=this.shadowRoot.querySelector("#backup"),this.$start=this.shadowRoot.querySelector("#start"),this.$end=this.shadowRoot.querySelector("#end"),this.$start.addEventListener("focus",this.focusLastElement),this.$end.addEventListener("focus",this.focusFirstElement),this.addEventListener("focusin",this.onFocusIn),this.addEventListener("focusout",this.onFocusOut),this.render()}disconnectedCallback(){this.$start.removeEventListener("focus",this.focusLastElement),this.$end.removeEventListener("focus",this.focusFirstElement),this.removeEventListener("focusin",this.onFocusIn),this.removeEventListener("focusout",this.onFocusOut)}attributeChangedCallback(){this.render()}focusFirstElement(){this.trapFocus()}focusLastElement(){this.trapFocus(!0)}getFocusableElements(){return function t(s,i,e,n=20,o=0){let h=[];if(o>=n)return h;const a=s=>{const h=s.assignedNodes().filter(t=>1===t.nodeType);return h.length>0?t(h[0].parentElement,i,e,n,o+1):[]},c=Array.from(s.children||[]);for(const s of c)i(s)||(e(s)&&h.push(s),null!=s.shadowRoot?h.push(...t(s.shadowRoot,i,e,n,o+1)):"SLOT"===s.tagName?h.push(...a(s)):h.push(...t(s,i,e,n,o+1)));return h}(this,r,l)}trapFocus(t){if(this.inactive)return;let s=this.getFocusableElements();s.length>0?(t?s[s.length-1].focus():s[0].focus(),this.$backup.setAttribute("tabindex","-1")):(this.$backup.setAttribute("tabindex","0"),this.$backup.focus())}onFocusIn(){this.updateFocused(!0)}onFocusOut(){this.updateFocused(!1)}updateFocused(t){!function(t,s,i){const e=d.get(i);null!=e&&window.clearTimeout(e),d.set(i,window.setTimeout(()=>{t(),d.delete(i)},0))}(()=>{this.focused!==t&&(this._focused=t,this.render())},0,this.debounceId)}render(){this.isConnected&&(this.$start.setAttribute("tabindex",!this.focused||this.inactive?"-1":"0"),this.$end.setAttribute("tabindex",!this.focused||this.inactive?"-1":"0"),this.focused?this.setAttribute("focused",""):this.removeAttribute("focused"))}});class m{constructor(i){t(this,i),this.beforeClose=()=>Promise.resolve(),this.closeLabel="Close",this.size="small",this.theme="light",this.hideBackButton=!0,this.hideSecondaryButton=!0,this.calciteModalOpen=s(this,"calciteModalOpen",7),this.calciteModalClose=s(this,"calciteModalClose",7)}componentDidLoad(){const t=this.el.shadowRoot.querySelector("slot[name=back]"),s=this.el.shadowRoot.querySelector("slot[name=secondary]");t.addEventListener("slotchange",()=>{this.hideBackButton=!o(t)}),s.addEventListener("slotchange",()=>{this.hideSecondaryButton=!o(s)})}render(){const t=h(this.el),s=a(this.el);return i(e,{role:"dialog","aria-modal":"true",class:{"is-active":this.isActive},dir:t,theme:s},i("div",{class:"modal"},i("focus-trap",{ref:t=>this.trap=t},i("div",{class:"modal__header"},i("button",{class:"modal__close","aria-label":this.closeLabel,onClick:()=>this.close()},i("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24",viewBox:"0 0 24 24",fill:"currentColor"},i("path",{d:c}))),i("header",{class:"modal__title"},i("slot",{name:"header"}))),i("div",{class:"modal__content"},i("slot",{name:"content"})),i("div",{class:{modal__footer:!0,"modal__footer--hide-back":this.hideBackButton,"modal__footer--hide-secondary":this.hideSecondaryButton}},i("slot",{name:"back"}),i("slot",{name:"secondary"}),i("slot",{name:"primary"})))))}handleEscape(t){"Escape"===t.key&&this.close()}async open(){return this.previousActiveElement=document.activeElement,this.isActive=!0,new Promise(t=>{setTimeout(()=>{this.firstFocus?this.firstFocus.focus():this.trap.focusFirstElement(),t(this.el)},300),document.documentElement.classList.add("overflow-hidden"),this.calciteModalOpen.emit()})}async close(){return this.beforeClose(this.el).then(()=>(this.isActive=!1,this.previousActiveElement.focus(),document.documentElement.classList.remove("overflow-hidden"),this.calciteModalClose.emit(),new Promise(t=>{setTimeout(()=>t(this.el),300)})))}get el(){return n(this)}static get style(){return"body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}.overflow-hidden{overflow:hidden}calcite-tabs{display:block}:host{--calcite-modal-background:#fff;--calcite-modal-hover:#f3f3f3;--calcite-modal-pressed:#eaeaea;--calcite-modal-header-text:#151515;--calcite-modal-body-text:#151515;--calcite-modal-scrim:rgba(0,0,0,0.75);--calcite-modal-border:#f3f3f3;--calcite-modal-red:#d83020;--calcite-modal-blue:#007ac2;position:fixed;top:0;right:0;bottom:0;left:0;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;overflow-y:hidden;color:var(--calcite-modal-body-text);opacity:0;visibility:hidden!important;background:var(--calcite-modal-scrim);-webkit-transition:visibility 0ms linear .3s,opacity .3s cubic-bezier(.215,.44,.42,.88);transition:visibility 0ms linear .3s,opacity .3s cubic-bezier(.215,.44,.42,.88);z-index:101}:host([theme=dark]){--calcite-modal-background:#353535;--calcite-modal-pressed:#202020;--calcite-modal-header-text:#fff;--calcite-modal-body-text:#f3f3f3;--calcite-modal-scrim:rgba(0,0,0,0.75);--calcite-modal-border:#2b2b2b;--calcite-modal-hover:#2b2b2b;--calcite-modal-red:#d90012;--calcite-modal-blue:#009af2}.modal{-webkit-box-sizing:border-box;box-sizing:border-box;max-height:80vh;z-index:102;float:none;text-align:left;overflow-y:auto;-webkit-overflow-scrolling:touch;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:row-wrap;flex-wrap:row-wrap;opacity:0;visibility:hidden;-webkit-transition:visibility 0ms linear .3s,opacity .3s cubic-bezier(.215,.44,.42,.88),-webkit-transform .3s cubic-bezier(.215,.44,.42,.88);transition:visibility 0ms linear .3s,opacity .3s cubic-bezier(.215,.44,.42,.88),-webkit-transform .3s cubic-bezier(.215,.44,.42,.88);transition:transform .3s cubic-bezier(.215,.44,.42,.88),visibility 0ms linear .3s,opacity .3s cubic-bezier(.215,.44,.42,.88);transition:transform .3s cubic-bezier(.215,.44,.42,.88),visibility 0ms linear .3s,opacity .3s cubic-bezier(.215,.44,.42,.88),-webkit-transform .3s cubic-bezier(.215,.44,.42,.88);-webkit-transform:translate3d(0,20px,0);transform:translate3d(0,20px,0);-webkit-box-shadow:0 0 16px 0 rgba(0,0,0,.15);box-shadow:0 0 16px 0 rgba(0,0,0,.15);margin:1.5rem}:host(.is-active){visibility:visible!important;opacity:1;-webkit-transition-delay:0ms;transition-delay:0ms}:host(.is-active) .modal{visibility:visible;opacity:1;-webkit-transition-delay:0ms;transition-delay:0ms;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transition:visibility 0ms linear,opacity .3s cubic-bezier(.215,.44,.42,.88),max-width .3s cubic-bezier(.215,.44,.42,.88),max-height .3s cubic-bezier(.215,.44,.42,.88),-webkit-transform .3s cubic-bezier(.215,.44,.42,.88);transition:visibility 0ms linear,opacity .3s cubic-bezier(.215,.44,.42,.88),max-width .3s cubic-bezier(.215,.44,.42,.88),max-height .3s cubic-bezier(.215,.44,.42,.88),-webkit-transform .3s cubic-bezier(.215,.44,.42,.88);transition:transform .3s cubic-bezier(.215,.44,.42,.88),visibility 0ms linear,opacity .3s cubic-bezier(.215,.44,.42,.88),max-width .3s cubic-bezier(.215,.44,.42,.88),max-height .3s cubic-bezier(.215,.44,.42,.88);transition:transform .3s cubic-bezier(.215,.44,.42,.88),visibility 0ms linear,opacity .3s cubic-bezier(.215,.44,.42,.88),max-width .3s cubic-bezier(.215,.44,.42,.88),max-height .3s cubic-bezier(.215,.44,.42,.88),-webkit-transform .3s cubic-bezier(.215,.44,.42,.88)}:host([dir=rtl]) .modal{text-align:right}:host([theme=dark]) .modal{border:1px solid #202020}focus-trap{-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-direction:column;flex-direction:column}.modal__header,focus-trap{display:-ms-flexbox;display:flex}.modal__header{background-color:var(--calcite-modal-background);-ms-flex:0;flex:0;max-width:100%;min-width:0;z-index:2;border-bottom:1px solid var(--calcite-modal-border)}.modal__close{padding:1.125rem;-ms-flex-order:2;order:2;-ms-flex:0 0 auto;flex:0 0 auto;-webkit-transition-delay:.3s;transition-delay:.3s;-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out;background-color:transparent;-webkit-appearance:none;border:none;color:var(--calcite-modal-body-text);outline:none;cursor:pointer}.modal__close svg{pointer-events:none}.modal__close:focus,.modal__close:hover{background-color:var(--calcite-modal-hover)}.modal__close:active{background-color:var(--calcite-modal-pressed)}.modal__title{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:.75rem 1.5rem;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-order:1;order:1;min-width:0}slot[name=header]::slotted(*){margin:0;font-weight:400;font-size:1.414rem;line-height:1.5;color:var(--calcite-modal-header-text)}\@media screen and (max-width:859px){slot[name=header]::slotted(*){font-size:1.33rem}}\@media screen and (max-width:479px){slot[name=header]::slotted(*){font-size:1.25rem}}.modal__content{position:relative;padding:1.5rem;height:100%;-ms-flex:0;flex:0;overflow:auto;display:block;background-color:var(--calcite-modal-background);z-index:1}slot[name=content]::slotted(*){font-size:1rem;line-height:1.5}.modal__footer{background-color:var(--calcite-modal-background);-ms-flex:0;flex:0;display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;padding:1.2rem 1.125rem;border-top:1px solid var(--calcite-modal-border);z-index:2}.modal__footer--hide-back slot[name=back],.modal__footer--hide-secondary slot[name=secondary]{display:none}slot[name=back]{display:block;margin-right:auto}:host([dir=rtl]) slot[name=back]{margin-left:auto;margin-right:unset}slot[name=secondary]{display:block;margin:0 .375rem}slot[name=primary]{display:block}:host([size=small]) .modal{max-width:32rem}\@media screen and (max-width:35rem){:host([size=small]) .modal{height:100vh;max-height:100vh;width:100vw;max-width:100vw;margin:0}:host([size=small]) .modal__content{-ms-flex:1 1 auto;flex:1 1 auto}:host([size=small][docked]){-ms-flex-align:end;align-items:flex-end}}:host([size=medium]) .modal{max-width:64rem}\@media screen and (max-width:67rem){:host([size=medium]) .modal{height:100vh;max-height:100vh;width:100vw;max-width:100vw;margin:0}:host([size=medium]) .modal__content{-ms-flex:1 1 auto;flex:1 1 auto}:host([size=medium][docked]){-ms-flex-align:end;align-items:flex-end}}:host([size=large]) .modal{max-width:94rem}\@media screen and (max-width:97rem){:host([size=large]) .modal{height:100vh;max-height:100vh;width:100vw;max-width:100vw;margin:0}:host([size=large]) .modal__content{-ms-flex:1 1 auto;flex:1 1 auto}:host([size=large][docked]){-ms-flex-align:end;align-items:flex-end}}:host([size=fullscreen]){background-color:transparent}:host([size=fullscreen]) .modal{-webkit-transform:translate3D(0,20px,0) scale(.95);transform:translate3D(0,20px,0) scale(.95);height:100vh;max-height:100vh;width:100vw;max-width:100vw;margin:0}:host([size=fullscreen]) .modal__content{-ms-flex:1 1 auto;flex:1 1 auto}:host(.is-active[size=fullscreen]) .modal{-webkit-transform:translateZ(0) scale(1);transform:translateZ(0) scale(1)}:host([docked]) .modal{height:auto!important}:host([docked]) .modal__content{-ms-flex:0;flex:0;height:auto}:host([color=red]) .modal{border-top:4px solid var(--calcite-modal-red);border-radius:2px 2px 0 0}:host([color=blue]) .modal{border-top:4px solid var(--calcite-modal-blue);border-radius:2px 2px 0 0}\@media screen and (max-width:860px){slot[name=header]::slotted(*){font-size:1.2019rem;line-height:1.5}}\@media screen and (max-width:860px) and (max-width:859px){slot[name=header]::slotted(*){font-size:1.1305rem}}\@media screen and (max-width:860px) and (max-width:479px){slot[name=header]::slotted(*){font-size:1.0625rem}}\@media screen and (max-width:860px){.modal__title{padding:.375rem 1.0125rem}}\@media screen and (max-width:860px){.modal__close,.modal__content{padding:1.0125rem}}\@media screen and (max-width:860px){.modal__footer{position:-webkit-sticky;position:sticky;bottom:0}}\@media screen and (max-width:480px){.modal__footer{-ms-flex-direction:column;flex-direction:column}slot[name=back],slot[name=secondary]{margin:0 0 .375rem 0}}"}}export{m as calcite_modal};
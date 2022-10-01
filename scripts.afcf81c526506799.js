!function(N){"use strict";function g(i,m){i.className+=" "+m}function k(i,m){for(var a=i.className.split(" "),r=m.split(" "),o=0;o<r.length;o+=1){var u=a.indexOf(r[o]);u>-1&&a.splice(u,1)}i.className=a.join(" ")}function Ce(){return"rtl"===N.getComputedStyle(document.body).direction}function he(){return document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop}function pe(){return document.documentElement&&document.documentElement.scrollLeft||document.body.scrollLeft}function U(i){for(;i.lastChild;)i.removeChild(i.lastChild)}function ee(i){if(null===i)return i;var m;if(Array.isArray(i)){m=[];for(var a=0;a<i.length;a+=1)m.push(ee(i[a]));return m}if(i instanceof Date)return new Date(i.getTime());if(i instanceof RegExp)return(m=new RegExp(i.source)).global=i.global,m.ignoreCase=i.ignoreCase,m.multiline=i.multiline,m.lastIndex=i.lastIndex,m;if("object"==typeof i){for(var r in m={},i)i.hasOwnProperty(r)&&(m[r]=ee(i[r]));return m}return i}function Ee(i,m){if(i.elements){var a=i.elements.root;a.parentNode.removeChild(a),delete i.elements,i.settings=ee(i.__settings),i.__init=m,delete i.__internal}}function I(i,m){return function(){if(arguments.length>0){for(var a=[],r=0;r<arguments.length;r+=1)a.push(arguments[r]);return a.push(i),m.apply(i,a)}return m.apply(i,[null,i])}}function je(i,m){return{index:i,button:m,cancel:!1}}function E(i,m){if("function"==typeof m.get(i))return m.get(i).call(m)}var Me=":not(:disabled):not(.ajs-reset)",K={autoReset:!0,basic:!1,closable:!0,closableByDimmer:!0,invokeOnCloseOff:!1,frameless:!1,defaultFocusOff:!1,maintainFocus:!0,maximizable:!0,modal:!0,movable:!0,moveBounded:!1,overflow:!0,padding:!0,pinnable:!0,pinned:!0,preventBodyShift:!1,resizable:!0,startMaximized:!1,transition:"pulse",transitionOff:!1,tabbable:["button","[href]","input","select","textarea",'[tabindex]:not([tabindex^="-"])'+Me].join(Me+","),notifier:{delay:5,position:"bottom-right",closeButton:!1,classes:{base:"alertify-notifier",prefix:"ajs-",message:"ajs-message",top:"ajs-top",right:"ajs-right",bottom:"ajs-bottom",left:"ajs-left",center:"ajs-center",visible:"ajs-visible",hidden:"ajs-hidden",close:"ajs-close"}},glossary:{title:"AlertifyJS",ok:"OK",cancel:"Cancel",acccpt:"Accept",deny:"Deny",confirm:"Confirm",decline:"Decline",close:"Close",maximize:"Maximize",restore:"Restore"},theme:{input:"ajs-input",ok:"ajs-ok",cancel:"ajs-cancel"},hooks:{preinit:function(){},postinit:function(){}}},O=[],ve=!1;try{var te=Object.defineProperty({},"passive",{get:function(){ve=!0}});N.addEventListener("test",te,te),N.removeEventListener("test",te,te)}catch{}var T=function(i,m,a,r,o){i.addEventListener(m,a,ve?{capture:r,passive:o}:!0===r)},z=function(i,m,a,r,o){i.removeEventListener(m,a,ve?{capture:r,passive:o}:!0===r)},X=function(){var i,m,a=!1,r={animation:"animationend",OAnimation:"oAnimationEnd oanimationend",msAnimation:"MSAnimationEnd",MozAnimation:"animationend",WebkitAnimation:"webkitAnimationEnd"};for(i in r)if(void 0!==document.documentElement.style[i]){m=r[i],a=!0;break}return{type:m,supported:a}}(),Ne=function(){function i(e){if(!e.__internal){var t;x.defaults.hooks.preinit(e),delete e.__init,e.__settings||(e.__settings=ee(e.settings)),"function"==typeof e.setup?((t=e.setup()).options=t.options||{},t.focus=t.focus||{}):t={buttons:[],focus:{element:null,select:!1},options:{}},"object"!=typeof e.hooks&&(e.hooks={});var s=[];if(Array.isArray(t.buttons))for(var n=0;n<t.buttons.length;n+=1){var f=t.buttons[n],p={};for(var b in f)f.hasOwnProperty(b)&&(p[b]=f[b]);s.push(p)}var _=e.__internal={isOpen:!1,activeElement:document.body,timerIn:void 0,timerOut:void 0,buttons:s,focus:t.focus,options:{title:void 0,modal:void 0,basic:void 0,frameless:void 0,defaultFocusOff:void 0,pinned:void 0,movable:void 0,moveBounded:void 0,resizable:void 0,autoReset:void 0,closable:void 0,closableByDimmer:void 0,invokeOnCloseOff:void 0,maximizable:void 0,startMaximized:void 0,pinnable:void 0,transition:void 0,transitionOff:void 0,padding:void 0,overflow:void 0,onshow:void 0,onclosing:void 0,onclose:void 0,onfocus:void 0,onmove:void 0,onmoved:void 0,onresize:void 0,onresized:void 0,onmaximize:void 0,onmaximized:void 0,onrestore:void 0,onrestored:void 0},resetHandler:void 0,beginMoveHandler:void 0,beginResizeHandler:void 0,bringToFrontHandler:void 0,modalClickHandler:void 0,buttonsClickHandler:void 0,commandsClickHandler:void 0,transitionInHandler:void 0,transitionOutHandler:void 0,destroy:void 0},l={};l.root=document.createElement("div"),l.root.style.display="none",l.root.className=c.base+" "+c.hidden+" ",l.root.innerHTML=L.dimmer+L.modal,l.dimmer=l.root.firstChild,l.modal=l.root.lastChild,l.modal.innerHTML=L.dialog,l.dialog=l.modal.firstChild,l.dialog.innerHTML=L.reset+L.commands+L.header+L.body+L.footer+L.resizeHandle+L.reset,l.reset=[],l.reset.push(l.dialog.firstChild),l.reset.push(l.dialog.lastChild),l.commands={},l.commands.container=l.reset[0].nextSibling,l.commands.pin=l.commands.container.firstChild,l.commands.maximize=l.commands.pin.nextSibling,l.commands.close=l.commands.maximize.nextSibling,l.header=l.commands.container.nextSibling,l.body=l.header.nextSibling,l.body.innerHTML=L.content,l.content=l.body.firstChild,l.footer=l.body.nextSibling,l.footer.innerHTML=L.buttons.auxiliary+L.buttons.primary,l.resizeHandle=l.footer.nextSibling,l.buttons={},l.buttons.auxiliary=l.footer.firstChild,l.buttons.primary=l.buttons.auxiliary.nextSibling,l.buttons.primary.innerHTML=L.button,l.buttonTemplate=l.buttons.primary.firstChild,l.buttons.primary.removeChild(l.buttonTemplate);for(var B=0;B<e.__internal.buttons.length;B+=1){var M=e.__internal.buttons[B];for(var fe in oe.indexOf(M.key)<0&&oe.push(M.key),M.element=l.buttonTemplate.cloneNode(),M.element.innerHTML=M.text,"string"==typeof M.className&&""!==M.className&&g(M.element,M.className),M.attrs)"className"!==fe&&M.attrs.hasOwnProperty(fe)&&M.element.setAttribute(fe,M.attrs[fe]);"auxiliary"===M.scope?l.buttons.auxiliary.appendChild(M.element):l.buttons.primary.appendChild(M.element)}for(var D in e.elements=l,_.resetHandler=I(e,be),_.beginMoveHandler=I(e,at),_.beginResizeHandler=I(e,ct),_.bringToFrontHandler=I(e,v),_.modalClickHandler=I(e,nt),_.buttonsClickHandler=I(e,it),_.commandsClickHandler=I(e,ge),_.transitionInHandler=I(e,st),_.transitionOutHandler=I(e,ot),_.options)void 0!==t.options[D]?e.set(D,t.options[D]):x.defaults.hasOwnProperty(D)?e.set(D,x.defaults[D]):"title"===D&&e.set(D,x.defaults.glossary[D]);"function"==typeof e.build&&e.build(),x.defaults.hooks.postinit(e)}document.body.appendChild(e.elements.root)}function a(){N.scrollTo(Ge,Q)}function r(){for(var e=0,t=0;t<O.length;t+=1){var s=O[t];(s.isModal()||s.isMaximized())&&(e+=1)}0===e&&document.body.className.indexOf(c.noOverflow)>=0?(k(document.body,c.noOverflow),o(!1)):e>0&&document.body.className.indexOf(c.noOverflow)<0&&(o(!0),g(document.body,c.noOverflow))}function o(e){x.defaults.preventBodyShift&&(e&&document.documentElement.scrollHeight>document.documentElement.clientHeight?(Je=Q,Ke=N.getComputedStyle(document.body).top,g(document.body,c.fixed),document.body.style.top=-Q+"px"):e||(Q=Je,document.body.style.top=Ke,k(document.body,c.fixed),a()))}function v(e,t){for(var n=O.indexOf(t)+1;n<O.length;n+=1)if(O[n].isModal())return;return document.body.lastChild!==t.elements.root&&(document.body.appendChild(t.elements.root),O.splice(O.indexOf(t),1),O.push(t),_e(t)),!1}function S(e,t,s,n,f){var b,p={op:void 0,items:[]};if(void 0===f&&"string"==typeof n)p.op="get",t.hasOwnProperty(n)?(p.found=!0,p.value=t[n]):(p.found=!1,p.value=void 0);else if(p.op="set","object"==typeof n){var _=n;for(var l in _)t.hasOwnProperty(l)?(t[l]!==_[l]&&(b=t[l],t[l]=_[l],s.call(e,l,b,_[l])),p.items.push({key:l,value:_[l],found:!0})):p.items.push({key:l,value:_[l],found:!1})}else{if("string"!=typeof n)throw new Error("args must be a string or object");t.hasOwnProperty(n)?(t[n]!==f&&(b=t[n],t[n]=f,s.call(e,n,b,f)),p.items.push({key:n,value:f,found:!0})):p.items.push({key:n,value:f,found:!1})}return p}function F(e){var t;ne(e,function(s){return t=!0!==e.get("invokeOnCloseOff")&&!0===s.invokeOnClose}),!t&&e.isOpen()&&e.close()}function ge(e,t){switch(e.srcElement||e.target){case t.elements.commands.pin:t.isPinned()?y(t):J(t);break;case t.elements.commands.maximize:t.isMaximized()?R(t):j(t);break;case t.elements.commands.close:F(t)}return!1}function J(e){e.set("pinned",!0)}function y(e){e.set("pinned",!1)}function j(e){E("onmaximize",e),g(e.elements.root,c.maximized),e.isOpen()&&r(),E("onmaximized",e)}function R(e){E("onrestore",e),k(e.elements.root,c.maximized),e.isOpen()&&r(),E("onrestored",e)}function Le(e){var t=pe();e.elements.modal.style.marginTop=he()+"px",e.elements.modal.style.marginLeft=t+"px",e.elements.modal.style.marginRight=-t+"px"}function Ae(e){var t=parseInt(e.elements.modal.style.marginTop,10),s=parseInt(e.elements.modal.style.marginLeft,10);if(e.elements.modal.style.marginTop="",e.elements.modal.style.marginLeft="",e.elements.modal.style.marginRight="",e.isOpen()){var n=0,f=0;""!==e.elements.dialog.style.top&&(n=parseInt(e.elements.dialog.style.top,10)),e.elements.dialog.style.top=n+(t-he())+"px",""!==e.elements.dialog.style.left&&(f=parseInt(e.elements.dialog.style.left,10)),e.elements.dialog.style.left=f+(s-pe())+"px"}}function ye(e){e.get("modal")||e.get("pinned")?Ae(e):Le(e)}function nt(e,t){if(e.timeStamp-Ve>200&&(Ve=e.timeStamp)&&!we){var s=e.srcElement||e.target;!0===t.get("closableByDimmer")&&s===t.elements.modal&&F(t)}we=!1}function ne(e,t){if(Date.now()-Qe>200&&(Qe=Date.now()))for(var s=0;s<e.__internal.buttons.length;s+=1){var n=e.__internal.buttons[s];if(!n.element.disabled&&t(n)){var f=je(s,n);"function"==typeof e.callback&&e.callback.apply(e,[f]),!1===f.cancel&&e.close();break}}}function it(e,t){var s=e.srcElement||e.target;ne(t,function(n){return n.element===s&&(Z=!0)})}function Ie(e){if(!Z){var t=O[O.length-1],s=e.keyCode;return 0===t.__internal.buttons.length&&27===s&&!0===t.get("closable")?(F(t),!1):oe.indexOf(s)>-1?(ne(t,function(n){return n.key===s}),!1):void 0}Z=!1}function Se(e){var t=O[O.length-1],s=e.keyCode;if(37===s||39===s){for(var n=t.__internal.buttons,f=0;f<n.length;f+=1)if(document.activeElement===n[f].element)switch(s){case 37:return void n[(f||n.length)-1].element.focus();case 39:return void n[(f+1)%n.length].element.focus()}}else if(s<124&&s>111&&oe.indexOf(s)>-1)return e.preventDefault(),e.stopPropagation(),ne(t,function(p){return p.key===s}),!1}function _e(e,t){if(t)t.focus();else{var s=e.__internal.focus,n=s.element;switch(typeof s.element){case"number":e.__internal.buttons.length>s.element&&(n=!0===e.get("basic")?e.elements.reset[0]:e.__internal.buttons[s.element].element);break;case"string":n=e.elements.body.querySelector(s.element);break;case"function":n=s.element.call(e)}!0!==e.get("defaultFocusOff")&&(null!=n||0!==e.__internal.buttons.length)||(n=e.elements.reset[0]),n&&n.focus&&(n.focus(),s.select&&n.select&&n.select())}}function be(e,t){if(!t)for(var s=O.length-1;s>-1;s-=1)if(O[s].isModal()){t=O[s];break}if(t&&t.isModal()){var n,f=t.elements.reset[0],p=t.elements.reset[1],b=e.relatedTarget,_=t.elements.root.contains(b),l=e.srcElement||e.target;if(l===f&&!_||l===p&&b===f)return;l===p||l===document.body?n=f:l===f&&b===p?n=Pe(t):l===f&&_&&(n=Pe(t,!0)),_e(t,n)}}function Pe(e,t){var s=[].slice.call(e.elements.dialog.querySelectorAll(K.tabbable));t&&s.reverse();for(var n=0;n<s.length;n+=1){var f=s[n];if(f.offsetParent||f.offsetWidth||f.offsetHeight||f.getClientRects().length)return f}}function We(e){var t=O[O.length-1];t&&e.shiftKey&&9===e.keyCode&&t.elements.reset[1].focus()}function st(e,t){clearTimeout(t.__internal.timerIn),_e(t),Z=!1,E("onfocus",t),z(t.elements.dialog,X.type,t.__internal.transitionInHandler),k(t.elements.root,c.animationIn)}function ot(e,t){clearTimeout(t.__internal.timerOut),z(t.elements.dialog,X.type,t.__internal.transitionOutHandler),ie(t),se(t),t.isMaximized()&&!t.get("startMaximized")&&R(t),"function"==typeof t.__internal.destroy&&t.__internal.destroy.apply(t)}function lt(e,t){var n=e[re]-$;ae&&(n-=document.body.scrollTop),t.style.left=e[le]-ze+"px",t.style.top=n+"px"}function rt(e,t){var n=e[re]-$;ae&&(n-=document.body.scrollTop),t.style.left=Math.min(Y.maxLeft,Math.max(Y.minLeft,e[le]-ze))+"px",t.style.top=ae?Math.min(Y.maxTop,Math.max(Y.minTop,n))+"px":Math.max(Y.minTop,n)+"px"}function at(e,t){if(null===W&&!t.isMaximized()&&t.get("movable")){var s,n=0,f=0;if("touchstart"===e.type?(e.preventDefault(),s=e.targetTouches[0],le="clientX",re="clientY"):0===e.button&&(s=e),s){var p=t.elements.dialog;if(g(p,c.capture),p.style.left&&(n=parseInt(p.style.left,10)),p.style.top&&(f=parseInt(p.style.top,10)),ze=s[le]-n,$=s[re]-f,t.isModal()?$+=t.elements.modal.scrollTop:t.isPinned()&&($-=document.body.scrollTop),t.get("moveBounded")){var b=p,_=-n,l=-f;do{_+=b.offsetLeft,l+=b.offsetTop}while(b=b.offsetParent);Y={maxLeft:_,minLeft:-_,maxTop:document.documentElement.clientHeight-p.clientHeight-l,minTop:-l},ue=rt}else Y=null,ue=lt;return E("onmove",t),ae=!t.isModal()&&t.isPinned(),q=t,ue(s,p),g(document.body,c.noSelection),!1}}}function xe(e){var t;q&&("touchmove"===e.type?(e.preventDefault(),t=e.targetTouches[0]):0===e.button&&(t=e),t&&ue(t,q.elements.dialog))}function ke(){if(q){var e=q;q=Y=null,k(document.body,c.noSelection),k(e.elements.dialog,c.capture),E("onmoved",e)}}function ie(e){q=null;var t=e.elements.dialog;t.style.left=t.style.top=""}function ct(e,t){var s;if(!t.isMaximized()&&("touchstart"===e.type?(e.preventDefault(),s=e.targetTouches[0]):0===e.button&&(s=e),s)){E("onresize",t),W=t,de=t.elements.resizeHandle.offsetHeight/2;var n=t.elements.dialog;return g(n,c.capture),V=parseInt(n.style.left,10),n.style.height=n.offsetHeight+"px",n.style.minHeight=t.elements.header.offsetHeight+t.elements.footer.offsetHeight+"px",n.style.width=(me=n.offsetWidth)+"px","none"!==n.style.maxWidth&&(n.style.minWidth=(ce=n.offsetWidth)+"px"),n.style.maxWidth="none",g(document.body,c.noSelection),!1}}function He(e){var t;W&&("touchmove"===e.type?(e.preventDefault(),t=e.targetTouches[0]):0===e.button&&(t=e),t&&function mt(e,t,s){var b,_,n=t,f=0,p=0;do{f+=n.offsetLeft,p+=n.offsetTop}while(n=n.offsetParent);!0===s?(b=e.pageX,_=e.pageY):(b=e.clientX,_=e.clientY);var l=Ce();if(l&&(b=document.body.offsetWidth-b,isNaN(V)||(f=document.body.offsetWidth-f-t.offsetWidth)),t.style.height=_-p+de+"px",t.style.width=b-f+de+"px",!isNaN(V)){var B=.5*Math.abs(t.offsetWidth-me);l&&(B*=-1),t.offsetWidth>me?t.style.left=V+B+"px":t.offsetWidth>=ce&&(t.style.left=V-B+"px")}}(t,W.elements.dialog,!W.get("modal")&&!W.get("pinned")))}function Oe(){if(W){var e=W;W=null,k(document.body,c.noSelection),k(e.elements.dialog,c.capture),we=!0,E("onresized",e)}}function se(e){W=null;var t=e.elements.dialog;"none"===t.style.maxWidth&&(t.style.maxWidth=t.style.minWidth=t.style.width=t.style.height=t.style.minHeight=t.style.left="",V=Number.Nan,me=ce=de=0)}function Fe(){for(var e=0;e<O.length;e+=1){var t=O[e];t.get("autoReset")&&(ie(t),se(t))}}function Re(e){T(e.elements.dialog,"focus",e.__internal.bringToFrontHandler,!0)}function Be(e){z(e.elements.dialog,"focus",e.__internal.bringToFrontHandler,!0)}function De(e){T(e.elements.header,"mousedown",e.__internal.beginMoveHandler),T(e.elements.header,"touchstart",e.__internal.beginMoveHandler,!1,!1)}function Ue(e){z(e.elements.header,"mousedown",e.__internal.beginMoveHandler),z(e.elements.header,"touchstart",e.__internal.beginMoveHandler,!1,!1)}function Xe(e){T(e.elements.resizeHandle,"mousedown",e.__internal.beginResizeHandler),T(e.elements.resizeHandle,"touchstart",e.__internal.beginResizeHandler,!1,!1)}function Ye(e){z(e.elements.resizeHandle,"mousedown",e.__internal.beginResizeHandler),z(e.elements.resizeHandle,"touchstart",e.__internal.beginResizeHandler,!1,!1)}var Ge,Q,oe=[],qe=!1,gt=N.navigator.userAgent.indexOf("Safari")>-1&&N.navigator.userAgent.indexOf("Chrome")<0,L={dimmer:'<div class="ajs-dimmer"></div>',modal:'<div class="ajs-modal" tabindex="0"></div>',dialog:'<div class="ajs-dialog" tabindex="0"></div>',reset:'<button class="ajs-reset"></button>',commands:'<div class="ajs-commands"><button class="ajs-pin"></button><button class="ajs-maximize"></button><button class="ajs-close"></button></div>',header:'<div class="ajs-header"></div>',body:'<div class="ajs-body"></div>',content:'<div class="ajs-content"></div>',footer:'<div class="ajs-footer"></div>',buttons:{primary:'<div class="ajs-primary ajs-buttons"></div>',auxiliary:'<div class="ajs-auxiliary ajs-buttons"></div>'},button:'<button class="ajs-button"></button>',resizeHandle:'<div class="ajs-handle"></div>'},c={animationIn:"ajs-in",animationOut:"ajs-out",base:"alertify",basic:"ajs-basic",capture:"ajs-capture",closable:"ajs-closable",fixed:"ajs-fixed",frameless:"ajs-frameless",hidden:"ajs-hidden",maximize:"ajs-maximize",maximized:"ajs-maximized",maximizable:"ajs-maximizable",modeless:"ajs-modeless",movable:"ajs-movable",noSelection:"ajs-no-selection",noOverflow:"ajs-no-overflow",noPadding:"ajs-no-padding",pin:"ajs-pin",pinnable:"ajs-pinnable",prefix:"ajs-",resizable:"ajs-resizable",restore:"ajs-restore",shake:"ajs-shake",unpinned:"ajs-unpinned",noTransition:"ajs-no-transition"},Ke="",Je=0,we=!1,Ve=0,Qe=0,Z=!1,q=null,ze=0,$=0,le="pageX",re="pageY",Y=null,ae=!1,ue=null,W=null,V=Number.Nan,me=0,ce=0,de=0;return{__init:i,isOpen:function(){return this.__internal.isOpen},isModal:function(){return this.elements.root.className.indexOf(c.modeless)<0},isMaximized:function(){return this.elements.root.className.indexOf(c.maximized)>-1},isPinned:function(){return this.elements.root.className.indexOf(c.unpinned)<0},maximize:function(){return this.isMaximized()||j(this),this},restore:function(){return this.isMaximized()&&R(this),this},pin:function(){return this.isPinned()||J(this),this},unpin:function(){return this.isPinned()&&y(this),this},bringToFront:function(){return v(0,this),this},moveTo:function(e,t){if(!isNaN(e)&&!isNaN(t)){E("onmove",this);var s=this.elements.dialog,n=s,f=0,p=0;s.style.left&&(f-=parseInt(s.style.left,10)),s.style.top&&(p-=parseInt(s.style.top,10));do{f+=n.offsetLeft,p+=n.offsetTop}while(n=n.offsetParent);var b=e-f,_=t-p;Ce()&&(b*=-1),s.style.left=b+"px",s.style.top=_+"px",E("onmoved",this)}return this},resizeTo:function(e,t){var s=parseFloat(e),n=parseFloat(t),f=/(\d*\.\d+|\d+)%/;if(!isNaN(s)&&!isNaN(n)&&!0===this.get("resizable")){E("onresize",this),(""+e).match(f)&&(s=s/100*document.documentElement.clientWidth),(""+t).match(f)&&(n=n/100*document.documentElement.clientHeight);var p=this.elements.dialog;"none"!==p.style.maxWidth&&(p.style.minWidth=(ce=p.offsetWidth)+"px"),p.style.maxWidth="none",p.style.minHeight=this.elements.header.offsetHeight+this.elements.footer.offsetHeight+"px",p.style.width=s+"px",p.style.height=n+"px",E("onresized",this)}return this},setting:function(e,t){var s=this,n=S(this,this.__internal.options,function(_,l,B){!function C(e,t,s,n){switch(t){case"title":e.setHeader(n);break;case"modal":!function w(e){e.get("modal")?(k(e.elements.root,c.modeless),e.isOpen()&&(Be(e),ye(e),r())):(g(e.elements.root,c.modeless),e.isOpen()&&(Re(e),ye(e),r()))}(e);break;case"basic":!function h(e){e.get("basic")?g(e.elements.root,c.basic):k(e.elements.root,c.basic)}(e);break;case"frameless":!function H(e){e.get("frameless")?g(e.elements.root,c.frameless):k(e.elements.root,c.frameless)}(e);break;case"pinned":!function $e(e){e.get("pinned")?(k(e.elements.root,c.unpinned),e.isOpen()&&Ae(e)):(g(e.elements.root,c.unpinned),e.isOpen()&&!e.isModal()&&Le(e))}(e);break;case"closable":!function tt(e){e.get("closable")?(g(e.elements.root,c.closable),function pt(e){T(e.elements.modal,"click",e.__internal.modalClickHandler)}(e)):(k(e.elements.root,c.closable),function vt(e){z(e.elements.modal,"click",e.__internal.modalClickHandler)}(e))}(e);break;case"maximizable":!function et(e){e.get("maximizable")?g(e.elements.root,c.maximizable):k(e.elements.root,c.maximizable)}(e);break;case"pinnable":!function G(e){e.get("pinnable")?g(e.elements.root,c.pinnable):k(e.elements.root,c.pinnable)}(e);break;case"movable":!function ut(e){e.get("movable")?(g(e.elements.root,c.movable),e.isOpen()&&De(e)):(ie(e),k(e.elements.root,c.movable),e.isOpen()&&Ue(e))}(e);break;case"resizable":!function dt(e){e.get("resizable")?(g(e.elements.root,c.resizable),e.isOpen()&&Xe(e)):(se(e),k(e.elements.root,c.resizable),e.isOpen()&&Ye(e))}(e);break;case"padding":n?k(e.elements.root,c.noPadding):e.elements.root.className.indexOf(c.noPadding)<0&&g(e.elements.root,c.noPadding);break;case"overflow":n?k(e.elements.root,c.noOverflow):e.elements.root.className.indexOf(c.noOverflow)<0&&g(e.elements.root,c.noOverflow);break;case"transition":!function u(e,t,s){"string"==typeof s&&k(e.elements.root,c.prefix+s),g(e.elements.root,c.prefix+t)}(e,n,s);break;case"transitionOff":!function d(e){e.get("transitionOff")?g(e.elements.root,c.noTransition):k(e.elements.root,c.noTransition)}(e)}"function"==typeof e.hooks.onupdate&&e.hooks.onupdate.call(e,t,s,n)}(s,_,l,B)},e,t);if("get"===n.op)return n.found?n.value:void 0!==this.settings?S(this,this.settings,this.settingUpdated||function(){},e,t).value:void 0;if("set"===n.op){if(n.items.length>0)for(var f=this.settingUpdated||function(){},p=0;p<n.items.length;p+=1){var b=n.items[p];b.found||void 0===this.settings||S(this,this.settings,f,b.key,b.value)}return this}},set:function(e,t){return this.setting(e,t),this},get:function(e){return this.setting(e)},setHeader:function(e){return"string"==typeof e?(U(this.elements.header),this.elements.header.innerHTML=e):e instanceof N.HTMLElement&&this.elements.header.firstChild!==e&&(U(this.elements.header),this.elements.header.appendChild(e)),this},setContent:function(e){return"string"==typeof e?(U(this.elements.content),this.elements.content.innerHTML=e):e instanceof N.HTMLElement&&this.elements.content.firstChild!==e&&(U(this.elements.content),this.elements.content.appendChild(e)),this},showModal:function(e){return this.show(!0,e)},show:function(e,t){if(i(this),this.__internal.isOpen){ie(this),se(this),g(this.elements.dialog,c.shake);var s=this;setTimeout(function(){k(s.elements.dialog,c.shake)},200)}else{if(this.__internal.isOpen=!0,O.push(this),x.defaults.maintainFocus&&(this.__internal.activeElement=document.activeElement),document.body.hasAttribute("tabindex")||document.body.setAttribute("tabindex",qe="0"),"function"==typeof this.prepare&&this.prepare(),function ft(e){1===O.length&&(T(N,"resize",Fe),T(document.body,"keyup",Ie),T(document.body,"keydown",Se),T(document.body,"focus",be),T(document.documentElement,"mousemove",xe),T(document.documentElement,"touchmove",xe,!1,!1),T(document.documentElement,"mouseup",ke),T(document.documentElement,"touchend",ke),T(document.documentElement,"mousemove",He),T(document.documentElement,"touchmove",He,!1,!1),T(document.documentElement,"mouseup",Oe),T(document.documentElement,"touchend",Oe)),T(e.elements.commands.container,"click",e.__internal.commandsClickHandler),T(e.elements.footer,"click",e.__internal.buttonsClickHandler),T(e.elements.reset[0],"focusin",e.__internal.resetHandler),T(e.elements.reset[0],"keydown",We),T(e.elements.reset[1],"focusin",e.__internal.resetHandler),Z=!0,T(e.elements.dialog,X.type,e.__internal.transitionInHandler),e.get("modal")||Re(e),e.get("resizable")&&Xe(e),e.get("movable")&&De(e)}(this),void 0!==e&&this.set("modal",e),function m(){Ge=pe(),Q=he()}(),r(),"string"==typeof t&&""!==t&&(this.__internal.className=t,g(this.elements.root,t)),this.get("startMaximized")?this.maximize():this.isMaximized()&&R(this),ye(this),this.elements.root.removeAttribute("style"),k(this.elements.root,c.animationOut),g(this.elements.root,c.animationIn),clearTimeout(this.__internal.timerIn),this.__internal.timerIn=setTimeout(this.__internal.transitionInHandler,X.supported?1e3:100),gt){var n=this.elements.root;n.style.display="none",setTimeout(function(){n.style.display="block"},0)}k(this.elements.root,c.hidden),a(),"function"==typeof this.hooks.onshow&&this.hooks.onshow.call(this),E("onshow",this)}return this},close:function(){return this.__internal.isOpen&&!1!==E("onclosing",this)&&(function ht(e){1===O.length&&(z(N,"resize",Fe),z(document.body,"keyup",Ie),z(document.body,"keydown",Se),z(document.body,"focus",be),z(document.documentElement,"mousemove",xe),z(document.documentElement,"mouseup",ke),z(document.documentElement,"mousemove",He),z(document.documentElement,"mouseup",Oe)),z(e.elements.commands.container,"click",e.__internal.commandsClickHandler),z(e.elements.footer,"click",e.__internal.buttonsClickHandler),z(e.elements.reset[0],"focusin",e.__internal.resetHandler),z(e.elements.reset[0],"keydown",We),z(e.elements.reset[1],"focusin",e.__internal.resetHandler),T(e.elements.dialog,X.type,e.__internal.transitionOutHandler),e.get("modal")||Be(e),e.get("movable")&&Ue(e),e.get("resizable")&&Ye(e)}(this),k(this.elements.root,c.animationIn),g(this.elements.root,c.animationOut),clearTimeout(this.__internal.timerOut),this.__internal.timerOut=setTimeout(this.__internal.transitionOutHandler,X.supported?1e3:100),g(this.elements.root,c.hidden),x.defaults.maintainFocus&&this.__internal.activeElement&&(this.__internal.activeElement.focus(),this.__internal.activeElement=null),void 0!==this.__internal.className&&""!==this.__internal.className&&k(this.elements.root,this.__internal.className),"function"==typeof this.hooks.onclose&&this.hooks.onclose.call(this),E("onclose",this),O.splice(O.indexOf(this),1),this.__internal.isOpen=!1,r()),O.length||"0"!==qe||document.body.removeAttribute("tabindex"),this},closeOthers:function(){return x.closeAll(this),this},destroy:function(){return this.__internal&&(this.__internal.isOpen?(this.__internal.destroy=function(){Ee(this,i)},this.close()):this.__internal.destroy||Ee(this,i)),this}}}(),P=function(){function i(v){v.__internal||(v.__internal={position:x.defaults.notifier.position,delay:x.defaults.notifier.delay},d=document.createElement("DIV"),("transitionOff"in K.notifier?K.notifier.transitionOff:K.transitionOff)&&(H=h.base+" ajs-no-transition"),r(v)),d.parentNode!==document.body&&document.body.appendChild(d)}function m(v){v.__internal.pushed=!0,w.push(v)}function r(v){switch(d.className=H,v.__internal.position){case"top-right":g(d,h.top+" "+h.right);break;case"top-left":g(d,h.top+" "+h.left);break;case"top-center":g(d,h.top+" "+h.center);break;case"bottom-left":g(d,h.bottom+" "+h.left);break;case"bottom-center":g(d,h.bottom+" "+h.center);break;default:g(d,h.bottom+" "+h.right)}}var d,w=[],h=K.notifier.classes,H=h.base;return{setting:function(v,C){if(i(this),void 0===C)return this.__internal[v];switch(v){case"position":this.__internal.position=C,r(this);break;case"delay":this.__internal.delay=C}return this},set:function(v,C){return this.setting(v,C),this},get:function(v){return this.setting(v)},create:function(v,C){i(this);var S=document.createElement("div");return S.className=h.message+("string"==typeof v&&""!==v?" "+h.prefix+v:""),function o(v,C){function S(y,j){j.__internal.closeButton&&"true"!==y.target.getAttribute("data-close")||j.dismiss(!0)}function F(y,j){z(j.element,X.type,F),d.removeChild(j.element)}function J(y){clearTimeout(y.__internal.timer),clearTimeout(y.__internal.transitionTimeout)}return function ge(y){return y.__internal||(y.__internal={pushed:!1,delay:void 0,timer:void 0,clickHandler:void 0,transitionEndHandler:void 0,transitionTimeout:void 0},y.__internal.clickHandler=I(y,S),y.__internal.transitionEndHandler=I(y,F)),y}({element:v,push:function(y,j){if(!this.__internal.pushed){var R,G;switch(m(this),J(this),arguments.length){case 0:G=this.__internal.delay;break;case 1:"number"==typeof y?G=y:(R=y,G=this.__internal.delay);break;case 2:R=y,G=j}return this.__internal.closeButton=x.defaults.notifier.closeButton,void 0!==R&&this.setContent(R),P.__internal.position.indexOf("top")<0?d.appendChild(this.element):d.insertBefore(this.element,d.firstChild),g(this.element,h.visible),T(this.element,"click",this.__internal.clickHandler),this.delay(G)}return this},ondismiss:function(){},callback:C,dismiss:function(y){return this.__internal.pushed&&(J(this),"function"==typeof this.ondismiss&&!1===this.ondismiss.call(this)||(z(this.element,"click",this.__internal.clickHandler),void 0!==this.element&&this.element.parentNode===d&&(this.__internal.transitionTimeout=setTimeout(this.__internal.transitionEndHandler,X.supported?1e3:100),k(this.element,h.visible),"function"==typeof this.callback&&this.callback.call(this,y)),function a(v){w.splice(w.indexOf(v),1),v.__internal.pushed=!1}(this))),this},delay:function(y){if(J(this),this.__internal.delay=void 0===y||isNaN(+y)?P.__internal.delay:+y,this.__internal.delay>0){var j=this;this.__internal.timer=setTimeout(function(){j.dismiss()},1e3*this.__internal.delay)}return this},setContent:function(y){if("string"==typeof y?(U(this.element),this.element.innerHTML=y):y instanceof N.HTMLElement&&this.element.firstChild!==y&&(U(this.element),this.element.appendChild(y)),this.__internal.closeButton){var j=document.createElement("span");g(j,h.close),j.setAttribute("data-close",!0),this.element.appendChild(j)}return this},dismissOthers:function(){return P.dismissAll(this),this}})}(S,C)},dismissAll:function(v){for(var C=w.slice(0),S=0;S<C.length;S+=1){var F=C[S];void 0!==v&&v===F||F.dismiss()}}}}(),x=new function Ze(){function i(o,u){for(var d in u)u.hasOwnProperty(d)&&(o[d]=u[d]);return o}function m(o){var u=r[o].dialog;return u&&"function"==typeof u.__init&&u.__init(u),u}var r={};return{defaults:K,dialog:function(o,u,d,w){if("function"!=typeof u)return m(o);if(this.hasOwnProperty(o))throw new Error("alertify.dialog: name already exists");var h=function a(o,u,d,w){var h={dialog:null,factory:u};return void 0!==w&&(h.factory=function(){return i(new r[w].factory,new u)}),d||(h.dialog=i(new h.factory,Ne)),r[o]=h}(o,u,d,w);this[o]=d?function(){if(0===arguments.length)return h.dialog;var H=i(new h.factory,Ne);return H&&"function"==typeof H.__init&&H.__init(H),H.main.apply(H,arguments),H.show.apply(H)}:function(){if(h.dialog&&"function"==typeof h.dialog.__init&&h.dialog.__init(h.dialog),0===arguments.length)return h.dialog;var H=h.dialog;return H.main.apply(h.dialog,arguments),H.show.apply(h.dialog)}},closeAll:function(o){for(var u=O.slice(0),d=0;d<u.length;d+=1){var w=u[d];void 0!==o&&o===w||w.close()}},setting:function(o,u,d){if("notifier"===o)return P.setting(u,d);var w=m(o);return w?w.setting(u,d):void 0},set:function(o,u,d){return this.setting(o,u,d)},get:function(o,u){return this.setting(o,u)},notify:function(o,u,d,w){return P.create(u,w).push(o,d)},message:function(o,u,d){return P.create(null,d).push(o,u)},success:function(o,u,d){return P.create("success",d).push(o,u)},error:function(o,u,d){return P.create("error",d).push(o,u)},warning:function(o,u,d){return P.create("warning",d).push(o,u)},dismissAll:function(){P.dismissAll()}}};x.dialog("alert",function(){return{main:function(i,m,a){var r,o,u;switch(arguments.length){case 1:o=i;break;case 2:"function"==typeof m?(o=i,u=m):(r=i,o=m);break;case 3:r=i,o=m,u=a}return this.set("title",r),this.set("message",o),this.set("onok",u),this},setup:function(){return{buttons:[{text:x.defaults.glossary.ok,key:27,invokeOnClose:!0,className:x.defaults.theme.ok}],focus:{element:0,select:!1},options:{maximizable:!1,resizable:!1}}},build:function(){},prepare:function(){},setMessage:function(i){this.setContent(i)},settings:{message:void 0,onok:void 0,label:void 0},settingUpdated:function(i,m,a){switch(i){case"message":this.setMessage(a);break;case"label":this.__internal.buttons[0].element&&(this.__internal.buttons[0].element.innerHTML=a)}},callback:function(i){if("function"==typeof this.get("onok")){var m=this.get("onok").call(this,i);void 0!==m&&(i.cancel=!m)}}}}),x.dialog("confirm",function(){function i(r){null!==a.timer&&(clearInterval(a.timer),a.timer=null,r.__internal.buttons[a.index].element.innerHTML=a.text)}function m(r,o,u){i(r),a.duration=u,a.index=o,a.text=r.__internal.buttons[o].element.innerHTML,a.timer=setInterval(I(r,a.task),1e3),a.task(null,r)}var a={timer:null,index:null,text:null,duration:null,task:function(r,o){if(o.isOpen()){if(o.__internal.buttons[a.index].element.innerHTML=a.text+" (&#8207;"+a.duration+"&#8207;) ",a.duration-=1,-1===a.duration){i(o);var d=je(a.index,o.__internal.buttons[a.index]);"function"==typeof o.callback&&o.callback.apply(o,[d]),!1!==d.close&&o.close()}}else i(o)}};return{main:function(r,o,u,d){var w,h,H,v;switch(arguments.length){case 1:h=r;break;case 2:h=r,H=o;break;case 3:h=r,H=o,v=u;break;case 4:w=r,h=o,H=u,v=d}return this.set("title",w),this.set("message",h),this.set("onok",H),this.set("oncancel",v),this},setup:function(){return{buttons:[{text:x.defaults.glossary.ok,key:13,className:x.defaults.theme.ok},{text:x.defaults.glossary.cancel,key:27,invokeOnClose:!0,className:x.defaults.theme.cancel}],focus:{element:0,select:!1},options:{maximizable:!1,resizable:!1}}},build:function(){},prepare:function(){},setMessage:function(r){this.setContent(r)},settings:{message:null,labels:null,onok:null,oncancel:null,defaultFocus:null,reverseButtons:null},settingUpdated:function(r,o,u){switch(r){case"message":this.setMessage(u);break;case"labels":"ok"in u&&this.__internal.buttons[0].element&&(this.__internal.buttons[0].text=u.ok,this.__internal.buttons[0].element.innerHTML=u.ok),"cancel"in u&&this.__internal.buttons[1].element&&(this.__internal.buttons[1].text=u.cancel,this.__internal.buttons[1].element.innerHTML=u.cancel);break;case"reverseButtons":this.elements.buttons.primary.appendChild(!0===u?this.__internal.buttons[0].element:this.__internal.buttons[1].element);break;case"defaultFocus":this.__internal.focus.element="ok"===u?0:1}},callback:function(r){var o;switch(i(this),r.index){case 0:"function"==typeof this.get("onok")&&void 0!==(o=this.get("onok").call(this,r))&&(r.cancel=!o);break;case 1:"function"==typeof this.get("oncancel")&&void 0!==(o=this.get("oncancel").call(this,r))&&(r.cancel=!o)}},autoOk:function(r){return m(this,0,r),this},autoCancel:function(r){return m(this,1,r),this}}}),x.dialog("prompt",function(){var i=document.createElement("INPUT"),m=document.createElement("P");return{main:function(a,r,o,u,d){var w,h,H,v,C;switch(arguments.length){case 1:h=a;break;case 2:h=a,H=r;break;case 3:h=a,H=r,v=o;break;case 4:h=a,H=r,v=o,C=u;break;case 5:w=a,h=r,H=o,v=u,C=d}return this.set("title",w),this.set("message",h),this.set("value",H),this.set("onok",v),this.set("oncancel",C),this},setup:function(){return{buttons:[{text:x.defaults.glossary.ok,key:13,className:x.defaults.theme.ok},{text:x.defaults.glossary.cancel,key:27,invokeOnClose:!0,className:x.defaults.theme.cancel}],focus:{element:i,select:!0},options:{maximizable:!1,resizable:!1}}},build:function(){i.className=x.defaults.theme.input,i.setAttribute("type","text"),i.value=this.get("value"),this.elements.content.appendChild(m),this.elements.content.appendChild(i)},prepare:function(){},setMessage:function(a){"string"==typeof a?(U(m),m.innerHTML=a):a instanceof N.HTMLElement&&m.firstChild!==a&&(U(m),m.appendChild(a))},settings:{message:void 0,labels:void 0,onok:void 0,oncancel:void 0,value:"",type:"text",reverseButtons:void 0},settingUpdated:function(a,r,o){switch(a){case"message":this.setMessage(o);break;case"value":i.value=o;break;case"type":switch(o){case"text":case"color":case"date":case"datetime-local":case"email":case"month":case"number":case"password":case"search":case"tel":case"time":case"week":i.type=o;break;default:i.type="text"}break;case"labels":o.ok&&this.__internal.buttons[0].element&&(this.__internal.buttons[0].element.innerHTML=o.ok),o.cancel&&this.__internal.buttons[1].element&&(this.__internal.buttons[1].element.innerHTML=o.cancel);break;case"reverseButtons":this.elements.buttons.primary.appendChild(!0===o?this.__internal.buttons[0].element:this.__internal.buttons[1].element)}},callback:function(a){var r;switch(a.index){case 0:this.settings.value=i.value,"function"==typeof this.get("onok")&&void 0!==(r=this.get("onok").call(this,a,this.settings.value))&&(a.cancel=!r);break;case 1:"function"==typeof this.get("oncancel")&&void 0!==(r=this.get("oncancel").call(this,a))&&(a.cancel=!r),a.cancel||(i.value=this.settings.value)}}}}),"object"==typeof module&&"object"==typeof module.exports?module.exports=x:"function"==typeof define&&define.amd?define([],function(){return x}):N.alertify||(N.alertify=x)}(typeof window<"u"?window:this);
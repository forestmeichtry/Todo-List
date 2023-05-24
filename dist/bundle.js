(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>m});var r=t(81),a=t.n(r),o=t(645),i=t.n(o),s=t(667),d=t.n(s),c=new URL(t(665),t.b),p=new URL(t(866),t.b),l=i()(a()),u=d()(c),f=d()(p);l.push([n.id,":root {\n    --darkSlateGray: #395e66;\n    --myrtleGreen: #387d7a;\n    --seaGreen: #32936f;\n    --jadeGreen: #26a96c;\n    --kellyGreen: #2bc016;\n\n    --headerHeight: 100px;\n    --sideNavWidth: 300px;\n    --taskHeight: 80px;\n}\n\n@font-face {\n    font-family: wixFont;\n    src: url("+u+");\n}\n\nbody {\n    display: grid;\n    grid-template-columns: var(--sideNavWidth) 1fr;\n    grid-template-rows: var(--headerHeight) 1fr;\n    height: 100vh;\n    margin: 0px;\n    font-family: wixFont, sans-serif;\n    overflow-y: hidden;\n}\n\nbutton {\n    border: none;\n    background-color: black;\n    height: 40px;\n    width: 60px;\n    border-radius: 6px;\n    color: var(--kellyGreen);\n}\n\nbutton:hover {\n    background-color: rgb(31, 31, 31);\n    cursor: pointer;\n}\n\n.pageHeader {\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n    padding-top: 10px;\n    font-size: x-large;\n    grid-area: 1 / 1 / 2 / 3;\n    background-color: var(--darkSlateGray);\n}\n\n.sortButton {\n    position: absolute;\n    align-self: flex-end;\n    right: 100px;\n    margin-bottom: 10px;\n    width: 87px;\n}\n\n.addTaskButton {\n    position: absolute;\n    align-self: flex-end;\n    right: 10px;\n    margin-bottom: 10px;\n    width: 80px;\n}\n\n.sideNavBar {\n    background-color: var(--myrtleGreen);\n    z-index: 10;\n    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\n}\n\n.taskContainer {\n    display: flex;\n    flex-direction: column;\n    background-color: var(--seaGreen);\n    padding: 10px;\n    gap: 10px;\n    overflow-y: auto;\n}\n\n.taskWrapper {\n    display: grid;\n    grid-template-columns: 1fr 120px 120px;\n    grid-template-rows: calc(var(--taskHeight) / 2) 1fr;\n    height: var(--taskHeight);\n    flex-shrink: 0;\n    border-radius: 6px;\n    padding: 15px;\n    background-color: var(--kellyGreen);\n    overflow: hidden;\n}\n\n.taskName {\n    grid-area: 1 / 1 / 2 / 4;\n    font-size: x-large;\n}\n\n.taskDescription {\n    position: relative;\n    top: var(--taskHeight);\n}\n\n.dueDate {\n    grid-area: 2 / 2 / 3 / 3;\n}\n\n.dueDate::before {\n    font-weight: bold;\n    content: 'Due: ';\n}\n\n.taskImportance {\n    grid-area: 2 / 3 / 3 / 4;\n}\n\n.taskImportance::before {\n    font-weight: bold;\n    content: 'Importance: ';\n}\n\n@media (max-width: 1024px) {\n    body {\n        grid-template-columns: 0px 1fr;\n        transition-duration: .4s;\n        transition-timing-function: ease-in;\n    }\n\n    body.mobileMenu {\n        grid-template-columns: 200px 1fr;\n    }\n\n    .taskContainer {\n        grid-area: 2 / 1 / 3 / 3;\n    }\n\n    body.mobileMenu .sideNavBar {\n        grid-area: 2 / 1 / 3 / 2;\n    }\n\n    .sideNavBar {\n        grid-area: 2 / 1 / 3 / 1;\n    }\n\n    .expandSideNavButton {\n        position: absolute;\n        top: 30px;\n        left: 30px;\n        background-image: url("+f+");\n        background-size: cover;\n        height: 40px;\n        width: 40px;\n        border: none;\n        background-color: var(--darkSlateGray);\n    }\n\n    button:hover {\n        background-color: black;\n    }\n\n    .expandSideNavButton:hover {\n        background-color: var(--darkSlateGray);\n    }\n\n    .taskWrapper {\n        grid-template-columns: 1fr 1fr;\n    }\n\n    .taskName {\n        grid-area: 1 / 1 / 2 / 3;\n    }\n\n    .dueDate {\n        grid-area: 2 / 1 / 3 / 2;\n    }\n\n    .taskImportance {\n        grid-area: 2 / 2 / 3 / 3;\n    }\n}",""]);const m=l},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(i[d]=!0)}for(var c=0;c<n.length;c++){var p=[].concat(n[c]);r&&i[p[0]]||(void 0!==o&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=o),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),a&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=a):p[4]="".concat(a)),e.push(p))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},i=[],s=0;s<n.length;s++){var d=n[s],c=r.base?d[0]+r.base:d[0],p=o[c]||0,l="".concat(c," ").concat(p);o[c]=p+1;var u=t(l),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=a(f,r);r.byIndex=s,e.splice(s,0,{identifier:l,updater:m,references:1})}i.push(l)}return i}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var o=r(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var s=t(o[i]);e[s].references--}for(var d=r(n,a),c=0;c<o.length;c++){var p=t(o[c]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}o=d}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},665:(n,e,t)=>{n.exports=t.p+"3ac88628c01d141957c0.ttf"},866:(n,e,t)=>{n.exports=t.p+"2d4061552fac064ed076.svg"}},e={};function t(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&!n;)n=r[a--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),a=t.n(r),o=t(569),i=t.n(o),s=t(565),d=t.n(s),c=t(216),p=t.n(c),l=t(589),u=t.n(l),f=t(426),m={};m.styleTagTransform=u(),m.setAttributes=d(),m.insert=i().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=p(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const g=(n,e,t,r)=>({taskName:n,description:e,dueDate:t,importance:r}),h=document.createElement("div");h.classList.add("pageHeader"),document.body.appendChild(h);const v=document.createElement("div");v.classList.add("sideNavBar"),document.body.appendChild(v);const x=document.createElement("div");x.classList.add("taskContainer"),document.body.appendChild(x),h.textContent="Taskmaster";const b=document.createElement("button");b.classList.add("sortButton"),b.textContent="Sort By: Priority",h.appendChild(b),b.addEventListener("click",(()=>{"Sort By: Priority"===b.textContent?b.textContent="Sort By: Due Date":b.textContent="Sort By: Priority"}));const y=document.createElement("button");if(y.classList.add("addTaskButton"),y.textContent="Add Task",h.appendChild(y),y.addEventListener("click",(()=>{(function(n){const e=document.querySelector(".taskContainer"),t=document.createElement("div");t.classList.add("taskWrapper");const r=document.createElement("span");r.textContent=n.taskName,r.classList.add("taskName"),t.appendChild(r);const a=document.createElement("span");a.textContent=n.dueDate,a.classList.add("dueDate"),t.appendChild(a);const o=document.createElement("span");o.textContent=n.importance,o.classList.add("taskImportance"),t.appendChild(o);const i=document.createElement("span");i.textContent=n.description,i.classList.add("taskDescription"),t.appendChild(i),e.appendChild(t)})(g("Complete Todo List","Finish TOP coding project","10/10/2023","High"))})),window.screen.width<=1024){const n=document.createElement("button");n.classList.add("expandSideNavButton"),h.appendChild(n),n.addEventListener("click",(()=>{document.body.classList.toggle("mobileMenu")}))}})()})();
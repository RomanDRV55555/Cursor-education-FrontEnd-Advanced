(()=>{"use strict";var t={159:(t,e,r)=>{r.d(e,{Z:()=>p});var n=r(933),o=r.n(n),i=r(476),s=r.n(i),a=r(678),c=r.n(a),u=new URL(r(197),r.b),l=s()(o()),f=c()(u);l.push([t.id,"html {\n    font-size: 17px;\n    font-family: 'Gloria Hallelujah', cursive;\n    background: url("+f+") bottom center;\n    background-size: cover;\n    color: blue;\n  }\n\n.keys {\n    display: flex;\n    flex: 1;\n    min-height: 100vh;\n    align-items: center;\n    justify-content: center;\n  }\n    \n.key {\n    color: blue;\n    margin: 1rem;\n    font-size: 1.5rem;\n    width: 10rem;\n  }\n",""]);const p=l},476:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r="",n=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),n&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=t(e),n&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(t,r,n,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var s={};if(n)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(s[c]=!0)}for(var u=0;u<t.length;u++){var l=[].concat(t[u]);n&&s[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},678:t=>{t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]|(%20)/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},933:t=>{t.exports=function(t){return t[1]}},892:t=>{var e=[];function r(t){for(var r=-1,n=0;n<e.length;n++)if(e[n].identifier===t){r=n;break}return r}function n(t,n){for(var i={},s=[],a=0;a<t.length;a++){var c=t[a],u=n.base?c[0]+n.base:c[0],l=i[u]||0,f="".concat(u," ").concat(l);i[u]=l+1;var p=r(f),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var h=o(m,n);n.byIndex=a,e.splice(a,0,{identifier:f,updater:h,references:1})}s.push(f)}return s}function o(t,e){var r=e.domAPI(e);return r.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;r.update(t=e)}else r.remove()}}t.exports=function(t,o){var i=n(t=t||[],o=o||{});return function(t){t=t||[];for(var s=0;s<i.length;s++){var a=r(i[s]);e[a].references--}for(var c=n(t,o),u=0;u<i.length;u++){var l=r(i[u]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=c}}},311:t=>{var e={};t.exports=function(t,r){var n=function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}(t);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},60:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},192:(t,e,r)=>{t.exports=function(t){var e=r.nc;e&&t.setAttribute("nonce",e)}},760:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(r){!function(t,e,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(n,t,e.options)}(e,t,r)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},865:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},197:(t,e,r)=>{t.exports=r.p+"696d479c44d44ff7fe6b.webp"}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={id:n,exports:{}};return t[n](i,i.exports,r),i.exports}r.m=t,r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;r.g.importScripts&&(t=r.g.location+"");var e=r.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=t})(),r.b=document.baseURI||self.location.href,r.nc=void 0,(()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,r){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var n=function(){function t(e,r,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.title=e,this.text=r,this.img=n,this.date=new Date}var r,n;return r=t,(n=[{key:"toString",value:function(){return"<h2> ".concat(this.title," </h2> \n        <p> ").concat(this.text,' </p>\n        <img src="').concat(this.img,'"> </img>\n        <p> ').concat(this.date.toJSON()," </p>")}}])&&e(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),t}(),o=r(892),i=r.n(o),s=r(760),a=r.n(s),c=r(311),u=r.n(c),l=r(192),f=r.n(l),p=r(60),m=r.n(p),h=r(865),d=r.n(h),v=r(159),g={};g.styleTagTransform=d(),g.setAttributes=f(),g.insert=u().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=m(),i()(v.Z,g),v.Z&&v.Z.locals&&v.Z.locals;const y=r.p+"953e304e0a44de5e0088af2c2d0406b3.png";let b="";const w=15.678,S=123.965,x=90.2345;b+=`Максимальна ціна ${Math.max(w,S,x)} <br/>`,b+=`Мінімальна ціна ${Math.min(w,S,x)} <br/>`,b+="Вартість всіх товарів 229.8775 <br/>",b+=`Вартість всіх товарів без копійок ${Math.floor(w)+Math.floor(S)+Math.floor(x)} <br/>`,b+=`Сума товарів округлена до сотень ${100*Math.round(2.298775)} <br/>`,b+=`Чи є сума всіх товарів (округлена в меншу сторону) парним ${Math.floor(229.8775)%2==0} <br/>`,b+="Решта 270.1225 <br/>",b+=`Середнє значення цін, округлене до другого знаку після коми  ${(229.8775/3).toFixed(2)} <br/>`;const M=Math.random();b+=`Випадкова знижка ${M} <br/>`;const k=(229.8775-229.8775*M).toFixed(2);function I(t=""){return t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()}b+=`Сума до сплати ${k} <br/>`,b+=`Прибуток дорівнює ${k-114.93875} <br/>`;let N=new class{constructor(t,e,r){this.university=t,this.course=e,this.fullName=r,this._marks=[5,4,4,5],this._active=!0}getInfo(){return`Студент ${this.course} курсу ${this.university}, ${this.fullName} `}get marks(){return this._active?this._marks:null}set marks(t){this._active&&this._marks.push(t)}getAverageMark(){return this._marks.reduce(((t,e)=>t+e),0)/(this._marks.length||1)}get active(){return this._active}set active(t){this._active=t}dismiss(){this.active=!1}recover(){this.active=!0}}("НАУ",1,"Петренко Петро Петрович");console.log(N.getInfo()),console.log(N.marks),N.marks=5,console.log(N.getAverageMark()),N.dismiss(),console.log(N.marks),N.recover(),console.log(N.marks);var T=document.getElementById("divPost"),$=[];$.push(new n(I("const from 001"),'Import const from "../../../Lesson001/JS/Lesson001_homework.js" sumToPay = '.concat(k))),$.push(new n(I("function from 002"),'Import functions from "../../../Lesson002/JS/script.js" validatedNM(5, 7) = '.concat(function(t,e){let r=!0,n="";return isNaN(5)&&(n+="N не є числом. ",r=!1),isNaN(7)&&(n+="M не є числом. ",r=!1),r||(n+=" Обробка даних неможлива",alert(n)),r}()))),$.push(new n(I("function from 003"),'Import formatName() from "../../../Lesson003/JS/script"')),$.push(new n(I("function from 004"),'Import getPairs() from "../../../Lesson004/JS/script" getPairs(["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"]) '.concat(function(t=[]){const e=t.filter((t=>!("а"===t[t.length-1]))),r=t.filter((t=>"а"===t[t.length-1])),n=[];for(let t=0;t<e.length;t++)n.push([e[t],r[t]]);return n}(["Олександр","Ігор","Олена","Іра","Олексій","Світлана"])))),$.push(new n(I("function from 005"),'Import getAverage() from "../../../Lesson005/JS/script" getAverage(4,5,6,2,34) '.concat(function(...t){return t.reduce(((t,e)=>(Number.isInteger(e)&&(t+=e),t)))/t.length}(4,5,6,2,34)))),$.push(new n(I("style from 010"),'Import css from "./../../Lesson010/styles/styles.css"',y)),$.push(new n(I("pictures from 012"),'Import picture from "../../../Lesson012/styles/img/na.png"',y)),$.forEach((function(t){var e=document.createElement("div");e.innerHTML=t.toString(),T.appendChild(e)}))})()})();
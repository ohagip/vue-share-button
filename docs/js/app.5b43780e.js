(function(t){function e(e){for(var a,i,u=e[0],c=e[1],s=e[2],h=0,p=[];h<u.length;h++)i=u[h],r[i]&&p.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,u=1;u<n.length;u++){var c=n[u];0!==r[c]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},o=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/vue-share-button/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var s=0;s<u.length;s++)e(u[s]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("64a9"),r=n.n(a);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("button",{directives:[{name:"share-button",rawName:"v-share-button",value:t.twitterShareData,expression:"twitterShareData"}],staticClass:"btn"},[t._v("Twitter")]),n("button",{directives:[{name:"share-button",rawName:"v-share-button",value:t.facebookShareData,expression:"facebookShareData"}],staticClass:"btn"},[t._v("Facebook")]),n("button",{directives:[{name:"share-button",rawName:"v-share-button",value:t.lineShareData,expression:"lineShareData"}],staticClass:"btn"},[t._v("LINE")])])},o=[],i={name:"app",data:function(){return{twitterShareData:{type:"twitter",url:"https://ohagip.github.io/vue-share-button/",text:"シェアボタンのカスタムディレクティブ",hash:""},facebookShareData:{type:"facebook",url:"https://ohagip.github.io/vue-share-button/"},lineShareData:{type:"line",url:"https://ohagip.github.io/vue-share-button/"}}}},u=i,c=(n("034f"),n("2877")),s=Object(c["a"])(u,r,o,!1,null,null,null),l=s.exports,h=n("7618"),p=n("d225");function f(t,e,n){var a=e||600,r=n||400,o=window.screen.width/2-a/2,i=window.screen.height/2-r/2;window.open(t,"shareWindow","scrollbars=yes, width=".concat(a,", height=").concat(r,", left=").concat(o,", top=").concat(i))}function b(t,e,n){var a=encodeURIComponent(e),r=encodeURIComponent(n),o="http://twitter.com/share?url=".concat(t,"&text=").concat(a,"&hashtags=").concat(r);f(o,500,355)}function v(t){var e="http://www.facebook.com/sharer.php?u=".concat(t);f(e,560,715)}function d(t){var e="https://social-plugins.line.me/lineit/share?url=".concat(t);f(e,510,510)}function w(){var t=this["__shareButton"];switch(t.type){case"twitter":b(t.url,t.text,t.hash);break;case"facebook":v(t.url);break;case"line":d(t.url);break}}var g=function t(){Object(p["a"])(this,t)};g.install=function(t){t.directive("share-button",{inserted:function(t,e,n){var a={onClickBtn:w.bind(n)};"object"===Object(h["a"])(e.value)&&(a.type=e.value.type,a.url=e.value.url,a.text=e.value.text,a.hash=e.value.hash),t.addEventListener("click",a.onClickBtn),n["__shareButton"]=a},unbind:function(t,e,n){var a=n["__shareButton"];t.removeEventListener("click",a.onClickBtn),delete n["__shareButton"]}})},a["a"].config.productionTip=!1,a["a"].use(g),new a["a"]({render:function(t){return t(l)}}).$mount("#app")},"64a9":function(t,e,n){}});
//# sourceMappingURL=app.5b43780e.js.map
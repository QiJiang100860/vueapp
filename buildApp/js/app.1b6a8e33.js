(function(e){function t(t){for(var r,u,a=t[0],c=t[1],l=t[2],s=0,f=[];s<a.length;s++)u=a[s],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&f.push(o[u][0]),o[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},i=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var p=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e623"),n("e379"),n("5dc8"),n("37e1");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("button",{on:{click:e.test}},[e._v("扫一扫")]),n("div",{staticStyle:{width:"300px",height:"300px",border:"1px solid red",margin:"10px auto"},attrs:{id:"scanContainer"}}),n("div",[e._v("二维码信息")]),e._v(" "+e._s(e.info)+" ")])},i=[],u={name:"App",components:{},data:function(){return{info:""}},methods:{test:function(){var e=this;e.$Plus((function(){alert("开始进入扫一扫业务");var t=window.plus,n=new t.barcode.Barcode("scanContainer");n.onmarked=function(t,r,o){alert("扫描成功"),e.info="type"+t+"<br/>code:"+r+"<br/>file:"+o,n.cancel(),n.close()},n.start()}))}}},a=u,c=n("2877"),l=Object(c["a"])(a,o,i,!1,null,null,null),p=l.exports,s=function(e){alert("进入监听"),window.plus?(alert("h5+已经准备好了",window.plus),setTimeout(e,0)):document.addEventListener("plusready",e,!1)},f=s;r["a"].config.productionTip=!1,r["a"].prototype.$Plus=f,new r["a"]({render:function(e){return e(p)}}).$mount("#app")}});
//# sourceMappingURL=app.1b6a8e33.js.map
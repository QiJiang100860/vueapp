(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e19c3"],{"7abe":function(n,t,o){"use strict";o.r(t);var c=function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("div",{attrs:{id:"app"}},[o("van-button",{attrs:{type:"primary"},on:{click:n.test}},[n._v("扫一扫")]),o("div",{staticStyle:{width:"300px",height:"300px",border:"1px solid red",margin:"10px auto"},attrs:{id:"scanContainer"}}),o("div",[n._v("二维码信fdsa息")]),n._v(" "+n._s(n.info)+" "),o("van-goods-action",[o("van-goods-action-icon",{attrs:{icon:"chat-o",text:"客服"},on:{click:n.onClickIcon}}),o("van-goods-action-icon",{attrs:{icon:"cart-o",text:"购物车"},on:{click:n.onClickIcon}}),o("van-goods-action-icon",{attrs:{icon:"shop-o",text:"店铺"},on:{click:n.onClickIcon}}),o("van-goods-action-button",{attrs:{type:"danger",text:"立即购买"},on:{click:n.onClickButton}})],1)],1)},i=[],a={name:"App",components:{},data:function(){return{info:""}},methods:{onClickIcon:function(){},onClickButton:function(){},test:function(){var n=this;n.$Plus((function(){alert("开始进入扫一扫业务");var t=window.plus,o=new t.barcode.Barcode("scanContainer");o.onmarked=function(t,c,i){alert("扫描成功"),n.info="type"+t+"<br/>code:"+c+"<br/>file:"+i,o.cancel(),o.close()},o.start()}))}}},e=a,r=o("2877"),s=Object(r["a"])(e,c,i,!1,null,null,null);t["default"]=s.exports}}]);
//# sourceMappingURL=chunk-2d0e19c3.859475a7.js.map
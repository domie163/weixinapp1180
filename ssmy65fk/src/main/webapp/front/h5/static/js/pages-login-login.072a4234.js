(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login"],{"0d8b":function(e,t,n){"use strict";var i=n("a1c1"),r=n.n(i);r.a},3285:function(e,t,n){"use strict";n.r(t);var i=n("6263"),r=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=r.a},6059:function(e,t,n){"use strict";var i,r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"box",style:{minHeight:"100vh",width:"100%",padding:"40rpx 80rpx 80rpx",background:"url(http://codegen.caihongy.cn/20221229/401a0c9f5ae64ab7bced56c475f40822.png) no-repeat center 20rpx / 100% auto,url(http://codegen.caihongy.cn/20221229/cd91288d91b74c7fbf67fdc76498bf17.gif) no-repeat left top / 100% auto,url(http://codegen.caihongy.cn/20221229/be9a592af083470ebaeeafa6f062e534.gif) no-repeat left bottom / 100% auto,url(http://codegen.caihongy.cn/20221229/08213aebbff04b32bf5598d70bf9ca93.gif) no-repeat center bottom / 100% auto",height:"100%"}},[n("v-uni-view",{style:{padding:"60rpx 0px",boxShadow:"0px 0px 0px #9595cf",borderColor:"#bbbbe1",borderRadius:"48rpx",background:"rgba(255,255,255,.8)",borderWidth:"0 0 0px",display:"block",width:"100%",borderStyle:"solid",height:"auto"}},[n("v-uni-image",{style:{width:"160rpx",margin:"0 auto",borderRadius:"8rpx",objectFit:"cover",display:"none",height:"auto"},attrs:{src:"http://codegen.caihongy.cn/20221227/731dc465845840d5899045d67b35f57a.png",mode:"aspectFill"}}),1==e.loginType?n("v-uni-view",{staticClass:"uni-form-item uni-column",style:{width:"100%",margin:"0 0 40rpx",borderRadius:"12rpx",background:"none",height:"auto"}},[n("v-uni-input",{staticClass:"uni-input",style:{padding:"0px 40rpx",boxShadow:"0px 0px 0px #2c77cb",margin:"0px",borderColor:"#eee",color:"#555",borderRadius:"0px",background:"none",borderWidth:"0 0 2rpx",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},attrs:{type:"text",name:"",placeholder:"请输入账号"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1):e._e(),1==e.loginType?n("v-uni-view",{staticClass:"uni-form-item uni-column",style:{width:"100%",margin:"0 0 40rpx",borderRadius:"12rpx",background:"none",height:"auto"}},[n("v-uni-input",{staticClass:"uni-input",style:{padding:"0px 40rpx",boxShadow:"0px 0px 0px #2c77cb",margin:"0px",borderColor:"#eee",color:"#555",borderRadius:"0px",background:"none",borderWidth:"0 0 2rpx",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},attrs:{type:"password",name:"",placeholder:"请输入密码"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1):e._e(),e.roleNum>1?n("v-uni-picker",{style:{boxShadow:"0px 0px 0px #2c77cb",margin:"0 0 48rpx 0",borderColor:"#eee",borderRadius:"16rpx",background:"none",borderWidth:"0 0 2rpx",width:"100%",borderStyle:"solid",height:"auto"},attrs:{value:e.index,range:e.options},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.optionsChange.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"uni-picker-type",style:{width:"100%",padding:"0 40rpx",lineHeight:"80rpx",fontSize:"28rpx",color:"#666"}},[e._v(e._s(e.options[e.index]))])],1):e._e(),1==e.loginType?n("v-uni-button",{staticClass:"btn-submit",style:{padding:"0px",boxShadow:"0px 0px 0px #82d1e8",margin:"80rpx auto 24rpx",borderColor:"#ef6d0d",color:"#fff",display:"block",borderRadius:"40rpx",background:"#2dca96",borderWidth:"0 0 0px",width:"80%",lineHeight:"80rpx",fontSize:"32rpx",borderStyle:"solid",height:"80rpx"},attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onLoginTap.apply(void 0,arguments)}}},[e._v("登录")]):e._e(),2==e.loginType?n("v-uni-button",{staticClass:"btn-submit",style:{padding:"0px",boxShadow:"0px 0px 0px #82d1e8",margin:"80rpx auto 24rpx",borderColor:"#ef6d0d",color:"#fff",display:"block",borderRadius:"40rpx",background:"#2dca96",borderWidth:"0 0 0px",width:"80%",lineHeight:"80rpx",fontSize:"32rpx",borderStyle:"solid",height:"80rpx"},attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onFaceLoginTap.apply(void 0,arguments)}}},[e._v("人脸识别登录")]):e._e(),n("v-uni-view",{staticClass:"links",style:{boxShadow:"0px 0px 0px #eee",padding:"0",margin:"0 auto",borderRadius:"0px",alignItems:"flex-start",flexWrap:"wrap",background:"none",display:"block",width:"96%",justifyContent:"center",height:"auto"}},[n("v-uni-view",{staticClass:"link-highlight",style:{border:"0px solid #fc7cad",padding:"16rpx 8rpx 0px",margin:"0px 8rpx 16rpx 0",color:"#555",borderRadius:"16rpx",textAlign:"left",background:"none",display:"inline-block",width:"auto",fontSize:"28rpx",order:"2"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onRegisterTap("xuesheng")}}},[e._v("注册学生")]),n("v-uni-view",{staticClass:"link-highlight",style:{border:"0px solid #fc7cad",padding:"16rpx 8rpx 0px",margin:"0px 8rpx 16rpx 0",color:"#555",borderRadius:"16rpx",textAlign:"left",background:"none",display:"inline-block",width:"auto",fontSize:"28rpx",order:"2"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onRegisterTap("jiaoshi")}}},[e._v("注册教师")])],1)],1)],1)],1)},o=[];n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}))},6263:function(e,t,n){"use strict";var i=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("96cf");var r=i(n("3b8d")),o=i(n("2971")),a={data:function(){return{username:"",password:"",loginType:1,codes:[{num:1,color:"#000",rotate:"10deg",size:"16px"},{num:2,color:"#000",rotate:"10deg",size:"16px"},{num:3,color:"#000",rotate:"10deg",size:"16px"},{num:4,color:"#000",rotate:"10deg",size:"16px"}],options:["请选择登录用户类型"],optionsValues:["","xuesheng","jiaoshi"],index:0,roleNum:0}},onLoad:function(){var e=["请选择登录用户类型"],t=o.default.list();this.menuList=t;for(var n=0;n<this.menuList.length;n++)"是"==this.menuList[n].hasFrontLogin&&(e.push(this.menuList[n].roleName),this.roleNum++);1==this.roleNum&&(this.index=1),this.options=e,this.styleChange()},methods:{styleChange:function(){this.$nextTick((function(){}))},onRegisterTap:function(e){uni.setStorageSync("loginTable",e),this.$utils.jump("../register/register")},onLoginTap:function(){var e=(0,r.default)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.username){e.next=3;break}return this.$utils.msg("请输入用户名"),e.abrupt("return");case 3:if(this.password){e.next=6;break}return this.$utils.msg("请输入用户密码"),e.abrupt("return");case 6:if(this.optionsValues[this.index]){e.next=9;break}return this.$utils.msg("请选择登录用户类型"),e.abrupt("return");case 9:return e.next=11,this.$api.login("".concat(this.optionsValues[this.index]),{username:this.username,password:this.password});case 11:return t=e.sent,uni.removeStorageSync("useridTag"),uni.setStorageSync("token",t.token),uni.setStorageSync("nickname",this.username),uni.setStorageSync("nowTable","".concat(this.optionsValues[this.index])),e.next=18,this.$api.session("".concat(this.optionsValues[this.index]));case 18:t=e.sent,t.data.touxiang?uni.setStorageSync("headportrait",t.data.touxiang):t.data.headportrait&&uni.setStorageSync("headportrait",t.data.headportrait),uni.setStorageSync("userid",t.data.id),t.data.vip&&uni.setStorageSync("vip",t.data.vip),uni.setStorageSync("role","".concat(this.options[this.index])),this.$utils.tab("../index/index");case 24:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),optionsChange:function(e){this.index=e.target.value}}};t.default=a},9776:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-d2c0a014]{min-height:calc(100vh - 44px);box-sizing:border-box}',""]),e.exports=t},a1c1:function(e,t,n){var i=n("9776");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var r=n("4f06").default;r("aa224c86",i,!0,{sourceMap:!1,shadowMode:!1})},a86a:function(e,t,n){"use strict";n.r(t);var i=n("6059"),r=n("3285");for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);n("0d8b");var a,s=n("f0c5"),d=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"d2c0a014",null,!1,i["a"],a);t["default"]=d.exports}}]);
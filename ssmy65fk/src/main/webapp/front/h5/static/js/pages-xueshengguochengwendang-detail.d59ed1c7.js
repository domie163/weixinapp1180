(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-xueshengguochengwendang-detail"],{"062f":function(t,e,i){"use strict";var r=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a481"),i("28a5"),i("f559"),i("55dd"),i("96cf");var n=r(i("3b8d")),a={data:function(){return{btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],id:"",userid:"",detail:{},swiperList:[],commentList:[],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:3,textNoMore:"~ 没有更多了 ~"},hasNext:!0,user:{},count:0,timer:null}},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var t=(0,n.default)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.id=e.id,e.userid&&(this.userid=e.userid),this.init();case 3:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),onUnload:function(){this.timer&&clearInterval(this.timer)},onShow:function(){var t=(0,n.default)(regeneratorRuntime.mark((function t(e){var i,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=uni.getStorageSync("nowTable"),t.next=3,this.$api.session(i);case 3:r=t.sent,this.user=r.data,this.btnColor=this.btnColor.sort((function(){return.5-Math.random()}));case 6:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),destroyed:function(){},methods:{onPayTap:function(){uni.setStorageSync("paytable","xueshengguochengwendang"),uni.setStorageSync("payObject",this.detail),this.$utils.jump("../pay-confirm/pay-confirm?type=1")},onDetailTap:function(t){uni.setStorageSync("useridTag",this.userid),this.$utils.jump("./detail?id=".concat(t.id,"&userid=")+this.userid)},onAcrossTap:function(t,e,i,r,n){if(uni.setStorageSync("crossTable","xueshengguochengwendang"),uni.setStorageSync("crossObj",this.detail),uni.setStorageSync("statusColumnName",i),uni.setStorageSync("statusColumnValue",n),uni.setStorageSync("tips",r),""!=i&&!i.startsWith("[")){var a=uni.getStorageSync("crossObj");for(var o in a)if(o==i&&a[o]==n)return void this.$utils.msg(r)}this.$utils.jump("../".concat(t,"/add-or-update?cross=true"))},init:function(){var t=(0,n.default)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.timer&&clearInterval(this.timer),t.next=3,this.$api.info("xueshengguochengwendang",this.id);case 3:e=t.sent,this.detail=e.data,this.swiperList=this.detail.guochengtupian?this.detail.guochengtupian.split(","):[],this.detail.guochengneirong=this.detail.guochengneirong.replace(/img src/gi,'img style="width:100%;" src');case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.hasNext=!0,t.resetUpScroll()},upCallback:function(){var t=(0,n.default)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.endSuccess(e.size,this.hasNext);case 1:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),onChatTap:function(){this.$utils.jump("../chat/chat")},download:function(t){var e=this;t=e.$base.url+t,uni.downloadFile({url:t,success:function(i){200===i.statusCode&&(e.$utils.msg("下载成功"),window.open(t))}})},onCartTabTap:function(){this.$utils.tab("../shop-cart/shop-cart")},onCommentTap:function(){var t=(0,n.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.$utils.jump("../discussxueshengguochengwendang/add-or-update?refid=".concat(this.id));case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),onSHTap:function(){this.$refs.popup.open()}}};e.default=a},"0950":function(t,e,i){var r=i("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-08799304]{min-height:calc(100vh - 44px);box-sizing:border-box}.seat-list[data-v-08799304]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;background:#fff;margin:%?20?%;border-radius:%?20?%;padding:%?20?%;font-size:%?30?%}.seat-list .seat-item[data-v-08799304]{width:33.33%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;margin-bottom:%?20?%}.seat-list .seat-item .seat-icon[data-v-08799304]{width:%?50?%;height:%?50?%;margin-bottom:%?10?%}uni-audio[data-v-08799304]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.audio[data-v-08799304] .uni-audio-default{width:inherit}',""]),t.exports=e},"6af7":function(t,e,i){var r=i("0950");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var n=i("4f06").default;n("b889b110",r,!0,{sourceMap:!1,shadowMode:!1})},"907f":function(t,e,i){"use strict";var r={"mescroll-uni":i("f05e").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("mescroll-uni",{attrs:{up:t.upOption,down:t.downOption},on:{init:function(e){arguments[0]=e=t.$handleEvent(e),t.mescrollInit.apply(void 0,arguments)},down:function(e){arguments[0]=e=t.$handleEvent(e),t.downCallback.apply(void 0,arguments)},up:function(e){arguments[0]=e=t.$handleEvent(e),t.upCallback.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"container",style:{minHeight:"100vh",width:"100%",padding:"60rpx 0 160rpx",position:"relative",background:"url(http://codegen.caihongy.cn/20221229/cd91288d91b74c7fbf67fdc76498bf17.gif) no-repeat left top / 100% auto,url(http://codegen.caihongy.cn/20221229/be9a592af083470ebaeeafa6f062e534.gif) no-repeat left bottom / 100% auto,url(http://codegen.caihongy.cn/20221229/401a0c9f5ae64ab7bced56c475f40822.png) no-repeat center top / 100% auto,url(http://codegen.caihongy.cn/20221229/35df15480d2d4680b0171ef8190b3774.png) no-repeat center bottom / 100% auto,linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(65,201,154,1) 100%),#fff",height:"auto"}},[i("v-uni-swiper",{staticClass:"swiper",style:{padding:"0px ",margin:"0px auto",borderColor:"#FEB7D2",borderRadius:"40rpx",background:"rgba(255,255,255,1)",borderWidth:"0px",width:"calc(100% - 60rpx)",borderStyle:"dotted",height:"360rpx"},attrs:{"indicator-dots":!1,autoplay:!0,circular:!1,"indicator-active-color":"#000000","indicator-color":"rgba(0, 0, 0, .3)",duration:500,interval:5e3,vertical:!1}},t._l(t.swiperList,(function(e,r){return i("v-uni-swiper-item",{key:r,style:{width:"100%",borderRadius:"40rpx",background:"none",height:"360rpx"}},["http"==e.substring(0,4)?i("v-uni-image",{style:{width:"calc(100% - 0px)",margin:"0 auto",objectFit:"cover",borderRadius:"40rpx",display:"block",height:"360rpx"},attrs:{mode:"aspectFill",src:e}}):i("v-uni-image",{style:{width:"calc(100% - 0px)",margin:"0 auto",objectFit:"cover",borderRadius:"40rpx",display:"block",height:"360rpx"},attrs:{mode:"aspectFill",src:t.baseUrl+e}})],1)})),1),i("v-uni-view",{staticClass:"detail-content",style:{padding:"0px 20rpx 24rpx",flexWrap:"wrap",background:"url() no-repeat center bottom / 100% auto",display:"flex",width:"100%",justifyContent:"space-between",height:"auto"}},[i("v-uni-view",{staticClass:"detail-list-item title",style:{boxShadow:"0px 0px 2rpx #bbb,inset 0px 0px 0px 0px #eee",padding:"16rpx 40rpx 16rpx",margin:"20rpx 0 20rpx 0",borderColor:"#c8c8ef",borderRadius:"24rpx",flexWrap:"wrap",borderWidth:"0px 0px 0px 0px",background:"rgba(255,255,255,.9)",display:"flex",width:"100%",borderStyle:"dotted dashed solid",height:"auto"}},[i("v-uni-view",{staticClass:"lable",style:{width:"100%",padding:"0 20rpx 0 0",lineHeight:"48rpx",fontSize:"28rpx",color:"#333",textAlign:"left"}},[t._v("学生姓名：")]),i("v-uni-view",{staticClass:"text",style:{width:"100%",padding:"0px 20rpx 20rpx 0",margin:"0px 0 0",lineHeight:"48rpx",fontSize:"28rpx",color:"#555"}},[t._v(t._s(t.detail.xueshengxingming))])],1),i("v-uni-view",{staticClass:"detail-list-item title",style:{boxShadow:"0px 0px 2rpx #bbb,inset 0px 0px 0px 0px #eee",padding:"16rpx 40rpx 16rpx",margin:"20rpx 0 20rpx 0",borderColor:"#c8c8ef",borderRadius:"24rpx",flexWrap:"wrap",borderWidth:"0px 0px 0px 0px",background:"rgba(255,255,255,.9)",display:"flex",width:"100%",borderStyle:"dotted dashed solid",height:"auto"}},[i("v-uni-view",{staticClass:"lable",style:{width:"100%",padding:"0 20rpx 0 0",lineHeight:"48rpx",fontSize:"28rpx",color:"#333",textAlign:"left"}},[t._v("过程标题：")]),i("v-uni-view",{staticClass:"text",style:{width:"100%",padding:"0px 20rpx 20rpx 0",margin:"0px 0 0",lineHeight:"48rpx",fontSize:"28rpx",color:"#555"}},[t._v(t._s(t.detail.guochengbiaoti))])],1),i("v-uni-view",{staticClass:"detail-list-item title",style:{boxShadow:"0px 0px 2rpx #bbb,inset 0px 0px 0px 0px #eee",padding:"16rpx 40rpx 16rpx",margin:"20rpx 0 20rpx 0",borderColor:"#c8c8ef",borderRadius:"24rpx",flexWrap:"wrap",borderWidth:"0px 0px 0px 0px",background:"rgba(255,255,255,.9)",display:"flex",width:"100%",borderStyle:"dotted dashed solid",height:"auto"}},[i("v-uni-view",{staticClass:"lable",style:{width:"100%",padding:"0 20rpx 0 0",lineHeight:"48rpx",fontSize:"28rpx",color:"#333",textAlign:"left"}},[t._v("添加时间：")]),i("v-uni-view",{staticClass:"text",style:{width:"100%",padding:"0px 20rpx 20rpx 0",margin:"0px 0 0",lineHeight:"48rpx",fontSize:"28rpx",color:"#555"}},[t._v(t._s(t.detail.tianjiashijian))])],1),i("v-uni-view",{staticClass:"detail-list-item",style:{boxShadow:"0px 0px 2rpx #bbb,inset 0px 0px 0px 0px #eee",padding:"16rpx 40rpx 16rpx",margin:"20rpx 0 20rpx 0",borderColor:"#c8c8ef",borderRadius:"24rpx",flexWrap:"wrap",borderWidth:"0px 0px 0px 0px",background:"rgba(255,255,255,.9)",display:"flex",width:"100%",borderStyle:"dotted dashed solid",height:"auto"}},[i("v-uni-view",{staticClass:"lable",style:{width:"100%",padding:"0 20rpx 0 0",lineHeight:"48rpx",fontSize:"28rpx",color:"#333",textAlign:"left"}},[t._v("学号：")]),i("v-uni-view",{staticClass:"text",style:{width:"100%",padding:"0px 20rpx 20rpx 0",margin:"0px 0 0",lineHeight:"48rpx",fontSize:"28rpx",color:"#555"}},[t._v(t._s(t.detail.xuehao))])],1),i("v-uni-view",{staticClass:"detail-list-item",style:{boxShadow:"0px 0px 2rpx #bbb,inset 0px 0px 0px 0px #eee",padding:"16rpx 40rpx 16rpx",margin:"20rpx 0 20rpx 0",borderColor:"#c8c8ef",borderRadius:"24rpx",flexWrap:"wrap",borderWidth:"0px 0px 0px 0px",background:"rgba(255,255,255,.9)",display:"flex",width:"100%",borderStyle:"dotted dashed solid",height:"auto"}},[i("v-uni-view",{staticClass:"lable",style:{width:"100%",padding:"0 20rpx 0 0",lineHeight:"48rpx",fontSize:"28rpx",color:"#333",textAlign:"left"}},[t._v("院系：")]),i("v-uni-view",{staticClass:"text",style:{width:"100%",padding:"0px 20rpx 20rpx 0",margin:"0px 0 0",lineHeight:"48rpx",fontSize:"28rpx",color:"#555"}},[t._v(t._s(t.detail.yuanxi))])],1),i("v-uni-view",{staticClass:"detail-list-item rich",style:{boxShadow:"0px 0px 2rpx #bbb,inset 0px 0px 0px 0px #eee",padding:"24rpx 24rpx 64rpx",margin:"0 0 24rpx 0",borderColor:"#c8c8ef",borderRadius:"24rpx",flexWrap:"wrap",borderWidth:"0px 0px 0px 0px",background:"rgba(255,255,255,.9)",display:"flex",width:"100%",borderStyle:"dotted dashed solid",height:"auto"}},[i("v-uni-view",{staticClass:"lable",style:{width:"100%",padding:"0 20rpx 0 0",lineHeight:"48rpx",fontSize:"28rpx",color:"#333",textAlign:"left"}},[t._v("过程内容")]),i("v-uni-view",{staticClass:"rich-text",style:{minHeight:"240rpx",border:"0px solid #f7de91",padding:"0 20rpx 0 0",boxShadow:"0 0px 0px rgba(182,158,18,.4),inset 0px 0px 0px 0px #fcf6d6",margin:"0",borderRadius:"8rpx",color:"#555",background:"none",width:"100%",lineHeight:"48rpx",textIndent:"2em"}},[i("v-uni-rich-text",{attrs:{nodes:t.detail.guochengneirong}})],1)],1),i("v-uni-view",{staticClass:"bottom-content bg-white tabbar border shop",style:{width:"100%",padding:"20rpx 0px",flexWrap:"wrap",background:"none",display:"flex",height:"auto"}})],1)],1)],1)],1)],1)},a=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return r}))},c741:function(t,e,i){"use strict";i.r(e);var r=i("907f"),n=i("ef44");for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("f3ee");var o,s=i("f0c5"),p=Object(s["a"])(n["default"],r["b"],r["c"],!1,null,"08799304",null,!1,r["a"],o);e["default"]=p.exports},ef44:function(t,e,i){"use strict";i.r(e);var r=i("062f"),n=i.n(r);for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);e["default"]=n.a},f3ee:function(t,e,i){"use strict";var r=i("6af7"),n=i.n(r);n.a}}]);
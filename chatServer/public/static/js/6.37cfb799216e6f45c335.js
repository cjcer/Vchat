webpackJsonp([6],{"5Esa":function(t,a){},XHoB:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("gyMJ"),s={name:"mySetting",data:function(){return{setingList:[{name:"个人资料",link:"/mySetting/means",class:"icon-gerenziliao3"},{name:"主题设置",link:"/mySetting/theme",class:"icon-zhuti"},{name:"聊天壁纸",link:"/mySetting/wallpaper",class:"icon-huanbeijing"},{name:"聊天气泡",link:"/mySetting/bubble",class:"icon-yuyin"}]}},computed:{avatar:function(){return""+this.$store.state.user.photo}},methods:{loginOut:function(){var t=this;n.a.loginOut().then(function(a){0===a.code&&(t.$message.success("退出成功"),t.$store.commit("setUser","out"),t.$router.replace("/"))})}},mounted:function(){}},i={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"vchat-mySetting"},[e("div",{staticClass:"vchat-mySetting-header"},[e("router-link",{attrs:{to:"/personalMain"}},[t._v("vchat")]),t._v(" "),e("div",{staticClass:"avatar"},[e("a",{attrs:{href:"javascipt:;"}},[e("img",{attrs:{src:t.avatar,alt:""}})]),t._v(" "),e("span",{staticClass:"logout",on:{click:t.loginOut}},[t._v("[退出]")])])],1),t._v(" "),e("div",{staticClass:"vchat-mySetting-container vchat-flexBetween"},[e("ul",{staticClass:"vchat-setingList"},t._l(t.setingList,function(a,n){return e("li",{key:n,class:{active:t.$route.path===a.link}},[e("router-link",{attrs:{to:a.link}},[e("i",{staticClass:"iconfont",class:[a.class?a.class:""]}),t._v(" "),e("span",[t._v(t._s(a.name))])])],1)})),t._v(" "),e("div",{staticClass:"vchat-seting-container"},[e("router-view")],1)])])},staticRenderFns:[]};var c=e("C7Lr")(s,i,!1,function(t){e("5Esa")},"data-v-78e28a15",null);a.default=c.exports}});
(window.webpackJsonp=window.webpackJsonp||[]).push([[18,9],{434:function(t,e,r){var content=r(444);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("4fb8bb7a",content,!0,{sourceMap:!1})},436:function(t,e,r){"use strict";r(10),r(3),r(9),r(67),r(30),r(291),r(224),r(73),r(80);var n=r(0);var o,c=r(75);e.a=(o="container",n.a.extend({name:"v-".concat(o),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var r=e.props,data=e.data,n=e.children;data.staticClass="".concat(o," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var l=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,data,n)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var r,n=e.props,data=e.data,o=e.children,l=data.attrs;return l&&(data.attrs={},r=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,Object(c.a)(data,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(r||[])}),o)}})},443:function(t,e,r){"use strict";r(434)},444:function(t,e,r){var n=r(20)(!1);n.push([t.i,".img-rap[data-v-ff0bf662]{overflow:hidden;position:relative;height:40vh;text-align:center}.img-rap img[data-v-ff0bf662]{vertical-align:middle;border-style:none;height:100%;width:100%}.img-rap .ttime-description[data-v-ff0bf662]{margin:0;position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%);color:#fff}",""]),t.exports=n},445:function(t,e,r){"use strict";r.r(e);r(443);var n=r(66),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"img-rap"},[r("img",{staticClass:"ttime-header",attrs:{alt:"Ttime Header",src:"/header.jpeg"}}),t._v(" "),r("v-text",{staticClass:"\n      ttime-description\n      text-xs-h5 text-sm-h4 text-md-h3 text-lg-h2 text-xl-h2\n    "},[t._v("\n    Web Posts\n  ")])],1)}),[],!1,null,"ff0bf662",null);e.default=component.exports},486:function(t,e,r){"use strict";r.r(e);var n=r(19),o=(r(74),{components:{TtimeImageHeader:r(445).default},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,e.next=3,r("web-posts").fetch();case 3:return n=e.sent,e.abrupt("return",{posts:n});case 5:case"end":return e.stop()}}),e)})))()}}),c=r(66),l=r(81),d=r.n(l),f=r(217),v=r(427),m=r(436),h=r(220),_=r(429),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("ttime-image-header"),t._v(" "),r("v-main",[r("v-container",[r("v-card",{attrs:{height:"80vh",flat:""}},[r("v-row",{attrs:{align:"center"}},[r("v-col",{attrs:{cols:"12",sm:"8",md:"6"}},[r("h1",[t._v(t._s(t.$t("MENU_LIST.WEB_POSTS")))]),t._v(" "),r("ul",t._l(t.posts,(function(e){return r("li",{key:e.slug},[r("nuxt-link",{attrs:{to:"web-posts/"+e.slug}},[t._v("\n                  "+t._s(e.title)+"\n                ")]),t._v(" "),r("p",[t._v(t._s(e.updatedAt))])],1)})),0)])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VCard:f.a,VCol:v.a,VContainer:m.a,VMain:h.a,VRow:_.a})}}]);
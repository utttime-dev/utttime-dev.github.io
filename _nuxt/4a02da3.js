(window.webpackJsonp=window.webpackJsonp||[]).push([[8,2],{433:function(t,e,r){var content=r(436);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("38e05380",content,!0,{sourceMap:!1})},434:function(t,e,r){"use strict";r.r(e);var n=r(0).a.extend({props:["title","img_src"]}),o=(r(435),r(67)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"img-rap content"},[r("img",{staticClass:"ttime-header",attrs:{alt:"Ttime Header",src:t.img_src}}),t._v(" "),r("v-text",{staticClass:"\n      ttime-description\n      text-xs-h5 text-sm-h4 text-md-h3 text-lg-h2 text-xl-h2\n    "},[t._v("\n    "+t._s(t.title)+"\n  ")])],1)}),[],!1,null,"e0024f76",null);e.default=component.exports},435:function(t,e,r){"use strict";r(433)},436:function(t,e,r){var n=r(20)(!1);n.push([t.i,".img-rap.home[data-v-e0024f76]{height:70vh}.img-rap.home img[data-v-e0024f76]{vertical-align:middle;border-style:none;height:100%;width:auto}.img-rap.home .mdi-chevron-down[data-v-e0024f76]{margin:0;position:absolute;top:80%;left:50%;transform:translateY(-50%) translateX(-50%)}.img-rap.content[data-v-e0024f76]{height:20vh}.img-rap.content img[data-v-e0024f76]{vertical-align:middle;border-style:none;height:auto;width:100%}.img-rap[data-v-e0024f76]{overflow:hidden;position:relative;text-align:center}.img-rap .ttime-description[data-v-e0024f76]{margin:0;position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%);color:#fff}",""]),t.exports=n},437:function(t,e,r){"use strict";r(10),r(3),r(9),r(66),r(30),r(290),r(223),r(73),r(80);var n=r(0);var o,l=r(75);e.a=(o="container",n.a.extend({name:"v-".concat(o),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var r=e.props,data=e.data,n=e.children;data.staticClass="".concat(o," ").concat(data.staticClass||"").trim();var l=data.attrs;if(l){data.attrs={};var c=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));c.length&&(data.staticClass+=" ".concat(c.join(" ")))}return r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,data,n)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var r,n=e.props,data=e.data,o=e.children,c=data.attrs;return c&&(data.attrs={},r=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,Object(l.a)(data,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(r||[])}),o)}})},460:function(t,e,r){"use strict";r.r(e);var n={components:{ImageHeader:r(434).default}},o=r(67),l=r(81),c=r.n(l),d=r(217),f=r(426),m=r(437),v=r(429),h=r(428),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("image-header",{attrs:{title:"Contacts",img_src:"/header.jpeg"}}),t._v(" "),r("v-main",[r("v-container",[r("v-card",{attrs:{height:"80vh",flat:""}},[r("v-row",{attrs:{align:"center"}},[r("v-col",{attrs:{cols:"12",sm:"8",md:"6"}},[r("h1",[t._v(t._s(t.$t("MENU_LIST.CONTACTS")))])])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{ImageHeader:r(434).default}),c()(component,{VCard:d.a,VCol:f.a,VContainer:m.a,VMain:v.a,VRow:h.a})}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[14,5],{436:function(t,e,r){"use strict";r(10),r(3),r(9),r(67),r(30),r(291),r(224),r(73),r(80);var n=r(0);var o,c=r(75);e.a=(o="container",n.a.extend({name:"v-".concat(o),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var r=e.props,data=e.data,n=e.children;data.staticClass="".concat(o," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var l=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,data,n)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var r,n=e.props,data=e.data,o=e.children,l=data.attrs;return l&&(data.attrs={},r=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,Object(c.a)(data,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(r||[])}),o)}})},439:function(t,e,r){var content=r(451);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("5dbf2ede",content,!0,{sourceMap:!1})},450:function(t,e,r){"use strict";r(439)},451:function(t,e,r){var n=r(20)(!1);n.push([t.i,".img-rap[data-v-20b8c683]{overflow:hidden;position:relative;height:40vh;text-align:center}.img-rap img[data-v-20b8c683]{vertical-align:middle;border-style:none;height:100%;width:100%}.img-rap .ttime-description[data-v-20b8c683]{margin:0;position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%);color:#fff}",""]),t.exports=n},462:function(t,e,r){"use strict";r.r(e);r(450);var n=r(66),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"img-rap"},[r("img",{staticClass:"ttime-header",attrs:{alt:"Ttime Header",src:"/header.jpeg"}}),t._v(" "),r("v-text",{staticClass:"\n      ttime-description\n      text-xs-h5 text-sm-h4 text-md-h3 text-lg-h2 text-xl-h2\n    "},[t._v("\n    Contacts\n  ")])],1)}),[],!1,null,"20b8c683",null);e.default=component.exports},482:function(t,e,r){"use strict";r.r(e);var n={components:{TtimeImageHeader:r(462).default}},o=r(66),c=r(81),l=r.n(c),d=r(217),f=r(427),v=r(436),m=r(220),h=r(429),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("ttime-image-header"),t._v(" "),r("v-main",[r("v-container",[r("v-card",{attrs:{height:"80vh",flat:""}},[r("v-row",{attrs:{align:"center"}},[r("v-col",{attrs:{cols:"12",sm:"8",md:"6"}},[r("h1",[t._v(t._s(t.$t("MENU_LIST.CONTACTS")))])])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCard:d.a,VCol:f.a,VContainer:v.a,VMain:m.a,VRow:h.a})}}]);
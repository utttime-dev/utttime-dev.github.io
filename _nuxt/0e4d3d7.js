(window.webpackJsonp=window.webpackJsonp||[]).push([[12,3],{437:function(t,e,r){var content=r(440);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("9165b5c0",content,!0,{sourceMap:!1})},438:function(t,e,r){"use strict";r.r(e);var n=r(0).a.extend({props:["title","img_src"]}),o=(r(439),r(66)),c=r(79),d=r.n(c),l=r(168),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"img-rap"},[r("v-img",{staticClass:"ttime-header",attrs:{alt:"Ttime Header",src:t.img_src}}),t._v(" "),r("div",{staticClass:"\n      ttime-description\n      text-xs-h5 text-sm-h4 text-md-h3\n      font-weight-light\n    "},[t._v("\n    "+t._s(t.title)+"\n  ")])],1)}),[],!1,null,"8c035d56",null);e.default=component.exports;d()(component,{VImg:l.a})},439:function(t,e,r){"use strict";r(437)},440:function(t,e,r){var n=r(19)(!1);n.push([t.i,'.img-rap[data-v-8c035d56]{height:20vh;width:100%;overflow:hidden;position:relative;text-align:center}.img-rap .ttime-header[data-v-8c035d56]{vertical-align:middle;border-style:none;height:100%;width:100%;-o-object-fit:cover;object-fit:cover}.img-rap .ttime-description[data-v-8c035d56]{margin:0;position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%);color:#fff;white-space:nowrap}.img-rap .ttime-description[data-v-8c035d56]:before{float:right}.img-rap .ttime-description[data-v-8c035d56]:after,.img-rap .ttime-description[data-v-8c035d56]:before{content:"";display:block;width:60%;height:2px;position:relative;background-color:#fff}.img-rap .ttime-description[data-v-8c035d56]:after{float:left}',""]),t.exports=n},442:function(t,e,r){"use strict";r(10),r(3),r(9),r(67),r(30),r(292),r(224),r(73),r(80);var n=r(0);var o,c=r(75);e.a=(o="container",n.a.extend({name:"v-".concat(o),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var r=e.props,data=e.data,n=e.children;data.staticClass="".concat(o," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var d=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));d.length&&(data.staticClass+=" ".concat(d.join(" ")))}return r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,data,n)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var r,n=e.props,data=e.data,o=e.children,d=data.attrs;return d&&(data.attrs={},r=Object.keys(d).filter((function(t){if("slot"===t)return!1;var e=d[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,Object(c.a)(data,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(r||[])}),o)}})},476:function(t,e,r){"use strict";r.r(e);var n={components:{ImageHeader:r(438).default}},o=r(66),c=r(79),d=r.n(c),l=r(218),f=r(430),v=r(442),m=r(433),h=r(432),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("image-header",{attrs:{title:"News",img_src:"/header.jpeg"}}),t._v(" "),r("v-main",[r("v-container",[r("v-card",{attrs:{height:"80vh",flat:""}},[r("v-row",{attrs:{align:"center"}},[r("v-col",{attrs:{cols:"12",sm:"8",md:"6"}},[r("h1",[t._v(t._s(t.$t("MENU_LIST.NEWS")))])])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{ImageHeader:r(438).default}),d()(component,{VCard:l.a,VCol:f.a,VContainer:v.a,VMain:m.a,VRow:h.a})}}]);
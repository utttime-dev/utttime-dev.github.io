(window.webpackJsonp=window.webpackJsonp||[]).push([[8,2],{436:function(t,e,r){var content=r(439);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("3ec0dd2e",content,!0,{sourceMap:!1})},437:function(t,e,r){"use strict";r.r(e);var n=r(0).a.extend({props:["title","img_src"]}),o=(r(438),r(67)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"img-rap"},[r("img",{staticClass:"ttime-header",attrs:{alt:"Ttime Header",src:t.img_src}}),t._v(" "),r("v-text",{staticClass:"\n      ttime-description\n      text-xs-h5 text-sm-h4 text-md-h3 text-lg-h2 text-xl-h2\n    "},[t._v("\n    "+t._s(t.title)+"\n  ")])],1)}),[],!1,null,"c152b47a",null);e.default=component.exports},438:function(t,e,r){"use strict";r(436)},439:function(t,e,r){var n=r(19)(!1);n.push([t.i,'.img-rap[data-v-c152b47a]{height:20vh;overflow:hidden;position:relative;text-align:center}.img-rap img[data-v-c152b47a]{vertical-align:middle;border-style:none;-o-object-fit:cover;object-fit:cover}.img-rap .ttime-description[data-v-c152b47a]{margin:0;position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%);color:#fff;white-space:nowrap}.img-rap .ttime-description[data-v-c152b47a]:before{float:right}.img-rap .ttime-description[data-v-c152b47a]:after,.img-rap .ttime-description[data-v-c152b47a]:before{content:"";display:block;width:60%;height:2px;position:relative;background-color:#fff}.img-rap .ttime-description[data-v-c152b47a]:after{float:left}',""]),t.exports=n},440:function(t,e,r){"use strict";r(10),r(3),r(9),r(66),r(30),r(291),r(223),r(73),r(80);var n=r(0);var o,c=r(75);e.a=(o="container",n.a.extend({name:"v-".concat(o),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var r=e.props,data=e.data,n=e.children;data.staticClass="".concat(o," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var l=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,data,n)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var r,n=e.props,data=e.data,o=e.children,l=data.attrs;return l&&(data.attrs={},r=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,Object(c.a)(data,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(r||[])}),o)}})},463:function(t,e,r){"use strict";r.r(e);var n={components:{ImageHeader:r(437).default}},o=r(67),c=r(81),l=r.n(c),d=r(217),f=r(429),v=r(440),m=r(432),h=r(431),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("image-header",{attrs:{title:"Contacts",img_src:"/header.jpeg"}}),t._v(" "),r("v-main",[r("v-container",[r("v-card",{attrs:{height:"80vh",flat:""}},[r("v-row",{attrs:{align:"center"}},[r("v-col",{attrs:{cols:"12",sm:"8",md:"6"}},[r("h1",[t._v(t._s(t.$t("MENU_LIST.CONTACTS")))])])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{ImageHeader:r(437).default}),l()(component,{VCard:d.a,VCol:f.a,VContainer:v.a,VMain:m.a,VRow:h.a})}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[7,2],{437:function(t,e,r){var content=r(440);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("1c194d2e",content,!0,{sourceMap:!1})},438:function(t,e,r){"use strict";r.r(e);var n=r(0).a.extend({props:["title","img_src"]}),o=(r(439),r(67)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"img-rap"},[r("img",{staticClass:"ttime-header",attrs:{alt:"Ttime Header",src:t.img_src}}),t._v(" "),r("v-text",{staticClass:"\n      ttime-description\n      text-xs-h5 text-sm-h4 text-md-h3 text-lg-h3 text-xl-h2\n      font-weight-light\n    "},[t._v("\n    "+t._s(t.title)+"\n  ")])],1)}),[],!1,null,"089478ad",null);e.default=component.exports},439:function(t,e,r){"use strict";r(437)},440:function(t,e,r){var n=r(19)(!1);n.push([t.i,'.img-rap[data-v-089478ad]{overflow:hidden;position:relative;text-align:center}.img-rap[data-v-089478ad],.img-rap img[data-v-089478ad]{height:20vh;width:100%}.img-rap img[data-v-089478ad]{vertical-align:middle;border-style:none;-o-object-fit:cover;object-fit:cover}.img-rap .ttime-description[data-v-089478ad]{margin:0;position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%);color:#fff;white-space:nowrap}.img-rap .ttime-description[data-v-089478ad]:before{float:right}.img-rap .ttime-description[data-v-089478ad]:after,.img-rap .ttime-description[data-v-089478ad]:before{content:"";display:block;width:60%;height:2px;position:relative;background-color:#fff}.img-rap .ttime-description[data-v-089478ad]:after{float:left}',""]),t.exports=n},441:function(t,e,r){"use strict";r(10),r(3),r(9),r(66),r(30),r(292),r(224),r(73),r(79);var n=r(0);var o,d=r(75);e.a=(o="container",n.a.extend({name:"v-".concat(o),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var r=e.props,data=e.data,n=e.children;data.staticClass="".concat(o," ").concat(data.staticClass||"").trim();var d=data.attrs;if(d){data.attrs={};var c=Object.keys(d).filter((function(t){if("slot"===t)return!1;var e=d[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));c.length&&(data.staticClass+=" ".concat(c.join(" ")))}return r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,data,n)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var r,n=e.props,data=e.data,o=e.children,c=data.attrs;return c&&(data.attrs={},r=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,Object(d.a)(data,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(r||[])}),o)}})},463:function(t,e,r){"use strict";r.r(e);var n={components:{ImageHeader:r(438).default}},o=r(67),d=r(80),c=r.n(d),l=r(218),f=r(430),m=r(441),v=r(433),h=r(432),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("image-header",{attrs:{title:"Back Numbers",img_src:"/header.jpeg"}}),t._v(" "),r("v-main",[r("v-container",[r("v-card",{attrs:{height:"80vh",flat:""}},[r("v-row",{attrs:{align:"center"}},[r("v-col",{attrs:{cols:"12",sm:"8",md:"6"}},[r("h1",[t._v(t._s(t.$t("MENU_LIST.BACK_NUMBERS")))])])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{ImageHeader:r(438).default}),c()(component,{VCard:l.a,VCol:f.a,VContainer:m.a,VMain:v.a,VRow:h.a})}}]);
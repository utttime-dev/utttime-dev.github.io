(window.webpackJsonp=window.webpackJsonp||[]).push([[12,3],{378:function(t,e,n){var content=n(379);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("424d9537",content,!0,{sourceMap:!1})},379:function(t,e,n){var r=n(16)(!1);r.push([t.i,".v-main{display:flex;flex:1 0 auto;max-width:100%;transition:.2s cubic-bezier(.4,0,.2,1)}.v-main:not([data-booted=true]){transition:none!important}.v-main__wrap{flex:1 1 auto;max-width:100%;position:relative}@-moz-document url-prefix(){@media print{.v-main{display:block}}}",""]),t.exports=r},380:function(t,e,n){var content=n(385);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("51c8c18c",content,!0,{sourceMap:!1})},382:function(t,e,n){"use strict";n(378);var r=n(90);e.a=r.a.extend({name:"v-main",props:{tag:{type:String,default:"main"}},computed:{styles:function(){var t=this.$vuetify.application,e=t.bar,n=t.top,r=t.right,footer=t.footer,o=t.insetFooter,c=t.bottom,l=t.left;return{paddingTop:"".concat(n+e,"px"),paddingRight:"".concat(r,"px"),paddingBottom:"".concat(footer+o+c,"px"),paddingLeft:"".concat(l,"px")}}},render:function(t){var data={staticClass:"v-main",style:this.styles,ref:"main"};return t(this.tag,data,[t("div",{staticClass:"v-main__wrap"},this.$slots.default)])}})},383:function(t,e,n){"use strict";n(7),n(8),n(68),n(29),n(253),n(198),n(74),n(82);var r=n(0);var o,c=n(69);e.a=(o="container",r.a.extend({name:"v-".concat(o),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var n=e.props,data=e.data,r=e.children;data.staticClass="".concat(o," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var l=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,data,r)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var n,r=e.props,data=e.data,o=e.children,l=data.attrs;return l&&(data.attrs={},n=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,Object(c.a)(data,{staticClass:"container",class:Array({"container--fluid":r.fluid}).concat(n||[])}),o)}})},384:function(t,e,n){"use strict";n(380)},385:function(t,e,n){var r=n(16)(!1);r.push([t.i,".img-rap[data-v-1f858b40]{overflow:hidden;position:relative;height:40vh;text-align:center}.img-rap img[data-v-1f858b40]{vertical-align:middle;border-style:none}.img-rap .ttime-description[data-v-1f858b40]{margin:0;position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%);color:#fff}",""]),t.exports=r},391:function(t,e,n){"use strict";n.r(e);n(384);var r=n(62),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"img-rap"},[n("img",{staticClass:"ttime-header",attrs:{alt:"Ttime Header",src:"/header.jpeg"}}),t._v(" "),n("v-text",{staticClass:"\n      ttime-description\n      text-xs-h5 text-sm-h4 text-md-h3 text-lg-h2 text-xl-h2\n    "},[t._v("\n    About Us\n  ")])],1)}),[],!1,null,"1f858b40",null);e.default=component.exports},418:function(t,e,n){"use strict";n.r(e);var r={components:{TtimeImageHeader:n(391).default}},o=n(62),c=n(75),l=n.n(c),d=n(193),f=n(372),m=n(383),v=n(382),h=n(374),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ttime-image-header"),t._v(" "),n("v-main",[n("v-container",[n("v-card",{attrs:{height:"80vh",flat:""}},[n("v-row",{attrs:{align:"center"}},[n("v-col",{attrs:{cols:"12",sm:"8",md:"6"}},[n("h1",[t._v(t._s(t.$t("MENU_LIST.ABOUT_US")))])])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCard:d.a,VCol:f.a,VContainer:m.a,VMain:v.a,VRow:h.a})}}]);
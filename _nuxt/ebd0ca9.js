(window.webpackJsonp=window.webpackJsonp||[]).push([[12,3],{437:function(t,e,r){var content=r(440);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("2dbd2537",content,!0,{sourceMap:!1})},438:function(t,e,r){"use strict";r.r(e);var n=r(0).a.extend({props:{title:{type:String,required:!0},imgSrc:{type:String,required:!0}}}),o=(r(439),r(67)),c=r(79),d=r.n(c),l=r(168),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"img-rap"},[r("v-img",{staticClass:"ttime-header",attrs:{alt:"Ttime Header",src:t.imgSrc}}),t._v(" "),r("div",{staticClass:"ttime-description text-xs-h5 text-sm-h4 text-md-h3 font-weight-light"},[t._v("\n    "+t._s(t.title)+"\n  ")])],1)}),[],!1,null,"4f49c809",null);e.default=component.exports;d()(component,{VImg:l.a})},439:function(t,e,r){"use strict";r(437)},440:function(t,e,r){var n=r(19)(!1);n.push([t.i,'.img-rap[data-v-4f49c809]{height:20vh;width:100%;overflow:hidden;position:relative;text-align:center}.img-rap .ttime-header[data-v-4f49c809]{vertical-align:middle;border-style:none;height:100%;width:100%;-o-object-fit:cover;object-fit:cover}.img-rap .ttime-description[data-v-4f49c809]{margin:0;position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%);color:#fff;white-space:nowrap}.img-rap .ttime-description[data-v-4f49c809]:before{float:right}.img-rap .ttime-description[data-v-4f49c809]:after,.img-rap .ttime-description[data-v-4f49c809]:before{content:"";display:block;width:60%;height:2px;position:relative;background-color:#fff}.img-rap .ttime-description[data-v-4f49c809]:after{float:left}',""]),t.exports=n},443:function(t,e,r){"use strict";r(10),r(3),r(9),r(66),r(30),r(292),r(224),r(73),r(80);var n=r(0);var o,c=r(75);e.a=(o="container",n.a.extend({name:"v-".concat(o),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var r=e.props,data=e.data,n=e.children;data.staticClass="".concat(o," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var d=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));d.length&&(data.staticClass+=" ".concat(d.join(" ")))}return r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,data,n)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var r,n=e.props,data=e.data,o=e.children,d=data.attrs;return d&&(data.attrs={},r=Object.keys(d).filter((function(t){if("slot"===t)return!1;var e=d[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,Object(c.a)(data,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(r||[])}),o)}})},475:function(t,e,r){"use strict";r.r(e);var n=r(21),o=(r(74),{components:{ImageHeader:r(438).default},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,o=t.i18n,e.next=3,r(o.locale,"web-posts",n.slug).fetch();case 3:return c=e.sent,e.abrupt("return",{post:c});case 5:case"end":return e.stop()}}),e)})))()}}),c=r(67),d=r(79),l=r.n(d),f=r(443),m=r(433),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",[r("image-header",{attrs:{title:"Web Posts","img-src":"/header.jpeg"}}),t._v(" "),r("v-main",[r("v-container",[r("h1",[t._v(t._s(t.post.title))]),t._v(" "),r("nuxt-content",{attrs:{document:t.post}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{ImageHeader:r(438).default}),l()(component,{VContainer:f.a,VMain:m.a})}}]);
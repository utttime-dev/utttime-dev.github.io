(window.webpackJsonp=window.webpackJsonp||[]).push([[14,3],{437:function(t,e,r){var content=r(440);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("300bd07a",content,!0,{sourceMap:!1})},438:function(t,e,r){"use strict";r.r(e);var n=r(0).a.extend({props:["title","img_src"]}),o=(r(439),r(66)),c=r(79),l=r.n(c),d=r(168),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"img-rap"},[r("v-img",{staticClass:"ttime-header",attrs:{alt:"Ttime Header",src:t.img_src}}),t._v(" "),r("v-text",{staticClass:"\n      ttime-description\n      text-xs-h5 text-sm-h4 text-md-h3 text-lg-h3 text-xl-h2\n      font-weight-light\n    "},[t._v("\n    "+t._s(t.title)+"\n  ")])],1)}),[],!1,null,"33753ca4",null);e.default=component.exports;l()(component,{VImg:d.a})},439:function(t,e,r){"use strict";r(437)},440:function(t,e,r){var n=r(19)(!1);n.push([t.i,'.img-rap[data-v-33753ca4]{overflow:hidden;position:relative;text-align:center}.img-rap[data-v-33753ca4],.img-rap img[data-v-33753ca4]{height:20vh;width:100%}.img-rap img[data-v-33753ca4]{vertical-align:middle;border-style:none;-o-object-fit:cover;object-fit:cover}.img-rap .ttime-description[data-v-33753ca4]{margin:0;position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%);color:#fff;white-space:nowrap}.img-rap .ttime-description[data-v-33753ca4]:before{float:right}.img-rap .ttime-description[data-v-33753ca4]:after,.img-rap .ttime-description[data-v-33753ca4]:before{content:"";display:block;width:60%;height:2px;position:relative;background-color:#fff}.img-rap .ttime-description[data-v-33753ca4]:after{float:left}',""]),t.exports=n},442:function(t,e,r){"use strict";r(10),r(3),r(9),r(67),r(30),r(292),r(224),r(73),r(80);var n=r(0);var o,c=r(75);e.a=(o="container",n.a.extend({name:"v-".concat(o),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var r=e.props,data=e.data,n=e.children;data.staticClass="".concat(o," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var l=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,data,n)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var r,n=e.props,data=e.data,o=e.children,l=data.attrs;return l&&(data.attrs={},r=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,Object(c.a)(data,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(r||[])}),o)}})},474:function(t,e,r){"use strict";r.r(e);var n=r(21),o=(r(74),r(438)),c=r(158),l={components:{TtimeImageHeader:o.default},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.i18n,e.next=3,r(n.locale,"web-posts").fetch();case 3:return o=e.sent,e.abrupt("return",{posts:o});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{URL_MAP:c.a}}},d=r(66),f=r(79),m=r.n(f),v=r(442),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("ttime-image-header",{attrs:{title:"Web Posts",img_src:"/header.jpeg"}}),t._v(" "),r("v-container",{staticClass:"mx-lg-10 mx-sm-2"},[r("h1",[t._v(t._s(t.$t("MENU_LIST.WEB_POSTS")))]),t._v(" "),r("ul",t._l(t.posts,(function(e){return r("li",{key:e.slug},[r("nuxt-link",{attrs:{to:t.localePath(t.URL_MAP.WEB_POSTS,"post.slug")}},[t._v("\n          "+t._s(e.title)+"\n        ")]),t._v(" "),r("p",[t._v(t._s(e.updatedAt))])],1)})),0)])],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VContainer:v.a})}}]);
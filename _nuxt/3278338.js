(window.webpackJsonp=window.webpackJsonp||[]).push([[8,3],{457:function(t,e,r){var content=r(461);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(25).default)("4e5ba3ca",content,!0,{sourceMap:!1})},458:function(t,e,r){"use strict";r.r(e);var n=r(3).a.extend({props:{title:{type:String,required:!0},imgSrc:{type:String,required:!0}}}),o=(r(460),r(76)),c=r(91),l=r.n(c),d=r(186),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"img-rap"},[r("v-img",{staticClass:"ttime-header",attrs:{alt:"Ttime Header",src:t.imgSrc}}),t._v(" "),r("div",{staticClass:"\n      ttime-description\n      text-xs-h5 text-sm-h4 text-md-h3\n      font-weight-light\n    "},[t._v("\n    "+t._s(t.title)+"\n  ")])],1)}),[],!1,null,"890135ae",null);e.default=component.exports;l()(component,{VImg:d.a})},459:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r(86),r(33),r(14),r(6),r(13),r(77),r(92);var n=r(3);function o(t){return n.a.extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,r){var n=r.props,data=r.data,o=r.children;data.staticClass="".concat(t," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var l=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),e(n.tag,data,o)}})}},460:function(t,e,r){"use strict";r(457)},461:function(t,e,r){var n=r(24)(!1);n.push([t.i,'.img-rap[data-v-890135ae]{height:20vh;width:100%;overflow:hidden;position:relative;text-align:center}.img-rap .ttime-header[data-v-890135ae]{vertical-align:middle;border-style:none;height:100%;width:100%;-o-object-fit:cover;object-fit:cover}.img-rap .ttime-description[data-v-890135ae]{margin:0;position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%);color:#fff;white-space:nowrap}.img-rap .ttime-description[data-v-890135ae]:before{float:right}.img-rap .ttime-description[data-v-890135ae]:after,.img-rap .ttime-description[data-v-890135ae]:before{content:"";display:block;width:60%;height:2px;position:relative;background-color:#fff}.img-rap .ttime-description[data-v-890135ae]:after{float:left}',""]),t.exports=n},465:function(t,e,r){"use strict";r(14),r(6),r(13),r(77),r(33),r(313),r(245);var n=r(459),o=r(87);e.a=Object(n.a)("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var r,n=e.props,data=e.data,c=e.children,l=data.attrs;return l&&(data.attrs={},r=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,Object(o.a)(data,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(r||[])}),c)}})},471:function(t,e,r){var content=r(477);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(25).default)("6b93be8c",content,!0,{sourceMap:!1})},476:function(t,e,r){"use strict";r(471)},477:function(t,e,r){var n=r(24)(!1);n.push([t.i,'h2{font-weight:400;margin-top:36px;height:auto}h2:before{content:"";display:inline-block;margin-right:6px;width:24px;height:24px;background-size:20px 20px;background-image:url(/favicon.ico);background-repeat:no-repeat;vertical-align:middle}p{margin-top:12px}',""]),t.exports=n},494:function(t,e,r){"use strict";r.r(e);var n=r(21),o=(r(78),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.i18n,e.next=3,r(n.locale,"about-us").where({slug:"long"}).only("body").limit(1).fetch();case 3:return o=e.sent.pop(),e.abrupt("return",{aboutUs:o});case 5:case"end":return e.stop()}}),e)})))()},components:{ImageHeader:r(458).default},head:function(){return{title:"About us"}}}),c=(r(476),r(76)),l=r(91),d=r.n(l),f=r(238),m=r(451),v=r(465),h=r(142),x=r(130),w=r(453),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("image-header",{attrs:{title:"About Us","img-src":"/header.jpeg"}}),t._v(" "),r("v-container",{staticClass:"d-flex align-center ttime-content pt-10 pb-16"},[r("v-row",{attrs:{justify:"center","align-content":"center"}},[r("v-col",{attrs:{cols:"12"}},[r("v-card",{staticClass:"mx-auto",attrs:{elevation:"0","max-width":"1200px",center:""}},[r("v-list-item",{attrs:{"three-line":""}},[r("v-list-item-content",[r("nuxt-content",{staticClass:"text-md-subtitle-1",attrs:{document:t.aboutUs}})],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{ImageHeader:r(458).default}),d()(component,{VCard:f.a,VCol:m.a,VContainer:v.a,VListItem:h.a,VListItemContent:x.a,VRow:w.a})}}]);
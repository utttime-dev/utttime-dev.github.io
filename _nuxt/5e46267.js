(window.webpackJsonp=window.webpackJsonp||[]).push([[8,2,3],{437:function(t,e,r){var content=r(440);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("9165b5c0",content,!0,{sourceMap:!1})},438:function(t,e,r){"use strict";r.r(e);var n=r(0).a.extend({props:["title","img_src"]}),o=(r(439),r(66)),c=r(79),l=r.n(c),d=r(168),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"img-rap"},[r("v-img",{staticClass:"ttime-header",attrs:{alt:"Ttime Header",src:t.img_src}}),t._v(" "),r("div",{staticClass:"\n      ttime-description\n      text-xs-h5 text-sm-h4 text-md-h3\n      font-weight-light\n    "},[t._v("\n    "+t._s(t.title)+"\n  ")])],1)}),[],!1,null,"8c035d56",null);e.default=component.exports;l()(component,{VImg:d.a})},439:function(t,e,r){"use strict";r(437)},440:function(t,e,r){var n=r(19)(!1);n.push([t.i,'.img-rap[data-v-8c035d56]{height:20vh;width:100%;overflow:hidden;position:relative;text-align:center}.img-rap .ttime-header[data-v-8c035d56]{vertical-align:middle;border-style:none;height:100%;width:100%;-o-object-fit:cover;object-fit:cover}.img-rap .ttime-description[data-v-8c035d56]{margin:0;position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%);color:#fff;white-space:nowrap}.img-rap .ttime-description[data-v-8c035d56]:before{float:right}.img-rap .ttime-description[data-v-8c035d56]:after,.img-rap .ttime-description[data-v-8c035d56]:before{content:"";display:block;width:60%;height:2px;position:relative;background-color:#fff}.img-rap .ttime-description[data-v-8c035d56]:after{float:left}',""]),t.exports=n},442:function(t,e,r){"use strict";r(10),r(3),r(9),r(67),r(30),r(292),r(224),r(73),r(80);var n=r(0);var o,c=r(75);e.a=(o="container",n.a.extend({name:"v-".concat(o),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var r=e.props,data=e.data,n=e.children;data.staticClass="".concat(o," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var l=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,data,n)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var r,n=e.props,data=e.data,o=e.children,l=data.attrs;return l&&(data.attrs={},r=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,Object(c.a)(data,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(r||[])}),o)}})},443:function(t,e,r){var content=r(446);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("120282d2",content,!0,{sourceMap:!1})},445:function(t,e,r){"use strict";r(443)},446:function(t,e,r){var n=r(19)(!1);n.push([t.i,".thumbnail[data-v-cee4f31a]{margin:0 24%}",""]),t.exports=n},449:function(t,e,r){"use strict";r.r(e);r(42);var n=r(0).a.extend({props:["post","hover"],filters:{ellipsis:function(t){return t?t.length>80?t.slice(0,80)+"...":t:""}}}),o=(r(445),r(66)),c=r(79),l=r.n(c),d=r(218),f=r(170),v=r(428),m=r(168),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{class:{"on-hover":t.hover},attrs:{elevation:t.hover?4:2,rounded:"xl",href:t.post.link,height:"100%"}},[r("div",{staticClass:"ma-2"},[r("v-card-title",{staticClass:"justify-center primary--text"},[t._v("\n      "+t._s(t.post.edition)+"\n    ")]),t._v(" "),r("v-img",{staticClass:"thumbnail",attrs:{alt:"back number thumbnail",src:"/back-numbers/"+t.post.img,position:"center center"}}),t._v(" "),r("v-card-subtitle",{staticClass:"justify-center primary--text"},[t._v("\n      "+t._s(t.post.title)+"\n    ")]),t._v(" "),r("v-divider",{staticClass:"mx-4"}),t._v(" "),r("v-card-text",{staticClass:"dark-grey--text"},[t._v("\n      "+t._s(t._f("ellipsis")(t.post.description))+"\n    ")])],1)])}),[],!1,null,"cee4f31a",null);e.default=component.exports;l()(component,{VCard:d.a,VCardSubtitle:f.a,VCardText:f.b,VCardTitle:f.c,VDivider:v.a,VImg:m.a})},450:function(t,e,r){var content=r(455);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("2acaebe6",content,!0,{sourceMap:!1})},454:function(t,e,r){"use strict";r(450)},455:function(t,e,r){var n=r(19)(!1);n.push([t.i,".base[data-v-1723a387]{height:100%;width:100%;background:#f5f5f5}",""]),t.exports=n},471:function(t,e,r){"use strict";r.r(e);var n=r(21),o=(r(74),r(438)),c=r(449),l={components:{ImageHeader:o.default,BackNumber:c.default},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.i18n,e.next=3,r(n.locale,"back-numbers").sortBy("date","desc").limit(20).fetch();case 3:return o=e.sent,e.abrupt("return",{posts:o});case 5:case"end":return e.stop()}}),e)})))()}},d=(r(454),r(66)),f=r(79),v=r.n(f),m=r(430),h=r(442),y=(r(27),r(68),r(0).a.extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(t,e){var r=this;this.clearDelay();var n=parseInt(this["".concat(t,"Delay")],10);this["".concat(t,"Timeout")]=setTimeout(e||function(){r.isActive={open:!0,close:!1}[t]},n)}}})),x=r(70),_=r(13),C=r(17),k=Object(_.a)(y,x.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(C.c)("v-hover should only contain a single element",this),element)):(Object(C.c)("v-hover is missing a default scopedSlot or bound value",this),null);var element}}),w=r(432),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"base"},[r("image-header",{attrs:{title:"Back Numbers",img_src:"/header.jpeg"}}),t._v(" "),r("v-container",{staticClass:"mx-lg-10 mx-sm-6 my-lg-10 my-sm-6 card-container"},[r("v-row",t._l(t.posts,(function(e){return r("v-col",{key:e.slug,attrs:{cols:"6",sm:"4",md:"2"}},[r("v-hover",{scopedSlots:t._u([{key:"default",fn:function(t){var n=t.hover;return[r("back-number",{attrs:{post:e,hover:n}})]}}],null,!0)})],1)})),1)],1)],1)}),[],!1,null,"1723a387",null);e.default=component.exports;v()(component,{ImageHeader:r(438).default,BackNumber:r(449).default}),v()(component,{VCol:m.a,VContainer:h.a,VHover:k,VRow:w.a})}}]);
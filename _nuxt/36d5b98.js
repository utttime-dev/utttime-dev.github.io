(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{462:function(t,e,r){var content=r(466);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(25).default)("dd59006a",content,!0,{sourceMap:!1})},465:function(t,e,r){"use strict";r(462)},466:function(t,e,r){var n=r(24)(!1);n.push([t.i,".thumbnail[data-v-41546164]{margin:0 24%}",""]),t.exports=n},468:function(t,e,r){"use strict";r.r(e);r(47);var n=r(3),l=r(148),c=n.a.extend({filters:{ellipsis:function(t){return t?t.length>80?t.slice(0,80)+"...":t:""}},props:{post:{type:Object,required:!0},hover:{type:Boolean,required:!0}},data:function(){return{URL_MAP:l.a}}}),o=(r(465),r(76)),d=r(91),v=r.n(d),f=r(238),_=r(190),h=r(448),m=r(186),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{class:{"on-hover":t.hover},attrs:{elevation:t.hover?4:2,rounded:"xl",href:t.post.link,height:"100%"}},[r("div",{staticClass:"ma-2"},[r("v-card-title",{staticClass:"justify-center primary--text"},[t._v("\n      "+t._s(t.post.edition)+"\n    ")]),t._v(" "),r("v-img",{staticClass:"thumbnail",attrs:{alt:"back number thumbnail",src:"/"+t.$i18n.locale+"/back-numbers/"+t.post.img,position:"center center"}}),t._v(" "),r("v-card-subtitle",{staticClass:"justify-center primary--text"},[t._v("\n      "+t._s(t.post.title)+"\n    ")]),t._v(" "),r("v-divider",{staticClass:"mx-4"}),t._v(" "),r("v-card-text",{staticClass:"dark-grey--text"},[t._v("\n      "+t._s(t._f("ellipsis")(t.post.description))+"\n    ")])],1)])}),[],!1,null,"41546164",null);e.default=component.exports;v()(component,{VCard:f.a,VCardSubtitle:_.a,VCardText:_.b,VCardTitle:_.c,VDivider:h.a,VImg:m.a})}}]);
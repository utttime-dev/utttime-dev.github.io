(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{160:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var n={WEB_POSTS:"/web-posts",BACK_NUMBERS:"/back-numbers",ABOUT_US:"/about-us",NEWS:"/news",LINKS:"/links",CONTACTS:"/contacts"}},256:function(t,e,r){var content=r(327);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("6570a8f6",content,!0,{sourceMap:!1})},258:function(t,e,r){var content=r(335);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("38078bba",content,!0,{sourceMap:!1})},268:function(t,e,r){var content=r(392);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("8d15cb2e",content,!0,{sourceMap:!1})},282:function(t){t.exports=JSON.parse('{"DESCRIPTION_INLINE":"東大工学部のイマを伝えるホームページ","DESCRIPTION_MULTILINE":["東大工学部のイマを伝える","ホームページ"],"MENU_LIST":{"WEB_POSTS":"Web記事","BACK_NUMBERS":"冊子一覧","ABOUT_US":"Ttime!とは","NEWS":"ニュース","LINKS":"リンク","CONTACTS":"お問合わせ"}}')},285:function(t,e,r){"use strict";var n=r(0),o=r(286),c=r(287),l=n.a.extend({components:{TtimeHeader:o.default,TtimeFooter:c.default}}),d=r(66),v=r(81),f=r.n(v),_=r(418),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("ttime-header"),t._v(" "),r("nuxt"),t._v(" "),r("ttime-footer")],1)}),[],!1,null,null,null);e.a=component.exports;f()(component,{VApp:_.a})},286:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r(160),c=n.a.extend({data:function(){return{isMobile:!1,drawer:!1,URL_map:o.a}},beforeDestroy:function(){"undefined"!=typeof window&&window.removeEventListener("resize",this.onResize,!0)},mounted:function(){this.onResize(),window.addEventListener("resize",this.onResize,{passive:!0})},methods:{onResize:function(){this.isMobile=window.innerWidth<1024}}}),l=(r(334),r(66)),d=r(81),v=r.n(d),f=r(426),_=r(419),m=r(288),h=r(427),w=r(420),x=r(214),L=r(129),E=r(215),N=r(128),T=r(425),S=r(421),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-app-bar",{attrs:{color:"white",app:""}},[r("nuxt-link",{attrs:{to:t.localePath("home")}},[r("img",{staticClass:"ttime-logo",attrs:{alt:"Ttime Logo",src:"/ttime-logo-red.svg"}})]),t._v(" "),r("v-spacer"),t._v(" "),t.isMobile?r("div",[r("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}})],1):r("div",[t._l(t.$t("MENU_LIST"),(function(menu,e){return r("v-btn",{key:menu,staticClass:"mx-1 ttime-header-btn",attrs:{text:"",color:"primary",to:{path:"/"+t.$i18n.locale+t.URL_map[e]}}},[t._v("\n        "+t._s(menu)+"\n      ")])})),t._v(" "),r("v-divider",{staticClass:"mx-4",attrs:{vertical:""}}),t._v(" "),r("v-btn-toggle",{attrs:{color:"primary",depressed:""}},[r("v-btn",{attrs:{to:t.switchLocalePath("ja")}},[r("strong",[t._v("Ja")])]),t._v(" "),r("v-btn",{attrs:{to:t.switchLocalePath("en")}},[r("strong",[t._v("En")])])],1)],2)],1),t._v(" "),r("v-navigation-drawer",{attrs:{right:"",temporary:"",fixed:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list-item-group",[r("v-list",{attrs:{nav:"",dense:""}},t._l(t.$t("MENU_LIST"),(function(menu,e){return r("v-list-item",{key:menu,attrs:{color:"primary",to:{path:"/"+t.$i18n.locale+t.URL_map[e]}}},[r("v-list-item-title",[t._v(t._s(menu))])],1)})),1)],1),t._v(" "),r("v-divider",{staticClass:"my-4"}),t._v(" "),r("div",{attrs:{align:"center"}},[r("v-btn-toggle",{attrs:{color:"primary",depressed:""}},[r("v-btn",{attrs:{to:t.switchLocalePath("ja")}},[r("strong",[t._v("Ja")])]),t._v(" "),r("v-btn",{attrs:{to:t.switchLocalePath("en")}},[r("strong",[t._v("En")])])],1)],1)],1)],1)}),[],!1,null,"53bf4daf",null);e.default=component.exports;v()(component,{VAppBar:f.a,VAppBarNavIcon:_.a,VBtn:m.a,VBtnToggle:h.a,VDivider:w.a,VList:x.a,VListItem:L.a,VListItemGroup:E.a,VListItemTitle:N.a,VNavigationDrawer:T.a,VSpacer:S.a})},287:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r(160),c=n.a.extend({data:function(){return{URL_map:o.a}}}),l=(r(391),r(66)),d=r(81),v=r.n(d),f=r(288),_=r(216),m=r(170),h=r(422),w=r(420),x=r(423),L=r(424),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-footer",{attrs:{color:"primary"}},[r("v-card",{staticClass:"primary text-center mt-12",attrs:{flat:"",tile:"",width:"100%"}},[r("v-row",{attrs:{justify:"center","align-content":"center"}},t._l(t.$t("MENU_LIST"),(function(menu,e){return r("v-col",{key:menu,attrs:{cols:"6",sm:"4",lg:"1"}},[r("v-btn",{staticClass:"ttime-footer-btn mx-4 white--text",attrs:{block:"",text:"",to:{path:"/"+t.$i18n.locale+t.URL_map[e]}}},[t._v("\n          "+t._s(menu)+"\n        ")])],1)})),1),t._v(" "),r("v-divider",{staticClass:"my-4"}),t._v(" "),r("v-card-text",{staticClass:"white--text"},[t._v("\n      © "+t._s((new Date).getFullYear())+" — "),r("strong",[t._v("Ttime!")])])],1)],1)}),[],!1,null,"43936b1d",null);e.default=component.exports;v()(component,{VBtn:f.a,VCard:_.a,VCardText:m.a,VCol:h.a,VDivider:w.a,VFooter:x.a,VRow:L.a})},295:function(t,e,r){r(296),t.exports=r(297)},326:function(t,e,r){"use strict";r(256)},327:function(t,e,r){var n=r(20)(!1);n.push([t.i,"h1[data-v-495dc2cf]{font-size:20px}",""]),t.exports=n},334:function(t,e,r){"use strict";r(258)},335:function(t,e,r){var n=r(20)(!1);n.push([t.i,".ttime-logo[data-v-53bf4daf]{height:46pt;vertical-align:middle}.ttime-header-btn[data-v-53bf4daf]{text-transform:none}",""]),t.exports=n},391:function(t,e,r){"use strict";r(268)},392:function(t,e,r){var n=r(20)(!1);n.push([t.i,".ttime-footer-btn[data-v-43936b1d]{text-transform:none}",""]),t.exports=n},89:function(t,e,r){"use strict";var n={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(r(326),r(66)),c=r(81),l=r.n(c),d=r(418),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{dark:""}},[404===t.error.statusCode?r("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):r("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),r("NuxtLink",{attrs:{to:"/"}},[t._v(" Home page ")])],1)}),[],!1,null,"495dc2cf",null);e.a=component.exports;l()(component,{VApp:d.a})}},[[295,19,2,20]]]);
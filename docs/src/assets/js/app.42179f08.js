(function(e){function t(t){for(var a,r,s=t[0],c=t[1],l=t[2],d=0,u=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&u.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);_&&_(t);while(u.length)u.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,r=1;r<n.length;r++){var s=n[r];0!==i[s]&&(a=!1)}a&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={app:0},i={app:0},o=[];function s(e){return c.p+"src/assets/js/"+({about:"about"}[e]||e)+"."+{"chunk-01dd946f":"31a487c8","chunk-0ebaa984":"0f228cd7","chunk-2d0b3289":"a72d3ec8","chunk-2d20813a":"3f31e2f5","chunk-2d217357":"b6cea52b","chunk-41cd9a4e":"109b5f07","chunk-66772a51":"650d052e","chunk-7413dd6d":"ecc66a1d","chunk-f25dd1f4":"b7ccbfde",about:"34252b5e","chunk-008d5b12":"a6748977","chunk-063977e0":"d5e84369","chunk-3bbd2fb2":"856770f5","chunk-8385ec60":"6c780dbe","chunk-198c5bcf":"8ccf5512","chunk-2f7e7446":"d347c23e","chunk-39bd8dd5":"5dab5a8f","chunk-42a56360":"fcb7ba46","chunk-44bdf2e4":"8c8a28f1","chunk-fce24690":"1f5f34b6","chunk-f55f9c24":"f100d47e"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-01dd946f":1,"chunk-0ebaa984":1,"chunk-41cd9a4e":1,"chunk-66772a51":1,"chunk-7413dd6d":1,"chunk-f25dd1f4":1,about:1,"chunk-008d5b12":1,"chunk-063977e0":1,"chunk-8385ec60":1,"chunk-198c5bcf":1,"chunk-2f7e7446":1,"chunk-39bd8dd5":1,"chunk-42a56360":1,"chunk-44bdf2e4":1,"chunk-f55f9c24":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise(function(t,n){for(var a="src/assets/css/"+({about:"about"}[e]||e)+"."+{"chunk-01dd946f":"96fd0075","chunk-0ebaa984":"2ec15ad3","chunk-2d0b3289":"31d6cfe0","chunk-2d20813a":"31d6cfe0","chunk-2d217357":"31d6cfe0","chunk-41cd9a4e":"96fd0075","chunk-66772a51":"96fd0075","chunk-7413dd6d":"96fd0075","chunk-f25dd1f4":"e7ffbd0b",about:"29345b41","chunk-008d5b12":"3e507f7b","chunk-063977e0":"7951c5b6","chunk-3bbd2fb2":"31d6cfe0","chunk-8385ec60":"fbcc7878","chunk-198c5bcf":"3e507f7b","chunk-2f7e7446":"4b4fbf1d","chunk-39bd8dd5":"ffefa0ae","chunk-42a56360":"3e507f7b","chunk-44bdf2e4":"3e507f7b","chunk-fce24690":"31d6cfe0","chunk-f55f9c24":"2f7b25c9"}[e]+".css",i=c.p+a,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var l=o[s],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===a||d===i))return t()}var u=document.getElementsByTagName("style");for(s=0;s<u.length;s++){l=u[s],d=l.getAttribute("data-href");if(d===a||d===i)return t()}var _=document.createElement("link");_.rel="stylesheet",_.type="text/css",_.onload=t,_.onerror=function(t){var a=t&&t.target&&t.target.src||i,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[e],_.parentNode.removeChild(_),n(o)},_.href=i;var m=document.getElementsByTagName("head")[0];m.appendChild(_)}).then(function(){r[e]=0}));var a=i[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise(function(t,n){a=i[e]=[t,n]});t.push(a[2]=o);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=s(e);var u=new Error;l=function(t){d.onerror=d.onload=null,clearTimeout(_);var n=i[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",u.name="ChunkLoadError",u.type=a,u.request=r,n[1](u)}i[e]=void 0}};var _=setTimeout(function(){l({type:"timeout",target:d})},12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/ydl-v2-front/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var _=d;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},3654:function(e,t,n){"use strict";var a=n("38fc"),r=n.n(a);r.a},"38fc":function(e,t,n){},5304:function(e,t,n){"use strict";var a=n("6cbc"),r=n.n(a);r.a},"56d7":function(e,t,n){"use strict";n.r(t);var a=n("da3e"),r=n("53c7"),i=n("6e05"),o=n.n(i);a["a"].use(r["a"]);var s=new r["a"]({icons:{iconfont:"mdi"},lang:{locales:{de:o.a},current:"en"},theme:{dark:!0,themes:{dark:{primary:"#1976D2",secondary:"#FF0000",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}}}),c=n("61ee");a["a"].use(c["a"]);var l=new c["a"]({}),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-app-bar",{attrs:{app:"",text:"",color:"primary",dense:"","clipped-left":""}},[n("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),n("v-toolbar-title",{staticClass:"headline"},[n("span",[e._v("Y&D")]),n("span",{staticClass:"font-weight-light"},[e._v("Learning")]),n("span",[e._v(e._s(e.process))])]),n("v-spacer"),n("v-toolbar-items",[n("v-btn",{staticClass:"tile",attrs:{text:"",to:"/"}},[e._v("Home ")]),n("v-btn",{staticClass:"tile",attrs:{text:"",to:"/news"}},[e._v("News")]),n("v-btn",{attrs:{text:"",to:"/about"}},[e._v("About")]),n("v-menu",{attrs:{bottom:"","offset-y":""},scopedSlots:e._u([e.isLoggedIn?{key:"activator",fn:function(t){var a=t.on;return[n("v-btn",e._g({attrs:{color:"primary",depressed:""},on:{click:function(t){t.stopPropagation(),e.menuClick=!e.menuClick}}},Object.assign({},a)),[e._v("Hi "+e._s(e.user.username)),e.menuClick?e._e():n("v-icon",[e._v("mdi-menu-up ")]),e.menuClick?n("v-icon",[e._v("mdi-menu-down ")]):e._e(),n("v-list-item",{attrs:{left:""}},[n("v-icon",{attrs:{right:"",large:""}},[e._v("mdi-account-circle-outline")])],1)],1)]}}:{key:"activator",fn:function(t){var a=t.on;return[n("v-btn",e._g({attrs:{color:"primary",depressed:""},on:{click:function(t){t.stopPropagation(),e.menuClick=!e.menuClick}}},Object.assign({},a)),[e._v("Login / Sign up"),e.menuClick?e._e():n("v-icon",[e._v("mdi-menu-up ")]),e.menuClick?n("v-icon",[e._v("mdi-menu-down ")]):e._e(),n("v-list-item",{attrs:{left:""}},[n("v-icon",{attrs:{right:"",large:""}},[e._v("mdi-account-circle-outline")])],1)],1)]}}],null,!0)},[n("v-list",[e.isLoggedIn?e._e():[n("v-list-item",{attrs:{to:"/login"}},[n("v-list-item-icon",[n("v-icon",[e._v("mdi-login-variant")])],1),n("v-list-item-title",[e._v("Login")])],1),n("v-list-item",{attrs:{to:"/signup"}},[n("v-list-item-icon",[n("v-icon",[e._v("mdi-pencil-plus-outline")])],1),n("v-list-item-title",[e._v("Sign up")])],1)],e.isLoggedIn?[n("v-list-item",{attrs:{to:"/dashboard"}},[n("v-list-item-icon",[n("v-icon",[e._v("mdi-home")])],1),n("v-list-item-title",[e._v("[My dashboard]")])],1),n("v-list-item",{attrs:{to:"/profile"}},[n("v-list-item-icon",[n("v-icon",[e._v("mdi-account-circle-outline")])],1),n("v-list-item-title",[e._v("[My profile]")])],1),n("v-list-item",{attrs:{to:"/settings"}},[n("v-list-item-icon",[n("v-icon",[e._v("mdi-settings-outline")])],1),n("v-list-item-title",[e._v("[Settings]")])],1)]:e._e(),e.isLoggedIn?n("v-list-item",{on:{click:function(t){return e.logout()}}},[n("v-list-item-icon",{staticClass:"rotate-180"},[n("v-icon",[e._v("mdi-logout-variant")])],1),n("v-list-item-title",[e._v("[Logout]")])],1):e._e()],2)],1)],1)],1),n("v-navigation-drawer",{attrs:{app:"",clipped:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("TheDashboardList")],1),n("v-content",[n("router-view")],1),n("TheDebug",{directives:[{name:"show",rawName:"v-show",value:e.show_debug_ui,expression:"show_debug_ui"}]}),n("Footer")],1)},u=[],_=n("2ba1"),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-list",{attrs:{dense:""}},[n("v-list-item",{attrs:{to:"/dashboard"}},[n("v-list-item-action",[n("v-icon",[e._v("mdi-home")])],1),n("v-list-item-content",[n("v-list-item-title",[e._v("My dashboard")])],1)],1),e.isLoggedIn?[n("v-list-item",{attrs:{to:"/mycourses"}},[n("v-list-item-action",[n("v-icon",[e._v("mdi-folder-account-outline")])],1),n("v-list-item-content",[n("v-list-item-title",[e._v("[My courses]")])],1)],1)]:e._e(),n("v-list-item",{attrs:{to:"/courses"}},[n("v-list-item-action",[n("v-icon",[e._v("mdi-folder-multiple-outline")])],1),n("v-list-item-content",[n("v-list-item-title",[e._v("All courses")])],1)],1),n("v-list-item",{attrs:{to:"/calendar"}},[n("v-list-item-action",[n("v-icon",[e._v("mdi-calendar-account-outline")])],1),n("v-list-item-content",[n("v-list-item-title",[e._v("Calendar")])],1)],1)],2)},h=[],p={name:"TheDashboardList",computed:Object(_["b"])(["isLoggedIn"])},f=p,E=n("d9b7"),g=n("53f2"),v=n.n(g),P=n("d958"),b=n("9802"),A=n("542b"),T=n("2425"),D=n("c071"),I=Object(E["a"])(f,m,h,!1,null,null,null),y=I.exports;v()(I,{VIcon:P["a"],VList:b["a"],VListItem:A["a"],VListItemAction:T["a"],VListItemContent:D["b"],VListItemTitle:D["d"]});var V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"ma-4",staticStyle:{position:"fixed",right:"0",bottom:"0"}},[n("v-list",{attrs:{dense:""}},[n("v-subheader",[e._v("API Server Status")]),e.fetching?n("v-list-item",[n("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1):n("v-list-item",[n("v-list-item-icon",{staticClass:"mr-2"},[n("v-icon",{class:e.ping_result?"green--text":"error--text"},[e._v("mdi-checkbox-blank-circle")])],1),n("v-list-item-content",[e._v("Online")])],1),e.fetching?e._e():[n("v-subheader",[e._v("Use API requests")]),n("v-list-item",[n("v-btn",[e._v("Activate")])],1)]],2)],1)},N=[],U=n("9995"),L={name:"TheDebug",data(){return{ping_result:!1,fetching:!0}},mounted(){Object(U["setTimeout"])(this.ping,2e3)},methods:{ping(){var e=Object({NODE_ENV:"production",VUE_APP_INDEX_LANG:"en",VUE_APP_INDEX_TITLE:"YD Learning",VUE_APP_INDEX_AUTHOR:"B4rtware, Re-Krass",VUE_APP_INDEX_PUBLISHER:"B4rtware, Re-Krass",VUE_APP_INDEX_COPYRIGHT:"B4rtware, Re-Krass",VUE_APP_INDEX_DESCRIPTION:"Course Management system - YDL",VUE_APP_INDEX_KEYWORDS:"YD, Learning, Course, Management",VUE_APP_INDEX_PAGE_TOPIC:"Dienstleistung",VUE_APP_INDEX_PAGE_TYPE:"Software Download",VUE_APP_INDEX_AUDIENCE:"Alle",VUE_APP_INDEX_OG_TITLE:"Y&D Learning",VUE_APP_INDEX_OG_DESCRIPTION:"Course management system.",VUE_APP_INDEX_OG_TYPE:"image/png",VUE_APP_INDEX_OG_IMAGE_WIDTH:"1280",VUE_APP_INDEX_OG_IMAGE_HEIGHT:"640",VUE_APP_INDEX_OG_IMAGE:"https://ydlearning.github.io/ydl-v2-front/images/ydl-v2-social.png",VUE_APP_INDEX_OG_IMAGE_ALT:"YDL social badge",VUE_APP_INDEX_OG_URL:"https://ydlearning.github.io/ydl-v2-front/",VUE_APP_INDEX_OG_SITE_NAME:"Y&D Learning",VUE_APP_INDEX_TWITTER_CARD:"summary_large_image",VUE_APP_INDEX_TWITTER_IMAGE_ALT:"YDL Social Badge",VUE_APP_INDEX_TWITTER_IMAGE_ALTG:"YDL Social Badge 22222",VUE_APP_PASSWORD_MIN_COUNTER:"8",VUE_APP_PASSWORD_MAX_COUNTER:"128",VUE_APP_PASSWORD_REGEX:"^([a-zA-Z0-9$&+,:;=?@#'<>.^*()%!-]+)$",VUE_APP_PASSWORD_REGEX_SPECIAL_CHARACTERS:"[&+,:;=?@#'<>.^*()%!-]",VUE_APP_EMAIL_MAX_COUNTER:"100",VUE_APP_USERNAME_MIN_COUNTER:"3",VUE_APP_USERNAME_MAX_COUNTER:"40",VUE_APP_FULLNAME_MIN_COUNTER:"0",VUE_APP_FULLNAME_MAX_COUNTER:"50",BASE_URL:"/ydl-v2-front/"}).VUE_APP_API_URL;fetch(e,{mode:"no-cors"}).then(e=>{console.log(e),200!==e.status&&(this.ping_result=!1),this.ping_result=!0,this.fetching=!1}).catch(()=>{this.fetching=!1})}}},O=L,S=n("d537"),C=n("0a8f"),k=n("9f51"),w=n("de6b"),M=n("2b67"),R=Object(E["a"])(O,V,N,!1,null,null,null),X=R.exports;v()(R,{VBtn:S["a"],VCard:C["a"],VIcon:P["a"],VList:b["a"],VListItem:A["a"],VListItemContent:D["b"],VListItemIcon:k["a"],VProgressCircular:w["a"],VSubheader:M["a"]});var x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-footer",{attrs:{dark:"",padless:"",width:"100%",color:"primary"}},[n("v-row",{staticClass:"lighten-1 white--text",attrs:{justify:"center","no-gutters":"",width:"100%"}},e._l(e.sites,function(t){return n("v-btn",{key:t.id,staticClass:"my-2",attrs:{color:"white",text:"",to:t.to}},[e._v(e._s(t.name))])}),1),n("v-card",{staticClass:"lighten-1 white--text text-center",attrs:{flat:"",tile:"",width:"100%"}},[n("v-card-text",e._l(e.socialMedia,function(t){return n("v-tooltip",{key:t.id,attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(a){var r=a.on;return[n("v-btn",e._g({staticClass:"mx-4 white--text",attrs:{href:t.href,target:"_blank",icon:"",rounded:""}},Object.assign({},r)),[n("v-icon",{staticClass:"pl-0",attrs:{size:"24px"}},[e._v(e._s(t.iconName))])],1)]}}],null,!0)},[n("span",[e._v(e._s(t.name))])])}),1),n("v-divider"),n("v-card-text",{staticClass:"white--text"},[e._v(e._s((new Date).getFullYear())+" — "),n("strong",[e._v("Y&D Learning")])])],1)],1)],1)},G=[],Y={name:"Footer",data:()=>({sites:[{id:1,name:"Home",to:"/"},{id:2,name:"Privacy Policy",to:"/privacy_policy"},{id:3,name:"Legal disclosure",to:"/legal_disclosure"},{id:4,name:"Contact Us",to:"contact_us"}],socialMedia:[{id:1,name:"Y&D Learning",iconName:"mdi-github-circle",href:"https://github.com/ydlearning"},{id:2,name:"Frontend",iconName:"mdi-github-circle",href:"https://github.com/ydlearning/ydl-v2-front"},{id:3,name:"Backend",iconName:"mdi-github-circle",href:"https://github.com/ydlearning/ydl-v2-api-gql"}]}),props:{value:{type:String,default:""}}},W=Y,H=n("9fa3"),j=n("0804"),B=n("60bf"),F=n("e640"),$=n("41f9"),K=Object(E["a"])(W,x,G,!1,null,null,null),z=K.exports;v()(K,{VBtn:S["a"],VCard:C["a"],VCardText:H["b"],VDivider:j["a"],VFooter:B["a"],VIcon:P["a"],VRow:F["a"],VTooltip:$["a"]});var q={name:"App",data(){return{drawer:!1,menuClick:!1,fab:!1}},components:{TheDashboardList:y,TheDebug:X,Footer:z},methods:{logout(){this.$store.dispatch("logout")},onScroll(e){if("undefined"===typeof window)return;const t=window.pageYOffset||e.target.scrollTop||0;this.fab=t>20},toTop(){this.$vuetify.goTo(0)}},mounted(){console.log("production"),console.log(Object({NODE_ENV:"production",VUE_APP_INDEX_LANG:"en",VUE_APP_INDEX_TITLE:"YD Learning",VUE_APP_INDEX_AUTHOR:"B4rtware, Re-Krass",VUE_APP_INDEX_PUBLISHER:"B4rtware, Re-Krass",VUE_APP_INDEX_COPYRIGHT:"B4rtware, Re-Krass",VUE_APP_INDEX_DESCRIPTION:"Course Management system - YDL",VUE_APP_INDEX_KEYWORDS:"YD, Learning, Course, Management",VUE_APP_INDEX_PAGE_TOPIC:"Dienstleistung",VUE_APP_INDEX_PAGE_TYPE:"Software Download",VUE_APP_INDEX_AUDIENCE:"Alle",VUE_APP_INDEX_OG_TITLE:"Y&D Learning",VUE_APP_INDEX_OG_DESCRIPTION:"Course management system.",VUE_APP_INDEX_OG_TYPE:"image/png",VUE_APP_INDEX_OG_IMAGE_WIDTH:"1280",VUE_APP_INDEX_OG_IMAGE_HEIGHT:"640",VUE_APP_INDEX_OG_IMAGE:"https://ydlearning.github.io/ydl-v2-front/images/ydl-v2-social.png",VUE_APP_INDEX_OG_IMAGE_ALT:"YDL social badge",VUE_APP_INDEX_OG_URL:"https://ydlearning.github.io/ydl-v2-front/",VUE_APP_INDEX_OG_SITE_NAME:"Y&D Learning",VUE_APP_INDEX_TWITTER_CARD:"summary_large_image",VUE_APP_INDEX_TWITTER_IMAGE_ALT:"YDL Social Badge",VUE_APP_INDEX_TWITTER_IMAGE_ALTG:"YDL Social Badge 22222",VUE_APP_PASSWORD_MIN_COUNTER:"8",VUE_APP_PASSWORD_MAX_COUNTER:"128",VUE_APP_PASSWORD_REGEX:"^([a-zA-Z0-9$&+,:;=?@#'<>.^*()%!-]+)$",VUE_APP_PASSWORD_REGEX_SPECIAL_CHARACTERS:"[&+,:;=?@#'<>.^*()%!-]",VUE_APP_EMAIL_MAX_COUNTER:"100",VUE_APP_USERNAME_MIN_COUNTER:"3",VUE_APP_USERNAME_MAX_COUNTER:"40",VUE_APP_FULLNAME_MIN_COUNTER:"0",VUE_APP_FULLNAME_MAX_COUNTER:"50",BASE_URL:"/ydl-v2-front/"}).VUE_APP_API_SHOW_UI)},computed:{...Object(_["b"])(["isLoggedIn","user"]),show_debug_ui(){return"true"==Object({NODE_ENV:"production",VUE_APP_INDEX_LANG:"en",VUE_APP_INDEX_TITLE:"YD Learning",VUE_APP_INDEX_AUTHOR:"B4rtware, Re-Krass",VUE_APP_INDEX_PUBLISHER:"B4rtware, Re-Krass",VUE_APP_INDEX_COPYRIGHT:"B4rtware, Re-Krass",VUE_APP_INDEX_DESCRIPTION:"Course Management system - YDL",VUE_APP_INDEX_KEYWORDS:"YD, Learning, Course, Management",VUE_APP_INDEX_PAGE_TOPIC:"Dienstleistung",VUE_APP_INDEX_PAGE_TYPE:"Software Download",VUE_APP_INDEX_AUDIENCE:"Alle",VUE_APP_INDEX_OG_TITLE:"Y&D Learning",VUE_APP_INDEX_OG_DESCRIPTION:"Course management system.",VUE_APP_INDEX_OG_TYPE:"image/png",VUE_APP_INDEX_OG_IMAGE_WIDTH:"1280",VUE_APP_INDEX_OG_IMAGE_HEIGHT:"640",VUE_APP_INDEX_OG_IMAGE:"https://ydlearning.github.io/ydl-v2-front/images/ydl-v2-social.png",VUE_APP_INDEX_OG_IMAGE_ALT:"YDL social badge",VUE_APP_INDEX_OG_URL:"https://ydlearning.github.io/ydl-v2-front/",VUE_APP_INDEX_OG_SITE_NAME:"Y&D Learning",VUE_APP_INDEX_TWITTER_CARD:"summary_large_image",VUE_APP_INDEX_TWITTER_IMAGE_ALT:"YDL Social Badge",VUE_APP_INDEX_TWITTER_IMAGE_ALTG:"YDL Social Badge 22222",VUE_APP_PASSWORD_MIN_COUNTER:"8",VUE_APP_PASSWORD_MAX_COUNTER:"128",VUE_APP_PASSWORD_REGEX:"^([a-zA-Z0-9$&+,:;=?@#'<>.^*()%!-]+)$",VUE_APP_PASSWORD_REGEX_SPECIAL_CHARACTERS:"[&+,:;=?@#'<>.^*()%!-]",VUE_APP_EMAIL_MAX_COUNTER:"100",VUE_APP_USERNAME_MIN_COUNTER:"3",VUE_APP_USERNAME_MAX_COUNTER:"40",VUE_APP_FULLNAME_MIN_COUNTER:"0",VUE_APP_FULLNAME_MAX_COUNTER:"50",BASE_URL:"/ydl-v2-front/"}).VUE_APP_API_SHOW_UI}}},J=q,Z=(n("cf25"),n("d59d")),Q=n("125a"),ee=n("d732"),te=n("f957"),ne=n("7b53"),ae=n("94e7"),re=n("3190"),ie=n("906a"),oe=Object(E["a"])(J,d,u,!1,null,null,null),se=oe.exports;v()(oe,{VApp:Z["a"],VAppBar:Q["a"],VAppBarNavIcon:ee["a"],VBtn:S["a"],VContent:te["a"],VIcon:P["a"],VList:b["a"],VListItem:A["a"],VListItemIcon:k["a"],VListItemTitle:D["d"],VMenu:ne["a"],VNavigationDrawer:ae["a"],VSpacer:re["a"],VToolbarItems:ie["a"],VToolbarTitle:ie["b"]});var ce=n("92b1"),le=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",{attrs:{"align-center":"","justify-center":""}},[a("v-card",{attrs:{flat:"",color:"transparent"}},[a("v-container",[a("v-flex",[a("v-layout",{attrs:{"align-center":"","justify-center":""}},[a("v-card",{attrs:{flat:"",color:"transparent"}},[a("v-container",[a("v-img",{attrs:{src:n("aa98"),width:"500","aspect-ratio":"1.8888"}})],1)],1)],1),a("h2",{staticClass:"text-center display-3 font-weight-regular page-header"},[e._v("Y&D Learning")]),a("br"),a("br")],1),a("v-flex",[a("h3",{staticClass:"text-center display-2 text-center font-weight-regular"},[e._v("News")])])],1),a("TheNews")],1)],1)},de=[],ue=n("a97b"),_e={components:{TheNews:ue["a"]}},me=_e,he=(n("3654"),n("9561")),pe=n("bf76"),fe=n("fad7"),Ee=n("e3a3"),ge=Object(E["a"])(me,le,de,!1,null,null,null),ve=ge.exports;v()(ge,{VCard:C["a"],VContainer:he["a"],VFlex:pe["a"],VImg:fe["a"],VLayout:Ee["a"]}),a["a"].use(ce["a"]);var Pe=new ce["a"]({routes:[{path:"/",name:"Home",component:ve,meta:{requiresAuth:!1}},{path:"/about",name:"About",component:()=>Promise.all([n.e("chunk-f25dd1f4"),n.e("about")]).then(n.bind(null,"f820"))},{path:"/news",name:"News",component:()=>n.e("chunk-2d20813a").then(n.bind(null,"a2f9"))},{path:"/login",name:"Login",component:()=>Promise.all([n.e("chunk-f25dd1f4"),n.e("chunk-2f7e7446")]).then(n.bind(null,"a55b"))},{path:"/signup",name:"Sign up",component:()=>Promise.all([n.e("chunk-f25dd1f4"),n.e("chunk-063977e0"),n.e("chunk-8385ec60")]).then(n.bind(null,"34c3"))},{path:"/forgot_username",name:"Forgot Username",component:()=>Promise.all([n.e("chunk-f25dd1f4"),n.e("chunk-008d5b12")]).then(n.bind(null,"00fb"))},{path:"/reset_password",name:"Reset Password",component:()=>Promise.all([n.e("chunk-f25dd1f4"),n.e("chunk-44bdf2e4")]).then(n.bind(null,"0813"))},{path:"/dashboard",name:"Dashboard",component:()=>Promise.all([n.e("chunk-f25dd1f4"),n.e("chunk-fce24690")]).then(n.bind(null,"7277"))},{path:"/datenschutzerklaerung",name:"Datenschutzerklärung",component:()=>n.e("chunk-01dd946f").then(n.bind(null,"d1e5"))},{path:"/privacy_policy",name:"Privacy Policy",component:()=>n.e("chunk-7413dd6d").then(n.bind(null,"729e"))},{path:"/impressum",name:"Impressum",component:()=>n.e("chunk-66772a51").then(n.bind(null,"761a"))},{path:"/legal_disclosure",name:"Legal Disclosure",component:()=>n.e("chunk-41cd9a4e").then(n.bind(null,"0db1"))},{path:"/courses",name:"Courses",component:()=>Promise.all([n.e("chunk-f25dd1f4"),n.e("chunk-39bd8dd5")]).then(n.bind(null,"1a2f"))},{path:"/courses/:id",name:"MyCourses",component:()=>n.e("chunk-f55f9c24").then(n.bind(null,"9f72"))},{path:"/courses/:id",name:"MyCoursesEnrolled",props:{showWelcomeScreen:!0},component:()=>n.e("chunk-f55f9c24").then(n.bind(null,"9f72"))},{path:"/calendar",name:"Calendar",component:()=>n.e("chunk-0ebaa984").then(n.bind(null,"ac0f"))},{path:"/profile",name:"Profile",component:()=>n.e("chunk-2d217357").then(n.bind(null,"c66d"))},{path:"/settings",name:"Settings",component:()=>n.e("chunk-2d0b3289").then(n.bind(null,"26d3")),children:[{path:"",name:"Edit profile",component:()=>Promise.all([n.e("chunk-f25dd1f4"),n.e("chunk-198c5bcf")]).then(n.bind(null,"1f82"))},{path:"change-password",name:"Change password",component:()=>Promise.all([n.e("chunk-f25dd1f4"),n.e("chunk-063977e0"),n.e("chunk-3bbd2fb2")]).then(n.bind(null,"b709"))},{path:"change-email",name:"E-mail settings",component:()=>Promise.all([n.e("chunk-f25dd1f4"),n.e("chunk-42a56360")]).then(n.bind(null,"aa06"))}]},{path:"/mycourses",name:"My-Courses",component:()=>Promise.all([n.e("chunk-f25dd1f4"),n.e("about")]).then(n.bind(null,"11c7"))}]});a["a"].use(_["a"]);var be=new _["a"].Store({state:{isLoggedIn:!1,user:{username:"Max-Mustermann",name:"Max Mustermann",email:{address:"max.mustermann@muster.mann",isVerified:!1,status:"public"},password:"AbCd1234+-",role:"Student"},my_courses:[{name:"Computergraphics",term:"WS",start:"2019-08-31T22:34:54+0000",end:"2020-10-31T22:34:54+0000"},{name:"Analysis 1",term:"WS",start:"2019-08-31T22:34:54+0000",end:"2020-10-31T22:34:54+0000"},{name:"Analysis 2",term:"WS",start:"2019-08-31T22:34:54+0000",end:"2020-10-31T22:34:54+0000"},{name:"Analysis 3",term:"WS",start:"2019-08-31T22:34:54+0000",end:"2020-10-31T22:34:54+0000"},{name:"Linear Algebra 1",term:"WS",start:"2019-08-31T22:34:54+0000",end:"2020-10-31T22:34:54+0000"},{name:"Linear Algebra 2",term:"WS",start:"2019-08-31T22:34:54+0000",end:"2020-10-31T22:34:54+0000"},{name:"Computergraphics",term:"WS",start:"2019-08-31T22:34:54+0000",end:"2020-10-31T22:34:54+0000"},{name:"Analysis 1",term:"WS",start:"2019-08-31T22:34:54+0000",end:"2020-10-31T22:34:54+0000"},{name:"Analysis 2",term:"WS",start:"2019-08-31T22:34:54+0000",end:"2020-10-31T22:34:54+0000"},{name:"Analysis 3",term:"WS",start:"2019-08-31T22:34:54+0000",end:"2020-10-31T22:34:54+0000"},{name:"Linear Algebra 1",term:"WS",start:"2019-08-31T22:34:54+0000",end:"2020-10-31T22:34:54+0000"},{name:"Linear Algebra 2",term:"WS",start:"2019-08-31T22:34:54+0000",end:"2020-10-31T22:34:54+0000"},{name:"Computergraphics",term:"WS",start:"2019-08-31T22:34:54+0000",end:"2020-10-31T22:34:54+0000"},{name:"Analysis 1",term:"WS",start:"2019-08-31T22:34:54+0000",end:"2020-10-31T22:34:54+0000"},{name:"Analysis 2",term:"WS",start:"2019-08-31T22:34:54+0000",end:"2020-10-31T22:34:54+0000"},{name:"Analysis 3",term:"WS",start:"2019-08-31T22:34:54+0000",end:"2020-10-31T22:34:54+0000"},{name:"Linear Algebra 1",term:"WS",start:"2019-08-31T22:34:54+0000",end:"2020-10-31T22:34:54+0000"},{name:"Linear Algebra 2",term:"WS",start:"2019-08-31T22:34:54+0000",end:"2020-10-31T22:34:54+0000"},{name:"Computergraphics",term:"WS",start:"2019-08-31T22:34:54+0000",end:"2020-10-31T22:34:54+0000"},{name:"Analysis 1",term:"WS",start:"2019-08-31T22:34:54+0000",end:"2020-10-31T22:34:54+0000"},{name:"Analysis 2",term:"WS",start:"2019-08-31T22:34:54+0000",end:"2020-10-31T22:34:54+0000"},{name:"Analysis 3",term:"WS",start:"2019-08-31T22:34:54+0000",end:"2020-10-31T22:34:54+0000"},{name:"Linear Algebra 1",term:"WS",start:"2019-08-31T22:34:54+0000",end:"2020-10-31T22:34:54+0000"},{name:"Linear Algebra 2",term:"WS",start:"2019-08-31T22:34:54+0000",end:"2020-10-31T22:34:54+0000"}],current_course:{name:"Computergraphics",term:"WS",start:"2019-08-31T22:34:54+0000",end:"2020-10-31T22:34:54+0000",content:{announcement:{body:{content:"Thats Content inside the Announcement!",last_edit:"2019-08-31T22:34:54+0000"},resources:[{name:"Announcements",category:"link",type:"forum",download:null},{name:"Studentforum",category:"link",type:"forum",download:null},{name:"Script",category:"script",type:"pdf",uploaded:"2019-08-27T22:34:54+0000",last_edit:"2019-08-28T22:34:54+0000",download:"#"},{name:"OpenGL Cheat Sheet (v2)",category:null,type:"pdf",uploaded:"2019-08-29T22:34:54+0000",last_edit:"2019-08-30T22:34:54+0000",download:"#"}]},contents:[{week:"29.03 - 06.4",body:null,resources:[{name:"CG Lecture 00: Begin",category:"lecture",type:"pdf",uploaded:"2019-08-29T22:34:54+0000",last_edit:"2019-08-29T22:34:54+0000",download:"#"},{name:"CG Lecture 00",category:"movie",type:"movie",uploaded:"2019-08-29T22:34:54+0000",last_edit:"2019-08-29T22:34:54+0000",download:"#"},{name:"CG Quiz for Lecture 00",category:"interactive learning",type:"quiz",uploaded:"2019-08-29T22:34:54+0000",last_edit:"2019-08-29T22:34:54+0000",download:"#"}]},{week:"12.04 - 19.04",body:null,resources:[{name:"CG Lecture 01: OpenGL Pipeline",category:"lecture",type:"pdf",uploaded:"2019-08-29T22:34:54+0000",last_edit:"2019-08-29T22:34:54+0000",download:"#"},{name:"CG Lecture 01",category:"movie",type:"movie",uploaded:"2019-08-29T22:34:54+0000",last_edit:"2019-08-29T22:34:54+0000",download:"#"},{name:"CG Quiz for Lecture 01",category:"interactive learning",type:"quiz",uploaded:"2019-08-29T22:34:54+0000",last_edit:"2019-08-29T22:34:54+0000",download:"#"},{name:"Reference Card for OpenGL Pipeline",category:"cheat sheet",type:"pdf",uploaded:"2019-08-29T22:34:54+0000",last_edit:"2019-08-29T22:34:54+0000",download:"#"}]}]}}},mutations:{login(e){e.isLoggedIn=!0},logout(e){e.isLoggedIn=!1}},actions:{login(e){e.commit("login")},logout(e){e.commit("logout")}}});Date.prototype.addMins=function(e){var t=new Date(this.valueOf());return t.setMinutes(t.getMinutes()+1*e),t},Date.prototype.addDays=function(e){var t=new Date(this.valueOf());return t.setDate(t.getDate()+1*e),t},Date.prototype.addHours=function(e){var t=new Date(this.valueOf());return t.setHours(t.getHours()+1*e),t},Date.prototype.addMonths=function(e){var t=new Date(this.valueOf());return t.setMonth(t.getMonth()+1*e),t},Date.prototype.daysFromNow=function(){var e=this,t=new Date,n=e.getTime()-t.getTime();return Math.ceil(n/864e5)};const Ae=["th","st","nd","rd"],Te=["January","February","March","April","May","June","July","August","September","October","November","December"],De=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];Date.prototype.format=function(e){const t=this.getHours(),n=this.getDate();return e||(e="MM/DD/YYYY"),e.indexOf("YYYY")>-1?e=e.replace("YYYY",this.getFullYear().toString()):e.indexOf("YY")>-1&&(e=e.replace("YY",this.getFullYear().toString().substr(2,2))),e.indexOf("HH")>-1&&(e=e.replace("HH",("0"+t).slice(-2))),e.indexOf("H")>-1&&(e=e.replace("H",t.toString())),e.indexOf("hh")>-1&&(e=e.replace("hh",("0"+(t%12||12)).slice(-2))),e.indexOf("h")>-1&&(e=e.replace("h",t%12||12)),e.indexOf("mm")>-1&&(e=e.replace("mm",("0"+this.getMinutes()).slice(-2))),e.indexOf("m")>-1&&(e=e.replace("m",this.getMinutes())),e.indexOf("ss")>-1&&(e=e.replace("ss",("0"+this.getSeconds()).slice(-2))),e.indexOf("s")>-1&&(e=e.replace("s",this.getSeconds())),e.indexOf("SSS")>-1&&(e=e.replace("SSS",("00"+this.getMilliseconds()).slice(-3))),e.indexOf("DD")>-1&&(e=e.replace("DD",("0"+n.toString()).slice(-2))),e.indexOf("D")>-1&&(e=e.replace("D",n.toString())),e.indexOf("o")>-1&&(e=e.replace("o",Ae[(n-20)%10]||Ae[n]||Ae[0])),e.indexOf("a")>-1&&(e=e.replace("a",t>11?"pm":"am")),e.indexOf("A")>-1&&(e=e.replace("A",t>11?"PM":"AM")),e.indexOf("MMMM")>-1&&(e=e.replace("MMMM",Te[this.getMonth()])),e.indexOf("MMM")>-1&&(e=e.replace("MMM",Te[this.getMonth()].substr(0,3))),e.indexOf("MM")>-1&&(e=e.replace("MM",("0"+(this.getMonth()+1)).slice(-2))),e.indexOf("dddd")>-1&&(e=e.replace("dddd",De[this.getDay()])),e.indexOf("ddd")>-1&&(e=e.replace("ddd",De[this.getDay()].substr(0,3))),e};Date;a["a"].config.productionTip=!1,new a["a"]({router:Pe,store:be,veevalidate:l,vuetify:s,render:e=>e(se)}).$mount("#app")},6304:function(e,t,n){},"6cbc":function(e,t,n){},"7a26":function(e,t,n){},"967b":function(e){e.exports=JSON.parse('{"data":{"allNews":{"news":[{"title":"***REMOVED***","content":"Dear YDL-User, <br><br> ***REMOVED*** <br><br>Regards,<br>YDL-Team","date":"2019-08-01T13:49:42+02:00","User":{"username":"YDL Management"}},{"title":"***REMOVED***","content":"Dear YDL-User, <br><br> ***REMOVED*** <br><br>Regards,<br>YDL-Team","date":"2019-03-26T16:47:37+01:00","User":{"username":"YDL Management"}},{"title":"***REMOVED***","content":"Dear YDL-User, <br><br>***REMOVED*** <br><br>Kind Regards,<br>YDL-Team","date":"2019-03-15T14:08:35+01:00","User":{"username":"***REMOVED***"}}]}}}')},a383:function(e,t,n){"use strict";var a=n("7a26"),r=n.n(a);r.a},a97b:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"remove-top-padding",attrs:{"max-width":"850",flat:"",color:"transparent"}},[n("v-card-text",{staticClass:"remove-top-padding"},[n("NewsList")],1)],1)},r=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"remove-top-padding"},e._l(e.news,function(e){return n("v-row",{key:e.title,staticClass:"remove-top-padding"},[n("v-col",{attrs:{"max-width":"800"}},[n("NewsListItem",{attrs:{title:e.title,content:e.content,author:e.User.username,date:e.date}})],1)],1)}),1)},o=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("v-toolbar",{attrs:{color:"primary",flat:""}},[n("v-list-item",{staticClass:"pa-0"},[n("v-list-item-content",[n("v-list-item-title",{staticClass:"headline"},[e._v(e._s(e.title))]),n("v-list-item-subtitle",[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",[e._v(e._s(e.author))]),n("v-spacer"),n("v-col",{staticClass:"text-right"},[e._v(e._s(new Date(e.date).format("MM/DD/YYYY hh:mm A")))])],1)],1)],1)],1)],1),n("v-card-text",[n("div",{domProps:{innerHTML:e._s(e.content)}})])],1)},c=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{attrs:{flat:"",tile:""}},[n("v-card-text",[n("vue-editor",{model:{value:e.content,callback:function(t){e.content=t},expression:"content"}})],1)],1)},d=[],u=n("d6c9"),_={name:"Vue2Editor",data:()=>({content:"<h1>initial content</h1>"}),components:{VueEditor:u["VueEditor"]}},m=_,h=(n("5304"),n("d9b7")),p=n("53f2"),f=n.n(p),E=n("0a8f"),g=n("9fa3"),v=Object(h["a"])(m,l,d,!1,null,null,null),P=v.exports;f()(v,{VCard:E["a"],VCardText:g["b"]});var b={name:"NewsListITem",components:{Vue2Editor:P},props:{title:{type:String,default:"title"},content:{type:String,default:"content"},author:{type:String,default:"author"},date:{type:String,default:""}}},A=b,T=n("baa6"),D=n("542b"),I=n("c071"),y=n("e640"),V=n("3190"),N=n("43eb"),U=Object(h["a"])(A,s,c,!1,null,null,null),L=U.exports;f()(U,{VCard:E["a"],VCardText:g["b"],VCol:T["a"],VListItem:D["a"],VListItemContent:I["b"],VListItemSubtitle:I["c"],VListItemTitle:I["d"],VRow:y["a"],VSpacer:V["a"],VToolbar:N["a"]});var O=n("967b"),S={name:"NewsList",components:{NewsListItem:L},data(){return{news:[]}},mounted(){this.news=O.data.allNews.news}},C=S,k=(n("a383"),n("9561")),w=Object(h["a"])(C,i,o,!1,null,null,null),M=w.exports;f()(w,{VCol:T["a"],VContainer:k["a"],VRow:y["a"]});var R={name:"TheNews",components:{NewsList:M}},X=R,x=(n("a98f"),Object(h["a"])(X,a,r,!1,null,null,null));t["a"]=x.exports;f()(x,{VCard:E["a"],VCardText:g["b"]})},a98f:function(e,t,n){"use strict";var a=n("c1a6"),r=n.n(a);r.a},aa98:function(e,t,n){e.exports=n.p+"src/assets/img/YDL-Logo.2ce01416.svg"},c1a6:function(e,t,n){},cf25:function(e,t,n){"use strict";var a=n("6304"),r=n.n(a);r.a}});
//# sourceMappingURL=app.42179f08.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5e586bcc"],{"0804":function(t,e,a){"use strict";a("e64b");var s=a("be01");e["a"]=s["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render(t){let e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:{"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical,...this.themeClasses},attrs:{role:"separator","aria-orientation":e,...this.$attrs},on:this.$listeners})}})},"15df":function(t,e,a){var s={"./0.jpg":"9c76","./1.jpg":"f50a","./2.jpg":"b23e","./3.jpg":"b511","./4.jpg":"1f61","./5.jpg":"df36","./6.jpg":"8172","./7.jpg":"fb04"};function i(t){var e=n(t);return a(e)}function n(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}i.keys=function(){return Object.keys(s)},i.resolve=n,t.exports=i,i.id="15df"},"1f61":function(t,e,a){t.exports=a.p+"src/assets/img/4.df2a4a2e.jpg"},2740:function(t){t.exports=JSON.parse('{"data":{"allTasks":[{"name":"Upload Exercise 1","course_name":"Management, Practice and Law","due_to":"2019-08-17T17:03:00","type":"Assignment"},{"name":"Quiz 2","course_name":"Mathematics","due_to":"2019-08-20T11:20:00","type":"Quiz"},{"name":"Upload Exercise 2","course_name":"Management, Practice and Law","due_to":"2019-08-20T01:03:00","type":"Assignment"}]}}')},"2f49":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-card-title",[a("span",{staticClass:"title"},[t._v(t._s(t.title))]),a("v-spacer"),a("v-btn",{attrs:{icon:"",text:"",color:"blue"}},[a("v-icon",[t._v(t._s(t.icon))])],1)],1),t._t("default")],2)},i=[],n={name:"BaseDashboardItem",props:{title:{type:String,default:"<Title>"},icon:{type:String,default:"mdi-window-restore"}}},r=n,o=a("d9b7"),l=a("53f2"),c=a.n(l),u=a("d537"),m=a("0a8f"),d=a("9fa3"),f=a("d958"),p=a("3190"),v=Object(o["a"])(r,s,i,!1,null,null,null);e["a"]=v.exports;c()(v,{VBtn:u["a"],VCard:m["a"],VCardTitle:d["c"],VIcon:f["a"],VSpacer:p["a"]})},"3ae3":function(t){t.exports=JSON.parse('{"data":{"allNotifications":[{"subject":"Management, Practice and Law","headline":"Correction of the 1st homework assignment","date":"2019-08-10T20:20:38"},{"subject":"Principles of Construction","headline":"Information on the written exam","date":"2019-08-15T10:20:38"},{"subject":"Principles of Structural Design","headline":"Survey for all newcomers","date":"2019-08-18T20:20:38"}]}}')},7277:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[a("v-row",{staticClass:"ma-0"},[a("v-col",{attrs:{cols:"12",sm:"9"}},[a("TheCourseList")],1),a("v-col",{attrs:{cols:"12",sm:"3"}},[a("TheNotification",{staticClass:"mb-4"}),a("TheTask")],1)],1)],1)},i=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("BaseDashboardItem",{attrs:{title:"Notification"}},[a("NotificationList")],1)},r=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-list",{attrs:{dense:""}},[a("v-list-item-group",[t._l(t.notifications,function(e,s){return[a("NotificationListItem",{attrs:{subject:e.subject,headline:e.headline,date:e.date}}),s<t.notifications.length-1?a("v-divider"):t._e()]})],2)],1)},l=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(t.subject))]),a("v-list-item-subtitle",[t._v(t._s(t.headline))])],1),a("v-list-item-action",[a("v-list-item-action-text",[t._v(t._s(new Date(t.date).format("MM/DD/YYYY")))]),a("v-list-item-action-text",[t._v(t._s(new Date(t.date).format("hh:mm A")))])],1)],1)},u=[],m={props:{subject:{type:String,default:"subject"},headline:{type:String,default:"headline"},date:{type:String,default:"date"}}},d=m,f=a("d9b7"),p=a("53f2"),v=a.n(p),h=a("542b"),b=a("2425"),g=a("c071"),_=Object(f["a"])(d,c,u,!1,null,null,null),T=_.exports;v()(_,{VListItem:h["a"],VListItemAction:b["a"],VListItemActionText:g["a"],VListItemContent:g["b"],VListItemSubtitle:g["c"],VListItemTitle:g["d"]});var V=a("3ae3"),j={name:"NotificationList",components:{NotificationListItem:T},data(){return{notifications:[]}},mounted(){this.notifications=V.data.allNotifications}},x=j,I=a("0804"),L=a("9802"),C=a("1a87"),y=Object(f["a"])(x,o,l,!1,null,null,null),w=y.exports;v()(y,{VDivider:I["a"],VList:L["a"],VListItemGroup:C["a"]});var k=a("2f49"),S={name:"TheNotification",components:{NotificationList:w,BaseDashboardItem:k["a"]}},N=S,D=Object(f["a"])(N,n,r,!1,null,null,null),$=D.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("BaseDashboardItem",{attrs:{title:"Tasks"}},[a("TaskList")],1)},E=[],B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-list",{attrs:{dense:""}},[t._l(t.tasks,function(e,s){return[a("TaskListItem",{attrs:{courseName:e.course_name,name:e.name,dueTo:e.due_to,type:e.type}}),s<t.tasks.length-1?a("v-divider"):t._e()]})],2)},M=[],A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(t.courseName))]),a("v-list-item-subtitle",[t._v(t._s(t.name))])],1),a("v-list-item-action",[a("v-list-item-action-text",[a("span",[t._v(t._s(t.getTimeRemainingString(t.dueTo)))]),a("span",{staticClass:"pl-2"},[a("v-btn",{attrs:{small:"",icon:""}},["Assignment"===t.type?[a("v-icon",{attrs:{color:"blue"}},[t._v("mdi-upload")])]:"Quiz"===t.type?[a("v-icon",{attrs:{color:"blue"}},[t._v("mdi-arrow-right-bold")])]:t._e()],2)],1)])],1)],1)},z=[],P={name:"TaskListItem",props:{name:{type:String,default:"Name"},courseName:{type:String,default:"Course Name"},dueTo:{type:String,default:"Due To"},type:{type:String,default:""}},methods:{getTimeRemainingString(t){var e=Date.now(),a=new Date(t),s=a-e,i="ms",n=s;s>31556952e3?(n/=31556952e3,i="years"):s>864e5?(n/=864e5,i="days"):s>36e5?(n/=36e5,i="hours"):s>6e4?(n/=6e4,i="mins"):s>1e3&&(n/=1e3,i="secs");var r=Math.floor(n);return 1===r&&s>1e3&&(i=i.substring(0,i.length-1)),`${r} ${i}`}}},J=P,R=a("d537"),U=a("d958"),Y=Object(f["a"])(J,A,z,!1,null,null,null),F=Y.exports;v()(Y,{VBtn:R["a"],VIcon:U["a"],VListItem:h["a"],VListItemAction:b["a"],VListItemActionText:g["a"],VListItemContent:g["b"],VListItemSubtitle:g["c"],VListItemTitle:g["d"]});var Q=a("2740"),G={name:"TaskList",data(){return{tasks:[]}},components:{TaskListItem:F},mounted(){this.tasks=Q.data.allTasks}},q=G,H=Object(f["a"])(q,B,M,!1,null,null,null),K=H.exports;v()(H,{VDivider:I["a"],VList:L["a"]});var W={name:"TheTask",components:{BaseDashboardItem:k["a"],TaskList:K}},X=W,Z=Object(f["a"])(X,O,E,!1,null,null,null),tt=Z.exports,et=a("a0e1"),at={components:{TheNotification:$,TheTask:tt,TheCourseList:et["a"]},mounted(){console.debug(this.$route.name)}},st=at,it=a("baa6"),nt=a("9561"),rt=a("e640"),ot=Object(f["a"])(st,s,i,!1,null,null,null);e["default"]=ot.exports;v()(ot,{VCol:it["a"],VContainer:nt["a"],VRow:rt["a"]})},8172:function(t,e,a){t.exports=a.p+"src/assets/img/6.ecd70bc3.jpg"},"9c76":function(t,e,a){t.exports=a.p+"src/assets/img/0.c0120c10.jpg"},a0e1:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("BaseDashboardItem",{attrs:{title:"Favorite Courses"}},[a("v-container",{attrs:{fluid:""}},[a("v-row",[a("v-col",[a("v-toolbar",[a("v-text-field",{attrs:{"prepend-icon":"mdi-magnify","hide-details":"",clearable:"",label:"Search",value:"Mana"}})],1)],1)],1),a("v-row",t._l(t.courses,function(t){return a("v-col",{key:t.name,attrs:{cols:"12",sm:"6",lg:"3"}},[a("CourseItem",{attrs:{header:t.name}})],1)}),1)],1)],1)},i=[],n=a("2f49"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-card",[s("v-img",{attrs:{src:a("15df")("./"+Math.floor(7*Math.random()+0)+".jpg"),height:"130"}},[s("v-card-title",{staticClass:"align-start fill-height justify-end"},[s("v-btn",{attrs:{icon:""}},[s("v-icon",[t._v("mdi-message")])],1)],1)],1),s("v-card-actions",[t._v(t._s(t.header)),s("v-spacer"),s("v-btn",{attrs:{icon:"",small:""}},[s("v-icon",{attrs:{size:"16"}},[t._v("mdi-star")])],1)],1)],1)},o=[],l={name:"CourseItem",props:{header:{type:String,default:"header"}}},c=l,u=a("d9b7"),m=a("53f2"),d=a.n(m),f=a("d537"),p=a("0a8f"),v=a("9fa3"),h=a("d958"),b=a("fad7"),g=a("3190"),_=Object(u["a"])(c,r,o,!1,null,null,null),T=_.exports;d()(_,{VBtn:f["a"],VCard:p["a"],VCardActions:v["a"],VCardTitle:v["c"],VIcon:h["a"],VImg:b["a"],VSpacer:g["a"]});var V={name:"TheCourseList",components:{BaseDashboardItem:n["a"],CourseItem:T},props:{courses:{type:Array,default:()=>[]}}},j=V,x=a("baa6"),I=a("9561"),L=a("e640"),C=a("be99"),y=a("43eb"),w=Object(u["a"])(j,s,i,!1,null,null,null);e["a"]=w.exports;d()(w,{VCol:x["a"],VContainer:I["a"],VRow:L["a"],VTextField:C["a"],VToolbar:y["a"]})},b23e:function(t,e,a){t.exports=a.p+"src/assets/img/2.59c529c2.jpg"},b511:function(t,e,a){t.exports=a.p+"src/assets/img/3.27f6bd27.jpg"},df36:function(t,e,a){t.exports=a.p+"src/assets/img/5.46b33068.jpg"},e64b:function(t,e,a){},f50a:function(t,e,a){t.exports=a.p+"src/assets/img/1.581ab1ea.jpg"},fb04:function(t,e,a){t.exports=a.p+"src/assets/img/7.ef42f670.jpg"}}]);
//# sourceMappingURL=chunk-5e586bcc.1d1122f2.js.map
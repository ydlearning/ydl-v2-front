(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fce24690"],{"15df":function(t,e,a){var s={"./0.jpg":"9c76","./1.jpg":"f50a","./2.jpg":"b23e","./3.jpg":"b511","./4.jpg":"1f61","./5.jpg":"df36","./6.jpg":"8172","./7.jpg":"fb04"};function n(t){var e=i(t);return a(e)}function i(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}n.keys=function(){return Object.keys(s)},n.resolve=i,t.exports=n,n.id="15df"},"1f61":function(t,e,a){t.exports=a.p+"src/assets/img/4.df2a4a2e.jpg"},2740:function(t){t.exports=JSON.parse('{"data":{"allTasks":[{"name":"Upload Exercise 1","course_name":"Management, Practice and Law","due_to":"2019-08-17T17:03:00","type":"Assignment"},{"name":"Quiz 2","course_name":"Mathematics","due_to":"2019-08-20T11:20:00","type":"Quiz"},{"name":"Upload Exercise 2","course_name":"Management, Practice and Law","due_to":"2019-08-20T01:03:00","type":"Assignment"}]}}')},"2f49":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-card-title",[a("span",{staticClass:"title"},[t._v(t._s(t.title))]),a("v-spacer"),a("v-btn",{attrs:{icon:"",text:"",color:"blue"}},[a("v-icon",[t._v(t._s(t.icon))])],1)],1),t._t("default")],2)},n=[],i={name:"BaseDashboardItem",props:{title:{type:String,default:"<Title>"},icon:{type:String,default:"mdi-window-restore"}}},r=i,o=a("d9b7"),c=a("53f2"),l=a.n(c),u=a("d537"),m=a("0a8f"),d=a("9fa3"),f=a("d958"),p=a("3190"),v=Object(o["a"])(r,s,n,!1,null,null,null);e["a"]=v.exports;l()(v,{VBtn:u["a"],VCard:m["a"],VCardTitle:d["c"],VIcon:f["a"],VSpacer:p["a"]})},"3ae3":function(t){t.exports=JSON.parse('{"data":{"allNotifications":[{"subject":"Management, Practice and Law","headline":"Correction of the 1st homework assignment","date":"2019-08-10T20:20:38"},{"subject":"Principles of Construction","headline":"Information on the written exam","date":"2019-08-15T10:20:38"},{"subject":"Principles of Structural Design","headline":"Survey for all newcomers","date":"2019-08-18T20:20:38"}]}}')},7277:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[a("v-row",{staticClass:"ma-0"},[a("v-col",{attrs:{cols:"12",sm:"9"}},[a("TheCourseList",{attrs:{courses:t.my_courses.slice(0,8)}})],1),a("v-col",{attrs:{cols:"12",sm:"3"}},[a("TheNotification",{staticClass:"mb-4"}),a("TheTask")],1)],1)],1)},n=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("BaseDashboardItem",{attrs:{title:"Notification"}},[a("NotificationList")],1)},r=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-list",{attrs:{dense:""}},[a("v-list-item-group",[t._l(t.notifications,function(e,s){return[a("NotificationListItem",{attrs:{subject:e.subject,headline:e.headline,date:e.date}}),s<t.notifications.length-1?a("v-divider"):t._e()]})],2)],1)},c=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(t.subject))]),a("v-list-item-subtitle",[t._v(t._s(t.headline))])],1),a("v-list-item-action",[a("v-list-item-action-text",[t._v(t._s(new Date(t.date).format("MM/DD/YYYY")))]),a("v-list-item-action-text",[t._v(t._s(new Date(t.date).format("hh:mm A")))])],1)],1)},u=[],m={props:{subject:{type:String,default:"subject"},headline:{type:String,default:"headline"},date:{type:String,default:"date"}}},d=m,f=a("d9b7"),p=a("53f2"),v=a.n(p),h=a("542b"),b=a("2425"),_=a("c071"),g=Object(f["a"])(d,l,u,!1,null,null,null),T=g.exports;v()(g,{VListItem:h["a"],VListItemAction:b["a"],VListItemActionText:_["a"],VListItemContent:_["b"],VListItemSubtitle:_["c"],VListItemTitle:_["d"]});var V=a("3ae3"),j={name:"NotificationList",components:{NotificationListItem:T},data(){return{notifications:[]}},mounted(){this.notifications=V.data.allNotifications}},x=j,L=a("0804"),I=a("9802"),C=a("1a87"),y=Object(f["a"])(x,o,c,!1,null,null,null),w=y.exports;v()(y,{VDivider:L["a"],VList:I["a"],VListItemGroup:C["a"]});var k=a("2f49"),S={name:"TheNotification",components:{NotificationList:w,BaseDashboardItem:k["a"]}},D=S,N=Object(f["a"])(D,i,r,!1,null,null,null),O=N.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("BaseDashboardItem",{attrs:{title:"Tasks"}},[a("TaskList")],1)},$=[],M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-list",{attrs:{dense:""}},[t._l(t.tasks,function(e,s){return[a("TaskListItem",{attrs:{courseName:e.course_name,name:e.name,dueTo:e.due_to,type:e.type}}),s<t.tasks.length-1?a("v-divider"):t._e()]})],2)},A=[],B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(t.courseName))]),a("v-list-item-subtitle",[t._v(t._s(t.name))])],1),a("v-list-item-action",[a("v-list-item-action-text",[a("span",[t._v(t._s(t.getTimeRemainingString(t.dueTo)))]),a("span",{staticClass:"pl-2"},[a("v-btn",{attrs:{small:"",icon:""}},["Assignment"===t.type?[a("v-icon",{attrs:{color:"blue"}},[t._v("mdi-upload")])]:"Quiz"===t.type?[a("v-icon",{attrs:{color:"blue"}},[t._v("mdi-arrow-right-bold")])]:t._e()],2)],1)])],1)],1)},P=[],z={name:"TaskListItem",props:{name:{type:String,default:"Name"},courseName:{type:String,default:"Course Name"},dueTo:{type:String,default:"Due To"},type:{type:String,default:""}},methods:{getTimeRemainingString(t){var e=Date.now(),a=new Date(t),s=a-e,n="ms",i=s;s>31556952e3?(i/=31556952e3,n="years"):s>864e5?(i/=864e5,n="days"):s>36e5?(i/=36e5,n="hours"):s>6e4?(i/=6e4,n="mins"):s>1e3&&(i/=1e3,n="secs");var r=Math.floor(i);return 1===r&&s>1e3&&(n=n.substring(0,n.length-1)),`${r} ${n}`}}},J=z,R=a("d537"),U=a("d958"),Y=Object(f["a"])(J,B,P,!1,null,null,null),F=Y.exports;v()(Y,{VBtn:R["a"],VIcon:U["a"],VListItem:h["a"],VListItemAction:b["a"],VListItemActionText:_["a"],VListItemContent:_["b"],VListItemSubtitle:_["c"],VListItemTitle:_["d"]});var Q=a("2740"),G={name:"TaskList",data(){return{tasks:[]}},components:{TaskListItem:F},mounted(){this.tasks=Q.data.allTasks}},H=G,q=Object(f["a"])(H,M,A,!1,null,null,null),K=q.exports;v()(q,{VDivider:L["a"],VList:I["a"]});var W={name:"TheTask",components:{BaseDashboardItem:k["a"],TaskList:K}},X=W,Z=Object(f["a"])(X,E,$,!1,null,null,null),tt=Z.exports,et=a("a0e1"),at=a("2ba1"),st={name:"Dashboard",components:{TheNotification:O,TheTask:tt,TheCourseList:et["a"]},computed:Object(at["b"])(["my_courses"]),mounted(){console.debug(this.$route.name)}},nt=st,it=a("baa6"),rt=a("9561"),ot=a("e640"),ct=Object(f["a"])(nt,s,n,!1,null,null,null);e["default"]=ct.exports;v()(ct,{VCol:it["a"],VContainer:rt["a"],VRow:ot["a"]})},8172:function(t,e,a){t.exports=a.p+"src/assets/img/6.ecd70bc3.jpg"},"9c76":function(t,e,a){t.exports=a.p+"src/assets/img/0.c0120c10.jpg"},a0e1:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("BaseDashboardItem",{attrs:{title:"Favorite Courses"}},[a("v-container",{attrs:{fluid:""}},[a("v-row",[a("v-col",[a("v-toolbar",[a("v-text-field",{attrs:{"prepend-icon":"mdi-magnify","hide-details":"",clearable:"",label:"Search",value:"Mana"},on:{input:t.searchText}})],1)],1)],1),a("v-row",t._l(t.filteredCourses,function(t){return a("v-col",{key:t.name,attrs:{cols:"12",sm:"6",lg:"3"}},[a("CourseItem",{attrs:{header:t.search_name}})],1)}),1)],1)],1)},n=[],i=a("2f49"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-card",[s("v-img",{attrs:{src:a("15df")("./"+Math.floor(7*Math.random()+0)+".jpg"),height:"130"}},[s("v-card-title",{staticClass:"align-start fill-height justify-end"},[s("v-btn",{attrs:{icon:""}},[s("v-icon",[t._v("mdi-message")])],1)],1)],1),s("v-card-actions",{domProps:{innerHTML:t._s(t.header)}},[s("v-spacer"),s("v-btn",{attrs:{icon:"",small:""}},[s("v-icon",{attrs:{size:"16"}},[t._v("mdi-star")])],1)],1)],1)},o=[],c={name:"CourseItem",props:{header:{type:String,default:"header"}}},l=c,u=a("d9b7"),m=a("53f2"),d=a.n(m),f=a("d537"),p=a("0a8f"),v=a("9fa3"),h=a("d958"),b=a("fad7"),_=a("3190"),g=Object(u["a"])(l,r,o,!1,null,null,null),T=g.exports;d()(g,{VBtn:f["a"],VCard:p["a"],VCardActions:v["a"],VCardTitle:v["c"],VIcon:h["a"],VImg:b["a"],VSpacer:_["a"]});var V={name:"TheCourseList",data(){return{filteredCourses:this.courses.filter(t=>{return t.search_name=t.name,!0})}},components:{BaseDashboardItem:i["a"],CourseItem:T},methods:{searchText(t){this.filteredCourses=this.courses.filter(e=>{let a=e.name.includes(t);return e.search_name=a?e.name.replace(t,"<mark>"+t+"</mark>"):e.name,a})}},props:{courses:{type:Array,default:()=>[]}}},j=V,x=a("baa6"),L=a("9561"),I=a("e640"),C=a("be99"),y=a("43eb"),w=Object(u["a"])(j,s,n,!1,null,null,null);e["a"]=w.exports;d()(w,{VCol:x["a"],VContainer:L["a"],VRow:I["a"],VTextField:C["a"],VToolbar:y["a"]})},b23e:function(t,e,a){t.exports=a.p+"src/assets/img/2.59c529c2.jpg"},b511:function(t,e,a){t.exports=a.p+"src/assets/img/3.27f6bd27.jpg"},df36:function(t,e,a){t.exports=a.p+"src/assets/img/5.46b33068.jpg"},f50a:function(t,e,a){t.exports=a.p+"src/assets/img/1.581ab1ea.jpg"},fb04:function(t,e,a){t.exports=a.p+"src/assets/img/7.ef42f670.jpg"}}]);
//# sourceMappingURL=chunk-fce24690.08ea17e2.js.map
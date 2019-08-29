(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-df020cee"],{"205b":function(e,t,r){"use strict";r("7497");var s=r("d9cc"),a=r("8a04"),o=r("e75d"),i=r("aa40"),n=r("f658"),l=r("5092"),c=r("6015"),d=r("0967");t["a"]=Object(c["a"])(s["a"],i["a"],l["a"]).extend({name:"v-alert",props:{border:{type:String,validator(e){return["top","right","bottom","left"].includes(e)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,icon:{default:"",type:[Boolean,String],validator(e){return"string"===typeof e||!1===e}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator(e){return["info","error","success","warning"].includes(e)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder(){if(!this.border)return null;let e={staticClass:"v-alert__border",class:{[`v-alert__border--${this.border}`]:!0}};return this.coloredBorder&&(e=this.setBackgroundColor(this.computedColor,e),e.class["v-alert__border--has-color"]=!0),this.$createElement("div",e)},__cachedDismissible(){if(!this.dismissible)return null;const e=this.iconColor;return this.$createElement(a["a"],{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:()=>this.isActive=!1}},[this.$createElement(o["a"],{props:{color:e}},"$vuetify.icons.cancel")])},__cachedIcon(){return this.computedIcon?this.$createElement(o["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes(){const e={...s["a"].options.computed.classes.call(this),"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text};return this.border&&(e[`v-alert--border-${this.border}`]=!0),e},computedColor(){return this.color||this.type},computedIcon(){if(!1===this.icon)return!1;if("string"===typeof this.icon&&this.icon)return this.icon;switch(this.type){case"info":return"$vuetify.icons.info";case"error":return"$vuetify.icons.error";case"success":return"$vuetify.icons.success";case"warning":return"$vuetify.icons.warning";default:return!1}},hasColoredIcon(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText(){return this.text||this.outlined},iconColor(){return this.hasColoredIcon?this.computedColor:void 0},isDark(){return!(!this.type||this.coloredBorder||this.outlined)||n["a"].options.computed.isDark.call(this)}},created(){this.$attrs.hasOwnProperty("outline")&&Object(d["a"])("outline","outlined",this)},methods:{genWrapper(){const e=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],t={staticClass:"v-alert__wrapper"};return this.$createElement("div",t,e)},genContent(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert(){let e={staticClass:"v-alert",attrs:{role:"alert"},class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){const t=this.hasText?this.setTextColor:this.setBackgroundColor;e=t(this.computedColor,e)}return this.$createElement("div",e,[this.genWrapper()])},toggle(){this.isActive=!this.isActive}},render(e){const t=this.genAlert();return this.transition?e("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[t]):t}})},"34c3":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[r("v-card",{staticClass:"elevation-12"},[r("v-toolbar",{attrs:{color:"primary",flat:""}},[r("v-toolbar-title",[e._v(e._s(this.$route.name))])],1),r("v-card-text",[r("v-form",[r("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:3|max:40|alpha_dash",expression:"'required|min:3|max:40|alpha_dash'"}],attrs:{counter:40,"error-messages":e.errors.collect("username"),label:"Username","data-vv-name":"username",required:"",hint:"Username cannot be changed later! Choose wisely!"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),r("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|max:50|alpha_spaces",expression:"'required|max:50|alpha_spaces'"}],attrs:{"error-messages":e.errors.collect("name"),label:"Full Name","data-vv-name":"name",required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),r("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|email|max:100",expression:"'required|email|max:100'"}],attrs:{"error-messages":e.errors.collect("email"),label:"E-mail","data-vv-name":"email",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),r("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:{required:!0,min:8,max:128,regex:/^([a-zA-Z0-9$&+:;=?@#'<>.^*()%!-{}]+)$/},expression:"{ required: true, min: 8, max: 128, regex: /^([a-zA-Z0-9$&+:;=?@#'<>.^*()%!-{}]+)$/ }"}],ref:"password",class:{"is-danger":e.errors.has("password")},attrs:{counter:e.maxCounter,name:"password",type:"password",placeholder:"Password","error-messages":e.errors.collect("password"),clearable:"","persistent-hint:":"",false:""},on:{input:e.check_password},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),r("v-progress-linear",{attrs:{value:e.progress,color:e.color,height:"7",active:""},model:{value:e.progress,callback:function(t){e.progress=t},expression:"progress"}}),r("v-alert",{staticClass:"ma-1",attrs:{dense:"",type:"info",text:""}},[e._v("Password has to be at least:"),r("v-alert",{staticClass:"caption ma-1 pa-1",attrs:{type:e.corrections[0],text:""}},[e._v("8 characters long")]),r("v-alert",{staticClass:"caption ma-1 pa-1",attrs:{type:e.corrections[1],text:""}},[e._v("at least 1 character")]),r("v-alert",{staticClass:"caption ma-1 pa-1",attrs:{type:e.corrections[2],text:""}},[e._v("at least 1 number")]),r("v-alert",{staticClass:"caption ma-1 pa-1",attrs:{type:e.corrections[3],text:""}},[e._v("at least 1 special character, allowed: $&+:;=?@#'<>.^*()%!-{}")])],1),r("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|confirmed:password",expression:"'required|confirmed:password'"}],class:{"is-danger":e.errors.has("password_confirmation")},attrs:{name:"password_confirmation",type:"password","error-messages":e.errors.collect("password_confirmation"),placeholder:"Confirm Password","data-vv-as":"password",clearable:""}}),r("v-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{items:e.items,"error-messages":e.errors.collect("select"),label:"Role","data-vv-name":"select",required:"","menu-props":{top:!0,offsetY:!0}},model:{value:e.defaultItem,callback:function(t){e.defaultItem=t},expression:"defaultItem"}})],1)],1),r("v-card-actions",[r("v-btn",{attrs:{color:"primary",to:"/Login",outlined:""}},[e._v("Go to login")]),r("v-spacer"),r("v-btn",{attrs:{color:"primary"},on:{click:function(e){}}},[e._v("Sign up")])],1)],1)],1)],1)],1)},a=[],o={data(){return{password:"",custom:!0,items:[{text:"Student"},{text:"Teacher"}],corrections:["error","error","error","error"],defaultItem:"",email:"",name:"",username:""}},mounted(){this.defaultItem=this.items[0]},computed:{progress(){return Math.min(100,6*this.password.length)},color(){return["error","warning","success"][Math.floor(this.progress/40)]}},components:{},methods:{check_password:function(e){e.length>=8?this.corrections[0]="success":this.corrections[0]="error",/[aA-zZ]/.test(e)?this.corrections[1]="success":this.corrections[1]="error",/\d/.test(e)?this.corrections[2]="success":this.corrections[2]="error",/[$&+:;=?@#'<>.^*()%!-{}]/.test(e)?this.corrections[3]="success":this.corrections[3]="error"}}},i=o,n=r("f84f"),l=r("81c8"),c=r.n(l),d=r("205b"),u=r("15c2"),m=r("4c57"),h=r("9b0a"),p=r("d41a"),v=r("4bf2"),f=r("5ae9"),g=r("84d2"),b=r("b8db"),x=r("e7d5"),w=r("416f"),_=r("c764"),C=r("d470"),y=r("c0a6"),$=Object(n["a"])(i,s,a,!1,null,null,null);t["default"]=$.exports;c()($,{VAlert:d["a"],VBtn:u["a"],VCard:m["a"],VCardActions:h["a"],VCardText:h["b"],VCol:p["a"],VContainer:v["a"],VForm:f["a"],VProgressLinear:g["a"],VRow:b["a"],VSelect:x["a"],VSpacer:w["a"],VTextField:_["a"],VToolbar:C["a"],VToolbarTitle:y["b"]})},5092:function(e,t,r){"use strict";var s=r("da3e");t["a"]=s["a"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}})},7497:function(e,t,r){},"8a04":function(e,t,r){"use strict";var s=r("15c2");t["a"]=s["a"]}}]);
//# sourceMappingURL=chunk-df020cee.a024fc07.js.map
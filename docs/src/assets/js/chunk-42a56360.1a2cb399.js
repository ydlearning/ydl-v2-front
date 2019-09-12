(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-42a56360"],{3854:function(e,t,a){"use strict";a("90c2");var r=a("760a"),i=a("b112"),l=a("8972"),s=a("2c7d"),n=a("dc83");t["a"]=Object(s["a"])(r["a"],i["a"],Object(l["b"])(["absolute","top","bottom","left","right"])).extend({name:"v-snackbar",props:{multiLine:Boolean,timeout:{type:Number,default:6e3},vertical:Boolean},data:()=>({activeTimeout:-1}),computed:{classes(){return{"v-snack--active":this.isActive,"v-snack--absolute":this.absolute,"v-snack--bottom":this.bottom||!this.top,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--top":this.top,"v-snack--vertical":this.vertical}}},watch:{isActive(){this.setTimeout()}},created(){this.$attrs.hasOwnProperty("auto-height")&&Object(n["d"])("auto-height",this)},mounted(){this.setTimeout()},methods:{setTimeout(){window.clearTimeout(this.activeTimeout),this.isActive&&this.timeout&&(this.activeTimeout=window.setTimeout(()=>{this.isActive=!1},this.timeout))}},render(e){return e("transition",{attrs:{name:"v-snack-transition"}},[this.isActive&&e("div",{staticClass:"v-snack",class:this.classes,on:this.$listeners},[e("div",this.setBackgroundColor(this.color,{staticClass:"v-snack__wrapper"}),[e("div",{staticClass:"v-snack__content"},this.$slots.default)])])])}})},"90c2":function(e,t,a){},a085:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card-actions",[a("v-tooltip",{attrs:{bottom:"",color:"red"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[a("v-btn",e._g({attrs:{color:"primary",outlined:""},on:{click:function(t){return e.$emit("cancel")}}},Object.assign({},r)),[e._v("Cancel")])]}}])},[a("span",[a("v-icon",{attrs:{size:"15px"}},[e._v("mdi-alert")]),e._v(" All Fields will be deleted!")],1)]),a("v-spacer"),a("v-btn",{attrs:{color:"primary",type:"submit",disabled:!e.formIsValid},on:{click:function(t){return e.$emit("apply")}}},[e._v("Apply changes")])],1)},i=[],l={name:"TheSettingsButtons",props:{value:{type:String,default:""},formIsValid:{type:Boolean,default:!1,required:!1}}},s=l,n=a("d9b7"),o=a("53f2"),c=a.n(o),u=a("d537"),d=a("9fa3"),m=a("d958"),f=a("3190"),p=a("41f9"),h=Object(n["a"])(s,r,i,!1,null,null,null);t["a"]=h.exports;c()(h,{VBtn:u["a"],VCardActions:d["a"],VIcon:m["a"],VSpacer:f["a"],VTooltip:p["a"]})},aa06:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{"align-center":"","justify-center":""}},[a("v-card",{attrs:{flat:"",color:"transparent"}},[a("TheSettingsSnackbar",{attrs:{snackbarSuccess:e.snackbarSuccess,snackbarError:e.snackbarError},on:{snackbarRemoveSuccess:function(t){e.snackbarSuccess=!1},snackbarRemoveError:function(t){e.snackbarError=!1}}}),a("v-toolbar",{attrs:{color:"primary",flat:""}},[a("v-toolbar-title",[e._v(e._s(this.$route.name))])],1),a("v-card-text",[a("v-text-field",{attrs:{disabled:"",label:"Current E-mail","prepend-icon":"mdi-email-outline"},model:{value:e.user.email.address,callback:function(t){e.$set(e.user.email,"address",t)},expression:"user.email.address"}}),a("v-form",{ref:"form",on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[a("TheEmailField",{attrs:{maxCounterEmail:e.getMaxCounterEmail,fieldName:"New E-mail",fieldLabel:"New E-mail",copySymbol:!1},on:{errorCheck:function(t){e.emailNewHasErrors=t}},model:{value:e.form.emailNew,callback:function(t){e.$set(e.form,"emailNew",t)},expression:"form.emailNew"}}),a("TheEmailRepeatField",{attrs:{maxCounterEmail:e.getMaxCounterEmail,fieldName:"Repeat E-mail",fieldLabel:"Repeat E-mail",confirmationField:e.form.emailNew},on:{errorCheck:function(t){e.emailRepeatHasErrors=t}},model:{value:e.form.emailRepeat,callback:function(t){e.$set(e.form,"emailRepeat",t)},expression:"form.emailRepeat"}}),a("TheSettingsButtons",{attrs:{formIsValid:e.formIsValid},on:{cancel:e.resetForm,apply:e.submit}})],1)],1)],1)],1)},i=[],l=a("2ba1"),s=a("ced57"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:{required:!0,confirmed:e.confirmationField},expression:"{ required: true, confirmed: confirmationField }"}],ref:e.emailName,attrs:{name:e.emailName,"data-vv-name":e.fieldName,label:e.fieldLabel,"error-messages":e.errors.collect(e.fieldName),clearable:e.fieldClearable,"prepend-icon":"mdi-email-outline"},on:{input:function(t){return e.$emit("input",t)},"update:error":function(t){e.$emit("errorCheck",e.errors.has(e.fieldName))}}})},o=[],c={name:"TheEmailRepeatField",props:{value:{type:String,default:""},maxCounterEmail:{type:Number,default:0,required:!0},fieldName:{type:String,default:"",required:!0},fieldLabel:{type:String,default:"",required:!0},confirmationField:{type:String,default:"",required:!0},emailName:{type:String,default:"email",required:!1},fieldClearable:{type:Boolean,default:!0,required:!1}},data(){return{}}},u=c,d=a("d9b7"),m=a("53f2"),f=a.n(m),p=a("be99"),h=Object(d["a"])(u,n,o,!1,null,null,null),b=h.exports;f()(h,{VTextField:p["a"]});var v=a("a085"),g=a("b6b3"),y={name:"SettingsEmailSettings",data(){const e=Object.freeze({emailNew:"",emailRepeat:""});return{form:Object.assign({},e),defaultForm:e,newEmail:"",maxCounterEmail:100,snackbarSuccess:!1,snackbarError:!1,emailNewHasErrors:!1,emailRepeatHasErrors:!1}},computed:{...Object(l["b"])(["isLoggedIn","user"]),formIsValid(){return""!==this.form.emailNew&&""!==this.form.emailRepeat&&!this.emailNewHasErrors&&!this.emailRepeatHasErrors},getMaxCounterEmail(){return parseInt("100")}},methods:{resetForm(){this.snackbarError=!0,this.form=Object.assign({},this.defaultForm),this.$refs.form.reset()},submit(){this.snackbarSuccess=!0}},components:{TheEmailField:s["a"],TheEmailRepeatField:b,TheSettingsButtons:v["a"],TheSettingsSnackbar:g["a"]}},k=y,E=a("0a8f"),w=a("9fa3"),S=a("9561"),_=a("e4ef"),x=a("43eb"),C=a("906a"),N=Object(d["a"])(k,r,i,!1,null,null,null);t["default"]=N.exports;f()(N,{VCard:E["a"],VCardText:w["b"],VContainer:S["a"],VForm:_["a"],VTextField:p["a"],VToolbar:x["a"],VToolbarTitle:C["b"]})},b6b3:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-snackbar",{attrs:{value:e.snackbarSuccess,top:"",color:"success"},on:{input:function(t){return e.$emit("snackbarRemoveSuccess")}}},[a("span",[e._v("Changes apply successfully!")]),a("v-icon",{attrs:{dark:""}},[e._v("mdi-check-circle")])],1),a("v-snackbar",{attrs:{value:e.snackbarError,top:"",color:"error"},on:{input:function(t){return e.$emit("snackbarRemoveError")}}},[a("span",[e._v("Cancel, form cleared!")]),a("v-icon",{attrs:{dark:""}},[e._v("mdi-alert")])],1)],1)},i=[],l={name:"TheSettingsSnackbar",computed:{},props:{value:{type:String,default:""},snackbarSuccess:{type:Boolean,default:!1,required:!0},snackbarError:{type:Boolean,default:!1,required:!0}},data(){return{}}},s=l,n=a("d9b7"),o=a("53f2"),c=a.n(o),u=a("d958"),d=a("3854"),m=Object(n["a"])(s,r,i,!1,null,null,null);t["a"]=m.exports;c()(m,{VIcon:u["a"],VSnackbar:d["a"]})},ced57:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:{required:!0,email:!0,max:e.maxCounterEmail},expression:"{ required: true, email: true, max: maxCounterEmail }"}],ref:e.emailName,attrs:{id:e.fieldId,name:e.emailName,"data-vv-name":e.fieldName,label:e.fieldLabel,"error-messages":e.errors.collect(e.fieldName),clearable:e.fieldClearable,disabled:e.fieldDisable,placeholder:e.fieldPlaceholder,readonly:e.fieldReadonly,"prepend-icon":"mdi-email-outline","append-icon":e.copySymbol?"mdi-content-copy":""},on:{input:function(t){return e.$emit("input",t)},"update:error":function(t){e.$emit("errorCheck",e.errors.has(e.fieldName))},"click:append":function(t){return e.copyToClipboard()}}})},i=[],l={name:"TheEmailField",props:{value:{type:String,default:""},maxCounterEmail:{type:Number,default:0,required:!0},fieldName:{type:String,default:"",required:!0},fieldLabel:{type:String,default:"",required:!0},fieldPlaceholder:{type:String,default:"",required:!1},emailName:{type:String,default:"email",required:!1},fieldClearable:{type:Boolean,default:!0,required:!1},fieldDisable:{type:Boolean,default:!1,required:!1},fieldReadonly:{type:Boolean,default:!1,required:!1},copySymbol:{type:Boolean,default:!1,required:!1},fieldId:{type:String,default:"",required:!1}},methods:{copyToClipboard(){var e=document.getElementById(this.fieldId);e.select();try{document.execCommand("copy")}catch(t){alert("Unable to copy")}window.getSelection().removeAllRanges()}},data(){return{}}},s=l,n=a("d9b7"),o=a("53f2"),c=a.n(o),u=a("be99"),d=Object(n["a"])(s,r,i,!1,null,null,null);t["a"]=d.exports;c()(d,{VTextField:u["a"]})},e4ef:function(e,t,a){"use strict";var r=a("6e94");t["a"]=Object(r["b"])("form").extend({name:"v-form",inheritAttrs:!1,props:{lazyValidation:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(e){const t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput(e){const t=e=>{return e.$watch("hasError",t=>{this.$set(this.errorBag,e._uid,t)},{immediate:!0})},a={_uid:e._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?a.shouldValidate=e.$watch("shouldValidate",r=>{r&&(this.errorBag.hasOwnProperty(e._uid)||(a.valid=t(e)))}):a.valid=t(e),a},validate(){return 0===this.inputs.filter(e=>!e.validate(!0)).length},reset(){this.inputs.forEach(e=>e.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(e=>e.resetValidation()),this.resetErrorBag()},register(e){this.inputs.push(e),this.watchers.push(this.watchInput(e))},unregister(e){const t=this.inputs.find(t=>t._uid===e._uid);if(!t)return;const a=this.watchers.find(e=>e._uid===t._uid);a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter(e=>e._uid!==t._uid),this.inputs=this.inputs.filter(e=>e._uid!==t._uid),this.$delete(this.errorBag,t._uid)}},render(e){return e("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.$attrs},on:{submit:e=>this.$emit("submit",e)}},this.$slots.default)}})}}]);
//# sourceMappingURL=chunk-42a56360.1a2cb399.js.map
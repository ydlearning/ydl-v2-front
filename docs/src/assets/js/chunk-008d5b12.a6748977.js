(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-008d5b12"],{"00fb":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[a("v-card",{staticClass:"elevation-12"},[a("TheLoginSnackbar",{attrs:{snackbarSuccess:e.snackbarSuccess,successText:"Send"},on:{snackbarRemoveSuccess:function(t){e.snackbarSuccess=!1}}}),a("v-toolbar",{attrs:{color:"primary",flat:""}},[a("v-toolbar-title",[a("v-icon",[e._v("mdi-account-search-outline")]),e._v(e._s(this.$route.name))],1)],1),a("v-card-text",[a("span",[e._v("Enter your e-mail address and we'll send you your username.")]),a("v-form",{ref:"form",on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[a("TheEmailField",{attrs:{maxCounterEmail:e.getMaxCounterEmail,fieldName:"E-mail",fieldLabel:"E-mail"},on:{errorCheck:function(t){e.emailHasErrors=t}},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1)],1),a("TheLoginButtons",{attrs:{formIsValid:e.formIsValid,goTo:"/login",goToText:"login",actionText:"send"},on:{goto:function(t){e.javascript},action:e.submit}})],1)],1)],1)],1)},i=[],s=a("d3c1"),o=a("ced57"),n=a("2361"),l=a("2ba1"),c={name:"ForgotUsername",data(){const e=Object.freeze({email:""});return{form:Object.assign({},e),defaultForm:e,emailHasErrors:!1,snackbarSuccess:!1}},computed:{...Object(l["b"])(["isLoggedIn"]),formIsValid(){return""!==this.form.email&&!this.emailHasErrors},getMaxCounterEmail(){return parseInt("100")}},methods:{resetForm(){this.form=Object.assign({},this.defaultForm),this.$refs.form.reset()},submit(){this.snackbarSuccess=!0}},components:{TheLoginSnackbar:s["a"],TheEmailField:o["a"],TheLoginButtons:n["a"]}},u=c,d=a("d9b7"),m=a("53f2"),f=a.n(m),h=a("0a8f"),p=a("9fa3"),v=a("baa6"),b=a("9561"),g=a("e4ef"),y=a("d958"),k=a("e640"),T=a("43eb"),_=a("906a"),x=Object(d["a"])(u,r,i,!1,null,null,null);t["default"]=x.exports;f()(x,{VCard:h["a"],VCardText:p["b"],VCol:v["a"],VContainer:b["a"],VForm:g["a"],VIcon:y["a"],VRow:k["a"],VToolbar:T["a"],VToolbarTitle:_["b"]})},2361:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card-actions",[a("v-btn",{attrs:{color:"primary",outlined:"",to:e.goTo},on:{click:function(t){return e.$emit("goto")}}},[e._v("Go to "+e._s(e.goToText))]),a("v-spacer"),a("v-btn",{attrs:{color:"primary",type:"submit",disabled:!e.formIsValid},on:{click:function(t){return e.$emit("action")}}},[e._v(e._s(e.actionText))])],1)},i=[],s={name:"TheLoginButtons",props:{value:{type:String,default:""},goToText:{type:String,default:"",required:!0},actionText:{type:String,default:"",required:!0},goTo:{type:String,default:"",required:!0},formIsValid:{type:Boolean,default:!1,required:!1}},data(){return{}}},o=s,n=a("d9b7"),l=a("53f2"),c=a.n(l),u=a("d537"),d=a("9fa3"),m=a("3190"),f=Object(n["a"])(o,r,i,!1,null,null,null);t["a"]=f.exports;c()(f,{VBtn:u["a"],VCardActions:d["a"],VSpacer:m["a"]})},3854:function(e,t,a){"use strict";a("90c2");var r=a("760a"),i=a("b112"),s=a("8972"),o=a("2c7d"),n=a("dc83");t["a"]=Object(o["a"])(r["a"],i["a"],Object(s["b"])(["absolute","top","bottom","left","right"])).extend({name:"v-snackbar",props:{multiLine:Boolean,timeout:{type:Number,default:6e3},vertical:Boolean},data:()=>({activeTimeout:-1}),computed:{classes(){return{"v-snack--active":this.isActive,"v-snack--absolute":this.absolute,"v-snack--bottom":this.bottom||!this.top,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--top":this.top,"v-snack--vertical":this.vertical}}},watch:{isActive(){this.setTimeout()}},created(){this.$attrs.hasOwnProperty("auto-height")&&Object(n["d"])("auto-height",this)},mounted(){this.setTimeout()},methods:{setTimeout(){window.clearTimeout(this.activeTimeout),this.isActive&&this.timeout&&(this.activeTimeout=window.setTimeout(()=>{this.isActive=!1},this.timeout))}},render(e){return e("transition",{attrs:{name:"v-snack-transition"}},[this.isActive&&e("div",{staticClass:"v-snack",class:this.classes,on:this.$listeners},[e("div",this.setBackgroundColor(this.color,{staticClass:"v-snack__wrapper"}),[e("div",{staticClass:"v-snack__content"},this.$slots.default)])])])}})},"90c2":function(e,t,a){},ced57:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:{required:!0,email:!0,max:e.maxCounterEmail},expression:"{ required: true, email: true, max: maxCounterEmail }"}],ref:e.emailName,attrs:{id:e.fieldId,name:e.emailName,"data-vv-name":e.fieldName,label:e.fieldLabel,"error-messages":e.errors.collect(e.fieldName),clearable:e.fieldClearable,disabled:e.fieldDisable,placeholder:e.fieldPlaceholder,readonly:e.fieldReadonly,"prepend-icon":"mdi-email-outline","append-icon":e.copySymbol?"mdi-content-copy":""},on:{input:function(t){return e.$emit("input",t)},"update:error":function(t){e.$emit("errorCheck",e.errors.has(e.fieldName))},"click:append":function(t){return e.copyToClipboard()}}})},i=[],s={name:"TheEmailField",props:{value:{type:String,default:""},maxCounterEmail:{type:Number,default:0,required:!0},fieldName:{type:String,default:"",required:!0},fieldLabel:{type:String,default:"",required:!0},fieldPlaceholder:{type:String,default:"",required:!1},emailName:{type:String,default:"email",required:!1},fieldClearable:{type:Boolean,default:!0,required:!1},fieldDisable:{type:Boolean,default:!1,required:!1},fieldReadonly:{type:Boolean,default:!1,required:!1},copySymbol:{type:Boolean,default:!1,required:!1},fieldId:{type:String,default:"",required:!1}},methods:{copyToClipboard(){var e=document.getElementById(this.fieldId);e.select();try{document.execCommand("copy")}catch(t){alert("Unable to copy")}window.getSelection().removeAllRanges()}},data(){return{}}},o=s,n=a("d9b7"),l=a("53f2"),c=a.n(l),u=a("be99"),d=Object(n["a"])(o,r,i,!1,null,null,null);t["a"]=d.exports;c()(d,{VTextField:u["a"]})},d3c1:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-snackbar",{attrs:{value:e.snackbarSuccess,top:"",color:"success"},on:{input:function(t){return e.$emit("snackbarRemoveSuccess")}}},[a("span",[e._v(e._s(e.successText)+" successfully!")]),a("v-icon",{attrs:{dark:""}},[e._v("mdi-check-circle")])],1),a("v-snackbar",{attrs:{value:e.snackbarError,top:"",color:"error"},on:{input:function(t){return e.$emit("snackbarRemoveError")}}},[a("span",[e._v(e._s(e.errorText))]),a("v-icon",{attrs:{dark:""}},[e._v("mdi-alert")])],1)],1)},i=[],s={name:"TheLoginSnackbar",computed:{},props:{value:{type:String,default:""},snackbarSuccess:{type:Boolean,default:!1,required:!0},successText:{type:String,default:"",required:!0},snackbarError:{type:Boolean,default:!1,required:!1},errorText:{type:String,default:"",required:!1}},data(){return{}}},o=s,n=a("d9b7"),l=a("53f2"),c=a.n(l),u=a("d958"),d=a("3854"),m=Object(n["a"])(o,r,i,!1,null,null,null);t["a"]=m.exports;c()(m,{VIcon:u["a"],VSnackbar:d["a"]})},e4ef:function(e,t,a){"use strict";var r=a("6e94");t["a"]=Object(r["b"])("form").extend({name:"v-form",inheritAttrs:!1,props:{lazyValidation:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(e){const t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput(e){const t=e=>{return e.$watch("hasError",t=>{this.$set(this.errorBag,e._uid,t)},{immediate:!0})},a={_uid:e._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?a.shouldValidate=e.$watch("shouldValidate",r=>{r&&(this.errorBag.hasOwnProperty(e._uid)||(a.valid=t(e)))}):a.valid=t(e),a},validate(){return 0===this.inputs.filter(e=>!e.validate(!0)).length},reset(){this.inputs.forEach(e=>e.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(e=>e.resetValidation()),this.resetErrorBag()},register(e){this.inputs.push(e),this.watchers.push(this.watchInput(e))},unregister(e){const t=this.inputs.find(t=>t._uid===e._uid);if(!t)return;const a=this.watchers.find(e=>e._uid===t._uid);a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter(e=>e._uid!==t._uid),this.inputs=this.inputs.filter(e=>e._uid!==t._uid),this.$delete(this.errorBag,t._uid)}},render(e){return e("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.$attrs},on:{submit:e=>this.$emit("submit",e)}},this.$slots.default)}})}}]);
//# sourceMappingURL=chunk-008d5b12.a6748977.js.map
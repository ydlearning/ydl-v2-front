(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-41ecec1a"],{3854:function(t,e,a){"use strict";a("90c2");var i=a("760a"),r=a("b112"),s=a("8972"),n=a("2c7d"),o=a("dc83");e["a"]=Object(n["a"])(i["a"],r["a"],Object(s["b"])(["absolute","top","bottom","left","right"])).extend({name:"v-snackbar",props:{multiLine:Boolean,timeout:{type:Number,default:6e3},vertical:Boolean},data:()=>({activeTimeout:-1}),computed:{classes(){return{"v-snack--active":this.isActive,"v-snack--absolute":this.absolute,"v-snack--bottom":this.bottom||!this.top,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--top":this.top,"v-snack--vertical":this.vertical}}},watch:{isActive(){this.setTimeout()}},created(){this.$attrs.hasOwnProperty("auto-height")&&Object(o["d"])("auto-height",this)},mounted(){this.setTimeout()},methods:{setTimeout(){window.clearTimeout(this.activeTimeout),this.isActive&&this.timeout&&(this.activeTimeout=window.setTimeout(()=>{this.isActive=!1},this.timeout))}},render(t){return t("transition",{attrs:{name:"v-snack-transition"}},[this.isActive&&t("div",{staticClass:"v-snack",class:this.classes,on:this.$listeners},[t("div",this.setBackgroundColor(this.color,{staticClass:"v-snack__wrapper"}),[t("div",{staticClass:"v-snack__content"},this.$slots.default)])])])}})},"90c2":function(t,e,a){},a085:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card-actions",[a("v-tooltip",{attrs:{bottom:"",color:"red"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-btn",t._g({attrs:{color:"primary",outlined:""},on:{click:function(e){return t.$emit("cancel")}}},Object.assign({},i)),[t._v("Cancel")])]}}])},[a("span",[a("v-icon",{attrs:{size:"15px"}},[t._v("mdi-alert")]),t._v(" All Fields will be deleted!")],1)]),a("v-spacer"),a("v-btn",{attrs:{color:"primary",type:"submit",disabled:!t.formIsValid},on:{click:function(e){return t.$emit("apply")}}},[t._v("Apply changes")])],1)},r=[],s={name:"TheSettingsButtons",props:{value:{type:String,default:""},formIsValid:{type:Boolean,default:!1,required:!1}},data(){return{}}},n=s,o=a("d9b7"),l=a("53f2"),c=a.n(l),d=a("d537"),u=a("9fa3"),m=a("d958"),h=a("3190"),p=(a("c4c0"),a("409d")),f=a("760a"),v=a("ab2c"),b=a("1a4e"),g=a("399d"),y=a("8d06"),k=a("b112"),w=a("b0d1"),E=a("dc83"),x=a("2c7d"),_=Object(x["a"])(f["a"],v["a"],b["a"],g["a"],y["a"],k["a"]).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String,zIndex:{default:null}},data:()=>({calculatedMinWidth:0,closeDependents:!1}),computed:{calculatedLeft(){const{activator:t,content:e}=this.dimensions,a=!this.bottom&&!this.left&&!this.top&&!this.right,i=!1!==this.attach?t.offsetLeft:t.left;let r=0;return this.top||this.bottom||a?r=i+t.width/2-e.width/2:(this.left||this.right)&&(r=i+(this.right?t.width:-e.width)+(this.right?10:-10)),this.nudgeLeft&&(r-=parseInt(this.nudgeLeft)),this.nudgeRight&&(r+=parseInt(this.nudgeRight)),`${this.calcXOverflow(r,this.dimensions.content.width)}px`},calculatedTop(){const{activator:t,content:e}=this.dimensions,a=!1!==this.attach?t.offsetTop:t.top;let i=0;return this.top||this.bottom?i=a+(this.bottom?t.height:-e.height)+(this.bottom?10:-10):(this.left||this.right)&&(i=a+t.height/2-e.height/2),this.nudgeTop&&(i-=parseInt(this.nudgeTop)),this.nudgeBottom&&(i+=parseInt(this.nudgeBottom)),`${this.calcYOverflow(i+this.pageYOffset)}px`},classes(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left}},computedTransition(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY(){return this.top||this.bottom},offsetX(){return this.left||this.right},styles(){return{left:this.calculatedLeft,maxWidth:Object(w["e"])(this.maxWidth),minWidth:Object(w["e"])(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount(){this.$nextTick(()=>{this.value&&this.callActivate()})},mounted(){"v-slot"===Object(w["o"])(this,"activator",!0)&&Object(E["b"])("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate(){this.runDelay("close")},genActivatorListeners(){const t=p["a"].options.methods.genActivatorListeners.call(this);return t.focus=t=>{this.getActivator(t),this.runDelay("open")},t.blur=t=>{this.getActivator(t),this.runDelay("close")},t.keydown=t=>{t.keyCode===w["r"].esc&&(this.getActivator(t),this.runDelay("close"))},t}},render(t){const e=t("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:{[this.contentClass]:!0,menuable__content__active:this.isActive,"v-tooltip__content--fixed":this.activatorFixed},style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.showLazyContent(this.getContentSlot()));return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[t("transition",{props:{name:this.computedTransition}},[e]),this.genActivator()])}}),S=Object(o["a"])(n,i,r,!1,null,null,null);e["a"]=S.exports;c()(S,{VBtn:d["a"],VCardActions:u["a"],VIcon:m["a"],VSpacer:h["a"],VTooltip:_})},aa06:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"align-center":"","justify-center":""}},[a("v-card",{attrs:{flat:"",color:"transparent"}},[a("TheSettingsSnackbar",{attrs:{snackbarSuccess:t.snackbarSuccess,snackbarError:t.snackbarError},on:{snackbarRemoveSuccess:function(e){t.snackbarSuccess=!1},snackbarRemoveError:function(e){t.snackbarError=!1}}}),a("v-toolbar",{attrs:{color:"primary",flat:""}},[a("v-toolbar-title",[t._v(t._s(this.$route.name))])],1),a("v-card-text",[a("v-text-field",{attrs:{disabled:"",label:"Current E-mail","prepend-icon":"mdi-email-outline"},model:{value:t.user.email.address,callback:function(e){t.$set(t.user.email,"address",e)},expression:"user.email.address"}}),a("v-form",{ref:"form",on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[a("TheEmailField",{attrs:{maxCounterEmail:t.getMaxCounterEmail,fieldName:"New E-mail",fieldLabel:"New E-mail",copySymbol:!1},on:{errorCheck:function(e){t.emailNewHasErrors=e}},model:{value:t.form.emailNew,callback:function(e){t.$set(t.form,"emailNew",e)},expression:"form.emailNew"}}),a("TheEmailRepeatField",{attrs:{maxCounterEmail:t.getMaxCounterEmail,fieldName:"Repeat E-mail",fieldLabel:"Repeat E-mail",confirmationField:t.form.emailNew},on:{errorCheck:function(e){t.emailRepeatHasErrors=e}},model:{value:t.form.emailRepeat,callback:function(e){t.$set(t.form,"emailRepeat",e)},expression:"form.emailRepeat"}}),a("TheSettingsButtons",{attrs:{formIsValid:t.formIsValid},on:{cancel:t.resetForm,apply:t.submit}})],1)],1)],1)],1)},r=[],s=a("2ba1"),n=a("ced57"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:{required:!0,confirmed:t.confirmationField},expression:"{ required: true, confirmed: confirmationField }"}],ref:t.emailName,attrs:{name:t.emailName,"data-vv-name":t.fieldName,label:t.fieldLabel,"error-messages":t.errors.collect(t.fieldName),clearable:t.fieldClearable,"prepend-icon":"mdi-email-outline"},on:{input:function(e){return t.$emit("input",e)},"update:error":function(e){t.$emit("errorCheck",t.errors.has(t.fieldName))}}})},l=[],c={name:"TheEmailRepeatField",props:{value:{type:String,default:""},maxCounterEmail:{type:Number,default:0,required:!0},fieldName:{type:String,default:"",required:!0},fieldLabel:{type:String,default:"",required:!0},confirmationField:{type:String,default:"",required:!0},emailName:{type:String,default:"email",required:!1},fieldClearable:{type:Boolean,default:!0,required:!1}},data(){return{}}},d=c,u=a("d9b7"),m=a("53f2"),h=a.n(m),p=a("be99"),f=Object(u["a"])(d,o,l,!1,null,null,null),v=f.exports;h()(f,{VTextField:p["a"]});var b=a("a085"),g=a("b6b3"),y={data(){const t=Object.freeze({emailNew:"",emailRepeat:""});return{form:Object.assign({},t),defaultForm:t,newEmail:"",maxCounterEmail:100,snackbarSuccess:!1,snackbarError:!1,emailNewHasErrors:!1,emailRepeatHasErrors:!1}},computed:{...Object(s["b"])(["isLoggedIn","user"]),formIsValid(){return""!==this.form.emailNew&&""!==this.form.emailRepeat&&!this.emailNewHasErrors&&!this.emailRepeatHasErrors},getMaxCounterEmail(){return parseInt("100")}},methods:{resetForm(){this.snackbarError=!0,this.form=Object.assign({},this.defaultForm),this.$refs.form.reset()},submit(){this.snackbarSuccess=!0}},components:{TheEmailField:n["a"],TheEmailRepeatField:v,TheSettingsButtons:b["a"],TheSettingsSnackbar:g["a"]}},k=y,w=a("0a8f"),E=a("9fa3"),x=a("9561"),_=a("e4ef"),S=a("43eb"),C=a("906a"),T=Object(u["a"])(k,i,r,!1,null,null,null);e["default"]=T.exports;h()(T,{VCard:w["a"],VCardText:E["b"],VContainer:x["a"],VForm:_["a"],VTextField:p["a"],VToolbar:S["a"],VToolbarTitle:C["b"]})},b6b3:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-snackbar",{attrs:{value:t.snackbarSuccess,top:"",color:"success"},on:{input:function(e){return t.$emit("snackbarRemoveSuccess")}}},[a("span",[t._v("Changes apply successfully!")]),a("v-icon",{attrs:{dark:""}},[t._v("mdi-check-circle")])],1),a("v-snackbar",{attrs:{value:t.snackbarError,top:"",color:"error"},on:{input:function(e){return t.$emit("snackbarRemoveError")}}},[a("span",[t._v("Cancel, form cleared!")]),a("v-icon",{attrs:{dark:""}},[t._v("mdi-alert")])],1)],1)},r=[],s={name:"TheSettingsSnackbar",computed:{},props:{value:{type:String,default:""},snackbarSuccess:{type:Boolean,default:!1,required:!0},snackbarError:{type:Boolean,default:!1,required:!0}},data(){return{}}},n=s,o=a("d9b7"),l=a("53f2"),c=a.n(l),d=a("d958"),u=a("3854"),m=Object(o["a"])(n,i,r,!1,null,null,null);e["a"]=m.exports;c()(m,{VIcon:d["a"],VSnackbar:u["a"]})},c4c0:function(t,e,a){},ced57:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:{required:!0,email:!0,max:t.maxCounterEmail},expression:"{ required: true, email: true, max: maxCounterEmail }"}],ref:t.emailName,attrs:{id:t.fieldId,name:t.emailName,"data-vv-name":t.fieldName,label:t.fieldLabel,"error-messages":t.errors.collect(t.fieldName),clearable:t.fieldClearable,disabled:t.fieldDisable,placeholder:t.fieldPlaceholder,readonly:t.fieldReadonly,"prepend-icon":"mdi-email-outline","append-icon":t.copySymbol?"mdi-content-copy":""},on:{input:function(e){return t.$emit("input",e)},"update:error":function(e){t.$emit("errorCheck",t.errors.has(t.fieldName))},"click:append":function(e){return t.copyToClipboard()}}})},r=[],s={name:"TheEmailField",props:{value:{type:String,default:""},maxCounterEmail:{type:Number,default:0,required:!0},fieldName:{type:String,default:"",required:!0},fieldLabel:{type:String,default:"",required:!0},fieldPlaceholder:{type:String,default:"",required:!1},emailName:{type:String,default:"email",required:!1},fieldClearable:{type:Boolean,default:!0,required:!1},fieldDisable:{type:Boolean,default:!1,required:!1},fieldReadonly:{type:Boolean,default:!1,required:!1},copySymbol:{type:Boolean,default:!1,required:!1},fieldId:{type:String,default:"",required:!1}},methods:{copyToClipboard(){var t=document.getElementById(this.fieldId);t.select();try{document.execCommand("copy")}catch(e){alert("Unable to copy")}window.getSelection().removeAllRanges()}},data(){return{}}},n=s,o=a("d9b7"),l=a("53f2"),c=a.n(l),d=a("be99"),u=Object(o["a"])(n,i,r,!1,null,null,null);e["a"]=u.exports;c()(u,{VTextField:d["a"]})},e4ef:function(t,e,a){"use strict";var i=a("6e94");e["a"]=Object(i["b"])("form").extend({name:"v-form",inheritAttrs:!1,props:{lazyValidation:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>{return t.$watch("hasError",e=>{this.$set(this.errorBag,t._uid,e)},{immediate:!0})},a={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?a.shouldValidate=t.$watch("shouldValidate",i=>{i&&(this.errorBag.hasOwnProperty(t._uid)||(a.valid=e(t)))}):a.valid=e(t),a},validate(){return 0===this.inputs.filter(t=>!t.validate(!0)).length},reset(){this.inputs.forEach(t=>t.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(t=>t.resetValidation()),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find(e=>e._uid===t._uid);if(!e)return;const a=this.watchers.find(t=>t._uid===e._uid);a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter(t=>t._uid!==e._uid),this.inputs=this.inputs.filter(t=>t._uid!==e._uid),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.$attrs},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})}}]);
//# sourceMappingURL=chunk-41ecec1a.f3581a52.js.map
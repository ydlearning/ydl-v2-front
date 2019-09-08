(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-716e16be"],{"88ea":function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:{required:!0,min:t.minCounterPassword,max:t.maxCounterPassword,regex:t.regexExpression},expression:"{ required: true, min: minCounterPassword, max: maxCounterPassword, regex: regexExpression }"}],ref:t.passwordName,class:{"is-danger":t.errors.has(t.passwordName)},attrs:{counter:t.maxCounterPassword,name:t.passwordName,"data-vv-as":t.fieldName,label:t.fieldLabel,"error-messages":t.errors.collect(t.passwordName),clearable:t.fieldClearable,"prepend-icon":"mdi-key-variant","append-icon":t.showPassword?"mdi-eye":"mdi-eye-off",type:t.showPassword?"text":t.passwordName},on:{"click:append":function(e){t.showPassword=!t.showPassword},input:function(e){return t.$emit("input",e)},"update:error":function(e){t.$emit("errorCheck",t.errors.has(t.passwordName))}}})},a=[],o={name:"ThePasswordField",props:{value:{type:String,default:""},minCounterPassword:{type:Number,default:0,required:!0},maxCounterPassword:{type:Number,default:0,required:!0},regexExpression:{type:RegExp,default:"",required:!0},fieldName:{type:String,default:"",required:!0},fieldLabel:{type:String,default:"",required:!0},passwordName:{type:String,default:"password",required:!1},showPassword:{type:Boolean,default:!1,required:!1},fieldClearable:{type:Boolean,default:!0,required:!1}},data(){return{}}},n=o,i=s("d9b7"),d=s("53f2"),c=s.n(d),l=s("be99"),u=Object(i["a"])(n,r,a,!1,null,null,null);e["a"]=u.exports;c()(u,{VTextField:l["a"]})},a085:function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-card-actions",[s("v-tooltip",{attrs:{bottom:"",color:"red"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[s("v-btn",t._g({attrs:{color:"primary",outlined:""},on:{click:function(e){return t.$emit("cancel")}}},Object.assign({},r)),[t._v("Cancel")])]}}])},[s("span",[s("v-icon",{attrs:{size:"15px"}},[t._v("mdi-alert")]),t._v(" All Fields will be deleted!")],1)]),s("v-spacer"),s("v-btn",{attrs:{color:"primary",type:"submit",disabled:!t.formIsValid},on:{click:function(e){return t.$emit("apply")}}},[t._v("Apply changes")])],1)},a=[],o={name:"TheSettingsButtons",props:{value:{type:String,default:""},formIsValid:{type:Boolean,default:!1,required:!1}},data(){return{}}},n=o,i=s("d9b7"),d=s("53f2"),c=s.n(d),l=s("d537"),u=s("9fa3"),p=s("d958"),h=s("3190"),m=(s("c4c0"),s("409d")),f=s("760a"),b=s("ab2c"),w=s("1a4e"),v=s("399d"),g=s("8d06"),x=s("b112"),y=s("b0d1"),S=s("dc83"),k=s("2c7d"),C=Object(k["a"])(f["a"],b["a"],w["a"],v["a"],g["a"],x["a"]).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String,zIndex:{default:null}},data:()=>({calculatedMinWidth:0,closeDependents:!1}),computed:{calculatedLeft(){const{activator:t,content:e}=this.dimensions,s=!this.bottom&&!this.left&&!this.top&&!this.right,r=!1!==this.attach?t.offsetLeft:t.left;let a=0;return this.top||this.bottom||s?a=r+t.width/2-e.width/2:(this.left||this.right)&&(a=r+(this.right?t.width:-e.width)+(this.right?10:-10)),this.nudgeLeft&&(a-=parseInt(this.nudgeLeft)),this.nudgeRight&&(a+=parseInt(this.nudgeRight)),`${this.calcXOverflow(a,this.dimensions.content.width)}px`},calculatedTop(){const{activator:t,content:e}=this.dimensions,s=!1!==this.attach?t.offsetTop:t.top;let r=0;return this.top||this.bottom?r=s+(this.bottom?t.height:-e.height)+(this.bottom?10:-10):(this.left||this.right)&&(r=s+t.height/2-e.height/2),this.nudgeTop&&(r-=parseInt(this.nudgeTop)),this.nudgeBottom&&(r+=parseInt(this.nudgeBottom)),`${this.calcYOverflow(r+this.pageYOffset)}px`},classes(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left}},computedTransition(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY(){return this.top||this.bottom},offsetX(){return this.left||this.right},styles(){return{left:this.calculatedLeft,maxWidth:Object(y["e"])(this.maxWidth),minWidth:Object(y["e"])(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount(){this.$nextTick(()=>{this.value&&this.callActivate()})},mounted(){"v-slot"===Object(y["o"])(this,"activator",!0)&&Object(S["b"])("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate(){this.runDelay("close")},genActivatorListeners(){const t=m["a"].options.methods.genActivatorListeners.call(this);return t.focus=t=>{this.getActivator(t),this.runDelay("open")},t.blur=t=>{this.getActivator(t),this.runDelay("close")},t.keydown=t=>{t.keyCode===y["r"].esc&&(this.getActivator(t),this.runDelay("close"))},t}},render(t){const e=t("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:{[this.contentClass]:!0,menuable__content__active:this.isActive,"v-tooltip__content--fixed":this.activatorFixed},style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.showLazyContent(this.getContentSlot()));return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[t("transition",{props:{name:this.computedTransition}},[e]),this.genActivator()])}}),P=Object(i["a"])(n,r,a,!1,null,null,null);e["a"]=P.exports;c()(P,{VBtn:l["a"],VCardActions:u["a"],VIcon:p["a"],VSpacer:h["a"],VTooltip:C})},b6b3:function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-snackbar",{attrs:{value:t.snackbarSuccess,top:"",color:"success"},on:{input:function(e){return t.$emit("snackbarRemoveSuccess")}}},[s("span",[t._v("Changes apply successfully!")]),s("v-icon",{attrs:{dark:""}},[t._v("mdi-check-circle")])],1),s("v-snackbar",{attrs:{value:t.snackbarError,top:"",color:"error"},on:{input:function(e){return t.$emit("snackbarRemoveError")}}},[s("span",[t._v("Cancel, form cleared!")]),s("v-icon",{attrs:{dark:""}},[t._v("mdi-alert")])],1)],1)},a=[],o={name:"TheSettingsSnackbar",computed:{},props:{value:{type:String,default:""},snackbarSuccess:{type:Boolean,default:!1,required:!0},snackbarError:{type:Boolean,default:!1,required:!0}},data(){return{}}},n=o,i=s("d9b7"),d=s("53f2"),c=s.n(d),l=s("d958"),u=s("3854"),p=Object(i["a"])(n,r,a,!1,null,null,null);e["a"]=p.exports;c()(p,{VIcon:l["a"],VSnackbar:u["a"]})},b709:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{attrs:{"align-center":"","justify-center":""}},[s("v-card",{attrs:{flat:"",color:"transparent"}},[s("TheSettingsSnackbar",{attrs:{snackbarSuccess:t.snackbarSuccess,snackbarError:t.snackbarError},on:{snackbarRemoveSuccess:function(e){t.snackbarSuccess=!1},snackbarRemoveError:function(e){t.snackbarError=!1}}}),s("v-toolbar",{attrs:{color:"primary",flat:""}},[s("v-toolbar-title",[t._v(t._s(this.$route.name))])],1),s("v-card-text",[s("v-form",{ref:"form",on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[s("ThePasswordField",{attrs:{minCounterPassword:t.getMinCounterPassword,maxCounterPassword:t.getMaxCounterPassword,regexExpression:t.getRegex,fieldName:"Old password",fieldLabel:"Old password"},on:{errorCheck:function(e){t.passwordHasErrors=e}},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}}),s("br"),s("ThePasswordSetField",{attrs:{minCounterPassword:t.getMinCounterPassword,maxCounterPassword:t.getMaxCounterPassword,regexExpression:t.getRegex,regexExpressionSpecialChars:t.getRegexSpecialCharacters,fieldName:"New password",fieldLabel:"New password"},on:{errorCheck:function(e){t.passwordSetHasErrors=e}},model:{value:t.form.passwordSet,callback:function(e){t.$set(t.form,"passwordSet",e)},expression:"form.passwordSet"}}),s("ThePasswordRepeatField",{attrs:{minCounterPassword:t.getMinCounterPassword,maxCounterPassword:t.getMaxCounterPassword,regexExpression:t.getRegex,confirmationField:t.form.passwordSet,fieldName:"Repeat password",fieldLabel:"Repeat password"},on:{errorCheck:function(e){t.passwordRepeatHasErrors=e}},model:{value:t.form.passwordRepeat,callback:function(e){t.$set(t.form,"passwordRepeat",e)},expression:"form.passwordRepeat"}}),s("TheSettingsButtons",{attrs:{formIsValid:t.formIsValid},on:{cancel:t.resetForm,apply:t.submit}})],1)],1)],1)],1)},a=[],o=s("88ea"),n=s("968c"),i=s("376e"),d=s("9d3a"),c=s("a085"),l=s("b6b3"),u=s("2ba1"),p={name:"SettingsChangePassword",data(){const t=Object.freeze({password:"",passwordSet:"",passwordRepeat:"",terms:!1});return{form:Object.assign({},t),defaultForm:t,snackbarSuccess:!1,snackbarError:!1,passwordHasErrors:!1,passwordSetHasErrors:!1,passwordRepeatHasErrors:!1}},mounted(){},components:{ThePasswordField:o["a"],ThePasswordSetField:n["a"],ThePasswordRepeatField:i["a"],TheTermsCheckbox:d["a"],TheSettingsButtons:c["a"],TheSettingsSnackbar:l["a"]},computed:{...Object(u["b"])(["isLoggedIn","user"]),formIsValid(){return""!==this.form.password&&""!==this.form.passwordSet&&""!==this.form.passwordRepeat&&this.form.terms&&!this.passwordHasErrors&&!this.passwordSetHasErrors&&!this.passwordRepeatHasErrors},getMinCounterPassword(){return parseInt("8")},getMaxCounterPassword(){return parseInt("128")},getRegex(){return new RegExp("^([a-zA-Z0-9$&+,:;=?@#'<>.^*()%!-]+)$")},getRegexSpecialCharacters(){return new RegExp("^([a-zA-Z0-9$&+,:;=?@#'<>.^*()%!-]+)$")}},methods:{resetForm(){this.snackbarError=!0,this.form=Object.assign({},this.defaultForm),this.$refs.form.reset()},submit(){this.snackbarSuccess=!0}}},h=p,m=s("d9b7"),f=s("53f2"),b=s.n(f),w=s("0a8f"),v=s("9fa3"),g=s("9561"),x=s("e4ef"),y=s("43eb"),S=s("906a"),k=Object(m["a"])(h,r,a,!1,null,null,null);e["default"]=k.exports;b()(k,{VCard:w["a"],VCardText:v["b"],VContainer:g["a"],VForm:x["a"],VToolbar:y["a"],VToolbarTitle:S["b"]})},c4c0:function(t,e,s){}}]);
//# sourceMappingURL=chunk-716e16be.ae28267d.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5031a811"],{"9dbb":function(t,e,i){},aa06:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{attrs:{"align-center":"","justify-center":""}},[i("v-card",{attrs:{flat:"",color:"transparent"}},[i("v-toolbar",{attrs:{color:"primary",flat:""}},[i("v-toolbar-title",[t._v(t._s(this.$route.name))])],1),i("v-card-text",[i("v-form",[i("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|email|max:100",expression:"'required|email|max:100'"}],attrs:{"error-messages":t.errors.collect("email"),label:"Current E-mail","data-vv-name":"email",required:"",disabled:""},model:{value:t.user.email.adress,callback:function(e){t.$set(t.user.email,"adress",e)},expression:"user.email.adress"}}),i("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|email|max:100",expression:"'required|email|max:100'"}],ref:"newEmail",attrs:{"error-messages":t.errors.collect("email"),label:"New E-mail","data-vv-name":"email",required:"",clearable:""},model:{value:t.newEmail,callback:function(e){t.newEmail=e},expression:"newEmail"}}),i("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|confirmed:newEmail",expression:"'required|confirmed:newEmail'"}],class:{"is-danger":t.errors.has("email_confirmation")},attrs:{name:"email_confirmation",label:"New E-mail","data-vv-as":"email",required:"",clearable:""}}),i("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("email_confirmation"),expression:"errors.has('email_confirmation')"}],staticClass:"help is-danger"},[t._v(t._s(t.errors.first("email_confirmation"))+" ")])],1),i("v-card-actions",[i("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[i("v-btn",t._g({attrs:{color:"primary"},on:{click:function(t){}}},a),[t._v("Change E-mail")])]}}])},[i("span",[t._v("A verification email will be sent to your new E-mail adress")])])],1)],1)],1)],1)},s=[],o=i("2ba1"),r={data(){return{newEmail:""}},computed:Object(o["b"])(["isLoggedIn","user"]),components:{}},n=r,l=i("18cd"),c=i("1180"),h=i.n(c),d=i("11b7"),m=i("56e4"),u=i("3ba1"),v=i("8fc6"),p=i("a94d"),f=i("bcaa"),b=i("c414"),g=i("26c5"),w=(i("9dbb"),i("65bd")),x=i("b30f"),y=i("4a86"),_=i("d4af"),A=i("0868"),C=i("6ed1"),T=i("5700"),E=i("e5f1"),k=i("2a0f"),O=i("d880"),q=Object(O["a"])(x["a"],y["a"],_["a"],A["a"],C["a"],T["a"]).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String,zIndex:{default:null}},data:()=>({calculatedMinWidth:0,closeDependents:!1}),computed:{calculatedLeft(){const{activator:t,content:e}=this.dimensions,i=!this.bottom&&!this.left&&!this.top&&!this.right,a=!1!==this.attach?t.offsetLeft:t.left;let s=0;return this.top||this.bottom||i?s=a+t.width/2-e.width/2:(this.left||this.right)&&(s=a+(this.right?t.width:-e.width)+(this.right?10:-10)),this.nudgeLeft&&(s-=parseInt(this.nudgeLeft)),this.nudgeRight&&(s+=parseInt(this.nudgeRight)),`${this.calcXOverflow(s,this.dimensions.content.width)}px`},calculatedTop(){const{activator:t,content:e}=this.dimensions,i=!1!==this.attach?t.offsetTop:t.top;let a=0;return this.top||this.bottom?a=i+(this.bottom?t.height:-e.height)+(this.bottom?10:-10):(this.left||this.right)&&(a=i+t.height/2-e.height/2),this.nudgeTop&&(a-=parseInt(this.nudgeTop)),this.nudgeBottom&&(a+=parseInt(this.nudgeBottom)),`${this.calcYOverflow(a+this.pageYOffset)}px`},classes(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left}},computedTransition(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY(){return this.top||this.bottom},offsetX(){return this.left||this.right},styles(){return{left:this.calculatedLeft,maxWidth:Object(E["e"])(this.maxWidth),minWidth:Object(E["e"])(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount(){this.$nextTick(()=>{this.value&&this.callActivate()})},mounted(){"v-slot"===Object(E["o"])(this,"activator",!0)&&Object(k["b"])("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate(){this.runDelay("close")},genActivatorListeners(){const t=w["a"].options.methods.genActivatorListeners.call(this);return t.focus=t=>{this.getActivator(t),this.runDelay("open")},t.blur=t=>{this.getActivator(t),this.runDelay("close")},t.keydown=t=>{t.keyCode===E["r"].esc&&(this.getActivator(t),this.runDelay("close"))},t}},render(t){const e=t("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:{[this.contentClass]:!0,menuable__content__active:this.isActive,"v-tooltip__content--fixed":this.activatorFixed},style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.showLazyContent(this.getContentSlot()));return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[t("transition",{props:{name:this.computedTransition}},[e]),this.genActivator()])}}),I=Object(l["a"])(n,a,s,!1,null,null,null);e["default"]=I.exports;h()(I,{VBtn:d["a"],VCard:m["a"],VCardActions:u["a"],VCardText:u["b"],VContainer:v["a"],VForm:p["a"],VTextField:f["a"],VToolbar:b["a"],VToolbarTitle:g["b"],VTooltip:q})}}]);
//# sourceMappingURL=chunk-5031a811.a232cb41.js.map
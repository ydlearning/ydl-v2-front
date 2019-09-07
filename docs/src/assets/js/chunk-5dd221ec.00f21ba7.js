(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5dd221ec"],{"050a":function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:{required:!0,alpha_spaces:!0,min:e.minCounter,max:e.maxCounter},expression:"{ required: true, alpha_spaces: true, min: minCounter, max: maxCounter }"}],ref:e.componentName,attrs:{id:e.fieldId,name:e.componentName,"data-vv-name":e.fieldName,label:e.fieldLabel,"error-messages":e.errors.collect(e.fieldName),clearable:e.fieldClearable,disabled:e.fieldDisable,placeholder:e.fieldPlaceholder,readonly:e.fieldReadonly,"prepend-icon":"mdi-account-card-details-outline","append-icon":e.copySymbol?"mdi-content-copy":""},on:{input:function(t){return e.$emit("input",t)},"update:error":function(t){e.$emit("errorCheck",e.errors.has(e.fieldName))},"click:append":function(t){return e.copyToClipboard()}}})},a=[],r={name:"TheFullNameField",props:{value:{type:String,default:""},minCounter:{type:Number,default:0,required:!0},maxCounter:{type:Number,default:0,required:!0},fieldName:{type:String,default:"",required:!0},fieldLabel:{type:String,default:"",required:!0},fieldPlaceholder:{type:String,default:"",required:!1},componentName:{type:String,default:"fullname",required:!1},fieldClearable:{type:Boolean,default:!0,required:!1},fieldDisable:{type:Boolean,default:!1,required:!1},fieldReadonly:{type:Boolean,default:!1,required:!1},copySymbol:{type:Boolean,default:!1,required:!1},fieldId:{type:String,default:"",required:!1}},methods:{copyToClipboard(){var e=document.getElementById(this.fieldId);e.select();try{document.execCommand("copy")}catch(t){alert("Unable to copy")}window.getSelection().removeAllRanges()}},data(){return{}}},n=r,l=i("d9b7"),o=i("53f2"),c=i.n(o),d=i("be99"),u=Object(l["a"])(n,s,a,!1,null,null,null);t["a"]=u.exports;c()(u,{VTextField:d["a"]})},"0804":function(e,t,i){"use strict";i("e64b");var s=i("be01");t["a"]=s["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render(e){let t;return this.$attrs.role&&"separator"!==this.$attrs.role||(t=this.vertical?"vertical":"horizontal"),e("hr",{class:{"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical,...this.themeClasses},attrs:{role:"separator","aria-orientation":t,...this.$attrs},on:this.$listeners})}})},"21a5":function(e,t,i){},2361:function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-card-actions",[i("v-btn",{attrs:{color:"primary",outlined:"",to:e.goTo},on:{click:function(t){return e.$emit("goto")}}},[e._v("Go to "+e._s(e.goToText))]),i("v-spacer"),i("v-btn",{attrs:{color:"primary",type:"submit",disabled:!e.formIsValid},on:{click:function(t){return e.$emit("action")}}},[e._v(e._s(e.actionText))])],1)},a=[],r={name:"TheLoginButtons",props:{value:{type:String,default:""},goToText:{type:String,default:"",required:!0},actionText:{type:String,default:"",required:!0},goTo:{type:String,default:"",required:!0},formIsValid:{type:Boolean,default:!1,required:!1}},data(){return{}}},n=r,l=i("d9b7"),o=i("53f2"),c=i.n(o),d=i("d537"),u=i("9fa3"),h=i("3190"),p=Object(l["a"])(n,s,a,!1,null,null,null);t["a"]=p.exports;c()(p,{VBtn:d["a"],VCardActions:u["a"],VSpacer:h["a"]})},"34c3":function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[i("v-row",{attrs:{align:"center",justify:"center"}},[i("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[i("v-card",{staticClass:"elevation-12"},[i("TheLoginSnackbar",{attrs:{snackbarSuccess:e.snackbarSuccess,successText:"Sign up"},on:{snackbarRemoveSuccess:function(t){e.snackbarSuccess=!1}}}),i("v-toolbar",{attrs:{color:"primary",flat:""}},[i("v-toolbar-title",[e._v(e._s(this.$route.name))])],1),i("v-card-text",[i("v-form",{ref:"form",on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[i("TheUsernameField",{attrs:{minCounter:e.getMinCounterUsername,maxCounter:e.getMaxCounterUsername,fieldName:"Username",fieldLabel:"Username"},on:{errorCheck:function(t){e.usernameHasErrors=t}},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}}),i("TheFullNameField",{attrs:{minCounter:e.getMinCounterFullName,maxCounter:e.getMaxCounterFullName,fieldName:"Full name",fieldLabel:"Full name"},on:{errorCheck:function(t){e.fullNameHasErrors=t}},model:{value:e.form.fullname,callback:function(t){e.$set(e.form,"fullname",t)},expression:"form.fullname"}}),i("TheEmailField",{attrs:{maxCounterEmail:e.getMaxCounterEmail,fieldName:"E-mail",fieldLabel:"E-mail"},on:{errorCheck:function(t){e.emailHasErrors=t}},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),i("ThePasswordSetField",{staticClass:"mt-4",attrs:{minCounterPassword:e.getMinCounterPassword,maxCounterPassword:e.getMaxCounterPassword,regexExpression:e.getRegex,regexExpressionSpecialChars:e.getRegexSpecialCharacters,fieldName:"New password",fieldLabel:"New password"},on:{errorCheck:function(t){e.passwordSetHasErrors=t}},model:{value:e.form.passwordSet,callback:function(t){e.$set(e.form,"passwordSet",t)},expression:"form.passwordSet"}}),i("ThePasswordRepeatField",{attrs:{minCounterPassword:e.getMinCounterPassword,maxCounterPassword:e.getMaxCounterPassword,regexExpression:e.getRegex,confirmationField:e.form.passwordSet,fieldName:"Repeat password",fieldLabel:"Repeat password"},on:{errorCheck:function(t){e.passwordRepeatHasErrors=t}},model:{value:e.form.passwordRepeat,callback:function(t){e.$set(e.form,"passwordRepeat",t)},expression:"form.passwordRepeat"}}),i("TheRoleSelect",{attrs:{fieldName:"Role",fieldLabel:"Role",fieldItems:e.items},on:{errorCheck:function(t){e.roleHasErrors=t}},model:{value:e.form.role,callback:function(t){e.$set(e.form,"role",t)},expression:"form.role"}}),i("TheTermsCheckbox",{model:{value:e.form.terms,callback:function(t){e.$set(e.form,"terms",t)},expression:"form.terms"}})],1)],1),i("TheLoginButtons",{attrs:{formIsValid:e.formIsValid,goTo:"/login",goToText:"login",actionText:"sign up"},on:{goto:function(t){e.javascript},action:e.submit}})],1)],1)],1)],1)},a=[],r=i("d3c1"),n=i("2361"),l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:{required:!0,alpha_dash:!0,min:e.minCounter,max:e.maxCounter},expression:"{ required: true, alpha_dash: true, min: minCounter, max: maxCounter }"}],ref:e.componentName,attrs:{id:e.fieldId,name:e.componentName,"data-vv-name":e.fieldName,label:e.fieldLabel,"error-messages":e.errors.collect(e.fieldName),clearable:e.fieldClearable,disabled:e.fieldDisable,placeholder:e.fieldPlaceholder,readonly:e.fieldReadonly,"prepend-icon":"mdi-account","append-icon":e.copySymbol?"mdi-content-copy":""},on:{input:function(t){return e.$emit("input",t)},"update:error":function(t){e.$emit("errorCheck",e.errors.has(e.fieldName))},"click:append":function(t){return e.copyToClipboard()}}})},o=[],c={name:"TheUsernameField",props:{value:{type:String,default:""},minCounter:{type:Number,default:0,required:!0},maxCounter:{type:Number,default:0,required:!0},fieldName:{type:String,default:"",required:!0},fieldLabel:{type:String,default:"",required:!0},fieldPlaceholder:{type:String,default:"",required:!1},componentName:{type:String,default:"username",required:!1},fieldClearable:{type:Boolean,default:!0,required:!1},fieldDisable:{type:Boolean,default:!1,required:!1},fieldReadonly:{type:Boolean,default:!1,required:!1},copySymbol:{type:Boolean,default:!1,required:!1},fieldId:{type:String,default:"",required:!1}},methods:{copyToClipboard(){var e=document.getElementById(this.fieldId);e.select();try{document.execCommand("copy")}catch(t){alert("Unable to copy")}window.getSelection().removeAllRanges()}},data(){return{}}},d=c,u=i("d9b7"),h=i("53f2"),p=i.n(h),m=i("be99"),f=Object(u["a"])(d,l,o,!1,null,null,null),g=f.exports;p()(f,{VTextField:m["a"]});var v=i("050a"),b=i("968c"),y=i("376e"),x=i("9d3a"),C=i("ced57"),S=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-select",{directives:[{name:"validate",rawName:"v-validate",value:{required:!0},expression:"{ required: true}"}],ref:e.componentName,attrs:{id:e.fieldId,items:e.fieldItems,"menu-props":{top:!0,offsetY:!0},name:e.componentName,"data-vv-name":e.fieldName,label:e.fieldLabel,"error-messages":e.errors.collect(e.fieldName),"prepend-icon":"mdi-city-variant-outline",disabled:e.fieldDisable,placeholder:e.fieldPlaceholder,readonly:e.fieldReadonly},on:{input:function(t){return e.$emit("input",t)},"update:error":function(t){e.$emit("errorCheck",e.errors.has(e.fieldName))},"click:append":function(t){return e.copyToClipboard()}}})},$=[],I={name:"TheRoleSelect",props:{value:{type:String,default:""},fieldName:{type:String,default:"",required:!0},fieldLabel:{type:String,default:"",required:!0},fieldItems:{type:Array,default:()=>[],required:!0},fieldPlaceholder:{type:String,default:"",required:!1},componentName:{type:String,default:"role",required:!1},fieldDisable:{type:Boolean,default:!1,required:!1},fieldReadonly:{type:Boolean,default:!1,required:!1},fieldId:{type:String,default:"",required:!1}},methods:{copyToClipboard(){var e=document.getElementById(this.fieldId);e.select();try{document.execCommand("copy")}catch(t){alert("Unable to copy")}window.getSelection().removeAllRanges()}},data(){return{}}},T=I,k=(i("6628"),i("83a0"),i("ae1a")),w=i("cfa5"),E=(i("5ec3"),i("c463"),i("6b34")),B=i("da3e"),M=i("d958"),V=i("760a"),A=i("be01"),D=i("b0d1"),N=B["a"].extend({name:"v-simple-checkbox",functional:!0,directives:{ripple:E["a"]},props:{...V["a"].options.props,...A["a"].options.props,disabled:Boolean,ripple:{type:Boolean,default:!0},value:Boolean,indeterminate:Boolean,indeterminateIcon:{type:String,default:"$vuetify.icons.checkboxIndeterminate"},onIcon:{type:String,default:"$vuetify.icons.checkboxOn"},offIcon:{type:String,default:"$vuetify.icons.checkboxOff"}},render(e,{props:t,data:i}){const s=[];if(t.ripple&&!t.disabled){const i=e("div",V["a"].options.methods.setTextColor(t.color,{staticClass:"v-input--selection-controls__ripple",directives:[{name:"ripple",value:{center:!0}}]}));s.push(i)}let a=t.offIcon;t.indeterminate?a=t.indeterminateIcon:t.value&&(a=t.onIcon),s.push(e(M["a"],V["a"].options.methods.setTextColor(t.value&&t.color,{props:{disabled:t.disabled,dark:t.dark,light:t.light}}),a));const r={"v-simple-checkbox":!0,"v-simple-checkbox--disabled":t.disabled};return e("div",{...i,class:r,on:{click:e=>{e.stopPropagation(),i.on&&i.on.input&&!t.disabled&&Object(D["w"])(i.on.input).forEach(e=>e(!t.value))}}},s)}}),q=i("f322"),_=i("86c5"),L=i("542b"),O=i("2425"),F=i("c071"),j=i("9802"),P=i("2c7d"),R=Object(P["a"])(V["a"],A["a"]).extend({name:"v-select-list",directives:{ripple:E["a"]},props:{action:Boolean,dense:Boolean,hideSelected:Boolean,items:{type:Array,default:()=>[]},itemDisabled:{type:[String,Array,Function],default:"disabled"},itemText:{type:[String,Array,Function],default:"text"},itemValue:{type:[String,Array,Function],default:"value"},noDataText:String,noFilter:Boolean,searchInput:{default:null},selectedItems:{type:Array,default:()=>[]}},computed:{parsedItems(){return this.selectedItems.map(e=>this.getValue(e))},tileActiveClass(){return Object.keys(this.setTextColor(this.color).class||{}).join(" ")},staticNoDataTile(){const e={attrs:{role:void 0},on:{mousedown:e=>e.preventDefault()}};return this.$createElement(L["a"],e,[this.genTileContent(this.noDataText)])}},methods:{genAction(e,t){return this.$createElement(O["a"],[this.$createElement(N,{props:{color:this.color,value:t},on:{input:()=>this.$emit("select",e)}})])},genDivider(e){return this.$createElement(q["a"],{props:e})},genFilteredText(e){if(e=e||"",!this.searchInput||this.noFilter)return Object(D["j"])(e);const{start:t,middle:i,end:s}=this.getMaskedCharacters(e);return`${Object(D["j"])(t)}${this.genHighlight(i)}${Object(D["j"])(s)}`},genHeader(e){return this.$createElement(_["a"],{props:e},e.header)},genHighlight(e){return`<span class="v-list-item__mask">${Object(D["j"])(e)}</span>`},genLabelledBy(e){const t=Object(D["j"])(this.getText(e).split(" ").join("-").toLowerCase());return`${t}-list-item-${this._uid}`},getMaskedCharacters(e){const t=(this.searchInput||"").toString().toLocaleLowerCase(),i=e.toLocaleLowerCase().indexOf(t);if(i<0)return{start:"",middle:e,end:""};const s=e.slice(0,i),a=e.slice(i,i+t.length),r=e.slice(i+t.length);return{start:s,middle:a,end:r}},genTile(e,t=null,i=!1){i||(i=this.hasItem(e)),e===Object(e)&&(t=null!==t?t:this.getDisabled(e));const s={attrs:{"aria-selected":String(i),"aria-labelledby":this.genLabelledBy(e),role:"option"},on:{mousedown:e=>{e.preventDefault()},click:()=>t||this.$emit("select",e)},props:{activeClass:this.tileActiveClass,disabled:t,ripple:!0,inputValue:i}};if(!this.$scopedSlots.item)return this.$createElement(L["a"],s,[this.action&&!this.hideSelected&&this.items.length>0?this.genAction(e,i):null,this.genTileContent(e)]);const a=this,r=this.$scopedSlots.item({parent:a,item:e,attrs:{...s.attrs,...s.props},on:s.on});return this.needsTile(r)?this.$createElement(L["a"],s,r):r},genTileContent(e){const t=this.genFilteredText(this.getText(e));return this.$createElement(F["b"],[this.$createElement(F["d"],{attrs:{id:this.genLabelledBy(e)},domProps:{innerHTML:t}})])},hasItem(e){return this.parsedItems.indexOf(this.getValue(e))>-1},needsTile(e){return 1!==e.length||null==e[0].componentOptions||"v-list-item"!==e[0].componentOptions.Ctor.options.name},getDisabled(e){return Boolean(Object(D["m"])(e,this.itemDisabled,!1))},getText(e){return String(Object(D["m"])(e,this.itemText,e))},getValue(e){return Object(D["m"])(e,this.itemValue,this.getText(e))}},render(){const e=[];for(const t of this.items)this.hideSelected&&this.hasItem(t)||(null==t?e.push(this.genTile(t)):t.header?e.push(this.genHeader(t)):t.divider?e.push(this.genDivider(t)):e.push(this.genTile(t)));return e.length||e.push(this.$slots["no-data"]||this.staticNoDataTile),this.$slots["prepend-item"]&&e.unshift(this.$slots["prepend-item"]),this.$slots["append-item"]&&e.push(this.$slots["append-item"]),this.$createElement("div",{staticClass:"v-select-list v-card",class:this.themeClasses},[this.$createElement(j["a"],{attrs:{id:this.$attrs.id,role:"listbox",tabindex:-1},props:{dense:this.dense}},e)])}}),H=i("95ba"),U=B["a"].extend({name:"filterable",props:{noDataText:{type:String,default:"$vuetify.noDataText"}}}),z=i("a368"),G=i("dc83");const J={closeOnClick:!1,closeOnContentClick:!1,disableKeys:!0,openOnClick:!1,maxHeight:304},K=Object(P["a"])(m["a"],H["a"],U);var W=K.extend().extend({name:"v-select",directives:{ClickOutside:z["a"]},props:{appendIcon:{type:String,default:"$vuetify.icons.dropdown"},attach:{default:!1},cacheItems:Boolean,chips:Boolean,clearable:Boolean,deletableChips:Boolean,dense:Boolean,eager:Boolean,hideSelected:Boolean,items:{type:Array,default:()=>[]},itemColor:{type:String,default:"primary"},itemDisabled:{type:[String,Array,Function],default:"disabled"},itemText:{type:[String,Array,Function],default:"text"},itemValue:{type:[String,Array,Function],default:"value"},menuProps:{type:[String,Array,Object],default:()=>J},multiple:Boolean,openOnClear:Boolean,returnObject:Boolean,smallChips:Boolean},data(){return{cachedItems:this.cacheItems?this.items:[],content:null,isBooted:!1,isMenuActive:!1,lastItem:20,lazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,selectedIndex:-1,selectedItems:[],keyboardLookupPrefix:"",keyboardLookupLastTime:0}},computed:{allItems(){return this.filterDuplicates(this.cachedItems.concat(this.items))},classes(){return{...m["a"].options.computed.classes.call(this),"v-select":!0,"v-select--chips":this.hasChips,"v-select--chips--small":this.smallChips,"v-select--is-menu-active":this.isMenuActive}},computedItems(){return this.allItems},computedOwns(){return`list-${this._uid}`},counterValue(){return this.multiple?this.selectedItems.length:(this.getText(this.selectedItems[0])||"").toString().length},directives(){return this.isFocused?[{name:"click-outside",value:this.blur,args:{closeConditional:this.closeConditional}}]:void 0},dynamicHeight(){return"auto"},hasChips(){return this.chips||this.smallChips},hasSlot(){return Boolean(this.hasChips||this.$scopedSlots.selection)},isDirty(){return this.selectedItems.length>0},listData(){const e=this.$vnode&&this.$vnode.context.$options._scopeId,t=e?{[e]:!0}:{};return{attrs:{...t,id:this.computedOwns},props:{action:this.multiple,color:this.itemColor,dense:this.dense,hideSelected:this.hideSelected,items:this.virtualizedItems,noDataText:this.$vuetify.lang.t(this.noDataText),selectedItems:this.selectedItems,itemDisabled:this.itemDisabled,itemValue:this.itemValue,itemText:this.itemText},on:{select:this.selectItem},scopedSlots:{item:this.$scopedSlots.item}}},staticList(){return(this.$slots["no-data"]||this.$slots["prepend-item"]||this.$slots["append-item"])&&Object(G["b"])("assert: staticList should not be called if slots are used"),this.$createElement(R,this.listData)},virtualizedItems(){return this.$_menuProps.auto?this.computedItems:this.computedItems.slice(0,this.lastItem)},menuCanShow:()=>!0,$_menuProps(){let e="string"===typeof this.menuProps?this.menuProps.split(","):this.menuProps;return Array.isArray(e)&&(e=e.reduce((e,t)=>{return e[t.trim()]=!0,e},{})),{...J,eager:this.eager,value:this.menuCanShow&&this.isMenuActive,nudgeBottom:e.offsetY?1:0,...e}}},watch:{internalValue(e){this.initialValue=e,this.setSelectedItems()},isBooted(){this.$nextTick(()=>{this.content&&this.content.addEventListener&&this.content.addEventListener("scroll",this.onScroll,!1)})},isMenuActive(e){this.$nextTick(()=>this.onMenuActiveChange(e)),e&&(this.isBooted=!0)},items:{immediate:!0,handler(e){this.cacheItems&&this.$nextTick(()=>{this.cachedItems=this.filterDuplicates(this.cachedItems.concat(e))}),this.setSelectedItems()}}},mounted(){this.content=this.$refs.menu&&this.$refs.menu.$refs.content},methods:{blur(e){m["a"].options.methods.blur.call(this,e),this.isMenuActive=!1,this.isFocused=!1,this.selectedIndex=-1},activateMenu(){this.disabled||this.readonly||this.isMenuActive||(this.isMenuActive=!0)},clearableCallback(){this.setValue(this.multiple?[]:void 0),this.$nextTick(()=>this.$refs.input&&this.$refs.input.focus()),this.openOnClear&&(this.isMenuActive=!0)},closeConditional(e){return!this._isDestroyed&&this.content&&!this.content.contains(e.target)&&this.$el&&!this.$el.contains(e.target)&&e.target!==this.$el},filterDuplicates(e){const t=new Map;for(let i=0;i<e.length;++i){const s=e[i],a=this.getValue(s);!t.has(a)&&t.set(a,s)}return Array.from(t.values())},findExistingIndex(e){const t=this.getValue(e);return(this.internalValue||[]).findIndex(e=>this.valueComparator(this.getValue(e),t))},genChipSelection(e,t){const i=this.disabled||this.readonly||this.getDisabled(e);return this.$createElement(k["a"],{staticClass:"v-chip--select",attrs:{tabindex:-1},props:{close:this.deletableChips&&!i,disabled:i,inputValue:t===this.selectedIndex,small:this.smallChips},on:{click:e=>{i||(e.stopPropagation(),this.selectedIndex=t)},focus:focus,"click:close":()=>this.onChipInput(e)},key:JSON.stringify(this.getValue(e))},this.getText(e))},genCommaSelection(e,t,i){const s=t===this.selectedIndex&&this.color,a=this.disabled||this.getDisabled(e);return this.$createElement("div",this.setTextColor(s,{staticClass:"v-select__selection v-select__selection--comma",class:{"v-select__selection--disabled":a},key:JSON.stringify(this.getValue(e))}),`${this.getText(e)}${i?"":", "}`)},genDefaultSlot(){const e=this.genSelections(),t=this.genInput();return Array.isArray(e)?e.push(t):(e.children=e.children||[],e.children.push(t)),[this.genFieldset(),this.$createElement("div",{staticClass:"v-select__slot",directives:this.directives},[this.genLabel(),this.prefix?this.genAffix("prefix"):null,e,this.suffix?this.genAffix("suffix"):null,this.genClearIcon(),this.genIconSlot()]),this.genMenu(),this.genProgress()]},genInput(){const e=m["a"].options.methods.genInput.call(this);return e.data.domProps.value=null,e.data.attrs.readonly=!0,e.data.attrs.type="text",e.data.attrs["aria-readonly"]=!0,e.data.on.keypress=this.onKeyPress,e},genInputSlot(){const e=m["a"].options.methods.genInputSlot.call(this);return e.data.attrs={...e.data.attrs,role:"button","aria-haspopup":"listbox","aria-expanded":String(this.isMenuActive),"aria-owns":this.computedOwns},e},genList(){return this.$slots["no-data"]||this.$slots["prepend-item"]||this.$slots["append-item"]?this.genListWithSlot():this.staticList},genListWithSlot(){const e=["prepend-item","no-data","append-item"].filter(e=>this.$slots[e]).map(e=>this.$createElement("template",{slot:e},this.$slots[e]));return this.$createElement(R,{...this.listData},e)},genMenu(){const e=this.$_menuProps;return e.activator=this.$refs["input-slot"],""===this.attach||!0===this.attach||"attach"===this.attach?e.attach=this.$el:e.attach=this.attach,this.$createElement(w["a"],{attrs:{role:void 0},props:e,on:{input:e=>{this.isMenuActive=e,this.isFocused=e}},ref:"menu"},[this.genList()])},genSelections(){let e=this.selectedItems.length;const t=new Array(e);let i;i=this.$scopedSlots.selection?this.genSlotSelection:this.hasChips?this.genChipSelection:this.genCommaSelection;while(e--)t[e]=i(this.selectedItems[e],e,e===t.length-1);return this.$createElement("div",{staticClass:"v-select__selections"},t)},genSlotSelection(e,t){return this.$scopedSlots.selection({attrs:{class:"v-chip--select"},parent:this,item:e,index:t,select:e=>{e.stopPropagation(),this.selectedIndex=t},selected:t===this.selectedIndex,disabled:this.disabled||this.readonly})},getMenuIndex(){return this.$refs.menu?this.$refs.menu.listIndex:-1},getDisabled(e){return Object(D["m"])(e,this.itemDisabled,!1)},getText(e){return Object(D["m"])(e,this.itemText,e)},getValue(e){return Object(D["m"])(e,this.itemValue,this.getText(e))},onBlur(e){e&&this.$emit("blur",e)},onChipInput(e){this.multiple?this.selectItem(e):this.setValue(null),0===this.selectedItems.length?this.isMenuActive=!0:this.isMenuActive=!1,this.selectedIndex=-1},onClick(){this.isDisabled||(this.isMenuActive=!0,this.isFocused||(this.isFocused=!0,this.$emit("focus")))},onEscDown(e){e.preventDefault(),this.isMenuActive&&(e.stopPropagation(),this.isMenuActive=!1)},onKeyPress(e){if(this.multiple||this.readonly)return;const t=1e3,i=performance.now();i-this.keyboardLookupLastTime>t&&(this.keyboardLookupPrefix=""),this.keyboardLookupPrefix+=e.key.toLowerCase(),this.keyboardLookupLastTime=i;const s=this.allItems.findIndex(e=>{const t=(this.getText(e)||"").toString();return t.toLowerCase().startsWith(this.keyboardLookupPrefix)}),a=this.allItems[s];-1!==s&&(this.setValue(this.returnObject?a:this.getValue(a)),setTimeout(()=>this.setMenuIndex(s)))},onKeyDown(e){const t=e.keyCode,i=this.$refs.menu;if([D["r"].enter,D["r"].space].includes(t)&&this.activateMenu(),i)return this.isMenuActive&&t!==D["r"].tab&&i.changeListIndex(e),!this.isMenuActive&&[D["r"].up,D["r"].down].includes(t)?this.onUpDown(e):t===D["r"].esc?this.onEscDown(e):t===D["r"].tab?this.onTabDown(e):t===D["r"].space?this.onSpaceDown(e):void 0},onMenuActiveChange(e){if(this.multiple&&!e||this.getMenuIndex()>-1)return;const t=this.$refs.menu;if(t&&this.isDirty)for(let i=0;i<t.tiles.length;i++)if("true"===t.tiles[i].getAttribute("aria-selected")){this.setMenuIndex(i);break}},onMouseUp(e){if(this.hasMouseDown&&3!==e.which){const t=this.$refs["append-inner"];this.isMenuActive&&t&&(t===e.target||t.contains(e.target))?this.$nextTick(()=>this.isMenuActive=!this.isMenuActive):this.isEnclosed&&!this.isDisabled&&(this.isMenuActive=!0)}m["a"].options.methods.onMouseUp.call(this,e)},onScroll(){if(this.isMenuActive){if(this.lastItem>=this.computedItems.length)return;const e=this.content.scrollHeight-(this.content.scrollTop+this.content.clientHeight)<200;e&&(this.lastItem+=20)}else requestAnimationFrame(()=>this.content.scrollTop=0)},onSpaceDown(e){e.preventDefault()},onTabDown(e){const t=this.$refs.menu;if(!t)return;const i=t.activeTile;!this.multiple&&i&&this.isMenuActive?(e.preventDefault(),e.stopPropagation(),i.click()):this.blur(e)},onUpDown(e){const t=this.$refs.menu;if(!t)return;if(e.preventDefault(),this.multiple)return this.activateMenu();const i=e.keyCode;t.getTiles(),D["r"].up===i?t.prevTile():t.nextTile(),t.activeTile&&t.activeTile.click()},selectItem(e){if(this.multiple){const t=(this.internalValue||[]).slice(),i=this.findExistingIndex(e);if(-1!==i?t.splice(i,1):t.push(e),this.setValue(t.map(e=>{return this.returnObject?e:this.getValue(e)})),this.$nextTick(()=>{this.$refs.menu&&this.$refs.menu.updateDimensions()}),!this.multiple)return;const s=this.getMenuIndex();if(this.setMenuIndex(-1),this.hideSelected)return;this.$nextTick(()=>this.setMenuIndex(s))}else this.setValue(this.returnObject?e:this.getValue(e)),this.isMenuActive=!1},setMenuIndex(e){this.$refs.menu&&(this.$refs.menu.listIndex=e)},setSelectedItems(){const e=[],t=this.multiple&&Array.isArray(this.internalValue)?this.internalValue:[this.internalValue];for(const i of t){const t=this.allItems.findIndex(e=>this.valueComparator(this.getValue(e),this.getValue(i)));t>-1&&e.push(this.allItems[t])}this.selectedItems=e},setValue(e){const t=this.internalValue;this.internalValue=e,e!==t&&this.$emit("change",e)}}}),Y=Object(u["a"])(T,S,$,!1,null,null,null),Z=Y.exports;p()(Y,{VSelect:W});var Q=i("2ba1"),X={data(){const e=Object.freeze({username:"",fullname:"",email:"",passwordSet:"",passwordRepeat:"",role:"",terms:!1});return{form:Object.assign({},e),defaultForm:e,snackbarSuccess:!1,items:[{text:"Student"},{text:"Teacher"}],defaultItem:"",usernameHasErrors:!1,fullNameHasErrors:!1,emailHasErrors:!1,passwordSetHasErrors:!1,passwordRepeatHasErrors:!1,roleHasErrors:!1,testProp:!1}},mounted(){this.defaultItem=this.items[0]},computed:{...Object(Q["b"])(["isLoggedIn","user"]),formIsValid(){return""!==this.form.username&&""!==this.form.fullname&&""!==this.form.email&&""!==this.form.passwordSet&&""!==this.form.passwordRepeat&&""!==this.form.role&&!this.usernameHasErrors&&!this.fullNameHasErrors&&!this.emailHasErrors&&!this.passwordSetHasErrors&&!this.passwordRepeatHasErrors&&!this.roleHasErrors},getMinCounterFullName(){return parseInt("0")},getMaxCounterFullName(){return parseInt("50")},getMinCounterUsername(){return parseInt("3")},getMaxCounterUsername(){return parseInt("40")},getMaxCounterEmail(){return parseInt("100")},getMinCounterPassword(){return parseInt("8")},getMaxCounterPassword(){return parseInt("128")},getRegex(){return new RegExp("^([a-zA-Z0-9$&+,:;=?@#'<>.^*()%!-]+)$")},getRegexSpecialCharacters(){return new RegExp("^([a-zA-Z0-9$&+,:;=?@#'<>.^*()%!-]+)$")}},components:{TheLoginSnackbar:r["a"],TheLoginButtons:n["a"],TheUsernameField:g,TheFullNameField:v["a"],ThePasswordSetField:b["a"],ThePasswordRepeatField:y["a"],TheEmailField:C["a"],TheRoleSelect:Z,TheTermsCheckbox:x["a"]},methods:{resetForm(){this.form=Object.assign({},this.defaultForm),this.$refs.form.reset()},submit(){this.snackbarSuccess=!0}}},ee=X,te=i("0a8f"),ie=i("9fa3"),se=i("baa6"),ae=i("9561"),re=i("e4ef"),ne=i("e640"),le=i("43eb"),oe=i("906a"),ce=Object(u["a"])(ee,s,a,!1,null,null,null);t["default"]=ce.exports;p()(ce,{VCard:te["a"],VCardText:ie["b"],VCol:se["a"],VContainer:ae["a"],VForm:re["a"],VRow:ne["a"],VToolbar:le["a"],VToolbarTitle:oe["b"]})},"52fc":function(e,t,i){"use strict";i("21a5");var s=i("2c7d"),a=i("3c2a"),r=i("2501"),n=i("760a"),l=i("94a9"),o=i("be01"),c=i("b112"),d=i("bff5"),u=i("e864"),h=i("dc83");t["a"]=Object(s["a"])(n["a"],u["a"],d["a"],o["a"],Object(l["a"])("chipGroup"),Object(c["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$vuetify.icons.delete"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$vuetify.icons.complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:()=>({proxyClass:"v-chip--active"}),computed:{classes(){return{"v-chip":!0,...d["a"].options.computed.classes.call(this),"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose,...this.themeClasses,...this.sizeableClasses,...this.groupClasses}},hasClose(){return Boolean(this.close)},isClickable(){return Boolean(d["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created(){const e=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];e.forEach(([e,t])=>{this.$attrs.hasOwnProperty(e)&&Object(h["a"])(e,t,this)})},methods:{click(e){this.$emit("click",e),this.chipGroup&&this.toggle()},genFilter(){const e=[];return this.isActive&&e.push(this.$createElement(r["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(a["b"],e)},genClose(){return this.$createElement(r["a"],{staticClass:"v-chip__close",props:{right:!0},on:{click:e=>{e.stopPropagation(),this.$emit("click:close"),this.$emit("update:active",!1)}}},this.closeIcon)},genContent(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render(e){const t=[this.genContent()];let{tag:i,data:s}=this.generateRouteLink();s.attrs={...s.attrs,draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:s.attrs.tabindex},s.directives.push({name:"show",value:this.active}),s=this.setBackgroundColor(this.color,s);const a=this.textColor||this.outlined&&this.color;return e(i,this.setTextColor(a,s),t)}})},"83a0":function(e,t,i){},"86c5":function(e,t,i){"use strict";var s=i("2b67");t["a"]=s["a"]},ae1a:function(e,t,i){"use strict";var s=i("52fc");t["a"]=s["a"]},c463:function(e,t,i){},ced57:function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:{required:!0,email:!0,max:e.maxCounterEmail},expression:"{ required: true, email: true, max: maxCounterEmail }"}],ref:e.emailName,attrs:{id:e.fieldId,name:e.emailName,"data-vv-name":e.fieldName,label:e.fieldLabel,"error-messages":e.errors.collect(e.fieldName),clearable:e.fieldClearable,disabled:e.fieldDisable,placeholder:e.fieldPlaceholder,readonly:e.fieldReadonly,"prepend-icon":"mdi-email-outline","append-icon":e.copySymbol?"mdi-content-copy":""},on:{input:function(t){return e.$emit("input",t)},"update:error":function(t){e.$emit("errorCheck",e.errors.has(e.fieldName))},"click:append":function(t){return e.copyToClipboard()}}})},a=[],r={name:"TheEmailField",props:{value:{type:String,default:""},maxCounterEmail:{type:Number,default:0,required:!0},fieldName:{type:String,default:"",required:!0},fieldLabel:{type:String,default:"",required:!0},fieldPlaceholder:{type:String,default:"",required:!1},emailName:{type:String,default:"email",required:!1},fieldClearable:{type:Boolean,default:!0,required:!1},fieldDisable:{type:Boolean,default:!1,required:!1},fieldReadonly:{type:Boolean,default:!1,required:!1},copySymbol:{type:Boolean,default:!1,required:!1},fieldId:{type:String,default:"",required:!1}},methods:{copyToClipboard(){var e=document.getElementById(this.fieldId);e.select();try{document.execCommand("copy")}catch(t){alert("Unable to copy")}window.getSelection().removeAllRanges()}},data(){return{}}},n=r,l=i("d9b7"),o=i("53f2"),c=i.n(o),d=i("be99"),u=Object(l["a"])(n,s,a,!1,null,null,null);t["a"]=u.exports;c()(u,{VTextField:d["a"]})},cfa5:function(e,t,i){"use strict";var s=i("7b53");t["a"]=s["a"]},d3c1:function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("v-snackbar",{attrs:{value:e.snackbarSuccess,top:"",color:"success"},on:{input:function(t){return e.$emit("snackbarRemoveSuccess")}}},[i("span",[e._v(e._s(e.successText)+" successfully!")]),i("v-icon",{attrs:{dark:""}},[e._v("mdi-check-circle")])],1),i("v-snackbar",{attrs:{value:e.snackbarError,top:"",color:"error"},on:{input:function(t){return e.$emit("snackbarRemoveError")}}},[i("span",[e._v(e._s(e.errorText))]),i("v-icon",{attrs:{dark:""}},[e._v("mdi-alert")])],1)],1)},a=[],r={name:"TheLoginSnackbar",computed:{},props:{value:{type:String,default:""},snackbarSuccess:{type:Boolean,default:!1,required:!0},successText:{type:String,default:"",required:!0},snackbarError:{type:Boolean,default:!1,required:!1},errorText:{type:String,default:"",required:!1}},data(){return{}}},n=r,l=i("d9b7"),o=i("53f2"),c=i.n(o),d=i("d958"),u=i("3854"),h=Object(l["a"])(n,s,a,!1,null,null,null);t["a"]=h.exports;c()(h,{VIcon:d["a"],VSnackbar:u["a"]})},e64b:function(e,t,i){},f322:function(e,t,i){"use strict";var s=i("0804");t["a"]=s["a"]}}]);
//# sourceMappingURL=chunk-5dd221ec.00f21ba7.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-46c4af27"],{"0c35":function(t,e,s){},"157c":function(t,e,s){"use strict";s("2ed1");var i=s("f658");e["a"]=i["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render(t){let e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:{"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical,...this.themeClasses},attrs:{role:"separator","aria-orientation":e,...this.$attrs},on:this.$listeners})}})},"2ed1":function(t,e,s){},3816:function(t,e,s){},5092:function(t,e,s){"use strict";var i=s("da3e");e["a"]=i["a"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}})},"57c0":function(t,e,s){"use strict";var i=s("da3e"),a=s("793a");e["a"]=i["a"].extend({name:"comparable",props:{valueComparator:{type:Function,default:a["i"]}}})},"5ccb":function(t,e,s){},"6a07":function(t,e,s){},"6c4f":function(t,e,s){},"76f5":function(t,e,s){"use strict";s("6c4f"),s("0c35");var i=s("e75d"),a=s("bdc9"),n=s("37f5"),r=s("da3e"),l=r["a"].extend({name:"rippleable",directives:{ripple:n["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple(t={}){return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),t.on=Object.assign({click:this.onChange},this.$listeners),this.$createElement("div",t)):null},onChange(){}}}),o=s("57c0"),c=s("6015"),h=Object(c["a"])(a["a"],l,o["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"accent"},isMultiple(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive(){const t=this.value,e=this.internalValue;return this.isMultiple?!!Array.isArray(e)&&e.some(e=>this.valueComparator(e,t)):void 0===this.trueValue||void 0===this.falseValue?t?this.valueComparator(t,e):Boolean(e):this.valueComparator(e,this.trueValue)},isDirty(){return this.isActive}},watch:{inputValue(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel(){const t=a["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:t=>{t.preventDefault(),this.onChange()}},t):t},genInput(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown},ref:"input"})},onBlur(){this.isFocused=!1},onChange(){if(this.isDisabled)return;const t=this.value;let e=this.internalValue;if(this.isMultiple){Array.isArray(e)||(e=[]);const s=e.length;e=e.filter(e=>!this.valueComparator(e,t)),e.length===s&&e.push(t)}else e=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(e,this.trueValue)?this.falseValue:this.trueValue:t?this.valueComparator(e,t)?null:t:!e;this.validate(!0,e),this.internalValue=e,this.hasColor=e},onFocus(){this.isFocused=!0},onKeydown(t){}}});e["a"]=h.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$vuetify.icons.checkboxIndeterminate"},onIcon:{type:String,default:"$vuetify.icons.checkboxOn"},offIcon:{type:String,default:"$vuetify.icons.checkboxOff"}},data(){return{inputIndeterminate:this.indeterminate}},computed:{classes(){return{...a["a"].options.computed.classes.call(this),"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate}},computedIcon(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState(){if(!this.disabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":this.hasColor?this.computedColor:void 0}},watch:{indeterminate(t){this.inputIndeterminate=t},inputIndeterminate(t){this.$emit("update:indeterminate",t)},isActive(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",{...this.$attrs,"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()}),this.genRipple(this.setTextColor(this.validationState)),this.$createElement(i["a"],this.setTextColor(this.validationState,{props:{dark:this.dark,light:this.light}}),this.computedIcon)])},genDefaultSlot(){return[this.genCheckbox(),this.genLabel()]}}})},8639:function(t,e,s){"use strict";s("9fd0");var i=s("6015"),a=s("1109"),n=s("e75d"),r=s("6031"),l=s("2ae5"),o=s("f658"),c=s("aa40"),h=s("4d39"),d=s("61b4"),u=s("0967");e["a"]=Object(i["a"])(r["a"],d["a"],h["a"],o["a"],Object(l["a"])("chipGroup"),Object(c["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$vuetify.icons.delete"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$vuetify.icons.complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:()=>({proxyClass:"v-chip--active"}),computed:{classes(){return{"v-chip":!0,...h["a"].options.computed.classes.call(this),"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose,...this.themeClasses,...this.sizeableClasses,...this.groupClasses}},hasClose(){return Boolean(this.close)},isClickable(){return Boolean(h["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created(){const t=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];t.forEach(([t,e])=>{this.$attrs.hasOwnProperty(t)&&Object(u["a"])(t,e,this)})},methods:{click(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter(){const t=[];return this.isActive&&t.push(this.$createElement(n["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(a["b"],t)},genClose(){return this.$createElement(n["a"],{staticClass:"v-chip__close",props:{right:!0},on:{click:t=>{t.stopPropagation(),this.$emit("click:close"),this.$emit("update:active",!1)}}},this.closeIcon)},genContent(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render(t){const e=[this.genContent()];let{tag:s,data:i}=this.generateRouteLink();i.attrs={...i.attrs,draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:i.attrs.tabindex},i.directives.push({name:"show",value:this.active}),i=this.setBackgroundColor(this.color,i);const a=this.textColor||this.outlined&&this.color;return t(s,this.setTextColor(a,i),e)}})},"9f72":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-overlay",{attrs:{value:t.showWelcomeScreen}},[s("v-card",{attrs:{"max-width":"400"}},[s("v-card-title",[t._v("Welcome to the Course!")]),s("v-card-text",[t._v("Important notes")]),s("v-card-actions",[s("v-spacer"),s("v-btn",{on:{click:function(e){t.showWelcomeScreen=!1}}},[t._v("Accept")])],1)],1)],1),s("TheCourse")],1)},a=[],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-row",{attrs:{"no-gutters":""}},[s("v-col",[s("v-card",{attrs:{"max-width":"1200",color:"transparent",flat:""}},[s("v-toolbar",[s("v-toolbar-title",[t._v("[18/19 W] Computergraphics")]),s("v-spacer"),s("ResourceDownloadDialog")],1),s("v-card-text",[s("v-card",{attrs:{flat:""}},[s("v-card-text",[s("v-toolbar",{attrs:{dense:""}},[s("v-toolbar-title",[t._v("Announcements")]),s("v-spacer"),s("ResourceDownloadDialog")],1),s("v-card-text",[s("div",{staticClass:"warning black--text"},[t._v("fetch this data from database later")]),s("h4",{attrs:{id:"lecture-"}},[t._v("Lecture:")]),s("ul",[s("li",[t._v("Thursday from 10:00 - 12:00 "),s("strong",[t._v("Room 453 Main")])]),s("li",[s("strong",[t._v("Start at 19.08.2019")])])]),s("h4",{attrs:{id:"tutorials-"}},[t._v("Tutorials:")]),s("ul",[s("li",[t._v("Monday from 17:00 - 18:00 "),s("strong",[t._v("Room 292")])]),s("li",[t._v("Friday from 20:00 - 12:00")])])]),s("v-divider"),s("v-list",{attrs:{dense:""}},[s("v-list-item-group",[s("v-list-item",[s("v-list-item-icon",[s("v-icon",[t._v("mdi-forum")])],1),s("v-list-item-content",[s("v-list-item-title",[t._v("Announcements")])],1)],1),s("v-list-item",[s("v-list-item-icon",[s("v-icon",[t._v("mdi-forum")])],1),s("v-list-item-content",[s("v-list-item-title",[t._v("Studentforum")])],1)],1),s("v-list-item",[s("v-list-item-icon",[s("v-icon",[t._v("mdi-file-pdf")])],1),s("v-list-item-content",[s("v-list-item-title",[t._v("Script")])],1)],1)],1)],1)],1)],1),s("v-card",{attrs:{flat:""}},[s("v-card-text",[s("v-toolbar",{attrs:{dense:""}},[s("v-toolbar-title",[t._v("Week 19.08 - 25.08")]),s("v-spacer"),s("ResourceDownloadDialog")],1),s("v-card-text",[s("div",[t._v("empty")])]),s("v-divider"),s("v-list",{attrs:{dense:""}},[s("v-list-item-group",[s("v-list-item",[s("v-list-item-icon",[s("v-icon",[t._v("mdi-file-pdf")])],1),s("v-list-item-content",[s("v-list-item-title",[t._v("Lecture 00 (Introduction)")])],1)],1),s("v-list-item",[s("v-list-item-icon",[s("v-icon",[t._v("mdi-map-marker-question")])],1),s("v-list-item-content",[s("v-list-item-title",[t._v("Quiz 01 (Raytrace)")])],1)],1),s("v-list-item",[s("v-list-item-icon",[s("v-icon",[t._v("mdi-file-pdf")])],1),s("v-list-item-content",[s("v-list-item-title",[t._v("Helper")])],1)],1),s("v-list-item",[s("v-list-item-icon",[s("v-icon",[t._v("mdi-file-video")])],1),s("v-list-item-content",[s("v-list-item-title",[t._v("Lecture 00 (Video)")])],1)],1)],1)],1)],1)],1),s("v-card",{attrs:{flat:""}},[s("v-card-text",[s("v-toolbar",{attrs:{dense:""}},[s("v-toolbar-title",[t._v("Week 19.08 - 25.08")]),s("v-spacer"),s("ResourceDownloadDialog")],1)],1)],1)],1)],1)],1)],1)},r=[],l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-dialog",{attrs:{"max-width":t.maxWidth,"max-height":"430","min-height":"400"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[s("v-btn",t._g({attrs:{icon:"",small:""}},i),[s("v-icon",[t._v("mdi-download-multiple")])],1)]}}]),model:{value:t.showDialog,callback:function(e){t.showDialog=e},expression:"showDialog"}},[s("v-card",[s("v-card-title",[s("span",[t._v("Select Resources")]),s("v-spacer"),s("v-card-actions",[s("v-checkbox",{attrs:{label:t.isSelectAllSelected?"Deselect All":"Select All"},on:{change:t.checkboxChanged},model:{value:t.isSelectAllSelected,callback:function(e){t.isSelectAllSelected=e},expression:"isSelectAllSelected"}})],1)],1),s("v-divider"),s("v-list",[s("v-list-item-group",{attrs:{multiple:""},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},t._l(t.filteredResources,function(e){return s("v-list-item",{key:e.name,scopedSlots:t._u([{key:"default",fn:function(i){var a=i.active;i.toggle;return[s("v-list-item-icon",[s("v-icon",[t._v(t._s(t.fileTypeIconMapping[e.fileType]))])],1),s("v-list-item-content",[s("v-list-item-title",[t._v(t._s(e.name))])],1),s("v-list-item-action",[a?s("v-icon",{staticClass:"green--text"},[t._v("mdi-checkbox-blank-circle")]):s("v-icon",{staticClass:"grey--text"},[t._v("mdi-checkbox-blank-circle-outline")])],1)]}}],null,!0)})}),1)],1),s("v-divider"),s("v-card-actions",[s("v-btn",{attrs:{text:""},on:{click:t.closeDialog}},[t._v("Close")]),s("v-spacer"),s("v-btn",{attrs:{icon:""},on:{click:function(e){t.showAdvancedSettings=!t.showAdvancedSettings}}},[s("v-icon",[t._v("mdi-settings")])],1),s("v-badge",{attrs:{overlap:"",color:t.selected.length>0?"success":"error"},scopedSlots:t._u([{key:"badge",fn:function(){return[s("span",[t._v(t._s(t.selected.length))])]},proxy:!0}])},[s("v-btn",[t._v("Download")])],1)],1),t.showAdvancedSettings?[s("v-divider"),s("v-row",{attrs:{"no-gutters":""}},[s("v-col",{staticClass:"pa-4"},[s("span",{staticClass:"subheading"},[t._v("Filter by File Type:")]),s("v-chip-group",{attrs:{multiple:"","active-class":"success black--text",column:""},model:{value:t.selectedFileTypes,callback:function(e){t.selectedFileTypes=e},expression:"selectedFileTypes"}},t._l(t.resources,function(e){return s("v-chip",{key:e.fileType,attrs:{value:e.fileType}},[t._v(t._s(e.fileType))])}),1),s("span",{staticClass:"subheading"},[t._v("Filter by Type:")]),s("v-chip-group",{attrs:{multiple:"","active-class":"success black--text",column:""},model:{value:t.selectedTypes,callback:function(e){t.selectedTypes=e},expression:"selectedTypes"}},t._l(t.resources,function(e){return s("v-chip",{key:e.type,attrs:{value:e.type}},[t._v(t._s(e.type))])}),1)],1)],1)]:t._e()],2)],1)},o=[],c={name:"ResourceDownloadDialog",props:{maxWidth:{type:Number,default:512},fileTypeIconMapping:{type:Object,default:()=>({pdf:"mdi-file-pdf",movie:"mdi-file-video"})},resources:{type:Array,default:()=>[{name:"Script",type:"script",fileType:"pdf"},{name:"Lecture 01",type:"lecture",fileType:"pdf"},{name:"Lecture 01 Video",type:"moviesdasd",fileType:"movie"}]}},data(){return{showDialog:!1,selected:[],isSelectAllSelected:!1,showAdvancedSettings:!1,selectedFileTypes:[],selectedTypes:[]}},computed:{filteredResources(){return 0===this.selectedFileTypes.length&&0===this.selectedTypes.length?this.resources:this.resources.filter(t=>this.selectedFileTypes.includes(t.fileType)||this.selectedTypes.includes(t.type))}},methods:{closeDialog(){this.showDialog=!1,this.selected=[],this.isSelectAllSelected=!1},selectAll(){this.selected=Array.from(Array(this.resources.length).keys())},checkboxChanged(t){t?this.selectAll():this.selected=[]}}},h=c,d=s("f84f"),u=s("81c8"),p=s.n(u),v=(s("5ccb"),s("6031")),f=s("aa40"),m=s("a92b"),g=s("5092"),b=s("6015"),y=Object(b["a"])(v["a"],f["a"],Object(m["b"])(["left","bottom"]),g["a"]).extend({name:"v-badge",props:{color:{type:String,default:"primary"},overlap:Boolean,transition:{type:String,default:"fab-transition"},value:{default:!0}},computed:{classes(){return{"v-badge--bottom":this.bottom,"v-badge--left":this.left,"v-badge--overlap":this.overlap}}},render(t){const e=this.$slots.badge&&[t("span",this.setBackgroundColor(this.color,{staticClass:"v-badge__badge",attrs:this.$attrs,directives:[{name:"show",value:this.isActive}]}),this.$slots.badge)];return t("span",{staticClass:"v-badge",class:this.classes},[this.$slots.default,this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},e):e])}}),C=s("15c2"),w=s("4c57"),x=s("9b0a"),$=s("76f5"),k=s("8639"),_=(s("e736"),s("3816"),s("e75d")),S=s("1109"),V=s("b9b9"),I=s("e19e"),A=s("3c75");const O=Object(b["a"])(V["a"]).extend({name:"base-slide-group",directives:{Resize:I["a"],Touch:A["a"]},props:{activeClass:{type:String,default:"v-slide-item--active"},centerActive:Boolean,nextIcon:{type:String,default:"$vuetify.icons.next"},mobileBreakPoint:{type:[Number,String],default:1264,validator:t=>!isNaN(parseInt(t))},prevIcon:{type:String,default:"$vuetify.icons.prev"},showArrows:Boolean},data:()=>({internalItemsLength:0,isOverflowing:!1,resizeTimeout:0,startX:0,scrollOffset:0,widths:{content:0,wrapper:0}}),computed:{__cachedNext(){return this.genTransition("next")},__cachedPrev(){return this.genTransition("prev")},classes(){return{...V["a"].options.computed.classes.call(this),"v-slide-group":!0}},hasAffixes(){return(this.showArrows||!this.isMobile)&&this.isOverflowing},hasNext(){if(!this.hasAffixes)return!1;const{content:t,wrapper:e}=this.widths;return t>Math.abs(this.scrollOffset)+e},hasPrev(){return this.hasAffixes&&0!==this.scrollOffset},isMobile(){return this.$vuetify.breakpoint.width<this.mobileBreakPoint}},watch:{internalValue:"setWidths",isOverflowing:"setWidths",scrollOffset(t){this.$refs.content.style.transform=`translateX(${-t}px)`}},beforeUpdate(){this.internalItemsLength=(this.$children||[]).length},updated(){this.internalItemsLength!==(this.$children||[]).length&&this.setWidths()},methods:{genNext(){if(!this.hasAffixes)return null;const t=this.$scopedSlots.next?this.$scopedSlots.next({}):this.$slots.next||this.__cachedNext;return this.$createElement("div",{staticClass:"v-slide-group__next",class:{"v-slide-group__next--disabled":!this.hasNext},on:{click:()=>this.onAffixClick("next")},key:"next"},[t])},genContent(){return this.$createElement("div",{staticClass:"v-slide-group__content",ref:"content"},this.$slots.default)},genData(){return{class:this.classes,directives:[{name:"resize",value:this.onResize}]}},genIcon(t){let e=t;this.$vuetify.rtl&&"prev"===t?e="next":this.$vuetify.rtl&&"next"===t&&(e="prev");const s=`${t[0].toUpperCase()}${t.slice(1)}`,i=this[`has${s}`];return this.showArrows||i?this.$createElement(_["a"],{props:{disabled:!i}},this[`${e}Icon`]):null},genPrev(){if(!this.hasAffixes)return null;const t=this.$scopedSlots.prev?this.$scopedSlots.prev({}):this.$slots.prev||this.__cachedPrev;return this.$createElement("div",{staticClass:"v-slide-group__prev",class:{"v-slide-group__prev--disabled":!this.hasPrev},on:{click:()=>this.onAffixClick("prev")},key:"prev"},[t])},genTransition(t){return this.$createElement(S["c"],[this.genIcon(t)])},genWrapper(){return this.$createElement("div",{staticClass:"v-slide-group__wrapper",directives:[{name:"touch",value:{start:t=>this.overflowCheck(t,this.onTouchStart),move:t=>this.overflowCheck(t,this.onTouchMove),end:t=>this.overflowCheck(t,this.onTouchEnd)}}],ref:"wrapper"},[this.genContent()])},calculateNewOffset(t,e,s,i){const a=s?-1:1,n=a*i+("prev"===t?-1:1)*e.wrapper;return a*Math.max(Math.min(n,e.content-e.wrapper),0)},onAffixClick(t){this.$emit(`click:${t}`),this.scrollTo(t)},onResize(){this._isDestroyed||this.setWidths()},onTouchStart(t){const{content:e}=this.$refs;this.startX=this.scrollOffset+t.touchstartX,e.style.setProperty("transition","none"),e.style.setProperty("willChange","transform")},onTouchMove(t){this.scrollOffset=this.startX-t.touchmoveX},onTouchEnd(){const{content:t,wrapper:e}=this.$refs,s=t.clientWidth-e.clientWidth;t.style.setProperty("transition",null),t.style.setProperty("willChange",null),this.$vuetify.rtl?this.scrollOffset>0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset<=-s&&(this.scrollOffset=-s):this.scrollOffset<0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset>=s&&(this.scrollOffset=s)},overflowCheck(t,e){t.stopPropagation(),this.isOverflowing&&e(t)},scrollIntoView(){this.selectedItem&&(0===this.selectedIndex||!this.centerActive&&!this.isOverflowing?this.scrollOffset=0:this.centerActive?this.scrollOffset=this.calculateCenteredOffset(this.selectedItem.$el,this.widths,this.$vuetify.rtl):this.isOverflowing&&(this.scrollOffset=this.calculateUpdatedOffset(this.selectedItem.$el,this.widths,this.$vuetify.rtl,this.scrollOffset)))},calculateUpdatedOffset(t,e,s,i){const a=t.clientWidth,n=s?e.content-t.offsetLeft-a:t.offsetLeft;s&&(i=-i);const r=e.wrapper+i,l=a+n,o=.4*a;return n<i?i=Math.max(n-o,0):r<l&&(i=Math.min(i-(r-l-o),e.content-e.wrapper)),s?-i:i},calculateCenteredOffset(t,e,s){const{offsetLeft:i,clientWidth:a}=t;if(s){const t=e.content-i-a/2-e.wrapper/2;return-Math.min(e.content-e.wrapper,Math.max(0,t))}{const t=i+a/2-e.wrapper/2;return Math.min(e.content-e.wrapper,Math.max(0,t))}},scrollTo(t){this.scrollOffset=this.calculateNewOffset(t,{content:this.$refs.content?this.$refs.content.clientWidth:0,wrapper:this.$refs.wrapper?this.$refs.wrapper.clientWidth:0},this.$vuetify.rtl,this.scrollOffset)},setWidths(){window.requestAnimationFrame(()=>{const{content:t,wrapper:e}=this.$refs;this.widths={content:t?t.clientWidth:0,wrapper:e?e.clientWidth:0},this.isOverflowing=this.widths.wrapper<this.widths.content,this.scrollIntoView()})}},render(t){return t("div",this.genData(),[this.genPrev(),this.genWrapper(),this.genNext()])}});O.extend({name:"v-slide-group",provide(){return{slideGroup:this}}});var T=Object(b["a"])(O,v["a"]).extend({name:"v-chip-group",provide(){return{chipGroup:this}},props:{column:Boolean},computed:{classes(){return{...O.options.computed.classes.call(this),"v-chip-group":!0,"v-chip-group--column":this.column}}},watch:{column(t){t&&(this.scrollOffset=0),this.$nextTick(this.onResize)}},methods:{genData(){return this.setTextColor(this.color,{...O.options.methods.genData.call(this)})}}}),B=s("d41a"),D=(s("f1cf"),s("5900")),M=s("a9f3"),E=s("fabc"),L=s("d9c1"),F=s("dde3"),j=s("3a82"),W=s("8fa3"),R=s("793a"),z=s("ca52");const P=Object(b["a"])(D["a"],M["a"],E["a"],L["a"],F["a"],j["a"],f["a"]);var N=P.extend({name:"v-dialog",directives:{ClickOutside:W["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,fullWidth:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200}},computed:{classes(){return{[`v-dialog ${this.contentClass}`.trim()]:!0,"v-dialog--active":this.isActive,"v-dialog--persistent":this.persistent,"v-dialog--fullscreen":this.fullscreen,"v-dialog--scrollable":this.scrollable,"v-dialog--animated":this.animate}},contentClasses(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive(t){t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind())},fullscreen(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},beforeMount(){this.$nextTick(()=>{this.isBooted=this.isActive,this.isActive&&this.show()})},beforeDestroy(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick(){this.animate=!1,this.$nextTick(()=>{this.animate=!0,window.clearTimeout(this.animateTimeout),this.animateTimeout=window.setTimeout(()=>this.animate=!1,150)})},closeConditional(t){const e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e))&&(this.$emit("click:outside"),this.persistent&&this.overlay?(this.noClickAnimation||this.overlay.$el!==e&&!this.overlay.$el.contains(e)||this.animateClick(),!1):this.activeZIndex>=this.getMaxZIndex())},hideScroll(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):L["a"].options.methods.hideScroll.call(this)},show(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$refs.content.focus(),this.bind()},bind(){window.addEventListener("focusin",this.onFocusin)},unbind(){window.removeEventListener("focusin",this.onFocusin)},onKeydown(t){if(t.keyCode===R["r"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;const t=this.getActivator();this.$nextTick(()=>t&&t.focus())}this.$emit("keydown",t)},onFocusin(t){if(!t||!this.retainFocus)return;const e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some(t=>t.contains(e))){const t=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');t.length&&t[0].focus()}}},render(t){const e=[],s={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:()=>{this.isActive=!1},args:{closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],on:{click:t=>{t.stopPropagation()}},style:{}};this.fullscreen||(s.style={maxWidth:"none"===this.maxWidth?void 0:Object(R["e"])(this.maxWidth),width:"auto"===this.width?void 0:Object(R["e"])(this.width)}),e.push(this.genActivator());let i=t("div",s,this.showLazyContent(this.getContentSlot()));return this.transition&&(i=t("transition",{props:{name:this.transition,origin:this.origin}},[i])),e.push(t("div",{class:this.contentClasses,attrs:{role:"document",tabindex:0,...this.getScopeIdAttrs()},on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.$createElement(z["a"],{props:{root:!0,light:this.light,dark:this.dark}},[i])])),t("div",{staticClass:"v-dialog__container",attrs:{role:"dialog"},style:{display:!this.hasActivator||this.fullWidth?"block":"inline-block"}},e)}}),G=s("157c"),H=s("b752"),q=s("5878"),U=s("c821"),X=s("e2bb"),Z=s("778c"),K=s("25b4"),J=s("7f11"),Q=s("b8db"),Y=s("416f"),tt=Object(d["a"])(h,l,o,!1,null,null,null),et=tt.exports;p()(tt,{VBadge:y,VBtn:C["a"],VCard:w["a"],VCardActions:x["a"],VCardTitle:x["c"],VCheckbox:$["a"],VChip:k["a"],VChipGroup:T,VCol:B["a"],VDialog:N,VDivider:G["a"],VIcon:H["a"],VList:q["a"],VListItem:U["a"],VListItemAction:X["a"],VListItemContent:Z["b"],VListItemGroup:K["a"],VListItemIcon:J["a"],VListItemTitle:Z["d"],VRow:Q["a"],VSpacer:Y["a"]});var st={name:"TheCourse",components:{ResourceDownloadDialog:et}},it=st,at=s("d470"),nt=s("c0a6"),rt=Object(d["a"])(it,n,r,!1,null,null,null),lt=rt.exports;p()(rt,{VCard:w["a"],VCardText:x["b"],VCol:B["a"],VDivider:G["a"],VIcon:H["a"],VList:q["a"],VListItem:U["a"],VListItemContent:Z["b"],VListItemGroup:K["a"],VListItemIcon:J["a"],VListItemTitle:Z["d"],VRow:Q["a"],VSpacer:Y["a"],VToolbar:at["a"],VToolbarTitle:nt["b"]});var ot={name:"Course",props:{showWelcomeScreen:{type:Boolean,default:!1}},components:{TheCourse:lt}},ct=ot,ht=s("afa0"),dt=Object(d["a"])(ct,i,a,!1,null,null,null);e["default"]=dt.exports;p()(dt,{VBtn:C["a"],VCard:w["a"],VCardActions:x["a"],VCardText:x["b"],VCardTitle:x["c"],VOverlay:ht["a"],VSpacer:Y["a"]})},"9fd0":function(t,e,s){},ac2d:function(t,e,s){"use strict";s("6a07");var i=s("6031"),a=s("f658"),n=s("6015"),r=s("793a"),l=Object(n["a"])(a["a"]).extend({name:"v-label",functional:!0,props:{absolute:Boolean,color:{type:String,default:"primary"},disabled:Boolean,focused:Boolean,for:String,left:{type:[Number,String],default:0},right:{type:[Number,String],default:"auto"},value:Boolean},render(t,e){const{children:s,listeners:n,props:l}=e,o={staticClass:"v-label",class:{"v-label--active":l.value,"v-label--is-disabled":l.disabled,...Object(a["b"])(e)},attrs:{for:l.for,"aria-hidden":!l.for},on:n,style:{left:Object(r["e"])(l.left),right:Object(r["e"])(l.right),position:l.absolute?"absolute":"relative"},ref:"label"};return t("label",i["a"].options.methods.setTextColor(l.focused&&l.color,o),s)}});e["a"]=l},bdc9:function(t,e,s){"use strict";s("da41");var i=s("e75d"),a=s("ac2d"),n=(s("ec4f"),s("6031")),r=s("f658"),l=s("6015"),o=Object(l["a"])(n["a"],r["a"]).extend({name:"v-messages",props:{value:{type:Array,default:()=>[]}},methods:{genChildren(){return this.$createElement("transition-group",{staticClass:"v-messages__wrapper",attrs:{name:"message-transition",tag:"div"}},this.value.map(this.genMessage))},genMessage(t,e){return this.$createElement("div",{staticClass:"v-messages__message",key:e,domProps:{innerHTML:t}})}},render(t){return t("div",this.setTextColor(this.color,{staticClass:"v-messages",class:this.themeClasses}),[this.genChildren()])}}),c=o,h=s("5278"),d=s("793a"),u=s("0967"),p=Object(l["a"])(n["a"],Object(h["a"])("form"),r["a"]).extend({name:"validatable",props:{disabled:Boolean,error:Boolean,errorCount:{type:[Number,String],default:1},errorMessages:{type:[String,Array],default:()=>[]},messages:{type:[String,Array],default:()=>[]},readonly:Boolean,rules:{type:Array,default:()=>[]},success:Boolean,successMessages:{type:[String,Array],default:()=>[]},validateOnBlur:Boolean,value:{required:!1}},data(){return{errorBucket:[],hasColor:!1,hasFocused:!1,hasInput:!1,isFocused:!1,isResetting:!1,lazyValue:this.value,valid:!1}},computed:{computedColor(){if(!this.disabled)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},hasError(){return this.internalErrorMessages.length>0||this.errorBucket.length>0||this.error},hasSuccess(){return this.internalSuccessMessages.length>0||this.success},externalError(){return this.internalErrorMessages.length>0||this.error},hasMessages(){return this.validationTarget.length>0},hasState(){return!this.disabled&&(this.hasSuccess||this.shouldValidate&&this.hasError)},internalErrorMessages(){return this.genInternalMessages(this.errorMessages)},internalMessages(){return this.genInternalMessages(this.messages)},internalSuccessMessages(){return this.genInternalMessages(this.successMessages)},internalValue:{get(){return this.lazyValue},set(t){this.lazyValue=t,this.$emit("input",t)}},shouldValidate(){return!!this.externalError||!this.isResetting&&(this.validateOnBlur?this.hasFocused&&!this.isFocused:this.hasInput||this.hasFocused)},validations(){return this.validationTarget.slice(0,Number(this.errorCount))},validationState(){if(!this.disabled)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":this.hasColor?this.computedColor:void 0},validationTarget(){return this.internalErrorMessages.length>0?this.internalErrorMessages:this.successMessages.length>0?this.internalSuccessMessages:this.messages.length>0?this.internalMessages:this.shouldValidate?this.errorBucket:[]}},watch:{rules:{handler(t,e){Object(d["i"])(t,e)||this.validate()},deep:!0},internalValue(){this.hasInput=!0,this.validateOnBlur||this.$nextTick(this.validate)},isFocused(t){t||this.disabled||(this.hasFocused=!0,this.validateOnBlur&&this.validate())},isResetting(){setTimeout(()=>{this.hasInput=!1,this.hasFocused=!1,this.isResetting=!1,this.validate()},0)},hasError(t){this.shouldValidate&&this.$emit("update:error",t)},value(t){this.lazyValue=t}},beforeMount(){this.validate()},created(){this.form&&this.form.register(this)},beforeDestroy(){this.form&&this.form.unregister(this)},methods:{genInternalMessages(t){return t?Array.isArray(t)?t:[t]:[]},reset(){this.isResetting=!0,this.internalValue=Array.isArray(this.internalValue)?[]:void 0},resetValidation(){this.isResetting=!0},validate(t=!1,e){const s=[];e=e||this.internalValue,t&&(this.hasInput=this.hasFocused=!0);for(let i=0;i<this.rules.length;i++){const t=this.rules[i],a="function"===typeof t?t(e):t;"string"===typeof a?s.push(a):"boolean"!==typeof a&&Object(u["b"])(`Rules should return a string or boolean, received '${typeof a}' instead`,this)}return this.errorBucket=s,this.valid=0===s.length,this.valid}}});const v=Object(l["a"])(p);var f=v.extend().extend({name:"v-input",inheritAttrs:!1,props:{appendIcon:String,backgroundColor:{type:String,default:""},height:[Number,String],hideDetails:Boolean,hint:String,id:String,label:String,loading:Boolean,persistentHint:Boolean,prependIcon:String,value:null},data(){return{lazyValue:this.value,hasMouseDown:!1}},computed:{classes(){return{"v-input--has-state":this.hasState,"v-input--hide-details":this.hideDetails,"v-input--is-label-active":this.isLabelActive,"v-input--is-dirty":this.isDirty,"v-input--is-disabled":this.disabled,"v-input--is-focused":this.isFocused,"v-input--is-loading":!1!==this.loading&&void 0!==this.loading,"v-input--is-readonly":this.readonly,...this.themeClasses}},computedId(){return this.id||`input-${this._uid}`},hasHint(){return!this.hasMessages&&!!this.hint&&(this.persistentHint||this.isFocused)},hasLabel(){return!(!this.$slots.label&&!this.label)},internalValue:{get(){return this.lazyValue},set(t){this.lazyValue=t,this.$emit(this.$_modelEvent,t)}},isDirty(){return!!this.lazyValue},isDisabled(){return this.disabled||this.readonly},isLabelActive(){return this.isDirty}},watch:{value(t){this.lazyValue=t}},beforeCreate(){this.$_modelEvent=this.$options.model&&this.$options.model.event||"input"},methods:{genContent(){return[this.genPrependSlot(),this.genControl(),this.genAppendSlot()]},genControl(){return this.$createElement("div",{staticClass:"v-input__control"},[this.genInputSlot(),this.genMessages()])},genDefaultSlot(){return[this.genLabel(),this.$slots.default]},genIcon(t,e){const s=this[`${t}Icon`],a=`click:${Object(d["q"])(t)}`,n={props:{color:this.validationState,dark:this.dark,disabled:this.disabled,light:this.light},on:this.$listeners[a]||e?{click:t=>{t.preventDefault(),t.stopPropagation(),this.$emit(a,t),e&&e(t)},mouseup:t=>{t.preventDefault(),t.stopPropagation()}}:void 0};return this.$createElement("div",{staticClass:`v-input__icon v-input__icon--${Object(d["q"])(t)}`,key:t+s},[this.$createElement(i["a"],n,s)])},genInputSlot(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor,{staticClass:"v-input__slot",style:{height:Object(d["e"])(this.height)},on:{click:this.onClick,mousedown:this.onMouseDown,mouseup:this.onMouseUp},ref:"input-slot"}),[this.genDefaultSlot()])},genLabel(){return this.hasLabel?this.$createElement(a["a"],{props:{color:this.validationState,dark:this.dark,focused:this.hasState,for:this.computedId,light:this.light}},this.$slots.label||this.label):null},genMessages(){if(this.hideDetails)return null;const t=this.hasHint?[this.hint]:this.validations;return this.$createElement(c,{props:{color:this.hasHint?"":this.validationState,dark:this.dark,light:this.light,value:this.hasMessages||this.hasHint?t:[]}})},genSlot(t,e,s){if(!s.length)return null;const i=`${t}-${e}`;return this.$createElement("div",{staticClass:`v-input__${i}`,ref:i},s)},genPrependSlot(){const t=[];return this.$slots.prepend?t.push(this.$slots.prepend):this.prependIcon&&t.push(this.genIcon("prepend")),this.genSlot("prepend","outer",t)},genAppendSlot(){const t=[];return this.$slots.append?t.push(this.$slots.append):this.appendIcon&&t.push(this.genIcon("append")),this.genSlot("append","outer",t)},onClick(t){this.$emit("click",t)},onMouseDown(t){this.hasMouseDown=!0,this.$emit("mousedown",t)},onMouseUp(t){this.hasMouseDown=!1,this.$emit("mouseup",t)}},render(t){return t("div",this.setTextColor(this.validationState,{staticClass:"v-input",class:this.classes}),this.genContent())}});e["a"]=f},da41:function(t,e,s){},e736:function(t,e,s){},ec4f:function(t,e,s){},f1cf:function(t,e,s){}}]);
//# sourceMappingURL=chunk-46c4af27.b116cd66.js.map
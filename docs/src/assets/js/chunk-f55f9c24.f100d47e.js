(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f55f9c24"],{"1e38":function(e,t,s){},"1e72":function(e,t,s){},"21a5":function(e,t,s){},"32cc":function(e,t,s){},5194:function(e,t,s){"use strict";var i=s("da3e");t["a"]=i["a"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}})},"52fc":function(e,t,s){"use strict";s("21a5");var i=s("2c7d"),n=s("3c2a"),a=s("2501"),r=s("760a"),o=s("94a9"),l=s("be01"),c=s("b112"),h=s("bff5"),u=s("e864"),d=s("dc83");t["a"]=Object(i["a"])(r["a"],u["a"],h["a"],l["a"],Object(o["a"])("chipGroup"),Object(c["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$vuetify.icons.delete"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$vuetify.icons.complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:()=>({proxyClass:"v-chip--active"}),computed:{classes(){return{"v-chip":!0,...h["a"].options.computed.classes.call(this),"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose,...this.themeClasses,...this.sizeableClasses,...this.groupClasses}},hasClose(){return Boolean(this.close)},isClickable(){return Boolean(h["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created(){const e=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];e.forEach(([e,t])=>{this.$attrs.hasOwnProperty(e)&&Object(d["a"])(e,t,this)})},methods:{click(e){this.$emit("click",e),this.chipGroup&&this.toggle()},genFilter(){const e=[];return this.isActive&&e.push(this.$createElement(a["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(n["b"],e)},genClose(){return this.$createElement(a["a"],{staticClass:"v-chip__close",props:{right:!0},on:{click:e=>{e.stopPropagation(),this.$emit("click:close"),this.$emit("update:active",!1)}}},this.closeIcon)},genContent(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render(e){const t=[this.genContent()];let{tag:s,data:i}=this.generateRouteLink();i.attrs={...i.attrs,draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:i.attrs.tabindex},i.directives.push({name:"show",value:this.active}),i=this.setBackgroundColor(this.color,i);const n=this.textColor||this.outlined&&this.color;return e(s,this.setTextColor(n,i),t)}})},"538b":function(e,t,s){"use strict";s("fb49");var i=s("760a"),n=s("be01"),a=s("2c7d"),r=s("b0d1"),o=Object(a["a"])(n["a"]).extend({name:"v-label",functional:!0,props:{absolute:Boolean,color:{type:String,default:"primary"},disabled:Boolean,focused:Boolean,for:String,left:{type:[Number,String],default:0},right:{type:[Number,String],default:"auto"},value:Boolean},render(e,t){const{children:s,listeners:a,props:o}=t,l={staticClass:"v-label",class:{"v-label--active":o.value,"v-label--is-disabled":o.disabled,...Object(n["b"])(t)},attrs:{for:o.for,"aria-hidden":!o.for},on:a,style:{left:Object(r["e"])(o.left),right:Object(r["e"])(o.right),position:o.absolute?"absolute":"relative"},ref:"label"};return e("label",i["a"].options.methods.setTextColor(o.focused&&o.color,l),s)}});t["a"]=o},"76ad":function(e,t,s){},8074:function(e,t,s){"use strict";s("cb1f"),s("1e72");var i=s("2501"),n=s("3c2a"),a=s("e8e9"),r=s("3be1"),o=s("db7e"),l=s("2c7d");const c=Object(l["a"])(a["a"]).extend({name:"base-slide-group",directives:{Resize:r["a"],Touch:o["a"]},props:{activeClass:{type:String,default:"v-slide-item--active"},centerActive:Boolean,nextIcon:{type:String,default:"$vuetify.icons.next"},mobileBreakPoint:{type:[Number,String],default:1264,validator:e=>!isNaN(parseInt(e))},prevIcon:{type:String,default:"$vuetify.icons.prev"},showArrows:Boolean},data:()=>({internalItemsLength:0,isOverflowing:!1,resizeTimeout:0,startX:0,scrollOffset:0,widths:{content:0,wrapper:0}}),computed:{__cachedNext(){return this.genTransition("next")},__cachedPrev(){return this.genTransition("prev")},classes(){return{...a["a"].options.computed.classes.call(this),"v-slide-group":!0}},hasAffixes(){return(this.showArrows||!this.isMobile)&&this.isOverflowing},hasNext(){if(!this.hasAffixes)return!1;const{content:e,wrapper:t}=this.widths;return e>Math.abs(this.scrollOffset)+t},hasPrev(){return this.hasAffixes&&0!==this.scrollOffset},isMobile(){return this.$vuetify.breakpoint.width<this.mobileBreakPoint}},watch:{internalValue:"setWidths",isOverflowing:"setWidths",scrollOffset(e){this.$refs.content.style.transform=`translateX(${-e}px)`}},beforeUpdate(){this.internalItemsLength=(this.$children||[]).length},updated(){this.internalItemsLength!==(this.$children||[]).length&&this.setWidths()},methods:{genNext(){if(!this.hasAffixes)return null;const e=this.$scopedSlots.next?this.$scopedSlots.next({}):this.$slots.next||this.__cachedNext;return this.$createElement("div",{staticClass:"v-slide-group__next",class:{"v-slide-group__next--disabled":!this.hasNext},on:{click:()=>this.onAffixClick("next")},key:"next"},[e])},genContent(){return this.$createElement("div",{staticClass:"v-slide-group__content",ref:"content"},this.$slots.default)},genData(){return{class:this.classes,directives:[{name:"resize",value:this.onResize}]}},genIcon(e){let t=e;this.$vuetify.rtl&&"prev"===e?t="next":this.$vuetify.rtl&&"next"===e&&(t="prev");const s=`${e[0].toUpperCase()}${e.slice(1)}`,n=this[`has${s}`];return this.showArrows||n?this.$createElement(i["a"],{props:{disabled:!n}},this[`${t}Icon`]):null},genPrev(){if(!this.hasAffixes)return null;const e=this.$scopedSlots.prev?this.$scopedSlots.prev({}):this.$slots.prev||this.__cachedPrev;return this.$createElement("div",{staticClass:"v-slide-group__prev",class:{"v-slide-group__prev--disabled":!this.hasPrev},on:{click:()=>this.onAffixClick("prev")},key:"prev"},[e])},genTransition(e){return this.$createElement(n["d"],[this.genIcon(e)])},genWrapper(){return this.$createElement("div",{staticClass:"v-slide-group__wrapper",directives:[{name:"touch",value:{start:e=>this.overflowCheck(e,this.onTouchStart),move:e=>this.overflowCheck(e,this.onTouchMove),end:e=>this.overflowCheck(e,this.onTouchEnd)}}],ref:"wrapper"},[this.genContent()])},calculateNewOffset(e,t,s,i){const n=s?-1:1,a=n*i+("prev"===e?-1:1)*t.wrapper;return n*Math.max(Math.min(a,t.content-t.wrapper),0)},onAffixClick(e){this.$emit(`click:${e}`),this.scrollTo(e)},onResize(){this._isDestroyed||this.setWidths()},onTouchStart(e){const{content:t}=this.$refs;this.startX=this.scrollOffset+e.touchstartX,t.style.setProperty("transition","none"),t.style.setProperty("willChange","transform")},onTouchMove(e){this.scrollOffset=this.startX-e.touchmoveX},onTouchEnd(){const{content:e,wrapper:t}=this.$refs,s=e.clientWidth-t.clientWidth;e.style.setProperty("transition",null),e.style.setProperty("willChange",null),this.$vuetify.rtl?this.scrollOffset>0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset<=-s&&(this.scrollOffset=-s):this.scrollOffset<0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset>=s&&(this.scrollOffset=s)},overflowCheck(e,t){e.stopPropagation(),this.isOverflowing&&t(e)},scrollIntoView(){this.selectedItem&&(0===this.selectedIndex||!this.centerActive&&!this.isOverflowing?this.scrollOffset=0:this.centerActive?this.scrollOffset=this.calculateCenteredOffset(this.selectedItem.$el,this.widths,this.$vuetify.rtl):this.isOverflowing&&(this.scrollOffset=this.calculateUpdatedOffset(this.selectedItem.$el,this.widths,this.$vuetify.rtl,this.scrollOffset)))},calculateUpdatedOffset(e,t,s,i){const n=e.clientWidth,a=s?t.content-e.offsetLeft-n:e.offsetLeft;s&&(i=-i);const r=t.wrapper+i,o=n+a,l=.4*n;return a<i?i=Math.max(a-l,0):r<o&&(i=Math.min(i-(r-o-l),t.content-t.wrapper)),s?-i:i},calculateCenteredOffset(e,t,s){const{offsetLeft:i,clientWidth:n}=e;if(s){const e=t.content-i-n/2-t.wrapper/2;return-Math.min(t.content-t.wrapper,Math.max(0,e))}{const e=i+n/2-t.wrapper/2;return Math.min(t.content-t.wrapper,Math.max(0,e))}},scrollTo(e){this.scrollOffset=this.calculateNewOffset(e,{content:this.$refs.content?this.$refs.content.clientWidth:0,wrapper:this.$refs.wrapper?this.$refs.wrapper.clientWidth:0},this.$vuetify.rtl,this.scrollOffset)},setWidths(){window.requestAnimationFrame(()=>{const{content:e,wrapper:t}=this.$refs;this.widths={content:e?e.clientWidth:0,wrapper:t?t.clientWidth:0},this.isOverflowing=this.widths.wrapper<this.widths.content,this.scrollIntoView()})}},render(e){return e("div",this.genData(),[this.genPrev(),this.genWrapper(),this.genNext()])}});c.extend({name:"v-slide-group",provide(){return{slideGroup:this}}});var h=s("760a");t["a"]=Object(l["a"])(c,h["a"]).extend({name:"v-chip-group",provide(){return{chipGroup:this}},props:{column:Boolean},computed:{classes(){return{...c.options.computed.classes.call(this),"v-chip-group":!0,"v-chip-group--column":this.column}}},watch:{column(e){e&&(this.scrollOffset=0),this.$nextTick(this.onResize)}},methods:{genData(){return this.setTextColor(this.color,{...c.options.methods.genData.call(this)})}}})},"8fee":function(e,t,s){},9373:function(e,t,s){},"95ba":function(e,t,s){"use strict";var i=s("da3e"),n=s("b0d1");t["a"]=i["a"].extend({name:"comparable",props:{valueComparator:{type:Function,default:n["i"]}}})},"9f72":function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("v-overlay",{attrs:{value:e.showWelcomeScreen}},[s("v-card",{attrs:{"max-width":"400"}},[s("v-card-title",[e._v("Welcome to the Course!")]),s("v-card-text",[e._v("Important notes")]),s("v-card-actions",[s("v-spacer"),s("v-btn",{on:{click:function(t){e.showWelcomeScreen=!1}}},[e._v("Accept")])],1)],1)],1),s("TheCourse")],1)},n=[],a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-row",{attrs:{"no-gutters":""}},[s("v-col",[s("v-card",{attrs:{"max-width":"1200",color:"transparent",flat:""}},[s("v-toolbar",[s("v-toolbar-title",[e._v("["+e._s(new Date(e.current_course.start).format("YY")+"/"+new Date(e.current_course.end).format("YY")+" "+e.current_course.term)+"] "+e._s(e.current_course.name))]),s("v-spacer"),s("v-toolbar-title",{staticClass:"grey--text ma-4"},[e._v(e._s(new Date(e.current_course.start).format("DD.MM.YY")+" - "+new Date(e.current_course.end).format("DD.MM.YY")))]),s("ResourceDownloadDialog")],1),s("v-card-text",[s("CourseContentItem",{attrs:{title:"Announcements",hasBody:!!e.current_course.content.announcement.body},scopedSlots:e._u([{key:"content",fn:function(){return[s("CourseContentItemContent",{attrs:{content:e.current_course.content.announcement.body.content}})]},proxy:!0},{key:"resourceList",fn:function(){return[s("CourseContentItemResourcesList",{attrs:{resources:e.current_course.content.announcement.resources}})]},proxy:!0},{key:"resourceDownload",fn:function(){return[s("ResourceDownloadDialog",{attrs:{resources:e.current_course.content.announcement.resources.filter(function(e){return e.download})}})]},proxy:!0}])}),e._l(e.current_course.content.contents,function(t){return s("CourseContentItem",{key:t.name,attrs:{title:t.week,hasBody:!!t.body},scopedSlots:e._u([{key:"content",fn:function(){return[t.body?s("CourseContentItemContent",{attrs:{content:t.body}}):e._e()]},proxy:!0},{key:"resourceList",fn:function(){return[s("CourseContentItemResourcesList",{attrs:{resources:t.resources}})]},proxy:!0},{key:"resourceDownload",fn:function(){return[s("ResourceDownloadDialog",{attrs:{resources:t.resources.filter(function(e){return e.download})}})]},proxy:!0}],null,!0)})})],2)],1)],1)],1)},r=[],o=s("2ba1"),l=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-dialog",{attrs:{"max-width":e.maxWidth,"max-height":"430","min-height":"400"},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on;return[s("v-btn",e._g({attrs:{icon:"",small:""}},i),[s("v-icon",[e._v("mdi-download-multiple")])],1)]}}]),model:{value:e.showDialog,callback:function(t){e.showDialog=t},expression:"showDialog"}},[s("v-card",[s("v-card-title",[s("span",[e._v("Select Resources")]),s("v-spacer"),s("v-card-actions",[s("v-checkbox",{attrs:{label:e.isSelectAllSelected?"Deselect All":"Select All"},on:{change:e.checkboxChanged},model:{value:e.isSelectAllSelected,callback:function(t){e.isSelectAllSelected=t},expression:"isSelectAllSelected"}})],1)],1),s("v-divider"),s("v-list",[s("v-list-item-group",{attrs:{multiple:""},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},e._l(e.filteredResources,function(t){return s("v-list-item",{key:t.name,scopedSlots:e._u([{key:"default",fn:function(i){var n=i.active;i.toggle;return[s("v-list-item-icon",[s("v-icon",[e._v(e._s(e.fileTypeIconMapping[t.type]))])],1),s("v-list-item-content",[s("v-list-item-title",[e._v(e._s(t.name))])],1),s("v-list-item-action",[n?s("v-icon",{staticClass:"green--text"},[e._v("mdi-checkbox-blank-circle")]):s("v-icon",{staticClass:"grey--text"},[e._v("mdi-checkbox-blank-circle-outline")])],1)]}}],null,!0)})}),1)],1),s("v-divider"),s("v-card-actions",[s("v-btn",{attrs:{text:""},on:{click:e.closeDialog}},[e._v("Close")]),s("v-spacer"),s("v-btn",{attrs:{icon:""},on:{click:function(t){e.showAdvancedSettings=!e.showAdvancedSettings}}},[s("v-icon",[e._v("mdi-settings")])],1),s("v-badge",{attrs:{overlap:"",color:e.selected.length>0?"success":"error"},scopedSlots:e._u([{key:"badge",fn:function(){return[s("span",[e._v(e._s(e.selected.length))])]},proxy:!0}])},[s("v-btn",[e._v("Download")])],1)],1),e.showAdvancedSettings?[s("v-divider"),s("v-row",{attrs:{"no-gutters":""}},[s("v-col",{staticClass:"pa-4"},[s("span",{staticClass:"subheading"},[e._v("Filter by File Type:")]),s("v-chip-group",{attrs:{multiple:"","active-class":"success black--text",column:""},model:{value:e.selectedFileTypes,callback:function(t){e.selectedFileTypes=t},expression:"selectedFileTypes"}},e._l(e.fileTypesOnly,function(t){return s("v-chip",{key:t,attrs:{value:t}},[e._v(e._s(t))])}),1),s("span",{staticClass:"subheading"},[e._v("Filter by Type:")]),s("v-chip-group",{attrs:{multiple:"","active-class":"success black--text",column:""},model:{value:e.selectedTypes,callback:function(t){e.selectedTypes=t},expression:"selectedTypes"}},e._l(e.typesOnly,function(t){return s("v-chip",{key:t,attrs:{value:t}},[e._v(e._s(t))])}),1)],1)],1)]:e._e()],2)],1)},c=[],h={name:"ResourceDownloadDialog",props:{maxWidth:{type:Number,default:512},fileTypeIconMapping:{type:Object,default:()=>({pdf:"mdi-file-pdf",movie:"mdi-file-video",quiz:"mdi-help-circle",forum:"mdi-forum"})},resources:{type:Array,default:()=>[{name:"Script",type:"script",fileType:"pdf"},{name:"Lecture 01",type:"lecture",fileType:"pdf"},{name:"Lecture 01 Video",type:"moviesdasd",fileType:"movie"}]}},data(){return{showDialog:!1,selected:[],isSelectAllSelected:!1,showAdvancedSettings:!1,selectedFileTypes:[],selectedTypes:[]}},computed:{filteredResources(){return 0===this.selectedFileTypes.length&&0===this.selectedTypes.length?this.resources:this.resources.filter(e=>this.selectedFileTypes.includes(e.fileType)||this.selectedTypes.includes(e.type))},fileTypesOnly(){for(var e=[],t=0;t<this.resources.length;t++)e.includes(this.resources[t].fileType)||e.push(this.resources[t].fileType);return e},typesOnly(){for(var e=[],t=0;t<this.resources.length;t++)e.includes(this.resources[t].type)||e.push(this.resources[t].type);return e}},methods:{closeDialog(){this.showDialog=!1,this.selected=[],this.isSelectAllSelected=!1},selectAll(){this.selected=Array.from(Array(this.resources.length).keys())},checkboxChanged(e){e?this.selectAll():this.selected=[]}}},u=h,d=s("d9b7"),p=s("53f2"),v=s.n(p),f=(s("9373"),s("760a")),m=s("b112"),g=s("8972"),b=s("5194"),y=s("2c7d"),C=Object(y["a"])(f["a"],m["a"],Object(g["b"])(["left","bottom"]),b["a"]).extend({name:"v-badge",props:{color:{type:String,default:"primary"},overlap:Boolean,transition:{type:String,default:"fab-transition"},value:{default:!0}},computed:{classes(){return{"v-badge--bottom":this.bottom,"v-badge--left":this.left,"v-badge--overlap":this.overlap}}},render(e){const t=this.$slots.badge&&[e("span",this.setBackgroundColor(this.color,{staticClass:"v-badge__badge",attrs:this.$attrs,directives:[{name:"show",value:this.isActive}]}),this.$slots.badge)];return e("span",{staticClass:"v-badge",class:this.classes},[this.$slots.default,this.transition?e("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},t):t])}}),w=s("d537"),x=s("0a8f"),k=s("9fa3"),_=s("d1ce"),$=s("52fc"),S=s("8074"),I=s("baa6"),V=(s("aa7e"),s("409d")),O=s("1a4e"),A=s("399d"),T=s("6eb6"),D=s("0419"),B=s("f489"),M=s("a368"),E=s("b0d1"),L=s("d9c6");const j=Object(y["a"])(V["a"],O["a"],A["a"],T["a"],D["a"],B["a"],m["a"]);var F=j.extend({name:"v-dialog",directives:{ClickOutside:M["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,fullWidth:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200}},computed:{classes(){return{[`v-dialog ${this.contentClass}`.trim()]:!0,"v-dialog--active":this.isActive,"v-dialog--persistent":this.persistent,"v-dialog--fullscreen":this.fullscreen,"v-dialog--scrollable":this.scrollable,"v-dialog--animated":this.animate}},contentClasses(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive(e){e?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind())},fullscreen(e){this.isActive&&(e?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},beforeMount(){this.$nextTick(()=>{this.isBooted=this.isActive,this.isActive&&this.show()})},beforeDestroy(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick(){this.animate=!1,this.$nextTick(()=>{this.animate=!0,window.clearTimeout(this.animateTimeout),this.animateTimeout=window.setTimeout(()=>this.animate=!1,150)})},closeConditional(e){const t=e.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(t)||this.overlay&&t&&!this.overlay.$el.contains(t))&&(this.$emit("click:outside"),this.persistent&&this.overlay?(this.noClickAnimation||this.overlay.$el!==t&&!this.overlay.$el.contains(t)||this.animateClick(),!1):this.activeZIndex>=this.getMaxZIndex())},hideScroll(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):T["a"].options.methods.hideScroll.call(this)},show(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick(()=>{this.$refs.content.focus(),this.bind()})},bind(){window.addEventListener("focusin",this.onFocusin)},unbind(){window.removeEventListener("focusin",this.onFocusin)},onKeydown(e){if(e.keyCode===E["r"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;const e=this.getActivator();this.$nextTick(()=>e&&e.focus())}this.$emit("keydown",e)},onFocusin(e){if(!e||!this.retainFocus)return;const t=e.target;if(t&&![document,this.$refs.content].includes(t)&&!this.$refs.content.contains(t)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some(e=>e.contains(t))){const e=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');e.length&&e[0].focus()}}},render(e){const t=[],s={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:()=>{this.isActive=!1},args:{closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],on:{click:e=>{e.stopPropagation()}},style:{}};this.fullscreen||(s.style={maxWidth:"none"===this.maxWidth?void 0:Object(E["e"])(this.maxWidth),width:"auto"===this.width?void 0:Object(E["e"])(this.width)}),t.push(this.genActivator());let i=e("div",s,this.showLazyContent(this.getContentSlot()));return this.transition&&(i=e("transition",{props:{name:this.transition,origin:this.origin}},[i])),t.push(e("div",{class:this.contentClasses,attrs:{role:"document",tabindex:this.isActive?0:void 0,...this.getScopeIdAttrs()},on:{...this.$listeners,keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.$createElement(L["a"],{props:{root:!0,light:this.light,dark:this.dark}},[i])])),e("div",{staticClass:"v-dialog__container",attrs:{role:"dialog"},style:{display:!this.hasActivator||this.fullWidth?"block":"inline-block"}},t)}}),R=s("0804"),W=s("d958"),P=s("9802"),z=s("542b"),N=s("2425"),G=s("c071"),H=s("1a87"),Y=s("9f51"),q=s("e640"),U=s("3190"),X=Object(d["a"])(u,l,c,!1,null,null,null),Z=X.exports;v()(X,{VBadge:C,VBtn:w["a"],VCard:x["a"],VCardActions:k["a"],VCardTitle:k["c"],VCheckbox:_["a"],VChip:$["a"],VChipGroup:S["a"],VCol:I["a"],VDialog:F,VDivider:R["a"],VIcon:W["a"],VList:P["a"],VListItem:z["a"],VListItemAction:N["a"],VListItemContent:G["b"],VListItemGroup:H["a"],VListItemIcon:Y["a"],VListItemTitle:G["d"],VRow:q["a"],VSpacer:U["a"]});var K=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-card",{attrs:{flat:""}},[s("v-card-text",[s("v-toolbar",{attrs:{dense:""}},[s("v-toolbar-title",[e._v(e._s(e.title))]),s("v-spacer"),e._t("resourceDownload")],2),s("v-card-text",[e._t("content")],2),e.hasBody?s("v-divider"):e._e(),e._t("resourceList")],2)],1)},J=[],Q=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{domProps:{innerHTML:e._s(e.content)}})},ee=[],te={name:"CourseContentItemContent",props:{content:{type:String,default:"<b>This</b> is Content!"}}},se=te,ie=Object(d["a"])(se,Q,ee,!1,null,null,null),ne=ie.exports,ae=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-list",{attrs:{dense:""}},[s("v-list-item-group",e._l(e.resources,function(t){return s("v-list-item",{key:t.name},[s("v-list-item-icon",[s("v-icon",[e._v(e._s(e.fileTypeIconMapping[t.type]))])],1),s("v-list-item-content",[s("v-list-item-title",[e._v(e._s(t.name))])],1)],1)}),1)],1)},re=[],oe={name:"CourseContentItemResourcesList",props:{fileTypeIconMapping:{type:Object,default:()=>({pdf:"mdi-file-pdf",movie:"mdi-file-video",quiz:"mdi-help-circle",forum:"mdi-forum"})},resources:{type:Array,default:()=>[{name:"Announcements",type:"forum",fileType:null},{name:"Studentforum",type:"forum",fileType:null},{name:"Script",type:"script",fileType:"pdf"}]}}},le=oe,ce=Object(d["a"])(le,ae,re,!1,null,null,null),he=ce.exports;v()(ce,{VIcon:W["a"],VList:P["a"],VListItem:z["a"],VListItemContent:G["b"],VListItemGroup:H["a"],VListItemIcon:Y["a"],VListItemTitle:G["d"]});var ue={name:"CourseContentItem",props:{title:{type:String,default:"<title>"},hasBody:{type:Boolean,default:!1}},components:{CourseContentItemContent:ne,CourseContentItemResourcesList:he,ResourceDownloadDialog:Z}},de=ue,pe=s("43eb"),ve=s("906a"),fe=Object(d["a"])(de,K,J,!1,null,null,null),me=fe.exports;v()(fe,{VCard:x["a"],VCardText:k["b"],VDivider:R["a"],VSpacer:U["a"],VToolbar:pe["a"],VToolbarTitle:ve["b"]});var ge={name:"TheCourse",computed:Object(o["b"])(["current_course"]),components:{ResourceDownloadDialog:Z,CourseContentItem:me,CourseContentItemContent:ne,CourseContentItemResourcesList:he}},be=ge,ye=Object(d["a"])(be,a,r,!1,null,null,null),Ce=ye.exports;v()(ye,{VCard:x["a"],VCardText:k["b"],VCol:I["a"],VRow:q["a"],VSpacer:U["a"],VToolbar:pe["a"],VToolbarTitle:ve["b"]});var we={name:"Course",props:{showWelcomeScreen:{type:Boolean,default:!1}},components:{TheCourse:Ce}},xe=we,ke=s("7ecf"),_e=Object(d["a"])(xe,i,n,!1,null,null,null);t["default"]=_e.exports;v()(_e,{VBtn:w["a"],VCard:x["a"],VCardActions:k["a"],VCardText:k["b"],VCardTitle:k["c"],VOverlay:ke["a"],VSpacer:U["a"]})},aa7e:function(e,t,s){},c3c2:function(e,t,s){"use strict";var i=s("e4d5"),n=s("6b34"),a=s("da3e"),r=a["a"].extend({name:"rippleable",directives:{ripple:n["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple(e={}){return this.ripple?(e.staticClass="v-input--selection-controls__ripple",e.directives=e.directives||[],e.directives.push({name:"ripple",value:{center:!0}}),e.on=Object.assign({click:this.onChange},this.$listeners),this.$createElement("div",e)):null},onChange(){}}}),o=s("95ba"),l=s("2c7d");t["a"]=Object(l["a"])(i["a"],r,o["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"accent"},isMultiple(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive(){const e=this.value,t=this.internalValue;return this.isMultiple?!!Array.isArray(t)&&t.some(t=>this.valueComparator(t,e)):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,t):Boolean(t):this.valueComparator(t,this.trueValue)},isDirty(){return this.isActive}},watch:{inputValue(e){this.lazyValue=e,this.hasColor=e}},methods:{genLabel(){const e=i["a"].options.methods.genLabel.call(this);return e?(e.data.on={click:e=>{e.preventDefault(),this.onChange()}},e):e},genInput(e,t){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:e,type:e},t),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown},ref:"input"})},onBlur(){this.isFocused=!1},onChange(){if(this.isDisabled)return;const e=this.value;let t=this.internalValue;if(this.isMultiple){Array.isArray(t)||(t=[]);const s=t.length;t=t.filter(t=>!this.valueComparator(t,e)),t.length===s&&t.push(e)}else t=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(t,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(t,e)?null:e:!t;this.validate(!0,t),this.internalValue=t,this.hasColor=t},onFocus(){this.isFocused=!0},onKeydown(e){}}})},cb1f:function(e,t,s){},d1ce:function(e,t,s){"use strict";s("76ad"),s("8fee");var i=s("2501"),n=s("e4d5"),a=s("c3c2");t["a"]=a["a"].extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$vuetify.icons.checkboxIndeterminate"},onIcon:{type:String,default:"$vuetify.icons.checkboxOn"},offIcon:{type:String,default:"$vuetify.icons.checkboxOff"}},data(){return{inputIndeterminate:this.indeterminate}},computed:{classes(){return{...n["a"].options.computed.classes.call(this),"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate}},computedIcon(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState(){if(!this.disabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":this.hasColor?this.computedColor:void 0}},watch:{indeterminate(e){this.inputIndeterminate=e},inputIndeterminate(e){this.$emit("update:indeterminate",e)},isActive(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",{...this.$attrs,"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()}),this.genRipple(this.setTextColor(this.validationState)),this.$createElement(i["a"],this.setTextColor(this.validationState,{props:{dark:this.dark,light:this.light}}),this.computedIcon)])},genDefaultSlot(){return[this.genCheckbox(),this.genLabel()]}}})},e4d5:function(e,t,s){"use strict";s("32cc");var i=s("2501"),n=s("538b"),a=(s("1e38"),s("760a")),r=s("be01"),o=s("2c7d"),l=Object(o["a"])(a["a"],r["a"]).extend({name:"v-messages",props:{value:{type:Array,default:()=>[]}},methods:{genChildren(){return this.$createElement("transition-group",{staticClass:"v-messages__wrapper",attrs:{name:"message-transition",tag:"div"}},this.value.map(this.genMessage))},genMessage(e,t){return this.$createElement("div",{staticClass:"v-messages__message",key:t,domProps:{innerHTML:e}})}},render(e){return e("div",this.setTextColor(this.color,{staticClass:"v-messages",class:this.themeClasses}),[this.genChildren()])}}),c=l,h=s("6e94"),u=s("b0d1"),d=s("dc83"),p=Object(o["a"])(a["a"],Object(h["a"])("form"),r["a"]).extend({name:"validatable",props:{disabled:Boolean,error:Boolean,errorCount:{type:[Number,String],default:1},errorMessages:{type:[String,Array],default:()=>[]},messages:{type:[String,Array],default:()=>[]},readonly:Boolean,rules:{type:Array,default:()=>[]},success:Boolean,successMessages:{type:[String,Array],default:()=>[]},validateOnBlur:Boolean,value:{required:!1}},data(){return{errorBucket:[],hasColor:!1,hasFocused:!1,hasInput:!1,isFocused:!1,isResetting:!1,lazyValue:this.value,valid:!1}},computed:{computedColor(){if(!this.disabled)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},hasError(){return this.internalErrorMessages.length>0||this.errorBucket.length>0||this.error},hasSuccess(){return this.internalSuccessMessages.length>0||this.success},externalError(){return this.internalErrorMessages.length>0||this.error},hasMessages(){return this.validationTarget.length>0},hasState(){return!this.disabled&&(this.hasSuccess||this.shouldValidate&&this.hasError)},internalErrorMessages(){return this.genInternalMessages(this.errorMessages)},internalMessages(){return this.genInternalMessages(this.messages)},internalSuccessMessages(){return this.genInternalMessages(this.successMessages)},internalValue:{get(){return this.lazyValue},set(e){this.lazyValue=e,this.$emit("input",e)}},shouldValidate(){return!!this.externalError||!this.isResetting&&(this.validateOnBlur?this.hasFocused&&!this.isFocused:this.hasInput||this.hasFocused)},validations(){return this.validationTarget.slice(0,Number(this.errorCount))},validationState(){if(!this.disabled)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":this.hasColor?this.computedColor:void 0},validationTarget(){return this.internalErrorMessages.length>0?this.internalErrorMessages:this.successMessages.length>0?this.internalSuccessMessages:this.messages.length>0?this.internalMessages:this.shouldValidate?this.errorBucket:[]}},watch:{rules:{handler(e,t){Object(u["i"])(e,t)||this.validate()},deep:!0},internalValue(){this.hasInput=!0,this.validateOnBlur||this.$nextTick(this.validate)},isFocused(e){e||this.disabled||(this.hasFocused=!0,this.validateOnBlur&&this.validate())},isResetting(){setTimeout(()=>{this.hasInput=!1,this.hasFocused=!1,this.isResetting=!1,this.validate()},0)},hasError(e){this.shouldValidate&&this.$emit("update:error",e)},value(e){this.lazyValue=e}},beforeMount(){this.validate()},created(){this.form&&this.form.register(this)},beforeDestroy(){this.form&&this.form.unregister(this)},methods:{genInternalMessages(e){return e?Array.isArray(e)?e:[e]:[]},reset(){this.isResetting=!0,this.internalValue=Array.isArray(this.internalValue)?[]:void 0},resetValidation(){this.isResetting=!0},validate(e=!1,t){const s=[];t=t||this.internalValue,e&&(this.hasInput=this.hasFocused=!0);for(let i=0;i<this.rules.length;i++){const e=this.rules[i],n="function"===typeof e?e(t):e;"string"===typeof n?s.push(n):"boolean"!==typeof n&&Object(d["b"])(`Rules should return a string or boolean, received '${typeof n}' instead`,this)}return this.errorBucket=s,this.valid=0===s.length,this.valid}}});const v=Object(o["a"])(p);var f=v.extend().extend({name:"v-input",inheritAttrs:!1,props:{appendIcon:String,backgroundColor:{type:String,default:""},height:[Number,String],hideDetails:Boolean,hint:String,id:String,label:String,loading:Boolean,persistentHint:Boolean,prependIcon:String,value:null},data(){return{lazyValue:this.value,hasMouseDown:!1}},computed:{classes(){return{"v-input--has-state":this.hasState,"v-input--hide-details":this.hideDetails,"v-input--is-label-active":this.isLabelActive,"v-input--is-dirty":this.isDirty,"v-input--is-disabled":this.disabled,"v-input--is-focused":this.isFocused,"v-input--is-loading":!1!==this.loading&&void 0!==this.loading,"v-input--is-readonly":this.readonly,...this.themeClasses}},computedId(){return this.id||`input-${this._uid}`},hasHint(){return!this.hasMessages&&!!this.hint&&(this.persistentHint||this.isFocused)},hasLabel(){return!(!this.$slots.label&&!this.label)},internalValue:{get(){return this.lazyValue},set(e){this.lazyValue=e,this.$emit(this.$_modelEvent,e)}},isDirty(){return!!this.lazyValue},isDisabled(){return this.disabled||this.readonly},isLabelActive(){return this.isDirty}},watch:{value(e){this.lazyValue=e}},beforeCreate(){this.$_modelEvent=this.$options.model&&this.$options.model.event||"input"},methods:{genContent(){return[this.genPrependSlot(),this.genControl(),this.genAppendSlot()]},genControl(){return this.$createElement("div",{staticClass:"v-input__control"},[this.genInputSlot(),this.genMessages()])},genDefaultSlot(){return[this.genLabel(),this.$slots.default]},genIcon(e,t){const s=this[`${e}Icon`],n=`click:${Object(u["q"])(e)}`,a={props:{color:this.validationState,dark:this.dark,disabled:this.disabled,light:this.light},on:this.$listeners[n]||t?{click:e=>{e.preventDefault(),e.stopPropagation(),this.$emit(n,e),t&&t(e)},mouseup:e=>{e.preventDefault(),e.stopPropagation()}}:void 0};return this.$createElement("div",{staticClass:`v-input__icon v-input__icon--${Object(u["q"])(e)}`,key:e+s},[this.$createElement(i["a"],a,s)])},genInputSlot(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor,{staticClass:"v-input__slot",style:{height:Object(u["e"])(this.height)},on:{click:this.onClick,mousedown:this.onMouseDown,mouseup:this.onMouseUp},ref:"input-slot"}),[this.genDefaultSlot()])},genLabel(){return this.hasLabel?this.$createElement(n["a"],{props:{color:this.validationState,dark:this.dark,focused:this.hasState,for:this.computedId,light:this.light}},this.$slots.label||this.label):null},genMessages(){if(this.hideDetails)return null;const e=this.hasHint?[this.hint]:this.validations;return this.$createElement(c,{props:{color:this.hasHint?"":this.validationState,dark:this.dark,light:this.light,value:this.hasMessages||this.hasHint?e:[]}})},genSlot(e,t,s){if(!s.length)return null;const i=`${e}-${t}`;return this.$createElement("div",{staticClass:`v-input__${i}`,ref:i},s)},genPrependSlot(){const e=[];return this.$slots.prepend?e.push(this.$slots.prepend):this.prependIcon&&e.push(this.genIcon("prepend")),this.genSlot("prepend","outer",e)},genAppendSlot(){const e=[];return this.$slots.append?e.push(this.$slots.append):this.appendIcon&&e.push(this.genIcon("append")),this.genSlot("append","outer",e)},onClick(e){this.$emit("click",e)},onMouseDown(e){this.hasMouseDown=!0,this.$emit("mousedown",e)},onMouseUp(e){this.hasMouseDown=!1,this.$emit("mouseup",e)}},render(e){return e("div",this.setTextColor(this.validationState,{staticClass:"v-input",class:this.classes}),this.genContent())}});t["a"]=f},fb49:function(e,t,s){}}]);
//# sourceMappingURL=chunk-f55f9c24.f100d47e.js.map
"use strict";(self["webpackChunktoutiao"]=self["webpackChunktoutiao"]||[]).push([[697],{5697:function(t,i,e){e.r(i),e.d(i,{default:function(){return $}});var s=function(){var t=this,i=t._self._c;return i("div",{staticClass:"head",on:{touchmove:t.windowScroll,mousewheel:t.windowScroll}},[i("a",{directives:[{name:"show",rawName:"v-show",value:t.aShow,expression:"aShow"}],staticClass:"backTop",attrs:{href:"#"},on:{click:t.removea}},[t._v("回到顶部")]),i("form",{staticClass:"searchhead",attrs:{action:"/"}},[i("van-search",{attrs:{"show-action":"",placeholder:"请输入搜索关键词"},on:{search:t.onSearch,cancel:t.onCancel,clear:t.clear,input:t.input,focus:t.input},model:{value:t.value,callback:function(i){t.value=i},expression:"value"}})],1),i("div",{directives:[{name:"show",rawName:"v-show",value:t.mohusearch,expression:"mohusearch"}],staticClass:"sou"},t._l(t.mohulist,(function(e,s){return i("li",{key:s,on:{click:function(i){return t.mhsou(e.title)}}},[t._v(" "+t._s(e.title)+" ")])})),0),t.a?i("div",{staticClass:"content",staticStyle:{"margin-top":"70px"}},[i("div",{staticClass:"conhead"},[i("div",[t._v("搜索历史")]),i("div",{staticClass:"delall",on:{click:t.delall}},[t._v("全部删除")])]),i("div",{staticClass:"deltu"},[i("svg",{staticClass:"icon",attrs:{t:"1666080364369",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2559",width:"200",height:"200"},on:{click:t.delall}},[i("path",{attrs:{d:"M106.666667 213.333333h810.666666v42.666667H106.666667z",fill:"#8a8a8a","p-id":"2560"}}),i("path",{attrs:{d:"M640 128v42.666667h42.666667V128c0-23.573333-19.093333-42.666667-42.538667-42.666667H383.872A42.496 42.496 0 0 0 341.333333 128v42.666667h42.666667V128h256z",fill:"#8a8a8a","p-id":"2561"}}),i("path",{attrs:{d:"M213.333333 896V256H170.666667v639.957333C170.666667 919.552 189.653333 938.666667 213.376 938.666667h597.248C834.218667 938.666667 853.333333 919.68 853.333333 895.957333V256h-42.666666v640H213.333333z",fill:"#8a8a8a","p-id":"2562"}}),i("path",{attrs:{d:"M320 341.333333h42.666667v384h-42.666667zM490.666667 341.333333h42.666666v384h-42.666666zM661.333333 341.333333h42.666667v384h-42.666667z",fill:"#8a8a8a","p-id":"2563"}})])]),t._l(t.history,(function(e,s){return i("div",{key:s,staticClass:"delfoot"},[i("div",{staticClass:"foottext",on:{click:function(i){return t.hsearch(e)}}},[t._v(" "+t._s(e)+" ")]),i("div",{staticClass:"foottu",on:{click:function(i){return t.delhistory(s)}}},[i("svg",{staticClass:"icon",attrs:{t:"1666080959356",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2957",width:"200",height:"200"}},[i("path",{attrs:{d:"M687.603949 656.994302 541.10027 510.457878 687.603949 363.943966c8.829086-8.840342 8.829086-23.122627 0-31.961946-8.850575-8.840342-23.13286-8.840342-31.962969 0L509.138324 478.495932 362.623389 331.980997c-8.840342-8.818853-23.122627-8.818853-31.962969 0-8.840342 8.840342-8.840342 23.144116 0 31.984459l146.493445 146.514935L330.638931 656.994302c-8.819876 8.830109-8.819876 23.133883 0 31.962969 8.840342 8.829086 23.144116 8.829086 31.984459 0l146.514935-146.514935 146.502655 146.514935c8.830109 8.829086 23.112394 8.829086 31.962969 0C696.433034 680.129208 696.45657 665.824411 687.603949 656.994302z","p-id":"2958",fill:"#8a8a8a"}}),i("path",{attrs:{d:"M938.362063 510.457878c0-237.061161-192.174857-429.234995-429.247274-429.234995-237.062184 0-429.246251 192.173834-429.246251 429.234995 0 237.083673 192.185091 429.257507 429.246251 429.257507 97.345072 0 186.435133-33.110095 258.440074-87.677898 2.958378-3.354398 4.900613-7.636934 4.900613-12.449543 0-10.506285-8.521071-19.026332-19.027355-19.026332-5.431709 0-10.287297 2.162246-13.752212 5.826705l-0.2415 0c-64.456011 47.414893-143.745868 75.800383-229.876528 75.800383-214.679407 0-388.730489-174.073594-388.730489-388.719232 0-214.688617 174.051081-388.718209 388.730489-388.718209 214.688617 0 388.697743 174.029592 388.697743 388.718209 0 65.548902-15.386432 127.277802-44.081984 181.490517l0 0.309038c-0.508583 1.811252-1.104147 3.576455-1.104147 5.519714 0 10.507308 8.520047 19.028379 19.028379 19.028379 8.18952 0 15.054881-5.254677 17.703197-12.494569l0 0.132006C920.349827 648.38625 938.362063 581.536726 938.362063 510.457878z","p-id":"2959",fill:"#8a8a8a"}})])])])}))],2):i("div",{staticStyle:{"margin-top":"75px"}},t._l(t.selectlist,(function(e,s){return i("div",{key:s,staticClass:"selectlist"},[i("div",{staticClass:"listbox",on:{click:function(i){return t.xq(e._id)}}},[1===e.imageSrc.length?i("div",{staticClass:"nr"},[i("div",{staticClass:"listtitle"},[t._v(t._s(e.title))]),i("div",{staticClass:"listimg"},[i("img",{attrs:{src:e.imageSrc[0],alt:""}})])]):e.imageSrc.length>1?i("div",{staticClass:"nrs"},[i("div",{staticClass:"listtitle"},[t._v(t._s(e.title))]),i("div",{staticClass:"listimgs"},t._l(e.imageSrc,(function(t,e){return i("div",{key:e},[i("img",{attrs:{src:t,alt:""}})])})),0)]):i("div",{staticClass:"nrss"},[i("div",{staticClass:"listtitle"},[t._v(t._s(e.title))])]),i("div",{staticClass:"bigfoot"},[i("div",{staticClass:"listfoot"},[i("div",[t._v(t._s(e.author))]),i("div",[t._v(t._s(e.comment)+"评论")]),i("div",[t._v(t._s(t.ontime(e.time)))])])])])])})),0)])},a=[],r=(e(8146),e(8848)),n=(e(7322),e(6631)),l=(e(6791),e(4269)),o=(e(1958),e(3332),e(6742),e(3094),e(7984),e(3915)),h=e.n(o),c=e(9299),u=e(855),d=e(4771),v=e(5781),g=e(7061),f=(0,u.d)("search"),m=f[0],p=f[1],y=f[2];function b(t,i,e,s){function a(){if(e.label||i.label)return t("div",{class:p("label")},[e.label?e.label():i.label])}function r(){if(i.showAction)return t("div",{class:p("action"),attrs:{role:"button",tabindex:"0"},on:{click:a}},[e.action?e.action():i.actionText||y("cancel")]);function a(){e.action||((0,d.j8)(s,"input",""),(0,d.j8)(s,"cancel"))}}var n={attrs:s.data.attrs,on:(0,c.Z)({},s.listeners,{keypress:function(t){13===t.keyCode&&((0,v.PF)(t),(0,d.j8)(s,"search",i.value)),(0,d.j8)(s,"keypress",t)}})},l=(0,d.ED)(s);return l.attrs=void 0,t("div",h()([{class:p({"show-action":i.showAction}),style:{background:i.background}},l]),[null==e.left?void 0:e.left(),t("div",{class:p("content",i.shape)},[a(),t(g.Z,h()([{attrs:{type:"search",border:!1,value:i.value,leftIcon:i.leftIcon,rightIcon:i.rightIcon,clearable:i.clearable,clearTrigger:i.clearTrigger},scopedSlots:{"left-icon":e["left-icon"],"right-icon":e["right-icon"]}},n]))]),r()])}b.props={value:String,label:String,rightIcon:String,actionText:String,background:String,showAction:Boolean,clearTrigger:String,shape:{type:String,default:"square"},clearable:{type:Boolean,default:!0},leftIcon:{type:String,default:"search"}};var w=m(b),S=(e(7658),e(541),e(70)),k={name:"search",components:{[w.name]:w,[l.Z.name]:l.Z,[n.Z.name]:n.Z},data(){return{value:"",aShow:!1,a:!0,selectlist:[],history:[],mohusearch:!1,mohulist:[]}},methods:{windowScroll(t){document.querySelector(".van-field__control").blur(),this.mohusearch=!1,t.view.scrollY>=1500?this.aShow=!0:this.aShow=!1},removea(){this.aShow=!1},xq(t){this.$router.push({name:"lcontent",params:{id:t}})},onSearch(){this.value&&(this.value=this.value.trim(),this.mohusearch=!1,this.a=!1,(0,S.ZP)({method:"post",url:" https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/api/search",data:{skip:0,limit:100,key_word:this.value}}).then((t=>{0==t.data.data.length?(0,r.Z)("您要搜索的东西不存在"):(this.selectlist=t.data.data,0!==this.value.length&&this.history.unshift(this.value),this.history=[...new Set(this.history)],localStorage.setItem("history",this.history))})))},clear(){this.a=!0,this.mohusearch=!1},input(){0===this.value.trim().length?(this.mohusearch=!1,this.a=!0):(0,S.ZP)({method:"post",url:" https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/api/search",data:{key_word:this.value}}).then((t=>{this.mohusearch=!0,this.mohulist=t.data.data,0===this.value.trim().length&&(this.mohusearch=!1,this.a=!0)}))},onCancel(){this.$router.push("/index")},delhistory(t){this.history.splice(t,1)},delall(){this.history.splice(0,this.history.length),localStorage.removeItem("history")},hsearch(t){this.value=t,this.onSearch()},mhsou(t){this.value=t,this.onSearch()}},activated(){this.aShow=!1,localStorage.getItem("history")||(this.history=[])},created(){this.history.push(localStorage.getItem("history")?localStorage.getItem("history").split(","):[]),this.history=this.history[0]},beforeRouteEnter(t,i,e){"/content"!==i.path?setTimeout((()=>{document.querySelector(".van-field__control").focus()}),300):e((t=>{setTimeout((()=>{window.scrollY>1500?t.aShow=!0:t.aShow=!1}),200)})),e()}},C=k,x=e(1001),I=(0,x.Z)(C,s,a,!1,null,"05b1f526",null),$=I.exports},7984:function(){},7061:function(t,i,e){e.d(i,{Z:function(){return S}});var s=e(3915),a=e.n(s),r=e(9299),n=e(3370);function l(){return!n.sk&&/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())}var o=e(8161),h=l();function c(){h&&(0,o.kn)((0,o.oD)())}var u=e(4535),d=e(5781),v=e(855),g=e(408),f=e(9858),m=e(6631),p=e(5363),y=(0,v.d)("field"),b=y[0],w=y[1],S=b({inheritAttrs:!1,provide:function(){return{vanField:this}},inject:{vanForm:{default:null}},props:(0,r.Z)({},p.T,{name:String,rules:Array,disabled:{type:Boolean,default:null},readonly:{type:Boolean,default:null},autosize:[Boolean,Object],leftIcon:String,rightIcon:String,clearable:Boolean,formatter:Function,maxlength:[Number,String],labelWidth:[Number,String],labelClass:null,labelAlign:String,inputAlign:String,placeholder:String,errorMessage:String,errorMessageAlign:String,showWordLimit:Boolean,value:{type:[Number,String],default:""},type:{type:String,default:"text"},error:{type:Boolean,default:null},colon:{type:Boolean,default:null},clearTrigger:{type:String,default:"focus"},formatTrigger:{type:String,default:"onChange"}}),data:function(){return{focused:!1,validateFailed:!1,validateMessage:""}},watch:{value:function(){this.updateValue(this.value),this.resetValidation(),this.validateWithTrigger("onChange"),this.$nextTick(this.adjustSize)}},mounted:function(){this.updateValue(this.value,this.formatTrigger),this.$nextTick(this.adjustSize),this.vanForm&&this.vanForm.addField(this)},beforeDestroy:function(){this.vanForm&&this.vanForm.removeField(this)},computed:{showClear:function(){var t=this.getProp("readonly");if(this.clearable&&!t){var i=(0,n.Xq)(this.value)&&""!==this.value,e="always"===this.clearTrigger||"focus"===this.clearTrigger&&this.focused;return i&&e}},showError:function(){return null!==this.error?this.error:!!(this.vanForm&&this.vanForm.showError&&this.validateFailed)||void 0},listeners:function(){return(0,r.Z)({},this.$listeners,{blur:this.onBlur,focus:this.onFocus,input:this.onInput,click:this.onClickInput,keypress:this.onKeypress})},labelStyle:function(){var t=this.getProp("labelWidth");if(t)return{width:(0,g.N)(t)}},formValue:function(){return this.children&&(this.$scopedSlots.input||this.$slots.input)?this.children.value:this.value}},methods:{focus:function(){this.$refs.input&&this.$refs.input.focus()},blur:function(){this.$refs.input&&this.$refs.input.blur()},runValidator:function(t,i){return new Promise((function(e){var s=i.validator(t,i);if((0,n.tI)(s))return s.then(e);e(s)}))},isEmptyValue:function(t){return Array.isArray(t)?!t.length:0!==t&&!t},runSyncRule:function(t,i){return(!i.required||!this.isEmptyValue(t))&&!(i.pattern&&!i.pattern.test(t))},getRuleMessage:function(t,i){var e=i.message;return(0,n.mf)(e)?e(t,i):e},runRules:function(t){var i=this;return t.reduce((function(t,e){return t.then((function(){if(!i.validateFailed){var t=i.formValue;return e.formatter&&(t=e.formatter(t,e)),i.runSyncRule(t,e)?e.validator?i.runValidator(t,e).then((function(s){!1===s&&(i.validateFailed=!0,i.validateMessage=i.getRuleMessage(t,e))})):void 0:(i.validateFailed=!0,void(i.validateMessage=i.getRuleMessage(t,e)))}}))}),Promise.resolve())},validate:function(t){var i=this;return void 0===t&&(t=this.rules),new Promise((function(e){t||e(),i.resetValidation(),i.runRules(t).then((function(){i.validateFailed?e({name:i.name,message:i.validateMessage}):e()}))}))},validateWithTrigger:function(t){if(this.vanForm&&this.rules){var i=this.vanForm.validateTrigger===t,e=this.rules.filter((function(e){return e.trigger?e.trigger===t:i}));e.length&&this.validate(e)}},resetValidation:function(){this.validateFailed&&(this.validateFailed=!1,this.validateMessage="")},updateValue:function(t,i){void 0===i&&(i="onChange"),t=(0,n.Xq)(t)?String(t):"";var e=this.maxlength;if((0,n.Xq)(e)&&t.length>e&&(t=this.value&&this.value.length===+e?this.value:t.slice(0,e)),"number"===this.type||"digit"===this.type){var s="number"===this.type;t=(0,u.uf)(t,s,s)}this.formatter&&i===this.formatTrigger&&(t=this.formatter(t));var a=this.$refs.input;a&&t!==a.value&&(a.value=t),t!==this.value&&this.$emit("input",t)},onInput:function(t){t.target.composing||this.updateValue(t.target.value)},onFocus:function(t){this.focused=!0,this.$emit("focus",t),this.$nextTick(this.adjustSize),this.getProp("readonly")&&this.blur()},onBlur:function(t){this.getProp("readonly")||(this.focused=!1,this.updateValue(this.value,"onBlur"),this.$emit("blur",t),this.validateWithTrigger("onBlur"),this.$nextTick(this.adjustSize),c())},onClick:function(t){this.$emit("click",t)},onClickInput:function(t){this.$emit("click-input",t)},onClickLeftIcon:function(t){this.$emit("click-left-icon",t)},onClickRightIcon:function(t){this.$emit("click-right-icon",t)},onClear:function(t){(0,d.PF)(t),this.$emit("input",""),this.$emit("clear",t)},onKeypress:function(t){var i=13;if(t.keyCode===i){var e=this.getProp("submitOnEnter");e||"textarea"===this.type||(0,d.PF)(t),"search"===this.type&&this.blur()}this.$emit("keypress",t)},adjustSize:function(){var t=this.$refs.input;if("textarea"===this.type&&this.autosize&&t){var i=(0,o.oD)();t.style.height="auto";var e=t.scrollHeight;if((0,n.Kn)(this.autosize)){var s=this.autosize,a=s.maxHeight,r=s.minHeight;a&&(e=Math.min(e,a)),r&&(e=Math.max(e,r))}e&&(t.style.height=e+"px",(0,o.kn)(i))}},genInput:function(){var t=this.$createElement,i=this.type,e=this.getProp("disabled"),s=this.getProp("readonly"),n=this.slots("input"),l=this.getProp("inputAlign");if(n)return t("div",{class:w("control",[l,"custom"]),on:{click:this.onClickInput}},[n]);var o={ref:"input",class:w("control",l),domProps:{value:this.value},attrs:(0,r.Z)({},this.$attrs,{name:this.name,disabled:e,readonly:s,placeholder:this.placeholder}),on:this.listeners,directives:[{name:"model",value:this.value}]};if("textarea"===i)return t("textarea",a()([{},o]));var h,c=i;return"number"===i&&(c="text",h="decimal"),"digit"===i&&(c="tel",h="numeric"),t("input",a()([{attrs:{type:c,inputmode:h}},o]))},genLeftIcon:function(){var t=this.$createElement,i=this.slots("left-icon")||this.leftIcon;if(i)return t("div",{class:w("left-icon"),on:{click:this.onClickLeftIcon}},[this.slots("left-icon")||t(f.Z,{attrs:{name:this.leftIcon,classPrefix:this.iconPrefix}})])},genRightIcon:function(){var t=this.$createElement,i=this.slots,e=i("right-icon")||this.rightIcon;if(e)return t("div",{class:w("right-icon"),on:{click:this.onClickRightIcon}},[i("right-icon")||t(f.Z,{attrs:{name:this.rightIcon,classPrefix:this.iconPrefix}})])},genWordLimit:function(){var t=this.$createElement;if(this.showWordLimit&&this.maxlength){var i=(this.value||"").length;return t("div",{class:w("word-limit")},[t("span",{class:w("word-num")},[i]),"/",this.maxlength])}},genMessage:function(){var t=this.$createElement;if(!this.vanForm||!1!==this.vanForm.showErrorMessage){var i=this.errorMessage||this.validateMessage;if(i){var e=this.getProp("errorMessageAlign");return t("div",{class:w("error-message",e)},[i])}}},getProp:function(t){return(0,n.Xq)(this[t])?this[t]:this.vanForm&&(0,n.Xq)(this.vanForm[t])?this.vanForm[t]:void 0},genLabel:function(){var t=this.$createElement,i=this.getProp("colon")?":":"";return this.slots("label")?[this.slots("label"),i]:this.label?t("span",[this.label+i]):void 0}},render:function(){var t,i=arguments[0],e=this.slots,s=this.getProp("disabled"),a=this.getProp("labelAlign"),r={icon:this.genLeftIcon},n=this.genLabel();n&&(r.title=function(){return n});var l=this.slots("extra");return l&&(r.extra=function(){return l}),i(m.Z,{attrs:{icon:this.leftIcon,size:this.size,center:this.center,border:this.border,isLink:this.isLink,required:this.required,clickable:this.clickable,titleStyle:this.labelStyle,valueClass:w("value"),titleClass:[w("label",a),this.labelClass],arrowDirection:this.arrowDirection},scopedSlots:r,class:w((t={error:this.showError,disabled:s},t["label-"+a]=a,t["min-height"]="textarea"===this.type&&!this.autosize,t)),on:{click:this.onClick}},[i("div",{class:w("body")},[this.genInput(),this.showClear&&i(f.Z,{attrs:{name:"clear"},class:w("clear"),on:{touchstart:this.onClear}}),this.genRightIcon(),e("button")&&i("div",{class:w("button")},[e("button")])]),this.genWordLimit(),this.genMessage()])}})},4535:function(t,i,e){function s(t,i,e){return Math.min(Math.max(t,i),e)}function a(t,i,e){var s=t.indexOf(i),a="";return-1===s?t:"-"===i&&0!==s?t.slice(0,s):("."===i&&t.match(/^(\.|-\.)/)&&(a=s?"-0":"0"),a+t.slice(0,s+1)+t.slice(s).replace(e,""))}function r(t,i,e){void 0===i&&(i=!0),void 0===e&&(e=!0),t=i?a(t,".",/\./g):t.split(".")[0],t=e?a(t,"-",/-/g):t.replace(/-/,"");var s=i?/[^-0-9.]/g:/[^-0-9]/g;return t.replace(s,"")}e.d(i,{uf:function(){return r},w6:function(){return s}})}}]);
//# sourceMappingURL=697.a708b17c.js.map
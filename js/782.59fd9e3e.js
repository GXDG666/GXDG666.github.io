"use strict";(self["webpackChunktoutiao"]=self["webpackChunktoutiao"]||[]).push([[782],{4398:function(t,i,e){e(7658);var n=e(9299),o=e(3915),s=e.n(o),a=e(855),r=e(4771),h=e(1047),l=e(2250),c=e(9858),u=e(4958),d=(0,a.d)("button"),f=d[0],v=d[1];function m(t,i,e,n){var o,a=i.tag,d=i.icon,f=i.type,m=i.color,g=i.plain,p=i.disabled,w=i.loading,y=i.hairline,S=i.loadingText,b=i.iconPosition,x={};function z(t){i.loading&&t.preventDefault(),w||p||((0,r.j8)(n,"click",t),(0,l.fz)(n))}function $(t){(0,r.j8)(n,"touchstart",t)}m&&(x.color=g?m:"white",g||(x.background=m),-1!==m.indexOf("gradient")?x.border=0:x.borderColor=m);var T=[v([f,i.size,{plain:g,loading:w,disabled:p,hairline:y,block:i.block,round:i.round,square:i.square}]),(o={},o[h._K]=y,o)];function C(){return w?e.loading?e.loading():t(u.Z,{class:v("loading"),attrs:{size:i.loadingSize,type:i.loadingType,color:"currentColor"}}):e.icon?t("div",{class:v("icon")},[e.icon()]):d?t(c.Z,{attrs:{name:d,classPrefix:i.iconPrefix},class:v("icon")}):void 0}function P(){var n,o=[];return"left"===b&&o.push(C()),n=w?S:e.default?e.default():i.text,n&&o.push(t("span",{class:v("text")},[n])),"right"===b&&o.push(C()),o}return t(a,s()([{style:x,class:T,attrs:{type:i.nativeType,disabled:p},on:{click:z,touchstart:$}},(0,r.ED)(n)]),[t("div",{class:v("content")},[P()])])}m.props=(0,n.Z)({},l.g2,{text:String,icon:String,color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,nativeType:String,loadingText:String,loadingType:String,tag:{type:String,default:"button"},type:{type:String,default:"default"},size:{type:String,default:"normal"},loadingSize:{type:String,default:"20px"},iconPosition:{type:String,default:"left"}}),i["Z"]=f(m)},606:function(t,i,e){e(1958),e(3332),e(6742),e(2939)},2614:function(t,i,e){e.d(i,{Z:function(){return Q}});e(7658);var n=e(9299),o=e(855),s=e(408),a=e(3370);function r(t){return Array.isArray(t)?t:[t]}function h(t,i){return new Promise((function(e){if("file"!==i){var n=new FileReader;n.onload=function(t){e(t.target.result)},"dataUrl"===i?n.readAsDataURL(t):"text"===i&&n.readAsText(t)}else e(null)}))}function l(t,i){return r(t).some((function(t){return!!t&&((0,a.mf)(i)?i(t):t.size>i)}))}var c=/\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;function u(t){return c.test(t)}function d(t){return!!t.isImage||(t.file&&t.file.type?0===t.file.type.indexOf("image"):t.url?u(t.url):!!t.content&&0===t.content.indexOf("data:image"))}var f={inject:{vanField:{default:null}},watch:{value:function(){var t=this.vanField;t&&(t.resetValidation(),t.validateWithTrigger("onChange"))}},created:function(){var t=this.vanField;t&&!t.children&&(t.children=this)}},v=e(9858),m=e(3915),g=e.n(m),p=(0,o.d)("image"),w=p[0],y=p[1],S=w({props:{src:String,fit:String,alt:String,round:Boolean,width:[Number,String],height:[Number,String],radius:[Number,String],lazyLoad:Boolean,iconPrefix:String,showError:{type:Boolean,default:!0},showLoading:{type:Boolean,default:!0},errorIcon:{type:String,default:"photo-fail"},loadingIcon:{type:String,default:"photo"}},data:function(){return{loading:!0,error:!1}},watch:{src:function(){this.loading=!0,this.error=!1}},computed:{style:function(){var t={};return(0,a.Xq)(this.width)&&(t.width=(0,s.N)(this.width)),(0,a.Xq)(this.height)&&(t.height=(0,s.N)(this.height)),(0,a.Xq)(this.radius)&&(t.overflow="hidden",t.borderRadius=(0,s.N)(this.radius)),t}},created:function(){var t=this.$Lazyload;t&&a._f&&(t.$on("loaded",this.onLazyLoaded),t.$on("error",this.onLazyLoadError))},beforeDestroy:function(){var t=this.$Lazyload;t&&(t.$off("loaded",this.onLazyLoaded),t.$off("error",this.onLazyLoadError))},methods:{onLoad:function(t){this.loading=!1,this.$emit("load",t)},onLazyLoaded:function(t){var i=t.el;i===this.$refs.image&&this.loading&&this.onLoad()},onLazyLoadError:function(t){var i=t.el;i!==this.$refs.image||this.error||this.onError()},onError:function(t){this.error=!0,this.loading=!1,this.$emit("error",t)},onClick:function(t){this.$emit("click",t)},genPlaceholder:function(){var t=this.$createElement;return this.loading&&this.showLoading?t("div",{class:y("loading")},[this.slots("loading")||t(v.Z,{attrs:{name:this.loadingIcon,classPrefix:this.iconPrefix},class:y("loading-icon")})]):this.error&&this.showError?t("div",{class:y("error")},[this.slots("error")||t(v.Z,{attrs:{name:this.errorIcon,classPrefix:this.iconPrefix},class:y("error-icon")})]):void 0},genImage:function(){var t=this.$createElement,i={class:y("img"),attrs:{alt:this.alt},style:{objectFit:this.fit}};if(!this.error)return this.lazyLoad?t("img",g()([{ref:"image",directives:[{name:"lazy",value:this.src}]},i])):t("img",g()([{attrs:{src:this.src},on:{load:this.onLoad,error:this.onError}},i]))}},render:function(){var t=arguments[0];return t("div",{class:y({round:this.round}),style:this.style,on:{click:this.onClick}},[this.genImage(),this.genPlaceholder(),this.slots()])}}),b=e(4958),x=e(6369),z=(0,o.d)("image-preview"),$=z[0],T=z[1],C=e(4867),P=e(3969),I=e(5590),k=e(4292),L=e(5781),M=e(7799),B=e(4535),X=e(2115),D=(0,o.d)("swipe"),N=D[0],Z=D[1],R=N({mixins:[P.D,(0,X.G)("vanSwipe"),(0,I.X)((function(t,i){t(window,"resize",this.resize,!0),t(window,"orientationchange",this.resize,!0),t(window,"visibilitychange",this.onVisibilityChange),i?this.initialize():this.clear()}))],props:{width:[Number,String],height:[Number,String],autoplay:[Number,String],vertical:Boolean,lazyRender:Boolean,indicatorColor:String,loop:{type:Boolean,default:!0},duration:{type:[Number,String],default:500},touchable:{type:Boolean,default:!0},initialSwipe:{type:[Number,String],default:0},showIndicators:{type:Boolean,default:!0},stopPropagation:{type:Boolean,default:!0}},data:function(){return{rect:null,offset:0,active:0,deltaX:0,deltaY:0,swiping:!1,computedWidth:0,computedHeight:0}},watch:{children:function(){this.initialize()},initialSwipe:function(){this.initialize()},autoplay:function(t){t>0?this.autoPlay():this.clear()}},computed:{count:function(){return this.children.length},maxCount:function(){return Math.ceil(Math.abs(this.minOffset)/this.size)},delta:function(){return this.vertical?this.deltaY:this.deltaX},size:function(){return this[this.vertical?"computedHeight":"computedWidth"]},trackSize:function(){return this.count*this.size},activeIndicator:function(){return(this.active+this.count)%this.count},isCorrectDirection:function(){var t=this.vertical?"vertical":"horizontal";return this.direction===t},trackStyle:function(){var t={transitionDuration:(this.swiping?0:this.duration)+"ms",transform:"translate"+(this.vertical?"Y":"X")+"("+this.offset+"px)"};if(this.size){var i=this.vertical?"height":"width",e=this.vertical?"width":"height";t[i]=this.trackSize+"px",t[e]=this[e]?this[e]+"px":""}return t},indicatorStyle:function(){return{backgroundColor:this.indicatorColor}},minOffset:function(){return(this.vertical?this.rect.height:this.rect.width)-this.size*this.count}},mounted:function(){this.bindTouchEvent(this.$refs.track)},methods:{initialize:function(t){if(void 0===t&&(t=+this.initialSwipe),this.$el&&!(0,k.x)(this.$el)){clearTimeout(this.timer);var i={width:this.$el.offsetWidth,height:this.$el.offsetHeight};this.rect=i,this.swiping=!0,this.active=t,this.computedWidth=+this.width||i.width,this.computedHeight=+this.height||i.height,this.offset=this.getTargetOffset(t),this.children.forEach((function(t){t.offset=0})),this.autoPlay()}},resize:function(){this.initialize(this.activeIndicator)},onVisibilityChange:function(){document.hidden?this.clear():this.autoPlay()},onTouchStart:function(t){this.touchable&&(this.clear(),this.touchStartTime=Date.now(),this.touchStart(t),this.correctPosition())},onTouchMove:function(t){this.touchable&&this.swiping&&(this.touchMove(t),this.isCorrectDirection&&((0,L.PF)(t,this.stopPropagation),this.move({offset:this.delta})))},onTouchEnd:function(){if(this.touchable&&this.swiping){var t=this.size,i=this.delta,e=Date.now()-this.touchStartTime,n=i/e,o=Math.abs(n)>.25||Math.abs(i)>t/2;if(o&&this.isCorrectDirection){var s=this.vertical?this.offsetY:this.offsetX,a=0;a=this.loop?s>0?i>0?-1:1:0:-Math[i>0?"ceil":"floor"](i/t),this.move({pace:a,emitChange:!0})}else i&&this.move({pace:0});this.swiping=!1,this.autoPlay()}},getTargetActive:function(t){var i=this.active,e=this.count,n=this.maxCount;return t?this.loop?(0,B.w6)(i+t,-1,e):(0,B.w6)(i+t,0,n):i},getTargetOffset:function(t,i){void 0===i&&(i=0);var e=t*this.size;this.loop||(e=Math.min(e,-this.minOffset));var n=i-e;return this.loop||(n=(0,B.w6)(n,this.minOffset,0)),n},move:function(t){var i=t.pace,e=void 0===i?0:i,n=t.offset,o=void 0===n?0:n,s=t.emitChange,a=this.loop,r=this.count,h=this.active,l=this.children,c=this.trackSize,u=this.minOffset;if(!(r<=1)){var d=this.getTargetActive(e),f=this.getTargetOffset(d,o);if(a){if(l[0]&&f!==u){var v=f<u;l[0].offset=v?c:0}if(l[r-1]&&0!==f){var m=f>0;l[r-1].offset=m?-c:0}}this.active=d,this.offset=f,s&&d!==h&&this.$emit("change",this.activeIndicator)}},prev:function(){var t=this;this.correctPosition(),this.resetTouchStatus(),(0,M.d1)((function(){t.swiping=!1,t.move({pace:-1,emitChange:!0})}))},next:function(){var t=this;this.correctPosition(),this.resetTouchStatus(),(0,M.d1)((function(){t.swiping=!1,t.move({pace:1,emitChange:!0})}))},swipeTo:function(t,i){var e=this;void 0===i&&(i={}),this.correctPosition(),this.resetTouchStatus(),(0,M.d1)((function(){var n;n=e.loop&&t===e.count?0===e.active?0:t:t%e.count,i.immediate?(0,M.d1)((function(){e.swiping=!1})):e.swiping=!1,e.move({pace:n-e.active,emitChange:!0})}))},correctPosition:function(){this.swiping=!0,this.active<=-1&&this.move({pace:this.count}),this.active>=this.count&&this.move({pace:-this.count})},clear:function(){clearTimeout(this.timer)},autoPlay:function(){var t=this,i=this.autoplay;i>0&&this.count>1&&(this.clear(),this.timer=setTimeout((function(){t.next(),t.autoPlay()}),i))},genIndicator:function(){var t=this,i=this.$createElement,e=this.count,n=this.activeIndicator,o=this.slots("indicator");return o||(this.showIndicators&&e>1?i("div",{class:Z("indicators",{vertical:this.vertical})},[Array.apply(void 0,Array(e)).map((function(e,o){return i("i",{class:Z("indicator",{active:o===n}),style:o===n?t.indicatorStyle:null})}))]):void 0)}},render:function(){var t=arguments[0];return t("div",{class:Z()},[t("div",{ref:"track",style:this.trackStyle,class:Z("track",{vertical:this.vertical})},[this.slots()]),this.genIndicator()])}}),A=(0,o.d)("swipe-item"),E=A[0],Y=A[1],F=E({mixins:[(0,X.j)("vanSwipe")],data:function(){return{offset:0,inited:!1,mounted:!1}},mounted:function(){var t=this;this.$nextTick((function(){t.mounted=!0}))},computed:{style:function(){var t={},i=this.parent,e=i.size,n=i.vertical;return e&&(t[n?"height":"width"]=e+"px"),this.offset&&(t.transform="translate"+(n?"Y":"X")+"("+this.offset+"px)"),t},shouldRender:function(){var t=this.index,i=this.inited,e=this.parent,n=this.mounted;if(!e.lazyRender||i)return!0;if(!n)return!1;var o=e.activeIndicator,s=e.count-1,a=0===o&&e.loop?s:o-1,r=o===s&&e.loop?0:o+1,h=t===o||t===a||t===r;return h&&(this.inited=!0),h}},render:function(){var t=arguments[0];return t("div",{class:Y(),style:this.style,on:(0,n.Z)({},this.$listeners)},[this.shouldRender&&this.slots()])}});function U(t){return Math.sqrt(Math.pow(t[0].clientX-t[1].clientX,2)+Math.pow(t[0].clientY-t[1].clientY,2))}var O,W={mixins:[P.D],props:{src:String,show:Boolean,active:Number,minZoom:[Number,String],maxZoom:[Number,String],rootWidth:Number,rootHeight:Number},data:function(){return{scale:1,moveX:0,moveY:0,moving:!1,zooming:!1,imageRatio:0,displayWidth:0,displayHeight:0}},computed:{vertical:function(){var t=this.rootWidth,i=this.rootHeight,e=i/t;return this.imageRatio>e},imageStyle:function(){var t=this.scale,i={transitionDuration:this.zooming||this.moving?"0s":".3s"};if(1!==t){var e=this.moveX/t,n=this.moveY/t;i.transform="scale("+t+", "+t+") translate("+e+"px, "+n+"px)"}return i},maxMoveX:function(){if(this.imageRatio){var t=this.vertical?this.rootHeight/this.imageRatio:this.rootWidth;return Math.max(0,(this.scale*t-this.rootWidth)/2)}return 0},maxMoveY:function(){if(this.imageRatio){var t=this.vertical?this.rootHeight:this.rootWidth*this.imageRatio;return Math.max(0,(this.scale*t-this.rootHeight)/2)}return 0}},watch:{active:"resetScale",show:function(t){t||this.resetScale()}},mounted:function(){this.bindTouchEvent(this.$el)},methods:{resetScale:function(){this.setScale(1),this.moveX=0,this.moveY=0},setScale:function(t){t=(0,B.w6)(t,+this.minZoom,+this.maxZoom),t!==this.scale&&(this.scale=t,this.$emit("scale",{scale:this.scale,index:this.active}))},toggleScale:function(){var t=this.scale>1?1:2;this.setScale(t),this.moveX=0,this.moveY=0},onTouchStart:function(t){var i=t.touches,e=this.offsetX,n=void 0===e?0:e;this.touchStart(t),this.touchStartTime=new Date,this.fingerNum=i.length,this.startMoveX=this.moveX,this.startMoveY=this.moveY,this.moving=1===this.fingerNum&&1!==this.scale,this.zooming=2===this.fingerNum&&!n,this.zooming&&(this.startScale=this.scale,this.startDistance=U(t.touches))},onTouchMove:function(t){var i=t.touches;if(this.touchMove(t),(this.moving||this.zooming)&&(0,L.PF)(t,!0),this.moving){var e=this.deltaX+this.startMoveX,n=this.deltaY+this.startMoveY;this.moveX=(0,B.w6)(e,-this.maxMoveX,this.maxMoveX),this.moveY=(0,B.w6)(n,-this.maxMoveY,this.maxMoveY)}if(this.zooming&&2===i.length){var o=U(i),s=this.startScale*o/this.startDistance;this.setScale(s)}},onTouchEnd:function(t){var i=!1;(this.moving||this.zooming)&&(i=!0,this.moving&&this.startMoveX===this.moveX&&this.startMoveY===this.moveY&&(i=!1),t.touches.length||(this.zooming&&(this.moveX=(0,B.w6)(this.moveX,-this.maxMoveX,this.maxMoveX),this.moveY=(0,B.w6)(this.moveY,-this.maxMoveY,this.maxMoveY),this.zooming=!1),this.moving=!1,this.startMoveX=0,this.startMoveY=0,this.startScale=1,this.scale<1&&this.resetScale())),(0,L.PF)(t,i),this.checkTap(),this.resetTouchStatus()},checkTap:function(){var t=this;if(!(this.fingerNum>1)){var i=this.offsetX,e=void 0===i?0:i,n=this.offsetY,o=void 0===n?0:n,s=new Date-this.touchStartTime,a=250,r=5;e<r&&o<r&&s<a&&(this.doubleTapTimer?(clearTimeout(this.doubleTapTimer),this.doubleTapTimer=null,this.toggleScale()):this.doubleTapTimer=setTimeout((function(){t.$emit("close"),t.doubleTapTimer=null}),a))}},onLoad:function(t){var i=t.target,e=i.naturalWidth,n=i.naturalHeight;this.imageRatio=n/e}},render:function(){var t=arguments[0],i={loading:function(){return t(b.Z,{attrs:{type:"spinner"}})}};return t(F,{class:T("swipe-item")},[t(S,{attrs:{src:this.src,fit:"contain"},class:T("image",{vertical:this.vertical}),style:this.imageStyle,scopedSlots:i,on:{load:this.onLoad}})])}},H=$({mixins:[P.D,(0,C.e)({skipToggleEvent:!0}),(0,I.X)((function(t){t(window,"resize",this.resize,!0),t(window,"orientationchange",this.resize,!0)}))],props:{className:null,closeable:Boolean,asyncClose:Boolean,overlayStyle:Object,showIndicators:Boolean,images:{type:Array,default:function(){return[]}},loop:{type:Boolean,default:!0},overlay:{type:Boolean,default:!0},minZoom:{type:[Number,String],default:1/3},maxZoom:{type:[Number,String],default:3},transition:{type:String,default:"van-fade"},showIndex:{type:Boolean,default:!0},swipeDuration:{type:[Number,String],default:300},startPosition:{type:[Number,String],default:0},overlayClass:{type:String,default:T("overlay")},closeIcon:{type:String,default:"clear"},closeOnPopstate:{type:Boolean,default:!0},closeIconPosition:{type:String,default:"top-right"}},data:function(){return{active:0,rootWidth:0,rootHeight:0,doubleClickTimer:null}},mounted:function(){this.resize()},watch:{startPosition:"setActive",value:function(t){var i=this;t?(this.setActive(+this.startPosition),this.$nextTick((function(){i.resize(),i.$refs.swipe.swipeTo(+i.startPosition,{immediate:!0})}))):this.$emit("close",{index:this.active,url:this.images[this.active]})}},methods:{resize:function(){if(this.$el&&this.$el.getBoundingClientRect){var t=this.$el.getBoundingClientRect();this.rootWidth=t.width,this.rootHeight=t.height}},emitClose:function(){this.asyncClose||this.$emit("input",!1)},emitScale:function(t){this.$emit("scale",t)},setActive:function(t){t!==this.active&&(this.active=t,this.$emit("change",t))},genIndex:function(){var t=this.$createElement;if(this.showIndex)return t("div",{class:T("index")},[this.slots("index",{index:this.active})||this.active+1+" / "+this.images.length])},genCover:function(){var t=this.$createElement,i=this.slots("cover");if(i)return t("div",{class:T("cover")},[i])},genImages:function(){var t=this,i=this.$createElement;return i(R,{ref:"swipe",attrs:{lazyRender:!0,loop:this.loop,duration:this.swipeDuration,initialSwipe:this.startPosition,showIndicators:this.showIndicators,indicatorColor:"white"},class:T("swipe"),on:{change:this.setActive}},[this.images.map((function(e){return i(W,{attrs:{src:e,show:t.value,active:t.active,maxZoom:t.maxZoom,minZoom:t.minZoom,rootWidth:t.rootWidth,rootHeight:t.rootHeight},on:{scale:t.emitScale,close:t.emitClose}})}))])},genClose:function(){var t=this.$createElement;if(this.closeable)return t(v.Z,{attrs:{role:"button",name:this.closeIcon},class:T("close-icon",this.closeIconPosition),on:{click:this.emitClose}})},onClosed:function(){this.$emit("closed")},swipeTo:function(t,i){this.$refs.swipe&&this.$refs.swipe.swipeTo(t,i)}},render:function(){var t=arguments[0];return t("transition",{attrs:{name:this.transition},on:{afterLeave:this.onClosed}},[this.shouldRender?t("div",{directives:[{name:"show",value:this.value}],class:[T(),this.className]},[this.genClose(),this.genImages(),this.genIndex(),this.genCover()]):null])}}),j={loop:!0,value:!0,images:[],maxZoom:3,minZoom:1/3,onClose:null,onChange:null,className:"",showIndex:!0,closeable:!1,closeIcon:"clear",asyncClose:!1,transition:"van-fade",getContainer:"body",overlayStyle:null,startPosition:0,swipeDuration:300,showIndicators:!1,closeOnPopstate:!0,closeIconPosition:"top-right"},q=function(){O=new(x.ZP.extend(H))({el:document.createElement("div")}),document.body.appendChild(O.$el),O.$on("change",(function(t){O.onChange&&O.onChange(t)})),O.$on("scale",(function(t){O.onScale&&O.onScale(t)}))},V=function(t,i){if(void 0===i&&(i=0),!a.sk){O||q();var e=Array.isArray(t)?{images:t,startPosition:i}:t;return(0,n.Z)(O,j,e),O.$once("input",(function(t){O.value=t})),O.$once("closed",(function(){O.images=[]})),e.onClose&&(O.$off("close"),O.$once("close",e.onClose)),O}};V.Component=H,V.install=function(){x.ZP.use(H)};var _=V,G=(0,o.d)("uploader"),K=G[0],J=G[1],Q=K({inheritAttrs:!1,mixins:[f],model:{prop:"fileList"},props:{disabled:Boolean,readonly:Boolean,lazyLoad:Boolean,uploadText:String,afterRead:Function,beforeRead:Function,beforeDelete:Function,previewSize:[Number,String],previewOptions:Object,name:{type:[Number,String],default:""},accept:{type:String,default:"image/*"},fileList:{type:Array,default:function(){return[]}},maxSize:{type:[Number,String,Function],default:Number.MAX_VALUE},maxCount:{type:[Number,String],default:Number.MAX_VALUE},deletable:{type:Boolean,default:!0},showUpload:{type:Boolean,default:!0},previewImage:{type:Boolean,default:!0},previewFullImage:{type:Boolean,default:!0},imageFit:{type:String,default:"cover"},resultType:{type:String,default:"dataUrl"},uploadIcon:{type:String,default:"photograph"}},computed:{previewSizeWithUnit:function(){return(0,s.N)(this.previewSize)},value:function(){return this.fileList}},created:function(){this.urls=[]},beforeDestroy:function(){this.urls.forEach((function(t){return URL.revokeObjectURL(t)}))},methods:{getDetail:function(t){return void 0===t&&(t=this.fileList.length),{name:this.name,index:t}},onChange:function(t){var i=this,e=t.target.files;if(!this.disabled&&e.length){if(e=1===e.length?e[0]:[].slice.call(e),this.beforeRead){var n=this.beforeRead(e,this.getDetail());if(!n)return void this.resetInput();if((0,a.tI)(n))return void n.then((function(t){t?i.readFile(t):i.readFile(e)})).catch(this.resetInput)}this.readFile(e)}},readFile:function(t){var i=this,e=l(t,this.maxSize);if(Array.isArray(t)){var n=this.maxCount-this.fileList.length;t.length>n&&(t=t.slice(0,n)),Promise.all(t.map((function(t){return h(t,i.resultType)}))).then((function(n){var o=t.map((function(t,i){var e={file:t,status:"",message:""};return n[i]&&(e.content=n[i]),e}));i.onAfterRead(o,e)}))}else h(t,this.resultType).then((function(n){var o={file:t,status:"",message:""};n&&(o.content=n),i.onAfterRead(o,e)}))},onAfterRead:function(t,i){var e=this;this.resetInput();var n=t;if(i){var o=t;Array.isArray(t)?(o=[],n=[],t.forEach((function(t){t.file&&(l(t.file,e.maxSize)?o.push(t):n.push(t))}))):n=null,this.$emit("oversize",o,this.getDetail())}var s=Array.isArray(n)?Boolean(n.length):Boolean(n);s&&(this.$emit("input",[].concat(this.fileList,r(n))),this.afterRead&&this.afterRead(n,this.getDetail()))},onDelete:function(t,i){var e,n=this,o=null!=(e=t.beforeDelete)?e:this.beforeDelete;if(o){var s=o(t,this.getDetail(i));if(!s)return;if((0,a.tI)(s))return void s.then((function(){n.deleteFile(t,i)})).catch(a.ZT)}this.deleteFile(t,i)},deleteFile:function(t,i){var e=this.fileList.slice(0);e.splice(i,1),this.$emit("input",e),this.$emit("delete",t,this.getDetail(i))},resetInput:function(){this.$refs.input&&(this.$refs.input.value="")},onClickUpload:function(t){this.$emit("click-upload",t)},onPreviewImage:function(t){var i=this;if(this.previewFullImage){var e=this.fileList.filter((function(t){return d(t)})),o=e.map((function(t){return t.file&&!t.url&&"failed"!==t.status&&(t.url=URL.createObjectURL(t.file),i.urls.push(t.url)),t.url}));this.imagePreview=_((0,n.Z)({images:o,startPosition:e.indexOf(t),onClose:function(){i.$emit("close-preview")}},this.previewOptions))}},closeImagePreview:function(){this.imagePreview&&this.imagePreview.close()},chooseFile:function(){this.disabled||this.$refs.input&&this.$refs.input.click()},genPreviewMask:function(t){var i=this.$createElement,e=t.status,n=t.message;if("uploading"===e||"failed"===e){var o="failed"===e?i(v.Z,{attrs:{name:"close"},class:J("mask-icon")}):i(b.Z,{class:J("loading")}),s=(0,a.Xq)(n)&&""!==n;return i("div",{class:J("mask")},[o,s&&i("div",{class:J("mask-message")},[n])])}},genPreviewItem:function(t,i){var e,o,s,a=this,r=this.$createElement,h=null!=(e=t.deletable)?e:this.deletable,l="uploading"!==t.status&&h,c=l&&r("div",{class:J("preview-delete"),on:{click:function(e){e.stopPropagation(),a.onDelete(t,i)}}},[r(v.Z,{attrs:{name:"cross"},class:J("preview-delete-icon")})]),u=this.slots("preview-cover",(0,n.Z)({index:i},t)),f=u&&r("div",{class:J("preview-cover")},[u]),m=null!=(o=t.previewSize)?o:this.previewSize,g=null!=(s=t.imageFit)?s:this.imageFit,p=d(t)?r(S,{attrs:{fit:g,src:t.content||t.url,width:m,height:m,lazyLoad:this.lazyLoad},class:J("preview-image"),on:{click:function(){a.onPreviewImage(t)}}},[f]):r("div",{class:J("file"),style:{width:this.previewSizeWithUnit,height:this.previewSizeWithUnit}},[r(v.Z,{class:J("file-icon"),attrs:{name:"description"}}),r("div",{class:[J("file-name"),"van-ellipsis"]},[t.file?t.file.name:t.url]),f]);return r("div",{class:J("preview"),on:{click:function(){a.$emit("click-preview",t,a.getDetail(i))}}},[p,this.genPreviewMask(t),c])},genPreviewList:function(){if(this.previewImage)return this.fileList.map(this.genPreviewItem)},genUpload:function(){var t=this.$createElement;if(!(this.fileList.length>=this.maxCount)&&this.showUpload){var i,e=this.slots(),o=this.readonly?null:t("input",{attrs:(0,n.Z)({},this.$attrs,{type:"file",accept:this.accept,disabled:this.disabled}),ref:"input",class:J("input"),on:{change:this.onChange}});if(e)return t("div",{class:J("input-wrapper"),key:"input-wrapper",on:{click:this.onClickUpload}},[e,o]);if(this.previewSize){var s=this.previewSizeWithUnit;i={width:s,height:s}}return t("div",{class:J("upload",{readonly:this.readonly}),style:i,on:{click:this.onClickUpload}},[t(v.Z,{attrs:{name:this.uploadIcon},class:J("upload-icon")}),this.uploadText&&t("span",{class:J("upload-text")},[this.uploadText]),o])}}},render:function(){var t=arguments[0];return t("div",{class:J()},[t("div",{class:J("wrapper",{disabled:this.disabled})},[this.genPreviewList(),this.genUpload()])])}})},8:function(t,i,e){e(1958),e(6196),e(3332),e(6742),e(2666),e(2939)},4535:function(t,i,e){function n(t,i,e){return Math.min(Math.max(t,i),e)}function o(t,i,e){var n=t.indexOf(i),o="";return-1===n?t:"-"===i&&0!==n?t.slice(0,n):("."===i&&t.match(/^(\.|-\.)/)&&(o=n?"-0":"0"),o+t.slice(0,n+1)+t.slice(n).replace(e,""))}function s(t,i,e){void 0===i&&(i=!0),void 0===e&&(e=!0),t=i?o(t,".",/\./g):t.split(".")[0],t=e?o(t,"-",/-/g):t.replace(/-/,"");var n=i?/[^-0-9.]/g:/[^-0-9]/g;return t.replace(n,"")}e.d(i,{uf:function(){return s},w6:function(){return n}})},691:function(t,i,e){e.d(i,{x0:function(){return n}});e(3408),e(4590);let n=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce(((t,i)=>(i&=63,t+=i<36?i.toString(36):i<62?(i-26).toString(36).toUpperCase():i>62?"-":"_",t)),"")}}]);
//# sourceMappingURL=782.59fd9e3e.js.map
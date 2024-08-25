"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8850,7530],{34291:function(t,e,n){n.d(e,{$:function(){return appendOwnerState}});var o=n(187),i=n(38646);function appendOwnerState(t,e,n){return void 0===t||(0,i.X)(t)?e:(0,o.Z)({},e,{ownerState:(0,o.Z)({},e.ownerState,n)})}},68225:function(t,e,n){n.d(e,{_:function(){return extractEventHandlers}});function extractEventHandlers(t,e=[]){if(void 0===t)return{};let n={};return Object.keys(t).filter(n=>n.match(/^on[A-Z]/)&&"function"==typeof t[n]&&!e.includes(n)).forEach(e=>{n[e]=t[e]}),n}},38646:function(t,e,n){n.d(e,{X:function(){return isHostComponent}});function isHostComponent(t){return"string"==typeof t}},18534:function(t,e,n){n.d(e,{L:function(){return mergeSlotProps}});var o=n(187),i=n(53048),r=n(68225);function omitEventHandlers(t){if(void 0===t)return{};let e={};return Object.keys(t).filter(e=>!(e.match(/^on[A-Z]/)&&"function"==typeof t[e])).forEach(n=>{e[n]=t[n]}),e}function mergeSlotProps(t){let{getSlotProps:e,additionalProps:n,externalSlotProps:s,externalForwardedProps:l,className:a}=t;if(!e){let t=(0,i.default)(null==n?void 0:n.className,a,null==l?void 0:l.className,null==s?void 0:s.className),e=(0,o.Z)({},null==n?void 0:n.style,null==l?void 0:l.style,null==s?void 0:s.style),r=(0,o.Z)({},n,l,s);return t.length>0&&(r.className=t),Object.keys(e).length>0&&(r.style=e),{props:r,internalRef:void 0}}let u=(0,r._)((0,o.Z)({},l,s)),c=omitEventHandlers(s),d=omitEventHandlers(l),f=e(u),v=(0,i.default)(null==f?void 0:f.className,null==n?void 0:n.className,a,null==l?void 0:l.className,null==s?void 0:s.className),m=(0,o.Z)({},null==f?void 0:f.style,null==n?void 0:n.style,null==l?void 0:l.style,null==s?void 0:s.style),p=(0,o.Z)({},f,n,d,c);return v.length>0&&(p.className=v),Object.keys(m).length>0&&(p.style=m),{props:p,internalRef:f.ref}}},38584:function(t,e,n){n.d(e,{x:function(){return resolveComponentProps}});function resolveComponentProps(t,e,n){return"function"==typeof t?t(e,n):t}},77539:function(t,e,n){n.d(e,{y:function(){return useSlotProps}});var o=n(187),i=n(94458),r=n(69974),s=n(34291),l=n(18534),a=n(38584);let u=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function useSlotProps(t){var e;let{elementType:n,externalSlotProps:c,ownerState:d,skipResolvingSlotProps:f=!1}=t,v=(0,i.Z)(t,u),m=f?{}:(0,a.x)(c,d),{props:p,internalRef:y}=(0,l.L)((0,o.Z)({},v,{externalSlotProps:m})),Z=(0,r.Z)(y,null==m?void 0:m.ref,null==(e=t.additionalProps)?void 0:e.ref),g=(0,s.$)(n,(0,o.Z)({},p,{ref:Z}),d);return g}},30945:function(t,e,n){n.d(e,{f:function(){return getListItemIconUtilityClass}});var o=n(62234),i=n(48809);function getListItemIconUtilityClass(t){return(0,i.ZP)("MuiListItemIcon",t)}let r=(0,o.Z)("MuiListItemIcon",["root","alignItemsFlexStart"]);e.Z=r},35560:function(t,e,n){n.d(e,{L:function(){return getListItemTextUtilityClass}});var o=n(62234),i=n(48809);function getListItemTextUtilityClass(t){return(0,i.ZP)("MuiListItemText",t)}let r=(0,o.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]);e.Z=r},6868:function(t,e,n){n.r(e),n.d(e,{actions:function(){return d},default:function(){return CoreDemo},scale:function(){return u},scaleWidth:function(){return a},startLeft:function(){return c}});var o=n(53710),i=n(92379),r=n(29901),s=n(61888),l=n(651),a=160,u=2,c=20,d=[{name:"write stuff",start:9.5,end:16,effectId:"animation",data:{src:"/static/timeline/docs/overview/lottie1.json"}},{name:"doing things",start:5,end:9.5,effectId:"animation",data:{src:"/static/timeline/docs/overview/lottie2.json"}},{name:"stolen cow",start:0,end:5,effectId:"animation",data:{src:"/static/timeline/docs/overview/lottie3.json"}},{name:"music",start:0,end:20,effectId:"audio",data:{src:"/static/timeline/docs/overview/bg.mp3"}},{name:"video",start:0,end:10,effectId:"video",data:{src:"/static/video-editor/stock-loop.mp4"}}],f=(0,s.cloneDeep)(d);function CoreDemo(){var t=i.useState(f),e=(0,o.Z)(t,2),n=e[0];return e[1],(0,l.jsx)(r.M,{id:"video-editor-test",sx:{borderRadius:"12px 12px 0 0"},actionData:n})}},64533:function(t,e,n){n.d(e,{Z:function(){return _createClass}});var o=n(80181);function _defineProperties(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(0,o.Z)(i.key),i)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}}}]);
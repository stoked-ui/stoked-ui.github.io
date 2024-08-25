"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9738],{63812:function(e,t,l){l.d(t,{Z:function(){return r}});var n=l(92379);let r=n.createContext(null)},25399:function(e,t,l){l.d(t,{F:function(){return n}});let n={blur:"list:blur",focus:"list:focus",itemClick:"list:itemClick",itemHover:"list:itemHover",itemsChange:"list:itemsChange",keyDown:"list:keyDown",resetHighlight:"list:resetHighlight",highlightLast:"list:highlightLast",textNavigation:"list:textNavigation",clearSelection:"list:clearSelection"}},74338:function(e,t,l){l.d(t,{Ce:function(){return handleItemSelection},R$:function(){return listReducer},Rl:function(){return moveHighlight}});var n=l(187),r=l(25399);function moveHighlight(e,t,l){var n;let r,i;let{items:u,isItemDisabled:a,disableListWrap:h,disabledItemsFocusable:s,itemComparer:o,focusManagement:c}=l,g=u.length-1,d=null==e?-1:u.findIndex(t=>o(t,e)),f=!h;switch(t){case"reset":if(-1==("DOM"===c?0:-1))return null;r=0,i="next",f=!1;break;case"start":r=0,i="next",f=!1;break;case"end":r=g,i="previous",f=!1;break;default:{let e=d+t;e<0?!f&&-1!==d||Math.abs(t)>1?(r=0,i="next"):(r=g,i="previous"):e>g?!f||Math.abs(t)>1?(r=g,i="previous"):(r=0,i="next"):(r=e,i=t>=0?"next":"previous")}}let v=function(e,t,l,n,r,i){if(0===l.length||!n&&l.every((e,t)=>r(e,t)))return -1;let u=e;for(;;){if(!i&&"next"===t&&u===l.length||!i&&"previous"===t&&-1===u)return -1;let e=!n&&r(l[u],u);if(!e)return u;u+="next"===t?1:-1,i&&(u=(u+l.length)%l.length)}}(r,i,u,s,a,f);return -1!==v||null===e||a(e,d)?null!=(n=u[v])?n:null:e}function handleItemSelection(e,t,l){let{itemComparer:r,isItemDisabled:i,selectionMode:u,items:a}=l,{selectedValues:h}=t,s=a.findIndex(t=>r(e,t));if(i(e,s))return t;let o="none"===u?[]:"single"===u?r(h[0],e)?h:[e]:h.some(t=>r(t,e))?h.filter(t=>!r(t,e)):[...h,e];return(0,n.Z)({},t,{selectedValues:o,highlightedValue:e})}function listReducer(e,t){let{type:l,context:i}=t;switch(l){case r.F.keyDown:return function(e,t,l){let r=t.highlightedValue,{orientation:i,pageSize:u}=l;switch(e){case"Home":return(0,n.Z)({},t,{highlightedValue:moveHighlight(r,"start",l)});case"End":return(0,n.Z)({},t,{highlightedValue:moveHighlight(r,"end",l)});case"PageUp":return(0,n.Z)({},t,{highlightedValue:moveHighlight(r,-u,l)});case"PageDown":return(0,n.Z)({},t,{highlightedValue:moveHighlight(r,u,l)});case"ArrowUp":if("vertical"!==i)break;return(0,n.Z)({},t,{highlightedValue:moveHighlight(r,-1,l)});case"ArrowDown":if("vertical"!==i)break;return(0,n.Z)({},t,{highlightedValue:moveHighlight(r,1,l)});case"ArrowLeft":if("vertical"===i)break;return(0,n.Z)({},t,{highlightedValue:moveHighlight(r,"horizontal-ltr"===i?-1:1,l)});case"ArrowRight":if("vertical"===i)break;return(0,n.Z)({},t,{highlightedValue:moveHighlight(r,"horizontal-ltr"===i?1:-1,l)});case"Enter":case" ":if(null===t.highlightedValue)break;return handleItemSelection(t.highlightedValue,t,l)}return t}(t.key,e,i);case r.F.itemClick:return handleItemSelection(t.item,e,i);case r.F.blur:return"DOM"===i.focusManagement?e:(0,n.Z)({},e,{highlightedValue:null});case r.F.textNavigation:return function(e,t,l){let{items:r,isItemDisabled:i,disabledItemsFocusable:u,getItemAsString:a}=l,h=t.length>1,s=h?e.highlightedValue:moveHighlight(e.highlightedValue,1,l);for(let o=0;o<r.length&&s&&(h||e.highlightedValue!==s);o+=1){if(function(e,t,l){var n;let r=null==(n=l(e))?void 0:n.trim().toLowerCase();return!!r&&0!==r.length&&0===r.indexOf(t)}(s,t,a)&&(!i(s,r.indexOf(s))||u))return(0,n.Z)({},e,{highlightedValue:s});s=moveHighlight(s,1,l)}return e}(e,t.searchString,i);case r.F.itemsChange:return function(e,t,l,r){var i,u;let{itemComparer:a,focusManagement:h}=r,s=null;null!=l.highlightedValue?s=null!=(u=e.find(e=>a(e,l.highlightedValue)))?u:null:"DOM"===h&&0===t.length&&(s=moveHighlight(null,"reset",r));let o=null!=(i=l.selectedValues)?i:[],c=o.filter(t=>e.some(e=>a(e,t)));return(0,n.Z)({},l,{highlightedValue:s,selectedValues:c})}(t.items,t.previousItems,e,i);case r.F.resetHighlight:return(0,n.Z)({},e,{highlightedValue:moveHighlight(null,"reset",i)});case r.F.highlightLast:return(0,n.Z)({},e,{highlightedValue:moveHighlight(null,"end",i)});case r.F.clearSelection:return(0,n.Z)({},e,{selectedValues:[],highlightedValue:moveHighlight(null,"reset",i)});default:return e}}},10539:function(e,t,l){l.d(t,{s:function(){return useList}});var n=l(187),r=l(92379),i=l(69974),u=l(25399),a=l(74338),h=l(42912),s=l(8005),o=l(68225);let c={},NOOP=()=>{},defaultItemComparer=(e,t)=>e===t,defaultIsItemDisabled=()=>!1,defaultItemStringifier=e=>"string"==typeof e?e:String(e),defaultGetInitialState=()=>({highlightedValue:null,selectedValues:[]});function useList(e){let{controlledProps:t=c,disabledItemsFocusable:l=!1,disableListWrap:g=!1,focusManagement:d="activeDescendant",getInitialState:f=defaultGetInitialState,getItemDomElement:v,getItemId:m,isItemDisabled:k=defaultIsItemDisabled,rootRef:C,onStateChange:b=NOOP,items:H,itemComparer:V=defaultItemComparer,getItemAsString:p=defaultItemStringifier,onChange:w,onHighlightChange:y,onItemsChange:S,orientation:D="vertical",pageSize:Z=5,reducerActionContext:O=c,selectionMode:x="single",stateReducer:I,componentName:R="useList"}=e,E=r.useRef(null),F=(0,i.Z)(C,E),P=r.useCallback((e,t,l)=>{if(null==y||y(e,t,l),"DOM"===d&&null!=t&&(l===u.F.itemClick||l===u.F.keyDown||l===u.F.textNavigation)){var n;null==v||null==(n=v(t))||n.focus()}},[v,y,d]),M=r.useMemo(()=>({highlightedValue:V,selectedValues:(e,t)=>(0,s.H)(e,t,V)}),[V]),L=r.useCallback((e,t,l,n,r)=>{switch(null==b||b(e,t,l,n,r),t){case"highlightedValue":P(e,l,n);break;case"selectedValues":null==w||w(e,l,n)}},[P,w,b]),N=r.useMemo(()=>({disabledItemsFocusable:l,disableListWrap:g,focusManagement:d,isItemDisabled:k,itemComparer:V,items:H,getItemAsString:p,onHighlightChange:P,orientation:D,pageSize:Z,selectionMode:x,stateComparers:M}),[l,g,d,k,V,H,p,P,D,Z,x,M]),A=f(),_=null!=I?I:a.R$,T=r.useMemo(()=>(0,n.Z)({},O,N),[O,N]),[q,B]=(0,h.r)({reducer:_,actionContext:T,initialState:A,controlledProps:t,stateComparers:M,onStateChange:L,componentName:R}),{highlightedValue:K,selectedValues:U}=q,j=function(e){let t=r.useRef({searchString:"",lastTime:null});return r.useCallback(l=>{if(1===l.key.length&&" "!==l.key){let n=t.current,r=l.key.toLowerCase(),i=performance.now();n.searchString.length>0&&n.lastTime&&i-n.lastTime>500?n.searchString=r:(1!==n.searchString.length||r!==n.searchString)&&(n.searchString+=r),n.lastTime=i,e(n.searchString,l)}},[e])}((e,t)=>B({type:u.F.textNavigation,event:t,searchString:e})),z=r.useRef([]);r.useEffect(()=>{(0,s.H)(z.current,H,V)||(B({type:u.F.itemsChange,event:null,items:H,previousItems:z.current}),z.current=H,null==S||S(H))},[H,V,B,S]);let createHandleKeyDown=e=>t=>{var l;if(null==(l=e.onKeyDown)||l.call(e,t),t.defaultMuiPrevented)return;let n=["Home","End","PageUp","PageDown"];"vertical"===D?n.push("ArrowUp","ArrowDown"):n.push("ArrowLeft","ArrowRight"),"activeDescendant"===d&&n.push(" ","Enter"),n.includes(t.key)&&t.preventDefault(),B({type:u.F.keyDown,key:t.key,event:t}),j(t)},createHandleBlur=e=>t=>{var l,n;null==(l=e.onBlur)||l.call(e,t),t.defaultMuiPrevented||null!=(n=E.current)&&n.contains(t.relatedTarget)||B({type:u.F.blur,event:t})},G=r.useCallback(e=>{let t=(null!=U?U:[]).some(t=>null!=t&&V(e,t)),l=null!=K&&V(e,K),n="DOM"===d;return{focusable:n,highlighted:l,selected:t}},[V,U,K,d]),$=r.useMemo(()=>({dispatch:B,getItemState:G}),[B,G]);return r.useDebugValue({state:q}),{contextValue:$,dispatch:B,getRootProps:(e={})=>{let t=(0,o._)(e);return(0,n.Z)({},e,{"aria-activedescendant":"activeDescendant"===d&&null!=K?m(K):void 0,tabIndex:"DOM"===d?-1:0,ref:F},t,{onBlur:createHandleBlur(t),onKeyDown:createHandleKeyDown(t)})},rootRef:F,state:q}}},28679:function(e,t,l){l.d(t,{J:function(){return useListItem}});var n=l(187),r=l(92379),i=l(68225),u=l(25399),a=l(63812);function useListItem(e){let t;let{handlePointerOverEvents:l=!1,item:h}=e,s=r.useContext(a.Z);if(!s)throw Error("useListItem must be used within a ListProvider");let{dispatch:o,getItemState:c}=s,{highlighted:g,selected:d,focusable:f}=c(h),v=r.useCallback(e=>t=>{var l;null==(l=e.onClick)||l.call(e,t),t.defaultPrevented||o({type:u.F.itemClick,item:h,event:t})},[o,h]),m=r.useCallback(e=>t=>{var l;null==(l=e.onMouseOver)||l.call(e,t),t.defaultPrevented||o({type:u.F.itemHover,item:h,event:t})},[o,h]);return f&&(t=g?0:-1),{getRootProps:(e={})=>{let r=(0,i._)(e);return(0,n.Z)({},e,{onClick:v(r),onPointerOver:l?m(r):void 0,tabIndex:t})},highlighted:g,selected:d}}},8005:function(e,t,l){l.d(t,{H:function(){return areArraysEqual}});function areArraysEqual(e,t,l=(e,t)=>e===t){return e.length===t.length&&e.every((e,n)=>l(e,t[n]))}},68225:function(e,t,l){l.d(t,{_:function(){return extractEventHandlers}});function extractEventHandlers(e,t=[]){if(void 0===e)return{};let l={};return Object.keys(e).filter(l=>l.match(/^on[A-Z]/)&&"function"==typeof e[l]&&!t.includes(l)).forEach(t=>{l[t]=e[t]}),l}},42912:function(e,t,l){l.d(t,{r:function(){return useControllableReducer}});var n=l(187),r=l(92379);function areEqual(e,t){return e===t}let i={},NOOP=()=>{};function getControlledState(e,t){let l=(0,n.Z)({},e);return Object.keys(t).forEach(e=>{void 0!==t[e]&&(l[e]=t[e])}),l}function useControllableReducer(e){let t=r.useRef(null),{reducer:l,initialState:u,controlledProps:a=i,stateComparers:h=i,onStateChange:s=NOOP,actionContext:o,componentName:c=""}=e;r.useRef(a);let g=r.useCallback((e,n)=>{t.current=n;let r=getControlledState(e,a),i=l(r,n);return i},[a,l]),[d,f]=r.useReducer(g,u),v=r.useCallback(e=>{f((0,n.Z)({},e,{context:o}))},[o]);return!function(e){let{nextState:t,initialState:l,stateComparers:n,onStateChange:i,controlledProps:u,lastActionRef:a}=e,h=r.useRef(l);r.useEffect(()=>{if(null===a.current)return;let e=getControlledState(h.current,u);Object.keys(t).forEach(l=>{var r,u,h;let s=null!=(r=n[l])?r:areEqual,o=t[l],c=e[l];(null!=c||null==o)&&(null==c||null!=o)&&(null==c||null==o||s(o,c))||null==i||i(null!=(u=a.current.event)?u:null,l,o,null!=(h=a.current.type)?h:"",t)}),h.current=t,a.current=null},[h,t,a,i,n,u])}({nextState:d,initialState:u,stateComparers:null!=h?h:i,onStateChange:null!=s?s:NOOP,controlledProps:a,lastActionRef:t}),[getControlledState(d,a),v]}}}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4674],{34035:function(e,t,n){"use strict";function triggerPostMoveFlash(e){e.animate([{backgroundColor:"var(--ds-background-selected, #E9F2FF)"},{}],{duration:700,easing:"cubic-bezier(0.25, 0.1, 0.25, 1.0)",iterations:1})}n.d(t,{D:function(){return triggerPostMoveFlash}})},31600:function(e,t,n){"use strict";n.d(t,{E:function(){return extractInstruction},n:function(){return attachInstruction}});var r,o=n(82936),a=n(81653),i=["block"];function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){(0,o.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var u=Symbol("tree-item-instruction");function standardHitbox(e){var t=e.client,n=e.borderBox,r=n.height/4;return t.y<=n.top+r?"reorder-above":t.y>=n.bottom-r?"reorder-below":"make-child"}var c=(r=null,function(e){return r&&function areInstructionsEqual(e,t){var n,r;return e.type===t.type&&("instruction-blocked"===e.type&&"instruction-blocked"===t.type?areInstructionsEqual(e.desired,t.desired):(n=Object.keys(e).sort(),r=Object.keys(t).sort(),n.length===r.length&&n.every(function(n){return e[n]===t[n]})))}(r,e)?r:(r=e,e)});function attachInstruction(e,t){var n,r,l,s=t.block,f=c((r=(n={desired:function(e){var t=e.element,n=e.input,r=e.currentLevel,o=e.indentPerLevel,a=e.mode,i={x:n.clientX,y:n.clientY},u=t.getBoundingClientRect();if("standard"===a)return{type:standardHitbox({borderBox:u,client:i}),indentPerLevel:o,currentLevel:r};var c={x:(u.right+u.left)/2,y:(u.bottom+u.top)/2};if("expanded"===a){var l=standardHitbox({borderBox:u,client:i});return{type:"reorder-above"===l?l:"make-child",indentPerLevel:o,currentLevel:r}}return i.x<u.left+o*r?i.y<c.y?{type:"reorder-above",indentPerLevel:o,currentLevel:r}:{type:"reparent",desiredLevel:Math.max(Math.floor((i.x-u.left)/o),0),indentPerLevel:o,currentLevel:r}:{type:standardHitbox({borderBox:u,client:i}),indentPerLevel:o,currentLevel:r}}((0,a.Z)(t,i)),block:s}).desired,null!=(l=n.block)&&l.includes(r.type)&&"instruction-blocked"!==r.type?{type:"instruction-blocked",desired:r}:r));return _objectSpread(_objectSpread({},e),{},(0,o.Z)({},u,f))}function extractInstruction(e){var t;return null!==(t=e[u])&&void 0!==t?t:null}},96604:function(e,t,n){"use strict";n.d(t,{f:function(){return DropIndicator}});var r=n(81430),o={thickness:2,backgroundColor:"var(--ds-border-selected, #0C66E4)"},a=(0,r.iv)({"--terminal-size":"8px",position:"absolute",top:0,right:0,left:"var(--horizontal-indent)",bottom:0,pointerEvents:"none","::before":{display:"block",content:'""',position:"absolute",zIndex:2,boxSizing:"border-box",width:"var(--terminal-size)",height:"var(--terminal-size)",left:0,background:"transparent",borderColor:"var(--indicator-color)",borderWidth:o.thickness,borderRadius:"50%",borderStyle:"solid"},"::after":{display:"block",content:'""',position:"absolute",zIndex:1,background:"var(--indicator-color)",left:"calc(var(--terminal-size) / 2)",height:o.thickness,right:0}}),i=(0,r.iv)({"::before":{top:0,transform:"translate(calc(-0.5 * var(--terminal-size)), calc(-0.5 * var(--terminal-size)))"},"::after":{top:"".concat(-.5*o.thickness,"px")}}),u=(0,r.iv)({"::before":{bottom:0,transform:"translate(calc(-0.5 * var(--terminal-size)), calc(0.5 * var(--terminal-size)))"},"::after":{bottom:"".concat(-.5*o.thickness,"px")}}),c=(0,r.iv)({position:"absolute",top:0,right:0,left:"var(--horizontal-indent)",bottom:0,pointerEvents:"none",border:"".concat(o.thickness,"px solid var(--indicator-color)"),borderRadius:"3px"});function getElement(e){var t=e.instruction,n=e.isBlocked,l={"--horizontal-indent":"".concat(t.currentLevel*t.indentPerLevel,"px"),"--indicator-color":n?"var(--ds-border-warning, #E56910)":o.backgroundColor};return"reorder-above"===t.type?(0,r.tZ)("div",{css:[a,i],style:l}):"reorder-below"===t.type?(0,r.tZ)("div",{css:[a,u],style:l}):"make-child"===t.type?(0,r.tZ)("div",{css:[c],style:l}):"reparent"===t.type?(l["--horizontal-indent"]="".concat(t.desiredLevel*t.indentPerLevel,"px"),(0,r.tZ)("div",{css:[a,u],style:l})):null}function DropIndicator(e){var t=e.instruction;return"instruction-blocked"===t.type?getElement({instruction:t.desired,isBlocked:!0}):getElement({instruction:t,isBlocked:!1})}},5763:function(e,t,n){"use strict";n.d(t,{B:function(){return r}});var r="application/vnd.pdnd"},57906:function(e,t,n){"use strict";n.d(t,{En:function(){return draggable},wO:function(){return w},sd:function(){return O}});var r,o=n(11537),a=n(44101),i=n(67558),u=n(82936),c=n(66344),l=n(89749);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){(0,u.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function getHoneyPotRectFor(e){var t,n,r,o,a={x:Math.min((o={x:Math.max((r={x:(n={x:Math.floor((t=e.client).x),y:Math.floor(t.y)}).x-1,y:n.y-1}).x,0),y:Math.max(r.y,0)}).x,window.innerWidth-2),y:Math.min(o.y,window.innerHeight-2)};return DOMRect.fromRect({x:a.x,y:a.y,width:2,height:2})}function getRectStyles(e){var t=e.clientRect;return{left:"".concat(t.left,"px"),top:"".concat(t.top,"px"),width:"".concat(t.width,"px"),height:"".concat(t.height,"px")}}var s=n(60392),f=n(66320),d=n(7028),p=n(86173),v=n(35006),y=n(15049),g=n(5763),m=new WeakMap,b=(r=null,{bindEvents:function(){return r=null,(0,a.ak)(window,{type:"pointermove",listener:function(e){r={x:e.clientX,y:e.clientY}},options:{capture:!0}})},getOnPostDispatch:function(){var e=null;return function(t){var n=t.eventName,o=t.payload;if("onDragStart"===n){var i,u,s,f,d=o.location.initial.input,p=null!==(f=r)&&void 0!==f?f:{x:d.clientX,y:d.clientY};(i=document.createElement("div")).setAttribute(l.u,"true"),u=getHoneyPotRectFor({client:p}),Object.assign(i.style,_objectSpread(_objectSpread({backgroundColor:"transparent",position:"fixed",padding:0,margin:0,boxSizing:"border-box"},getRectStyles({clientRect:u})),{},{pointerEvents:"auto",zIndex:c.Y})),document.body.appendChild(i),s=(0,a.ak)(window,{type:"pointermove",listener:function(e){u=getHoneyPotRectFor({client:{x:e.clientX,y:e.clientY}}),Object.assign(i.style,getRectStyles({clientRect:u}))},options:{capture:!0}}),e=function(e){var t,n,r,o=e.current;if(s(),n=(t={client:o,clientRect:u}).client,r=t.clientRect,n.x>=r.x&&n.x<=r.x+r.width&&n.y>=r.y&&n.y<=r.y+r.height){i.remove();return}function cleanup(){c(),i.remove()}var c=(0,a.Ev)(window,[{type:"pointerdown",listener:cleanup},{type:"pointermove",listener:cleanup},{type:"focusin",listener:cleanup},{type:"focusout",listener:cleanup},{type:"dragstart",listener:cleanup},{type:"dragenter",listener:cleanup},{type:"dragover",listener:cleanup}],{capture:!0})}}if("onDrop"===n){var v,y=o.location.current.input;null===(v=e)||void 0===v||v({current:{x:y.clientX,y:y.clientY}}),e=null,r=null}}}}),h=(0,s.i)({typeKey:"element",defaultDropEffect:"move",mount:function(e){return(0,f.$)(b.bindEvents(),(0,a.ak)(document,{type:"dragstart",listener:function(t){if(e.canStart(t)&&!t.defaultPrevented&&t.dataTransfer){var n,r,a,u,c,l,s=t.target;if(!(s instanceof HTMLElement))return null;var f=m.get(s);if(!f)return null;var d=(0,v.N)(t),b={element:f.element,dragHandle:null!==(n=f.dragHandle)&&void 0!==n?n:null,input:d};if(f.canDrag&&!f.canDrag(b))return t.preventDefault(),null;if(f.dragHandle){var h=(0,i.Z)({x:d.clientX,y:d.clientY});if(!f.dragHandle.contains(h))return t.preventDefault(),null}var w=null!==(r=null===(a=f.getInitialDataForExternal)||void 0===a?void 0:a.call(f,b))&&void 0!==r?r:null;if(w)for(var O=0,E=Object.entries(w);O<E.length;O++){var D=(0,o.Z)(E[O],2),S=D[0],T=D[1];t.dataTransfer.setData(S,null!=T?T:"")}var x=t.dataTransfer.types;!(0,p.D)()||x.includes(y.t)||x.includes("text/uri-list")||t.dataTransfer.setData(y.t,p.F),t.dataTransfer.setData(g.B,"");var j={element:f.element,dragHandle:null!==(u=f.dragHandle)&&void 0!==u?u:null,data:null!==(c=null===(l=f.getInitialData)||void 0===l?void 0:l.call(f,b))&&void 0!==c?c:{}};e.start({event:t,dragType:{type:"element",payload:j,startedFrom:"internal"}})}}}))},dispatchEventToSource:function(e){var t,n,r=e.eventName,o=e.payload;null===(t=m.get(o.source.element))||void 0===t||null===(n=t[r])||void 0===n||n.call(t,o)},onPostDispatch:b.getOnPostDispatch()}),w=h.dropTarget,O=h.monitor;function draggable(e){return(0,f.$)(h.registerUsage(),(m.set(e.element,e),function(){m.delete(e.element)}),(0,d.t)(e.element,{attribute:"draggable",value:"true"}))}},35076:function(e,t,n){"use strict";n.d(t,{$:function(){return r.$}});var r=n(66320)},60521:function(e,t,n){"use strict";n.d(t,{En:function(){return r.En},sd:function(){return r.sd},wO:function(){return r.wO}});var r=n(57906)},36693:function(e,t,n){"use strict";function pointerOutsideOfPreview(e){return function(t){return Object.assign(t.container.style,{borderLeft:"".concat(e.x," solid transparent"),borderTop:"".concat(e.y," solid transparent")}),{x:0,y:0}}}n.d(t,{s:function(){return pointerOutsideOfPreview}})},3578:function(e,t,n){"use strict";n.d(t,{L:function(){return setCustomNativeDragPreview}});var r=n(57906),o=n(57721),a=n(66344);function defaultOffset(){return{x:0,y:0}}function setCustomNativeDragPreview(e){var t=e.render,n=e.nativeSetDragImage,i=e.getOffset,u=void 0===i?defaultOffset:i,c=document.createElement("div");Object.assign(c.style,{position:"fixed",top:0,left:0,zIndex:a.Y,pointerEvents:"none"}),document.body.append(c);var l=t({container:c});function cleanup(){s(),null==l||l(),document.body.removeChild(c)}queueMicrotask(function(){var e=u({container:c});if((0,o.G)()){var t=c.getBoundingClientRect();if(0===t.width)return;c.style.left="-".concat(t.width-1e-4,"px")}null==n||n(c,e.x,e.y)});var s=(0,r.sd)({onDragStart:cleanup,onDrop:cleanup})}},31802:function(e,t,n){"use strict";n.d(t,{f:function(){return dropTargetForExternal},E:function(){return monitorForExternal}});var r=n(25452),o=n(44101),a=n(60392),i=n(86173),u=n(55150),c=n(57721),l=n(29462),s=n(15321),f=n(40171),d=n(15049),p=n(5763);function isAnAvailableType(e){var t=e.type,n=e.value;return t!==p.B&&(t!==d.t||n!==i.F)}var v=!1,y=(0,a.i)({typeKey:"external",defaultDropEffect:"copy",mount:function(e){return(0,o.ak)(window,{type:"dragenter",listener:function(t){if(!v&&t.dataTransfer&&e.canStart(t)&&(n=t.type,r=t.relatedTarget,"dragenter"===n&&((0,c.G)()?(0,l.p)({dragEnter:t}):null==r||((0,u.v)()?(0,s.i)(r):r instanceof HTMLIFrameElement)))){var n,r,o,a=Array.from((o=t.dataTransfer).types).filter(function(e){return isAnAvailableType({type:e,value:o.getData(e)})});if(a.length){var i={types:a,items:[],getStringData:function(){return null}};e.start({event:t,dragType:{type:"external",startedFrom:"external",payload:i,getDropPayload:function(e){if(!e.dataTransfer)return i;var t,n=Array.from((t=e.dataTransfer).items).filter(function(e){return"file"===e.kind||isAnAvailableType({type:e.type,value:t.getData(e.type)})}),r=e.dataTransfer.getData.bind(e.dataTransfer);return{types:a,items:n,getStringData:function(e){if(!a.includes(e))return null;var t=r(e);return isAnAvailableType({type:e,value:t})?t:null}}}}})}}}})}});function dropTargetForExternal(e){return y.dropTarget(e)}function monitorForExternal(e){return y.monitor(e)}!function(){if("undefined"!=typeof window){y.registerUsage();var e={type:"idle"},t=e;(0,o.ak)(window,{type:"dragstart",listener:function(){"idle"===t.type&&(v=!0,t={type:"dragging",cleanup:(0,o.Ev)(window,[{type:"dragend",listener:clear}].concat((0,r.Z)((0,f.q)({onDragEnd:clear}))),{capture:!0})})},options:{capture:!0}})}function clear(){"dragging"===t.type&&(v=!1,t.cleanup(),t=e)}}()},75047:function(e,t,n){"use strict";function containsFiles(e){return e.source.types.includes("Files")}n.d(t,{n:function(){return containsFiles}})},93042:function(e,t,n){"use strict";n.d(t,{y:function(){return u}});var r=n(25452),o=n(44101),a=n(40171);function acceptDrop(e){e.defaultPrevented||(e.dataTransfer&&(e.dataTransfer.dropEffect="move"),e.preventDefault())}var i=null;function cleanup(){var e;null===(e=i)||void 0===e||e(),i=null}var u={start:function(){cleanup(),i=(0,o.Ev)(window,[{type:"dragover",listener:acceptDrop},{type:"dragenter",listener:acceptDrop},{type:"drop",listener:function(e){e.preventDefault(),cleanup()}},{type:"dragend",listener:cleanup}].concat((0,r.Z)((0,a.q)({onDragEnd:cleanup}))),{capture:!1})},stop:function(){var e,t;(null===(e=window.event)||void 0===e?void 0:e.type)==="drop"&&(null===(t=window.event)||void 0===t||t.preventDefault()),cleanup()}}},67558:function(e,t,n){"use strict";n.d(t,{Z:function(){return getElementFromPointWithoutHoneypot}});var r=n(11537),o=n(21552);function getElementFromPointWithoutHoneypot(e){var t=document.elementsFromPoint(e.x,e.y),n=(0,r.Z)(t,2),a=n[0],i=n[1];return a?(0,o.o)(a)?null!=i?i:null:a:null}},89749:function(e,t,n){"use strict";n.d(t,{u:function(){return r}});var r="data-pdnd-honey-pot"},21552:function(e,t,n){"use strict";n.d(t,{o:function(){return isHoneyPotElement}});var r=n(89749);function isHoneyPotElement(e){return e instanceof Element&&e.hasAttribute(r.u)}},60392:function(e,t,n){"use strict";n.d(t,{i:function(){return makeAdapter}});var r,o,a,i,u,c=n(25452),l=n(44101),s=n(67558),f=n(21552),d=n(55150),p=n(57721),v=n(29462),y=n(15321),g=n(40171),m=n(35006),b=(r=function(e){return e()},o=[],a=null,(i=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];o=t,a||(a=requestAnimationFrame(function(){a=null,r.apply(void 0,o)}))}).cancel=function(){a&&(cancelAnimationFrame(a),a=null)},i),h=(u=null,{schedule:function(e){u={frameId:requestAnimationFrame(function(){u=null,e()}),fn:e}},flush:function(){u&&(cancelAnimationFrame(u.frameId),u.fn(),u=null)}}),w={isActive:!1};function canStart(){return!w.isActive}function setDropEffectOnEvent(e){var t,n=e.event,r=null===(t=e.current[0])||void 0===t?void 0:t.dropEffect;null!=r&&n.dataTransfer&&(n.dataTransfer.dropEffect=r)}var O={canStart:canStart,start:function(e){var t=e.event,n=e.dragType,r=e.getDropTargetsOver,o=e.dispatchEvent;if(canStart()){var a=function(e){var t=e.event,n=e.dragType,r=e.getDropTargetsOver,o=(0,m.N)(t);if("external"===n.startedFrom)return{input:o,dropTargets:[]};var a=r({input:o,source:n.payload,target:t.target,current:[]});return{input:o,dropTargets:a}}({event:t,dragType:n,getDropTargetsOver:r});w.isActive=!0;var i={current:a};setDropEffectOnEvent({event:t,current:a.dropTargets});var u=function(e){var t=e.source,n=e.initial,r=e.dispatchEvent,o={dropTargets:[]};function safeDispatch(e){r(e),o={dropTargets:e.payload.location.current.dropTargets}}return{start:function(e){var r=e.nativeSetDragImage,a={current:n,previous:o,initial:n};safeDispatch({eventName:"onGenerateDragPreview",payload:{source:t,location:a,nativeSetDragImage:r}}),h.schedule(function(){safeDispatch({eventName:"onDragStart",payload:{source:t,location:a}})})},dragUpdate:function(e){var r=e.current;h.flush(),b.cancel(),safeDispatch({eventName:"onDropTargetChange",payload:{source:t,location:{initial:n,previous:o,current:r}}})},drag:function(e){var r=e.current;b(function(){h.flush(),safeDispatch({eventName:"onDrag",payload:{source:t,location:{initial:n,previous:o,current:r}}})})},drop:function(e){var r=e.current,a=e.updatedSourcePayload;h.flush(),b.cancel(),safeDispatch({eventName:"onDrop",payload:{source:null!=a?a:t,location:{current:r,previous:o,initial:n}}})}}}({source:n.payload,dispatchEvent:o,initial:a}),O=(0,l.Ev)(window,[{type:"dragover",listener:function(e){onUpdateEvent(e),u.drag({current:i.current})}},{type:"dragenter",listener:onUpdateEvent},{type:"dragleave",listener:function(e){var t,r;t=e.type,r=e.relatedTarget,"dragleave"===t&&((0,p.G)()?(0,v.o)({dragLeave:e}):null==r||((0,d.v)()?(0,y.i)(r):r instanceof HTMLIFrameElement))&&(updateState({input:i.current.input,dropTargets:[]}),"external"===n.startedFrom&&cancel())}},{type:"drop",listener:function(e){if(i.current={dropTargets:i.current.dropTargets,input:(0,m.N)(e)},!i.current.dropTargets.length){cancel();return}e.preventDefault(),setDropEffectOnEvent({event:e,current:i.current.dropTargets}),u.drop({current:i.current,updatedSourcePayload:"external"===n.type?n.getDropPayload(e):null}),finish()}},{type:"dragend",listener:function(e){i.current={dropTargets:i.current.dropTargets,input:(0,m.N)(e)},cancel()}}].concat((0,c.Z)((0,g.q)({onDragEnd:cancel}))),{capture:!0});u.start({nativeSetDragImage:t.dataTransfer?t.dataTransfer.setDragImage.bind(t.dataTransfer):null})}function updateState(e){var t=function(e){var t=e.current,n=e.next;if(t.length!==n.length)return!0;for(var r=0;r<t.length;r++)if(t[r].element!==n[r].element)return!0;return!1}({current:i.current.dropTargets,next:e.dropTargets});i.current=e,t&&u.dragUpdate({current:i.current})}function onUpdateEvent(e){var t=(0,m.N)(e),o=r({target:(0,f.o)(e.target)?(0,s.Z)({x:t.clientX,y:t.clientY}):e.target,input:t,source:n.payload,current:i.current.dropTargets});o.length&&(e.preventDefault(),setDropEffectOnEvent({event:e,current:o})),updateState({dropTargets:o,input:t})}function cancel(){i.current.dropTargets.length&&updateState({dropTargets:[],input:i.current.input}),u.drop({current:i.current,updatedSourcePayload:null}),finish()}function finish(){w.isActive=!1,O()}}},E=new Map,D=n(82936),S=n(66320),T=n(7028);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){(0,D.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function _createForOfIteratorHelper(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(e,t)}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,F=function(){};return{s:F,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:F}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,i=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){i=!0,o=e},f:function(){try{a||null==n.return||n.return()}finally{if(i)throw o}}}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function copyReverse(e){return e.slice(0).reverse()}function make_monitor_arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function make_monitor_ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function makeAdapter(e){var t=e.typeKey,n=e.mount,r=e.dispatchEventToSource,o=e.onPostDispatch,a=e.defaultDropEffect,i=function(){var e=new Set,t=null;function tryAddToActive(e){t&&(!e.canMonitor||e.canMonitor(t.canMonitorArgs))&&t.active.add(e)}return{dispatchEvent:function(n){var r=n.eventName,o=n.payload;if("onGenerateDragPreview"===r){t={canMonitorArgs:{initial:o.location.initial,source:o.source},active:new Set};var a,i=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return make_monitor_arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return make_monitor_arrayLikeToArray(e,t)}}(e))){n&&(e=n);var r=0,F=function(){};return{s:F,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:F}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,i=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){i=!0,o=e},f:function(){try{a||null==n.return||n.return()}finally{if(i)throw o}}}}(e);try{for(i.s();!(a=i.n()).done;){var u=a.value;tryAddToActive(u)}}catch(e){i.e(e)}finally{i.f()}}if(t){for(var c=Array.from(t.active),l=0;l<c.length;l++){var s,f=c[l];t.active.has(f)&&(null===(s=f[r])||void 0===s||s.call(f,o))}"onDrop"===r&&(t.active.clear(),t=null)}},monitorForConsumers:function(n){var r=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?make_monitor_ownKeys(Object(n),!0).forEach(function(t){(0,D.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):make_monitor_ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},n);return e.add(r),tryAddToActive(r),function(){e.delete(r),t&&t.active.delete(r)}}}}(),u=function(e){var t=e.typeKey,n=e.defaultDropEffect,r=new WeakMap,o="data-drop-target-for-".concat(t),a="[".concat(o,"]");function notifyCurrent(e){var t,n=e.eventName,o=e.payload,a=_createForOfIteratorHelper(o.location.current.dropTargets);try{for(a.s();!(t=a.n()).done;){var i,u=t.value,c=r.get(u.element),l=_objectSpread(_objectSpread({},o),{},{self:u});null==c||null===(i=c[n])||void 0===i||i.call(c,l)}}catch(e){a.e(e)}finally{a.f()}}var i={onGenerateDragPreview:notifyCurrent,onDrag:notifyCurrent,onDragStart:notifyCurrent,onDrop:notifyCurrent,onDropTargetChange:function(e){var t,n=e.payload,o=new Set(n.location.current.dropTargets.map(function(e){return e.element})),a=new Set,i=_createForOfIteratorHelper(n.location.previous.dropTargets);try{for(i.s();!(t=i.n()).done;){var u,c,l=t.value;a.add(l.element);var s=r.get(l.element),f=o.has(l.element),d=_objectSpread(_objectSpread({},n),{},{self:l});null==s||null===(u=s.onDropTargetChange)||void 0===u||u.call(s,d),f||null==s||null===(c=s.onDragLeave)||void 0===c||c.call(s,d)}}catch(e){i.e(e)}finally{i.f()}var p,v=_createForOfIteratorHelper(n.location.current.dropTargets);try{for(v.s();!(p=v.n()).done;){var y,g,m=p.value;if(!a.has(m.element)){var b=_objectSpread(_objectSpread({},n),{},{self:m}),h=r.get(m.element);null==h||null===(y=h.onDropTargetChange)||void 0===y||y.call(h,b),null==h||null===(g=h.onDragEnter)||void 0===g||g.call(h,b)}}}catch(e){v.e(e)}finally{v.f()}}};return{dropTargetForConsumers:function(e){return(0,S.$)((0,T.t)(e.element,{attribute:o,value:"true"}),(r.set(e.element,e),function(){return r.delete(e.element)}))},getIsOver:function(e){var t=e.source,o=e.target,i=e.input,u=e.current,l=function getActualDropTargets(e){var t,o,i,u,l=e.source,s=e.target,f=e.input,d=e.result,p=void 0===d?[]:d;if(null==s)return p;if(!(s instanceof Element))return s instanceof Node?getActualDropTargets({source:l,target:s.parentElement,input:f,result:p}):p;var v=s.closest(a);if(null==v)return p;var y=r.get(v);if(null==y)return p;var g={input:f,source:l,element:y.element};if(y.canDrop&&!y.canDrop(g))return getActualDropTargets({source:l,target:y.element.parentElement,input:f,result:p});var m=null!==(t=null===(o=y.getData)||void 0===o?void 0:o.call(y,g))&&void 0!==t?t:{},b=null!==(i=null===(u=y.getDropEffect)||void 0===u?void 0:u.call(y,g))&&void 0!==i?i:n,h={data:m,element:y.element,dropEffect:b,isActiveDueToStickiness:!1};return getActualDropTargets({source:l,target:y.element.parentElement,input:f,result:[].concat((0,c.Z)(p),[h])})}({source:t,target:o,input:i});if(l.length>=u.length)return l;for(var s=copyReverse(u),f=copyReverse(l),d=[],p=0;p<s.length;p++){var v,y=s[p],g=f[p];if(null!=g){d.push(g);continue}var m=d[p-1],b=s[p-1];if((null==m?void 0:m.element)!==(null==b?void 0:b.element))break;var h=r.get(y.element);if(!h)break;var w={input:i,source:t,element:h.element};if(h.canDrop&&!h.canDrop(w)||!(null!==(v=h.getIsSticky)&&void 0!==v&&v.call(h,w)))break;d.push(_objectSpread(_objectSpread({},y),{},{isActiveDueToStickiness:!0}))}return copyReverse(d)},dispatchEvent:function(e){i[e.eventName](e)}}}({typeKey:t,defaultDropEffect:a});function dispatchEvent(e){null==r||r(e),u.dispatchEvent(e),i.dispatchEvent(e),null==o||o(e)}function start(e){var t=e.event,n=e.dragType;O.start({event:t,dragType:n,getDropTargetsOver:u.getIsOver,dispatchEvent:dispatchEvent})}return{registerUsage:function(){var e,r;return r=function(e){var t=e.typeKey,n=e.mount,r=E.get(t);if(r)return r.usageCount++,r;var o={typeKey:t,unmount:n(),usageCount:1};return E.set(t,o),o}(e={typeKey:t,mount:function(){return n({canStart:O.canStart,start:start})}}),function(){r.usageCount--,r.usageCount>0||(r.unmount(),E.delete(e.typeKey))}},dropTarget:u.dropTargetForConsumers,monitor:i.monitorForConsumers}}},66320:function(e,t,n){"use strict";function combine(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(){t.forEach(function(e){return e()})}}n.d(t,{$:function(){return combine}})},58602:function(e,t,n){"use strict";function once(e){var t=null;return function(){if(!t){for(var n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];t={result:e.apply(this,r)}}return t.result}}n.d(t,{I:function(){return once}})},7028:function(e,t,n){"use strict";function addAttribute(e,t){var n=t.attribute,r=t.value;return e.setAttribute(n,r),function(){return e.removeAttribute(n)}}n.d(t,{t:function(){return addAttribute}})},86173:function(e,t,n){"use strict";n.d(t,{D:function(){return r},F:function(){return o}});var r=(0,n(58602).I)(function(){return navigator.userAgent.toLocaleLowerCase().includes("android")}),o="pdnd:android-fallback"},29462:function(e,t,n){"use strict";n.d(t,{o:function(){return isLeavingWindowInSafari},p:function(){return isEnteringWindowInSafari}});var r=n(44101),o=n(57721),a={isLeavingWindow:Symbol("leaving"),isEnteringWindow:Symbol("entering")};function isEnteringWindowInSafari(e){var t=e.dragEnter;return!!(0,o.G)()&&t.hasOwnProperty(a.isEnteringWindow)}function isLeavingWindowInSafari(e){var t=e.dragLeave;return!!(0,o.G)()&&t.hasOwnProperty(a.isLeavingWindow)}!function(){if("undefined"!=typeof window&&(0,o.G)()){var e=getInitialState();(0,r.Ev)(window,[{type:"dragstart",listener:function(){e.enterCount=0,e.isOverWindow=!0}},{type:"drop",listener:resetState},{type:"dragend",listener:resetState},{type:"dragenter",listener:function(t){e.isOverWindow||0!==e.enterCount||(t[a.isEnteringWindow]=!0),e.isOverWindow=!0,e.enterCount++}},{type:"dragleave",listener:function(t){e.enterCount--,e.isOverWindow&&0===e.enterCount&&(t[a.isLeavingWindow]=!0,e.isOverWindow=!1)}}],{capture:!0})}function getInitialState(){return{enterCount:0,isOverWindow:!1}}function resetState(){e=getInitialState()}}()},15321:function(e,t,n){"use strict";function isFromAnotherWindow(e){return"nodeName"in e&&e.ownerDocument!==document}n.d(t,{i:function(){return isFromAnotherWindow}})},40171:function(e,t,n){"use strict";function getBindingsForBrokenDrags(e){var t,n=e.onDragEnd;return[{type:"pointermove",listener:(t=0,function(){if(t<20){t++;return}n()})},{type:"pointerdown",listener:n}]}n.d(t,{q:function(){return getBindingsForBrokenDrags}})},35006:function(e,t,n){"use strict";function getInput(e){return{altKey:e.altKey,button:e.button,buttons:e.buttons,ctrlKey:e.ctrlKey,metaKey:e.metaKey,shiftKey:e.shiftKey,clientX:e.clientX,clientY:e.clientY,pageX:e.pageX,pageY:e.pageY}}n.d(t,{N:function(){return getInput}})},55150:function(e,t,n){"use strict";n.d(t,{v:function(){return r}});var r=(0,n(58602).I)(function(){return navigator.userAgent.includes("Firefox")})},57721:function(e,t,n){"use strict";n.d(t,{G:function(){return r}});var r=(0,n(58602).I)(function(){var e=navigator.userAgent;return e.includes("AppleWebKit")&&!e.includes("Chrome")})},66344:function(e,t,n){"use strict";n.d(t,{Y:function(){return r}});var r=2147483647},15049:function(e,t,n){"use strict";n.d(t,{t:function(){return r}});var r="text/plain"},64401:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.bindAll=void 0;var o=n(45621);function toOptions(e){return void 0===e?void 0:"boolean"==typeof e?{capture:e}:e}t.bindAll=function(e,t,n){var a=t.map(function(t){var a=null==n?t:r(r({},t),{options:r(r({},toOptions(n)),toOptions(t.options))});return(0,o.bind)(e,a)});return function(){a.forEach(function(e){return e()})}}},45621:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.bind=void 0,t.bind=function(e,t){var n=t.type,r=t.listener,o=t.options;return e.addEventListener(n,r,o),function(){e.removeEventListener(n,r,o)}}},44101:function(e,t,n){"use strict";t.Ev=t.ak=void 0;var r=n(45621);Object.defineProperty(t,"ak",{enumerable:!0,get:function(){return r.bind}});var o=n(64401);Object.defineProperty(t,"Ev",{enumerable:!0,get:function(){return o.bindAll}})},20326:function(e,t,n){"use strict";n.d(t,{Z:function(){return memoizeOne}});var r=Number.isNaN||function(e){return"number"==typeof e&&e!=e};function areInputsEqual(e,t){if(e.length!==t.length)return!1;for(var n,o,a=0;a<e.length;a++)if(!((n=e[a])===(o=t[a])||r(n)&&r(o)))return!1;return!0}function memoizeOne(e,t){void 0===t&&(t=areInputsEqual);var n=null;function memoized(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];if(n&&n.lastThis===this&&t(r,n.lastArgs))return n.lastResult;var a=e.apply(this,r);return n={lastResult:a,lastArgs:r,lastThis:this},a}return memoized.clear=function(){n=null},memoized}},6178:function(e,t,n){"use strict";var r=n(44675),o=n(57578).Buffer,a=n.g.crypto||n.g.msCrypto;a&&a.getRandomValues?e.exports=function(e,t){if(e>4294967295)throw RangeError("requested too many random bytes");var n=o.allocUnsafe(e);if(e>0){if(e>65536)for(var i=0;i<e;i+=65536)a.getRandomValues(n.slice(i,i+65536));else a.getRandomValues(n)}return"function"==typeof t?r.nextTick(function(){t(null,n)}):n}:e.exports=function(){throw Error("Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11")}},57578:function(e,t,n){/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */var r=n(15686),o=r.Buffer;function copyProps(e,t){for(var n in e)t[n]=e[n]}function SafeBuffer(e,t,n){return o(e,t,n)}o.from&&o.alloc&&o.allocUnsafe&&o.allocUnsafeSlow?e.exports=r:(copyProps(r,t),t.Buffer=SafeBuffer),SafeBuffer.prototype=Object.create(o.prototype),copyProps(o,SafeBuffer),SafeBuffer.from=function(e,t,n){if("number"==typeof e)throw TypeError("Argument must not be a number");return o(e,t,n)},SafeBuffer.alloc=function(e,t,n){if("number"!=typeof e)throw TypeError("Argument must be a number");var r=o(e);return void 0!==t?"string"==typeof n?r.fill(t,n):r.fill(t):r.fill(0),r},SafeBuffer.allocUnsafe=function(e){if("number"!=typeof e)throw TypeError("Argument must be a number");return o(e)},SafeBuffer.allocUnsafeSlow=function(e){if("number"!=typeof e)throw TypeError("Argument must be a number");return r.SlowBuffer(e)}},56902:function(e,t,n){"use strict";n.d(t,{Z:function(){return _createForOfIteratorHelper}});var r=n(27938),o=n(90609),a=n(72541),i=n(27496);function _createForOfIteratorHelper(e,t){var n=void 0!==r&&e[o]||e["@@iterator"];if(!n){if(a(e)||(n=(0,i.Z)(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var u=0,F=function(){};return{s:F,n:function(){return u>=e.length?{done:!0}:{done:!1,value:e[u++]}},e:function(e){throw e},f:F}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,l=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){s=!0,c=e},f:function(){try{l||null==n.return||n.return()}finally{if(s)throw c}}}}},17942:function(e,t,n){"use strict";n.d(t,{Z:function(){return _extends}});var r=n(92107);function _extends(){return(_extends=r?r.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}},82936:function(e,t,n){"use strict";n.d(t,{Z:function(){return _defineProperty}});var r=n(80181);function _defineProperty(e,t,n){return(t=(0,r.Z)(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},81653:function(e,t,n){"use strict";n.d(t,{Z:function(){return _objectWithoutProperties}});var r=n(94458);function _objectWithoutProperties(e,t){if(null==e)return{};var n,o,a=(0,r.Z)(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.includes(n)||({}).propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}},11537:function(e,t,n){"use strict";n.d(t,{Z:function(){return _slicedToArray}});var r=n(92480);function _slicedToArray(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,i,u=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(u.push(r.value),u.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(l)throw o}}return u}}(e,t)||(0,r.Z)(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},48894:function(e,t,n){"use strict";function invariant(e,t){if(!e)throw Error("Invariant failed")}n.d(t,{Z:function(){return invariant}})}}]);
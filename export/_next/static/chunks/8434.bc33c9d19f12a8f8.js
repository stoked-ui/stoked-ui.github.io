"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8434],{57957:function(e,t,r){r.d(t,{Z:function(){return x}});var a=r(94458),n=r(187),i=r(92379),o=r(53048),l=r(62534),s=r(5652),c=r(64376),u=r(87842),d=r(651),p=(0,u.Z)((0,d.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),m=r(52386),g=r(75613);let f=["alt","children","className","component","slots","slotProps","imgProps","sizes","src","srcSet","variant"],useUtilityClasses=e=>{let{classes:t,variant:r,colorDefault:a}=e;return(0,l.Z)({root:["root",r,a&&"colorDefault"],img:["img"],fallback:["fallback"]},m.$,t)},h=(0,s.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[r.variant],r.colorDefault&&t.colorDefault]}})(({theme:e})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(e.vars||e).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:(0,n.Z)({color:(e.vars||e).palette.background.default},e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:(0,n.Z)({backgroundColor:e.palette.grey[400]},e.applyStyles("dark",{backgroundColor:e.palette.grey[600]})))}]})),v=(0,s.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,t)=>t.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),y=(0,s.ZP)(p,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,t)=>t.fallback})({width:"75%",height:"75%"}),b=i.forwardRef(function(e,t){let r=(0,c.i)({props:e,name:"MuiAvatar"}),{alt:l,children:s,className:u,component:p="div",slots:m={},slotProps:b={},imgProps:x,sizes:S,src:w,srcSet:k,variant:Z="circular"}=r,G=(0,a.Z)(r,f),j=null,C=function({crossOrigin:e,referrerPolicy:t,src:r,srcSet:a}){let[n,o]=i.useState(!1);return i.useEffect(()=>{if(!r&&!a)return;o(!1);let n=!0,i=new Image;return i.onload=()=>{n&&o("loaded")},i.onerror=()=>{n&&o("error")},i.crossOrigin=e,i.referrerPolicy=t,i.src=r,a&&(i.srcset=a),()=>{n=!1}},[e,t,r,a]),n}((0,n.Z)({},x,{src:w,srcSet:k})),$=w||k,P=$&&"error"!==C,D=(0,n.Z)({},r,{colorDefault:!P,component:p,variant:Z}),O=useUtilityClasses(D),[N,R]=(0,g.Z)("img",{className:O.img,elementType:v,externalForwardedProps:{slots:m,slotProps:{img:(0,n.Z)({},x,b.img)}},additionalProps:{alt:l,src:w,srcSet:k,sizes:S},ownerState:D});return j=P?(0,d.jsx)(N,(0,n.Z)({},R)):s||0===s?s:$&&l?l[0]:(0,d.jsx)(y,{ownerState:D,className:O.fallback}),(0,d.jsx)(h,(0,n.Z)({as:p,ownerState:D,className:(0,o.default)(O.root,u),ref:t},G,{children:j}))});var x=b},52386:function(e,t,r){r.d(t,{$:function(){return getAvatarUtilityClass}});var a=r(62234),n=r(48809);function getAvatarUtilityClass(e){return(0,n.ZP)("MuiAvatar",e)}let i=(0,a.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);t.Z=i},5359:function(e,t,r){r.d(t,{Z:function(){return k}});var a=r(187),n=r(94458),i=r(92379),o=r(53048),l=r(18146),s=r(48809),c=r(62534),u=r(25463),d=r(19290),p=r(66278),m=r(66542),g=r(23167),f=r(16706);function appendLevel(e){return e?`Level${e}`:""}function isNestedContainer(e){return e.unstable_level>0&&e.container}function createGetSelfSpacing(e){return function(t){return`var(--Grid-${t}Spacing${appendLevel(e.unstable_level)})`}}function createGetParentSpacing(e){return function(t){return 0===e.unstable_level?`var(--Grid-${t}Spacing)`:`var(--Grid-${t}Spacing${appendLevel(e.unstable_level-1)})`}}function getParentColumns(e){return 0===e.unstable_level?"var(--Grid-columns)":`var(--Grid-columns${appendLevel(e.unstable_level-1)})`}let generateGridSizeStyles=({theme:e,ownerState:t})=>{let r=createGetSelfSpacing(t),a={};return(0,f.t)(e.breakpoints,t.gridSize,(e,n)=>{let i={};!0===n&&(i={flexBasis:0,flexGrow:1,maxWidth:"100%"}),"auto"===n&&(i={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"}),"number"==typeof n&&(i={flexGrow:0,flexBasis:"auto",width:`calc(100% * ${n} / ${getParentColumns(t)}${isNestedContainer(t)?` + ${r("column")}`:""})`}),e(a,i)}),a},generateGridOffsetStyles=({theme:e,ownerState:t})=>{let r={};return(0,f.t)(e.breakpoints,t.gridOffset,(e,a)=>{let n={};"auto"===a&&(n={marginLeft:"auto"}),"number"==typeof a&&(n={marginLeft:0===a?"0px":`calc(100% * ${a} / ${getParentColumns(t)})`}),e(r,n)}),r},generateGridColumnsStyles=({theme:e,ownerState:t})=>{if(!t.container)return{};let r=isNestedContainer(t)?{[`--Grid-columns${appendLevel(t.unstable_level)}`]:getParentColumns(t)}:{"--Grid-columns":12};return(0,f.t)(e.breakpoints,t.columns,(e,a)=>{e(r,{[`--Grid-columns${appendLevel(t.unstable_level)}`]:a})}),r},generateGridRowSpacingStyles=({theme:e,ownerState:t})=>{if(!t.container)return{};let r=createGetParentSpacing(t),a=isNestedContainer(t)?{[`--Grid-rowSpacing${appendLevel(t.unstable_level)}`]:r("row")}:{};return(0,f.t)(e.breakpoints,t.rowSpacing,(r,n)=>{var i;r(a,{[`--Grid-rowSpacing${appendLevel(t.unstable_level)}`]:"string"==typeof n?n:null==(i=e.spacing)?void 0:i.call(e,n)})}),a},generateGridColumnSpacingStyles=({theme:e,ownerState:t})=>{if(!t.container)return{};let r=createGetParentSpacing(t),a=isNestedContainer(t)?{[`--Grid-columnSpacing${appendLevel(t.unstable_level)}`]:r("column")}:{};return(0,f.t)(e.breakpoints,t.columnSpacing,(r,n)=>{var i;r(a,{[`--Grid-columnSpacing${appendLevel(t.unstable_level)}`]:"string"==typeof n?n:null==(i=e.spacing)?void 0:i.call(e,n)})}),a},generateGridDirectionStyles=({theme:e,ownerState:t})=>{if(!t.container)return{};let r={};return(0,f.t)(e.breakpoints,t.direction,(e,t)=>{e(r,{flexDirection:t})}),r},generateGridStyles=({ownerState:e})=>{let t=createGetSelfSpacing(e),r=createGetParentSpacing(e);return(0,a.Z)({minWidth:0,boxSizing:"border-box"},e.container&&(0,a.Z)({display:"flex",flexWrap:"wrap"},e.wrap&&"wrap"!==e.wrap&&{flexWrap:e.wrap},{margin:`calc(${t("row")} / -2) calc(${t("column")} / -2)`},e.disableEqualOverflow&&{margin:`calc(${t("row")} * -1) 0px 0px calc(${t("column")} * -1)`}),(!e.container||isNestedContainer(e))&&(0,a.Z)({padding:`calc(${r("row")} / 2) calc(${r("column")} / 2)`},(e.disableEqualOverflow||e.parentDisableEqualOverflow)&&{padding:`${r("row")} 0px 0px ${r("column")}`}))},generateSizeClassNames=e=>{let t=[];return Object.entries(e).forEach(([e,r])=>{!1!==r&&void 0!==r&&t.push(`grid-${e}-${String(r)}`)}),t},generateSpacingClassNames=(e,t="xs")=>{function isValidSpacing(e){return void 0!==e&&("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e&&e>0)}if(isValidSpacing(e))return[`spacing-${t}-${String(e)}`];if("object"==typeof e&&!Array.isArray(e)){let t=[];return Object.entries(e).forEach(([e,r])=>{isValidSpacing(r)&&t.push(`spacing-${e}-${String(r)}`)}),t}return[]},generateDirectionClasses=e=>void 0===e?[]:"object"==typeof e?Object.entries(e).map(([e,t])=>`direction-${e}-${t}`):[`direction-xs-${String(e)}`];var h=r(651);let v=["className","children","columns","container","component","direction","wrap","spacing","rowSpacing","columnSpacing","disableEqualOverflow","unstable_level"],y=(0,g.Z)(),b=(0,u.Z)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>t.root});function useThemePropsDefault(e){return(0,d.Z)({props:e,name:"MuiGrid",defaultTheme:y})}var x=r(5652),S=r(64376);let w=function(e={}){let{createStyledComponent:t=b,useThemeProps:r=useThemePropsDefault,componentName:u="MuiGrid"}=e,d=i.createContext(void 0),useUtilityClasses=(e,t)=>{let{container:r,direction:a,spacing:n,wrap:i,gridSize:o}=e,l={root:["root",r&&"container","wrap"!==i&&`wrap-xs-${String(i)}`,...generateDirectionClasses(a),...generateSizeClassNames(o),...r?generateSpacingClassNames(n,t.breakpoints.keys[0]):[]]};return(0,c.Z)(l,e=>(0,s.ZP)(u,e),{})},g=t(generateGridColumnsStyles,generateGridColumnSpacingStyles,generateGridRowSpacingStyles,generateGridSizeStyles,generateGridDirectionStyles,generateGridStyles,generateGridOffsetStyles),f=i.forwardRef(function(e,t){var s,c,u,f,y,b,x,S;let w=(0,p.Z)(),k=r(e),Z=(0,m.Z)(k),G=i.useContext(d),{className:j,children:C,columns:$=12,container:P=!1,component:D="div",direction:O="row",wrap:N="wrap",spacing:R=0,rowSpacing:E=R,columnSpacing:z=R,disableEqualOverflow:A,unstable_level:_=0}=Z,q=(0,n.Z)(Z,v),I=A;_&&void 0!==A&&(I=e.disableEqualOverflow);let M={},U={},F={};Object.entries(q).forEach(([e,t])=>{void 0!==w.breakpoints.values[e]?M[e]=t:void 0!==w.breakpoints.values[e.replace("Offset","")]?U[e.replace("Offset","")]=t:F[e]=t});let L=null!=(s=e.columns)?s:_?void 0:$,B=null!=(c=e.spacing)?c:_?void 0:R,W=null!=(u=null!=(f=e.rowSpacing)?f:e.spacing)?u:_?void 0:E,T=null!=(y=null!=(b=e.columnSpacing)?b:e.spacing)?y:_?void 0:z,V=(0,a.Z)({},Z,{level:_,columns:L,container:P,direction:O,wrap:N,spacing:B,rowSpacing:W,columnSpacing:T,gridSize:M,gridOffset:U,disableEqualOverflow:null!=(x=null!=(S=I)?S:G)&&x,parentDisableEqualOverflow:G}),H=useUtilityClasses(V,w),K=(0,h.jsx)(g,(0,a.Z)({ref:t,as:D,ownerState:V,className:(0,o.default)(H.root,j)},F,{children:i.Children.map(C,e=>{if(i.isValidElement(e)&&(0,l.Z)(e,["Grid"])){var t;return i.cloneElement(e,{unstable_level:null!=(t=e.props.unstable_level)?t:_+1})}return e})}));return void 0!==I&&I!==(null!=G&&G)&&(K=(0,h.jsx)(d.Provider,{value:I,children:K})),K});return f.muiName="Grid",f}({createStyledComponent:(0,x.ZP)("div",{name:"MuiGrid2",slot:"Root",overridesResolver:(e,t)=>t.root}),componentName:"MuiGrid2",useThemeProps:e=>(0,S.i)({props:e,name:"MuiGrid2"})});var k=w},16706:function(e,t,r){r.d(t,{t:function(){return traverseBreakpoints}});let filterBreakpointKeys=(e,t)=>e.filter(e=>t.includes(e)),traverseBreakpoints=(e,t,r)=>{let a=e.keys[0];if(Array.isArray(t))t.forEach((t,a)=>{r((t,r)=>{a<=e.keys.length-1&&(0===a?Object.assign(t,r):t[e.up(e.keys[a])]=r)},t)});else if(t&&"object"==typeof t){let n=Object.keys(t).length>e.keys.length?e.keys:filterBreakpointKeys(e.keys,Object.keys(t));n.forEach(n=>{if(-1!==e.keys.indexOf(n)){let i=t[n];void 0!==i&&r((t,r)=>{a===n?Object.assign(t,r):t[e.up(n)]=r},i)}})}else("number"==typeof t||"string"==typeof t)&&r((e,t)=>{Object.assign(e,t)},t)}},78434:function(e,t,r){r.r(t),r.d(t,{default:function(){return UserFeedbacks}});var a,n=r(36063),i=r(85470),o=r(57957),l=r(21174),s=r(86685),c=r(5359),u=r(651),d=[{title:"5.8M",metadata:"Weekly downloads on npm"},{title:"90.5k",metadata:"Stars on GitHub"},{title:"2.9k",metadata:"Open-source contributors"},{title:"18.9k",metadata:"Followers on X"}];function MuiStatistics(){return(0,u.jsx)(l.Z,{"data-mui-color-scheme":"dark",sx:function(e){return{pt:{xs:1,sm:2.5},pb:{xs:2,sm:3},pl:{xs:2,sm:0},pr:0,display:"flex",justifyContent:"center",gap:{xs:0,sm:1},width:"100%",flexWrap:"wrap",background:"linear-gradient(180deg, ".concat((0,i.Fq)(e.palette.primary[900],.1)," 2%, transparent 80%)")}},children:d.map(function(e){return(0,u.jsxs)(l.Z,{sx:{width:{xs:"50%",sm:200},p:{xs:1,sm:0}},children:[(0,u.jsx)(s.Z,{variant:"h4",component:"h3",fontWeight:"semiBold",sx:function(e){return(0,n.Z)({textAlign:{xs:"left",sm:"center"},color:"primary.main"},e.applyDarkStyles({color:"primary.200"}))},children:e.title}),(0,u.jsx)(s.Z,{variant:"body2",color:"text.secondary",sx:{textAlign:{xs:"left",sm:"center"}},children:e.metadata})]},e.title)})})}var p=[{quote:"\"We've relied on Stoked UI really heavily. I override a lot of default styles to try and make things our own, but the time we save with complex components like the Autocomplete and the Data Grid are so worth it. Every other library I try has 80% of what I'm looking for when it comes to complex use cases, Stoked UI has it all under one roof which is a huge help for our small team.\"",profile:{avatarSrc:"https://avatars.githubusercontent.com/u/21114044?s=58",avatarSrcSet:"https://avatars.githubusercontent.com/u/21114044?s=116 2x",name:"Kyle Gill",role:"Engineer & Designer",company:(0,u.jsx)("img",{src:"/static/branding/companies/particl-dark.svg",width:"90",height:"16",alt:"Particl logo",loading:"lazy"})}},{quote:"\"Stoked UI looks great and lets us deliver fast, thanks to their solid API design and documentation - it's refreshing to use a component library where you get everything you need from their site rather than Stack\xa0Overflow. We think the upcoming version, with extra themes and customizability, will make Stoked UI even more of a game changer. We're extremely grateful to the team for the time and effort spent maintaining the project.\"",profile:{avatarSrc:"https://avatars.githubusercontent.com/u/197016?s=58",avatarSrcSet:"https://avatars.githubusercontent.com/u/197016?s=116 2x",name:"Jean-Laurent de Morlhon",role:"VP of Engineering",company:(0,u.jsx)("img",{src:"/static/branding/companies/docker-blue.svg",width:"81",height:"21",alt:"Docker logo",loading:"lazy"})}},{quote:"\"Stoked UI offers a wide variety of high quality components that have allowed us to ship features faster. It has been used by more than a hundred engineers in our organization. What's more, Stoked UI's well architected customization system has allowed us to differentiate ourselves in the marketplace.\"",profile:{avatarSrc:"https://avatars.githubusercontent.com/u/28296253?s=58",avatarSrcSet:"https://avatars.githubusercontent.com/u/28296253?s=116 2x",name:"Joona Rahko",role:"Staff Software Engineer",company:(0,u.jsx)("img",{src:"/static/branding/companies/unity-blue.svg",width:"56",height:"21",alt:"Unity logo",loading:"lazy"})}},{quote:'"After much research on React component libraries, we decided to ditch our in-house library for Stoked UI, using its powerful customization system to implement our Design System. This simple move did a rare thing in engineering: it lowered our maintenance costs while enhancing both developer and customer experience. All of this was done without sacrificing the organization\'s branding and visual identity."',profile:{avatarSrc:"https://avatars.githubusercontent.com/u/732422?s=58",avatarSrcSet:"https://avatars.githubusercontent.com/u/732422?s=116 2x",name:"Gustavo de Paula",role:"Specialist Software Engineer",company:(0,u.jsx)("img",{src:"/static/branding/companies/loggi-blue.svg",width:"61",height:"20",alt:"Loggi logo",loading:"lazy"})}}];function Feedback(e){var t=e.quote,r=e.profile;return(0,u.jsxs)(l.Z,{sx:{p:3,height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between",color:"#FFF"},children:[(0,u.jsx)(s.Z,{sx:{mb:2.5,lineHeight:1.6,color:"grey.200",fontSize:function(e){return e.typography.pxToRem(15)}},children:t}),(0,u.jsxs)(l.Z,{sx:{display:"flex",alignItems:"center",gap:1.5},children:[(0,u.jsx)(l.Z,{sx:function(e){return{p:.5,border:"1px solid",borderColor:"primary.800",bgcolor:(0,i.Fq)(e.palette.primary[900],.5),borderRadius:99}},children:(0,u.jsx)(o.Z,{srcSet:r.avatarSrcSet,src:r.avatarSrc,alt:"".concat(r.name,"'s profile picture"),slotProps:{img:{loading:"lazy"}},sx:{width:36,height:36}})}),(0,u.jsxs)("div",{children:[(0,u.jsx)(s.Z,{variant:"body2",fontWeight:"semiBold",color:"text.primary",children:r.name}),(0,u.jsx)(s.Z,{variant:"body2",color:"text.secondary",children:r.role})]}),(0,u.jsx)(l.Z,{sx:{ml:"auto"},children:r.company})]})]})}function UserFeedbacks(){return(0,u.jsxs)(c.Z,{container:!0,sx:function(e){return{mt:4,backgroundColor:"rgba(255,255,255,0.01)",border:"1px solid",borderColor:"divider",borderRadius:1,overflow:"clip","> :nth-of-type(1)":{borderBottom:"1px solid ".concat(e.palette.primaryDark[700])},"> :nth-of-type(2)":{borderBottom:"1px solid ".concat(e.palette.primaryDark[700]),borderRight:{xs:0,sm:"1px solid ".concat(e.palette.primaryDark[700])}},"> :nth-of-type(3)":{borderBottom:"1px solid ".concat(e.palette.primaryDark[700])},"> :nth-of-type(4)":{borderRight:{xs:0,sm:"1px solid ".concat(e.palette.primaryDark[700])},borderBottom:{xs:"1px solid ".concat(e.palette.primaryDark[700]),sm:0}}}},children:[a||(a=(0,u.jsx)(MuiStatistics,{})),p.map(function(e){return(0,u.jsx)(c.Z,{xs:12,sm:6,children:(0,u.jsx)(Feedback,(0,n.Z)({},e))},e.profile.name)})]})}}}]);
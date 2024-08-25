(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8826,8290],{84832:function(e,t,n){"use strict";var i=n(31576);t.Z=void 0;var r=i(n(96491)),a=n(651);t.Z=(0,r.default)((0,a.jsx)("path",{d:"M9 16.17 5.53 12.7a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71c.39-.39.39-1.02 0-1.41a.9959.9959 0 0 0-1.41 0z"}),"CheckRounded")},11538:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Main}});var i,r,a=n(92379),o=n(21174),s=n(47525),l=n(88778),d=n(651);function Main(){return(0,d.jsxs)(a.Fragment,{children:[i||(i=(0,d.jsx)(l.Z,{})),(0,d.jsx)(o.Z,{sx:{height:"112px"}}),r||(r=(0,d.jsx)(s.Z,{}))]})}},41589:function(e,t,n){"use strict";n.d(t,{Z:function(){return GetStartedButtons}});var i,r,a,o,s=n(36063),l=n(65784),d=n(53710),c=n(92379),u=n(68384),h=n.n(u),x=n(21174),p=n(26370),m=n(1062),g=n(54717),f=n(84832),b=n(11800),y=n(5652),v=n(85470),Z=n(651),j=["installation","onClick","sx"],w=(0,y.ZP)("button")(function(e){var t=e.theme;return{boxSizing:"border-box",minWidth:333,margin:0,marginTop:16,cursor:"copy",padding:0,position:"relative",display:"inline-flex",alignItems:"flex-start",justifyContent:"center",verticalAlign:"middle",gap:8,outline:0,border:0,boxShadow:"none",backgroundColor:"transparent",fontFamily:t.typography.fontFamilyCode,fontSize:t.typography.pxToRem(12),textDecoration:"none",textTransform:"initial",lineHeight:1.5,letterSpacing:0,transition:t.transitions.create("color",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.shortest}),WebkitTapHighlightColor:"transparent",WebkitFontSmoothing:"subpixel-antialiased",color:t.palette.grey[600],"&:hover, &:focus-visible":{color:t.palette.primary.main,"@media (hover: none)":{color:t.palette.grey[600]}},"& svg":{display:"inline-block",position:"absolute",right:-24,top:1,opacity:0,transition:t.transitions.create("opacity",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.shortest})},"&:focus, &:hover svg":{opacity:1},"&:focus-visible":{outline:"3px solid ".concat((0,v.Fq)(t.palette.primary[500],.5)),outlineOffset:"2px"}}});function NpmCopyButton(e){var t=e.installation,n=e.onClick,i=(e.sx,(0,l.Z)(e,j)),r=c.useState(!1),a=(0,d.Z)(r,2),o=a[0],u=a[1],handleCopy=function(){u(!0),h()(t).then(function(){setTimeout(function(){return u(!1)},2e3)})};return(0,Z.jsxs)(w,(0,s.Z)((0,s.Z)({onClick:function(e){handleCopy(),null==n||n(e)}},i),{},{children:["$ ",t,o?(0,Z.jsx)(f.Z,{color:"inherit",sx:{fontSize:15}}):(0,Z.jsx)(g.Z,{color:"inherit",sx:{fontSize:15}})]}))}var k=["primaryLabel","primaryUrl","primaryUrlTarget","secondaryLabel","secondaryUrl","secondaryUrlTarget","installation","altInstallation"];function GetStartedButtons(e){var t=c.useState(!1),n=(0,d.Z)(t,2),u=n[0],y=n[1],v=e.primaryLabel,j=e.primaryUrl,w=e.primaryUrlTarget,C=void 0===w?"_self":w,S=e.secondaryLabel,L=e.secondaryUrl,W=e.secondaryUrlTarget,H=void 0===W?"_self":W,P=e.installation,T=e.altInstallation,F=(0,l.Z)(e,k);return(0,Z.jsxs)(c.Fragment,{children:[(0,Z.jsxs)(x.Z,(0,s.Z)((0,s.Z)({},F),{},{sx:(0,s.Z)({display:"flex",flexWrap:{xs:"wrap",md:"nowrap"},gap:1.5,"&& > *":{minWidth:{xs:"100%",md:"0%"}}},F.sx),children:[(0,Z.jsx)(p.Z,{href:j,component:b.r,target:C,rel:C?"noopener":"",noLinkStyle:!0,variant:"contained",endIcon:i||(i=(0,Z.jsx)(m.Z,{})),sx:{flexShrink:0},children:void 0===v?"Get started":v}),P?(0,Z.jsx)(p.Z,{variant:"codeOutlined",endIcon:u?r||(r=(0,Z.jsx)(f.Z,{color:"primary"})):a||(a=(0,Z.jsx)(g.Z,{})),onClick:function(){y(!0),h()(P).then(function(){setTimeout(function(){return y(!1)},2e3)})},sx:{maxWidth:"324px",display:"inline-block",justifyContent:"start",overflowX:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",position:"relative",pr:5},children:P}):null,S?(0,Z.jsx)(p.Z,{href:L,component:b.r,target:H,rel:H?"noopener":"",noLinkStyle:!0,variant:"outlined",color:"secondary",endIcon:o||(o=(0,Z.jsx)(m.Z,{})),children:S}):null]})),T&&(0,Z.jsx)(NpmCopyButton,{installation:T,sx:{mt:2}})]})}},88778:function(e,t,n){"use strict";n.d(t,{Z:function(){return Hero}});var i,r,a,o=n(36063),s=n(45711),l=n(5472),d=n.n(l),c=n(92379),u=n(26909),h=n.n(u),x=n(23404),p=n(21174),m=n(86685),g=n(25411),f=n(52571),b=n(26061),y=n(41589),v=n(89584),Z=n(651);function createLoading(e){return function(){return(0,Z.jsx)(p.Z,{sx:[function(e){return(0,o.Z)({borderRadius:1,bgcolor:"grey.100"},e.applyDarkStyles({bgcolor:"primaryDark.800"}))}].concat((0,s.Z)(d()(e)?e:[e]))})}}var j=h()(function(){return Promise.all([n.e(3989),n.e(2031),n.e(5843),n.e(4674),n.e(7386),n.e(8263),n.e(5110),n.e(819),n.e(9572)]).then(n.bind(n,49572))},{ssr:!1,loading:createLoading({width:"100%",height:280}),loadableGenerated:{webpack:function(){return[49572]}}}),w=h()(function(){return Promise.all([n.e(3989),n.e(2031),n.e(5843),n.e(4674),n.e(7386),n.e(8263),n.e(5110),n.e(819),n.e(9572)]).then(n.bind(n,49572))},{ssr:!1,loading:createLoading({width:360,height:280}),loadableGenerated:{webpack:function(){return[49572]}}});function Hero(){var e=(0,x.Z)(),t=(0,f.Z)(e.breakpoints.up("md"));return(0,Z.jsx)(v.Z,{linearGradient:!0,left:(0,Z.jsxs)(p.Z,{sx:{textAlign:{xs:"center",md:"left"},maxWidth:500},children:[i||(i=(0,Z.jsxs)(m.Z,{variant:"h1",mb:1,children:[(0,Z.jsx)(b.Z,{children:"File Explorer"})," ",(0,Z.jsx)("br",{}),"with drag and drop and much more"]})),r||(r=(0,Z.jsxs)(m.Z,{color:"text.secondary",mb:3,children:["SUI is building an open source web based Video Editor and just released the first component. The File Explorer will play a critical role managing files in the Video Editor. It's built with ",(0,Z.jsx)("a",{href:"https://mui.com/material-ui/getting-started/",children:"MUI"})," through and through and leverages Atlassian's new ",(0,Z.jsx)("a",{href:"https://atlassian.design/components/pragmatic-drag-and-drop/",children:"Pragmatic Drag and Drop Library"}),". PR's welcome."]})),a||(a=(0,Z.jsx)(y.Z,{primaryLabel:"Checkout the roadmap to see whats next",primaryUrl:"https://github.com/orgs/stoked-ui/projects/1/views/1"}))]}),rightSx:{p:4,ml:2,minWidth:2e3,overflow:"hidden","& > div":{width:760,display:"inline-flex",verticalAlign:"top","&:nth-of-type(2)":{width:{xl:400}}},"&& *":{fontFamily:'"IBM Plex Sans",-apple-system,BlinkMacSystemFont,sans-serif'}},right:(0,Z.jsx)(c.Fragment,{children:t&&(0,Z.jsxs)(g.Z,{spacing:3,useFlexGap:!0,sx:{"& > .MuiPaper-root":{maxWidth:"none"}},children:[(0,Z.jsx)(j,{id:"file-explorer-grid",defaultData:!0,grid:!0,sx:{width:"100%"}}),(0,Z.jsx)(w,{id:"file-explorer-drop",defaultData:!0,sx:{width:"100%"}})]})})})}},26061:function(e,t,n){"use strict";var i=(0,n(5652).ZP)("span")(function(e){var t=e.theme,n=e.color,i=void 0===n?"primary":n;return{background:"linear-gradient(90deg, ".concat(t.palette[i][400]," 5%, ").concat(t.palette[i].main," 90%)"),WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}});t.Z=i},89584:function(e,t,n){"use strict";n.d(t,{Z:function(){return HeroContainer}});var i=n(36063),r=n(45711),a=n(5472),o=n.n(a),s=n(92379),l=n(21174),d=n(26719),c=n(90880),u=n(6847),h=n(85470),x=n(651);function HeroContainer(e){var t=e.disableMobileHidden,n=e.disableTabExclusion,a=void 0!==n&&n,p=e.left,m=e.linearGradient,g=e.right,f=e.rightSx,b=s.useRef(null);(0,u.Z)(function(){var e;return"undefined"!=typeof MutationObserver&&b.current&&(e=new MutationObserver(function(){a||b.current.querySelectorAll('a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])').forEach(function(e){e.setAttribute("tabindex","-1")})})).observe(b.current,{childList:!0,subtree:!0}),function(){e&&e.disconnect()}},[a]);var renderRightWrapper=function(e){return(0,x.jsx)(l.Z,{ref:b,"aria-hidden":a?void 0:"true",sx:[function(e){return(0,i.Z)({minWidth:"70%",minHeight:{xs:"auto",sm:500},height:"calc(100vh - 120px)",maxHeight:{md:950,xl:1150},borderBottomLeftRadius:12,transition:"max-height 0.3s",position:"relative",overflow:"hidden",borderLeft:"1px solid",borderBottom:"1px solid",borderColor:"divider"},m&&{background:"radial-gradient(farthest-corner circle at 0% 0%, ".concat(e.palette.grey[50]," 0%, ").concat(e.palette.primary[50]," 100%)")})},function(e){return e.applyDarkStyles((0,i.Z)({background:"primaryDark.900",borderColor:"primaryDark.700"},m&&{background:"radial-gradient(farthest-corner circle at 0% 0%, ".concat((0,h.Fq)(e.palette.primary[900],.2)," 0%, ").concat(e.palette.primaryDark[900]," 100%)")}))}].concat((0,r.Z)(o()(e)?e:[e]),(0,r.Z)(o()(f)?f:[f])),children:g})};return t?(0,x.jsx)(l.Z,{sx:{overflow:"hidden"},children:(0,x.jsx)(d.Z,{sx:{minHeight:{xs:"auto",sm:500},height:{md:"calc(100vh - 120px)"},maxHeight:{md:700,xl:850},transition:"0.3s"},children:(0,x.jsxs)(c.ZP,{container:!0,alignItems:"center",sx:{height:"100%",mx:"auto"},children:[(0,x.jsx)(c.ZP,{item:!0,xs:12,md:7,lg:6,sx:{minWidth:"40%",display:{xs:"flex",md:"block"},minHeight:{xs:500,sm:700,md:"initial"},m:"auto","& > *":{m:{xs:"auto",md:"initial"}}},children:p}),(0,x.jsx)(c.ZP,{item:!0,xs:12,md:5,lg:6,sx:{maxHeight:"100%"},children:renderRightWrapper({height:{xs:"initial",md:"calc(100vh - 120px)"},borderLeftWidth:{xs:0,md:1},borderBottomLeftRadius:{xs:0,md:12},mx:{xs:-2,sm:-3,md:"initial"}})})]})})}):(0,x.jsx)(l.Z,{sx:{overflow:"hidden"},children:(0,x.jsx)(d.Z,{sx:{pt:{xs:8,md:0},minHeight:{xs:"auto",md:500},height:{md:"calc(100vh - 120px)"},maxHeight:{md:700,xl:850},transition:"0.3s"},children:(0,x.jsxs)(c.ZP,{container:!0,alignItems:"center",wrap:"nowrap",sx:{height:"100%",mx:"auto"},children:[(0,x.jsx)(c.ZP,{item:!0,md:7,lg:6,sx:{m:"auto",width:"30vw"},children:p}),(0,x.jsx)(c.ZP,{item:!0,md:5,lg:6,sx:{maxHeight:"100%",display:{xs:"none",md:"initial"},width:"100vw"},children:renderRightWrapper()})]})})})}},57116:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/media-selector/main",function(){return n(11538)}])}},function(e){e.O(0,[9477,6221,3976,5386,7809,9774,2888,179],function(){return e(e.s=57116)}),_N_E=e.O()}]);
"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4475],{16234:function(e,r,t){t.d(r,{Z:function(){return BrandingCssVarsProvider}});var o,n,i,a,l=t(36063),s=t(65784),c=t(70043),d=t(53037),p=t(38633),u=t(61833),h=t(45802),x=t(12752),f=t(93735),m=t(36446),g=t(651),b=(0,x.bk)("light"),y=b.palette,Z=b.typography,j=(0,s.Z)(b,["palette","typography"]),k=(0,x.bk)("dark").palette,v=(0,d.Z)((0,l.Z)((0,l.Z)({cssVarPrefix:"muidocs",colorSchemes:{light:{palette:y},dark:{palette:k}}},j),{},{typography:(0,c.Z)(Z,{h1:{':where([data-mui-color-scheme="dark"]) &':{color:"var(--muidocs-palette-common-white)"}},h2:{':where([data-mui-color-scheme="dark"]) &':{color:"var(--muidocs-palette-grey-100)"}},h5:{':where([data-mui-color-scheme="dark"]) &':{color:"var(--muidocs-palette-primary-300)"}}})},(0,x.AP)()));function BrandingCssVarsProvider(e){var r=e.children;return(0,g.jsxs)(p.CM,{theme:v,defaultMode:"system",disableTransitionOnChange:!0,children:[o||(o=(0,g.jsx)(h.F1,{})),n||(n=(0,g.jsx)(u.ZP,{})),i||(i=(0,g.jsx)(f.Z,{})),a||(a=(0,g.jsx)(m.Z,{})),r]})}},66846:function(e,r,t){t.d(r,{Z:function(){return AppFooter}});var o,n,i,a,l,s,c,d,p,u,h,x,f,m,g=t(21174),b=t(26719),y=t(47525),Z=t(86685),j=t(31057),k=t(25411),v=t(58048),S=t(78717),w=t(86693),C=t(260),D=t(99476),M=t(43640),I=t(98959),F=t(36063),R=t(45234),z=t(53710),T=t(51041),B=t.n(T),_=t(92379),A=t(5652),P=t(85470),U=t(91280),E=t(26370),L=t(52355),O=t(54558),H=t(95548),W=t(80637),N=t(43831),Y=t(651),q=t(44675),Q="production"===q.env.DEPLOY_ENV||"staging"===q.env.DEPLOY_ENV?"https://f0433e60.sibforms.com/serve/MUIEAHEhgYhMvLAw0tycwk1BQaIB-q0akob3JdtDBmHLhSR-jLheJ2T44LFCz27alz9wq_Nkdz9EK7Y8hzM1vQND9kTFyKkkhTIbEzXaH5d-_S9Fw4PXS1zAK8efPY6nhCdoAop1SKTeZ_GAPW5S0xBFQRLUGYbvvRgE4Q2Ki_f1KjbiCqaRuzmj_I3SD1r0CoR4INmK3CLtF4kF":"https://f0433e60.sibforms.com/serve/MUIEAE9LexIU5u5hYkoDJ-Mc379-irLHNIlGEgCm5njkAwg6OYFfNQTd25n4SO6vJom9WvQ89GJ0sYBzFYswLRewcOvD_dRtoFycXIObP8SMm-kNO1CdXKaWEZutrfqMKygHb1Je1QBGrMUnJg8J5qVeCwa7rSPBN0A1_6Ug3SiGjgIlbiCcMVA4KbhaYTiBvKkaejlCjgZcLHBT",G=(0,A.ZP)("form")({});function EmailSubscribe(e){var r,t=e.sx,i=_.useState({email:"",status:"initial"}),a=(0,z.Z)(i,2),l=a[0],s=a[1],c=(r=(0,R.Z)((0,I.Z)().mark(function _callee(e){return(0,I.Z)().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return e.preventDefault(),s(function(e){return(0,F.Z)((0,F.Z)({},e),{},{status:"loading"})}),r.prev=2,r.next=5,fetch(Q,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},mode:"no-cors",body:function(e){return B()(e).filter(function(r){return null!=e[r]}).map(function(r){return"".concat(encodeURIComponent(r),"=").concat(encodeURIComponent(e[r]))}).join("&")}({EMAIL:l.email,email_address_check:"",locale:"en"})});case 5:s(function(e){return(0,F.Z)((0,F.Z)({},e),{},{status:"sent"})}),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(2),s(function(e){return(0,F.Z)((0,F.Z)({},e),{},{status:"failure"})});case 11:case"end":return r.stop()}},_callee,null,[[2,8]])})),function(e){return r.apply(this,arguments)});return"sent"===l.status?(0,Y.jsxs)(U.Z,{icon:o||(o=(0,Y.jsx)(N.Z,{fontSize:"small"})),severity:"success",sx:[function(e){return(0,F.Z)({fontWeight:"medium",bgcolor:"success.50",border:"1px solid",borderColor:"success.200",color:"success.900"},e.applyDarkStyles({color:"success.200",bgcolor:(0,P.Fq)(e.palette.success[700],.1),borderColor:(0,P.Fq)(e.palette.success[600],.3)}))}],children:["Go to your email and open the ",n||(n=(0,Y.jsx)("strong",{children:"confirmation email"}))," to confirm your subscription."]}):(0,Y.jsxs)(G,{onSubmit:c,sx:t,children:[(0,Y.jsx)(L.Z,{htmlFor:"email-subscribe",sx:{typography:"caption",color:"text.secondary",fontWeight:"medium"},children:"Your email"}),(0,Y.jsxs)(g.Z,{sx:{display:"flex",flexDirection:{xs:"column",sm:"row"},mt:1,gap:1,width:{xs:"100%",sm:"auto"},maxWidth:{xs:"100%",sm:320}},children:[(0,Y.jsx)(H.ZP,{id:"email-subscribe",name:"email",type:"email",placeholder:"example@email.com",value:l.email,onChange:function(e){return s({email:e.target.value,status:"initial"})},inputProps:{required:!0},sx:[function(e){var r;return r={typography:"body1",flexGrow:1,minWidth:220,borderRadius:"8px",border:"1px solid",borderColor:"grey.200",bgcolor:"#FFF",boxShadow:"inset 0 1px 2px ".concat(e.palette.grey[50],", 0 2px .5px ").concat((0,P.Fq)(e.palette.grey[100],.5)),"&:hover":{borderColor:"grey.300",boxShadow:"inset 0 1px 2px ".concat(e.palette.grey[100])}},(0,M.Z)(r,"&.".concat(W.Z.focused),{boxShadow:"0 0 0 3px ".concat(e.palette.primary[200]),borderColor:"primary.500"}),(0,M.Z)(r,"& .".concat(W.Z.input),{borderRadius:e.shape.borderRadius,py:1,px:1.5}),r},function(e){return e.applyDarkStyles((0,M.Z)({bgcolor:"primaryDark.800",borderColor:(0,P.Fq)(e.palette.primaryDark[600],.8),boxShadow:"inset 0 1px 1px ".concat(e.palette.primaryDark[900],", 0 2px .5px ").concat(e.palette.common.black),"&:hover":{borderColor:"primaryDark.500",boxShadow:"inset 0 1px 2px ".concat(e.palette.common.black)}},"&.".concat(W.Z.focused),{boxShadow:"0 0 0 3px ".concat(e.palette.primary[800]),borderColor:"primary.400"}))}]}),(0,Y.jsx)(E.Z,{variant:"outlined",disabled:"loading"===l.status,type:"submit",children:"Subscribe"})]}),"failure"===l.status&&(0,Y.jsx)(O.Z,{sx:function(e){return(0,F.Z)({mt:1,fontWeight:"semiBold",color:"error.700"},e.applyDarkStyles({color:"error.400"}))},children:"Oops! Something went wrong, please try again later."})]})}var K=t(13023),V=t(36277),J=t(11800),X=t(9984);function SvgStackOverflow(e){return(0,Y.jsx)(X.Z,(0,F.Z)((0,F.Z)({},e),{},{children:i||(i=(0,Y.jsx)("path",{d:"M19.04 20.04v-5.87h1.99V22H3v-7.83h2v5.87h14.05-.01ZM6.98 18.09h10.05v-1.96H6.99v1.96Zm.25-4.45 9.8 2 .42-1.89-9.8-2.02-.41 1.9-.01.01ZM8.5 9l9.07 4.15.84-1.78L9.34 7.2 8.5 9V9Zm2.53-4.38 7.69 6.28 1.27-1.49-7.69-6.28-1.26 1.49ZM16.01 0l-1.64 1.2 6 7.87L22 7.88 16 0Z"}))}))}var $=t(12744),ee=t(45399);function AppFooter(e){var r=e.stackOverflowUrl;return(0,Y.jsxs)(b.Z,{component:"footer",children:[(0,Y.jsxs)(g.Z,{sx:{py:{xs:4,sm:8},display:"grid",gridAutoColumns:"1fr",alignItems:"flex-start",justifyContent:"space-between",gap:4,gridTemplateColumns:{xs:"1fr",sm:"1fr",md:"1fr 1.75fr",lg:"1fr 1fr"},gridTemplateRows:"auto","& a:not(.MuiIconButton-root)":{pt:.5,pb:.5,color:"text.secondary",typography:"body2","&:hover":{color:"primary.main",textDecoration:"underline"}}},children:[(0,Y.jsxs)("div",{children:[(0,Y.jsx)(J.r,{prefetch:!1,href:"/","aria-label":"Go to homepage",sx:{mb:2},children:a||(a=(0,Y.jsx)(D.Z,{height:28,width:91}))}),l||(l=(0,Y.jsx)(Z.Z,{variant:"body2",fontWeight:"semiBold",gutterBottom:!0,children:"Keep up to date"})),(0,Y.jsx)(Z.Z,{variant:"body2",color:"text.secondary",sx:{mb:1},children:"Join our newsletter for regular updates. No spam ever."}),s||(s=(0,Y.jsx)(EmailSubscribe,{}))]}),(0,Y.jsxs)(g.Z,{sx:{display:"grid",gridTemplateColumns:{xs:"1fr 1fr",md:"1fr 1fr 1fr 1fr"},gridAutoColumns:"1fr",gap:2},children:[(0,Y.jsxs)(g.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,Y.jsx)(Z.Z,{fontWeight:"semiBold",variant:"body2",sx:{mb:.5},children:"Products"}),(0,Y.jsx)(J.r,{prefetch:!1,href:ee.bQ.index["stoked-ui"].url("product"),children:"Stoked UI"}),(0,Y.jsx)(J.r,{prefetch:!1,href:ee.bQ.getFeatureUrl("stoked-ui","file-explorer","doc"),children:"File Explorer"}),(0,Y.jsx)(J.r,{prefetch:!1,href:ee.bQ.getFeatureUrl("stoked-ui","media-selector","doc"),children:"Media Selector"}),(0,Y.jsx)(J.r,{prefetch:!1,href:ee.bQ.index["stoked-consulting"].url("product"),children:"Consulting"})]}),(0,Y.jsxs)(g.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,Y.jsx)(Z.Z,{fontWeight:"semiBold",variant:"body2",sx:{mb:.5},children:"Explore"}),(0,Y.jsx)(J.r,{prefetch:!1,href:K.Z.documentation,children:"Documentation"}),(0,Y.jsx)(J.r,{prefetch:!1,href:K.Z.blog,children:"Blog"}),(0,Y.jsx)(J.r,{prefetch:!1,href:K.Z.showcase,children:"Showcase"}),(0,Y.jsx)(J.r,{prefetch:!1,href:K.Z.coreRoadmap,children:"Roadmap"})]}),(0,Y.jsxs)(g.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,Y.jsx)(Z.Z,{fontWeight:"semiBold",variant:"body2",sx:{mb:.5},children:"Company"}),(0,Y.jsx)(J.r,{prefetch:!1,href:K.Z.about,children:"About"}),(0,Y.jsx)(J.r,{prefetch:!1,href:K.Z.vision,children:"Vision"}),(0,Y.jsx)(J.r,{prefetch:!1,href:K.Z.support,children:"Support"}),(0,Y.jsx)(J.r,{prefetch:!1,href:K.Z.privacyPolicy,children:"Privacy policy"}),c||(c=(0,Y.jsx)(J.r,{prefetch:!1,target:"_blank",rel:"noopener",href:"mailto:contact@mui.com",children:"Contact us"}))]})]})]}),d||(d=(0,Y.jsx)(y.Z,{})),(0,Y.jsxs)(k.Z,{direction:{xs:"column",sm:"row"},alignItems:"center",justifyContent:{sm:"space-between"},gap:{xs:2,sm:1},sx:{my:4},children:[(0,Y.jsxs)(Z.Z,{color:"text.tertiary",variant:"caption",fontWeight:400,children:["Copyright \xa9 ",new Date().getFullYear()," Stoked UI"]}),(0,Y.jsxs)(k.Z,{spacing:1,direction:"row",flexWrap:"wrap",useFlexGap:!0,children:[p||(p=(0,Y.jsx)(j.Z,{target:"_blank",rel:"noopener",href:"https://github.com/mui","aria-label":"github",title:"GitHub",size:"small",children:(0,Y.jsx)(v.Z,{fontSize:"small"})})),(0,Y.jsx)(j.Z,{target:"_blank",rel:"noopener",href:K.Z.rssFeed,"aria-label":"RSS Feed",title:"RSS Feed",size:"small",children:u||(u=(0,Y.jsx)(C.Z,{fontSize:"small"}))}),(0,Y.jsx)(j.Z,{target:"_blank",rel:"noopener",href:"https://stokedconsulting.slack.com","aria-label":"slack",title:"Slack",size:"small",children:(0,Y.jsx)($.Z,{sx:{color:"white"},variant:"monochrome",fontSize:"small"})}),h||(h=(0,Y.jsx)(j.Z,{target:"_blank",rel:"noopener",href:"https://www.linkedin.com/company/mui/","aria-label":"linkedin",title:"LinkedIn",size:"small",children:(0,Y.jsx)(S.Z,{fontSize:"small"})})),x||(x=(0,Y.jsx)(j.Z,{target:"_blank",rel:"noopener",href:"https://www.youtube.com/@MUI_hq","aria-label":"YouTube",title:"YouTube",size:"small",children:(0,Y.jsx)(w.Z,{fontSize:"small"})})),f||(f=(0,Y.jsx)(j.Z,{target:"_blank",rel:"noopener",href:"https://stoked-ui.github.io/r/discord/","aria-label":"Discord",title:"Discord",size:"small",children:(0,Y.jsx)(V.Z,{fontSize:"small"})})),r?(0,Y.jsx)(j.Z,{target:"_blank",rel:"noopener",href:r,"aria-label":"Stack\xa0Overflow",title:"Stack\xa0Overflow",size:"small",children:m||(m=(0,Y.jsx)(SvgStackOverflow,{fontSize:"small"}))}):null]})]})]})}},71037:function(e,r,t){t.d(r,{Z:function(){return AppHeader}});var o,n,i,a,l,s,c,d,p,u,h,x,f=t(5652),m=t(85470),g=t(57809),b=t(21174),y=t(25411),Z=t(26719),j=t(82665),k=t(31057),v=t(58048),S=t(53710),w=t(36063),C=t(51041),D=t.n(C),M=t(92379),I=t(46568),F=t(13023),R=t(45399),z=t(11800),T=t(651),B=(0,f.ZP)("nav")(function(e){var r=e.theme;return[{"& > div":{cursor:"default"},"& ul":{padding:0,margin:0,listStyle:"none",display:"flex"},"& li":(0,w.Z)((0,w.Z)({},r.typography.body2),{},{color:r.palette.text.secondary,fontWeight:r.typography.fontWeightSemiBold,"& > a, & > button":{display:"inline-block",color:"rgb(182, 190, 201)",font:"inherit",textDecoration:"none",padding:r.spacing("6px","8px"),borderRadius:r.shape.borderRadius,border:"1px solid transparent","&:hover":{color:r.palette.text.primary,backgroundColor:r.palette.grey[50],borderColor:r.palette.grey[100],"@media (hover: none)":{backgroundColor:"initial"}},"&:focus-visible":{outline:"3px solid ".concat((0,m.Fq)(r.palette.primary[500],.5)),outlineOffset:"2px"}}})},r.applyDarkStyles({"& li":{"& > a, & > button":{"&:hover":{color:r.palette.primary[50],backgroundColor:(0,m.Fq)(r.palette.primaryDark[700],.8),borderColor:r.palette.divider}}}})]}),_=D()(R.bQ);function HeaderNavBar(){var e=M.useState(null),r=(0,S.Z)(e,2),t=r[0],o=r[1],n=M.useState(null),i=(0,S.Z)(n,2),a=i[0],l=i[1],s=M.useRef(null),c=M.useRef(null),d=M.useRef(null);M.useEffect(function(){if("number"==typeof a){var e;null===(e=document.getElementById(_[a]))||void 0===e||e.focus()}},[a]);var p=M.useMemo(function(){return(0,I.Z)(o,40)},[o]);M.useEffect(function(){return function(){p.clear()}},[p]);var u={handleClickMenu:function(e){return function(){p.clear(),o(t?null:e)}},setSubMenuOpenUndebounce:function(e){return function(){p.clear(),o(e)}},setSubMenuOpenDebounced:p,subMenuOpen:t,setSubMenuOpen:o,currentProductId:function(){if(null!==a)return _[a]}()};return(0,T.jsx)(B,{children:(0,T.jsxs)("ul",{ref:s,onKeyDown:function(e){var r;if("products"===t)r=c.current;else{if("docs"!==t)return;r=d.current}"ArrowDown"===e.key&&"products"===t&&(e.preventDefault(),l(function(e){return null===e||e===_.length-1?0:e+1})),"ArrowUp"===e.key&&"products"===t&&(e.preventDefault(),l(function(e){return null===e?0:0===e?_.length-1:e-1})),("Escape"===e.key||"Tab"===e.key)&&(r.focus(),o(null),l(null))},children:[R.Qo.menu((0,w.Z)((0,w.Z)({type:"products"},u),{},{menuRef:c})),R.Qo.menu((0,w.Z)((0,w.Z)({type:"docs"},u),{},{menuRef:d})),(0,T.jsx)("li",{children:(0,T.jsx)(z.r,{href:F.Z.about,children:"About us"})}),(0,T.jsx)("li",{children:(0,T.jsx)(z.r,{href:F.Z.blog,children:"Blog"})})]})})}var A=t(99445),P=t(45584),U=t(47314),E=t(86685),L=t(99641),O=t(8855),H=(0,f.ZP)("a")(function(e){var r=e.theme;return[(0,w.Z)((0,w.Z)({},r.typography.body2),{},{fontWeight:r.typography.fontWeightBold,textDecoration:"none",border:"none",width:"100%",backgroundColor:"transparent",color:r.palette.text.secondary,cursor:"pointer",display:"flex",alignItems:"center",padding:r.spacing(1),borderRadius:r.spacing(1),transition:r.transitions.create("background"),"&:hover, &:focus-visible":{backgroundColor:r.palette.grey[100],"@media (hover: none)":{backgroundColor:"transparent"}}}),r.applyDarkStyles({color:"#fff","&:hover, &:focus-visible":{backgroundColor:r.palette.primaryDark[700],"@media (hover: none)":{backgroundColor:"transparent"}}})]}),W=(0,f.ZP)("ul")({listStyleType:"none",padding:0,margin:0}),N=[{name:"Stoked\xa0UI\xa0Core",description:"Ready-to-use foundational React components, free forever.",href:F.Z.productCore},{name:"Stoked\xa0UI\xa0X",description:"Advanced and powerful components for complex use cases.",href:F.Z.productAdvanced},{name:"Stoked\xa0Consulting\xa0Services",description:"Full stack consulting services.",href:F.Z.productTemplates}],Y=[{name:"Material\xa0UI",description:"Component library that implements Google's Material Design.",href:F.Z.materialDocs},{name:"Joy\xa0UI",description:"Component library that implements SUI's own in-house design principles.",href:F.Z.joyDocs},{name:"Base\xa0UI",description:"Unstyled React components and low-level hooks.",href:F.Z.baseDocs},{name:"SUI\xa0System",description:"CSS utilities for rapidly laying out custom designs.",href:F.Z.systemDocs},{name:"SUI\xa0X",description:"Advanced components for complex use cases.",href:F.Z.xIntro},{name:"Toolpad",description:"Low-code admin builder",href:F.Z.toolpadStudioDocs,chip:"Beta"}];function HeaderNavDropdown(){var e=M.useState(!1),r=(0,S.Z)(e,2),t=r[0],n=r[1],i=M.useState(!0),a=(0,S.Z)(i,2),l=a[0],s=a[1],c=M.useState(!1),d=(0,S.Z)(c,2),p=d[0],u=d[1],h=M.useRef(null);return(0,T.jsxs)(M.Fragment,{children:[(0,T.jsx)(k.Z,{color:"primary","aria-label":"Menu",ref:h,disableRipple:!0,onClick:function(){return n(function(e){return!e})},sx:(0,w.Z)({position:"relative","& rect":{transformOrigin:"center",transition:"0.2s"}},t&&{"& rect:first-of-type":{transform:"translate(1.5px, 1.6px) rotateZ(-45deg)"},"& rect:last-of-type":{transform:"translate(1.5px, -1.2px) rotateZ(45deg)"}}),children:o||(o=(0,T.jsx)(O.Z,{}))}),(0,T.jsx)(U.d,{onClickAway:function(e){h.current.contains(e.target)||n(!1)},children:(0,T.jsx)(A.Z,{in:t,sx:function(e){return(0,w.Z)({position:"fixed",top:56,left:0,right:0,boxShadow:"0px 16px 20px rgba(170, 180, 190, 0.3)"},e.applyDarkStyles({boxShadow:"0px 16px 20px rgba(0, 0, 0, 0.8)"}))},children:(0,T.jsx)(b.Z,{sx:{p:2,bgcolor:"background.default",maxHeight:"calc(100vh - 56px)",overflow:"auto"},children:(0,T.jsxs)(W,{sx:function(e){return{"& ul":(0,w.Z)((0,w.Z)({borderLeft:"1px solid",borderColor:"grey.100"},e.applyDarkStyles({borderColor:"primaryDark.700"})),{},{pl:1,pb:1,ml:1})}},children:[(0,T.jsxs)("li",{children:[(0,T.jsxs)(H,{as:"button",onClick:function(){return s(function(e){return!e})},sx:{justifyContent:"space-between"},children:["Products",(0,T.jsx)(L.Z,{color:"primary",sx:{transition:"0.3s",transform:l?"rotate(-180deg)":"rotate(0)"}})]}),(0,T.jsx)(A.Z,{in:l,children:(0,T.jsx)(W,{children:N.map(function(e){return(0,T.jsx)("li",{children:(0,T.jsxs)(H,{href:e.href,as:z.r,noLinkStyle:!0,sx:{flexDirection:"column",alignItems:"initial"},children:[(0,T.jsxs)(b.Z,{sx:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[e.name,e.chip?(0,T.jsx)(P.Z,{size:"small",label:e.chip,color:"primary",variant:"outlined"}):null]}),(0,T.jsx)(E.Z,{variant:"body2",color:"text.secondary",children:e.description})]})},e.name)})})})]}),(0,T.jsxs)("li",{children:[(0,T.jsxs)(H,{as:"button",onClick:function(){return u(function(e){return!e})},sx:{justifyContent:"space-between"},children:["Docs",(0,T.jsx)(L.Z,{color:"primary",sx:{transition:"0.3s",transform:p?"rotate(-180deg)":"rotate(0)"}})]}),(0,T.jsx)(A.Z,{in:p,children:(0,T.jsx)(W,{children:Y.map(function(e){return(0,T.jsx)("li",{children:(0,T.jsxs)(H,{href:e.href,as:z.r,noLinkStyle:!0,sx:{flexDirection:"column",alignItems:"initial"},children:[(0,T.jsxs)(b.Z,{sx:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[e.name,e.chip?(0,T.jsx)(P.Z,{size:"small",label:e.chip,color:"primary",variant:"outlined"}):null]}),(0,T.jsx)(E.Z,{variant:"body2",color:"text.secondary",children:e.description})]})},e.name)})})})]}),(0,T.jsx)("li",{children:(0,T.jsx)(H,{href:F.Z.pricing,as:z.r,noLinkStyle:!0,children:"Pricing"})}),(0,T.jsx)("li",{children:(0,T.jsx)(H,{href:F.Z.about,as:z.r,noLinkStyle:!0,children:"About us"})}),(0,T.jsx)("li",{children:(0,T.jsx)(H,{href:F.Z.blog,as:z.r,noLinkStyle:!0,children:"Blog"})})]})})})})]})}var q=t(38633),Q=t(23404),G=t(63470),K=t(37794),V=t(77216);function CssVarsModeToggle(e){var r=(0,q.tv)(),t=r.mode,o=r.systemMode,a=r.setMode,l="system"===t?o:t;return(0,T.jsx)(j.Z,{title:"dark"===l?"Turn on the light":"Turn off the light",children:(0,T.jsx)(k.Z,{color:"primary",disableTouchRipple:!0,disabled:!l,onClick:function(){var r="dark"===l?"light":"dark";e.onChange(r),a(r)},children:l?({light:n||(n=(0,T.jsx)(G.Z,{fontSize:"small"})),dark:i||(i=(0,T.jsx)(K.Z,{fontSize:"small"}))})[l]:null})})}function ThemeModeToggle(){var e=(0,V.Y8)(),r=e.mode,t=e.systemMode,o=e.setMode,n="system"===r?t:r,i=(0,Q.Z)();return null===r?a||(a=(0,T.jsx)(k.Z,{color:"primary",disableTouchRipple:!0})):i.vars?(0,T.jsx)(CssVarsModeToggle,{onChange:o}):(0,T.jsx)(j.Z,{title:"dark"===n?"Turn on the light":"Turn off the light",children:(0,T.jsx)(k.Z,{color:"primary",disableTouchRipple:!0,onClick:function(){o("dark"===n?"light":"dark")},children:"dark"===n?l||(l=(0,T.jsx)(K.Z,{fontSize:"small"})):s||(s=(0,T.jsx)(G.Z,{fontSize:"small"}))})})}var J=t(45802),X=t(22318),$=t(51251),ee=(0,f.ZP)("header")(function(e){var r=e.theme;return[{position:"sticky",top:0,transition:r.transitions.create("top"),zIndex:r.zIndex.appBar,backdropFilter:"blur(8px)",boxShadow:"inset 0px -1px 1px ".concat(r.palette.grey[100]),backgroundColor:"rgba(255,255,255,0.8)"},r.applyDarkStyles({boxShadow:"inset 0px -1px 1px ".concat(r.palette.primaryDark[700]),backgroundColor:(0,m.Fq)(r.palette.primaryDark[900],.7)})]});function AppHeader(e){var r=e.gitHubRepository,t=(0,X.qM)();return(0,T.jsxs)(ee,{children:[(0,T.jsx)(g.Z,{styles:{":root":{"--MuiDocs-header-height":"".concat(60,"px")}}}),(0,T.jsxs)(Z.Z,{sx:{display:"flex",alignItems:"center",minHeight:60},children:[(0,T.jsx)(b.Z,{component:z.r,href:"/","aria-label":"Go to homepage",sx:{lineHeight:0,mr:2},children:c||(c=(0,T.jsx)($.Z,{width:30}))}),(0,T.jsx)(b.Z,{sx:{display:{xs:"none",md:"initial"}},children:d||(d=(0,T.jsx)(HeaderNavBar,{}))}),(0,T.jsx)(b.Z,{sx:{ml:"auto"}}),(0,T.jsxs)(y.Z,{direction:"row",spacing:1,children:[p||(p=(0,T.jsx)(J.ji,{})),(0,T.jsx)(j.Z,{title:t("appFrame.github"),enterDelay:300,children:(0,T.jsx)(k.Z,{component:"a",color:"primary",href:void 0===r?"https://github.com/stoked-ui/mono":r,target:"_blank",rel:"noopener","data-ga-event-category":"header","data-ga-event-action":"github",children:u||(u=(0,T.jsx)(v.Z,{fontSize:"small"}))})}),h||(h=(0,T.jsx)(ThemeModeToggle,{}))]}),(0,T.jsx)(b.Z,{sx:{display:{md:"none"},ml:1},children:x||(x=(0,T.jsx)(HeaderNavDropdown,{}))})]})]})}}}]);
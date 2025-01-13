(self.webpackChunkblog=self.webpackChunkblog||[]).push([[76],{3750:(e,t,n)=>{"use strict";n.d(t,{in:()=>l,OU:()=>B,Ki:()=>C,kJ:()=>g,x:()=>r,e7:()=>d,J_:()=>x,Gx:()=>k});var s=n(6540),a=n(6849),o=n(9062),i=n(4848);function r(){const e=(0,o.A)(),t=e?.data?.blogMetadata;if(!t)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}const c=s.createContext(null);function l(e){let{children:t,content:n,isBlogPostPage:a=!1}=e;const o=function(e){let{content:t,isBlogPostPage:n}=e;return(0,s.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:n})),[t,n])}({content:n,isBlogPostPage:a});return(0,i.jsx)(c.Provider,{value:o,children:t})}function d(){const e=(0,s.useContext)(c);if(null===e)throw new a.dV("BlogPostProvider");return e}var u=n(9030),m=n(797);const h=e=>new Date(e).toISOString();function p(e){const t=e.map(b);return{author:1===t.length?t[0]:t}}function f(e,t,n){return e?{image:j({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${n}`})}:{}}function g(e){const{siteConfig:t}=(0,m.A)(),{withBaseUrl:n}=(0,u.hH)(),{metadata:{blogDescription:s,blogTitle:a,permalink:o}}=e,i=`${t.url}${o}`;return{"@context":"https://schema.org","@type":"Blog","@id":i,mainEntityOfPage:i,headline:a,description:s,blogPost:e.items.map((e=>function(e,t,n){const{assets:s,frontMatter:a,metadata:o}=e,{date:i,title:r,description:c,lastUpdatedAt:l}=o,d=s.image??a.image,u=a.keywords??[],m=`${t.url}${o.permalink}`,g=l?h(l):void 0;return{"@type":"BlogPosting","@id":m,mainEntityOfPage:m,url:m,headline:r,name:r,description:c,datePublished:i,...g?{dateModified:g}:{},...p(o.authors),...f(d,n,r),...u?{keywords:u}:{}}}(e.content,t,n)))}}function x(){const e=r(),{assets:t,metadata:n}=d(),{siteConfig:s}=(0,m.A)(),{withBaseUrl:a}=(0,u.hH)(),{date:o,title:i,description:c,frontMatter:l,lastUpdatedAt:g}=n,x=t.image??l.image,b=l.keywords??[],j=g?h(g):void 0,v=`${s.url}${n.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":v,mainEntityOfPage:v,url:v,headline:i,name:i,description:c,datePublished:o,...j?{dateModified:j}:{},...p(n.authors),...f(x,a,i),...b?{keywords:b}:{},isPartOf:{"@type":"Blog","@id":`${s.url}${e.blogBasePath}`,name:e.blogTitle}}}function b(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}function j(e){let{imageUrl:t,caption:n}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:n}}var v=n(6347),y=n(6289),N=n(1861),A=n(214);function k(e){const{pathname:t}=(0,v.zy)();return(0,s.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,A.ys)(e.permalink,t))}(e,t)))),[e,t])}function C(e){const t=(0,N.$z)(e,(e=>`${new Date(e.date).getFullYear()}`)),n=Object.entries(t);return n.reverse(),n}function B(e){let{items:t,ulClassName:n,liClassName:s,linkClassName:a,linkActiveClassName:o}=e;return(0,i.jsx)("ul",{className:n,children:t.map((e=>(0,i.jsx)("li",{className:s,children:(0,i.jsx)(y.A,{isNavLink:!0,to:e.permalink,className:a,activeClassName:o,children:e.title})},e.permalink)))})}},2362:(e,t,n)=>{"use strict";n.d(t,{A:()=>_});var s=n(6540),a=n(4848);function o(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=s.Children.toArray(e),n=t.find((e=>s.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),o=t.filter((e=>e!==n)),i=n?.props.children;return{mdxAdmonitionTitle:i,rest:o.length>0?(0,a.jsx)(a.Fragment,{children:o}):null}}(e.children),o=e.title??t;return{...e,...o&&{title:o},children:n}}var i=n(4164),r=n(539),c=n(204);const l={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function d(e){let{type:t,className:n,children:s}=e;return(0,a.jsx)("div",{className:(0,i.A)(c.G.common.admonition,c.G.common.admonitionType(t),l.admonition,n),children:s})}function u(e){let{icon:t,title:n}=e;return(0,a.jsxs)("div",{className:l.admonitionHeading,children:[(0,a.jsx)("span",{className:l.admonitionIcon,children:t}),n]})}function m(e){let{children:t}=e;return t?(0,a.jsx)("div",{className:l.admonitionContent,children:t}):null}function h(e){const{type:t,icon:n,title:s,children:o,className:i}=e;return(0,a.jsxs)(d,{type:t,className:i,children:[s||n?(0,a.jsx)(u,{title:s,icon:n}):null,(0,a.jsx)(m,{children:o})]})}function p(e){return(0,a.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const f={icon:(0,a.jsx)(p,{}),title:(0,a.jsx)(r.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function g(e){return(0,a.jsx)(h,{...f,...e,className:(0,i.A)("alert alert--secondary",e.className),children:e.children})}function x(e){return(0,a.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const b={icon:(0,a.jsx)(x,{}),title:(0,a.jsx)(r.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function j(e){return(0,a.jsx)(h,{...b,...e,className:(0,i.A)("alert alert--success",e.className),children:e.children})}function v(e){return(0,a.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const y={icon:(0,a.jsx)(v,{}),title:(0,a.jsx)(r.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function N(e){return(0,a.jsx)(h,{...y,...e,className:(0,i.A)("alert alert--info",e.className),children:e.children})}function A(e){return(0,a.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const k={icon:(0,a.jsx)(A,{}),title:(0,a.jsx)(r.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function C(e){return(0,a.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const B={icon:(0,a.jsx)(C,{}),title:(0,a.jsx)(r.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const w={icon:(0,a.jsx)(A,{}),title:(0,a.jsx)(r.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const L={...{note:g,tip:j,info:N,warning:function(e){return(0,a.jsx)(h,{...k,...e,className:(0,i.A)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,a.jsx)(h,{...B,...e,className:(0,i.A)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,a.jsx)(g,{title:"secondary",...e}),important:e=>(0,a.jsx)(N,{title:"important",...e}),success:e=>(0,a.jsx)(j,{title:"success",...e}),caution:function(e){return(0,a.jsx)(h,{...w,...e,className:(0,i.A)("alert alert--warning",e.className),children:e.children})}}};function _(e){const t=o(e),n=(s=t.type,L[s]||(console.warn(`No admonition component found for admonition type "${s}". Using Info as fallback.`),L.info));var s;return(0,a.jsx)(n,{...t})}},569:(e,t,n)=>{"use strict";n.d(t,{A:()=>U});var s=n(6540),a=n(4164),o=n(6557),i=n(6682),r=n(539),c=n(3750),l=n(3115),d=n(9303),u=n(4848);function m(e){let{year:t,yearGroupHeadingClassName:n,children:s}=e;return(0,u.jsxs)("div",{role:"group",children:[(0,u.jsx)(d.A,{as:"h3",className:n,children:t}),s]})}function h(e){let{items:t,yearGroupHeadingClassName:n,ListComponent:s}=e;if((0,l.p)().blog.sidebar.groupByYear){const e=(0,c.Ki)(t);return(0,u.jsx)(u.Fragment,{children:e.map((e=>{let[t,a]=e;return(0,u.jsx)(m,{year:t,yearGroupHeadingClassName:n,children:(0,u.jsx)(s,{items:a})},t)}))})}return(0,u.jsx)(s,{items:t})}const p=(0,s.memo)(h),f="sidebar_re4s",g="sidebarItemTitle_pO2u",x="sidebarItemList_Yudw",b="sidebarItem__DBe",j="sidebarItemLink_mo7H",v="sidebarItemLinkActive_I1ZP",y="yearGroupHeading_rMGB",N=e=>{let{items:t}=e;return(0,u.jsx)(c.OU,{items:t,ulClassName:(0,a.A)(x,"clean-list"),liClassName:b,linkClassName:j,linkActiveClassName:v})};function A(e){let{sidebar:t}=e;const n=(0,c.Gx)(t.items);return(0,u.jsx)("aside",{className:"col col--3",children:(0,u.jsxs)("nav",{className:(0,a.A)(f,"thin-scrollbar"),"aria-label":(0,r.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,u.jsx)("div",{className:(0,a.A)(g,"margin-bottom--md"),children:t.title}),(0,u.jsx)(p,{items:n,ListComponent:N,yearGroupHeadingClassName:y})]})})}const k=(0,s.memo)(A);var C=n(3065);const B={yearGroupHeading:"yearGroupHeading_QT03"},w=e=>{let{items:t}=e;return(0,u.jsx)(c.OU,{items:t,ulClassName:"menu__list",liClassName:"menu__list-item",linkClassName:"menu__link",linkActiveClassName:"menu__link--active"})};function L(e){let{sidebar:t}=e;const n=(0,c.Gx)(t.items);return(0,u.jsx)(p,{items:n,ListComponent:w,yearGroupHeadingClassName:B.yearGroupHeading})}function _(e){return(0,u.jsx)(C.GX,{component:L,props:e})}const E=(0,s.memo)(_);function T(e){let{sidebar:t}=e;const n=(0,i.l)();return t?.items.length?"mobile"===n?(0,u.jsx)(E,{sidebar:t}):(0,u.jsx)(k,{sidebar:t}):null}function U(e){const{sidebar:t,toc:n,children:s,...i}=e,r=t&&t.items.length>0;return(0,u.jsx)(o.A,{...i,children:(0,u.jsx)("div",{className:"container margin-vert--lg",children:(0,u.jsxs)("div",{className:"row",children:[(0,u.jsx)(T,{sidebar:t}),(0,u.jsx)("main",{className:(0,a.A)("col",{"col--7":r,"col--9 col--offset-1":!r}),children:s}),n&&(0,u.jsx)("div",{className:"col col--2",children:n})]})})})}},5783:(e,t,n)=>{"use strict";n.d(t,{A:()=>g});n(6540);var s=n(4164),a=n(539),o=n(204),i=n(6289);const r={iconEdit:"iconEdit_Z9Sw"};var c=n(4848);function l(e){let{className:t,...n}=e;return(0,c.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.A)(r.iconEdit,t),"aria-hidden":"true",...n,children:(0,c.jsx)("g",{children:(0,c.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function d(e){let{editUrl:t}=e;return(0,c.jsxs)(i.A,{to:t,className:o.G.common.editThisPage,children:[(0,c.jsx)(l,{}),(0,c.jsx)(a.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}var u=n(8569);function m(e){let{lastUpdatedAt:t}=e;const n=new Date(t),s=(0,u.i)({day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}).format(n);return(0,c.jsx)(a.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,c.jsx)("b",{children:(0,c.jsx)("time",{dateTime:n.toISOString(),itemProp:"dateModified",children:s})})},children:" on {date}"})}function h(e){let{lastUpdatedBy:t}=e;return(0,c.jsx)(a.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,c.jsx)("b",{children:t})},children:" by {user}"})}function p(e){let{lastUpdatedAt:t,lastUpdatedBy:n}=e;return(0,c.jsxs)("span",{className:o.G.common.lastUpdated,children:[(0,c.jsx)(a.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t?(0,c.jsx)(m,{lastUpdatedAt:t}):"",byUser:n?(0,c.jsx)(h,{lastUpdatedBy:n}):""},children:"Last updated{atDate}{byUser}"}),!1]})}const f={lastUpdated:"lastUpdated_JAkA"};function g(e){let{className:t,editUrl:n,lastUpdatedAt:a,lastUpdatedBy:o}=e;return(0,c.jsxs)("div",{className:(0,s.A)("row",t),children:[(0,c.jsx)("div",{className:"col",children:n&&(0,c.jsx)(d,{editUrl:n})}),(0,c.jsx)("div",{className:(0,s.A)("col",f.lastUpdated),children:(a||o)&&(0,c.jsx)(p,{lastUpdatedAt:a,lastUpdatedBy:o})})]})}},900:(e,t,n)=>{"use strict";n.d(t,{A:()=>re});var s=n(6540),a=n(8453),o=n(7143),i=n(9136),r=n(4164),c=n(8532),l=n(3115);function d(){const{prism:e}=(0,l.p)(),{colorMode:t}=(0,c.G)(),n=e.theme,s=e.darkTheme||n;return"dark"===t?s:n}var u=n(204),m=n(8426),h=n.n(m);const p=/title=(?<quote>["'])(?<title>.*?)\1/,f=/\{(?<range>[\d,-]+)\}/,g={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},x={...g,lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},b=Object.keys(g);function j(e,t){const n=e.map((e=>{const{start:n,end:s}=x[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${s})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function v(e,t){let n=e.replace(/\n$/,"");const{language:s,magicComments:a,metastring:o}=t;if(o&&f.test(o)){const e=o.match(f).groups.range;if(0===a.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${o}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=a[0].className,s=h()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(s),code:n}}if(void 0===s)return{lineClassNames:{},code:n};const i=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return j(["js","jsBlock"],t);case"jsx":case"tsx":return j(["js","jsBlock","jsx"],t);case"html":return j(["js","jsBlock","html"],t);case"python":case"py":case"bash":return j(["bash"],t);case"markdown":case"md":return j(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return j(["tex"],t);case"lua":case"haskell":return j(["lua"],t);case"sql":return j(["lua","jsBlock"],t);case"wasm":return j(["wasm"],t);case"vb":case"vba":case"visual-basic":return j(["vb","rem"],t);case"vbnet":return j(["vbnet","rem"],t);case"batch":return j(["rem"],t);case"basic":return j(["rem","f90"],t);case"fsharp":return j(["js","ml"],t);case"ocaml":case"sml":return j(["ml"],t);case"fortran":return j(["f90"],t);case"cobol":return j(["cobol"],t);default:return j(b,t)}}(s,a),r=n.split("\n"),c=Object.fromEntries(a.map((e=>[e.className,{start:0,range:""}]))),l=Object.fromEntries(a.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),d=Object.fromEntries(a.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),u=Object.fromEntries(a.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let h=0;h<r.length;){const e=r[h].match(i);if(!e){h+=1;continue}const t=e.slice(1).find((e=>void 0!==e));l[t]?c[l[t]].range+=`${h},`:d[t]?c[d[t]].start=h:u[t]&&(c[u[t]].range+=`${c[u[t]].start}-${h-1},`),r.splice(h,1)}n=r.join("\n");const m={};return Object.entries(c).forEach((e=>{let[t,{range:n}]=e;h()(n).forEach((e=>{m[e]??=[],m[e].push(t)}))})),{lineClassNames:m,code:n}}const y={codeBlockContainer:"codeBlockContainer_Ckt0"};var N=n(4848);function A(e){let{as:t,...n}=e;const s=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[s,a]=e;const o=t[s];o&&"string"==typeof a&&(n[o]=a)})),n}(d());return(0,N.jsx)(t,{...n,style:s,className:(0,r.A)(n.className,y.codeBlockContainer,u.G.common.codeBlock)})}const k={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function C(e){let{children:t,className:n}=e;return(0,N.jsx)(A,{as:"pre",tabIndex:0,className:(0,r.A)(k.codeBlockStandalone,"thin-scrollbar",n),children:(0,N.jsx)("code",{className:k.codeBlockLines,children:t})})}var B=n(6849);const w={attributes:!0,characterData:!0,childList:!0,subtree:!0};function L(e,t){const[n,a]=(0,s.useState)(),o=(0,s.useCallback)((()=>{a(e.current?.closest("[role=tabpanel][hidden]"))}),[e,a]);(0,s.useEffect)((()=>{o()}),[o]),function(e,t,n){void 0===n&&(n=w);const a=(0,B._q)(t),o=(0,B.Be)(n);(0,s.useEffect)((()=>{const t=new MutationObserver(a);return e&&t.observe(e,o),()=>t.disconnect()}),[e,a,o])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),o())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var _=n(1765);const E={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function T(e){let{line:t,classNames:n,showLineNumbers:s,getLineProps:a,getTokenProps:o}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const i=a({line:t,className:(0,r.A)(n,s&&E.codeLine)}),c=t.map(((e,t)=>(0,N.jsx)("span",{...o({token:e})},t)));return(0,N.jsxs)("span",{...i,children:[s?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)("span",{className:E.codeLineNumber}),(0,N.jsx)("span",{className:E.codeLineContent,children:c})]}):c,(0,N.jsx)("br",{})]})}var U=n(539);function M(e){return(0,N.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,N.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function P(e){return(0,N.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,N.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}const H={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function I(e){let{code:t,className:n}=e;const[a,o]=(0,s.useState)(!1),i=(0,s.useRef)(void 0),c=(0,s.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const s=document.createElement("textarea"),a=document.activeElement;s.value=e,s.setAttribute("readonly",""),s.style.contain="strict",s.style.position="absolute",s.style.left="-9999px",s.style.fontSize="12pt";const o=document.getSelection(),i=o.rangeCount>0&&o.getRangeAt(0);n.append(s),s.select(),s.selectionStart=0,s.selectionEnd=e.length;let r=!1;try{r=document.execCommand("copy")}catch{}s.remove(),i&&(o.removeAllRanges(),o.addRange(i)),a&&a.focus()}(t),o(!0),i.current=window.setTimeout((()=>{o(!1)}),1e3)}),[t]);return(0,s.useEffect)((()=>()=>window.clearTimeout(i.current)),[]),(0,N.jsx)("button",{type:"button","aria-label":a?(0,U.T)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,U.T)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,U.T)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,r.A)("clean-btn",n,H.copyButton,a&&H.copyButtonCopied),onClick:c,children:(0,N.jsxs)("span",{className:H.copyButtonIcons,"aria-hidden":"true",children:[(0,N.jsx)(M,{className:H.copyButtonIcon}),(0,N.jsx)(P,{className:H.copyButtonSuccessIcon})]})})}function S(e){return(0,N.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,N.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}const z={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function $(e){let{className:t,onClick:n,isEnabled:s}=e;const a=(0,U.T)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,N.jsx)("button",{type:"button",onClick:n,className:(0,r.A)("clean-btn",t,s&&z.wordWrapButtonEnabled),"aria-label":a,title:a,children:(0,N.jsx)(S,{className:z.wordWrapButtonIcon,"aria-hidden":"true"})})}function R(e){let{children:t,className:n="",metastring:a,title:o,showLineNumbers:i,language:c}=e;const{prism:{defaultLanguage:u,magicComments:m}}=(0,l.p)(),h=function(e){return e?.toLowerCase()}(c??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}(n)??u),f=d(),g=function(){const[e,t]=(0,s.useState)(!1),[n,a]=(0,s.useState)(!1),o=(0,s.useRef)(null),i=(0,s.useCallback)((()=>{const n=o.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[o,e]),r=(0,s.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=o.current,n=e>t||o.current.querySelector("code").hasAttribute("style");a(n)}),[o]);return L(o,r),(0,s.useEffect)((()=>{r()}),[e,r]),(0,s.useEffect)((()=>(window.addEventListener("resize",r,{passive:!0}),()=>{window.removeEventListener("resize",r)})),[r]),{codeBlockRef:o,isEnabled:e,isCodeScrollable:n,toggle:i}}(),x=function(e){return e?.match(p)?.groups.title??""}(a)||o,{lineClassNames:b,code:j}=v(t,{metastring:a,language:h,magicComments:m}),y=i??function(e){return Boolean(e?.includes("showLineNumbers"))}(a);return(0,N.jsxs)(A,{as:"div",className:(0,r.A)(n,h&&!n.includes(`language-${h}`)&&`language-${h}`),children:[x&&(0,N.jsx)("div",{className:k.codeBlockTitle,children:x}),(0,N.jsxs)("div",{className:k.codeBlockContent,children:[(0,N.jsx)(_.f4,{theme:f,code:j,language:h??"text",children:e=>{let{className:t,style:n,tokens:s,getLineProps:a,getTokenProps:o}=e;return(0,N.jsx)("pre",{tabIndex:0,ref:g.codeBlockRef,className:(0,r.A)(t,k.codeBlock,"thin-scrollbar"),style:n,children:(0,N.jsx)("code",{className:(0,r.A)(k.codeBlockLines,y&&k.codeBlockLinesWithNumbering),children:s.map(((e,t)=>(0,N.jsx)(T,{line:e,getLineProps:a,getTokenProps:o,classNames:b[t],showLineNumbers:y},t)))})})}}),(0,N.jsxs)("div",{className:k.buttonGroup,children:[(g.isEnabled||g.isCodeScrollable)&&(0,N.jsx)($,{className:k.codeButton,onClick:()=>g.toggle(),isEnabled:g.isEnabled}),(0,N.jsx)(I,{className:k.codeButton,code:j})]})]})]})}function G(e){let{children:t,...n}=e;const a=(0,i.A)(),o=function(e){return s.Children.toArray(e).some((e=>(0,s.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),r="string"==typeof o?R:C;return(0,N.jsx)(r,{...n,children:o},String(a))}function O(e){return(0,N.jsx)("code",{...e})}var V=n(6289);var D=n(5246),W=n(8672);const q={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function F(e){return!!e&&("SUMMARY"===e.tagName||F(e.parentElement))}function J(e,t){return!!e&&(e===t||J(e.parentElement,t))}function Y(e){let{summary:t,children:n,...a}=e;(0,D.A)().collectAnchor(a.id);const o=(0,i.A)(),c=(0,s.useRef)(null),{collapsed:l,setCollapsed:d}=(0,W.u)({initialState:!a.open}),[u,m]=(0,s.useState)(a.open),h=s.isValidElement(t)?t:(0,N.jsx)("summary",{children:t??"Details"});return(0,N.jsxs)("details",{...a,ref:c,open:u,"data-collapsed":l,className:(0,r.A)(q.details,o&&q.isBrowser,a.className),onMouseDown:e=>{F(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;F(t)&&J(t,c.current)&&(e.preventDefault(),l?(d(!1),m(!0)):d(!0))},children:[h,(0,N.jsx)(W.N,{lazy:!1,collapsed:l,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{d(e),m(!e)},children:(0,N.jsx)("div",{className:q.collapsibleContent,children:n})})]})}const Z={details:"details_b_Ee"},K="alert alert--info";function Q(e){let{...t}=e;return(0,N.jsx)(Y,{...t,className:(0,r.A)(K,Z.details,t.className)})}function X(e){const t=s.Children.toArray(e.children),n=t.find((e=>s.isValidElement(e)&&"summary"===e.type)),a=(0,N.jsx)(N.Fragment,{children:t.filter((e=>e!==n))});return(0,N.jsx)(Q,{...e,summary:n,children:a})}var ee=n(9303);function te(e){return(0,N.jsx)(ee.A,{...e})}const ne={containsTaskList:"containsTaskList_mC6p"};function se(e){if(void 0!==e)return(0,r.A)(e,e?.includes("contains-task-list")&&ne.containsTaskList)}const ae={img:"img_ev3q"};var oe=n(2362);const ie={Head:o.A,details:X,Details:X,code:function(e){return function(e){return void 0!==e.children&&s.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))}(e)?(0,N.jsx)(O,{...e}):(0,N.jsx)(G,{...e})},a:function(e){return(0,N.jsx)(V.A,{...e})},pre:function(e){return(0,N.jsx)(N.Fragment,{children:e.children})},ul:function(e){return(0,N.jsx)("ul",{...e,className:se(e.className)})},li:function(e){return(0,D.A)().collectAnchor(e.id),(0,N.jsx)("li",{...e})},img:function(e){return(0,N.jsx)("img",{decoding:"async",loading:"lazy",...e,className:(t=e.className,(0,r.A)(t,ae.img))});var t},h1:e=>(0,N.jsx)(te,{as:"h1",...e}),h2:e=>(0,N.jsx)(te,{as:"h2",...e}),h3:e=>(0,N.jsx)(te,{as:"h3",...e}),h4:e=>(0,N.jsx)(te,{as:"h4",...e}),h5:e=>(0,N.jsx)(te,{as:"h5",...e}),h6:e=>(0,N.jsx)(te,{as:"h6",...e}),admonition:oe.A,mermaid:()=>null};function re(e){let{children:t}=e;return(0,N.jsx)(a.x,{components:ie,children:t})}},3953:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});n(6540);var s=n(4164),a=n(6289);const o={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var i=n(4848);function r(e){let{permalink:t,label:n,count:r,description:c}=e;return(0,i.jsxs)(a.A,{href:t,title:c,className:(0,s.A)(o.tag,r?o.tagWithCount:o.tagRegular),children:[n,r&&(0,i.jsx)("span",{children:r})]})}},8569:(e,t,n)=>{"use strict";n.d(t,{i:()=>a});var s=n(797);function a(e){void 0===e&&(e={});const{i18n:{currentLocale:t}}=(0,s.A)(),n=function(){const{i18n:{currentLocale:e,localeConfigs:t}}=(0,s.A)();return t[e].calendar}();return new Intl.DateTimeFormat(t,{calendar:n,...e})}},8426:(e,t)=>{function n(e){let t,n=[];for(let s of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(s))n.push(parseInt(s,10));else if(t=s.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,s,a,o]=t;if(s&&o){s=parseInt(s),o=parseInt(o);const e=s<o?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(o+=e);for(let t=s;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},8453:(e,t,n)=>{"use strict";n.d(t,{R:()=>i,x:()=>r});var s=n(6540);const a={},o=s.createContext(a);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);
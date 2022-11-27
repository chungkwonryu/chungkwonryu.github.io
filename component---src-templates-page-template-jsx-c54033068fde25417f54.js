"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[759],{1027:function(e,t,l){var n=l(7294);t.Z=e=>{let{title:t}=e;return n.createElement("header",{className:"border-b-2 border-b-stone-300"},n.createElement("div",{className:"mx-auto max-w-full py-0 px-6 w-full"},n.createElement("h1",{className:"text-3xl font-bold m-0 py-8"},t)))}},7043:function(e,t,l){var n=l(7294);t.Z=e=>{let{content:t,sidebar:l}=e;return n.createElement("section",{className:"flex flex-col lg:flex-row mx-auto max-w-full py-0 px-6 w-full"},n.createElement("div",{className:"w-full pb-8 pt-3 lg:pr-12 lg:w-[calc(100%-330px)]"},t),n.createElement("div",{className:"w-full pb-8 pt-3 lg:w-[330px]"},l))}},6846:function(e,t,l){var n=l(4578),r=l(7294),a=l(3723),c=l(4593),s=l(4479),i=l.n(s),m=l(5868);let o=function(e){function t(){return e.apply(this,arguments)||this}return(0,n.Z)(t,e),t.prototype.render=function(){const{postNode:e,postPath:t,postSEO:l}=this.props;let n,s,o,p,u="";if(l){const l=e.frontmatter;({title:n}=l),s=l.description?l.description:e.excerpt,o=l.keywords,l.cover&&(u=(0,a.d)(l.cover)),p=i().siteUrl+i().pathPrefix+t}else n=i().siteTitle,s=i().siteDescription,u=i().siteLogo;u=i().siteUrl+i().pathPrefix+u;const E=i().siteUrl+i().pathPrefix,d=[{"@context":"http://schema.org","@type":"WebSite",url:E,name:n,alternateName:i().siteTitleAlt?i().siteTitleAlt:""}];return l&&d.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":p,name:n,image:u}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:E,name:n,alternateName:i().siteTitleAlt?i().siteTitleAlt:"",headline:n,image:{"@type":"ImageObject",url:u},description:s}),r.createElement(c.Z,null,r.createElement("meta",{name:"description",content:s}),r.createElement("meta",{name:"image",content:u}),o&&r.createElement("meta",{name:"keywords",content:o}),r.createElement("link",{rel:"canonical",href:(0,m.sw)(p||i().siteUrl)}),r.createElement("script",{type:"application/ld+json"},JSON.stringify(d)),r.createElement("meta",{property:"og:url",content:l?p:E}),l?r.createElement("meta",{property:"og:type",content:"article"}):null,r.createElement("meta",{property:"og:title",content:n}),r.createElement("meta",{property:"og:description",content:s}),r.createElement("meta",{property:"og:image",content:u}),r.createElement("meta",{property:"fb:app_id",content:i().siteFBAppID?i().siteFBAppID:""}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{name:"twitter:creator",content:i().userTwitter?i().userTwitter:""}),r.createElement("meta",{name:"twitter:title",content:n}),r.createElement("meta",{name:"twitter:description",content:s}),r.createElement("meta",{name:"twitter:image",content:u}))},t}(r.Component);t.Z=o},7016:function(e,t,l){l.d(t,{Z:function(){return v}});var n=l(7294),r=l(1883);var a=e=>{let{children:t}=e;return n.createElement("aside",{className:"py-4"},t)};var c=e=>{let{title:t}=e;return n.createElement("h3",{className:"uppercase text-3xl mb-4"},n.createElement("small",null,t))},s=l(5868);var i=e=>{let{content:t}=e;return n.createElement(r.Link,{key:t,to:(0,s.IX)(t)},n.createElement("span",{className:"text-sky-500 hover:text-sky-700 text-center mr-2 mb-2 border border-gray-300 inline-block px-3 py-1"},t))},m=l(4479),o=l.n(m);var p=e=>{let{categoryList:t}=e;return n.createElement(a,null,n.createElement(c,{title:o().categoryWidgetTitle}),n.createElement("div",null,t.map((e=>n.createElement(i,{key:e,content:e})))))};var u=e=>{let{content:t}=e;return n.createElement(r.Link,{key:t,to:(0,s.bT)(t)},n.createElement("span",{className:"text-sky-500 hover:text-sky-700 text-center mr-2 mb-2 border border-gray-300 inline-block px-3 py-1"},t))};var E=e=>{let{tagList:t}=e;return n.createElement(a,null,n.createElement(c,{title:o().tagWidgetTitle}),n.createElement("div",null,t.map((e=>n.createElement(u,{key:e,content:e})))))};var d=e=>{let{latestPostEdges:t}=e;const l=(0,s.UI)(t);return n.createElement(a,null,n.createElement(c,{title:o().latestPostsWidgetTitle}),n.createElement("div",{className:"divide-y divide-slate-300"},l.map((e=>n.createElement("div",{key:e.title},n.createElement("span",{className:"block py-2 text-sky-500 hover:text-sky-700"},n.createElement(r.Link,{to:e.slug},e.title)))))))};var g=e=>{let{links:t}=e;return n.createElement(n.Fragment,null,t&&t.length>0&&n.createElement(a,null,n.createElement(c,{title:o().linksWidgetTitle}),n.createElement("div",{className:"divide-y divide-slate-300"},t.map((e=>n.createElement("a",{key:e.label,href:e.url,className:"block py-2 text-sky-500 hover:text-sky-700"},e.label))))))},y=l(4578);let f=function(e){function t(){return e.apply(this,arguments)||this}return(0,y.Z)(t,e),t.prototype.render=function(){return n.createElement(n.Fragment,null,o().hasSearch&&n.createElement(a,null,n.createElement(c,{title:o().searchWidgetTitle}),n.createElement("div",{className:"flex items-center"},n.createElement("form",{method:"GET"},n.createElement("div",{className:"relative text-gray-600 focus-within:text-gray-400"},n.createElement("span",{className:"absolute inset-y-0 left-0 flex items-center pl-2"},n.createElement("button",{type:"submit",className:"p-1 focus:outline-none focus:shadow-outline"},n.createElement("svg",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",className:"w-6 h-6"},n.createElement("path",{d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})))),n.createElement("input",{type:"search",name:"q",className:"py-2 text-sm rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900",placeholder:"Search...",autoComplete:"off"}))))))},t}(n.Component);var h=f;var v=e=>{let{tagList:t,categoryList:l,latestPostEdges:r,links:a}=e;return n.createElement("aside",{className:"w-full h-full"},n.createElement(h,null),r&&n.createElement(d,{latestPostEdges:r}),l&&n.createElement(p,{categoryList:l}),t&&n.createElement(E,{tagList:t}),a&&n.createElement("div",null,n.createElement(g,{links:a})))}},8830:function(e,t,l){l.r(t),l.d(t,{default:function(){return E}});var n=l(7294),r=l(4593),a=l(4762),c=l(1027),s=l(7043),i=l(7016);var m=e=>{let{postNode:t,slug:l}=e;const r=t.frontmatter;return r.id||(r.id=l),n.createElement("article",{className:"prose dark:prose-invert lg:prose-lg"},n.createElement("div",{className:"py-6",dangerouslySetInnerHTML:{__html:t.html}}))},o=l(6846),p=l(4479),u=l.n(p);var E=e=>{let{data:t,pageContext:l}=e;const{slug:p,tagList:E,categoryList:d,latestPostEdges:g}=l,y=t.markdownRemark,f=y.frontmatter.title,h=n.createElement(m,{postNode:y,slug:p}),v=n.createElement(i.Z,{tagList:E,categoryList:d,latestPostEdges:g,links:u().sidebarLinks});return n.createElement(a.Z,null,n.createElement(r.Z,null,n.createElement("title",null,f+" - "+u().siteTitle)),n.createElement(o.Z,{postPath:p,postNode:y,postSEO:!0}),n.createElement(c.Z,{title:f}),n.createElement(s.Z,{content:h,sidebar:v}))}}}]);
//# sourceMappingURL=component---src-templates-page-template-jsx-c54033068fde25417f54.js.map
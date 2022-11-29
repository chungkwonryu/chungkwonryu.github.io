"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[678],{7043:function(e,t,l){var n=l(7294);t.Z=e=>{let{content:t,sidebar:l}=e;return n.createElement("section",{className:"flex flex-col lg:flex-row mx-auto max-w-full py-0 px-6 w-full"},n.createElement("div",{className:"w-full pb-8 pt-3 lg:pr-12 lg:w-[calc(100%-330px)]"},t),n.createElement("div",{className:"w-full pb-8 pt-3 lg:w-[330px]"},l))}},5940:function(e,t,l){var n=l(7294),a=l(5868),r=l(4479),c=l.n(r);t.Z=e=>{let{date:t}=e;return n.createElement("div",{className:"text-neutral-500 pb-4"},c().postOnDate," ",(0,a.p6)(t))}},4801:function(e,t,l){var n=l(7294),a=l(5940),r=l(1883);t.Z=e=>{let{post:t}=e;return n.createElement("div",{className:"mt-4"},n.createElement(r.Link,{to:t.slug,key:t.title},n.createElement("h2",{className:"text-3xl font-bold mb-2 text-sky-500 hover:text-sky-700"},n.createElement("small",null,t.title))),n.createElement("div",{className:"mb-4"},t.excerpt),n.createElement("small",null,n.createElement(a.Z,{date:t.date})))}},975:function(e,t,l){l.d(t,{Z:function(){return E}});var n=l(5785),a=l(7294),r=l(3723),c=l(1883);var s=e=>{let{post:t}=e;return t.cover?a.createElement("div",{className:"max-w-full w-[660px]"},a.createElement(c.Link,{to:t.slug,key:t.title},a.createElement(r.G,{image:(0,r.c)(t.cover),alt:"thumbnail image"}))):null},i=l(4801);var m=e=>{let{post:t,hasThumbnail:l}=e;return a.createElement("article",{key:t.title,className:"flex flex-col py-12 border-b-2 border-slate-600"},l&&a.createElement(s,{post:t}),a.createElement(i.Z,{post:t}))};var o=e=>a.createElement("button",Object.assign({className:"btn-primary"},e)),p=l(4479),u=l.n(p);var E=e=>{const{postList:t,hasThumbnail:l=!0}=e,r=u().postsPerPage,{0:c,1:s}=(0,a.useState)((0,n.Z)(t.slice(0,r))),{0:i,1:p}=(0,a.useState)(!1),{0:E,1:d}=(0,a.useState)(t.length>r);return(0,a.useEffect)((()=>{if(i&&E){const e=c.length,l=e<t.length?t.slice(e,e+u().postsPerPage):[];s([].concat((0,n.Z)(c),(0,n.Z)(l))),p(!1)}d(c.length<t.length)}),[i]),a.createElement(a.Fragment,null,a.createElement("div",null,c.map(((e,t)=>a.createElement(m,{key:e.title,post:e,hasThumbnail:l})))),E&&a.createElement("div",{className:"text-center mt-8 pt-3"},a.createElement(o,{onClick:()=>{p(!0)}},u().btnLoadmore)))}},6846:function(e,t,l){var n=l(4578),a=l(7294),r=l(3723),c=l(4593),s=l(4479),i=l.n(s),m=l(5868);let o=function(e){function t(){return e.apply(this,arguments)||this}return(0,n.Z)(t,e),t.prototype.render=function(){const{postNode:e,postPath:t,postSEO:l}=this.props;let n,s,o,p,u="";if(l){const l=e.frontmatter;({title:n}=l),s=l.description?l.description:e.excerpt,o=l.keywords,l.cover&&(u=(0,r.d)(l.cover)),p=i().siteUrl+i().pathPrefix+t}else n=i().siteTitle,s=i().siteDescription,u=i().siteLogo;u=i().siteUrl+i().pathPrefix+u;const E=i().siteUrl+i().pathPrefix,d=[{"@context":"http://schema.org","@type":"WebSite",url:E,name:n,alternateName:i().siteTitleAlt?i().siteTitleAlt:""}];return l&&d.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":p,name:n,image:u}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:E,name:n,alternateName:i().siteTitleAlt?i().siteTitleAlt:"",headline:n,image:{"@type":"ImageObject",url:u},description:s}),a.createElement(c.Z,null,a.createElement("meta",{name:"description",content:s}),a.createElement("meta",{name:"image",content:u}),o&&a.createElement("meta",{name:"keywords",content:o}),a.createElement("link",{rel:"canonical",href:(0,m.sw)(p||i().siteUrl)}),a.createElement("script",{type:"application/ld+json"},JSON.stringify(d)),a.createElement("meta",{property:"og:url",content:l?p:E}),l?a.createElement("meta",{property:"og:type",content:"article"}):null,a.createElement("meta",{property:"og:title",content:n}),a.createElement("meta",{property:"og:description",content:s}),a.createElement("meta",{property:"og:image",content:u}),a.createElement("meta",{property:"fb:app_id",content:i().siteFBAppID?i().siteFBAppID:""}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.createElement("meta",{name:"twitter:creator",content:i().userTwitter?i().userTwitter:""}),a.createElement("meta",{name:"twitter:title",content:n}),a.createElement("meta",{name:"twitter:description",content:s}),a.createElement("meta",{name:"twitter:image",content:u}))},t}(a.Component);t.Z=o},7016:function(e,t,l){l.d(t,{Z:function(){return y}});var n=l(7294),a=l(1883);var r=e=>{let{children:t}=e;return n.createElement("aside",{className:"py-4"},t)};var c=e=>{let{title:t}=e;return n.createElement("h3",{className:"uppercase text-3xl mb-4"},n.createElement("small",null,t))},s=l(5868);var i=e=>{let{content:t}=e;return n.createElement(a.Link,{key:t,to:(0,s.IX)(t)},n.createElement("span",{className:"text-sky-500 hover:text-sky-700 text-center mr-2 mb-2 border border-gray-300 inline-block px-3 py-1"},t))},m=l(4479),o=l.n(m);var p=e=>{let{categoryList:t}=e;return n.createElement(r,null,n.createElement(c,{title:o().categoryWidgetTitle}),n.createElement("div",null,t.map((e=>n.createElement(i,{key:e,content:e})))))};var u=e=>{let{content:t}=e;return n.createElement(a.Link,{key:t,to:(0,s.bT)(t)},n.createElement("span",{className:"text-sky-500 hover:text-sky-700 text-center mr-2 mb-2 border border-gray-300 inline-block px-3 py-1"},t))};var E=e=>{let{tagList:t}=e;return n.createElement(r,null,n.createElement(c,{title:o().tagWidgetTitle}),n.createElement("div",null,t.map((e=>n.createElement(u,{key:e,content:e})))))};var d=e=>{let{latestPostEdges:t}=e;const l=(0,s.UI)(t);return n.createElement(r,null,n.createElement(c,{title:o().latestPostsWidgetTitle}),n.createElement("div",{className:"divide-y divide-slate-300"},l.map((e=>n.createElement("div",{key:e.title},n.createElement("span",{className:"block py-2 text-sky-500 hover:text-sky-700 cursor-pointer"},n.createElement(a.Link,{to:e.slug},e.title)))))))};var g=e=>{let{links:t}=e;return n.createElement(n.Fragment,null,t&&t.length>0&&n.createElement(r,null,n.createElement(c,{title:o().linksWidgetTitle}),n.createElement("div",{className:"divide-y divide-slate-300"},t.map((e=>n.createElement("a",{key:e.label,href:e.url,className:"block py-2 text-sky-500 hover:text-sky-700"},e.label))))))};var y=e=>{let{tagList:t,categoryList:l,latestPostEdges:a,links:r}=e;return n.createElement("aside",{className:"w-full h-full"},a&&n.createElement(d,{latestPostEdges:a}),l&&n.createElement(p,{categoryList:l}),t&&n.createElement(E,{tagList:t}),r&&n.createElement("div",null,n.createElement(g,{links:r})))}},6558:function(e,t,l){l.r(t);var n=l(4578),a=l(7294),r=l(4593),c=(l(1883),l(5676)),s=l(1027),i=l(7043),m=l(7016),o=l(6846),p=l(975),u=l(5868),E=l(4479),d=l.n(E);let g=function(e){function t(){return e.apply(this,arguments)||this}return(0,n.Z)(t,e),t.prototype.render=function(){const e=this.props.data.allMarkdownRemark.edges,t=(0,u.UI)(e),{tagList:l,categoryList:n}=(0,u.yl)(t),E=a.createElement(a.Fragment,null,a.createElement(p.Z,{postList:t,hasThumbnail:d().homeHasThumbnail})),g=a.createElement(m.Z,{tagList:l,categoryList:n,links:d().sidebarLinks}),y=d().homeHeader?d().siteTitle+" - "+d().homeHeader:""+d().siteTitle;return a.createElement(c.Z,null,a.createElement("div",null,a.createElement(r.Z,{title:d().siteTitle}),a.createElement(o.Z,null),a.createElement(s.Z,{title:y}),a.createElement(i.Z,{content:E,sidebar:g})))},t}(a.Component);t.default=g}}]);
//# sourceMappingURL=component---src-pages-index-js-89a28d230fd80d7463e3.js.map
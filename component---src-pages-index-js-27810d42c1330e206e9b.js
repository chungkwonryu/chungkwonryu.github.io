"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[678],{1027:function(e,t,a){var r=a(7294);t.Z=e=>{let{title:t}=e;return r.createElement("header",{className:"border-b-2 border-b-stone-300"},r.createElement("div",{className:"mx-auto max-w-full py-0 px-6 w-full"},r.createElement("h1",{className:"text-3xl font-bold m-0 py-8"},t)))}},7043:function(e,t,a){var r=a(7294);t.Z=e=>{let{content:t,sidebar:a}=e;return r.createElement("section",{className:"flex flex-col lg:flex-row mx-auto max-w-full py-0 px-6 w-full"},r.createElement("div",{className:"w-full pb-8 pt-3 lg:pr-12 lg:w-[calc(100%-330px)]"},t),r.createElement("div",{className:"w-full pb-8 pt-3 lg:w-[330px]"},a))}},5940:function(e,t,a){var r=a(7294),n=a(5868),l=a(4479),s=a.n(l);t.Z=e=>{let{date:t}=e;return r.createElement("div",{className:"text-slate-600 pb-4"},s().postOnDate," ",(0,n.p6)(t))}},4883:function(e,t,a){a.d(t,{Z:function(){return d}});var r=a(4578),n=a(7294),l=a(3723),s=a(1883);var o=e=>{let{post:t}=e;return t.cover?n.createElement("div",{className:"max-w-full w-[660px]"},n.createElement(s.Link,{to:t.slug,key:t.title},n.createElement(l.G,{image:(0,l.c)(t.cover),alt:"thumbnail image"}))):null},c=a(5940);var m=e=>{let{post:t}=e;return n.createElement("div",{className:"mt-4"},n.createElement(s.Link,{to:t.slug,key:t.title},n.createElement("h2",{className:"text-3xl font-bold mb-2 text-sky-500 hover:text-sky-700"},n.createElement("small",null,t.title))),n.createElement("div",{className:"mb-4"},t.excerpt),n.createElement("small",null,n.createElement(c.Z,{date:t.date})))};var i=e=>{let{post:t,hasThumbnail:a}=e;return n.createElement("article",{key:t.title,className:"flex flex-col py-12 border-b-2 border-slate-600"},a&&n.createElement(o,{post:t}),n.createElement(m,{post:t}))};var p=e=>n.createElement("button",Object.assign({className:"bg-sky-500 border-sky-500 text-white items-center border rounded-md cursor-pointer"},e));let u=function(e){function t(){for(var t,a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return(t=e.call.apply(e,[this].concat(r))||this).state={maxPosts:(t.props.hasLoadmore||t.props.forcePostsPerPage)&&t.props.postsPerPage?t.props.postsPerPage:t.props.postList.length},t.handleLoadmore=()=>{const{hasLoadmore:e=!1,numberLoadmore:a}=t.props;e&&t.setState((e=>({maxPosts:e.maxPosts+a})))},t}return(0,r.Z)(t,e),t.prototype.render=function(){const{postList:e,hasThumbnail:t=!0,hasLoadmore:a=!1}=this.props,{maxPosts:r}=this.state;return n.createElement(n.Fragment,null,n.createElement("div",null,e.map(((e,a)=>a<r?n.createElement(i,{key:e.title,post:e,hasThumbnail:t}):null))),a&&r<e.length&&n.createElement("div",{className:"text-center mt-8 pt-3"},n.createElement(p,{onClick:this.handleLoadmore},this.props.btnLoadmore)))},t}(n.Component);var d=u},6846:function(e,t,a){var r=a(4578),n=a(7294),l=a(3723),s=a(4593),o=a(4479),c=a.n(o),m=a(5868);let i=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){const{postNode:e,postPath:t,postSEO:a}=this.props;let r,o,i,p,u="";if(a){const a=e.frontmatter;({title:r}=a),o=a.description?a.description:e.excerpt,i=a.keywords,a.cover&&(u=(0,l.d)(a.cover)),p=c().siteUrl+c().pathPrefix+t}else r=c().siteTitle,o=c().siteDescription,u=c().siteLogo;u=c().siteUrl+c().pathPrefix+u;const d=c().siteUrl+c().pathPrefix,E=[{"@context":"http://schema.org","@type":"WebSite",url:d,name:r,alternateName:c().siteTitleAlt?c().siteTitleAlt:""}];return a&&E.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":p,name:r,image:u}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:d,name:r,alternateName:c().siteTitleAlt?c().siteTitleAlt:"",headline:r,image:{"@type":"ImageObject",url:u},description:o}),n.createElement(s.Z,null,n.createElement("meta",{name:"description",content:o}),n.createElement("meta",{name:"image",content:u}),i&&n.createElement("meta",{name:"keywords",content:i}),n.createElement("link",{rel:"canonical",href:(0,m.sw)(p||c().siteUrl)}),n.createElement("script",{type:"application/ld+json"},JSON.stringify(E)),n.createElement("meta",{property:"og:url",content:a?p:d}),a?n.createElement("meta",{property:"og:type",content:"article"}):null,n.createElement("meta",{property:"og:title",content:r}),n.createElement("meta",{property:"og:description",content:o}),n.createElement("meta",{property:"og:image",content:u}),n.createElement("meta",{property:"fb:app_id",content:c().siteFBAppID?c().siteFBAppID:""}),n.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),n.createElement("meta",{name:"twitter:creator",content:c().userTwitter?c().userTwitter:""}),n.createElement("meta",{name:"twitter:title",content:r}),n.createElement("meta",{name:"twitter:description",content:o}),n.createElement("meta",{name:"twitter:image",content:u}))},t}(n.Component);t.Z=i},7016:function(e,t,a){a.d(t,{Z:function(){return b}});var r=a(7294),n=a(1883);var l=e=>{let{children:t}=e;return r.createElement("aside",{className:"py-4"},t)};var s=e=>{let{title:t}=e;return r.createElement("h3",{className:"uppercase text-3xl mb-4"},r.createElement("small",null,t))},o=a(5868);var c=e=>{let{content:t}=e;return r.createElement(n.Link,{key:t,to:(0,o.IX)(t)},r.createElement("span",{className:"text-sky-500 hover:text-sky-700 text-center mr-2 mb-2 border border-gray-300 inline-block px-3 py-1"},t))},m=a(4479),i=a.n(m);var p=e=>{let{categoryList:t}=e;return r.createElement(l,null,r.createElement(s,{title:i().categoryWidgetTitle}),r.createElement("div",null,t.map((e=>r.createElement(c,{key:e,content:e})))))};var u=e=>{let{content:t}=e;return r.createElement(n.Link,{key:t,to:(0,o.bT)(t)},r.createElement("span",{className:"text-sky-500 hover:text-sky-700 text-center mr-2 mb-2 border border-gray-300 inline-block px-3 py-1"},t))};var d=e=>{let{tagList:t}=e;return r.createElement(l,null,r.createElement(s,{title:i().tagWidgetTitle}),r.createElement("div",null,t.map((e=>r.createElement(u,{key:e,content:e})))))};var E=e=>{let{latestPostEdges:t}=e;const a=(0,o.UI)(t);return r.createElement(l,null,r.createElement(s,{title:i().latestPostsWidgetTitle}),r.createElement("div",{className:"divide-y divide-slate-300"},a.map((e=>r.createElement("div",{key:e.title},r.createElement("span",{className:"block py-2 text-sky-500 hover:text-sky-700"},r.createElement(n.Link,{to:e.slug},e.title)))))))};var h=e=>{let{links:t}=e;return r.createElement(r.Fragment,null,t&&t.length>0&&r.createElement(l,null,r.createElement(s,{title:i().linksWidgetTitle}),r.createElement("div",{className:"divide-y divide-slate-300"},t.map((e=>r.createElement("a",{key:e.label,href:e.url,className:"block py-2 text-sky-500 hover:text-sky-700"},e.label))))))},g=a(4578);let y=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){return r.createElement(r.Fragment,null,i().hasSearch&&r.createElement(l,null,r.createElement(s,{title:i().searchWidgetTitle}),r.createElement("div",{className:"flex items-center"},r.createElement("form",{method:"GET"},r.createElement("div",{className:"relative text-gray-600 focus-within:text-gray-400"},r.createElement("span",{className:"absolute inset-y-0 left-0 flex items-center pl-2"},r.createElement("button",{type:"submit",className:"p-1 focus:outline-none focus:shadow-outline"},r.createElement("svg",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",className:"w-6 h-6"},r.createElement("path",{d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})))),r.createElement("input",{type:"search",name:"q",className:"py-2 text-sm rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900",placeholder:"Search...",autoComplete:"off"}))))))},t}(r.Component);var f=y;var b=e=>{let{tagList:t,categoryList:a,latestPostEdges:n,links:l}=e;return r.createElement("aside",{className:"w-full h-full"},r.createElement(f,null),n&&r.createElement(E,{latestPostEdges:n}),a&&r.createElement(p,{categoryList:a}),t&&r.createElement(d,{tagList:t}),l&&r.createElement("div",null,r.createElement(h,{links:l})))}},6558:function(e,t,a){a.r(t);var r=a(4578),n=a(7294),l=a(4593),s=a(1883),o=a(8020),c=a(1027),m=a(7043),i=a(7016),p=a(6846),u=a(4883),d=a(5868),E=a(4479),h=a.n(E);let g=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){const e=this.props.data.allMarkdownRemark.edges,t=(0,d.UI)(e),{tagList:a,categoryList:r}=(0,d.yl)(t),E=n.createElement(n.Fragment,null,n.createElement(u.Z,{postList:t,hasThumbnail:h().homeHasThumbnail,hasLoadmore:h().homeHasLoadmore,postsPerPage:h().postsPerPage,numberLoadmore:h().numberLoadmore,btnLoadmore:h().btnLoadmore,forcePostsPerPage:0==h().homeHasLoadmore}),!h().homeHasLoadmore&&t.length>h().postsPerPage&&n.createElement("div",null,n.createElement(s.Link,{to:""+h().pathPrefixBlog+h().pathPrefixPagination+"/2"},h().homeMoreArticles))),g=n.createElement(i.Z,{tagList:a,categoryList:r,links:h().sidebarLinks}),y=h().homeHeader?h().siteTitle+" - "+h().homeHeader:""+h().siteTitle;return n.createElement(o.Z,null,n.createElement("div",null,n.createElement(l.Z,{title:h().siteTitle}),n.createElement(p.Z,null),n.createElement(c.Z,{title:y}),n.createElement(m.Z,{content:E,sidebar:g})))},t}(n.Component);t.default=g}}]);
//# sourceMappingURL=component---src-pages-index-js-27810d42c1330e206e9b.js.map
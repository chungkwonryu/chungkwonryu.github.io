"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[883],{1027:function(e,t,n){var r=n(7294);t.Z=e=>{let{title:t}=e;return r.createElement("header",{className:"border-b-2 border-b-stone-300 pt-16"},r.createElement("div",{className:"mx-auto max-w-full py-0 px-6 w-full"},r.createElement("h1",{className:"text-3xl font-bold m-0 py-8"},t)))}},6846:function(e,t,n){var r=n(4578),a=n(7294),l=n(3723),i=n(4593),o=n(4479),m=n.n(o),c=n(5868);let s=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){const{postNode:e,postPath:t,postSEO:n}=this.props;let r,o,s,p,u="";if(n){const n=e.frontmatter;({title:r}=n),o=n.description?n.description:e.excerpt,s=n.keywords,n.cover&&(u=(0,l.d)(n.cover)),p=m().siteUrl+m().pathPrefix+t}else r=m().siteTitle,o=m().siteDescription,u=m().siteLogo;u=m().siteUrl+m().pathPrefix+u;const E=m().siteUrl+m().pathPrefix,d=[{"@context":"http://schema.org","@type":"WebSite",url:E,name:r,alternateName:m().siteTitleAlt?m().siteTitleAlt:""}];return n&&d.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":p,name:r,image:u}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:E,name:r,alternateName:m().siteTitleAlt?m().siteTitleAlt:"",headline:r,image:{"@type":"ImageObject",url:u},description:o}),a.createElement(i.Z,null,a.createElement("meta",{name:"description",content:o}),a.createElement("meta",{name:"image",content:u}),s&&a.createElement("meta",{name:"keywords",content:s}),a.createElement("link",{rel:"canonical",href:(0,c.sw)(p||m().siteUrl)}),a.createElement("script",{type:"application/ld+json"},JSON.stringify(d)),a.createElement("meta",{property:"og:url",content:n?p:E}),n?a.createElement("meta",{property:"og:type",content:"article"}):null,a.createElement("meta",{property:"og:title",content:r}),a.createElement("meta",{property:"og:description",content:o}),a.createElement("meta",{property:"og:image",content:u}),a.createElement("meta",{property:"fb:app_id",content:m().siteFBAppID?m().siteFBAppID:""}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.createElement("meta",{name:"twitter:creator",content:m().userTwitter?m().userTwitter:""}),a.createElement("meta",{name:"twitter:title",content:r}),a.createElement("meta",{name:"twitter:description",content:o}),a.createElement("meta",{name:"twitter:image",content:u}))},t}(a.Component);t.Z=s},429:function(e,t,n){n.r(t);var r=n(7294),a=n(1883),l=n(4593),i=n(5676),o=n(6846),m=n(1027),c=n(4479),s=n.n(c);t.default=()=>r.createElement(i.Z,{hasFooter:!0},r.createElement("div",null,r.createElement(l.Z,{title:s().pageNotFoundTitle+" - "+s().siteTitle}),r.createElement(o.Z,null),r.createElement(m.Z,{title:""+s().pageNotFoundTitle}),r.createElement("div",{className:"h-screen my-24 mx-auto max-w-full py-16 px-6 w-full"},r.createElement("p",{className:"text-xl p-4"},s().pageNotFoundContent),r.createElement(a.Link,{to:"/"},r.createElement("button",{className:"btn-primary ml-4"},s().pageNotFoundBtn)))))}}]);
//# sourceMappingURL=component---src-pages-404-js-d7c8bcbba170381da687.js.map
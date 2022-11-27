"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[702],{1027:function(e,t,a){var l=a(7294);t.Z=e=>{let{title:t}=e;return l.createElement("header",{className:"border-b-2 border-b-stone-300"},l.createElement("div",{className:"mx-auto max-w-full py-0 px-6 w-full"},l.createElement("h1",{className:"text-3xl font-bold m-0 py-8"},t)))}},7043:function(e,t,a){var l=a(7294);t.Z=e=>{let{content:t,sidebar:a}=e;return l.createElement("section",{className:"flex flex-col lg:flex-row mx-auto max-w-full py-0 px-6 w-full"},l.createElement("div",{className:"w-full pb-8 pt-3 lg:pr-12 lg:w-[calc(100%-330px)]"},t),l.createElement("div",{className:"w-full pb-8 pt-3 lg:w-[330px]"},a))}},1157:function(e,t,a){a.d(t,{Z:function(){return s}});var l=a(7294),r=a(7814);var n=e=>{const{value:t,currentPage:a,pathPrefix:n,pathPrefixPagination:s}=e,c=-1===t,m=-2===t;let o=n;return c?o+=s+"/"+(a-3):m?o+=s+"/"+(a+3):1!==t&&(o+=s+"/"+t),l.createElement("div",{className:"border border-gray-400 active:bg-gray-400 min-h-[4.5rem] min-w-[4.8rem] py-3 px-4"},l.createElement(Link,{to:o,activeClassName:"active"},c&&l.createElement(r.G,{icon:["fas","angle-double-left"],size:"xs"}),t>0&&t,m&&l.createElement(r.G,{icon:["fas","angle-double-right"],size:"xs"})))};var s=e=>{const{currentPage:t,totalPages:a,pathPrefix:r,pathPrefixPagination:s}=e,c=[];if(a<=7)for(let l=1;l<=a;l++)c.push(l);else if(t<=4){for(let e=1;e<=5;e++)c.push(e);c.push(-2,a)}else if(a-t<4){c.push(1,-1);for(let e=a-4;e<=a;e++)c.push(e)}else c.push(1,-1,t-1,t,t+1,-2,a);return l.createElement(l.Fragment,null,a>=2&&l.createElement("div",{className:"items-center flex justify-center mt-8 pt-3"},c.map(((e,a)=>l.createElement(n,{key:r+"-"+a,value:e,currentPage:t,pathPrefix:r,pathPrefixPagination:s})))))}},5940:function(e,t,a){var l=a(7294),r=a(5868),n=a(4479),s=a.n(n);t.Z=e=>{let{date:t}=e;return l.createElement("div",{className:"text-neutral-500 pb-4"},s().postOnDate," ",(0,r.p6)(t))}},4883:function(e,t,a){a.d(t,{Z:function(){return d}});var l=a(4578),r=a(7294),n=a(3723),s=a(1883);var c=e=>{let{post:t}=e;return t.cover?r.createElement("div",{className:"max-w-full w-[660px]"},r.createElement(s.Link,{to:t.slug,key:t.title},r.createElement(n.G,{image:(0,n.c)(t.cover),alt:"thumbnail image"}))):null},m=a(5940);var o=e=>{let{post:t}=e;return r.createElement("div",{className:"mt-4"},r.createElement(s.Link,{to:t.slug,key:t.title},r.createElement("h2",{className:"text-3xl font-bold mb-2 text-sky-500 hover:text-sky-700"},r.createElement("small",null,t.title))),r.createElement("div",{className:"mb-4"},t.excerpt),r.createElement("small",null,r.createElement(m.Z,{date:t.date})))};var i=e=>{let{post:t,hasThumbnail:a}=e;return r.createElement("article",{key:t.title,className:"flex flex-col py-12 border-b-2 border-slate-600"},a&&r.createElement(c,{post:t}),r.createElement(o,{post:t}))};var u=e=>r.createElement("button",Object.assign({className:"btn-primary"},e));let p=function(e){function t(){for(var t,a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(t=e.call.apply(e,[this].concat(l))||this).state={maxPosts:(t.props.hasLoadmore||t.props.forcePostsPerPage)&&t.props.postsPerPage?t.props.postsPerPage:t.props.postList.length},t.handleLoadmore=()=>{const{hasLoadmore:e=!1,numberLoadmore:a}=t.props;e&&t.setState((e=>({maxPosts:e.maxPosts+a})))},t}return(0,l.Z)(t,e),t.prototype.render=function(){const{postList:e,hasThumbnail:t=!0,hasLoadmore:a=!1}=this.props,{maxPosts:l}=this.state;return r.createElement(r.Fragment,null,r.createElement("div",null,e.map(((e,a)=>a<l?r.createElement(i,{key:e.title,post:e,hasThumbnail:t}):null))),a&&l<e.length&&r.createElement("div",{className:"text-center mt-8 pt-3"},r.createElement(u,{onClick:this.handleLoadmore},this.props.btnLoadmore)))},t}(r.Component);var d=p},7016:function(e,t,a){a.d(t,{Z:function(){return x}});var l=a(7294),r=a(1883);var n=e=>{let{children:t}=e;return l.createElement("aside",{className:"py-4"},t)};var s=e=>{let{title:t}=e;return l.createElement("h3",{className:"uppercase text-3xl mb-4"},l.createElement("small",null,t))},c=a(5868);var m=e=>{let{content:t}=e;return l.createElement(r.Link,{key:t,to:(0,c.IX)(t)},l.createElement("span",{className:"text-sky-500 hover:text-sky-700 text-center mr-2 mb-2 border border-gray-300 inline-block px-3 py-1"},t))},o=a(4479),i=a.n(o);var u=e=>{let{categoryList:t}=e;return l.createElement(n,null,l.createElement(s,{title:i().categoryWidgetTitle}),l.createElement("div",null,t.map((e=>l.createElement(m,{key:e,content:e})))))};var p=e=>{let{content:t}=e;return l.createElement(r.Link,{key:t,to:(0,c.bT)(t)},l.createElement("span",{className:"text-sky-500 hover:text-sky-700 text-center mr-2 mb-2 border border-gray-300 inline-block px-3 py-1"},t))};var d=e=>{let{tagList:t}=e;return l.createElement(n,null,l.createElement(s,{title:i().tagWidgetTitle}),l.createElement("div",null,t.map((e=>l.createElement(p,{key:e,content:e})))))};var E=e=>{let{latestPostEdges:t}=e;const a=(0,c.UI)(t);return l.createElement(n,null,l.createElement(s,{title:i().latestPostsWidgetTitle}),l.createElement("div",{className:"divide-y divide-slate-300"},a.map((e=>l.createElement("div",{key:e.title},l.createElement("span",{className:"block py-2 text-sky-500 hover:text-sky-700"},l.createElement(r.Link,{to:e.slug},e.title)))))))};var g=e=>{let{links:t}=e;return l.createElement(l.Fragment,null,t&&t.length>0&&l.createElement(n,null,l.createElement(s,{title:i().linksWidgetTitle}),l.createElement("div",{className:"divide-y divide-slate-300"},t.map((e=>l.createElement("a",{key:e.label,href:e.url,className:"block py-2 text-sky-500 hover:text-sky-700"},e.label))))))},h=a(4578);let f=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){return l.createElement(l.Fragment,null,i().hasSearch&&l.createElement(n,null,l.createElement(s,{title:i().searchWidgetTitle}),l.createElement("div",{className:"flex items-center"},l.createElement("form",{method:"GET"},l.createElement("div",{className:"relative text-gray-600 focus-within:text-gray-400"},l.createElement("span",{className:"absolute inset-y-0 left-0 flex items-center pl-2"},l.createElement("button",{type:"submit",className:"p-1 focus:outline-none focus:shadow-outline"},l.createElement("svg",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",className:"w-6 h-6"},l.createElement("path",{d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})))),l.createElement("input",{type:"search",name:"q",className:"py-2 text-sm rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900",placeholder:"Search...",autoComplete:"off"}))))))},t}(l.Component);var v=f;var x=e=>{let{tagList:t,categoryList:a,latestPostEdges:r,links:n}=e;return l.createElement("aside",{className:"w-full h-full"},l.createElement(v,null),r&&l.createElement(E,{latestPostEdges:r}),a&&l.createElement(u,{categoryList:a}),t&&l.createElement(d,{tagList:t}),n&&l.createElement("div",null,l.createElement(g,{links:n})))}},8813:function(e,t,a){a.r(t);var l=a(7294),r=a(4593),n=a(4762),s=a(1027),c=a(7043),m=a(7016),o=a(4883),i=a(1157),u=a(5868),p=a(4479),d=a.n(p);t.default=e=>{let{data:t,pageContext:a}=e;const{tag:p,tagList:E,categoryList:g,latestPostEdges:h,currentPage:f,totalPages:v}=a,x=t.allMarkdownRemark.edges,y=(0,u.UI)(x),b=l.createElement(l.Fragment,null,l.createElement(o.Z,{postList:y,hasThumbnail:d().tagHasThumbnail,hasLoadmore:!1}),l.createElement(i.Z,{currentPage:f,totalPages:v,pathPrefix:(0,u.AG)(p),pathPrefixPagination:d().pathPrefixPagination})),k=l.createElement(m.Z,{tagList:E,categoryList:g,latestPostEdges:h,links:d().sidebar});return l.createElement(n.Z,null,l.createElement("div",{className:"tag-container"},l.createElement(r.Z,{title:d().tagHeader+" "+p+" - "+d().siteTitle}),l.createElement(s.Z,{title:d().tagHeader+" "+p}),l.createElement(c.Z,{content:b,sidebar:k})))}}}]);
//# sourceMappingURL=component---src-templates-tag-template-jsx-e34f4566a3b51fe08a52.js.map
"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[441],{801:function(e,t,l){var r=l(7294);t.Z=e=>r.createElement("button",Object.assign({className:"btn-primary"},e))},7043:function(e,t,l){var r=l(7294);t.Z=e=>{let{content:t}=e;return r.createElement("section",{className:"flex flex-col lg:flex-row mx-auto max-w-full py-0 px-6 w-full min-h-[80vh]"},r.createElement("div",{className:"flex w-full flex-col pb-8 pt-3 "},t))}},2418:function(e,t,l){l.r(t),l.d(t,{default:function(){return d}});var r=l(7294),n=l(4593),a=l(5676),s=l(1027),c=l(7043),i=l(5785),m=l(1883),o=l(5868);var u=e=>{let{series:t}=e;const{title:l,description:n}=t,a=(0,o.lV)(l);return r.createElement("article",{className:"flex flex-col py-3 border-b-2 border-gray-200"},r.createElement("div",{className:"mt-4"},r.createElement(m.Link,{to:a,key:l},r.createElement("h2",{className:"text-3xl font-bold mb-2 text-sky-500 hover:text-sky-700"},r.createElement("small",null,l))),r.createElement("div",{className:"mb-4"},n)))},E=l(801),f=l(4479),b=l.n(f);var g=e=>{const{seriesList:t}=e,l=b().seriesPerPage,{0:n,1:a}=(0,r.useState)((0,i.Z)(t.slice(0,l))),{0:s,1:c}=(0,r.useState)(!1),{0:m,1:o}=(0,r.useState)(t.length>l);return(0,r.useEffect)((()=>{if(s&&m){const e=n.length,l=e<t.length?t.slice(e,e+b().seriesPerPage):[];a([].concat((0,i.Z)(n),(0,i.Z)(l))),c(!1)}o(n.length<t.length)}),[s]),r.createElement(r.Fragment,null,r.createElement("div",null,n.map((e=>r.createElement(u,{key:e.title,series:e})))),m&&r.createElement("div",{className:"text-center mt-8 pt-3"},r.createElement(E.Z,{onClick:()=>{c(!0)}},b().btnLoadmore)))};var d=()=>{const e=b().seriesList,t=b().seriesHeader?b().siteTitle+" - "+b().seriesHeader:""+b().siteTitle,l=r.createElement(r.Fragment,null,r.createElement(g,{seriesList:e}));return r.createElement(a.Z,null,r.createElement("div",null,r.createElement(n.Z,{title:t}),r.createElement(s.Z,{title:t}),r.createElement(c.Z,{content:l})))}}}]);
//# sourceMappingURL=component---src-pages-series-jsx-2f25b16d0ff160dc9d1a.js.map
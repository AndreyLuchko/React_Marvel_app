(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[6],{37:function(t,e,n){"use strict";var r=n.p+"static/media/error.42292aa1.gif",c=n(2);e.a=function(){return Object(c.jsx)("img",{style:{margin:"0 auto",display:"block",width:"250px",height:"250px",objectFit:"contain"},src:r,alt:"Error"})}},39:function(t,e,n){"use strict";var r=n(4),c=n.n(r),a=n(7),s=n(5),i=n(0);e.a=function(){var t=function(){var t=Object(i.useState)(!1),e=Object(s.a)(t,2),n=e[0],r=e[1],o=Object(i.useState)(null),u=Object(s.a)(o,2),l=u[0],p=u[1];return{loading:n,request:Object(i.useCallback)(function(){var t=Object(a.a)(c.a.mark((function t(e){var n,a,s,i,o,u=arguments;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:"GET",a=u.length>2&&void 0!==u[2]?u[2]:null,s=u.length>3&&void 0!==u[3]?u[3]:{"Content-Type":"application/json"},r(!0),t.prev=4,t.next=7,fetch(e,{method:n,body:a,headers:s});case 7:if((i=t.sent).ok){t.next=10;break}throw new Error("Could not fetch ".concat(e,", status: ").concat(i.status));case 10:return t.next=12,i.json();case 12:return o=t.sent,r(!1),t.abrupt("return",o);case 17:throw t.prev=17,t.t0=t.catch(4),r(!1),p(t.t0.message),t.t0;case 22:case"end":return t.stop()}}),t,null,[[4,17]])})));return function(e){return t.apply(this,arguments)}}(),[]),error:l,clearError:Object(i.useCallback)((function(){return p(null)}),[])}}(),e=t.loading,n=t.request,r=t.error,o=t.clearError,u="https://gateway.marvel.com:443/v1/public/",l="apikey=bd2a11bd92ac1548e8b8a93b5000d171",p=210,b=function(){var t=Object(a.a)(c.a.mark((function t(){var e,r,a=arguments;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:p,t.next=3,n("".concat(u,"characters?limit=9&offset=").concat(e,"&").concat(l));case 3:return r=t.sent,t.abrupt("return",r.data.results.map(f));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),j=function(){var t=Object(a.a)(c.a.mark((function t(e){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n("".concat(u,"characters/").concat(e,"?").concat(l));case 2:return r=t.sent,t.abrupt("return",f(r.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(a.a)(c.a.mark((function t(e){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n("".concat(u,"characters?name=").concat(e,"&").concat(l));case 2:return r=t.sent,t.abrupt("return",r.data.results.map(f));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(t){return{id:t.id,name:t.name,description:t.description?"".concat(t.description.slice(0,210),"..."):"There is no description for this character",thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,homepage:t.urls[0].url,wiki:t.urls[1].url,comics:t.comics.items}},d=function(){var t=Object(a.a)(c.a.mark((function t(){var e,r,a=arguments;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:p,t.next=3,n("".concat(u,"comics?limit=8&offset=").concat(e,"&").concat(l));case 3:return r=t.sent,t.abrupt("return",r.data.results.map(v));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),h=function(){var t=Object(a.a)(c.a.mark((function t(e){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n("".concat(u,"comics/").concat(e,"?").concat(l));case 2:return r=t.sent,t.abrupt("return",v(r.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(t){var e;return{id:t.id,title:t.title,description:t.description||"There is no description",pageCount:t.pageCount?"".concat(t.pageCount," p."):"No information about the number of pages",price:t.prices[0].price?"".concat(t.prices[0].price,"$"):"NOT AVAILABLE",thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,language:(null===(e=t.textObjects[0])||void 0===e?void 0:e.language)||"en-us",homepage:t.urls[0].url}};return{loading:e,error:r,clearError:o,getAllCharacters:b,getCharacter:j,getAllComics:d,getComic:h,getCharacterByName:m}}},45:function(t,e,n){"use strict";var r=n(11),c=n(14),a=n(15),s=n(16),i=n(0),o=n(37),u=n(2),l=function(t){Object(a.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(r.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={error:!1},t}return Object(c.a)(n,[{key:"componentDidCatch",value:function(t,e){console.log(t,e),this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?Object(u.jsx)(o.a,{}):this.props.children}}]),n}(i.Component);e.a=l},46:function(t,e,n){},50:function(t,e,n){"use strict";n(46);var r=n.p+"static/media/Avengers.4065c8f9.png",c=n.p+"static/media/Avengers_logo.9eaf2193.png",a=n(2);e.a=function(){return Object(a.jsxs)("div",{className:"app__banner",children:[Object(a.jsx)("img",{src:r,alt:"Avengers"}),Object(a.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",Object(a.jsx)("br",{}),"Stay tuned!"]}),Object(a.jsx)("img",{src:c,alt:"Avengers logo"})]})}},63:function(t,e,n){},90:function(t,e,n){"use strict";n.r(e);var r=n(41),c=n(45),a=n(8),s=n(5),i=n(0),o=n(12),u=n(37),l=n(24),p=n(39),b=(n(63),n(2)),j=function(){var t=Object(i.useState)([]),e=Object(s.a)(t,2),n=e[0],r=e[1],c=Object(i.useState)(!1),j=Object(s.a)(c,2),m=j[0],f=j[1],d=Object(i.useState)(210),h=Object(s.a)(d,2),v=h[0],O=h[1],g=Object(i.useState)(!1),x=Object(s.a)(g,2),w=x[0],y=x[1],_=Object(p.a)(),k=_.loading,C=_.error,N=_.getAllComics;Object(i.useEffect)((function(){A(v,!0)}),[]);var A=function(t,e){f(!e),N(t).then(E)},E=function(t){var e=!1;t.length<8&&(e=!0),r((function(e){return[].concat(Object(a.a)(e),Object(a.a)(t))})),f((function(t){return!1})),O((function(t){return t+8})),y((function(t){return e}))};var S=function(t){var e=t.map((function(t){var e=t.id,n=t.title,r=t.thumbnail,c=t.price;return Object(b.jsx)("li",{className:"comics__item",children:Object(b.jsxs)(o.b,{to:"/comics/".concat(e),children:[Object(b.jsx)("img",{src:r,alt:n,className:"comics__item-img"}),Object(b.jsx)("div",{className:"comics__item-name",children:n}),Object(b.jsx)("div",{className:"comics__item-price",children:c})]})},e)}));return Object(b.jsx)("ul",{className:"comics__grid",children:e})}(n),T=C?Object(b.jsx)(u.a,{}):null,L=k&&!m?Object(b.jsx)(l.a,{}):null;return Object(b.jsxs)("div",{className:"comics__list",children:[T,L,S,Object(b.jsx)("button",{className:"button button__main button__long",disabled:m,style:{display:w?"none":"block"},onClick:function(){return A(v)},children:Object(b.jsx)("div",{className:"inner",children:"load more"})})]})},m=n(50);e.default=function(){return Object(b.jsxs)(r.b,{children:[Object(b.jsxs)(r.a,{children:[Object(b.jsx)("meta",{name:"description",content:"List of comics"}),Object(b.jsx)("title",{children:"Comics Page"})]}),Object(b.jsx)(m.a,{}),Object(b.jsx)(c.a,{children:Object(b.jsx)(j,{})})]})}}}]);
//# sourceMappingURL=6.5d9764f8.chunk.js.map
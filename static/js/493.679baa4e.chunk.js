"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[493],{436:function(n,e,t){t.d(e,{WK:function(){return l},Y5:function(){return d},nA:function(){return h},wr:function(){return s}});var r=t(861),i=t(687),o=t.n(i),a=t(243);a.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNWIwYzYzN2RhYzFmZmFlMThjZDRmYmRjMjc1ZWFhOSIsInN1YiI6IjY0OTVjMzgzZDVmZmNiMDBlMjA1NzIzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x9lPMVl4nfFlN901y3yy6-AcoB6SAlcKg0T-FQPITKg"}};function s(){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(o().mark((function n(){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("/trending/all/day?language=en-US",c);case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("/search/movie?query=".concat(e,"&language=en-US"),c);case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("/movie/".concat(e,"?language=en-US"),c);case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n,e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(o().mark((function n(e,t){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("movie/".concat(e,"/").concat(t,"?language=en-US"),c);case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},422:function(n,e,t){t.r(e),t.d(e,{default:function(){return N}});var r=t(142);function i(n,e,t){return(e=(0,r.Z)(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}var a,c,s,u,l,p,d,f,h=t(439),g=t(791),v=t(689),j=t(436),b=t(168),x=t(686),m=t(87),y=x.Z.div(a||(a=(0,b.Z)(["\n  display: flex;\n  margin-bottom: 20px;\n"]))),Z=(0,x.Z)(m.rU)(c||(c=(0,b.Z)(["\n  display: block;\n  padding: 5px;\n  text-decoration: none;\n\n  &:hover,\n  &:focus {\n    color: #c25151;\n    font-weight: bold;\n  }\n\n  &::before {\n    content: '';\n  }\n"]))),w=x.Z.div(s||(s=(0,b.Z)(["\n  padding: 20px;\n"]))),O=x.Z.h2(u||(u=(0,b.Z)(["\n  margin-top: 0;\n"]))),k=x.Z.p(l||(l=(0,b.Z)(["\n  text-align: justify;\n"]))),I=x.Z.div(p||(p=(0,b.Z)(["\n  border-top: 1px solid gray;\n  border-bottom: 1px solid gray;\n"]))),P=x.Z.ul(d||(d=(0,b.Z)(["\n  list-style: none;\n"]))),S=(0,x.Z)(m.OL)(f||(f=(0,b.Z)(["\n  display: block;\n  text-decoration: none;\n  margin-bottom: 10px;\n  &:hover,\n  &:focus {\n    color: #c25151;\n  }\n  &.active {\n    color: #c25151;\n    font-weight: bold;\n  }\n"]))),_=t.p+"static/media/what.47b950d4f6a1dd386722.jpg",z=t(184);var J=function(n){var e,t,r=n.details,i=r.title,o=r.release_date,a=r.vote_average,c=r.overview,s=r.genres,u=r.poster_path,l=new Date(o).getFullYear(),p=(0,v.TH)(),d=(0,g.useRef)(null!==(e=null===(t=p.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"./movies");return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(Z,{to:d.current,children:"Go back"}),r&&(0,z.jsxs)(z.Fragment,{children:[(0,z.jsxs)(y,{children:[(0,z.jsx)("img",{src:u?"https://image.tmdb.org/t/p/w300"+u:_,width:250,height:400,alt:"poster"}),(0,z.jsxs)(w,{children:[(0,z.jsxs)(O,{children:[i," (",l,")"]}),(0,z.jsxs)("p",{children:["User score: ",Math.round(10*a),"%"]}),(0,z.jsx)("h3",{children:"Overview"}),(0,z.jsx)(k,{children:c}),(0,z.jsx)("h3",{children:"Genres"}),s?s.map((function(n){return n.name+" "})):"Not information"]})]}),(0,z.jsxs)(I,{children:[(0,z.jsx)("h3",{children:"Additional information"}),(0,z.jsxs)(P,{children:[(0,z.jsx)("li",{children:(0,z.jsx)(S,{to:"cast",children:"Cast"})}),(0,z.jsx)("li",{children:(0,z.jsx)(S,{to:"review",children:"Review"})})]})]})]}),(0,z.jsx)(g.Suspense,{fallback:(0,z.jsx)("div",{children:"Loading..."}),children:(0,z.jsx)(v.j3,{})})]})};var N=function(){var n=(0,v.UO)().movieId,e=(0,g.useState)({}),t=(0,h.Z)(e,2),r=t[0],a=t[1];return(0,g.useEffect)((function(){n&&(0,j.Y5)(n).then((function(n){return a(function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}({},n))})).catch((function(n){return console.log(n)}))}),[n]),(0,z.jsx)(J,{details:r})}}}]);
//# sourceMappingURL=493.679baa4e.chunk.js.map
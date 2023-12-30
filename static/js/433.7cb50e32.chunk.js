"use strict";(self.webpackChunksearch_movies=self.webpackChunksearch_movies||[]).push([[433],{5545:function(n,e,t){t.d(e,{Z:function(){return Z}});var r,i,a,o,c,u,s,l=t(7689),d=t(168),p=t(7686),f=t(1087),h=p.default.ul(r||(r=(0,d.Z)(["\n  display: flex;\n  /* flex-direction: column; */\n  flex-wrap: wrap;\n  gap: 20px;\n  list-style: none;\n  padding: 0;\n  justify-content: center;\n"]))),x=p.default.li(i||(i=(0,d.Z)(["\n  position: relative;\n  width: 150px;\n  border-radius: 5px;\n  box-shadow: 0 2px 7px #332f2f;\n"]))),v=p.default.div(a||(a=(0,d.Z)(["\n  overflow: hidden;\n  position: relative;\n"]))),g=(0,p.default)(f.rU)(o||(o=(0,d.Z)(["\n  font-size: 18px;\n  text-decoration: none;\n  width: 150px;\n  color: var(--primary-bg);\n  &:hover,\n  &:focus {\n    /* font-size: 20px; */\n    color: var(--accent);\n    color: var(--primary-bg);\n    /* letter-spacing: 0.5px; */\n  }\n\n  &:hover div,\n  &:focus div {\n    transform: translateY(0);\n    opacity: 1;\n  }\n"]))),m=p.default.div(c||(c=(0,d.Z)(["\n  /* word-wrap: break-word; */\n  /* text-overflow: ellipsis; */\n  /* white-space: nowrap; */\n  overflow: hidden;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--accent);\n  padding: 5px;\n  height: 40%;\n  transform: translateY(30%);\n  opacity: 0;\n  /* background-color: $primary-accent-color; */\n  transition: transform 250ms ease-in-out, opacity 250ms ease-in-out;\n  text-align: center;\n  /* padding: 26px 0; */\n  /* text-transform: uppercase; */\n"]))),b=p.default.p(u||(u=(0,d.Z)(["\n  display: inline-block;\n  /* height: 50px; */\n  /* white-space: nowrap; */\n  word-wrap: break-word;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  /* height: 100%; */\n  line-height: 1em;\n  max-height: 3em;\n  overflow: hidden;\n  text-shadow: 0 0 2px black;\n"]))),w=p.default.div(s||(s=(0,d.Z)(["\n  position: absolute;\n  top: -8px;\n  right: -8px;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background-color: black;\n  font-size: 14px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #fff;\n  border: 2px solid var(--accent);\n  z-index: 10;\n\n  & span {\n    font-size: 8px;\n  }\n"]))),y=t(3159),j=t(184);var Z=function(n){var e=n.movies,t=(0,l.TH)();return(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(h,{children:e.map((function(n){var e,r=n.id,i=n.title,a=n.poster_path,o=n.release_date,c=n.vote_average;return i&&(0,j.jsxs)(x,{children:[(0,j.jsx)(w,{children:(0,j.jsxs)("p",{children:[Math.round(10*c),(0,j.jsx)("span",{children:"%"})]})}),(0,j.jsx)(v,{children:(0,j.jsxs)(g,{to:"/movies/".concat(r),state:{from:t},children:[(0,j.jsx)("img",{src:a?"https://image.tmdb.org/t/p/w300"+a:y,alt:i,width:150,height:225}),(0,j.jsxs)(m,{children:[(0,j.jsx)(b,{children:i}),o&&(0,j.jsx)(b,{children:(e=o,new Date(e).getFullYear())})]})]},r)})]},r)}))})})}},6436:function(n,e,t){t.d(e,{DT:function(){return v},WK:function(){return l},Y5:function(){return p},h1:function(){return m},nA:function(){return h},wr:function(){return u}});var r=t(5861),i=t(4687),a=t.n(i),o=t(1243);o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNWIwYzYzN2RhYzFmZmFlMThjZDRmYmRjMjc1ZWFhOSIsInN1YiI6IjY0OTVjMzgzZDVmZmNiMDBlMjA1NzIzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x9lPMVl4nfFlN901y3yy6-AcoB6SAlcKg0T-FQPITKg"}};function u(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/trending/all/day?language=en-US",c);case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/search/movie?query=".concat(e,"&language=en-US"),c);case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(e,"?language=en-US"),c);case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n,e){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(a().mark((function n(e,t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"/").concat(t,"?language=en-US"),c);case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("genre/movie/list",c);case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return b.apply(this,arguments)}function b(){return(b=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=".concat(e),c);case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},6655:function(n,e,t){t.r(e),t.d(e,{default:function(){return U}});var r,i,a,o=t(3433),c=t(9439),u=t(2791),s=t(7689),l=t(1087),d=t(5545),p=t(168),f=t(7686),h=f.default.form(r||(r=(0,p.Z)(["\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n  padding-top: 20px;\n"]))),x=f.default.input(i||(i=(0,p.Z)(["\n  /* margin-right: 10px; */\n  width: 250px;\n"]))),v=f.default.button(a||(a=(0,p.Z)(["\n  padding: 5px;\n  border: 1px solid #978a8a;\n  border-radius: 2px;\n\n  &:hover,\n  &:focus {\n    background-color: #c25151;\n\n    color: #fff;\n    cursor: pointer;\n  }\n"]))),g=t(184);var m,b,w=function(n){var e=n.onSubmit,t="";return(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)(h,{action:"",onSubmit:function(n){n.preventDefault();var r=n.currentTarget;t=r.elements.query.value,e(t),r.reset()},children:[(0,g.jsx)(x,{type:"text",name:"query",defaultValue:t}),(0,g.jsx)(v,{type:"submit",children:"Search"})]})})},y=t(6436),j=t.p+"static/media/fon.08af2e42eb94f0555908.webp",Z=(f.default.div(m||(m=(0,p.Z)([""]))),f.default.div(b||(b=(0,p.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100%;\n  min-height: 100vh;\n  z-index: -1;\n  opacity: 0.3;\n  background-image: url(",");\n  /* background-color: var(--accent); */\n  /* background-color: #fbda61;\n  background-image: linear-gradient(45deg, #fbda61 0%, #ff5acd 100%); */\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  /* filter: blur(5px); */\n  backdrop-filter: blur(200px);\n  backdrop-filter: opacity(20%);\n"])),(function(n){return n.bg})));var k,z,I=function(){return(0,g.jsx)(Z,{bg:j})},S=t(7076),T=t.p+"static/media/spiderman.c355afe86b57eb6669e6.webp",Y=t(7686).default,J=Y.div(k||(k=(0,p.Z)(["\n  display: flex;\n  align-items: center;\n  margin: 0 auto;\n  justify-content: center;\n"]))),_=Y.p(z||(z=(0,p.Z)(["\n  font-size: 24px;\n  font-weight: bold;\n"])));var E=function(){return(0,g.jsxs)(J,{children:[(0,g.jsx)(S.E.div,{initial:{opacity:0,x:100,overflow:"hidden"},whileInView:{opacity:1,x:0},transition:{duration:1.15},viewport:{once:!0},children:(0,g.jsx)(_,{children:"Enter a search query to explore movies."})}),(0,g.jsx)(S.E.div,{initial:{opacity:0,y:0,overflow:"hidden"},whileInView:{opacity:1,y:100},transition:{duration:1.15},viewport:{once:!0},children:(0,g.jsx)("img",{src:T,alt:"spiderman",width:500})})]})};var F=function(n){var e=n.genre,t=(0,u.useState)([]),r=(0,c.Z)(t,2),i=r[0],a=r[1];return(0,u.useEffect)((function(){(0,y.h1)(e).then((function(n){a(n.results)}))}),[e]),(0,u.useEffect)((function(){a(i)}),[i]),(0,g.jsx)("ul",{children:i&&(0,g.jsx)(d.Z,{movies:i})})};var N=function(){var n=(0,u.useState)([]),e=(0,c.Z)(n,2),t=e[0],r=e[1];return(0,u.useEffect)((function(){(0,y.DT)().then((function(n){r(n.genres)}))}),[]),(0,g.jsx)("ul",{children:t&&t.map((function(n){return(0,g.jsxs)("li",{children:[(0,g.jsx)("p",{children:n.name}),(0,g.jsx)(F,{genre:n.name})]},n.id)}))})};var U=function(){var n,e=(0,s.TH)(),t=(0,u.useState)([]),r=(0,c.Z)(t,2),i=r[0],a=r[1],p=(0,l.lr)(),f=(0,c.Z)(p,2),h=f[0],x=f[1],v=null!==(n=h.get("query"))&&void 0!==n?n:"";return(0,u.useEffect)((function(){v&&(0,y.WK)(v).then((function(n){var e=n.filter((function(n){return n.title}));a((0,o.Z)(e))}))}),[v]),(0,g.jsxs)("div",{children:[(0,g.jsx)(I,{}),(0,g.jsx)(w,{location:e,onSubmit:function(n){x({query:n})}}),(0,g.jsx)(N,{}),0===i.length?(0,g.jsx)(E,{}):(0,g.jsx)(d.Z,{movies:i})]})}},3159:function(n,e,t){n.exports=t.p+"static/media/what.47b950d4f6a1dd386722.jpg"}}]);
//# sourceMappingURL=433.7cb50e32.chunk.js.map
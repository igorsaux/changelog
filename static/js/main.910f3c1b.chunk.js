(this.webpackJsonpchangelog=this.webpackJsonpchangelog||[]).push([[0],{228:function(e,a,t){},229:function(e,a,t){},230:function(e,a,t){"use strict";t.r(a);var n=t(6),r=t.n(n),s=t(86),c=t.n(s),i=(t(95),t(7)),o=t.n(i),u=t(15),h=t(1),g=t(12),p=t(11),f=t(10),d=function(){function e(a){Object(h.a)(this,e),this.cdn=void 0,this.cdn=a}return Object(g.a)(e,[{key:"fetch",value:function(e){function a(a){return e.apply(this,arguments)}return a.toString=function(){return e.toString()},a}(function(){var e=Object(u.a)(o.a.mark((function e(a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this.cdn,"/").concat(a),{method:"GET",mode:"cors"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(a){return e.apply(this,arguments)}}())},{key:"fetchJson",value:function(){var e=Object(u.a)(o.a.mark((function e(a,t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetch(this.join(a,t));case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e,this)})));return function(a,t){return e.apply(this,arguments)}}()},{key:"join",value:function(e,a){return"".concat(e.owner,"/").concat(e.name,"/dev").concat(a)}}]),e}(),l=(t(87),function(e){Object(p.a)(t,e);var a=Object(f.a)(t);function t(){return Object(h.a)(this,t),a.call(this,"https://github-cdn.vercel.app")}return t}(d)),x=(t(97),t(88)),_=t.n(x),m=t(90),j=t(0),b=function e(a){return Object(j.jsxs)("div",{className:"Changelog",children:[a.renderDate?Object(j.jsx)(e.Date,{date:a.date}):"",Object(j.jsx)(e.Author,{author:a.author}),Object(j.jsx)(e.Changes,{changes:a.changes})]})},O=new Intl.DateTimeFormat("ru-RU",{day:"numeric",month:"long",year:"numeric"});b.Date=function(e){return Object(j.jsx)("div",{className:"Changelog__date",children:Object(j.jsx)("span",{children:O.format(new Date(e.date))})})};b.Author=function(e){return Object(j.jsxs)("h3",{className:"Changelog__author",children:[e.author," updated:"]})};var v=function(e){return Object(j.jsx)("sup",{className:"PR",children:Object(j.jsxs)("a",{className:"PR__link",href:"https://github.com/ChaoticOnyx/OnyxBay/pull/".concat(e.pr),children:["#",e.pr]})})},w=function(e){var a=e.change.prefix.toLowerCase();return Object(j.jsxs)("li",{className:"Changes__change ".concat(S[a]),children:[Object(j.jsx)("i",{className:M[a]}),Object(j.jsx)(_.a,{rehypePlugins:[m.a],transformLinkUri:null,children:e.change.message}),e.change.pr?Object(j.jsx)(v,{pr:e.change.pr}):""]})};b.Changes=function(e){return Object(j.jsx)("ul",{className:"Changes",children:e.changes.map((function(e,a){return Object(j.jsx)(w,{change:e},a)}))})};var k=function(e){Object(p.a)(t,e);var a=Object(f.a)(t);function t(){return Object(h.a)(this,t),a.call(this,"OnyxBay","ChaoticOnyx")}return t}(function(){function e(a,t){Object(h.a)(this,e),this.name=void 0,this.owner=void 0,this.name=a,this.owner=t}return Object(g.a)(e,[{key:"getUrl",value:function(){return"https://github.com/".concat(this.owner,"/").concat(this.name)}}]),e}()),T=t(50),y=t(49),F=function e(a,t){Object(h.a)(this,e),this.repository=void 0,this.changelogFilePath=void 0,this.repository=a,this.changelogFilePath=t},B=(t(228),function(e){return Object(j.jsx)("div",{className:"ChangelogLayout ".concat(e.theme?"theme-".concat(e.theme):""),children:e.children})});B.Body=function(e){return Object(j.jsx)("div",{className:"ChangelogLayout__body",children:e.children})};B.Header=function(e){return Object(j.jsx)("div",{className:"ChangelogLayout__header",children:e.children})};t(229);var C=function(e){return Object(j.jsxs)("div",{className:"Spinner",children:[Object(j.jsx)("i",{className:"Spinner__icon fas fa-spinner"}),Object(j.jsx)("span",{className:"Spinner__text",children:e.text})]})},N=[{title:"Patreon",url:"https://www.patreon.com/chaoticonyx",icon:"fab fa-patreon"},{title:"Wiki",url:"https://wiki.ss13.ru",icon:"fas fa-book"},{title:"GitHub",url:"https://github.com/ChaoticOnyx/OnyxBay",icon:"fab fa-github"},{title:"Discord",url:"https://discord.gg/5BRMMFg",icon:"fab fa-discord"}],D=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 Chaotic Onyx"}),Object(j.jsx)("p",{children:"\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0432\u0435\u0434\u0435\u0442\u0441\u044f \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 \u0438\u0433\u0440\u043e\u043a\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0442 \u0441\u0435\u0440\u0432\u0435\u0440 \u0441\u0432\u043e\u0438\u043c\u0438 \u043f\u043e\u0436\u0435\u0440\u0442\u0432\u043e\u0432\u0430\u043d\u0438\u044f\u043c\u0438! \u0415\u0441\u043b\u0438 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043d\u0430\u0441 \u0438 \u043f\u0440\u0438\u043d\u044f\u0442\u044c \u0443\u0447\u0430\u0441\u0442\u0438\u0435 \u0432 \u0433\u043e\u043b\u043e\u0441\u043e\u0432\u0430\u043d\u0438\u0438 \u0437\u0430 \u0442\u043e, \u043a\u0430\u043a\u0438\u0435 \u0444\u0438\u0447\u0438 \u0431\u0443\u0434\u0443\u0442 \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u044b \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c\u0438, \u0442\u043e \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043c\u043e\u0436\u043d\u043e \u043d\u0430\u0439\u0442\u0438 \u0432 \u043d\u043e\u0432\u043e\u0441\u0442\u044f\u0445 \u043d\u0430 \u043d\u0430\u0448\u0435\u043c \u0441\u0435\u0440\u0432\u0435\u0440\u0435 Discord!"}),Object(j.jsx)("div",{className:"Links",children:N.map((function(e,a){return Object(j.jsx)("a",{title:e.title,href:e.url,children:Object(j.jsx)("i",{className:e.icon})},a)}))})]})},A=function(e){var a="";return Object(j.jsx)(j.Fragment,{children:e.changelog.map((function(e,t){var n=!0;return a===e.date?n=!1:a=e.date,Object(j.jsx)(b,Object(y.a)(Object(y.a)({},e),{},{renderDate:n}),t)}))})},R=function(e){return Object(j.jsx)("div",{className:"Error",children:e.message})},P=function(e){Object(p.a)(t,e);var a=Object(f.a)(t);function t(e){var n;return Object(h.a)(this,t),(n=a.call(this,new k,"/html/changelogs/.all_changelog.json")).cdn=void 0,n.cdn=e,n}return Object(g.a)(t,[{key:"Changelog",value:function(){var e=this;return function(){var a=Object(n.useState)(void 0),t=Object(T.a)(a,2),r=t[0],s=t[1],c=Object(n.useState)({}),i=Object(T.a)(c,2),h=i[0],g=i[1];return Object(n.useEffect)((function(){(function(){var a=Object(u.a)(o.a.mark((function a(){var t;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,e.cdn.fetchJson(e.repository,e.changelogFilePath);case 3:t=a.sent,g({changelog:t}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),s("\u041f\u0440\u043e\u0431\u043b\u0435\u043c\u044b \u0441 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435\u043c \u26a0\ufe0f");case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(){return a.apply(this,arguments)}})()()}),[]),Object(j.jsxs)(B,{theme:"onyx",children:[Object(j.jsx)(B.Header,{children:Object(j.jsx)(D,{})}),Object(j.jsx)(B.Body,{children:r?Object(j.jsx)(R,{message:r}):h.changelog?Object(j.jsx)(A,{changelog:h.changelog}):Object(j.jsx)(C,{text:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0447\u0435\u0439\u043d\u0434\u0436\u043b\u043e\u0433\u043e\u0432"})})]})}}}]),t}(F),M={bugfix:"fas fa-bug",tweak:"fas fa-wrench",soundadd:"fas fa-music",sounddel:"fas fa-minus",rscadd:"fas fa-plus",rscdel:"fas fa-minus",imageadd:"fas fa-palette",imagedel:"fas fa-minus",maptweak:"far fa-compass",spellcheck:"fas fa-spell-check",experiment:"fas fa-hard-hat",admin:"fas fa-crown",balance:"fas fa-balance-scale"},S={bugfix:"green",tweak:"green",soundadd:"green",rscadd:"green",imageadd:"green",maptweak:"green",spellcheck:"green",admin:"green",balance:"yellow",experiment:"yellow",sounddel:"red",rscdel:"red",imagedel:"red"};var L=function(){var e=new l,a=new P(e).Changelog();return Object(j.jsx)(a,{})},I=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,235)).then((function(a){var t=a.getCLS,n=a.getFID,r=a.getFCP,s=a.getLCP,c=a.getTTFB;t(e),n(e),r(e),s(e),c(e)}))};console.log("\n    ________                __  _      ____\n   / ____/ /_  ____ _____  / /_(_)____/ __ \\____  __  ___  __\n  / /   / __ \\/ __ `/ __ \\/ __/ / ___/ / / / __ \\/ / / / |/_/\n / /___/ / / / /_/ / /_/ / /_/ / /__/ /_/ / / / / /_/ />  <  \n \\____/_/ /_/\\__,_/\\____/\\__/_/\\___/\\____/_/ /_/\\__, /_/|_|  \n                                               /____/        \n"),c.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(L,{})}),document.getElementById("root")),I()},87:function(e){e.exports=JSON.parse('[{"author":"TobyThorne","date":"2021-07-21T00:00:00+03:00","changes":[{"prefix":"Tweak","message":"\u0422\u0435\u043f\u0435\u0440\u044c \u0443 \u043f\u0435\u0447\u0435\u043d\u0438 \u0435\u0441\u0442\u044c \u0437\u0430\u043f\u0430\u0441 \u0442\u043e\u043a\u0441-\u0443\u0440\u043e\u043d\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043e\u043d\u0430 \u043c\u043e\u0436\u0435\u0442 \u0441\u0434\u0435\u0440\u0436\u0430\u0442\u044c. \u0415\u0441\u043b\u0438 \u0437\u0430\u043f\u0430\u0441 \u043d\u0435 \u043f\u0440\u0435\u0432\u044b\u0448\u0435\u043d - \u0442\u043e\u043a\u0441\u0438\u043d\u044b \u0431\u0443\u0434\u0443\u0442 \u043f\u043e\u0441\u0442\u0435\u043f\u0435\u043d\u043d\u043e \u0432\u044b\u0432\u043e\u0434\u0438\u0442\u044c\u0441\u044f \u0438\u0437 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u043c\u0430, \u043d\u0435 \u043d\u0430\u043d\u043e\u0441\u044f \u0443\u0440\u043e\u043d\u0430. \u0415\u0441\u043b\u0438 \u043f\u0440\u0435\u0432\u044b\u0448\u0435\u043d - \u043a\u0430\u043a \u0438 \u0440\u0430\u043d\u044c\u0448\u0435, \u043e\u0440\u0433\u0430\u043d\u044b \u0431\u0443\u0434\u0443\u0442 \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u0443\u0440\u043e\u043d, \u043d\u0430\u0447\u0438\u043d\u0430\u044f \u0441 \u043f\u0435\u0447\u0435\u043d\u0438 \u0438 \u043f\u043e\u0447\u0435\u043a.","pr":5039},{"prefix":"RscAdd","message":"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u044b \u0448\u0430\u0445\u0442\u0451\u0440\u0441\u043a\u0438\u0435 \u043a\u0443\u0432\u0430\u043b\u0434\u044b. \u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043c\u043e\u0436\u043d\u043e \u0415\u041c\u0410\u0413\u043d\u0443\u0432 \u0448\u0430\u0445\u0442\u0451\u0440\u0441\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043c\u0430\u0442.","pr":5904},{"prefix":"BugFix","message":"\u0418\u0441\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u044b \u043d\u0435\u0432\u0438\u0434\u0438\u043c\u044b\u0435 \u0442\u0443\u043b\u043e\u0432\u0438\u0449\u0430 \u0443 \u0424\u0411\u041f-\u0442\u043e\u043d\u043a\u043e\u043c\u0430\u043b\u044c\u0447\u0438\u043a\u043e\u0432.","pr":6089},{"prefix":"BugFix","message":"\u0418\u0441\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u044b \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u043e\u0448\u0438\u0431\u043a\u0438 \u043f\u0440\u0438 \u0441\u043f\u0430\u0432\u043d\u0435 \u043a\u0441\u0435\u043d\u043e\u043c\u043e\u0440\u0444\u043e\u0432.","pr":6100},{"prefix":"RscAdd","message":"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430 \u043a\u0430\u0441\u0442\u043e\u043c\u043a\u0430 \u0434\u043b\u044f AmiClerick.","pr":6103},{"prefix":"BugFix","message":"\u0422\u0435\u043f\u0435\u0440\u044c \u0432\u0437\u043b\u043e\u043c\u0430\u043d\u043d\u044b\u0435 \u043c\u0443\u043b\u044c\u0442\u0438\u0442\u0443\u043b\u043e\u043c \u044f\u0449\u0438\u043a\u0438 \u043d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u043e \u0447\u0438\u043d\u044f\u0442\u0441\u044f \u043c\u0443\u043b\u044c\u0442\u0438\u0442\u0443\u043b\u043e\u043c \u0436\u0435.","pr":6106},{"prefix":"BugFix","message":"\u0418\u0441\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0435 \u0441\u044b\u043f\u043b\u044e\u0449\u0438\u0445\u0441\u044f \u0438\u0437 \u0432\u0437\u043b\u043e\u043c\u0430\u043d\u043d\u044b\u0445 \u044f\u0449\u0438\u043a\u043e\u0432 \u0438\u0441\u043a\u0440.","pr":6106},{"prefix":"BugFix","message":"\u0418\u0441\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0430 \u043f\u0440\u043e\u043d\u0438\u043a\u0430\u044e\u0449\u0430\u044f \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u044c \u0441\u0442\u0430\u043d-\u043f\u0430\u0442\u0440\u043e\u043d\u043e\u0432 \u0434\u043b\u044f \u0434\u0440\u043e\u0431\u043e\u0432\u0438\u043a\u0430. \u0422\u0435\u043f\u0435\u0440\u044c \u043e\u043d\u0438 \u043d\u0435 \u0431\u0443\u0434\u0443\u0442 \u043d\u0430\u043d\u043e\u0441\u0438\u0442\u044c \u0430\u043d\u043e\u043c\u0430\u043b\u044c\u043d\u043e \u0432\u044b\u0441\u043e\u043a\u0438\u0439 \u0443\u0440\u043e\u043d \u043f\u043e \u043e\u0440\u0433\u0430\u043d\u0430\u043c.","pr":6107},{"prefix":"Tweak","message":"\u0421\u0442\u0430\u0440\u044b\u0435 \u0441\u043b\u043e\u043c\u0430\u043d\u043d\u044b\u0435 \u043a\u0430\u043d\u043d\u0430\u0431\u0430\u0440\u044b \u0438\u0437 \u0432\u0437\u043b\u043e\u043c\u0430\u043d\u043d\u043e\u0433\u043e \u043c\u0435\u0434\u0438\u0446\u0438\u043d\u0441\u043a\u043e\u0433\u043e \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0430 \u0441\u043e \u0441\u043d\u044d\u043a\u0430\u043c\u0438 \u0437\u0430\u043c\u0435\u043d\u0435\u043d\u044b \u043d\u0430 \u043d\u043e\u0432\u044b\u0435 \u043a\u043e\u043d\u0444\u0435\u0442\u044b - Hemp2Gen.","pr":6125}]},{"author":"HonkyDonky","date":"2021-07-21T00:00:00+03:00","changes":[{"prefix":"RscAdd","message":"\u0413\u0435\u043d\u043e\u043a\u0440\u0430\u0434\u0430\u043c \u0432\u044b\u0434\u0430\u043d\u0430 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u0430\u044f \u0437\u0430\u0434\u0430\u0447\u0430 \u043d\u0430 \u043a\u0440\u0430\u0436\u0443 \u043b\u0438\u0447\u043d\u043e\u0441\u0442\u0438. \u0414\u043b\u044f \u0435\u0451 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0433\u0435\u043d\u043e\u043a\u0440\u0430\u0434\u0443 \u043d\u0443\u0436\u043d\u043e \u0443\u043b\u0435\u0442\u0435\u0442\u044c \u043d\u0430 \u0448\u0430\u0442\u0442\u043b\u0435 \u0441 \u043e\u0431\u043b\u0438\u043a\u043e\u043c \u0438 \u043d\u0430\u0434\u0435\u0442\u043e\u0439 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u043e\u0439 \u0436\u0435\u0440\u0442\u0432\u044b. \u0421 \u043c\u043e\u043c\u0435\u043d\u0442\u0430 \u0442\u0440\u0430\u043d\u0441\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u0432 \u0436\u0435\u0440\u0442\u0432\u0443 \u0434\u043e\u043b\u0436\u043d\u043e \u043f\u0440\u043e\u0439\u0442\u0438 \u043a\u0430\u043a \u043c\u0438\u043d\u0438\u043c\u0443\u043c \u0442\u0440\u0438 \u043c\u0438\u043d\u0443\u0442\u044b, \u0438\u043d\u0430\u0447\u0435 \u043d\u0435 \u0437\u0430\u0447\u0442\u0451\u0442\u0441\u044f.","pr":5250},{"prefix":"Tweak","message":"\u0417\u0430\u0434\u0430\u0447\u0430 \u043d\u0430 \u0443\u0431\u0438\u0439\u0441\u0442\u0432\u043e \u0443 \u0433\u0435\u043d\u043e\u043a\u0440\u0430\u0434\u043e\u0432 \u0437\u0430\u043c\u0435\u043d\u0435\u043d\u0430 \u0437\u0430\u0434\u0430\u0447\u0435\u0439 \u043d\u0430 \u043a\u0440\u0430\u0436\u0443 \u043b\u0438\u0447\u043d\u043e\u0441\u0442\u0438.","pr":5250},{"prefix":"Tweak","message":"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0445 \u0414\u041d\u041a \u0434\u043b\u044f \u043f\u043e\u0436\u0438\u0440\u0430\u043d\u0438\u044f \u0433\u0435\u043d\u043e\u043a\u0440\u0430\u0434\u0430\u043c \u0441\u043d\u0438\u0437\u0438\u043b\u043e\u0441\u044c \u0441 5-7 \u0434\u043e 2-3.","pr":5250},{"prefix":"RscAdd","message":"\u041a\u0438\u0431\u043e\u0440\u0433 \u0441 \u0430\u043a\u0442\u0438\u0432\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u043c \u043b\u0430\u0437\u0435\u0440\u043d\u044b\u043c \u043c\u0435\u0447\u043e\u043c \u0442\u0435\u043f\u0435\u0440\u044c \u0441\u043f\u043e\u0441\u043e\u0431\u0435\u043d \u043e\u0442\u0440\u0430\u0436\u0430\u0442\u044c \u0441\u043d\u0430\u0440\u044f\u0434\u044b. \u041c\u0435\u0445\u0430\u043d\u0438\u043a\u0430 \u0438\u0434\u0435\u043d\u0442\u0438\u0447\u043d\u0430 \u043e\u0431\u044b\u0447\u043d\u044b\u043c \u043b\u0430\u0437\u0435\u0440\u043d\u044b\u043c \u043c\u0435\u0447\u0430\u043c.","pr":6153},{"prefix":"BugFix","message":"\u041a\u0438\u0431\u043e\u0440\u0433\u0438 \u0431\u043e\u043b\u044c\u0448\u0435 \u043d\u0435 \u043c\u043e\u0433\u0443\u0442 \u0443\u0434\u0430\u043b\u0435\u043d\u043d\u043e \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c \u0441 \u043d\u0430\u0434\u0443\u0432\u043d\u044b\u043c\u0438 \u0434\u0432\u0435\u0440\u044f\u043c\u0438.","pr":6160}]},{"author":"hard-res3t","date":"2021-07-21T00:00:00+03:00","changes":[{"prefix":"MapTweak","message":"\u041c\u0438\u043a\u0440\u043e-\u0431\u0430\u0433\u0444\u0438\u043a\u0441\u044b \u043a\u0430\u0440\u0442\u044b \u0424\u0440\u043e\u043d\u0442\u0438\u0440.","pr":5844},{"prefix":"MapTweak","message":"\u0414\u043e\u0431\u0430\u0432\u0438\u043b \u0448\u0440\u0435\u0434\u0435\u0440 \u0432 \u043e\u0444\u0438\u0441 \u0410\u0412\u0414 (\u0424\u0440\u043e\u043d\u0442\u0438\u0440).","pr":5844},{"prefix":"MapTweak","message":"\u0414\u043e\u0431\u0430\u0432\u0438\u043b \u043f\u043b\u0430\u043d\u0448\u0435\u0442 (\u0437\u0430 \u043c\u0435\u0441\u0442\u043e \u043a\u043e\u043d\u0441\u043e\u043b\u0438) \u0432 \u043e\u0444\u0438\u0441 \u0410\u0412\u0414 (\u0424\u0440\u043e\u043d\u0442\u0438\u0440).","pr":5844},{"prefix":"MapTweak","message":"\u041c\u0438\u043a\u0440\u043e-\u0431\u0430\u0433\u0444\u0438\u043a\u0441\u044b \u043a\u0430\u0440\u0442\u044b \u0418\u0441\u0445\u043e\u0434\u0430.","pr":5908},{"prefix":"MapTweak","message":"\u0417\u0430\u043c\u0435\u043d\u0438\u043b \u043a\u0438\u0441\u043b\u043e\u0440\u043e\u0434 \u043d\u0430 \u0430\u0437\u043e\u0442 \u043d\u0430 \u0431\u0430\u0437\u0435 \u0432\u043e\u043a\u0441\u043e\u0432 \u0438 \u043a\u043e\u0440\u0430\u0431\u043b\u0435.","pr":5908}]},{"author":"BWJes","date":"2021-07-21T00:00:00+03:00","changes":[{"prefix":"RscAdd","message":"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u043f\u043e\u044f\u0441 \u0434\u043b\u044f \u0443\u0431\u043e\u0440\u0449\u0438\u043a\u0430, \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0432 \u0448\u043a\u0430\u0444\u0447\u0438\u043a\u0435 \u0443\u0431\u043e\u0440\u0449\u0438\u043a\u0430.","pr":5945}]},{"author":"Oubi","date":"2021-07-21T00:00:00+03:00","changes":[{"prefix":"BugFix","message":"\u0418\u0441\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e \u0441\u043c\u0435\u0448\u0438\u0432\u0430\u043d\u0438\u0435 \u0430\u043d\u0442\u0438\u0442\u0435\u043b. \u0422\u0435\u043f\u0435\u0440\u044c \u0438\u0445 \u0447\u0430\u0441\u0442\u044c \u043d\u0435 \u043f\u0440\u043e\u043f\u0430\u0434\u0430\u0435\u0442.","pr":5953},{"prefix":"RscAdd","message":"\u0415\u0441\u0432\u043e\u0440\u0434\u044b \u0442\u0435\u043f\u0435\u0440\u044c \u0438\u0437\u043b\u0443\u0447\u0430\u044e\u0442 \u0441\u0432\u0435\u0442 \u0432 \u0442\u0435\u043c\u043d\u043e\u0442\u0435","pr":5993}]},{"author":"Doster-d","date":"2021-07-21T00:00:00+03:00","changes":[{"prefix":"Tweak","message":"\u041f\u0440\u0438 \u0430\u043a\u0442\u0438\u0432\u0430\u0446\u0438\u0438 \u043f\u043e\u0440\u0442\u0430\u043b\u0430, \u0432\u0441\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u044b \u043d\u0430 \u0442\u0443\u0440\u0444\u0435, \u0433\u0434\u0435 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u043f\u043e\u0440\u0442\u0430\u043b, \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0430\u044e\u0442\u0441\u044f \u0432 \u0441\u043e\u0441\u0435\u0434\u043d\u0438\u0435 \u0442\u0443\u0440\u0444\u044b.","pr":5962},{"prefix":"BugFix","message":"\u041f\u0440\u0438 \u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438 \u0433\u0435\u043d\u043e\u043a\u0440\u0430\u0434\u043e\u043c \u0447\u0435\u0440\u0435\u0437 \u0433\u0435\u043d\u043a\u043e\u0440\u0435\u0430\u0433\u0435\u043d\u0442 \u043a\u043e\u0441\u043c\u043e\u043d\u0430\u0432\u0442\u0438\u043a\u0438 \u0431\u043e\u043b\u044c\u0448\u0435 \u043d\u0435 \u043f\u043e\u043b\u0443\u0447\u0430\u044e\u0442 \u0437\u0430\u0434\u0430\u043d\u0438\u044f \u0433\u0435\u043d\u043e\u043a\u0440\u0430\u0434\u043e\u0432.","pr":5989},{"prefix":"BugFix","message":"\u041a\u043e\u0441\u043c\u043e\u043d\u0430\u0432\u0442\u0438\u043a\u0438, \u0441\u0442\u0430\u0432\u0448\u0438\u0435 \u0433\u0435\u043d\u043e\u043a\u0440\u0430\u0434\u0430\u043c\u0438 \u0447\u0435\u0440\u0435\u0437 \u0433\u0435\u043d\u043a\u043e\u0440\u0435\u0430\u0433\u0435\u043d\u0442\u044b \u0438\u043b\u0438 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u044c Division \u0442\u0435\u043f\u0435\u0440\u044c \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u0432 \u0441\u043f\u0438\u0441\u043a\u0435 \u0430\u043d\u0442\u0430\u0433\u043e\u043d\u0438\u0441\u0442\u043e\u0432 \u0432 \u043a\u043e\u043d\u0446\u0435 \u0440\u0430\u0443\u043d\u0434\u0430.","pr":5989},{"prefix":"Tweak","message":"\u0422\u0435\u043f\u0435\u0440\u044c \u043d\u0435\u043b\u044c\u0437\u044f \u0433\u0440\u0430\u0431\u0430\u0442\u044c \u0447\u0435\u043b\u043e\u0432\u0435\u043a\u0430 \u0438 \u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0435\u0433\u043e \u0432 \u0433\u0440\u0430\u0431\u0435 \u0437\u0430 \u043a\u0438\u043b\u043e\u043c\u0435\u0442\u0440.","pr":6088}]},{"author":"Zert0X","date":"2021-07-21T00:00:00+03:00","changes":[{"prefix":"Balance","message":"\u0420\u0435\u0431\u0430\u043b\u0430\u043d\u0441 \u0446\u0435\u043d \u043d\u0430 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0441\u043a\u0438\u043b\u043b\u044b \u0434\u043b\u044f \u0432\u0430\u043c\u043f\u0438\u0440\u0430","pr":5996},{"prefix":"RscAdd","message":"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0441\u043a\u0438\u043b\u043b \u043d\u0430 \u043d\u043e\u0447\u043d\u043e\u0435 \u0437\u0440\u0435\u043d\u0438\u0435","pr":5996},{"prefix":"Tweak","message":"\u0422\u0435\u043a\u0441\u0442 \u043e \u0443\u043a\u0443\u0441\u0435 \u0438 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0445 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430\u0445 \u0441\u0442\u0430\u043b \u043f\u043e\u0431\u043e\u043b\u044c\u0448\u0435","pr":5996}]},{"author":"NefrNerf","date":"2021-07-21T00:00:00+03:00","changes":[{"prefix":"BugFix","message":"\u0424\u0435\u0439\u043a\u043e\u0432\u044b\u0439 \u0430\u0440\u043c\u0431\u043b\u0435\u0439\u0434 \u0431\u043e\u043b\u044c\u0448\u0435 \u043d\u0435 \u0433\u0438\u0431\u0431\u0430\u0435\u0442\u0441\u044f \u043e\u0442 \u042d\u041c\u0418.","pr":6016},{"prefix":"BugFix","message":"\u0418\u0441\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0430\u0440\u043c\u0431\u043b\u0435\u0439\u0434\u0430, \u0443\u0431\u0440\u0430\u043d\u0430 \u0441\u0442\u0440\u043e\u0447\u043a\u0430 \u043f\u0440\u043e \u0440\u0435\u0444\u043b\u0435\u043a\u0442 \u043f\u0443\u043b\u044c.","pr":6016},{"prefix":"BugFix","message":"\u041d\u0443\u043b\u043b \u0440\u043e\u0434 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0441\u0442\u0435\u043d\u044b \u0438 \u043f\u043e\u043b \u043f\u043e\u0441\u043b\u0435 \u043a\u0443\u043b\u044c\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 \u0432 \u043e\u0440\u0438\u0433\u0438\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u0432\u0438\u0434.","pr":6053},{"prefix":"Tweak","message":"\u041a\u0443\u043b\u044c\u0442\u043e-\u043f\u043e\u043b \u0431\u043e\u043b\u044c\u0448\u0435 \u043d\u0435\u043b\u044c\u0437\u044f \u0441\u043d\u044f\u0442\u044c \u0433\u0430\u0435\u0447\u043d\u044b\u043c \u043a\u043b\u044e\u0447\u043e\u043c.","pr":6053}]},{"author":"MaxDornan","date":"2021-07-21T00:00:00+03:00","changes":[{"prefix":"ImageAdd","message":"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u044b \u043d\u043e\u0432\u044b\u0435 \u0441\u043f\u0440\u0430\u0439\u0442\u044b \u0434\u043b\u044f \u0447\u0430\u0448\u043a\u0438 \u041f\u0435\u0442\u0440\u0438.","pr":6062}]},{"author":"Epicus7","date":"2021-07-21T00:00:00+03:00","changes":[{"prefix":"BugFix","message":"\u0418\u0441\u043f\u0440\u0430\u0432\u0438\u043b \u0441\u043f\u0430\u0432\u043d \u0432\u043e\u043a\u0441\u043e\u0432-\u0440\u0435\u0439\u0434\u0435\u0440\u043e\u0432 \u043d\u0430 \u0441\u0442\u0430\u043d\u0446\u0438\u0438 \u0432\u043c\u0435\u0441\u0442\u043e \u0438\u0445 \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0439 \u043b\u043e\u043a\u0430\u0446\u0438\u0438.","pr":6097}]},{"author":"igorsaux","date":"2021-07-21T00:00:00+03:00","changes":[{"prefix":"Admin","message":"\u041f\u043e\u0444\u0438\u043a\u0448\u0435\u043d \u0432\u0435\u0440\u0431 Respawn Character.","pr":6108},{"prefix":"BugFix","message":"\u0418\u0441\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0430 \u043d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u043e\u043b \u0432 \u043e\u043f\u0435\u043d \u0441\u043f\u0435\u0439\u0441\u0435 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0420\u0426\u0414.","pr":6152}]},{"author":"Nod404","date":"2021-07-21T00:00:00+03:00","changes":[{"prefix":"BugFix","message":"\u0418\u0441\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0441\u043f\u0440\u0430\u0439\u0442\u0430 \u043a\u043e\u043d\u0444\u0435\u0442 \u0432\u043e \u0432\u0437\u043b\u043e\u043c\u0430\u043d\u043d\u043e\u043c \u043c\u0435\u0434\u0431\u0435\u0435\u0432\u0441\u043a\u043e\u043c \u0432\u0435\u043d\u0434\u043e\u043c\u0430\u0442\u0435.","pr":6121},{"prefix":"Tweak","message":"\u0417\u0430\u0436\u0436\u0451\u043d\u043d\u044b\u0435 \u0441\u0438\u0433\u0430\u0440\u0435\u0442\u044b \u0442\u0435\u043f\u0435\u0440\u044c \u0441\u0432\u0435\u0442\u044f\u0442 \u043d\u0435 \u0442\u0430\u043a \u044f\u0440\u043a\u043e.","pr":6137}]},{"author":"Gr13v0us","date":"2021-07-12T00:00:00+03:00","changes":[{"prefix":"Tweak","message":"Matter decompiler \u0442\u0435\u043f\u0435\u0440\u044c \u043c\u043e\u0436\u0435\u0442 \u043f\u0435\u0440\u0435\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c \u0441\u043f\u0438\u0447\u043a\u0438.","pr":5938}]},{"author":"igorsaux","date":"2021-07-12T00:00:00+03:00","changes":[{"prefix":"ImageAdd","message":"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u0434\u043b\u044f Floor Painter.","pr":5994}]},{"author":"Doster-d","date":"2021-07-12T00:00:00+03:00","changes":[{"prefix":"Tweak","message":"\u0412\u0437\u0440\u044b\u0432\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u0432 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0440\u0430\u0437 \u0431\u044b\u0441\u0442\u0440\u0435\u0435.","pr":6008}]},{"author":"No-Tips","date":"2021-07-12T00:00:00+03:00","changes":[{"prefix":"BugFix","message":"\u0424\u0438\u043a\u0441 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u044f \u0441\u043f\u0440\u0430\u0439\u0442\u0430 \u0430\u0434\u0430\u043c\u0430\u043d\u0442\u0438\u043d\u043e\u0432\u043e\u0433\u043e \u043c\u0435\u0442\u0440\u043e\u0438\u0434\u0430.","pr":6023}]},{"author":"Gr13v0us","date":"2021-07-08T00:00:00+03:00","changes":[{"prefix":"RscDel","message":"\u0418\u0437 \u043b\u043e\u0434\u0430\u0443\u0442\u0430 \u0443\u0434\u0430\u043b\u0435\u043d\u0430 \u043e\u0434\u0435\u0436\u0434\u0430 \u0434\u043b\u044f IPC.","pr":5943},{"prefix":"BugFix","message":"\u0423\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u0430 \u0432\u043c\u0435\u0441\u0442\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0441\u0438\u043d\u0434\u0438\u043a\u0430\u0442\u043e\u0432\u0441\u043a\u0438\u0445 \u0442\u0443\u043b\u0431\u043e\u043a\u0441\u043e\u0432.","pr":5954}]}]')},95:function(e,a,t){},97:function(e,a,t){}},[[230,1,2]]]);
//# sourceMappingURL=main.910f3c1b.chunk.js.map
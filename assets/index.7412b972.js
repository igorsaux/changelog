var e=Object.defineProperty,r=Object.defineProperties,n=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,c=(r,n,t)=>n in r?e(r,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[n]=t,o=(e,r,n)=>(c(e,"symbol"!=typeof r?r+"":r,n),n);import{j as i,a as l,F as h,x as d,T as u,p as g,l as m,d as p,y as f,m as y,b,M as w,D as v,I as x,c as N,S as k}from"./vendor.f8f73573.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)})).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?r.credentials="include":"anonymous"===e.crossorigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();const C=i,O=l,_=h,$=e=>C("div",{className:"ChangelogLayout "+(e.theme?`theme-${e.theme}`:""),children:e.children});$.Body=e=>C("div",{className:"ChangelogLayout__body",children:e.children}),$.Header=d((function(e,r){return C("div",{ref:r,className:"ChangelogLayout__header",children:e.children})}));function L(e){const r=e.prUrl.split("/"),n=r[3],t=r[4],s=r[6],a=g();return C(u,{animation:"scale",theme:"light",interactive:!0,interactiveBorder:10,maxWidth:400,inertia:!0,delay:[0,250],touch:!1,onShow:()=>{a.current&&(a.current.src=`https://opengraph.githubassets.com/1/${n}/${t}/pull/${s}`)},content:C("a",{href:e.prUrl,rel:"noreferrer",target:"_blank",className:"GitHubPopover",children:C("img",{ref:a,src:"https://opengraph.githubassets.com/1/",alt:""})}),children:e.children})}const j=e=>{const r=function(e){const[r,n]=m(!0),t=p((()=>new IntersectionObserver((([e])=>n(e.isIntersecting)))),[]);return f((()=>{if(e.current)return t.observe(e.current),()=>t.disconnect()}),[e]),r}(e.topElement);return C("button",{onClick:()=>window.scrollTo(0,0),className:"GoUp "+(r?"GoUp--hide":""),children:C("i",{className:"fas fa-arrow-up"})})};const P=e=>{const{show:r,children:n,className:t}=e;return C("div",{className:`Modal ${t||""} ${r?"":"Modal--hide"}`,children:n})};const F=e=>O("div",{className:"Spinner",children:[C("i",{className:"Spinner__icon fas fa-spinner"}),C("span",{className:"Spinner__text",children:e.text})]});const U=e=>O("div",{className:"Changelog",children:[e.renderDate?C(U.Date,{date:e.date}):"",C(U.Author,{author:e.author}),C(U.Changes,{changes:e.changes})]}),E=new Intl.DateTimeFormat("ru-RU",{day:"numeric",month:"long",year:"numeric"});U.Date=e=>C("div",{className:"Changelog__date",children:C("span",{children:E.format(new Date(e.date))})});U.Author=e=>O("h3",{className:"Changelog__author",children:[e.author," updated:"]});const S=e=>{const r=g(),n=`https://github.com/ChaoticOnyx/OnyxBay/pull/${e.pr}`;return C("sup",{className:"PR",children:C(L,{prUrl:n,children:O("a",{ref:r,rel:"noreferrer",target:"_blank",className:"PR__link",href:n,children:["#",e.pr]})})})},B=e=>{const r=g(),n=e.change.prefix.toLowerCase(),t=function(e){return e[0].toLocaleUpperCase()+e.substring(1)}(e.change.message);return f((()=>{r.current.insertAdjacentHTML("afterend",y.parse(t))}),[r]),O("li",{className:`Changes__change ${z[n]}`,children:[C("i",{ref:r,className:W[n]}),e.change.pr?C(S,{pr:e.change.pr}):""]})};U.Changes=e=>C("ul",{className:"Changes",children:e.changes.map(((e,r)=>C(B,{change:e},r)))});const D=e=>O(_,{children:[C("h2",{children:`Список изменений сервера ${e.serverName}`}),C("p",{children:"Разработка ведется при помощи игроков, которые поддерживают сервер своими пожертвованиями! Если вы хотите поддержать нас и принять участие в голосовании за то, какие фичи будут реализованы следующими, то подробную информацию можно найти в новостях на нашем сервере Discord!"}),C("div",{className:"Links",children:K.map(((e,r)=>C("a",{title:e.title,href:e.url,children:C("i",{className:e.icon})},r)))})]}),A=e=>{let o="";return C(_,{children:e.changelog.map(((e,i)=>{let l=!0;return o===e.date?l=!1:o=e.date,C(U,(h=((e,r)=>{for(var n in r||(r={}))s.call(r,n)&&c(e,n,r[n]);if(t)for(var n of t(r))a.call(r,n)&&c(e,n,r[n]);return e})({},e),r(h,n({renderDate:l}))));var h}))})},I=e=>C(P,{className:"Error",show:e.show,children:C("span",{children:e.message})}),M=e=>C(P,{show:e.show,children:C(F,{text:e.message})}),R=e=>{const r=g();return O($,{theme:"onyx",children:[C($.Header,{ref:r,children:C(D,{serverName:e.serverName})}),e.changelog.length&&O(_,{children:[C($.Body,{children:C(A,{changelog:e.changelog})}),C(j,{topElement:r})]})||"",C(M,{message:"Загрузка чейнджлогов",show:!e.changelog.length&&!e.error}),e.error&&C(I,{message:e.error,show:!0})]})};class T{constructor(e,r){o(this,"name"),o(this,"owner"),this.name=e,this.owner=r}getUrl(){return`https://github.com/${this.owner}/${this.name}`}}class G extends T{constructor(){super("OnyxBay","ChaoticOnyx")}}class H extends T{constructor(){super("OnyxBay","ChaoticOnyx")}}class J{constructor(e,r,n,t){o(this,"repository"),o(this,"changelogFilePath"),o(this,"name"),o(this,"branch"),this.name=e,this.repository=r,this.changelogFilePath=n,this.branch=t}async LoadChangelogAsync(e){return await e.FetchJsonAsync(this.repository,this.changelogFilePath,encodeURIComponent(this.branch))}}const q=e=>{const[r,n]=m(void 0),[t,s]=m([]),{cdn:a}=b(X);return f((()=>{((e,r,n,t)=>{r.LoadChangelogAsync(e).then((e=>t(e))).catch((e=>n(e)))})(a,e.server,(e=>n("Проблемы с подключением ⚠️")),(e=>s(e)))}),[]),C(R,{serverName:e.server.name,changelog:t,error:r})};const W={bugfix:"fas fa-bug",tweak:"fas fa-wrench",soundadd:"fas fa-music",sounddel:"fas fa-minus",rscadd:"fas fa-plus",rscdel:"fas fa-minus",imageadd:"fas fa-palette",imagedel:"fas fa-minus",maptweak:"far fa-compass",spellcheck:"fas fa-spell-check",experiment:"fas fa-hard-hat",admin:"fas fa-crown",balance:"fas fa-balance-scale"},z={bugfix:"green",tweak:"green",soundadd:"green",rscadd:"green",imageadd:"green",maptweak:"green",spellcheck:"green",admin:"green",balance:"yellow",experiment:"yellow",sounddel:"red",rscdel:"red",imagedel:"red"},K=[{title:"Patreon",url:"https://www.patreon.com/chaoticonyx",icon:"fab fa-patreon"},{title:"Wiki",url:"https://wiki.ss13.ru",icon:"fas fa-book"},{title:"GitHub",url:"https://github.com/ChaoticOnyx/OnyxBay",icon:"fab fa-github"},{title:"Discord",url:"https://discord.gg/5BRMMFg",icon:"fab fa-discord"}];function Q(){return C("div",{className:"BlinkCursor"})}const V=e=>O("div",{className:"ServersList",children:[C("h1",{className:"ServersList__title",children:"Список серверов:"}),e.children,C(Q,{})]});V.Entry=e=>{const{server:r}=e;return C("h3",{className:"ServersList__entry",children:C(w,{href:`/${e.id}`,children:r.name})})};const X=v({cdn:new class extends class{constructor(e){o(this,"cdn"),this.cdn=e}async Fetch(e){return await fetch(`${this.cdn}/${e}`,{method:"GET",mode:"cors"})}async FetchJsonAsync(e,r,n){const t=await this.Fetch(this.Join(e,r,n));return await t.json()}Join(e,r,n){return`${e.owner}/${e.name}/${n}${r}`}}{constructor(){super("https://raw.githubusercontent.com")}},api:new class{constructor(){o(this,"baseUrl","https://api.github.com")}async PullRequest(e,r){const n=await fetch(`${this.baseUrl}/repos/${e.owner}/${e.name}/pulls/${r}`);if(!n.ok)throw new Error(n.statusText);return await n.json()}}}),Y={chaotic:new class extends J{constructor(){super("Chaotic Onyx",new G,"/html/changelogs/.all_changelog.json","release/chaotic")}Changelog(){return()=>q({server:this})}},eos:new class extends J{constructor(){super("EOS",new H,"/html/changelogs/.all_changelog.json","release/eos")}Changelog(){return()=>q({server:this})}}};function Z(){const e=Object.keys(Y);return C(V,{children:e.map((e=>C(V.Entry,{id:e,server:Y[e]})))})}console.log("%cOnyx","\n  color: #F34160;\n  font-weight: bold;\n  font-size: 12ch;\n  text-shadow: 0px 1px black, 0 2px black, 0 3px black, 0 4px black;\n  font-style: italic;\n"),k(C((function(){const e=Object.keys(Y);return O(x,{history:N(),children:[e.map((e=>{const r=Y[e].Changelog();return C(r,{path:`/${e}`})})),C(Z,{default:!0})]})}),{}),document.body);
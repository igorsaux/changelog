var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(t,r,n)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n;import{R as l,r as o,a as i,b as m,L as h,S as u,c as d,d as g,H as p}from"./vendor.83583fa5.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const f=e=>l.createElement("div",{className:"ChangelogLayout "+(e.theme?`theme-${e.theme}`:"")},e.children);f.Body=e=>l.createElement("div",{className:"ChangelogLayout__body"},e.children),f.Header=l.forwardRef((function(e,t){return l.createElement("div",{ref:t,className:"ChangelogLayout__header"},e.children)}));const E=e=>l.createElement("button",{onClick:()=>window.scrollTo(0,0),className:"GoUp "+(e.show?"":"GoUp--hide")},l.createElement("i",{className:"fas fa-arrow-up"})," Вверх");const y=e=>{const{show:t,children:r,className:n}=e;return l.createElement("div",{className:`Modal ${n||""} ${t?"":"Modal--hide"}`},r)};const w=e=>l.createElement("div",{className:"Spinner"},l.createElement("i",{className:"Spinner__icon fas fa-spinner"}),l.createElement("span",{className:"Spinner__text"},e.text));const b=e=>l.createElement("div",{className:"Changelog"},e.renderDate?l.createElement(b.Date,{date:e.date}):"",l.createElement(b.Author,{author:e.author}),l.createElement(b.Changes,{changes:e.changes})),v=new Intl.DateTimeFormat("ru-RU",{day:"numeric",month:"long",year:"numeric"});b.Date=e=>l.createElement("div",{className:"Changelog__date"},l.createElement("span",null,v.format(new Date(e.date))));b.Author=e=>l.createElement("h3",{className:"Changelog__author"},e.author," updated:");const x=e=>l.createElement("sup",{className:"PR"},l.createElement("a",{className:"PR__link",href:`https://github.com/ChaoticOnyx/OnyxBay/pull/${e.pr}`},"#",e.pr)),N=e=>{const t=e.change.prefix.toLowerCase();return l.createElement("li",{className:`Changes__change ${D[t]}`},l.createElement("i",{className:B[t]}),l.createElement(i,{rehypePlugins:[m],transformLinkUri:null},e.change.message),e.change.pr?l.createElement(x,{pr:e.change.pr}):"")};b.Changes=e=>l.createElement("ul",{className:"Changes"},e.changes.map(((e,t)=>l.createElement(N,{key:t,change:e}))));const C=e=>l.createElement(l.Fragment,null,l.createElement("h2",null,`Список изменений сервера ${e.serverName}`),l.createElement("p",null,"Разработка ведется при помощи игроков, которые поддерживают сервер своими пожертвованиями! Если вы хотите поддержать нас и принять участие в голосовании за то, какие фичи будут реализованы следующими, то подробную информацию можно найти в новостях на нашем сервере Discord!"),l.createElement("div",{className:"Links"},A.map(((e,t)=>l.createElement("a",{key:t,title:e.title,href:e.url},l.createElement("i",{className:e.icon})))))),k=e=>{let o="";return l.createElement(l.Fragment,null,e.changelog.map(((e,i)=>{let m=!0;return o===e.date?m=!1:o=e.date,l.createElement(b,(h=((e,t)=>{for(var r in t||(t={}))a.call(t,r)&&c(e,r,t[r]);if(n)for(var r of n(t))s.call(t,r)&&c(e,r,t[r]);return e})({key:i},e),t(h,r({renderDate:m}))));var h})))},O=e=>l.createElement(y,{className:"Error",show:e.show},l.createElement("span",null,e.message)),_=e=>l.createElement(y,{show:e.show},l.createElement(w,{text:e.message})),L=e=>{const t=o.exports.useRef(null),r=function(e){const[t,r]=o.exports.useState(!1),n=o.exports.useMemo((()=>new IntersectionObserver((([e])=>r(e.isIntersecting)))),[]);return o.exports.useEffect((()=>{if(e.current)return n.observe(e.current),()=>n.disconnect()}),[e]),t}(t);return l.createElement(f,{theme:"onyx"},l.createElement(f.Header,{ref:t},l.createElement(C,{serverName:e.serverName})),e.changelog.length&&l.createElement(l.Fragment,null,l.createElement(f.Body,null,l.createElement(k,{changelog:e.changelog})),l.createElement(E,{show:!r}))||"",l.createElement(_,{message:"Загрузка чейнджлогов",show:!e.changelog.length&&!e.error}),e.error&&l.createElement(O,{message:e.error,show:!0}))};class ${constructor(e,t,r){this.name=e,this.owner=t,this.branch=r}getUrl(){return`https://github.com/${this.owner}/${this.name}`}}class S extends ${constructor(){super("OnyxBay","ChaoticOnyx","release%2Fchaotic")}}class F extends ${constructor(){super("OnyxBay","ChaoticOnyx","release%2Feos")}}class j{constructor(e,t,r){this.name=e,this.repository=t,this.changelogFilePath=r}async LoadChangelogAsync(e){return await e.FetchJsonAsync(this.repository,this.changelogFilePath)}}const P=e=>{const[t,r]=o.exports.useState(void 0),[n,a]=o.exports.useState([]),{cdn:s}=o.exports.useContext(I);return o.exports.useEffect((()=>{((e,t,r,n)=>{t.LoadChangelogAsync(e).then((e=>n(e))).catch((e=>r(e)))})(s,e.server,(e=>r("Проблемы с подключением ⚠️")),(e=>a(e)))}),[]),l.createElement(L,{serverName:e.server.name,changelog:n,error:t})};const B={bugfix:"fas fa-bug",tweak:"fas fa-wrench",soundadd:"fas fa-music",sounddel:"fas fa-minus",rscadd:"fas fa-plus",rscdel:"fas fa-minus",imageadd:"fas fa-palette",imagedel:"fas fa-minus",maptweak:"far fa-compass",spellcheck:"fas fa-spell-check",experiment:"fas fa-hard-hat",admin:"fas fa-crown",balance:"fas fa-balance-scale"},D={bugfix:"green",tweak:"green",soundadd:"green",rscadd:"green",imageadd:"green",maptweak:"green",spellcheck:"green",admin:"green",balance:"yellow",experiment:"yellow",sounddel:"red",rscdel:"red",imagedel:"red"},A=[{title:"Patreon",url:"https://www.patreon.com/chaoticonyx",icon:"fab fa-patreon"},{title:"Wiki",url:"https://wiki.ss13.ru",icon:"fas fa-book"},{title:"GitHub",url:"https://github.com/ChaoticOnyx/OnyxBay",icon:"fab fa-github"},{title:"Discord",url:"https://discord.gg/5BRMMFg",icon:"fab fa-discord"}];const M=()=>l.createElement("div",{className:"BlinkCursor"});const R=e=>l.createElement("div",{className:"ServersList"},l.createElement("h1",{className:"ServersList__title"},"Список серверов:"),e.children,l.createElement(M,null));R.Entry=e=>{const{server:t}=e;return l.createElement("h3",{className:"ServersList__entry"},l.createElement(h,{to:`/${e.id}`},t.name))};const I=l.createContext({cdn:new class extends class{constructor(e){this.cdn=e}async Fetch(e){return await fetch(`${this.cdn}/${e}`,{method:"GET",mode:"cors"})}async FetchJsonAsync(e,t){const r=await this.Fetch(this.Join(e,t));return await r.json()}Join(e,t){return`${e.owner}/${e.name}/${e.branch}${t}`}}{constructor(){super("https://github-cdn.vercel.app")}}}),U={chaotic:new class extends j{constructor(){super("Chaotic Onyx",new S,"/html/changelogs/.all_changelog.json")}Changelog(){return()=>P({server:this})}},eos:new class extends j{constructor(){super("EOS",new F,"/html/changelogs/.all_changelog.json")}Changelog(){return()=>P({server:this})}}},G=()=>{const e=Object.keys(U);return l.createElement(R,null,e.map((e=>l.createElement(R.Entry,{key:e,id:e,server:U[e]}))))},H=()=>{const e=Object.keys(U);return l.createElement(u,null,e.map((e=>{const t=U[e].Changelog();return l.createElement(d,{key:e,path:`/${e}`},l.createElement(t,null))})),l.createElement(d,null,l.createElement(G,null)))};console.log("\n ..|''||                             \n.|'    ||  .. ...   .... ... ... ... \n||      ||  ||  ||   '|.  |   '|..'  \n'|.     ||  ||  ||    '|.|     .|.   \n ''|...|'  .||. ||.    '|    .|  ||. \n                    .. |             \n                     ''              \n"),g.render(l.createElement(l.StrictMode,null,l.createElement(p,null,l.createElement(H,null))),document.getElementById("root"));
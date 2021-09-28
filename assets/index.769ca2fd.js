var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,l=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r;import{R as c,r as o,a as i,b as m,L as u,S as h,c as d,d as p,H as g}from"./vendor.83583fa5.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const a of e)if("childList"===a.type)for(const e of a.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const f=e=>c.createElement("div",{className:"ChangelogLayout "+(e.theme?`theme-${e.theme}`:"")},e.children);f.Body=e=>c.createElement("div",{className:"ChangelogLayout__body"},e.children),f.Header=c.forwardRef((function(e,t){return c.createElement("div",{ref:t,className:"ChangelogLayout__header"},e.children)}));const E=new Intl.DateTimeFormat("ru-RU",{day:"numeric",month:"long",year:"numeric"});function y(e){const{pr:t}=e;return c.createElement("div",{className:"PullRequestCard"},c.createElement("div",{className:"Repository"},t.repository.owner,"/",t.repository.name),c.createElement("div",{className:"Naming"},c.createElement("span",{className:"Number"},"#",t.number)," ",c.createElement("span",{className:"Title"},t.title)),c.createElement("div",{className:"Misc"},c.createElement("img",{className:"Avatar",src:t.author.avatar,alt:t.author.login}),c.createElement("span",{className:"Author"},t.author.login),c.createElement("span",{className:"CloseDate"}," • ",E.format(new Date(t.closed)))))}function w(){return c.createElement("div",{className:"PullRequestCard PullRequestCard--Placeholder"},c.createElement("div",{className:"Repository Repository--Placeholder"}),c.createElement("div",{className:"Naming Naming--Placeholder"}),c.createElement("div",{className:"Misc Misc--Placeholder"}))}function x(){return c.createElement("div",{className:"PullRequestCard PullRequestCard--Error"},"😔 Гитхаб недоступен.")}function v(e){const t=e.prUrl.split("/"),a=t[3],r=t[4],n=t[6],[s,l]=o.exports.useState(!1),[i,m]=o.exports.useState(void 0),[u,h]=o.exports.useState(0),[d,p]=o.exports.useState(0),g=o.exports.useCallback((t=>{if(!t||!e.target.current)return h(0);const a=t.getBoundingClientRect(),r=e.target.current.getBoundingClientRect();let n=0,s=0;a.x+300>=document.body.offsetWidth&&(n=-(a.x+300-document.body.offsetWidth+10)),s=r.x-a.x-n,h(n),p(s)}),[]);o.exports.useEffect((()=>{fetch(`https://api.github.com/repos/${a}/${r}/pulls/${n}`,{cache:"force-cache"}).then((e=>e.json())).then((e=>(l(!1),m({title:e.title,closed:e.closed_at,author:{login:e.user.login,avatar:e.user.avatar_url},number:n,repository:{owner:a,name:r}})))).catch((e=>(l(!0),e)))}),[]);const f={left:`${14+d}px`},E={left:`${u}px`};return c.createElement("a",{href:e.prUrl,style:E,ref:g,className:"GitHubPopover"},c.createElement("svg",{style:f,className:"GitHubPopover__Arrow",width:"14",height:"7",viewBox:"0 0 14 7",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.createElement("path",{d:"M7 0L0 7H14L7 0Z",fill:"#E1E4E8"}),c.createElement("path",{d:"M7 1.5L1.5 7H12.5L7 1.5Z",fill:"white"})),c.createElement("div",{className:"GitHubPopover__Content",style:{width:"300px"}},s?c.createElement(x,null):i?c.createElement(y,{pr:i}):c.createElement(w,null)))}const b=e=>{const t=function(e){const[t,a]=o.exports.useState(!0),r=o.exports.useMemo((()=>new IntersectionObserver((([e])=>a(e.isIntersecting)))),[]);return o.exports.useEffect((()=>{if(e.current)return r.observe(e.current),()=>r.disconnect()}),[e]),t}(e.topElement);return c.createElement("button",{onClick:()=>window.scrollTo(0,0),className:"GoUp "+(t?"GoUp--hide":"")},c.createElement("i",{className:"fas fa-arrow-up"}))};const N=e=>{const{show:t,children:a,className:r}=e;return c.createElement("div",{className:`Modal ${r||""} ${t?"":"Modal--hide"}`},a)};const C=e=>c.createElement("div",{className:"Spinner"},c.createElement("i",{className:"Spinner__icon fas fa-spinner"}),c.createElement("span",{className:"Spinner__text"},e.text));const k=e=>c.createElement("div",{className:"Changelog"},e.renderDate?c.createElement(k.Date,{date:e.date}):"",c.createElement(k.Author,{author:e.author}),c.createElement(k.Changes,{changes:e.changes})),_=new Intl.DateTimeFormat("ru-RU",{day:"numeric",month:"long",year:"numeric"});k.Date=e=>c.createElement("div",{className:"Changelog__date"},c.createElement("span",null,_.format(new Date(e.date))));k.Author=e=>c.createElement("h3",{className:"Changelog__author"},e.author," updated:");const O=e=>{const t=o.exports.useRef(null),[a,r]=o.exports.useState(!1),n=`https://github.com/ChaoticOnyx/OnyxBay/pull/${e.pr}`;return c.createElement("sup",{onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),className:"PR"},c.createElement("a",{ref:t,className:"PR__link",href:n},"#",e.pr),a?c.createElement(v,{target:t,prUrl:n}):null)},P=e=>{const t=e.change.prefix.toLowerCase();return c.createElement("li",{className:`Changes__change ${U[t]}`},c.createElement("i",{className:H[t]}),c.createElement(i,{rehypePlugins:[m],transformLinkUri:null},e.change.message),e.change.pr?c.createElement(O,{pr:e.change.pr}):"")};k.Changes=e=>c.createElement("ul",{className:"Changes"},e.changes.map(((e,t)=>c.createElement(P,{key:t,change:e}))));const L=e=>c.createElement(c.Fragment,null,c.createElement("h2",null,`Список изменений сервера ${e.serverName}`),c.createElement("p",null,"Разработка ведется при помощи игроков, которые поддерживают сервер своими пожертвованиями! Если вы хотите поддержать нас и принять участие в голосовании за то, какие фичи будут реализованы следующими, то подробную информацию можно найти в новостях на нашем сервере Discord!"),c.createElement("div",{className:"Links"},G.map(((e,t)=>c.createElement("a",{key:t,title:e.title,href:e.url},c.createElement("i",{className:e.icon})))))),$=e=>{let o="";return c.createElement(c.Fragment,null,e.changelog.map(((e,i)=>{let m=!0;return o===e.date?m=!1:o=e.date,c.createElement(k,(u=((e,t)=>{for(var a in t||(t={}))n.call(t,a)&&l(e,a,t[a]);if(r)for(var a of r(t))s.call(t,a)&&l(e,a,t[a]);return e})({key:i},e),t(u,a({renderDate:m}))));var u})))},R=e=>c.createElement(N,{className:"Error",show:e.show},c.createElement("span",null,e.message)),S=e=>c.createElement(N,{show:e.show},c.createElement(C,{text:e.message})),F=e=>{const t=o.exports.useRef(null);return c.createElement(f,{theme:"onyx"},c.createElement(f.Header,{ref:t},c.createElement(L,{serverName:e.serverName})),e.changelog.length&&c.createElement(c.Fragment,null,c.createElement(f.Body,null,c.createElement($,{changelog:e.changelog})),c.createElement(b,{topElement:t}))||"",c.createElement(S,{message:"Загрузка чейнджлогов",show:!e.changelog.length&&!e.error}),e.error&&c.createElement(R,{message:e.error,show:!0}))};class M{constructor(e,t,a){this.name=e,this.owner=t,this.branch=a}getUrl(){return`https://github.com/${this.owner}/${this.name}`}}class j extends M{constructor(){super("OnyxBay","ChaoticOnyx","release%2Fchaotic")}}class B extends M{constructor(){super("OnyxBay","ChaoticOnyx","release%2Feos")}}class D{constructor(e,t,a){this.name=e,this.repository=t,this.changelogFilePath=a}async LoadChangelogAsync(e){return await e.FetchJsonAsync(this.repository,this.changelogFilePath)}}const A=e=>{const[t,a]=o.exports.useState(void 0),[r,n]=o.exports.useState([]),{cdn:s}=o.exports.useContext(T);return o.exports.useEffect((()=>{((e,t,a,r)=>{t.LoadChangelogAsync(e).then((e=>r(e))).catch((e=>a(e)))})(s,e.server,(e=>a("Проблемы с подключением ⚠️")),(e=>n(e)))}),[]),c.createElement(F,{serverName:e.server.name,changelog:r,error:t})};const H={bugfix:"fas fa-bug",tweak:"fas fa-wrench",soundadd:"fas fa-music",sounddel:"fas fa-minus",rscadd:"fas fa-plus",rscdel:"fas fa-minus",imageadd:"fas fa-palette",imagedel:"fas fa-minus",maptweak:"far fa-compass",spellcheck:"fas fa-spell-check",experiment:"fas fa-hard-hat",admin:"fas fa-crown",balance:"fas fa-balance-scale"},U={bugfix:"green",tweak:"green",soundadd:"green",rscadd:"green",imageadd:"green",maptweak:"green",spellcheck:"green",admin:"green",balance:"yellow",experiment:"yellow",sounddel:"red",rscdel:"red",imagedel:"red"},G=[{title:"Patreon",url:"https://www.patreon.com/chaoticonyx",icon:"fab fa-patreon"},{title:"Wiki",url:"https://wiki.ss13.ru",icon:"fas fa-book"},{title:"GitHub",url:"https://github.com/ChaoticOnyx/OnyxBay",icon:"fab fa-github"},{title:"Discord",url:"https://discord.gg/5BRMMFg",icon:"fab fa-discord"}];const I=()=>c.createElement("div",{className:"BlinkCursor"});const q=e=>c.createElement("div",{className:"ServersList"},c.createElement("h1",{className:"ServersList__title"},"Список серверов:"),e.children,c.createElement(I,null));q.Entry=e=>{const{server:t}=e;return c.createElement("h3",{className:"ServersList__entry"},c.createElement(u,{to:`/${e.id}`},t.name))};const T=c.createContext({cdn:new class extends class{constructor(e){this.cdn=e}async Fetch(e){return await fetch(`${this.cdn}/${e}`,{method:"GET",mode:"cors"})}async FetchJsonAsync(e,t){const a=await this.Fetch(this.Join(e,t));return await a.json()}Join(e,t){return`${e.owner}/${e.name}/${e.branch}${t}`}}{constructor(){super("https://github-cdn.vercel.app")}}}),J={chaotic:new class extends D{constructor(){super("Chaotic Onyx",new j,"/html/changelogs/.all_changelog.json")}Changelog(){return()=>A({server:this})}},eos:new class extends D{constructor(){super("EOS",new B,"/html/changelogs/.all_changelog.json")}Changelog(){return()=>A({server:this})}}},W=()=>{const e=Object.keys(J);return c.createElement(q,null,e.map((e=>c.createElement(q.Entry,{key:e,id:e,server:J[e]}))))},Z=()=>{const e=Object.keys(J);return c.createElement(h,null,e.map((e=>{const t=J[e].Changelog();return c.createElement(d,{key:e,path:`/${e}`},c.createElement(t,null))})),c.createElement(d,null,c.createElement(W,null)))};console.log("%cOnyx","\n  color: #F34160;\n  font-weight: bold;\n  font-size: 12ch;\n  text-shadow: 0px 1px black, 0 2px black, 0 3px black, 0 4px black;\n  font-style: italic;\n"),p.render(c.createElement(c.StrictMode,null,c.createElement(g,null,c.createElement(Z,null))),document.getElementById("root"));
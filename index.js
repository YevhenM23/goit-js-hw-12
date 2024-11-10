import{a as M,S as b}from"./assets/vendor-Kt0AZ5QJ.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();const v="46809919-8ae2f3dd2d3333d4ada30ded2";async function u(s="dogs",e=1){return(await M("https://pixabay.com/api/",{params:{key:v,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:e}})).data}const o={loadMore:document.querySelector(".js-load-more"),form:document.querySelector(".search-form"),list:document.querySelector(".list"),loader:document.querySelector(".loader")};function p(){o.loadMore.classList.remove("is-hidden")}function d(){o.loadMore.classList.add("is-hidden")}function m(){o.loader.style.display="block"}function h(){o.loader.style.display="none"}function y(s){return s.map(({webformatURL:e,largeImageURL:n,tags:a,likes:t,views:r,comments:l,downloads:L})=>`
     <li class="list-item">
     <a href="${n}">
         <img src="${e}" alt="${a}" title="${a}"/>
     </a>
        <div class="info">
        <p>❤️ ${t}</p>
        <p>👁️${r}</p>
        <p>💬${l}</p>
        <p>⬇️${L}</p>
        </div>
     </li>
    `).join("")}let g=new b(".list a",{captionsData:"alt",captionDelay:250});const f=15;let i=1,c="";o.form.addEventListener("submit",async s=>{if(s.preventDefault(),o.list.innerHTML="",m(),i=1,c=s.target.elements.query.value.trim(),!!c){d();try{const e=await u(c,i);o.list.insertAdjacentHTML("beforeend",y(e.hits)),g.refresh(),e.hits.length<f||i===Math.ceil(e.total/f)?d():p()}catch(e){console.log(e)}finally{h()}}});o.loadMore.addEventListener("click",P);async function P(s){i+=1,m(),d();try{const e=await u(c,i);o.list.insertAdjacentHTML("beforeend",y(e.hits)),g.refresh(),Math.ceil(e.total/f)===i?d():p()}catch(e){console.log("Error:",e)}finally{h()}}
//# sourceMappingURL=index.js.map

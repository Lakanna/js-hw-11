(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();function f(r){return r.map(({comments:o,likes:c,downloads:i,views:e,largeImageURL:t,webformatURL:n,tags:u})=>`
          <li class="img-container">
             <a href="${t}"><img src="${n}" alt="${u}" /></a>
             <ul class="tags-list">
               <li>Comments: ${o}</li>
               <li>Likes: ${c}</li>
               <li>Views: ${e} </li>
               <li>Downloads: ${i}</li>
             </ul>
         </li>`).join("")}const l={searchForm:document.querySelector(".js-form"),imageList:document.querySelector(".js-list")};l.searchForm.addEventListener("submit",m);let s="";function m(r){if(r.preventDefault(),s=r.currentTarget.elements.searchImg.value.trim(),s===""){console.log("add value");return}p().then(({hits:o})=>l.imageList.innerHTML=f(o)).catch(o=>console.log(o)),console.log("in handler",s)}const d="40437222-3b8e1aead0ae08f3118e12752",h="https://pixabay.com/api/",g=new URLSearchParams({key:d,q:`${s}`,image_type:"photo",orientation:"horizontal",safesearch:"true"});console.log("not handler",s);const a=`${h}?${g}`;console.log(a);function p(){return fetch(a).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}
//# sourceMappingURL=commonHelpers.js.map

/*
  Aura Admin Bridge — i18n translations from dashboard
  Backend: https://dashboardtours-production.up.railway.app
*/
(function(){
  "use strict";
  var API_BASE="https://dashboardtours-production.up.railway.app";
  var DEBUG=!!window.AURA_ADMIN_DEBUG;
  var lastConfig=null, applying=false, startedAt=Date.now();
  function log(){ if(DEBUG&&console) console.log.apply(console,["[AuraBridge]"].concat([].slice.call(arguments))); }
  function sid(){try{var k="aura_admin_session_id",v=localStorage.getItem(k);if(v)return v;v=(crypto.randomUUID?crypto.randomUUID():"aura_"+Date.now()+"_"+Math.random().toString(36).slice(2));localStorage.setItem(k,v);return v}catch(e){return "aura_"+Date.now()}}
  var SID=sid();
  function getLang(){
    var q=new URLSearchParams(location.search).get("lang");
    if(q) return q;
    var active=document.querySelector(".lang-btn.active");
    if(active) return (active.dataset.lang||active.textContent||"").trim().toLowerCase().slice(0,2);
    return (document.documentElement.lang||navigator.language||"en").toLowerCase().slice(0,2);
  }
  function apiGet(path){return fetch(API_BASE+path+(path.includes("?")?"&":"?")+"_="+Date.now(),{cache:"no-store",headers:{Accept:"application/json"}}).then(r=>r.text().then(t=>{try{return JSON.parse(t)}catch(e){throw new Error("not json: "+t.slice(0,60))}}))}
  function post(path,body){return fetch(API_BASE+path,{method:"POST",mode:"cors",credentials:"omit",headers:{"Content-Type":"application/json"},body:JSON.stringify(body||{})}).catch(()=>null)}
  function track(eventName,payload){return post("/api/track",{eventName,sessionId:SID,path:location.pathname,url:location.href,title:document.title,referrer:document.referrer||"",language:getLang(),userAgent:navigator.userAgent,viewport:{width:innerWidth,height:innerHeight},payload:payload||{},ts:new Date().toISOString()})}
  function norm(raw){var c=(raw&&raw.data)||raw||{};return {site:c.site||{},siteTranslations:c.siteTranslations||c.translations||{},tours:Array.isArray(c.tours)?c.tours:[],coupons:Array.isArray(c.coupons)?c.coupons:[]}}
  function val(site,key){return site&&site[key]?site[key]:""}
  function txt(sel,v){if(v===undefined||v===null||v==="")return;document.querySelectorAll(sel).forEach(el=>{el.textContent=String(v)})}
  function html(sel,v){if(v===undefined||v===null||v==="")return;document.querySelectorAll(sel).forEach(el=>{el.innerHTML=String(v)})}
  function apply(c){
    if(!c) return; applying=true; lastConfig=c; window.AURA_ADMIN_CONFIG=c;
    try{
      var lang=getLang();
      var site=(c.siteTranslations&&c.siteTranslations[lang])||c.siteTranslations.en||c.siteTranslations.it||c.site||{};
      txt('[data-i18n="hero.title"], .hero h1',val(site,"heroTitle"));
      txt('[data-i18n="hero.sub"], .hero-sub',val(site,"heroSubtitle"));
      html('[data-i18n-html="hero.cta"], .hero-btn.primary',val(site,"ctaPrimary"));
      txt('[data-i18n="btn.whatsapp"], #heroWaBtn, #mobileWaBtn, #summaryWaBtn',val(site,"ctaWhatsapp"));
      txt('[data-i18n="hero.urgency"], .availability-cue',val(site,"availability"));
      if(val(site,"seoTitle")){document.title=val(site,"seoTitle");var t=document.getElementById("pageTitle");if(t)t.textContent=val(site,"seoTitle")}
      if(val(site,"seoDescription")){var d=document.getElementById("pageDesc");if(d)d.setAttribute("content",val(site,"seoDescription"))}
      (c.tours||[]).forEach(tour=>{
        var id=String(tour.id||tour.slug||tour.name||"").toLowerCase().trim();
        if(!id)return;
        document.querySelectorAll('[data-tour-id="'+id+'"],[data-tour="'+id+'"],.card').forEach(card=>{
          var hay=(card.textContent||"").toLowerCase();
          var ok=card.matches('[data-tour-id="'+id+'"],[data-tour="'+id+'"]') || hay.includes(id.replace(/-/g," "));
          if(!ok)return;
          card.style.display=(tour.active===false||tour.enabled===false)?"none":"";
          var p=tour.privatePricePerPerson||tour.privatePrice||tour.price;
          var pe=card.querySelector(".price,[data-admin='tour-price']");
          if(pe&&p)pe.textContent="from €"+Number(p).toFixed(0);
        })
      });
      log("applied",lang,site);
    }finally{setTimeout(()=>{applying=false},80)}
  }
  function load(){return apiGet("/api/public/site-config").then(raw=>{var c=norm(raw);try{localStorage.setItem("aura_admin_last_public_config",JSON.stringify(c))}catch(e){};apply(c);track("site_config_loaded",{ok:true})}).catch(e=>{try{var cached=localStorage.getItem("aura_admin_last_public_config");if(cached)apply(JSON.parse(cached))}catch(_){ } track("site_config_failed",{message:String(e.message||e)})})}
  function reapply(){if(!lastConfig||applying)return;clearTimeout(reapply.t);reapply.t=setTimeout(()=>apply(lastConfig),120)}
  document.addEventListener("click",function(e){var target=e.target.closest&&e.target.closest("a,button,[role='button'],.card,.lang-btn,.pay-choice,.exp-btn");if(!target)return;var href=target.getAttribute("href")||"",label=(target.innerText||target.textContent||"").trim().slice(0,180),cls=typeof target.className==="string"?target.className.slice(0,140):"",id=target.id||"",ev="site_click";if(/wa\.me|whatsapp|api\.whatsapp/i.test(href+" "+label+" "+cls+" "+id))ev="whatsapp_click";if(/checkout|book|select|prenota|secure|pay|card/i.test(label+" "+cls+" "+id))ev="booking_intent";if(target.classList&&target.classList.contains("lang-btn")){ev="language_change";setTimeout(reapply,200);setTimeout(reapply,700)}track(ev,{id,className:cls,label,href})},true);
  if(window.MutationObserver){new MutationObserver(()=>{if(!applying)reapply()}).observe(document.body,{childList:true,subtree:true,characterData:true})}
  addEventListener("beforeunload",function(){try{navigator.sendBeacon(API_BASE+"/api/track",new Blob([JSON.stringify({eventName:"page_exit",sessionId:SID,path:location.pathname,url:location.href,payload:{durationMs:Date.now()-startedAt},ts:new Date().toISOString()})],{type:"application/json"}))}catch(e){}});
  window.AuraAdminBridge={loadConfig:load,applyConfig:apply,track:track,apiBase:API_BASE};
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",()=>{track("page_view",{source:"aura-admin-bridge-i18n-translated"});load();setTimeout(load,900);setTimeout(reapply,1800)});else{track("page_view",{source:"aura-admin-bridge-i18n-translated"});load();setTimeout(load,900);setTimeout(reapply,1800)}
})();
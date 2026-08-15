/* ═══ GDPR COOKIES ═══ */
(function(){
  if(!localStorage.getItem('aura_cookies')){
    setTimeout(()=>{document.getElementById('cookie-banner').classList.add('show');},2000);
  }
})();
function acceptCookies(){
  localStorage.setItem('aura_cookies','accepted');
  document.getElementById('cookie-banner').classList.remove('show');
}
function rejectCookies(){
  localStorage.setItem('aura_cookies','rejected');
  document.getElementById('cookie-banner').classList.remove('show');
}

/* ═══ REVIEW MODAL ═══ */
let revBookingId='',revStars=0;
/* ═══ USER AUTH ON INDEX ═══ */
let uaToken=localStorage.getItem('aura_user_token')||'';
let uaUser=null;
let uaPendingEmail='';

function onNavUserClick(){
  if(uaUser){
    // Already logged in — show profile
    uaShowStep('logged');
    document.getElementById('ua-overlay').classList.add('open');
  }else{
    uaShowStep('login');
    document.getElementById('ua-overlay').classList.add('open');
  }
}
function closeUA(){document.getElementById('ua-overlay').classList.remove('open')}
function uaShowStep(s){
  document.querySelectorAll('.ua-step').forEach(el=>el.classList.remove('on'));
  document.getElementById('ua-'+s).classList.add('on');
}

async function uaLogin(){
  const email=document.getElementById('ua-l-email').value.trim();
  const pwd=document.getElementById('ua-l-pwd').value;
  const err=document.getElementById('ua-l-err');
  const btn=document.getElementById('ua-l-btn');
  if(!email||!pwd){err.textContent='Inserisci email e password';return}
  btn.disabled=true;btn.textContent='Accesso...';err.textContent='';
  try{
    const r=await fetch(BE+'/user/login',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email,password:pwd})});
    const d=await r.json();
    if(!r.ok){
      if(r.status===403 && d.needsVerification){
        uaPendingEmail=d.email||email;
        document.getElementById('ua-v-email').textContent=uaPendingEmail;
        uaShowStep('verify');
        fetch(BE+'/user/resend-code',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email:uaPendingEmail})}).then(function(r2){return r2.json()}).then(function(d2){
          if(d2.success){var ve=document.getElementById('ua-v-err');ve.style.color='var(--green,#34D399)';ve.textContent='Nuovo codice inviato alla tua email!';setTimeout(function(){ve.textContent='';ve.style.color='';},5000);}
        }).catch(function(){});
        btn.disabled=false;btn.textContent='Accedi';return;
      }
      err.textContent=d.error||'Errore';btn.disabled=false;btn.textContent='Accedi';return;
    }
    uaToken=d.token;localStorage.setItem('aura_user_token',uaToken);
    uaUser={name:d.name,email:d.email};
    uaUpdateUI();
    uaShowStep('logged');
  }catch(e){err.textContent='Errore di connessione'}
  btn.disabled=false;btn.textContent='Accedi';
}

async function uaRegister(){
  const name=document.getElementById('ua-r-name').value.trim();
  const email=document.getElementById('ua-r-email').value.trim();
  const phone=document.getElementById('ua-r-phone').value.trim();
  const pwd=document.getElementById('ua-r-pwd').value;
  const ref=document.getElementById('ua-r-ref').value.trim();
  const err=document.getElementById('ua-r-err');
  const btn=document.getElementById('ua-r-btn');
  if(!name||!email||!pwd){err.textContent='Compila tutti i campi obbligatori';return}
  btn.disabled=true;btn.textContent='Registrazione...';err.textContent='';
  try{
    const r=await fetch(BE+'/user/register',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email,password:pwd,name,phone,referredBy:ref||undefined})});
    const d=await r.json();
    if(!r.ok){err.textContent=d.error||'Errore';btn.disabled=false;btn.textContent='Registrati →';return}
    uaPendingEmail=email;
    document.getElementById('ua-v-email').textContent=email;
    uaShowStep('verify');
  }catch(e){err.textContent='Errore di connessione'}
  btn.disabled=false;btn.textContent='Registrati →';
}

async function uaVerify(){
  const code=document.getElementById('ua-v-code').value.trim();
  const err=document.getElementById('ua-v-err');
  const btn=document.getElementById('ua-v-btn');
  if(!code||code.length<6){err.textContent='Inserisci il codice a 6 cifre';return}
  btn.disabled=true;btn.textContent='Verifica...';err.textContent='';
  try{
    const r=await fetch(BE+'/user/verify',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email:uaPendingEmail,code})});
    const d=await r.json();
    if(!r.ok){err.textContent=d.error||'Codice non valido';btn.disabled=false;btn.textContent='Verifica →';return}
    // Verified — now prompt login
    uaShowStep('login');
    document.getElementById('ua-l-email').value=uaPendingEmail;
    document.getElementById('ua-l-err').textContent='✓ Email verificata! Inserisci la password.';
    document.getElementById('ua-l-err').style.color='var(--green,#34D399)';
    setTimeout(()=>{document.getElementById('ua-l-err').style.color='';},4000);
  }catch(e){err.textContent='Errore di connessione'}
  btn.disabled=false;btn.textContent='Verifica →';
}

function uaLogout(){
  uaToken='';uaUser=null;
  localStorage.removeItem('aura_user_token');
  uaUpdateUI();
  uaShowStep('login');
}

async function uaResendCode(){
  const link=document.getElementById('ua-resend-link');
  const err=document.getElementById('ua-v-err');
  if(!uaPendingEmail){err.textContent='Errore: email mancante';return}
  link.textContent='Invio in corso...';link.style.pointerEvents='none';
  try{
    const r=await fetch(BE+'/user/resend-code',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email:uaPendingEmail})});
    const d=await r.json();
    if(!r.ok){err.textContent=d.error||'Errore reinvio';link.textContent='Non hai ricevuto l\'email? Reinvia codice';link.style.pointerEvents='';return}
    err.textContent='';
    link.textContent='✓ Nuovo codice inviato!';link.style.color='var(--green,#34D399)';
    setTimeout(()=>{link.textContent='Non hai ricevuto l\'email? Reinvia codice';link.style.color='';link.style.pointerEvents='';},5000);
  }catch(e){err.textContent='Errore di connessione';link.textContent='Non hai ricevuto l\'email? Reinvia codice';link.style.pointerEvents='';}
}

function uaUpdateUI(){
  const txt=document.getElementById('nav-user-txt');
  const mobTxt=document.getElementById('nav-user-mob-txt');
  const mnLbl=document.getElementById('mn-user-lbl');
  const btn=document.getElementById('nav-user-btn');
  if(uaUser){
    const firstName=uaUser.name.split(' ')[0];
    if(txt)txt.textContent=firstName;
    if(mobTxt)mobTxt.textContent=firstName;
    if(mnLbl)mnLbl.textContent=firstName;
    if(btn)btn.classList.add('logged');
    document.getElementById('ua-avatar').textContent=uaUser.name.charAt(0).toUpperCase();
    document.getElementById('ua-name').textContent=uaUser.name;
    document.getElementById('ua-email').textContent=uaUser.email;
  }else{
    if(txt)txt.textContent='Accedi';
    if(mobTxt)mobTxt.textContent='Accedi';
    if(mnLbl)mnLbl.textContent='Accedi';
    if(btn)btn.classList.remove('logged');
  }
}

// Auto-login on page load if token exists
if(uaToken){
  fetch(BE+'/user/me',{headers:{'x-user-token':uaToken}})
    .then(r=>{if(r.ok)return r.json();throw new Error()})
    .then(d=>{uaUser={name:d.name,email:d.email};uaUpdateUI()})
    .catch(()=>{uaToken='';localStorage.removeItem('aura_user_token')});
}

function openRevModal(){
  document.getElementById('rev-overlay').classList.add('open');
  document.getElementById('rev-step1').classList.add('active');
  document.getElementById('rev-step2').classList.remove('active');
  document.getElementById('rev-step3').classList.remove('active');
  document.getElementById('rev-code').value='';
  document.getElementById('rev-err1').textContent='';
  document.getElementById('rev-err2').textContent='';
  revBookingId='';revStars=0;
}
function closeRevModal(){
  document.getElementById('rev-overlay').classList.remove('open');
}
async function revLogin(){
  const code=document.getElementById('rev-code').value.trim();
  const err=document.getElementById('rev-err1');
  const btn=document.getElementById('rev-login-btn');
  if(!code){err.textContent='Inserisci il codice prenotazione';return;}
  btn.disabled=true;btn.textContent='Verifica...';err.textContent='';
  try{
    const r=await fetch(BE+'/review-login',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({bookingId:code})});
    const d=await r.json();
    if(!r.ok){err.textContent=d.error||'Errore';btn.disabled=false;btn.textContent='Verifica Prenotazione →';return;}
    revBookingId=code;
    document.getElementById('rev-client-name').textContent=d.name||'';
    document.getElementById('rev-client-tour').textContent=d.tour||'';
    document.getElementById('rev-step1').classList.remove('active');
    document.getElementById('rev-step2').classList.add('active');
  }catch(e){err.textContent='Errore di connessione';}
  btn.disabled=false;btn.textContent='Verifica Prenotazione →';
}
function setRevStar(n){
  revStars=n;
  document.querySelectorAll('.rev-star').forEach(s=>{s.classList.toggle('on',parseInt(s.dataset.s)<=n);});
}
async function revSubmit(){
  const text=document.getElementById('rev-text').value.trim();
  const location=document.getElementById('rev-location').value.trim();
  const err=document.getElementById('rev-err2');
  const btn=document.getElementById('rev-submit-btn');
  if(revStars<1){err.textContent='Seleziona almeno una stella';return;}
  if(!text||text.length<10){err.textContent='Scrivi almeno 10 caratteri';return;}
  btn.disabled=true;btn.textContent='Invio...';err.textContent='';
  try{
    const r=await fetch(BE+'/review-submit',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({bookingId:revBookingId,stars:revStars,text,location})});
    const d=await r.json();
    if(!r.ok){err.textContent=d.error||'Errore';btn.disabled=false;btn.textContent='Invia Recensione →';return;}
    document.getElementById('rev-step2').classList.remove('active');
    document.getElementById('rev-step3').classList.add('active');
  }catch(e){err.textContent='Errore di connessione';}
  btn.disabled=false;btn.textContent='Invia Recensione →';
}

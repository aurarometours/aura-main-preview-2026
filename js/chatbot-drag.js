/* ═══ CHATBOT DRAG — desktop + mobile ═══ */
(function(){
  const fab=document.getElementById('cfab');
  const bot=document.getElementById('cbot');
  if(!fab)return;
  let dragging=false,startX,startY,fabX,fabY,hasMoved=false;
  const threshold=8;
  function onStart(e){
    const t=e.touches?e.touches[0]:e;
    startX=t.clientX;startY=t.clientY;
    const r=fab.getBoundingClientRect();
    fabX=r.left;fabY=r.top;
    dragging=true;hasMoved=false;
    fab.style.transition='none';
  }
  function onMove(e){
    if(!dragging)return;
    const t=e.touches?e.touches[0]:e;
    const dx=t.clientX-startX,dy=t.clientY-startY;
    if(!hasMoved&&Math.abs(dx)<threshold&&Math.abs(dy)<threshold)return;
    hasMoved=true;
    if(e.cancelable)e.preventDefault();
    let nx=fabX+dx,ny=fabY+dy;
    const w=fab.offsetWidth,h=fab.offsetHeight;
    nx=Math.max(4,Math.min(window.innerWidth-w-4,nx));
    ny=Math.max(4,Math.min(window.innerHeight-h-4,ny));
    fab.style.left=nx+'px';fab.style.top=ny+'px';
    fab.style.right='auto';fab.style.bottom='auto';
    if(bot&&bot.classList.contains('open')){
      const bw=bot.offsetWidth,bh=bot.offsetHeight;
      let bx=nx+w/2-bw/2,by=ny-bh-14;
      if(by<8)by=ny+h+14;
      bx=Math.max(8,Math.min(window.innerWidth-bw-8,bx));
      by=Math.max(8,Math.min(window.innerHeight-bh-8,by));
      bot.style.left=bx+'px';bot.style.top=by+'px';
      bot.style.right='auto';bot.style.bottom='auto';
    }
  }
  function onEnd(){
    if(!dragging)return;
    dragging=false;
    fab.style.transition='';
    if(hasMoved){fab._wasDragged=true;setTimeout(function(){fab._wasDragged=false},120);}
  }
  fab.addEventListener('mousedown',onStart);
  fab.addEventListener('touchstart',onStart,{passive:true});
  window.addEventListener('mousemove',onMove);
  window.addEventListener('touchmove',onMove,{passive:false});
  window.addEventListener('mouseup',onEnd);
  window.addEventListener('touchend',onEnd);
  var origTChat=window.tChat;
  window.tChat=function(){if(fab._wasDragged)return;origTChat()};
})();

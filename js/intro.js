// 原神式开场（轻量版）：不等待图片，1秒可进 + 跳过 + 兜底
(function(){
  const intro = document.getElementById('intro');
  if(!intro) return;
  const fill = document.getElementById('loadFill');
  const pct = document.getElementById('loadPct');
  const btn = document.getElementById('enterBtn');
  const flash = document.getElementById('white-flash');
  let p = 0, done = false;

  function ready(){
    if(done) return; done = true;
    if(fill) fill.style.width = '100%';
    if(pct) pct.textContent = '100%';
    intro.classList.add('ready');
    btn.disabled = false;
    btn.textContent = '点击进入 · ENTER';
  }
  // 进度只跑动画，不等图片/字体，约1.2s 必可点
  const t = setInterval(()=>{
    p += 6 + Math.random()*10;
    if(p >= 100){ clearInterval(t); ready(); return; }
    if(fill) fill.style.width = p + '%';
    if(pct) pct.textContent = Math.floor(p) + '%';
  }, 80);
  // 兜底：2.5s 无论如何可进（定时器被节流也不卡死）
  setTimeout(ready, 2500);

  function enter(){
    clearInterval(t); ready();
    btn.disabled = true;
    btn.textContent = '穿越中…';
    intro.classList.add('entering');
    setTimeout(()=>flash && flash.classList.add('on'), 450);
    setTimeout(()=>{
      intro.classList.add('hide');
      document.body.classList.remove('locked');
    }, 950);
    setTimeout(()=>flash && flash.classList.add('off'), 1100);
    setTimeout(()=>flash && flash.remove(), 2000);
    setTimeout(()=>intro.remove(), 2200);
  }
  btn.addEventListener('click', enter);
  addEventListener('keydown', e=>{ if(e.key==='Enter') enter(); });
})();

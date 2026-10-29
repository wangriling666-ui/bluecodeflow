// 卡其色缓落组件流：纸片/代码标签缓缓下落 + 旋转变换 + 鼠标轻扰
(function(){
  const hero = document.getElementById('khakiHero');
  const c = document.getElementById('fall-bg');
  if(!hero || !c) return;
  const ctx = c.getContext('2d');
  let W,H,parts=[];
  const mouse = {x:-9999,y:-9999};
  const WORDS = ['<div/>','{ }','=>','import','const','★3.2k','#[AI]','npm run','git push','---','0101','</>'];
  const TONES = ['#d8c9a3','#c9b98f','#b3a179','#e6dcc2'];

  function resize(){
    const r = hero.getBoundingClientRect();
    W = c.width = r.width; H = c.height = r.height;
  }
  resize(); addEventListener('resize', resize);

  function spawn(init){
    return {
      x: Math.random()*W,
      y: init ? Math.random()*H : -40,
      w: 54+Math.random()*70, h: 26+Math.random()*14,
      vy: .25+Math.random()*.55, sway: Math.random()*Math.PI*2, swaySpd: .004+Math.random()*.01,
      rot: (Math.random()-.5)*.6, vr:(Math.random()-.5)*.004,
      word: WORDS[Math.floor(Math.random()*WORDS.length)],
      tone: TONES[Math.floor(Math.random()*TONES.length)],
      alpha: .35+Math.random()*.45, scalePh: Math.random()*Math.PI*2
    };
  }
  const COUNT = Math.max(22, Math.floor(innerWidth/55));
  for(let i=0;i<COUNT;i++) parts.push(spawn(true));

  hero.addEventListener('mousemove', e=>{
    const r = c.getBoundingClientRect();
    mouse.x = e.clientX-r.left; mouse.y = e.clientY-r.top;
  });
  hero.addEventListener('mouseleave', ()=>{ mouse.x=-9999; });

  function roundRect(x,y,w,h,r){
    ctx.beginPath();
    ctx.moveTo(x+r,y); ctx.arcTo(x+w,y,x+w,y+h,r); ctx.arcTo(x+w,y+h,x,y+h,r);
    ctx.arcTo(x,y+h,x,y,r); ctx.arcTo(x,y,x+w,y,r); ctx.closePath();
  }

  function tick(t){
    // 开场覆盖时降频，省 CPU，等进入后再全速
    if(document.body.classList.contains('locked')){
      setTimeout(()=>requestAnimationFrame(tick), 200);
      return;
    }
    ctx.clearRect(0,0,W,H);
    parts.forEach(p=>{
      p.sway += p.swaySpd; p.rot += p.vr;
      p.y += p.vy; p.x += Math.sin(p.sway)*.4;
      // 变换：呼吸缩放
      const sc = 1 + Math.sin(t*.001 + p.scalePh)*.08;
      // 鼠标附近：轻轻推开 + 放大
      const dx = p.x-mouse.x, dy = p.y-mouse.y, d = Math.hypot(dx,dy);
      let boost = 0;
      if(d<140){ boost = (1-d/140); p.x += dx/d*boost*.9 || 0; p.y += dy/d*boost*.9 || 0; }
      if(p.y > H+50) Object.assign(p, spawn(false));

      ctx.save();
      ctx.translate(p.x, p.y); ctx.rotate(p.rot); ctx.scale(sc+boost*.25, sc+boost*.25);
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.tone;
      ctx.strokeStyle = 'rgba(90,75,50,.45)'; ctx.lineWidth = 1;
      // 纸质阴影
      ctx.shadowColor = 'rgba(90,70,30,.25)'; ctx.shadowBlur = 12; ctx.shadowOffsetY = 4;
      roundRect(-p.w/2,-p.h/2,p.w,p.h,7); ctx.fill(); ctx.stroke();
      ctx.shadowColor='transparent';
      ctx.globalAlpha = .9; ctx.fillStyle = '#3a332a';
      ctx.font = '11px JetBrains Mono, monospace'; ctx.textAlign='center'; ctx.textBaseline='middle';
      ctx.fillText(p.word, 0, 1);
      ctx.restore();
    });
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
})();

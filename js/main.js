// 渲染 + 打字机 + 数字滚动 + 缓落显现 + 滚动结构变换
function projCard(p){
  return `<div class="proj-card reveal-item">
    <div class="proj-top"><span class="icon">◈</span><span>★ ${p.stars} &nbsp; ⎇ ${p.forks}</span></div>
    <h3>${p.name}<span class="en">${p.en}</span></h3>
    <p>${p.desc}</p>
    <div class="meta"><span><i class="dot" style="background:${p.langColor}"></i>${p.lang}</span>${p.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
    <div class="card-actions">
      <a class="btn btn-primary btn-sm" href="${p.demo}" target="_blank">演示跳转 ↗</a>
      <a class="btn btn-ghost btn-sm" href="${p.src}" target="_blank">源码 GitHub</a>
    </div>
  </div>`;
}
function postCard(p){
  return `<div class="post-card reveal-item">
    <div class="post-meta-top"><span class="cat">${p.cat}</span><span>${p.date}</span><span>· ${p.read}</span></div>
    <h3>${p.title}</h3>
    <p>${p.desc}</p>
    <div class="meta">${p.tags.map(t=>`<span class="tag">#${t}</span>`).join('')}</div>
    <div class="card-actions"><a class="btn btn-ghost btn-sm" href="post.html?id=${p.id}">阅读全文 →</a></div>
  </div>`;
}

(function(){
  // --- 缓缓下落显现（必须先定义，渲染前可用） ---
  const io = ('IntersectionObserver' in window) ? new IntersectionObserver(es=>{
    es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  },{threshold:.12}) : null;
  function observeReveals(){
    const nodes = document.querySelectorAll('.reveal,.reveal-item:not(.in)');
    if(!io){ nodes.forEach(n=>n.classList.add('in')); return; }
    nodes.forEach((n,i)=>{
      n.style.transitionDelay = (i%3*0.08)+'s';
      io.observe(n);
    });
    // 兜底：2s 后还没显现的强制显示，防止空白
    setTimeout(()=>nodes.forEach(n=>n.classList.add('in')), 2000);
  }

  const fp = document.getElementById('featured-projects');
  if(fp) fp.innerHTML = PROJECTS.slice(0,3).map(projCard).join('');
  const lp = document.getElementById('latest-posts');
  if(lp) lp.innerHTML = POSTS.slice(0,3).map(postCard).join('');

  const txt = 'npm run dev // khaki-minimal online';
  const el = document.getElementById('typing');
  if(el){ let i=0; setInterval(()=>{ el.textContent = txt.slice(0, ++i % (txt.length+30)); }, 90); }

  document.querySelectorAll('[data-count]').forEach(b=>{
    const target = +b.dataset.count; let cur = 0;
    const step = Math.max(1, Math.floor(target/60));
    const t = setInterval(()=>{ cur+=step; if(cur>=target){cur=target;clearInterval(t)} b.textContent = cur>=1000 ? (cur/1000).toFixed(1)+'k' : cur; }, 30);
  });

  const all = document.getElementById('all-projects');
  if(all){
    const render = (cat)=>{
      const list = cat==='all' ? PROJECTS : PROJECTS.filter(p=>p.cat===cat);
      all.innerHTML = list.map(projCard).join('');
      observeReveals();
    };
    render('all');
    document.querySelectorAll('.filter-btn').forEach(btn=>btn.addEventListener('click',()=>{
      document.querySelectorAll('.filter-btn').forEach(x=>x.classList.remove('active'));
      btn.classList.add('active'); render(btn.dataset.cat);
    }));
  }
  const bl = document.getElementById('all-posts');
  if(bl) bl.innerHTML = POSTS.map(postCard).join('');

  observeReveals();

  // --- 往下滑动页面结构变换 ---
  const nav = document.getElementById('nav');
  const heroInner = document.getElementById('heroInner');
  const stack = document.getElementById('stack');
  const morphs = document.querySelectorAll('.morph');
  let ticking = false;
  function onScroll(){
    const y = scrollY;
    if(nav) nav.classList.toggle('scrolled', y>30);
    // hero 视差 + 缩放淡出
    if(heroInner){
      const p = Math.min(y/600, 1);
      heroInner.style.transform = `translateY(${y*0.12}px) scale(${1-p*0.06})`;
      heroInner.style.opacity = 1 - p*0.25;
    }
    // 右侧堆叠卡片：滚动时扇形散开
    if(stack){
      const p = Math.min(y/500, 1);
      const cards = stack.children;
      if(cards[0]) cards[0].style.transform = `rotate(${-4-p*8}deg) translateY(${p*30}px)`;
      if(cards[1]) cards[1].style.transform = `rotate(${2+p*10}deg) translateX(${p*26}px) translateY(${p*10}px)`;
      if(cards[2]) cards[2].style.transform = `rotate(${-1-p*6}deg) translateX(${-p*20}px) translateY(${p*50}px)`;
    }
    // 各 section 按 data-speed 错位 + 轻微倾斜，营造结构重组感
    morphs.forEach(m=>{
      const r = m.getBoundingClientRect();
      const prog = (innerHeight - r.top) / (innerHeight + r.height); // 0~1
      const sp = parseFloat(m.dataset.speed||'0.05');
      const off = (prog-0.5) * sp * 600;
      const tilt = (prog-0.5) * 2;
      m.style.transform = `translateY(${off.toFixed(1)}px) rotate(${tilt.toFixed(2)}deg)`;
    });
    ticking = false;
  }
  addEventListener('scroll', ()=>{ if(!ticking){ ticking=true; requestAnimationFrame(onScroll);} }, {passive:true});
  onScroll();
})();

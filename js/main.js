/* ripple nos botões */
document.querySelectorAll('.btn').forEach(b=>{
  b.addEventListener('pointerdown',e=>{
    const r=b.getBoundingClientRect(),s=Math.max(r.width,r.height),d=document.createElement('i');
    d.className='ripple';d.style.width=d.style.height=s+'px';
    d.style.left=(e.clientX-r.left-s/2)+'px';d.style.top=(e.clientY-r.top-s/2)+'px';
    b.appendChild(d);setTimeout(()=>d.remove(),700);
  });
});

/* aparece ao rolar */
(()=>{
  const els=document.querySelectorAll('.reveal');
  if(!('IntersectionObserver' in window)){els.forEach(e=>e.classList.add('in'));return}
  const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.12});
  els.forEach(e=>io.observe(e));
})();

document.getElementById('ano').textContent=new Date().getFullYear();

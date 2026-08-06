const header=document.querySelector('[data-header]');
const menu=document.querySelector('[data-menu]');
const mobile=document.querySelector('[data-mobile]');
const sticky=document.querySelector('[data-sticky]');
const book=document.querySelector('#book');
const onScroll=()=>{
  header?.classList.toggle('scrolled',scrollY>8);
  if(sticky){const show=scrollY>520&&(!book||scrollY<book.offsetTop-innerHeight*.7);sticky.hidden=!show;}
};
addEventListener('scroll',onScroll,{passive:true});onScroll();
menu?.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!open));mobile.hidden=open;document.body.classList.toggle('menu-open',!open)});
mobile?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mobile.hidden=true;menu?.setAttribute('aria-expanded','false');document.body.classList.remove('menu-open')}));
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
const io='IntersectionObserver'in window?new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.12}):null;
document.querySelectorAll('.reveal').forEach(el=>io?io.observe(el):el.classList.add('visible'));
document.querySelectorAll('[data-video]').forEach(wrap=>{const play=()=>{const video=wrap.querySelector('video');if(!video)return;wrap.querySelector('.video-overlay')?.remove();video.muted=false;video.controls=true;video.currentTime=0;video.play().catch(()=>{});wrap.removeAttribute('tabindex');wrap.removeAttribute('role')};wrap.addEventListener('click',play);wrap.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();play()}})});
const spend=document.querySelector('#monthly-spend');const usage=document.querySelector('#raw-usage');
function calc(){if(!spend||!usage)return;const s=Math.max(0,Number(spend.value)||0),u=Math.max(0,Number(usage.value)||0),m=Math.max(0,s-u);document.querySelector('#monthly-save').textContent='$'+Math.round(m).toLocaleString();document.querySelector('#annual-save').textContent='$'+Math.round(m*12).toLocaleString();}
spend?.addEventListener('input',calc);usage?.addEventListener('input',calc);calc();

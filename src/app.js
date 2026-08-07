// Gate the reveal animation on JS actually running, so a script failure degrades
// to a fully readable page rather than 47 invisible sections.
document.documentElement.classList.add('js');

const header = document.querySelector('[data-header]');
const menu = document.querySelector('[data-menu]');
const mobile = document.querySelector('[data-mobile]');
const sticky = document.querySelector('[data-sticky]');
const book = document.querySelector('#book');

const closeMenu = () => {
  if (!menu || !mobile) return;
  menu.setAttribute('aria-expanded', 'false');
  mobile.hidden = true;
  document.body.classList.remove('menu-open');
};

const onScroll = () => {
  header?.classList.toggle('scrolled', scrollY > 8);
  if (sticky) {
    const pastHero = scrollY > 480;
    const beforeCta = !book || scrollY < book.offsetTop - innerHeight * 0.8;
    sticky.hidden = !(pastHero && beforeCta);
  }
};
addEventListener('scroll', onScroll, { passive: true });
onScroll();

menu?.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') === 'true';
  menu.setAttribute('aria-expanded', String(!open));
  mobile.hidden = open;
  document.body.classList.toggle('menu-open', !open);
});
mobile?.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeMenu));
addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });

document.querySelectorAll('[data-year]').forEach((el) => {
  el.textContent = new Date().getFullYear();
});

const reveals = [...document.querySelectorAll('.reveal')];
const show = (el) => el.classList.add('visible');

const io = 'IntersectionObserver' in window
  ? new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { show(e.target); io.unobserve(e.target); }
      }),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
  : null;

if (io) {
  reveals.forEach((el) => io.observe(el));
  // Failsafe. If the observer has not revealed anything shortly after load, something
  // about this environment is not firing it, and copy nobody can read is worse than
  // copy that arrives without an animation.
  setTimeout(() => {
    if (!document.querySelector('.reveal.visible')) reveals.forEach(show);
  }, 2500);
} else {
  reveals.forEach(show);
}

// Testimonials stay as a poster frame until tapped, then play with sound and real controls.
document.querySelectorAll('[data-video]').forEach((wrap) => {
  const play = () => {
    const video = wrap.querySelector('video');
    if (!video) return;
    wrap.querySelector('.video-overlay')?.remove();
    wrap.querySelector('.video-badge')?.remove();
    wrap.querySelector('.video-name')?.remove();
    video.muted = false;
    video.controls = true;
    video.currentTime = 0;
    video.play().catch(() => {});
    wrap.removeAttribute('role');
    wrap.removeAttribute('tabindex');
    wrap.style.cursor = 'default';
  };
  wrap.addEventListener('click', play);
  wrap.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); play(); }
  });
});

// Directional ownership calculator. Deliberately simple arithmetic the visitor controls.
const spend = document.querySelector('#monthly-spend');
const usage = document.querySelector('#raw-usage');
const monthlyOut = document.querySelector('#monthly-save');
const annualOut = document.querySelector('#annual-save');

function calc() {
  if (!spend || !usage || !monthlyOut || !annualOut) return;
  const s = Math.max(0, Number(spend.value) || 0);
  const u = Math.max(0, Number(usage.value) || 0);
  const monthly = Math.max(0, s - u);
  monthlyOut.textContent = '$' + Math.round(monthly).toLocaleString();
  annualOut.textContent = '$' + Math.round(monthly * 12).toLocaleString();
}
spend?.addEventListener('input', calc);
usage?.addEventListener('input', calc);
calc();

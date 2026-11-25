// Animaciones de entrada (data-reveal) y línea de tiza que crece con el scroll (data-draw).
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reduce) {
  const els = [...document.querySelectorAll<HTMLElement | SVGElement>('[data-reveal]')];
  els.forEach((el) => {
    const d = el.dataset.delay;
    if (d) el.style.setProperty('--delay', `${d}ms`);
  });

  const show = (el: Element) => el.classList.add('is-visible');
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) { show(e.target); io.unobserve(e.target); }
    }),
    { threshold: 0.2 },
  );
  els.forEach((el) => (el.dataset.reveal === 'load' ? setTimeout(() => show(el), 350) : io.observe(el)));

  const rails = [...document.querySelectorAll<HTMLElement>('[data-draw="scroll"]')];
  const update = () => rails.forEach((r) => {
    const b = r.getBoundingClientRect();
    const p = Math.min(1, Math.max(0, (innerHeight * 0.7 - b.top) / b.height));
    r.style.clipPath = `inset(0 -100% ${((1 - p) * 100).toFixed(2)}% -100%)`;
  });
  if (rails.length) {
    addEventListener('scroll', () => requestAnimationFrame(update), { passive: true });
    addEventListener('resize', update);
    update();
  }
}

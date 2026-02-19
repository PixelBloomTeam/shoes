'use strict';

/* ═══════════════════════════════════
   BEFORE/AFTER DATA — 10 кейсов
═══════════════════════════════════ */
const BA_CASES = [
  {
    title: 'Белые Nike Air Force 1',
    text:  'Реагенты + соль убраны паром. Подошва отбелена.',
    before:'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1400',
    after: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1400'
  },
  {
    title: 'Замшевые ботинки',
    text:  'Деликатная паровая обработка, восстановление ворса.',
    before:'https://images.pexels.com/photos/292999/pexels-photo-292999.jpeg?auto=compress&cs=tinysrgb&w=1400',
    after: 'https://images.pexels.com/photos/267301/pexels-photo-267301.jpeg?auto=compress&cs=tinysrgb&w=1400'
  },
  {
    title: 'Кроссовки Balenciaga',
    text:  'Комплекс: пар + озонирование.',
    before:'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=1400',
    after: 'https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=1400'
  },
  {
    title: 'Кожаные лоферы',
    text:  'Глубокая паровая чистка, восстановление цвета.',
    before:'https://images.pexels.com/photos/5710082/pexels-photo-5710082.jpeg?auto=compress&cs=tinysrgb&w=1400',
    after: 'https://images.pexels.com/photos/3620576/pexels-photo-3620576.jpeg?auto=compress&cs=tinysrgb&w=1400'
  },
  {
    title: 'Белые кеды',
    text:  'Бережная чистка без агрессивных отбеливателей.',
    before:'https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=1400',
    after: 'https://images.pexels.com/photos/1661553/pexels-photo-1661553.jpeg?auto=compress&cs=tinysrgb&w=1400'
  },
  {
    title: 'Зимние ботинки (соль)',
    text:  'Полное удаление соляных разводов паром.',
    before:'https://images.pexels.com/photos/1706694/pexels-photo-1706694.jpeg?auto=compress&cs=tinysrgb&w=1400',
    after: 'https://images.pexels.com/photos/2048548/pexels-photo-2048548.jpeg?auto=compress&cs=tinysrgb&w=1400'
  },
  {
    title: 'New Balance 990',
    text:  'Пар + озонирование + реставрация цвета.',
    before:'https://images.pexels.com/photos/1032110/pexels-photo-1032110.jpeg?auto=compress&cs=tinysrgb&w=1400',
    after: 'https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&w=1400'
  },
  {
    title: 'Лакированные туфли',
    text:  'Деликатный пар, без повреждения лака.',
    before:'https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=1400',
    after: 'https://images.pexels.com/photos/1484807/pexels-photo-1484807.jpeg?auto=compress&cs=tinysrgb&w=1400'
  },
  {
    title: 'Кроссовки Nike (чёрные)',
    text:  'Паровая чистка + восстановление подошвы.',
    before:'https://images.pexels.com/photos/1374910/pexels-photo-1374910.jpeg?auto=compress&cs=tinysrgb&w=1400',
    after: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=1400'
  },
  {
    title: 'Нубуковые мокасины',
    text:  'Восстановление ворса, удаление пятен.',
    before:'https://images.pexels.com/photos/1598506/pexels-photo-1598506.jpeg?auto=compress&cs=tinysrgb&w=1400',
    after: 'https://images.pexels.com/photos/3620577/pexels-photo-3620577.jpeg?auto=compress&cs=tinysrgb&w=1400'
  }
];

/* ═══════════════════════════════════
   DOM READY
═══════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMenu();
  initModal();
  initFloatBtn();
  initScrollAnim();
  initFaq();
  initBeforeAfter();
  initTeamSlider();
  initRvSlider();
  initForms();
  initCookie();
});

/* ═══════════════════════════════════
   STICKY HEADER
═══════════════════════════════════ */
function initStickyHeader() {
  const hdr = document.getElementById('hdr');
  if (!hdr) return;
  let lastY = 0;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y > lastY && y > 80) {
      hdr.style.transform = 'translateY(-100%)';
    } else {
      hdr.style.transform = 'translateY(0)';
    }
    lastY = y;
  }, { passive: true });
}

/* ═══════════════════════════════════
   SIDE MENU
═══════════════════════════════════ */
function initMenu() {
  const burger = document.getElementById('burgerBtn');
  const sideX  = document.getElementById('sideX');
  const sideOv = document.getElementById('sideOv');
  const sideM  = document.getElementById('sideM');
  if (!sideM) return;

  const links = sideM.querySelectorAll('.side-link');

  function openMenu() {
    document.body.classList.add('mo');
    document.body.style.overflow = 'hidden';
    sideM.setAttribute('aria-hidden', 'false');
    if (burger) burger.setAttribute('aria-expanded', 'true');
    const first = sideM.querySelector('a, button');
    if (first) first.focus();
  }

  function closeMenu() {
    document.body.classList.remove('mo');
    document.body.style.overflow = '';
    sideM.setAttribute('aria-hidden', 'true');
    if (burger) burger.setAttribute('aria-expanded', 'false');
  }

  if (burger) burger.addEventListener('click', openMenu);
  if (sideX)  sideX.addEventListener('click', closeMenu);
  if (sideOv) sideOv.addEventListener('click', closeMenu);
  links.forEach(l => l.addEventListener('click', closeMenu));

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMenu();
  });

  // Focus trap
  sideM.addEventListener('keydown', e => {
    if (e.key !== 'Tab') return;
    const focusable = Array.from(
      sideM.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])')
    ).filter(el => !el.disabled && !el.closest('[aria-hidden="true"]'));
    if (!focusable.length) return;
    const first = focusable[0];
    const last  = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault(); last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault(); first.focus();
    }
  });
}

/* ═══════════════════════════════════
   MODAL
═══════════════════════════════════ */
function initModal() {
  const ov     = document.getElementById('modalOv');
  const modal  = document.getElementById('contactModal');
  const closeB = document.getElementById('modalClose');

  function openModal() {
    document.body.classList.add('modal-open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    document.body.classList.remove('modal-open');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.js-open-modal').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      openModal();
    });
  });

  if (ov)     ov.addEventListener('click', closeModal);
  if (closeB) closeB.addEventListener('click', closeModal);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });

  // Contact type toggle
  document.querySelectorAll('.mct').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.mct').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
}

/* ═══════════════════════════════════
   FLOATING MESSENGER BTN
═══════════════════════════════════ */
function initFloatBtn() {
  const btn   = document.getElementById('msgFloatBtn');
  const panel = document.getElementById('msgPanel');
  if (!btn || !panel) return;

  btn.addEventListener('click', e => {
    e.stopPropagation();
    panel.classList.toggle('open');
  });

  document.addEventListener('click', e => {
    if (!btn.contains(e.target) && !panel.contains(e.target)) {
      panel.classList.remove('open');
    }
  });
}

/* ═══════════════════════════════════
   SCROLL ANIMATIONS
═══════════════════════════════════ */
function initScrollAnim() {
  const els = document.querySelectorAll('[data-an]');
  if (!els.length) return;

  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        en.target.classList.add('vis');
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.12 });

  els.forEach(el => io.observe(el));
}

/* ═══════════════════════════════════
   FAQ ACCORDION
═══════════════════════════════════ */
function initFaq() {
  document.querySelectorAll('.faq-it').forEach(item => {
    const btn = item.querySelector('.faq-q');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      // закрыть все
      document.querySelectorAll('.faq-it.open').forEach(o => {
        o.classList.remove('open');
        const tg = o.querySelector('.faq-tg');
        if (tg) tg.textContent = '+';
      });
      // открыть текущий
      if (!isOpen) {
        item.classList.add('open');
        const tg = btn.querySelector('.faq-tg');
        if (tg) tg.textContent = '−';
      }
    });
  });
}

/* ═══════════════════════════════════
   BEFORE / AFTER SLIDER
═══════════════════════════════════ */
function initBeforeAfter() {
  const main   = document.getElementById('baMain');
  const before = document.getElementById('baBefore');
  const after  = document.getElementById('baAfter');
  const handle = document.getElementById('baHandle');
  const thumbs = document.getElementById('baThumbs');
  const ttl    = document.getElementById('baCaseTitle');
  const txt    = document.getElementById('baCaseText');
  if (!main || !before || !after || !handle) return;

  let pct  = 50;
  let drag = false;

  function setCase(i) {
    const c = BA_CASES[i];
    before.style.backgroundImage = `url('${c.before}')`;
    after.style.backgroundImage  = `url('${c.after}')`;
    if (ttl) ttl.textContent = c.title;
    if (txt) txt.textContent = c.text;
    document.querySelectorAll('.ba-th').forEach((t, j) => {
      t.classList.toggle('ac', j === i);
    });
    setPos(50);
  }

  function setPos(p) {
    pct = Math.max(3, Math.min(97, p));
    handle.style.left = pct + '%';
    after.style.clipPath = `inset(0 0 0 ${pct}%)`;
  }

  function getPosPct(e) {
    const asp  = main.querySelector('.ba-asp');
    if (!asp) return pct;
    const rect = asp.getBoundingClientRect();
    const x    = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
    return (x / rect.width) * 100;
  }

  // Mouse
  handle.addEventListener('mousedown',  () => { drag = true; });
  window.addEventListener('mouseup',    () => { drag = false; });
  window.addEventListener('mousemove',  e => { if (drag) setPos(getPosPct(e)); });

  // Touch
  handle.addEventListener('touchstart', () => { drag = true; }, { passive: true });
  window.addEventListener('touchend',   () => { drag = false; });
  window.addEventListener('touchmove',  e => { if (drag) setPos(getPosPct(e)); }, { passive: true });

  // Keyboard
  handle.setAttribute('tabindex', '0');
  handle.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft')  setPos(pct - 5);
    if (e.key === 'ArrowRight') setPos(pct + 5);
  });

  // Click on image
  main.querySelector('.ba-asp').addEventListener('click', e => {
    if (e.target === handle || handle.contains(e.target)) return;
    setPos(getPosPct(e));
  });

  // Build thumbnails
  if (thumbs) {
    BA_CASES.forEach((c, i) => {
      const d = document.createElement('div');
      d.className = 'ba-th' + (i === 0 ? ' ac' : '');
      d.style.backgroundImage = `url('${c.before}')`;
      d.innerHTML = `<div class="ba-th-l">${c.title}</div>`;
      d.addEventListener('click', () => setCase(i));
      thumbs.appendChild(d);
    });
  }

  setCase(0);
}

/* ═══════════════════════════════════
   TEAM SLIDER
═══════════════════════════════════ */
function initTeamSlider() {
  const slider = document.getElementById('teamSlider');
  const dotsW  = document.getElementById('teamDots');
  const btnPrev = document.getElementById('teamPrev');
  const btnNext = document.getElementById('teamNext');
  if (!slider) return;

  const cards = Array.from(slider.querySelectorAll('.team-c'));
  const total = cards.length;
  let cur = 0;

  function getVisible() {
    if (window.innerWidth < 768)  return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  }

  function getPages() {
    return Math.ceil(total / getVisible());
  }

  function buildDots() {
    if (!dotsW) return;
    dotsW.innerHTML = '';
    for (let i = 0; i < getPages(); i++) {
      const d = document.createElement('div');
      d.className = 'team-dot';
      d.addEventListener('click', () => go(i * getVisible()));
      dotsW.appendChild(d);
    }
    updateDots();
  }

  function updateDots() {
    if (!dotsW) return;
    const dots = dotsW.querySelectorAll('.team-dot');
    dots.forEach((d, i) => {
      d.classList.toggle('ac', i === Math.floor(cur / getVisible()));
    });
  }

  function go(idx) {
    const vis = getVisible();
    const max = Math.max(0, total - vis);
    cur = Math.max(0, Math.min(idx, max));
    const gap = parseFloat(getComputedStyle(slider).gap) || 16;
    const cardW = cards[0] ? cards[0].offsetWidth : 0;
    slider.style.transform = `translateX(-${cur * (cardW + gap)}px)`;
    updateDots();
  }

  if (btnPrev) btnPrev.addEventListener('click', () => go(cur - getVisible()));
  if (btnNext) btnNext.addEventListener('click', () => go(cur + getVisible()));

  buildDots();

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      cur = 0;
      buildDots();
      go(0);
    }, 150);
  });
}

/* ═══════════════════════════════════
   REVIEWS SLIDER
═══════════════════════════════════ */
function initRvSlider() {
  const slider  = document.getElementById('rvSlider');
  const dotsW   = document.getElementById('rvDots');
  const btnPrev = document.getElementById('rvPrev');
  const btnNext = document.getElementById('rvNext');
  if (!slider) return;

  const cards = Array.from(slider.querySelectorAll('.rv-c'));
  const total = cards.length;
  let cur = 0;
  let autoTimer;

  function getVisible() {
    if (window.innerWidth < 768)  return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  }

  function getPages() {
    return Math.ceil(total / getVisible());
  }

  function buildDots() {
    if (!dotsW) return;
    dotsW.innerHTML = '';
    for (let i = 0; i < getPages(); i++) {
      const d = document.createElement('div');
      d.className = 'rv-dot';
      d.addEventListener('click', () => { go(i * getVisible()); resetAuto(); });
      dotsW.appendChild(d);
    }
    updateDots();
  }

  function updateDots() {
    if (!dotsW) return;
    const dots = dotsW.querySelectorAll('.rv-dot');
    dots.forEach((d, i) => {
      d.classList.toggle('ac', i === Math.floor(cur / getVisible()));
    });
  }

  function go(idx) {
    const vis = getVisible();
    const max = Math.max(0, total - vis);
    cur = Math.max(0, Math.min(idx, max));
    const gap   = parseFloat(getComputedStyle(slider).gap) || 16;
    const cardW = cards[0] ? cards[0].offsetWidth : 0;
    slider.style.transform = `translateX(-${cur * (cardW + gap)}px)`;
    updateDots();
  }

  function autoNext() {
    const vis  = getVisible();
    const next = cur + vis;
    go(next >= total ? 0 : next);
  }

  function resetAuto() {
    clearInterval(autoTimer);
    autoTimer = setInterval(autoNext, 5000);
  }

  if (btnPrev) btnPrev.addEventListener('click', () => { go(cur - getVisible()); resetAuto(); });
  if (btnNext) btnNext.addEventListener('click', () => { go(cur + getVisible()); resetAuto(); });

  buildDots();
  resetAuto();

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      cur = 0;
      buildDots();
      go(0);
    }, 150);
  });
}

/* ═══════════════════════════════════
   FORMS
═══════════════════════════════════ */
function initForms() {

  // ── Phone mask ──
  document.querySelectorAll('input[type="tel"]').forEach(inp => {
    inp.addEventListener('input', () => {
      let v = inp.value.replace(/\D/g, '');
      if (v.startsWith('8')) v = '7' + v.slice(1);
      if (v.startsWith('7')) v = v.slice(1);
      let r = '';
      if (v.length > 0) r  = '+7 (' + v.slice(0, 3);
      if (v.length >= 3) r += ') ' + v.slice(3, 6);
      if (v.length >= 6) r += '-' + v.slice(6, 8);
      if (v.length >= 8) r += '-' + v.slice(8, 10);
      inp.value = r;
    });
  });

  // ── Field highlight on error ──
  function markError(el) {
    if (!el) return;
    el.style.borderColor = 'rgba(255,110,180,.7)';
    el.style.boxShadow   = '0 0 0 3px rgba(255,110,180,.15)';
    el.addEventListener('input', () => {
      el.style.borderColor = '';
      el.style.boxShadow   = '';
    }, { once: true });
  }

  function isValidPhone(v) {
    return v.replace(/\D/g, '').length >= 11;
  }

  // ── Modal form ──
  const mf = document.getElementById('modalForm');
  if (mf) {
    mf.addEventListener('submit', e => {
      e.preventDefault();
      const name    = mf.querySelector('#mName');
      const phone   = mf.querySelector('#mPhone');
      const consent = mf.querySelector('#mConsent');
      let ok = true;

      if (!name || !name.value.trim())          { markError(name);    ok = false; }
      if (!phone || !isValidPhone(phone.value)) { markError(phone);   ok = false; }
      if (consent && !consent.checked)          {
        consent.style.outline = '2px solid rgba(255,110,180,.7)';
        ok = false;
      }
      if (!ok) return;

      const inner = document.querySelector('.modal-inner');
      if (inner) {
        inner.innerHTML = `
          <div class="form-success">
            <div class="form-success-ic">✅</div>
            <h3>Заявка отправлена!</h3>
            <p style="color:var(--fg2);margin-top:8px;">Свяжемся с вами в течение 3 минут.</p>
            <button class="btn btn-gold" style="margin-top:24px;width:100%;justify-content:center;border-radius:14px;padding:15px;"
              onclick="document.body.classList.remove('modal-open');document.body.style.overflow='';">
              Закрыть
            </button>
          </div>`;
      }
    });
  }

  // ── Contact section form ──
  const cf = document.getElementById('ctForm');
  if (cf) {
    cf.addEventListener('submit', e => {
      e.preventDefault();
      const phone   = cf.querySelector('#ctPhone');
      const consent = cf.querySelector('#ctConsent');
      let ok = true;

      if (!phone || !isValidPhone(phone.value)) { markError(phone); ok = false; }
      if (consent && !consent.checked) {
        consent.style.outline = '2px solid rgba(255,110,180,.7)';
        ok = false;
      }
      if (!ok) return;

      const btn = cf.querySelector('[type="submit"]');
      if (btn) {
        btn.textContent = '✅ Заявка отправлена!';
        btn.style.background = 'linear-gradient(135deg,#00e5b0,#00c9e0)';
        btn.disabled = true;
      }
    });
  }
}

/* ═══════════════════════════════════
   COOKIE BANNER
═══════════════════════════════════ */
function initCookie() {
  const banner  = document.getElementById('cookieBanner');
  const accept  = document.getElementById('ckAccept');
  const decline = document.getElementById('ckDecline');
  if (!banner) return;

  if (localStorage.getItem('ck_consent')) {
    banner.classList.add('hidden');
    return;
  }

  function dismiss() {
    banner.classList.add('hidden');
    localStorage.setItem('ck_consent', '1');
  }

  if (accept)  accept.addEventListener('click', dismiss);
  if (decline) decline.addEventListener('click', dismiss);
}

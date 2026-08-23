// ==========================================================================
// Doce Boutique — interações do site
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  setYear();
  setupMobileNav();
  setupScrollReveal();
  setupConfetti();
});

function setYear() {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

function setupMobileNav() {
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('navMenu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('is-open');
    toggle.classList.toggle('is-active', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('is-open');
      toggle.classList.remove('is-active');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

function setupScrollReveal() {
  const revealEls = document.querySelectorAll('.card--reveal');
  if (!revealEls.length) return;

  if (!('IntersectionObserver' in window)) {
    revealEls.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  revealEls.forEach((el) => observer.observe(el));
}

function setupConfetti() {
  const layer = document.getElementById('confetti-layer');
  if (!layer) return;

  const emojis = ['🍩', '🍮', '✨', '💛', '💜'];
  const pieceCount = window.innerWidth < 640 ? 12 : 20;

  for (let i = 0; i < pieceCount; i += 1) {
    const piece = document.createElement('span');
    piece.className = 'confetti-piece';
    piece.textContent = emojis[Math.floor(Math.random() * emojis.length)];

    const left = Math.random() * 100;
    const duration = 10 + Math.random() * 12;
    const delay = Math.random() * 14;
    const size = 16 + Math.random() * 16;

    piece.style.left = `${left}vw`;
    piece.style.animationDuration = `${duration}s`;
    piece.style.animationDelay = `${delay}s`;
    piece.style.fontSize = `${size}px`;

    layer.appendChild(piece);
  }
}

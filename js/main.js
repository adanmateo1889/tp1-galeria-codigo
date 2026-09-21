const menuToggle = document.querySelector('#menuToggle');
const mainNav = document.querySelector('#mainNav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const open = mainNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.textContent = open ? '✕' : '☰';
  });
}

const tourButton = document.querySelector('#startTour');
const firstProfileLink = document.querySelector('.gallery-grid .picture-link[href="adan.html"]');

if (tourButton && firstProfileLink) {
  tourButton.addEventListener('click', () => {
    const destination = firstProfileLink.getAttribute('href');
    if (!destination) {
      return;
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      window.location.href = destination;
      return;
    }

    document.body.classList.add('page-transitioning');
    window.setTimeout(() => {
      window.location.href = destination;
    }, 600);
  });
}

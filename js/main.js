const menuToggle = document.querySelector('#menuToggle');
const mainNav = document.querySelector('#mainNav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const open = mainNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.textContent = open ? '✕' : '☰';
  });
}

const enterMuseumButtons = document.querySelectorAll('[data-enter-museum]');
enterMuseumButtons.forEach((button) => {
  button.addEventListener('click', () => {
    document.body.classList.add('museum-lit');
    document.querySelector('#coleccion')?.scrollIntoView({ behavior: 'smooth' });
  });
});

const tourButton = document.querySelector('#startTour');
const members = [...document.querySelectorAll('.member-card')];
const visitStatus = document.querySelector('#visitStatus');
let currentMember = -1;

if (tourButton && members.length) {
  tourButton.addEventListener('click', () => {
    members.forEach(card => card.classList.remove('is-highlighted'));
    currentMember = (currentMember + 1) % members.length;
    const current = members[currentMember];
    current.classList.add('is-highlighted');
    current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    if (visitStatus) {
      const name = current.dataset.name || `Obra ${currentMember + 1}`;
      visitStatus.textContent = `Visita guiada: obra ${currentMember + 1} de ${members.length} · ${name}`;
    }
  });
}

const spotlightButton = document.querySelector('#spotlightButton');
const roomLightButton = document.querySelector('#roomLightButton');
const portrait = document.querySelector('.profile-frame-wrap');
const status = document.querySelector('#profileStatus');

if (spotlightButton && portrait) {
  spotlightButton.setAttribute('aria-pressed', 'false');

  spotlightButton.addEventListener('click', () => {
    const active = portrait.classList.toggle('spotlight');

    document.body.classList.toggle('profile-spotlight-on', active);
    spotlightButton.setAttribute('aria-pressed', String(active));
    spotlightButton.textContent = active
      ? 'Apagar foco de obra'
      : 'Encender foco de obra';

    if (status) {
      status.textContent = active
        ? 'Foco encendido: la obra está iluminada.'
        : 'Foco apagado: iluminación normal restaurada.';
    }
  });
}

let nightLighting = false;

const applyLightingMode = () => {
  const modeClass = nightLighting ? 'lighting-night' : 'lighting-neutral';
  const modeLabel = nightLighting ? 'Luz nocturna' : 'Luz neutra';
  document.body.classList.remove('lighting-neutral', 'lighting-night');
  document.body.classList.add(modeClass);

  if (roomLightButton) {
    roomLightButton.textContent = nightLighting
      ? 'Cambiar a luz neutra'
      : 'Cambiar a luz nocturna';
    roomLightButton.setAttribute('aria-pressed', String(nightLighting));
  }

  if (status) {
    status.textContent = `Iluminación de sala: ${modeLabel}`;
  }
};

if (roomLightButton) {
  applyLightingMode();
  roomLightButton.addEventListener('click', () => {
    nightLighting = !nightLighting;
    applyLightingMode();
  });
} else {
  applyLightingMode();
}

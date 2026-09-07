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

const roomModes = [
  { className: '', label: 'Sala neutra', buttonText: 'Cambiar iluminación de la sala' },
  { className: 'room-warm', label: 'Sala cálida', buttonText: 'Cambiar a luz nocturna' },
  { className: 'room-night', label: 'Sala nocturna', buttonText: 'Volver a luz neutra' }
];

let roomMode = 0;

if (roomLightButton) {
  roomLightButton.addEventListener('click', () => {
    document.body.classList.remove('room-warm', 'room-night');

    roomMode = (roomMode + 1) % roomModes.length;
    const mode = roomModes[roomMode];

    if (mode.className) {
      document.body.classList.add(mode.className);
    }

    roomLightButton.textContent = mode.buttonText;

    if (status) {
      status.textContent = `Iluminación de sala: ${mode.label}.`;
    }
  });
}

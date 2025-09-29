// docs/javascript/splash.js (VERSIÓN SIMPLIFICADA)
document.addEventListener('DOMContentLoaded', () => {
  const splashTextElement = document.querySelector('#splash-text');

  if (splashTextElement) {
    const options = {
      strings: [
        'HOLA, SOY IKER PAZOS.',
        'BIENVENIDO A MI PAGINA WEB.',
        '¡UNETE!.'
      ],
      typeSpeed: 80,
      backSpeed: 40,
      backDelay: 1000,
      startDelay: 100,
      loop: true, // Lo ponemos en bucle para que siempre haya animación
      showCursor: true,
      cursorChar: '|',
    };
    new Typed(splashTextElement, options);
  }
});
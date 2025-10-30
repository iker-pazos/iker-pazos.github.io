// docs/javascript/splash.js (VERSIÓN SIMPLIFICADA)
document.addEventListener('DOMContentLoaded', () => {
  const splashTextElement = document.querySelector('#splash-text');

  if (splashTextElement) {
    const options = {
      strings: [
        '¡BIENVENID@!',
        'SOY IKER PAZOS',
        '¡ACCEDE A MI PAGINA WEB!'
      ],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1000,
      startDelay: 10,
      loop: true, // Lo ponemos en bucle para que siempre haya animación
      showCursor: true,
      cursorChar: '|',
    };
    new Typed(splashTextElement, options);
  }
});
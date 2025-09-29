// docs/javascript/particles-config.js (VERSIÓN COMPATIBLE CON NAVIGATION.INSTANT)

// Envolvemos toda la lógica en una función reutilizable
function initializeParticles() {
  // Primero, comprobamos si ya existe un contenedor de partículas para no duplicarlo
  const existingContainer = document.querySelector('#tsparticles');
  if (!existingContainer) {
    // Si no existe, lo creamos y lo añadimos al body
    // Esto es un seguro para las navegaciones instantáneas
    const container = document.createElement('div');
    container.id = 'tsparticles';
    document.body.appendChild(container);
  }

  // Ahora, cargamos la configuración de las partículas
  tsParticles.load("tsparticles", {
    fpsLimit: 60,
    detectRetina: true,
    particles: {
      number: { value: 80, density: { enable: true, area: 800 } },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.5 },
      size: { value: { min: 1, max: 3 } },
      links: {
        enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1,
      },
      move: {
        enable: true, speed: 1, direction: "none", outModes: { default: "out" },
      },
    },
    interactivity: {
      detectsOn: "canvas",
      events: { onHover: { enable: true, mode: "grab" }, resize: true, },
      modes: { grab: { distance: 200, links: { opacity: 1 } } },
    },
  });
}

// Observador que se engancha al sistema de carga del tema "Material for MkDocs"
document.addEventListener("DOMContentLoaded", () => {
  // Se asegura de que la función se ejecute en la carga inicial
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeParticles);
  } else {
    initializeParticles();
  }

  // ¡LA PARTE MÁGICA!
  // El tema "Material" emite un evento después de cada navegación instantánea.
  // Nos suscribimos a ese evento para volver a ejecutar nuestra función.
  if (typeof app !== "undefined") {
    app.document$.subscribe(() => initializeParticles());
  }
});
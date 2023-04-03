// Selecciona el elemento
const osca = document.querySelector('.osca');

// Agrega un evento scroll a la ventana
window.addEventListener('scroll', function() {
  // Obtiene la posición actual del scroll
  const scrollPos = window.pageYOffset;
  
  // Si la posición actual del scroll es mayor que 100px, agrega la clase "scroll" al elemento
  if (scrollPos > 100) {
    osca.classList.add('scroll');
  } else {
    osca.classList.remove('scroll');
  }
});

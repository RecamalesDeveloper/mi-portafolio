document.addEventListener('DOMContentLoaded', function() {
    const elementoSaludo = document.getElementById('greeting');
    if (elementoSaludo) {
      const ahora = new Date();
      const hora = ahora.getHours();
      let textoSaludo = '';
      if (hora < 12) {
        textoSaludo = '¡Buenos días! ☀️';
      } else if (hora < 18) {
        textoSaludo = '¡Buenas tardes! ☀️';
      } else {
        textoSaludo = '¡Buenas noches! 🌙';
      }
      elementoSaludo.textContent = textoSaludo;
    }
  });
  
  
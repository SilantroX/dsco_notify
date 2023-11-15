function createNotification(type, message, iconClass) {
  const container = document.getElementById('notification-container');
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.innerHTML = `
    <i class="${iconClass}"></i>
    <span>${message}</span>
    <div class="progress-bar"></div>
  `;
  container.appendChild(notification);

  const icon = notification.querySelector('i');
  const progressBar = notification.querySelector('.progress-bar');

  // Agrega una clase de animación al icono
  icon.classList.add('icon-show');

  setTimeout(() => {
    notification.classList.add('show');
    progressBar.style.animation = 'progress-animation 3s linear forwards';
  }, 100);

  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => {
      container.removeChild(notification);
    }, 300);
  }, 3300);
}

  
  // Agregar un listener para el evento 'message'
  window.addEventListener('message', (event) => {
    const data = event.data;
  
    // Verificar si el mensaje proviene de sendNUIMessage y tiene el formato esperado
    if (data && data.type && data.message && data.emoji) {
      const { type, message, emoji } = data;
      
      // Crear la notificación con el tipo y mensaje recibidos
      createNotification(type, message, emoji);
    }
  });
  
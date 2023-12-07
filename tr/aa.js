// Función para abrir el modal
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = 'block';
}

// Función para cerrar el modal
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = 'none';
}

// Agregar marcadores al mapa
function initMap() {
  // Coordenadas de los sensores
  const sensor1 = { lat: -16.413330221270726, lng: -71.56178987019396 };
  const sensor2 = { lat: -16.415626, lng: -71.557843 };
  const sensor3 = { lat: -16.417519, lng: -71.559302 };

  // Crear el mapa
  const map = new google.maps.Map(document.getElementById('map-container'), {
      zoom: 12,
      center: sensor1,
  });

  // Agregar marcadores
  new google.maps.Marker({
      position: sensor1,
      map: map,
      title: 'Sensor 1',
  });

  new google.maps.Marker({
      position: sensor2,
      map: map,
      title: 'Sensor 2',
  });

  new google.maps.Marker({
      position: sensor3,
      map: map,
      title: 'Sensor 3',
  });
}

// Esperar a que la página esté completamente cargada antes de ejecutar initMap
document.addEventListener('DOMContentLoaded', initMap);
 // Funciones para los botones
 function goToInicio() {
  // Lógica para redirigir a la página de inicio
  console.log("Ir a Inicio");
}

function goToHistorial() {
  // Lógica para redirigir a la página de historial de datos
  console.log("Ir a Historial de Datos");
}

function cerrarSesion() {
  // Lógica para cerrar sesión
  console.log("Cerrar Sesión");
}
function mostrarHoraFecha() {
  const elementoHoraFecha = document.getElementById("hora-fecha");

  function actualizarHoraFecha() {
      const ahora = new Date();
      const hora = ahora.getHours();
      const minutos = ahora.getMinutes();
      const segundos = ahora.getSeconds();
      const dia = ahora.getDate();
      const mes = ahora.getMonth() + 1; // ¡Ojo! Los meses empiezan en 0
      const año = ahora.getFullYear();

      const horaFechaTexto = `${hora}:${minutos}:${segundos} - ${dia}/${mes}/${año}`;
      elementoHoraFecha.textContent = horaFechaTexto;
  }

  // Actualizar cada segundo
  setInterval(actualizarHoraFecha, 1000);

  // Llamar a la función por primera vez para mostrar inmediatamente
  actualizarHoraFecha();
}

// Llamar a la función para iniciar la actualización de hora y fecha
mostrarHoraFecha();
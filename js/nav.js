// Agregar un listener de clic al botón del menú desplegable
document.querySelector('.dropdown-btn').addEventListener('click', function() {
    // Obtener el contenido del menú desplegable
    var dropdownContent = document.querySelector('.dropdown-content');
  
    // Alternar la clase 'show' para mostrar u ocultar el menú desplegable
    dropdownContent.classList.toggle('show');
  });
  
  // Cerrar el menú desplegable cuando se haga clic fuera de él
  window.addEventListener('click', function(event) {
    if (!event.target.matches('.dropdown-btn')) {
      var dropdowns = document.getElementsByClassName('dropdown-content');
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  });
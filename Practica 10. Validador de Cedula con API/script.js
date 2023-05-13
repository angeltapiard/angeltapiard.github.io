$(document).ready(function() {
    // Inicializar el plugin SDQ en el campo de entrada de la cédula
    var cedula = $('#cedula').SDQ('cedula');
  
    // Agregar un evento al formulario para validar la cédula al enviar el formulario
    $('#formulario').on('submit', function(event) {
      event.preventDefault();
  
      // Validar la cédula ingresada utilizando el método validar() del plugin SDQ
      if (!cedula.validar()) {
        alert('La cédula ingresada es inválida');
      } else {
        alert('La cédula ingresada es válida');
      }
    });
  });
  
function mostrarPagina(n){
  var paginas = document.getElementsByTagName('fieldset');
  for(var i = 0; i < paginas.length; i++){
    if(i == n - 1){
      paginas[i].style.display = 'block';
    } else {
      paginas[i].style.display = 'none';
    }
  }
}

  //Json
    function mostrarDatos() {
    let data = {
        // pagina 1
        nombre: document.getElementById("nombre").value,
        apellido: document.getElementById("apellido").value,
        fechanac: document.querySelector("[name='fechanac']").value,
        cedula: document.getElementById("cedula").value,
        correo: document.getElementById("correo").value,
        phone: document.getElementById("phone").value,

        // pagina 2
        nombreFamiliar1: document.getElementById("nombreFamiliar1").value,
        edadFamiliar1: document.getElementById("edadFamiliar1").value,
        parentescoFamiliar1: document.getElementById("parentescoFamiliar1").value,
        nombreFamiliar2: document.getElementById("nombreFamiliar2").value,
        edadFamiliar2: document.getElementById("edadFamiliar2").value,
        parentescoFamiliar2: document.getElementById("parentescoFamiliar2").value,
        nombreFamiliar3: document.getElementById("nombreFamiliar3").value,
        edadFamiliar3: document.getElementById("edadFamiliar3").value,
        parentescoFamiliar3: document.getElementById("parentescoFamiliar3").value,

        //pagina 3
        enfermedad: document.getElementById("enfermedad").value,
        duration: document.getElementById("duration").value,
        details: document.getElementById("details").value,

        // pagina 4
        hospitalizations: document.getElementById("hospitalizations").value,
        date: document.getElementById("date").value,
        medicalCenter: document.getElementById("medical-center").value,
        diagnosis: document.getElementById("diagnosis").value
    };
    let fieldset = document.getElementById("pagina5");
    
    //pagina 1
    fieldset.innerHTML += `<h4>Página No. 1 — Datos Personales</h4>`;
    fieldset.innerHTML += `<p>Nombre: <span>${data.nombre}</span></p>`;
    fieldset.innerHTML += `<p>Apellido: <span>${data.apellido}</span></p>`;
    fieldset.innerHTML += `<p>Fecha de Nacimiento: <span>${data.fechanac}</span></p>`;
    fieldset.innerHTML += `<p>Cédula: <span>${data.cedula}</span></p>`;
    fieldset.innerHTML += `<p>E-mail: <span>${data.correo}</span></p>`;
    fieldset.innerHTML += `<p>Número de celular: <span>${data.phone}</span></p>`;

    //pagina 2
    fieldset.innerHTML += `<h4>Página No. 2 — Familiares</h4>`;
    fieldset.innerHTML += `<p>Familiar #1</p>`;
    fieldset.innerHTML +=  `<p>Nombre: <span>${data.nombreFamiliar1}</span></p>`;
    fieldset.innerHTML +=  `<p>Edad: <span>${data.edadFamiliar1}</span></p>`;
    fieldset.innerHTML +=  `<p>Parentesco: <span>${data.parentescoFamiliar1}</span></p>`;

    fieldset.innerHTML += `<p>Familiar #2</p>`;
    fieldset.innerHTML +=  `<p>Nombre: <span>${data.nombreFamiliar2}</span></p>`;
    fieldset.innerHTML +=  `<p>Edad: <span>${data.edadFamiliar2}</span></p>`;
    fieldset.innerHTML +=  `<p>Parentesco: <span>${data.parentescoFamiliar2}</span></p>`;

    fieldset.innerHTML += `<p>Familiar #3</p>`;
    fieldset.innerHTML +=  `<p>Nombre: <span>${data.nombreFamiliar3}</span></p>`;
    fieldset.innerHTML +=  `<p>Edad: <span>${data.edadFamiliar3}</span></p>`;
    fieldset.innerHTML +=  `<p>Parentesco: <span>${data.parentescoFamiliar3}</span></p>`;

    //pagina 3
    fieldset.innerHTML += `<h4>Página No. 4 — Condiciones Pre-Existentes de Salud</h2>`;
    fieldset.innerHTML += `<p>Enfermedad: <span>${data.enfermedad}</span></p>`;
    fieldset.innerHTML += `<p>Tiempo con la Enfermedad: <span>${data.duration}</span></p>`;
    fieldset.innerHTML += `<p>Detalle: <span>${data.details}</span></p>`;

    //pagina 4
    fieldset.innerHTML += `<h4>Página No. 4 — Internamientos Realizados</h4><p>Internamientos Realizados: ${data.hospitalizations}</p>`;
    fieldset.innerHTML += `<p>Fecha: <span>${data.date}</span></p>`;
    fieldset.innerHTML += `<p>Centro Médico: <span>${data.medicalCenter}</span></p>`;
    fieldset.innerHTML += `<p>Diagnóstico: <span>${data.diagnosis}</span></p>`;
}


const formulario = document.getElementById("formulario");
const tieneCargasFamiliaresCheckbox = document.getElementById('tieneCargasFamiliares'); // Casilla de cargas familiares
const cantidadCargasFamiliaresInput = document.getElementById('cantidadCargasFamiliares'); // Cantidad de cargas 
tieneCargasFamiliaresCheckbox.addEventListener('change', toggleCantidadCargasFamiliares);

// Revisa la casilla del formulario "Tiene cargas familiares" y le agrega-quita la etiqueta Disabled
function toggleCantidadCargasFamiliares() {
      if (tieneCargasFamiliaresCheckbox.checked) {
      cantidadCargasFamiliaresInput.removeAttribute('disabled'); // Si la casilla está seleccionada, permite escribir la cantidad de cargas
    } else {
      cantidadCargasFamiliaresInput.setAttribute('disabled', 'disabled'); // Si la casilla NO está seleccionada, no se puede escribir en este input
    }
  }

// Calcula el monto de la carga familiar según el sueldo del trabajador
function obtenerMontoCargaFamiliar(sueldo, tramo) {
    let monto = 0;
    switch (tramo) {
      case "A":
        if (sueldo <= 429899) {
          monto = 16828;
        }
        break;
      case "B":
        if (sueldo > 429899 && sueldo <= 627913) {
          monto = 10327;
        }
        break;
      case "C":
        if (sueldo > 627913 && sueldo <= 979330) {
          monto = 3264;
        }
        break;
      case "D":
        if (sueldo > 979330) {
          monto = sueldo - 979330;
        }
        break;
      default:
        monto = 0;
    }
    return monto;
  }
  
// Calcula sueldo final segun bono a recibir
function calcularSueldo(nombre, apellidos, sueldoActual, sueldoSemestreAnterior, tieneCargasFamiliares, cantidadCargasFamiliares) {
    const sueldoPromedio = (sueldoActual + sueldoSemestreAnterior) / 2;
  
    let tramo = "";
    if (sueldoPromedio <= 429899) {
      tramo = "A";
    } else if (sueldoPromedio <= 627913) {
      tramo = "B";
    } else if (sueldoPromedio <= 979330) {
      tramo = "C";
    } else {
      tramo = "D";
    }
  
    const montoTramo = obtenerMontoCargaFamiliar(sueldoPromedio, tramo);
  
    const sueldoFinal = sueldoPromedio + montoTramo;
    let montoCargaFamiliar = 0;
  
    if (tieneCargasFamiliares) {
      montoCargaFamiliar = obtenerMontoCargaFamiliar(sueldoFinal, tramo) * cantidadCargasFamiliares;
    }
  
    const sueldoFinalConCarga = sueldoFinal + montoCargaFamiliar;
  
    return {
      nombre,
      apellidos,
      sueldoActual,
      sueldoSemestreAnterior,
      tieneCargasFamiliares,
      cantidadCargasFamiliares,
      sueldoFinal: sueldoFinalConCarga,
      tramo,
      montoTramo,
      montoCargaFamiliar
    };
  }

  formulario.addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el comportamiento por defecto del formulario
  
    // Obtener los valores ingresados por el usuario
    const nombre = formulario.nombre.value;
    const apellidos = formulario.apellidos.value;
    const sueldoActual = Number(formulario.sueldoActual.value);
    const sueldoSemestreAnterior = Number(formulario.sueldoSemestreAnterior.value);
    const tieneCargasFamiliares = formulario.tieneCargasFamiliares.checked;
    const cantidadCargasFamiliares = Number(formulario.cantidadCargasFamiliares.value);
  
    // Valida si los datos ingresados son números
    if (isNaN(sueldoActual) || isNaN(sueldoSemestreAnterior) || isNaN(cantidadCargasFamiliares)) {
      alert("Los campos de sueldo actual, sueldo semestre anterior y cantidad de cargas familiares deben ser números.");
      return;
    }

  // Calcular el sueldo final
  const resultado = calcularSueldo(nombre, apellidos, sueldoActual, sueldoSemestreAnterior, tieneCargasFamiliares, cantidadCargasFamiliares);
  // Obtener el elemento donde se mostrará el resultado
  const resultadoElemento = document.getElementById("resultado");

  // Mostrar el resultado
  resultadoElemento.innerHTML = "Nombre completo: " + resultado.nombre + " " + resultado.apellidos + "<br>Sueldo actual: $" + resultado.sueldoActual + "<br>Monto de carga familiar: $" + (tieneCargasFamiliares ? obtenerMontoCargaFamiliar(resultado.sueldoActual > resultado.sueldoSemestreAnterior ? resultado.sueldoActual : resultado.sueldoSemestreAnterior) : 0) + "<br>Sueldo final: $" + resultado.sueldoFinal;

  const tramo = resultado.tramo;
  const montoTramo = resultado.montoTramo;
  resultadoElemento.innerHTML += "<br>Tramo: " + tramo + "<br>Monto de tramo: $" + montoTramo;
});






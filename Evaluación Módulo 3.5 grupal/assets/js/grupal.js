//1. Cree una función que reciba como parámetros:

//o NOMBRE, 
//o APELLIDOS 
//o Sueldo actual,  
//o Sueldo semestre anterior  
//o Valor lógico para indicar si corresponde cargas familiares o no

//o Cantidad de cargas familiares (sólo leerá a quienes si corresponda)


//2. Cree una función que muestre los datos de:
//o Nombre y Apellidos
//o Sueldo actual
//o Monto de Carga familiar
//o Sueldo Final (al que se le suma el valor de carga familiar. //

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
function obtenerMontoCargaFamiliar(sueldo) {
    const porcentajeCargaFamiliar = sueldo <= 500000 ? 0.02 : 0.01; // Si el sueldo es menor a 500.000 el monto es 2%, sino, es 1%.
    return sueldo * porcentajeCargaFamiliar;
  }

// Calcula el sueldo con los datos ingresados en el formulario 
function calcularSueldo(nombre, apellidos, sueldoActual, sueldoSemestreAnterior, tieneCargasFamiliares, cantidadCargasFamiliares) {
    let sueldoFinal = sueldoActual;
    const porcentajeAumento = sueldoActual > sueldoSemestreAnterior ? 0.05 : 0.03;
    sueldoFinal += sueldoFinal * porcentajeAumento;

    if (tieneCargasFamiliares) {
      sueldoFinal += obtenerMontoCargaFamiliar(sueldoFinal) * cantidadCargasFamiliares;
    }
    return { nombre, apellidos, sueldoActual, sueldoSemestreAnterior, tieneCargasFamiliares, cantidadCargasFamiliares, sueldoFinal };
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
   resultadoElemento.innerHTML = "Nombre completo: " + resultado.nombre + " " + resultado.apellidos + "<br>Sueldo actual: " + resultado.sueldoActual + "<br>Monto de carga familiar: " + (tieneCargasFamiliares ? obtenerMontoCargaFamiliar(resultado.sueldoActual > resultado.sueldoSemestreAnterior ? resultado.sueldoActual : resultado.sueldoSemestreAnterior) : 0) + "<br>Sueldo final: " + resultado.sueldoFinal;
});






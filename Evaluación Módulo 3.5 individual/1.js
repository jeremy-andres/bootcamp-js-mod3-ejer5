
let formulario = document.getElementById("formulario");
let tieneCargasFamiliaresCheckbox = document.getElementById('tieneCargasFamiliares'); 
let cantidadCargasFamiliaresInput = document.getElementById('cantidadCargasFamiliares');  
tieneCargasFamiliaresCheckbox.addEventListener('change', toggleCantidadCargasFamiliares);


function escribir() {        // #1        

    let valorNombre = document.getElementById('nombre').value;
    let valorApellidos = document.getElementById('apellidos').value; //Obtiene el nombre y apellidos del formulario
    
    document.getElementById('nombreMayus').innerHTML=' ' + valorNombre.toUpperCase();   //Pasa los valores a mayusculas y los muestra en pantalla
    document.getElementById('apellidosMayus').innerHTML=' ' + valorApellidos.toUpperCase();
};

// Revisa la casilla del formulario "Tiene cargas familiares" y le agrega-quita la etiqueta Disabled
function toggleCantidadCargasFamiliares() {
    if (tieneCargasFamiliaresCheckbox.checked) {
    cantidadCargasFamiliaresInput.removeAttribute('disabled'); // Si la casilla está seleccionada, permite escribir la cantidad de cargas
    } else {
    cantidadCargasFamiliaresInput.setAttribute('disabled', 'disabled'); // Si la casilla NO está seleccionada, no se puede escribir en este input
    }
}



// Calcula el monto de la carga familiar según el sueldo del trabajador
function obtenerMontoCargaFamiliar(tramo) {
    let monto = 0;
    if (tramo == "A"){
        monto = 16828
    }
    else if (tramo == "B"){
        monto = 10327
    }
    else if (tramo == "C"){
        monto = 3264
    }
    else {
        monto = 0
    }

    console.log(monto);
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

    console.log(tramo);
    const montoTramo = obtenerMontoCargaFamiliar(tramo);

    let cantidadCargasFamiliaresInt = parseInt(cantidadCargasFamiliares);

    const sueldoFinal = sueldoPromedio + (montoTramo * cantidadCargasFamiliaresInt);
    console.log(sueldoFinal);

    let montoCargaFamiliar = (montoTramo * cantidadCargasFamiliaresInt);
    console.log(montoCargaFamiliar);
    

    const sueldoFinalConCarga = sueldoFinal;

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

resultadoElemento.innerHTML = "Nombre completo: " + resultado.nombre + " " + resultado.apellidos + "<br>Sueldo actual: $" + resultado.sueldoActual + "<br>Monto de carga familiar: $" + resultado.montoCargaFamiliar + "<br>Sueldo final: $" + resultado.sueldoFinal;

const tramo = resultado.tramo;
const montoTramo = resultado.montoTramo;
resultadoElemento.innerHTML += "<br>Tramo: " + tramo + "<br>Monto de tramo: $" + montoTramo;
});



/*
✔✔ Cree  una  función  que  reciba  como  parámetros  NOMBRE  y  APELLIDOS  de  una  persona  y 
devuelva el valor de ellos en mayúsculas. 

2. Cree  una  segunda  función  que  muestre  los  datos  de  Nombre  y  Apellidos  y  solicite  dos 
montos  (dos  números  enteros)  para  sueldo  base  actual  y  sueldo  base  promedio  del 
semestre  anterior, que ingrese el dato de si tiene cargas familiares autorizadas y, si tiene 
cargas familiares autorizadas, retorne otro entero que sea el valor que le corresponde según 
la tabla siguiente: 

El valor a usar como renta es el monto del semestre anterior. 
La respuesta será: “Al Trabajador NOMBRE APELLIDOS le corresponde valor de familiar 
(0, 3264, 10327 o 16828) por su renta del semestre anterior que es: monto (uno de los 4). 

3. Cree  una  función  que,  para  las  personas  que  si  tienen  asignación  familiar,  consulte  la 
cantidad de “beneficiados con carga familiar (recibe como parámetro un número entero r 
que indique la cantidad de personas con el beneficio) y retorne el número que corresponda 
al  monto  a  recibir  por  carga  familiar,  obtenido  en  el  punto  anterior,  multiplicado  por  la cantidad  de  beneficiarios.  Por  ejemplo,  una  persona  con  beneficio  de  10327  y  3  cargas 
familiares deberá responder con 30981. 

4.  Cree un programa que utilice el objeto persona y entregue todos los datos obtenidos, de 
las funciones anteriores: 
• La persona de: 
o  Nombre: 
o Apellidos: 
o Cargas (si/no): 
o Cantidad de Cargas familiares: 
o Está en el tramo que corresponde al ingreso del semestre anterior: 
o Le corresponde por carga familiar el monto: 
o Le corresponde el monto total de carga familiar de: 
o Su sueldo del mes más las cargas familiares es de

*/

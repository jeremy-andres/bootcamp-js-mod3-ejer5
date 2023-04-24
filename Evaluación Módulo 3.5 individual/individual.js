
let usuario = {

    nombreUsuarioMayus(nombre, apellidos) {                              // #1
        let nombreMayus = nombre.toUpperCase();
        let apellidoMayus = apellidos.toUpperCase();
    
        return console.log(nombreMayus + " " + apellidoMayus);
    },

    sueldo(nombre, apellidos, sueldoActual, sueldoPromedio) {
    console.log(nombre + " " + apellidos);
    console.log("Su sueldo actual es: " + sueldoActual + " y su sueldo promedio del semestre pasado es: " + sueldoPromedio);

    }
}

usuario.nombreUsuarioMayus("Pepito", "Perez Flores");
usuario.sueldo("Pepito", "Perez Flores", "850000", "700000");



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
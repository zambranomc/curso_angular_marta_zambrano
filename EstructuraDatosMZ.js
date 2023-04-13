/*1. Crear y manipular un Array
1. Crea un array llamado frutas que contenga tres frutas: "manzana", "plátano" y "naranja".
2. Agrega una fruta al final del array usando el método push.
3. Elimina la primera fruta del array usando el método shift.
4. Muestra en consola la longitud del array.
constructor const nombre = new Array(1,2,3);
*/

const frutas =["manzanas", "plátano", "naranjas"];
frutas.push(`níspero`);

console.log(frutas);

console.log("Las listas permiten duplicar un elemento");
let repitefruta = frutas.push("manzanas");
console.log(repitefruta);
console.log(frutas);

let nombre = "x1234567V";
//Crear Array
console.log("\n");
console.log("Crear una LISTA");
let nombres = ["Ana", "Sofia", "Marta"];
console.log(nombres.length);

//Agregar con push
let nuevoAlumno ="Alan";
let nombresLongitud = nombres.push(nuevoAlumno);
console.log(nombresLongitud);
console.log(nombres);

//Eliminar con shift el 1er elemento
let primerNombre = nombres.shift();
console.log(primerNombre);
console.log(nombres);

//A Marta añadir apellido Zambrano
console.log("Agregar un texto a un elemento de la LISTA");
nombres[1] += " Zambrano";
console.log(nombres);

//Recorrer lista con bucle
console.log("Recorrer LISTA con BUCLE For");

let numeros = [1,2,3,4,5];

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}
//Recorre a la inversa la lista
console.log("Recorrer LISTA con BUCLE For a la inversa");
for (let i1 = numeros.length -1; i1 >=0; i1--) {
   
    console.log(numeros[i1]);
}

//Otro For of 
console.log("Recorrer LISTA con BUCLE For of");
for (let numero of numeros)
    console.log(numero);


//Usar Map Filter
console.log("Ejercicio con Listas y MAP");
let calificaciones = [85,90,70,55,60];
console.log(calificaciones);


let suma5 = calificacion => calificacion + 5;
let calificacionesDefinitivas = calificaciones.map(suma5);
console.log(calificacionesDefinitivas);
console.log(calificaciones);


//Ejemplo map 2
console.log("Ejercicio con Listas y MAP sumar el iva a una lista de precios");

let precioSinIVA = [4.9, 3.3, 2.5, 100.0];
console.log(precioSinIVA);

let sumaIVA = precio => precio + precio*0.21;
let precioConIVA = precioSinIVA.map(sumaIVA);
console.log(precioConIVA);



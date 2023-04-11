//Ejercicio Variables

let saludo = "Hola";
let nombre = "Marta";
let apellido = "Zambrano";

console.log(saludo + " "+ nombre + " " + apellido);
console.log(`${saludo} ${nombre} ${apellido}`)

//Conversion texto a numero Int
let numeroComoString = "42";
console.log(numeroComoString + 5);

let numero = parseInt(numeroComoString);
console.log(numero);
console.log(numero + 5);

//Operador logico

let edad =17;
let esMayordeEdad = edad>=18;
let completeName = "Juanito Garcia";

let esJuan = completeName.includes("Juan");

//Opcion 1
let ap1 = esMayordeEdad && esJuan;
console.log(ap1)

//Opcion 2
let ap2 = edad>=18 && completeName.includes("Juan");
console.log(ap2)

//Ingreso por edad
if (edad>=18){
    console.log(`Puedes pasar ya tienes ${edad}`)
}else{
    diferenciaEdad= (18*12 - edad*12);
    console.log(`Te faltan ${diferenciaEdad} meses` )
}







//Clases Dates  son clases desarrolladas  que se pueden utilizar

let fechaActual = new Date();
console.log(fechaActual);

//yyyy-mm-dd con comillas es string
let fechaNacimiento = new Date("1966-01-24");
console.log(fechaNacimiento);

console.log(fechaNacimiento.getDay("1966-01-24"));

//extraer año de la fecha
console.log(fechaNacimiento.getFullYear());
//extraer mes de la fecha de 0 a 11
console.log(fechaNacimiento.getMonth());

//nueva fecha
let eventoInteresante = new Date(2022, 12, 31, 23, 30);

console.log(`Fin de año  ${eventoInteresante.getFullYear()}`);

//Caso febrero
let ejemploFebrero = new Date(1990, 1, 30, 23,30);
console.log (ejemploFebrero);// se ve marzo porque feb tiene 28 dias

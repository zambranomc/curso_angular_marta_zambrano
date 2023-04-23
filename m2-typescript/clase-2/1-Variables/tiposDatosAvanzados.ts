//Asignacion variables

let codigo_postal1: string | number = "3338";
let codigo_postal2: string | number = 2223;

console.log(codigo_postal1);
console.log(codigo_postal2);

console.log(typeof codigo_postal1 === 'string');// true

//Operador ternario
console.log("Prueba de operador ternario")
let age: number = 18;
let canVote: boolean = age >= 18 ? true : false; // true
console.log(`Tienes edad para votar:  ${canVote}`);

//Crear un objeto dentro de otro objeto es Composicion
const person = {
    firstName1: 'Pedro',
    age: 30,
    //Composicion
    address: {
        city: 'Madrid',
        country: 'España'
    }

};
console.log("Imprimir info de un objeto compuesto con otro");
console.log(person.address.city);

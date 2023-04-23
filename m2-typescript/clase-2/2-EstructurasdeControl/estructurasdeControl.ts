//Estructuras de control if
console.log('Estuctura if else');
let age: number = 18;

if (age >= 18) {
    console.log('Puedes votar');
} else {
    console.log('Puedes votar');
}

//Switch

let day: number = 2; // inicializado var
let dayName : string;//Declarada

switch (day) {
    case 1:
        dayName = 'Monday';
        break;
    case 2:
        dayName = 'Tuesday';
        break;
    default:
        dayName = 'Domingo'
        break;
}

console.log(dayName);

//Bucles For
console.log('Estuctura Bucle for');
for (let index = 0; index < 10; index++) {
    console.log(index);
    
}


//For of

let nombres: string[] = ['nombre1', 'nombre2'];
for (const nombre of nombres) {
    console.log(nombre);
}

//nombres.forEach(nombre => console.log(nombre));

//nombres.forEach(nombre, index) => console.log(`${index} : ${nombre}`);
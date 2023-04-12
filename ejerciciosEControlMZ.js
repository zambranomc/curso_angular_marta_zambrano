/*1. Uso de la estructura if-else
1. Crea una variable numero y asígnale un número entero.
2. Escribe una estructura if-else que muestre en consola si el número es positivo, negativo o cero.*/

let number = 0;

if (number > 0) {
    console.log(`${number} es un número positivo`);
} else if (number < 0) {
    console.log(`${number} es un número negativo`);
} else {
    console.log(`${number} es 0`)
}

//Simplificar se puede eliminar llaves

let edad = 18;

function esMayordeEdad(edad) {
    return edad >= 18;
}
console.log(esMayordeEdad(15));

//Comprobar salario
let max_Salary = 76000.0;
const mim_Salary = 28000;
let salary = 10000;
if (salary >= mim_Salary && salary <= max_Salary) {
    console.log(`El salario está entre ${mim_Salary} y ${max_Salary}`);
} else {
    console.log(`El salario está fuera ${mim_Salary} y ${max_Salary}`);
}



/*2. Uso de la estructura switch
1. Crea una variable fruta y asígnale el nombre de una fruta.
2. Utiliza una estructura switch para determinar si la fruta es roja (manzana, fresa), amarilla
(plátano, piña) o de otro color (naranja, uva) y muestra el resultado en consola.
*/
let fruta = "naranja";
switch (fruta) {
    case "manzana":
        console.log(`La ${fruta} es roja`);
        break;
    case "fresa":
        console.log(`La ${fruta} es roja`);
        break;
    case "platano":
        console.log(`La ${fruta} es amarilla`);
        break;
    case "piña":
        console.log(`La ${fruta} es amarilla`);
        break;
    case "naranja":
        console.log(`La ${fruta} es anaranjada`);
        break;
    default:
        console.log("Escoge Manzana, fresa , naranja, platano o piña");
        break;
}

/*3. Uso de bucle for
1. Escribe un bucle for que muestre en consola los números del 1 al 10.
 */

for (let i = 0; i < 11; i++) {
    console.log(i);   
}
//Start, stop, step
for(let indice = 0; indice<= 10; indice+=2){
    console.log(indice);
    }


/*4. Uso de bucle while
1. Escribe un bucle while que muestre en consola los números del 1 al 10.
*/ 
let numero2 = 0;

while (numero2<=10) {
    console.log(numero2);
    numero2++;
}

/*5. Uso de bucle do-while
1. Escribe un bucle do-while que muestre en consola los números del 1 al 10.
*/
let numero4 = 1;
do {console.log(numero4);
    numero4++;
} while (numero4<=10);

/*
6. Uso de bucle for anidado
1. Escribe un bucle for anidado que muestre en consola una tabla de multiplicar del 1 al 10.
 */
for (let mul = 1; mul <= 10; mul++) {
     for (let mul2 = 1; mul2 <=10; mul2++){
        console.log (`El resulatdo de  ${mul} * ${mul2} = ${mul*mul2}`);
     }
    console.log("\n");
}



/*1. Crear una función simple
1. Escribe una función llamada saludar que acepte un argumento nombre y muestre en consola
un saludo personalizado, por ejemplo, "¡Hola, Juan!".
 */

function saludo (nombre){
    console.log(`¡Hola ${nombre} !`);
}

saludo("Juan");
saludo("Patricia");

//Otro ejemplo
let username = "martaz";
function isValidUserName(username){
    
    if (username.length > 5 && username.length < 10){
        console.log("Clave registrada");
    } else {
        console.log("Clave no válida");
    }
}

/*2. Crear una función con múltiples
argumentos y retorno
1. Escribe una función llamada sumar que acepte dos argumentos a y b, calcule su suma y
devuelva el resultado
*/

function sumar(a,b){
   let resultado = a+b;
   return resultado;
}
console.log(sumar(3,4));

/*3. Crear una función anónima y asignarla a
una variable
1. Escribe una función anónima que acepte un número y devuelva su cuadrado. Asigna esta
función a una variable llamada calcularCuadrado
*/
const calcularCuadrado = function(numero){
    return numero*numero;
} 
console.log (`El cuadrado es : ${calcularCuadrado(5)}`);


/*4. Crear una función de flecha
1. Escribe una función de flecha llamada multiplicar que acepte dos argumentos a y b, y devuelva
su producto
*/
const multiplicar = (a,b) => a*b;
console.log(`El resultado de multiplicar 5*10 es ${multiplicar(10,5)}`);

/*5. Crear una función que utilice otra función
1. Escribe una función llamada operacion que acepte tres argumentos: a, b y una función
operador. La función operacion debe ejecutar la función operador con los argumentos a y b y
devolver el resultado
*/

function operacion (num1, num2, funcionOperacion){
    let result = funcionOperacion(num1,num2);
    console.log(`El resultado de la operacion de ${num1} y ${num2} = ${result}`);
}
operacion(3,4,(num1, num2)=> num1 + num2);
operacion(3,4,(num1, num2)=> num1 * num2);
operacion(3,4,(num1, num2)=> num1 - num2);

let suma = (j,k) => j + k;
operacion(10,800, suma);

/*6. Crear una función que devuelve otra
función
1. Escribe una función llamada crearMultiplicador que acepte un argumento factor. La función
debe devolver otra función que acepte un número y devuelva el resultado de multiplicar ese
número por el factor dado
 */

function crearMultiplicador(factor){
    return function(numero){
        return numero * factor;
    }
}
let multiplicarPor5 = crearMultiplicador(5);
console.log(multiplicarPor5(1));

let multiplicarPor7 = crearMultiplicador(7);
console.log(multiplicarPor7(2));
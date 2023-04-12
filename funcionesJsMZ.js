/*1. Crear una función simple
1. Escribe una función llamada saludar que acepte un argumento nombre y muestre en consola
un saludo personalizado, por ejemplo, "¡Hola, Juan!".
 */
function saludo (nombre){
    console.log(`¡Hola ${nombre} !`);
}

console.log(saludo("Juan"));
saludo("Patricia");

//Otro ejemplo
let username = "marta";
function isValidUserName(username){
    
    if (username.length > 5 && username.length<10){
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
}
console.log(sumar(3,4));

/*3. Crear una función anónima y asignarla a
una variable
1. Escribe una función anónima que acepte un número y devuelva su cuadrado. Asigna esta
función a una variable llamada calcularCuadrado
*/
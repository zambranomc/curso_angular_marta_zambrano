//Variable boleana
console.log("Variable  booleana ");
let isCompleted: boolean = true;
let isActive: boolean = false;
console.log(isCompleted);

//Variable numérica
console.log("Variable  numérica enteros y decimales ");
let count: number = 42;
let price: number = 19.99;
console.log(price);

//Variable Nulla
console.log("Variable  valor null ");
let nothing: null = null;
console.log(nothing);

//Variable sin asignación de valor
console.log("Variable sin asignación de valor ");
let notAssigned: undefined = undefined;
console.log(notAssigned);

//Variable tipo string
console.log("Variable string con comillas simples o dobles");
let firstName: string = 'John Doe';
console.log(firstName);

//Variable string con plantillas de cadena con backstick `xx ${variable}`
console.log("Variable string con plantillas de cadena con backstick");
let greeting: string = `Hello, ${firstName}!`;
console.log(greeting);

//Función VOID - vacía no devuelve valor
console.log("FUNCION vacía, no devuelve nada");
function logMessage(message: string): void {
    console.log(message);
}

console.log("FUNCION con devolución RETURN");
function returnMessage (message: string): string{
    return "Hola mundo" + message
}
console.log(returnMessage);

console.log("Variable definida con any admite culaquier valor");
let nombre: string = "Mi nombre";
console.log("Variable definida con any admite culaquier valor cambio de valor númerico a string");
let cualquierCosa: any= 5;
console.log(`${cualquierCosa}`);
console.log("Variable definida con any admite culaquier valor cambio a string");
cualquierCosa = "Any admite cambios de valores";
console.log(`${cualquierCosa}`);

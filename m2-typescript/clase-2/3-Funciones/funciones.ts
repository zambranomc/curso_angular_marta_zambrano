//Hacer una función
console.log('Construir una función');
function saludar (firstName: string): string{
    return `Hola, ${firstName} !`;
}

//Esta funcion vacía no devulve nada
function imprimirSaludo(firstName1: string): void{
    console.log(`Funcion imprimir Hola : ${firstName1}`);
}


let saludo : string = saludar('Maria');
console.log(saludo);
console.log(typeof saludo);

let saludo1 : string = saludar('Rosa');
console.log(saludo1);
console.log(typeof saludo1);
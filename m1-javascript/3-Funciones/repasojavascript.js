//Condicionales
let numero = 10;
if (numero>20){
    console.log("En numero es mayor que 20")
}else if(numero>10){
    console.log("El número es menor o igual a 20")
}else{
    console.log("El número es menor o igual a 10")
}


//Bucles
const numero1= 5;

for (let i=0; i<20; i++){
    let numeroI=i;
    console.log(numeroI)

    if (numeroI==numero1){
        console.log(`El número es ${numero1}`)
        break;
    }
}

//Declarar funciones

function suma(a, b){
    return a+b;
}
const resultado = suma(3,5);
console.log(`El resultado de la funcion es ${resultado}`);

//Funcion flecha
const suma1 = (c, d) => c + d;
const resultado1 = suma1(2, 1);
console.log(`El sesultado de función flecha es ${resultado1}`);

//Funciones de orden superior
const numeros = [1,2,3,4,5];
const cuadrados = numeros.map(x => x* x);
console.log(cuadrados);

//Funciones como objetos
function saludo(){
    console.log('Hola');
}
saludo.propiedad = 'Esta es una propiedad de la función saludo';
console.log(saludo.propiedad);

//Funciones Constructoras
function Persona(nombre1, edad1){
    this.nombre1 = nombre1;
    this.edad1 = edad1;

    this.presentarse = function(){
        console.log(`Hola, mi nombre es ${this.nombre1} y tengo  ${this.edad1}  años`);
    };
}
const juan = new Persona('Juan',28);
juan.presentarse();


//Funcion Call y Apply
function saludo3 (saludo3, puntuacion){
    console.log (`${saludo3},${this.nombre3} Tu puntuacion es ${puntuacion}`);
}
const persona3 = {
    nombre3: 'Ana'
};
saludo3.call(persona3, 'Hola ', 42);







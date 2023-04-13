
class Computer{

    fabricante = "MSI"
    modelo = "123"
  

}

//Nuevo objeto
    const computer1 = new Computer();
    console.log(computer1.fabricante);
    computer1.fabricante = "Asus";
    console.log(computer1.fabricante);

    const computer2  = new Computer();
    console.log(computer2.fabricante);

/* Objeto persona: nombre, apellido,edad y  ciudad,
    cambia el valor de propiedad ciudad
    crear nuevos atributos a objeto

*/

class Persona{
    nombre = "Persona";
    apellido = "Apellido";
    edad = 18;
    ciudad = "Madrid";

  
}
//Objetos
const persona1 = new Persona();
console.log(persona1);
persona1.ciudad = "Barcelona";
console.log(`La persona vive en ${persona1.ciudad}`);

//Agregar atributos

persona1.cargoEmpresa = "Developer";
console.log(`La persona tiene el cargo de  ${persona1.cargoEmpresa}`);

// Array de telefonos a persona

persona1.telefonos = ["+3412345", "+5812345"];
console.log(persona1);




// bucle for in para mostrar valores
console.log(`For in para mostrar atributos y valores`);
for (const propiedad in persona1) {
   console.log(` ${propiedad} = ${persona1[propiedad]}`);
}

//for in cuando iteramos sobre propiedades de un objeto y necesitamos conocer nombres de atributos y valores
//for of cuando iteramos sobre estructuras de datos como array, map o set y solo queremos los valores
//For cuando iteramos sobre una estructura de datos utilizando un indice para recorrer el array
//ForEach recibe una función y ejecuta el comportamiento sobre cada elemento de la estructura de datos

let personasX =["Mar", "x","y"];

personasX.forEach(personasX => console.log(personasX));





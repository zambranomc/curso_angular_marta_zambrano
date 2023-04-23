//Estructuras de Datos Array listas de valores del mismo tipo
console.log("Estructuras de Datos Array numeros, los valores son del mismo tipo");
let numeros : number [] = [1, 2, 3, 4, 5];
console.log(`Esto es un array  ${numeros}`);

//Estructuras de Datos Array
console.log("Estructuras de Datos Array tipo string");
let names: Array<string> = ['Alice', 'Bob', 'Charlie'];
let nifs: string[] = ["2222", "1234"];
console.log(names);
console.log(nifs);
console.log("Estructuras de Datos Array metodo push para agregar un elemento ");
nifs.push("34567");
console.log(nifs.length);
console.log(nifs);

let precios: Array<number> = [1,2,3,4];



//Estructuras de Datos TUPLA
console.log("Estructuras de Datos tipo TUPLA ");
let coordinates: [number, number] = [42.7, -73.1];
console.log(coordinates);
console.log("Estructurastipo TUPLA permite especificar el tipo de cada elemento por separado");
let personInfo: [string, number] = ['John Doe', 30];
console.log(personInfo);

let empleado : [number, string, number, Date] = [1, "Juan", 30, new Date("2023-04-23")];
console.log(empleado);



//Estructuras de Datos ENUM para dias semana o mes, estados de una tarea o cuenta bancaria
//Limita el numero de opciones posibles
console.log("Estructuras de Datos tipo Enum se utiliza para representar conjuntos de valores constantes ");
console.log("Los enums facilitan la lectura y comprensión al reemplazar valores numéricos o de cadena con nombres descriptivos");
enum AccountType {
   Ahorro,
   Inversion,
   Empresa
}

let cuentaBancaria1: AccountType = AccountType.Empresa; //posicion 2
let cuentaBancaria2: AccountType = AccountType.Ahorro;//posicioon 0

console.log(cuentaBancaria1);
console.log(typeof cuentaBancaria1);
console.log(cuentaBancaria2);

enum weekDays {
    Lunes,
    Martes,
    Miercoles,
    Jueves,
    Viernes,
    Sabado,
    Domingo
}
console.log(weekDays);

//Crear Objeto
console.log('Crear un objeto');
let persona: object = {
    firstName: 'Nombre',
    lastName: 'Apellido'
}
console.log(typeof persona);
console.log( persona);





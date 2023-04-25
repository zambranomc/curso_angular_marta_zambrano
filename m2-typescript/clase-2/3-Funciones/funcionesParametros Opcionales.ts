//Colocar parámetos opcinales con signo "?"

function saludarPersona1(firstName: string, age?: number): void {
    console.log(`${firstName}  con edad ${age}`);
}

//Si no se especifica parametro toma valor undefined
saludarPersona1("persona1");


//Comprobar parametro opcional con operador ternario
function saludarPersona3(firstName: string, age?: number): void {
    age === undefined ?
    console.log(`${firstName}  con edad desconocida`);
    console.log(`${firstName}  con edad ${age}`);
}

saludarPersona3("persona3");

function saludarPersona4(firstName: string, age?: number): void{
    console.log(`${firstName} con edad ${age ?? 18}`)
}
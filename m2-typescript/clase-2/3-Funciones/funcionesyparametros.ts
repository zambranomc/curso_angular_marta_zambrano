//Colocar parámetos opcinales con signo "?"

function saludarPersona1(firstName: string, age?: number): void {
    console.log(`${firstName}  con edad ${age}`);
}

//Si no se especifica parametro toma valor undefined
saludarPersona1("persona1");

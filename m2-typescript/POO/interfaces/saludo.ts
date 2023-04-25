//Interface
//Palabras reservadas para interface > interface e implements
//Declarar metodos abstractos no devuelven nada
interface ISaludo{
    saludar(): string;
    despedirse(firstName: string):string;
}


//palabra implements > implementa interfaz
//Metodos desarrollados que implementan la clase
class SaludoFormal implements ISaludo{
    saludar(): string {
        return"Buenos Días";
    }
    despedirse(firstName: string): string {
        return `Hasta la próxima ${firstName}`;
    }

}

class SaludoInformal implements ISaludo{
    saludar(): string {
        return "Que tal";
    }
    despedirse(firstName: string): string {
        return `Chao ${firstName}`;
    }

}

//Crear objetos y llamo al nombre de la interface (ISaludo)
let saludo1: ISaludo = new SaludoFormal();
let saludo2: ISaludo = new SaludoFormal();


console.log(saludo1.saludar());
console.log(saludo2.despedirse("Maria"));


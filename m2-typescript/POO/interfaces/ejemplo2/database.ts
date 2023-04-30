interface IPersonaService{
    guardarPersona(nif: string): void;
    modificarPersona(nifAntiguo: string, nifNuevo: string):void;
    eliminarPersona(nif: string);
}

//Clase 1: implementa los metodos de la interfaz

class PersonaServiceArray implements IPersonaService{
    //Dos formas de declarar un Array
    //personas: string[] =[];
    personas: Array<string> = []

    guardarPersona(nif: string): void {
        this.personas.push(nif);
    }

    modificarPersona(nifAntiguo: string, nifNuevo: string): void {
        throw new Error("Metodo no implementado");
    }

    eliminarPersona(nif: string){
        throw new Error("Metodo no implementado");
    }
    
}

//clase 2: Implementa los metodos de la clase interfaz utilizando otro tipo de estructura
//es una segunda opcion para utilizar la interfaz

class PersonaServiceSet implements IPersonaService{

    //Set: estructura de datos tipo conjuntos
    personas: Set<string> = new Set();

    guardarPersona(nif: string): void {
        this.personas.add(nif);
    }


}

//Clases con atributo encapsulado # ( en cada línea donde utilizamos el atributo) 
//Utilizar setter para hacer a asignación
//Proteger la forma de acceder a los atributos y obligar a usar  los metodos

class Persona {

    #edad;

    constructor (nombre, edad){
        this.nombre = nombre;
        this.#edad = edad;
    }
//getter metodo para obtener atributo privado
    get edad(){
        return this.#edad;
    }

//Setter se utiliza paara modificar atributo privado
    set edad (nuevaEdad){ 
        if (nuevaEdad >= 18);
        this.#edad = nuevaEdad;
    }
}

let persona1 = new Persona("María", 20);
persona1.edad = 25;
console.log(persona1.edad);

persona1.edad = 3;
console.log(persona1.edad);

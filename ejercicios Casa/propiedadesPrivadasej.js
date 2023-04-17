class Ejemplo {
    #propiedadPrivada

    constructor(valor){
        this.#propiedadPrivada = valor;
    }

    mostrarPropiedadPrivada(){
        console.log(this.#propiedadPrivada);
    }
}

const objetoPropiedad =  new Ejemplo("Nuevo objeto en class Ejemplo");

console.log(objetoPropiedad.mostrarPropiedadPrivada());


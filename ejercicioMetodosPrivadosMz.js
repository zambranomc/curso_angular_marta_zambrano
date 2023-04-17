//hacer metodos privados con getter y setter

class Ecommerce {

    //metodo publico

    enviarProductos(){

        let esAptoUbicacion = this.#comprobarUbicacion(); //asignar metodo privado
        let esAptoPorPrecioTotal = this.#comprobarPrecioTotal();

        console.log("Productos enviados");
    }

    //metodo privado
        #comprobarUbicacion (){
            console.log("Ver ubicación cliente");
        }

        #comprobarPrecioTotal(){
            console.log("Precio total envío");
        }
}

let tiendaBarrio = new Ecommerce;
tiendaBarrio.enviarProductos();
console.log(tiendaBarrio);
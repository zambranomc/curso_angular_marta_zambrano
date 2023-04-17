/**Crear un constructor Vehiculo con atributos para vehiculos
 * Crear métodos en clase relacionados vehiculos: acelerar, frenar, encender, apagar
 */


class Vehiculo {
    constructor(fabricante, modelo, color, caballos, velocidad){
        this.fabricante = fabricante;
        this.modelo = modelo;
        this.color = color;
        this.caballos = caballos;
        this.estaEncendido = false; // puedes inicializar en el constructor 
        this.velocidad = velocidad;
    }

    encender(){
        this.estaEncendido = true;
    }

    apagar(){
        this.estaEncendido = false;
        this.velocidad = 0;
    }

   acelerar(cantidad) {
        //puedes preguntar negando !this.estaEncendido
        if (this.estaEncendido === false){
            console.log("Debe encender el coche ");
            return;
        }
        if (cantidad <=0 )
        return; //Sale del metodo
        
        if (this.velocidad + cantidad> 120){
            console.log("Usted ha superado el límite de velocidad solo es a 120");
            this.velocidad = 120;
        }else{
            console.log("Usted puede acelerar");
            this.velocidad += cantidad; 
        }
    }

    frenar(cantidad){
        this.velocidad -= cantidad;
    }

    
}

let vehiculo1 = new Vehiculo("Toyota", "Yaris", "Blanco", 120);
console.log(vehiculo1.estaEncendido);

vehiculo1.encender();
console.log(vehiculo1.estaEncendido);

vehiculo1.apagar();
console.log(vehiculo1.estaEncendido);

vehiculo1.velocidad=0;
console.log (vehiculo1.velocidad);
vehiculo1.acelerar(50);
console.log (vehiculo1.velocidad);

vehiculo1.frenar(20);
console.log(vehiculo1.velocidad);

//Que pasa si la cantidad a acelerar hace que se supere 120 
//Que pasa si la cantidad a acelerar es negativa
//Que pasa si se quiere acelerar pero el coche está apagado

console.log("Comrobar acelerar con número negativo");
console.log(vehiculo1.velocidad);

vehiculo1.acelerar(-40);
console.log(vehiculo1.velocidad); //no cambió la velocidad porque el método entra en el return y se sale
console.log("\n");
console.log("Comrobar acelerar a velocidad superior de 120");
vehiculo1.acelerar(200);
console.log(vehiculo1.velocidad);

//Frenar para bajar la velocidad
vehiculo1.frenar(40);
console.log(vehiculo1.velocidad);

//Comprobar el else, puede seguir acelerando
vehiculo1.acelerar(20);
console.log(vehiculo1.velocidad);

//Comprobar que esta encendido en acelerar
console.log("Comrobar coche apagado");
vehiculo1.apagar();
console.log(vehiculo1.estaEncendido);
console.log("Comrobar que no puede acelerar si está apagado");
vehiculo1.acelerar(20);
console.log(vehiculo1.velocidad);
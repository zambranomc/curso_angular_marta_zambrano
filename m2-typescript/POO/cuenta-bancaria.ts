//Constructor con atributos privados id, titular y saldo

class CuentaBancaria {
    //Constructor atributos privados
    constructor(private id: number, 
                private titular: string, 
                private fechaNacimiento: Date , 
                private saldo: number, 
                private pinAcceso: string){ }

    //Metodos
    public incrementarSaldo(cantidad: number): void {
        if (cantidad >= 5)
        this.saldo += cantidad;
    }

    public retirarSaldo(cantidad: number, pin: string): number{
        //Comprobar pin > llamar al metodo privado para comprobar el pin
        //Comprobar es mayor de edad
        //Comprobar que la cantidad  no sea superior al saldo, si es mayor a saldo se retira el disponible
        if (!this.esPinValido(pin) || !this.esMayorEdad() || cantidad <= 0 && cantidad > this.saldo)
        return 0; // solo entra con pin falso

        //Entonces retira
        this.saldo -= cantidad;
        return cantidad;

    }

    //metodo comprobar edad

    private esMayorEdad(): boolean {
        this.fechaNacimiento;
        let birthYear = this.fechaNacimiento.getFullYear();
        let fechaActual = new Date();
        let currentYear = fechaActual.getFullYear();
        return currentYear - birthYear >= 18;
    }

     //Comprobar pin de acceso

     private esPinValido(pin: string): boolean{
        return this.pinAcceso === pin;
     }

     //Consultar saldo
     

}

//Crear objeto
const cuenta1 = new CuentaBancaria(1, "Pedro Gómez", new Date("1990-12-12"), 1000, '1234');

//Retirar dinero con pin incorrecto

console.log (`cuenta1.retirarSaldo(300,'1111'): ${cuenta1.retirarSaldo(300, '1111')}`);//0

//Retirar dinero si eres menor de edad

const cuenta2 = new CuentaBancaria(2, 'persona2', new Date("2018-01-01"), 800, 1345);
console.log (`cuenta1.retirarSaldo(500,'1345'): ${cuenta1.retirarSaldo(500,'1345')}`);//0

//Cantidad menor a 0
const cuenta3 = new CuentaBancaria(3, 'persona3', new Date("2000-01-01"), 800, 1345);
console.log (`cuenta1.retirarSaldo(-30,'1345'): ${cuenta1.retirarSaldo(-30,'1345')}`);//0

// Cantidad a retirar mayor a saldo
const cuenta4 = new CuentaBancaria(4, 'persona4', new Date("2018-01-01"), 800, 1345);
console.log (`cuenta1.retirarSaldo(1100,'1345'): ${cuenta1.retirarSaldo(1100,'1345')}`);//0


// todo ok
const cuenta5 = new CuentaBancaria(5, 'persona5', new Date("2018-01-01"), 800, 1345);
console.log (`cuenta1.retirarSaldo(100,'1345'): ${cuenta1.retirarSaldo(100,'1345')}`);//700


//Consultar saldo crear automatico

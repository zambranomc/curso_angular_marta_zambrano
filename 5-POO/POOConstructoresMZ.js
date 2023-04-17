class SmartPhone {
    constructor(modelo, cores, ram, isAndroid){
        this.modelo = modelo;
        this.cores = cores;
        this.ram = ram;
        this.isAndroid = isAndroid;
    }

    descripcion(){
        console.log(`El nombre del SmartPhone es ${this.modelo} sus caracteristicas son core: ${this.cores} y  ram  ${this.ram}`);
    }
}

//Crear objeto

const phone1 = new SmartPhone("S25", 4, 12, true);
const phone2 = new SmartPhone("XIAOMI", 3, 15, true);
const phone3 = new SmartPhone("RW", 2, 10, false);

console.log(phone1.descripcion());

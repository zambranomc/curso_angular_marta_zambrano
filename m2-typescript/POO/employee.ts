// Crear clase Employee con atributo: id, firstname, salary, company

class Employee {

    //Atributos
    id: number;
    firstName: string;
    salary: number;
    company: string ;

    //Constructor
    constructor(id: number, firstName: string, salary: number, company: string){
        this.id = id;
        this.firstName = firstName;
        this.salary = salary;
        this.company = company;
    }

    //Metodos
    saludar():string{
        return `Hola mi nombre es ${this.firstName} y mi salario es ${this.salary}`;
    }
}
//Crear objeto
const empleado1 = new Employee(1,"María", 1700.00, "IBM");
console.log(empleado1.salary);
console.log(empleado1.saludar());


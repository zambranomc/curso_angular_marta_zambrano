//Interfaz ISupermarket

export interface ISupermarket{
    id: number;
    brandName: string;
    m2: number;
    numEmployees: number;
    products: any[]; //One to may
}
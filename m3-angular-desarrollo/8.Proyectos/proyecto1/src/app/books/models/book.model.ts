import { ICategory } from "src/app/categories/models/category.model";

export interface IBook {
    id: number;
    title: string;
    sinopsis: string;
    release: Date;
    numPages: number;
    photo: string;
    price: number;
    authorId: number;
    categories: number[];
}

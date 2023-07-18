import { IBook } from "../books/models/book.model";

export interface IBooking {
    id: number;
    user?: any;
    book?: Partial<IBook>;//Para poder ver todo el modelo de book
    price: number;
    startDate: Date;
    finishDate: Date;
}

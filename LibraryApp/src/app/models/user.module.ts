import { Book } from "./book.module";

export class User {
    id: number;

    first_name: string;
    last_name: string;

    lent_books: number;

    books?: Book[];
}
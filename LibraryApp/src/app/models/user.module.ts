import { Book } from "./book.module";

export class User {
    id: number;

    first_name: string;
    last_name: string;

    has_lent: boolean;
    lent_books?: Book[];
}

export class Users {
    users: Users[];
}
import { ObjectId } from "mongodb";


export interface Book {
    id?: ObjectId;
    name: string;
    author: string;
    cover: string;
    available: boolean;
    checkoutDate?: string;
    returnDate?: string;
    requestedBy?: string;
}
export interface Book {
    id?: number;
    name: string;
    author: string;
    cover: string;
    available: boolean;
    lastReservedDate?: number;
    reservedBy?: string;
}
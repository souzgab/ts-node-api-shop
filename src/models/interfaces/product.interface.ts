import { CategoryEnum } from "../enum/product.enum";
export interface IProduct {
    id: string;
    name: string;
    value: number;
    category: CategoryEnum;
    manufacturer: string;
    imageUrl: string
}
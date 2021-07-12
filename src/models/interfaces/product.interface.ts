import { ObjectID } from "typeorm";
import { CategoryEnum } from "../enum/product.enum";

export interface IProduct {
    id: ObjectID;
    name: string;
    value: number;
    category: CategoryEnum;
    manufacturer: string;
    imageUrl: string
}
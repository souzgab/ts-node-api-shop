import { Role } from "../enum/user.enum";
import { ObjectID } from 'typeorm';

export interface IUser {
    id: ObjectID;
    role: Role;
    email: string;
    name: string;
    phone: string;
    document: string;
    password: string;
}

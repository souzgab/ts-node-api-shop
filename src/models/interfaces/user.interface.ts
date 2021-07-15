import { Role } from "../enum/user.enum";

export interface IUser {
    id: string;
    role: Role;
    email: string;
    name: string;
    phone: string;
    document: string;
    password: string;
}

export interface Credentials {
    email: string;
    password: string;
}

export interface UserWithoutPassword {
    id: string;
    role: Role;
    email: string;
    name: string;
    phone: string;
    document: string;
    password?: string;
}
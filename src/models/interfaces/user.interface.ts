import { Role } from "../enum/user.enum";

export interface IUser {
    id: number;
    role: Role;
    email: string;
    name: string;
    phone: string;
    document: string;
    password: string;
}

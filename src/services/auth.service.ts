import { User } from './../models/bussiness/user.model';
import { UserWithoutPassword } from './../models/interfaces/user.interface';
import userRepository from "../models/repository/user.repository";
import bcrypt from 'bcrypt';
import { generateJwt } from "../utils/security/jwt-security";
import { Credentials } from "../models/interfaces/user.interface";

export class AuthService {

    authenticate = async (credentials: Credentials): Promise<UserWithoutPassword> => {
        try {
           const user = await userRepository.findOne(credentials.email) as UserWithoutPassword

           if(!user || user === undefined) throw "Usuário não encontrado!"
           
           const isValidPassword = await bcrypt.compare(credentials.password, user.password!)
            
           if(!isValidPassword) throw "Senha difere da senha já cadastrada"

           user.updatedAt = new Date();
           await userRepository.update(user as User);
           delete user.password  
           return {
               ...user,
               token: generateJwt({id: user.id})
           }

        } catch (error) {
            throw error
        }
    }
}

export default new AuthService();
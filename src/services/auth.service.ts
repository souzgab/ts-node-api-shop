import userRepository from "../models/repository/user.repository";
import bcrypt from 'bcrypt';
import { generateJwt, JWT } from "../utils/security/jwt-security";
import { Credentials } from "../models/interfaces/user.interface";

export class AuthService {

    authenticate = async (credentials: Credentials): Promise<JWT> => {
        try {
           const user = await userRepository.findOne(credentials.email) 

           if(!user || user === undefined) throw "Usuário não encontrado!"

           const isValidPassword = await bcrypt.compare(credentials.password, user.password)

           if(!isValidPassword) throw "Senha difere da senha já cadastrada"

           user.updatedAt = new Date();
           await userRepository.update(user);

           return { user, token: generateJwt({id: user.id}) }

        } catch (error) {
            throw error
        }
    }
}

export default new AuthService();
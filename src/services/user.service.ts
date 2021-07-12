import userValidator from './../utils/validator/user.validator';
import { User } from './../models/bussiness/user.model';
import userRepository from '../models/repository/user.repository';



export class UserService {

    create = async (user: User) : Promise<User> => {
        try {
            if (!userValidator.validUser(user)) {
                throw new Error(`Error: Usuário Inválido, por favor preencha todos os campos`);
            }
            return await userRepository.create(user)
        } catch (error) {
            throw new Error(`Error: Create User API, describe: ${error}`);
        }
    }

}

export default new UserService()
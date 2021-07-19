import userValidator from './../utils/validator/user.validator';
import { User } from './../models/bussiness/user.model';
import userRepository from '../models/repository/user.repository';
import { UserWithoutPassword } from '../models/interfaces/user.interface';

export class UserService {

    create = async (user: User) : Promise<User> => {
        if (!userValidator.validUser(user)) {
            throw `Usuário Inválido, por favor preencha todos os campos`
        }
        return await userRepository.create(user)
    }

    findById = async (id: string): Promise<User | undefined> => {
        return await userRepository.findById(id)
    }

    getAll = async (paginateSize: number): Promise<UserWithoutPassword[]> => {
        const users = await userRepository.getAll(paginateSize)
        return users.map((user: UserWithoutPassword) => {
            delete user.password
            return user
        })
    }

    update = async (user: User): Promise<User | undefined> => {
        return await userRepository.update(user)
    }

}

export default new UserService()
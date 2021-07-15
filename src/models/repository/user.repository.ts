import { ObjectID as ObjectIDType, getConnection} from 'typeorm'
import { User } from "../bussiness/user.model"


export class UserRepository {

    create = async (user: User): Promise<User> => {
        if(await getConnection().getRepository(User).findOne(user)) throw "Usuário ja existe!"

        const userToBeSaved = getConnection().getRepository(User).create(user);

        return await getConnection()
        .getRepository(User)
        .save(userToBeSaved)
    }

    findById = async (idUser: string): Promise<User | undefined> => {
        const user = await getConnection()
        .getRepository(User)
        .findOne({ where: { 
            id: idUser
        }})
        return user
    }

    findOne = async (email: string): Promise<User | undefined> => {
        return await getConnection()
        .getRepository(User)
        .findOne({
            where: {
                email: email
            }
        })
    }

    update = async (user: User): Promise<User> => {
        return await getConnection()
        .getRepository(User)
        .save(user)
    }

    getAll = async (paginateSize: number): Promise<User[]> => {
        return await getConnection()
        .getRepository(User)
        .find({
            take: 10,
            skip: paginateSize
        })
    }
}

export default new UserRepository()
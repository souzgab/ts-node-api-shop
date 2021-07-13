
import { ObjectID } from 'mongodb';
import { ObjectID as ObjectIDType, getConnection} from 'typeorm'
import { User } from "../bussiness/user.model"


export class UserRepository {

    create = async (user: User): Promise<User> => {
        try {
            if(await getConnection().getRepository(User).findOne(user)) throw new Error("Usuário ja existe!")

            const userToBeSaved = getConnection().getRepository(User).create(user);

            return await getConnection()
            .getRepository(User)
            .save(userToBeSaved).catch((e) => {throw new Error(e)})
        } catch (error) {
            throw new Error(`Error: ${error}, error: userRepo`)
        }
    }

    findById = async (idUser: string): Promise<User | undefined> => {
        try {
            const user = await getConnection()
            .getRepository(User)
            .findOne({ where: { 
              id: idUser
            }}).catch((e) => {throw new Error(e)})
            return user
        } catch (error) {
            throw new Error(`Error: ${error}, error: userRepo`)
        }
    }

    findOne = async (email: string): Promise<User | undefined> => {
        try {
            return await getConnection()
            .getRepository(User)
            .findOne({
                where: {
                    email: email
                }
            }).catch((e) => {throw new Error(e)})
        } catch (error) {
            throw new Error(`Error: ${error}, error: userRepo`)
        }
    }

    update = async (user: User): Promise<User> => {
        try {
            return await getConnection()
            .getRepository(User)
            .save(user).catch((e) => {throw new Error(e)})
        } catch (error) {
            throw new Error(`Error: ${error}, error: userRepo`)
        }
    }
}

export default new UserRepository()
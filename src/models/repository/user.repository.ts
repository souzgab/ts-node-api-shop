import { getConnection } from "typeorm"
import { User } from "../bussiness/user.model"


export class UserRepository {

    create = async (user: User): Promise<User> => {
        return await getConnection()
        .getRepository(User)
        .save(user)
    }
}

export default new UserRepository()
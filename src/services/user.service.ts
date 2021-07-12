import userValidator from './../utils/validator/user.validator';
import { User } from './../models/bussiness/user.model';



export class UserService {

    create = async (user: User) : Promise<void> => {
        try {
            if (userValidator.validUser(user)) {
                return await userRepository.create(user)
            }
        } catch (error) {
            throw new Error(`Error: Create User API, describe: ${error}`);
        }
    }

}

export default new UserService()
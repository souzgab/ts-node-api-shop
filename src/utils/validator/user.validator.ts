import { User } from "../../models/bussiness/user.model";

export class UserValidator {

    validUser = (user: User): boolean => {
        for (const key in user) {
            if (!user.hasOwnProperty(key)) {
                return false
            }
        }
        return true
    }
}

export default new UserValidator()
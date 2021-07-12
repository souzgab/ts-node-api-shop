import { Request, Response } from 'express'
import { User } from '../../models/bussiness/user.model';
import userService from '../../services/user.service';

export class UserController {

    createUser = async (req: Request, res: Response): Promise<void> => {
        try {
            if (!req.body) throw new Error("Campos inválidos ou inexistentes");
            const user = req.body as User;
            const result = await userService.create(user)
            return res.status(201).json(result).end()
        } catch (error) {
            res.status(500).json({error: error, message: 'Não foi possivel cadastrar usuário'}).end()
        }
    }

}

export default new UserController();
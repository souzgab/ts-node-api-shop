import { Request, Response } from 'express'
import { User } from '../../models/bussiness/user.model';
import userService from '../../services/user.service';
import { validateJwtProduct } from '../../utils/security/jwt-security';

export class UserController {

    createUser = async (req: Request, res: Response): Promise<void> => {
        try {
            if (!req.body) throw "Campos inválidos ou inexistentes"
            const user = req.body as User;
            const result = await userService.create(user)
            return res.status(201).json(result).end()
        } catch (error: any) {
            if (error.code === 11000) error = "Duplicated Key"
            res.status(500).json({error: error, message: 'Não foi possivel cadastrar usuário'}).end()
        }
    }

    getById = async (req: Request, res: Response): Promise<void> => {
        try {
            if (!req.params.id || !req.headers.authorization) throw "Campos inválidos ou inexistentes"
            await validateJwtProduct(req.headers.authorization);
            const result = await userService.findById(req.params.id)
            res.status(201).json(result ? result : { message: "Não existem usuários com o id indicado." }).end()
        } catch (error) {
            res.status(500).json({error: error, message: "Não foi possivel recuperar o produto"}).end()  
        }
    }

    getAll = async (req: Request, res: Response): Promise<void> => {
        try {
            if (!req.headers.authorization) throw "Usuário não autenticado"
            const {size} = req.query
            return res.status(200).json(await userService.getAll(Number(size))).end()
        } catch (error) {
            res.status(500).json({error: error, message: 'Não foi possivel cadastrar usuário'}).end()
        }
    }

}

export default new UserController();
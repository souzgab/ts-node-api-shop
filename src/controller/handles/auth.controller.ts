import { Request, Response } from 'express';
import { Credentials } from "../../models/interfaces/user.interface"
import authService from "../../services/auth.service"

export class AuthController {

    authenticate = async (req: Request, res: Response): Promise<void> => {
        try {
            if (!req.body) throw new Error("Campos inválidos ou inexistentes");
            const credentials = req.body as Credentials
            const result = await authService.authenticate(credentials)
            res.status(200).json(result).end()
        } catch (error) {
            res.status(400).json(error).end()
        }
    }
}

export default new AuthController();
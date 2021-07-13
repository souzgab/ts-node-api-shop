import { Product } from './../../models/bussiness/product.model';
import { Request, Response } from 'express';
import productService from '../../services/product.service';
import { validateJwt } from '../../utils/security/jwt-security';


export class ProductController {

    create = async (req: Request, res: Response): Promise<void> => {
        try {
            if (!req.body || !req.headers.authorization) throw new Error("Campos inválidos ou inexistentes");
            await validateJwt(req.headers.authorization);
            const product = req.body as Product
            const result = await productService.create(product)
            res.status(201).json(result).end()
        } catch (error) {
            res.status(500).json({error: error, message: "Não foi possivel cadastrar o produto"}).end()  
        }
    }
}

export default new ProductController();
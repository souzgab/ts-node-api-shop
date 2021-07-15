import { Product } from './../../models/bussiness/product.model';
import { Request, Response } from 'express';
import productService from '../../services/product.service';
import { validateJwtProduct } from '../../utils/security/jwt-security';


export class ProductController {

    create = async (req: Request, res: Response): Promise<void> => {
        try {
            if (!req.body || !req.headers.authorization) throw "Campos inválidos ou inexistentes"
            await validateJwtProduct(req.headers.authorization);
            const product = req.body as Product
            const result = await productService.create(product)
            res.status(201).json(result).end()
        } catch (error) {
            res.status(500).json({error: error, message: "Não foi possivel cadastrar o produto"}).end()  
        }
    }

    getById = async (req: Request, res: Response): Promise<void> => {
        try {
            if (!req.params.id || !req.headers.authorization) throw "Campos inválidos ou inexistentes"
            await validateJwtProduct(req.headers.authorization);
            const result = await productService.getById(req.params.id)
            res.status(201).json(result ? result : { message: "Não existem produtos com o id indicado." }).end()
        } catch (error) {
            res.status(500).json({error: error, message: "Não foi possivel recuperar o produto"}).end()  
        }
    }

    getAll = async (req: Request, res: Response): Promise<void> => {
        try {
            if (!req.headers.authorization) throw "Campos inválidos ou inexistentes"
            await validateJwtProduct(req.headers.authorization);
            const { size } = req.query
            const result = await productService.getAll(Number(size))
            res.status(201).json(result ? result : { message: "Não existem produtos com o id indicado." }).end()
        } catch (error) {
            res.status(500).json({error: error, message: "Não foi possivel recuperar o produto"}).end()  
        }
    }
}

export default new ProductController();
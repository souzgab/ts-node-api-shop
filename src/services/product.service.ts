import { JwtPayload } from 'jsonwebtoken';
import productRepository from '../models/repository/product.repository';
import productValidator from '../utils/validator/product.validator';
import { Product } from './../models/bussiness/product.model';

export class ProductService {

    create = async (product: Product): Promise<Product> => {
        try {
            if (!productValidator.productValidator(product)) throw new Error("Erro ao criar Produto, preencha todos os campos");
            return await productRepository.create(product)
        } catch (error) {
            throw `Error: Create Product API, describe: ${error}`
        }
    }
}

export default new ProductService();
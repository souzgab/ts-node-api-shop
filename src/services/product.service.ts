import productRepository from '../models/repository/product.repository';
import productValidator from '../utils/validator/product.validator';
import { Product } from './../models/bussiness/product.model';

export class ProductService {

    create = async (product: Product): Promise<Product> => {
        if (!productValidator.productValidator(product)) throw "Erro ao criar Produto, preencha todos os campos"
        return await productRepository.create(product)
    }

    getById = async (id: string): Promise<Product | undefined> => {
        return await productRepository.findById(id)
    }

    getAll = async (paginateSize: number) : Promise<Product[]> => {
        return await productRepository.getAll(paginateSize)
    }
}

export default new ProductService();
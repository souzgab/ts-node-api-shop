import { getConnection } from 'typeorm';
import { Product } from './../bussiness/product.model';


export class ProductRepository {

    create = async (product: Product): Promise<Product> => {
        
        const productToBeSaved = getConnection().getRepository(Product).create(product)

        return await getConnection()
        .getRepository(Product)
        .save(productToBeSaved)
    }

    findById = async (id: string): Promise<Product | undefined> => {
        return await getConnection().getRepository(Product).findOne({
            where: {
                id: id
            }
        })
    }

    getAll = async (paginateSize: number): Promise<Product[]> => {
        return await getConnection()
        .getRepository(Product)
        .find({
            skip: paginateSize,
            take: 10
        })
    }
}

export default new ProductRepository();
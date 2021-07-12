import { getConnection } from 'typeorm';
import { Product } from './../bussiness/product.model';


export class ProductRepository {

    create = async (product: Product): Promise<Product> => {
        return await getConnection()
        .getRepository(Product)
        .save(product)
    }
}

export default new ProductRepository();
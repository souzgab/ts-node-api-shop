import { getConnection } from 'typeorm';
import { Product } from './../bussiness/product.model';


export class ProductRepository {

    create = async (product: Product): Promise<Product> => {

        const productToBeSaved = getConnection().getRepository(Product).create(product)

        return await getConnection()
        .getRepository(Product)
        .save(productToBeSaved)
    }
}

export default new ProductRepository();
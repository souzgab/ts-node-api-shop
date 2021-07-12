import { Product } from './../../models/bussiness/product.model';

export class ProductValidator {

    productValidator = (product: Product): boolean => {
        for(const key in product) {
            if (!product.hasOwnProperty(key)) return false;
        }
        return true;
    }

}

export default new ProductValidator();
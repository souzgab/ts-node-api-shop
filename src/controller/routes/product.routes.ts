import {Router} from 'express'
import productController from '../handles/product.controller'

const productRouter = Router()

productRouter.post("/product", productController.create)

export {productRouter}
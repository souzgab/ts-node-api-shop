import { Router } from 'express'
import productController from '../handles/product.controller'

const productRouter = Router()

productRouter.post("/product", productController.create)
productRouter.get("/product/:id", productController.getById)
productRouter.get("product", productController.getAll)

export { productRouter }
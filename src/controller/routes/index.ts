import { Express } from 'express'
import { productRouter } from './product.routes'
import { userRouter } from './user.routes'

export const setupRoutes = (app: Express): void => {
    app.use(userRouter)
    app.use(productRouter)
}
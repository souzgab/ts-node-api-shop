import { User } from './../models/bussiness/user.model';
import { Product } from '../models/bussiness/product.model';
import { createConnection } from 'typeorm'
import dotenv from 'dotenv'
dotenv.config()

createConnection({
    type: 'mongodb',
    url: process.env.DB_URL,
    ssl: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    entities: [
        User,
        Product
    ],
    logging: 'all',
    logger: 'simple-console',
    synchronize: false
}).then((conn) => {
    console.log(`is Successfully connected to DB? => ${conn.isConnected}`)
}).catch(e => {throw new Error(e)})
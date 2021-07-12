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

    ],
    logging: 'all',
    logger: 'simple-console'
}).then((conn) => {
    console.log(`is Successfully connected to DB? => ${conn.isConnected}`)
}).catch(e => {throw new Error(e)})
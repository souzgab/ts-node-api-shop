import {Request, Response, NextFunction} from 'express'

export const requestLogger = (req: Request, res: Response, next: NextFunction) => {
    res.on('error', (e) => {
        console.log(e)
    })
    const start = new Date().getTime();
    res.on('finish', () => {
        const elapsed = new Date().getTime() - start;
        console.info(`HTTP Log => Method:${req.method}, Path:${req.path}, Status:${res.statusCode} Exec:${elapsed}ms`)
    })
    next();
}

import { Request, Response } from 'express';
import { ILogger } from '../logging/i-logger';

const errorLoggingMiddleware = (logger: ILogger) => {
    return (err: any, req: Request, res: Response) => {
        logger.error(`Request Error ${req.method} ${req.url}`, {body: req.body, error: err});
        res.status(500).send('Internal Server Error');
    }
}

export default errorLoggingMiddleware;
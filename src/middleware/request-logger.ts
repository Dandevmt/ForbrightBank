import { Request, Response, NextFunction } from 'express';
import { ILogger } from '../logging/i-logger';

const requestLoggingMiddleware = (logger: ILogger) => {
    return (req: Request, res: Response, next: NextFunction) => {
        logger.info(`Incoming request: ${req.method} ${req.url}`, req.body);
        next();
    }
}

export default requestLoggingMiddleware;
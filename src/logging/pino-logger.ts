import pino from 'pino';
import { ILogger } from './i-logger';


export class PinoLogger implements ILogger {
    private readonly logger = pino();
    
    info(message: string, data: object): void {
        this.logger.info(data, message);
    }

    warn(message: string, data: object): void {
        this.logger.warn(data, message);
    }   

    error(message: string, data: object): void {
        this.logger.error(data, message);
    }
}
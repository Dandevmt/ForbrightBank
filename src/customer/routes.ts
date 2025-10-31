import { Request, Response, Router } from 'express';
import { ILogger } from '../logging/i-logger';
import { PinoLogger } from '../logging/pino-logger';
import { IStorage } from '../storage/i-storage';
import { S3Storage } from '../storage/s3-storage';
import { OnboardCustomerCommand } from './onboard-customer/onboard-customer-command';
import { OnboardCustomerHandler } from './onboard-customer/onboard-customer-handler';

const router = Router();
const logger: ILogger = new PinoLogger();
const storage: IStorage = new S3Storage(logger);

router.post('/onboarding', async (req: Request, res: Response) => {
    
    const command: OnboardCustomerCommand = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
    };

    const handler = new OnboardCustomerHandler(logger, storage);

    const result = await handler.handle(command)

    res.status(200).send(result);
});

export default router;
import express from 'express';
import { ILogger } from './logging/i-logger';
import { PinoLogger } from './logging/pino-logger';
import requestLoggingMiddleware from './middleware/request-logger';
import errorLoggingMiddleware from './middleware/error-logger';
import customerRoutes from './customer/routes';
import s3Routes from './s3-api/routes';
import config from './config/config';

const app = express();
const logger: ILogger = new PinoLogger();

app.use(express.json());

// Log All Incoming Requests
app.use(requestLoggingMiddleware(logger));

// Register Routes
app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

app.use('/customer', customerRoutes);
app.use('/s3', s3Routes)

// Log Errors
app.use(errorLoggingMiddleware(logger));

app.listen(config.port, () => {
    logger.info(`Server started on port ${config.port}`);
})
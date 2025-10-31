import dotenv from 'dotenv';

dotenv.config();

interface Config {
    port: number;
    nodeEnv: string;
    s3Endpoint: string;
}

const config: Config = {
    port: Number(process.env.PORT) || 3000,
    nodeEnv: process.env.NODE_ENV || 'development',
    s3Endpoint: process.env.S3_ENDPOINT || 'http://localhost:3000/s3',
}

export default config;
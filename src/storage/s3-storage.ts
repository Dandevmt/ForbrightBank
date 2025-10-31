import { ILogger } from "../logging/i-logger";
import { Customer } from "./customer";
import { IStorage } from "./i-storage";
import { Guid } from 'guid-typescript';
import config from "../config/config";

export class S3Storage implements IStorage {

    constructor(private logger: ILogger) {
    }

    async saveCustomer(customer: Customer): Promise<string> {
        this.logger.info('Saving customer to S3', customer);
        customer.Id = Guid.create().toString();

        const response = await fetch(`${config.s3Endpoint}/store`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customer)
        });

        return customer.Id;
    }           
}
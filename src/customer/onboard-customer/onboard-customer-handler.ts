import { ILogger } from "../../logging/i-logger";
import { Customer } from "../../storage/customer";
import { IStorage } from "../../storage/i-storage";
import { OnboardCustomerCommand } from "./onboard-customer-command";
import { OnboardCustomerRestult } from "./onboard-customer-result";

export class OnboardCustomerHandler {
   
    constructor(private logger: ILogger, private store: IStorage) {

    }

    async handle(command: OnboardCustomerCommand): Promise<OnboardCustomerRestult> {
        this.logger.info('Onboarding customer', command);

        const validationErrors = this.validate(command);
        if (validationErrors.length > 0) {
            this.logger.warn('Validation errors during customer onboarding', { Errors: validationErrors });
            return {
                CustomerId: '',
                Errors: validationErrors
            }
        }

        const customer: Customer = {
            FirstName: command.firstName,
            LastName: command.lastName,
            Email: command.email,
            Id: '',
            DateCreated: new Date()
        }
        const customerId = await this.store.saveCustomer(customer);
        this.logger.info('Customer onboarded', { CustomerId: customerId });

        return {
            CustomerId: customerId,
            Errors: []
        }
    }

    private validate(command: OnboardCustomerCommand): string[] {
        const errors: string[] = [];
        if (!command.firstName) {
            errors.push('FirstName is required');
        }     
        if (!command.lastName) {
            errors.push('LastName is required');
        }
        if (!command.email) {
            errors.push('Email is required');
        }
        return errors;
    }

}